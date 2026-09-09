import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

// Initialize markdown parser
const md = new MarkdownIt({
  html: false,        // Disable raw HTML for security
  breaks: true,       // Convert \n to <br>
  linkify: false,     // No auto-linking
  typographer: false, // No smart quotes
});

/**
 * Parse markdown and sanitize output to prevent XSS
 * Falls back to escaped plain text if parsing fails
 */
export function sanitizeAndRenderMarkdown(text: string): string {
  try {
    // 1. Parse markdown to HTML
    const html = md.render(text);
    
    // 2. Sanitize HTML
    const sanitized = sanitizeHtml(html, {
      allowedTags: [
        'b', 'i', 'em', 'strong', 'p', 'br',
        'h3', 'h4', 'h5',
        'ul', 'ol', 'li',
        'table', 'thead', 'tbody', 'tr', 'th', 'td',
        'code', 'pre',
        'details', 'summary'
      ],
      allowedAttributes: {
        'details': ['class', 'open'],
        '*': ['class']
      },
      allowedClasses: {
        'details': ['collapsible-table']
      }
    });
    
    // 3. Wrap large tables in collapsible details (> 3 rows)
    return wrapLargeTables(sanitized);
    
  } catch (error) {
    console.error('Markdown parsing failed:', error);
    
    // Fallback: escape HTML and preserve line breaks
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/\n/g, '<br>');
  }
}

/**
 * Auto-wrap tables with > 3 rows in collapsible <details>
 * Default: open (per user request)
 */
function wrapLargeTables(html: string): string {
  return html.replace(
    /<table>([\s\S]*?)<\/table>/g,
    (match, tableContent) => {
      // Count table rows (excluding header)
      const rowMatches = tableContent.match(/<tr>/g);
      const rowCount = rowMatches ? rowMatches.length : 0;
      
      if (rowCount > 3) {
        const dataRows = rowCount - 1; // Exclude header row
        return `<details class="collapsible-table" open>
          <summary>View full table (${dataRows} ${dataRows === 1 ? 'row' : 'rows'})</summary>
          ${match}
        </details>`;
      }
      
      return match;
    }
  );
}

/**
 * Check if user question is portfolio-related
 * Blocks: math, general knowledge, off-topic questions
 */
export function isPortfolioQuestion(text: string): boolean {
  const lowerText = text.toLowerCase().trim();
  
  // Block obvious math questions
  if (/^[\d\s\+\-\*\/\(\)=\.]+$/.test(lowerText)) {
    return false;
  }
  
  if (/^(what is|calculate|solve|compute)\s+[\d\+\-\*\/\(\)]+/i.test(lowerText)) {
    return false;
  }
  
  // Portfolio-related keywords
  const portfolioKeywords = [
    // Personal
    'rafli', 'portfolio', 'about', 'bio', 'background',
    
    // Projects & work
    'project', 'work', 'experience', 'skill', 'technology', 'tech stack',
    'built', 'developed', 'created', 'implement',
    
    // Specific technologies
    'cloud', 'aws', 'gcp', 'azure', 'docker', 'kubernetes', 'terraform',
    'react', 'next', 'astro', 'node', 'express', 'typescript', 'javascript',
    'python', 'flask', 'fastapi', 'postgres', 'mysql', 'mongodb', 'redis',
    'tailwind', 'css', 'html',
    
    // Specific projects (from portfolio)
    'apd', 'detection', 'safety', 'calorie', 'diet', 'tracking',
    'elegante', 'perfume', 'fragrance', 'form', 'enterprise',
    'port', 'dashboard', 'map', 'streaming', 'netflix', 'chatbot',
    
    // Contact & links
    'contact', 'email', 'reach', 'hire', 'github', 'linkedin', 'demo', 'live',
    
    // General inquiry patterns
    'tell me', 'show me', 'what are', 'how did', 'can you explain',
    'recent', 'latest', 'proud', 'best', 'favorite'
  ];
  
  return portfolioKeywords.some(keyword => lowerText.includes(keyword));
}

/**
 * Get random suggestion for non-portfolio questions
 */
export function getSuggestionForNonPortfolio(): string {
  const suggestions = [
    "What technologies do you specialize in?",
    "Tell me about your cloud experience",
    "What are your recent projects?",
    "Which project are you most proud of?",
    "How can I contact Rafli?"
  ];
  
  return suggestions[Math.floor(Math.random() * suggestions.length)];
}
