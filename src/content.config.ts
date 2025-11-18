import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    servings: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { recipes };
