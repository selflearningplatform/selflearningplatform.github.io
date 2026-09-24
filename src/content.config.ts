import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const docs = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/docs' }),
  schema: z.object({
    tag: z.string(),
    endpoint: z.string(),
    copy: z.boolean().optional(),
  }),
});

export const collections = { docs };
