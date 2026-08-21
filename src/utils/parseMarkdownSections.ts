export interface ParsedSection {
    title: string;
    content: string;
    intro?: string;
    bullets: string[];
    nestedBullets?: NestedBulletItem[];
    hasBullets: boolean;
    hasIntro: boolean;
}

export interface NestedBulletItem {
    title: string;
    items: string[];
}

export interface SectionConfig {
    key: string;
    title: string;
    heading: string;
    defaultOpen: boolean;
    type: 'text' | 'text-with-bullets' | 'bullets' | 'outcomes';
}

export const SECTION_CONFIG: SectionConfig[] = [
    {
    key: 'overview',
    title: 'Overview',
    heading: 'Overview',
    defaultOpen: true,
    type: 'text'
  },
  {
    key: 'challenge',
    title: 'The Challenge',
    heading: 'The Challenge',
    defaultOpen: false,
    type: 'text-with-bullets'
  },
  {
    key: 'features',
    title: 'Key Features',
    heading: 'Key Features',
    defaultOpen: false,
    type: 'bullets'
  },
  {
    key: 'solution',
    title: 'The Solution',
    heading: 'The Solution',
    defaultOpen: false,
    type: 'bullets'
  },
  {
    key: 'outcomes',
    title: 'Outcomes & Impact',
    heading: 'Outcomes & Impact',
    defaultOpen: false,
    type: 'outcomes'
  },
  {
    key: 'lessons',
    title: 'Lessons Learned',
    heading: 'Lessons Learned',
    defaultOpen: false,
    type: 'bullets'
  }
];

export const parseSection = (
  sectionName: string,
  markdownBody: string
): ParsedSection | null => {
  const pattern = new RegExp(`## ${sectionName}([\\s\\S]*?)(?=##|$)`);
  const match = markdownBody.match(pattern);

  if (!match) return null;

  const rawContent = match[1].trim();
  const lines = rawContent.split('\n').filter(line => line.trim());

  const hasNestedStructure = lines.some(line => 
    line.trim().startsWith('-') && line.search(/\S/) === 2
  );

  let introLines: string[] = [];
  let bulletLines: string[] = [];
  let nestedBullets: NestedBulletItem[] = [];
  let foundFirstBullet = false;

  if (hasNestedStructure) {
    let currentNestedTitle: string | null = null;
    let currentNestedItems: string[] = [];

    lines.forEach(line => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('-')) {
        const indent = line.search(/\S/);
        const content = trimmedLine.replace(/^-\s*/, '').trim();
        
        if (indent === 0) {
          if (currentNestedTitle) {
            nestedBullets.push({ title: currentNestedTitle, items: currentNestedItems });
          }
          
          foundFirstBullet = true;
          currentNestedTitle = content;
          currentNestedItems = [];
        } else if (indent === 2 && currentNestedTitle) {
          currentNestedItems.push(content);
        }
      } else if (trimmedLine) {
        if (!foundFirstBullet) {
          introLines.push(line);
        }
      }
    });
    
    if (currentNestedTitle) {
      nestedBullets.push({ title: currentNestedTitle, items: currentNestedItems });
    }
  } else {
    lines.forEach(line => {
      if (line.trim().startsWith('-')) {
        foundFirstBullet = true;
        bulletLines.push(line.replace(/^-\s*/, '').trim());
      } else if (line.trim()) {
        if (!foundFirstBullet) {
          introLines.push(line);
        }
      }
    });
  }

  return {
    title: sectionName,
    content: introLines.join('\n') || '',
    intro: introLines.length > 0 ? introLines.join('\n') : undefined,
    bullets: bulletLines,
    nestedBullets: nestedBullets.length > 0 ? nestedBullets : undefined,
    hasBullets: bulletLines.length > 0 || nestedBullets.length > 0,
    hasIntro: introLines.length > 0,
  };
};


export interface OutcomeItem {
  value?: string;
  label?: string;
  text?: string;
  isStat: boolean;
}

export const parseOutcomes = (bullets: string[]): OutcomeItem[] => {
  return bullets.map((item: string) => {
    const match = item.match(
      /(\d+(?:\.\d+)?(?:[,\d]*)?%?(?:\s*(?:ms|s|FPS|GB|TB|x|menit|minutes?))?)/i
    );

    if (match) {
      const value = match[0].trim();
      const label = item.replace(value, '').trim();
      return { value, label, isStat: true };
    }

    return { text: item, isStat: false };
  });
};