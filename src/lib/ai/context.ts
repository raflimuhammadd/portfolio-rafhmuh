import { getCollection } from 'astro:content';
import { siteData } from '../../data/site';
import { skills } from '../../data/skills';
import type { PortfolioContext } from '../types/chat';

export async function buildPortfolioContext(): Promise<string> {
  // 1. Load projects from content collections
  const projects = await getCollection('projects');
  
  // 2. Format projects data
  const projectsInfo = projects.map(project => ({
    title: project.data.title,
    description: project.data.description,
    techStack: project.data.techStack,
    category: project.data.category,
    year: project.data.year,
    links: project.data.links
  }));

  // 3. Build context object
  const context: PortfolioContext = {
    bio: siteData.description,
    skills: skills,
    projects: projectsInfo,
    contact: siteData.contact
  };

  // 4. Convert to readable string for AI
  return formatContextForAI(context);
}

function formatContextForAI(context: PortfolioContext): string {
  return `
# Portfolio Context

## About
${context.bio}

## Skills
- Frontend: ${context.skills.frontend.join(', ')}
- Backend: ${context.skills.backend.join(', ')}
- Cloud: ${context.skills.cloud.join(', ')}
- Tools: ${context.skills.tools.join(', ')}

## Projects
${context.projects.map(p => `
### ${p.title} (${p.year})
Category: ${p.category}
Description: ${p.description}
Tech Stack: ${p.techStack.join(', ')}
${p.links?.github ? `GitHub: ${p.links.github}` : ''}
${p.links?.demo ? `Demo: ${p.links.demo}` : ''}
`).join('\n')}

## Contact
Email: ${context.contact.email}
Location: ${context.contact.location}
  `.trim();
}
