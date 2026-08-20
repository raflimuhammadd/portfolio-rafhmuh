export interface ParsedSection {
    title: string;
    content: string;
    intro?: string;
    bullets: string[];
    hasBullets: boolean;
    hasIntro: boolean;
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
  // Regex to extract section
  const pattern = new RegExp(`## ${sectionName}([\\s\\S]*?)(?=##|$)`);
  const match = markdownBody.match(pattern);

  if (!match) return null;

const rawContent = match[1].trim();
const lines = rawContent.split('\n').filter(line => line.trim());

let introLines: string[] = [];
let bulletLines: string[] = [];
let foundFirstBullet = false;

  lines.forEach(line => {
    if (line.trim().startsWith('-')) {
        foundFirstBullet = true;
        bulletLines.push(line.replace(/^-\s*/, '').trim());
    } else if (line.trim()) {
        if (foundFirstBullet) {
        } else {
            introLines.push(line);
        }
    }
  });

  return {
    title: sectionName,
    content: introLines.join('\n') || '',
    intro: introLines.length > 0 ? introLines.join('\n') : undefined,
    bullets: bulletLines,
    hasBullets: bulletLines.length > 0,
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