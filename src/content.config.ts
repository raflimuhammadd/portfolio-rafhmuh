import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects'
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum(['web', 'cloud', 'api', 'ml', 'personal', 'academic', 'fun', 'team']),
    year: z.number(),
    featured: z.boolean().default(false),
    description: z.string(),
    image: z.string(),
    images: z.array(z.string()).default([]),
    techStack: z.array(z.string()),
    links: z.object({
      github: z.string().optional(),
      demo: z.string().optional(),
    }),
  }),
});

export const collections = { projects };
