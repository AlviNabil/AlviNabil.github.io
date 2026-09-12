import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const publications = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
    schema: z.object({
        title: z.string(),
        authors: z.array(z.string()),
        venue: z.string(),
        venueShort: z.string(),
        year: z.number(),
        location: z.string().optional(),
        type: z.enum(["conference", "journal", "preprint", "workshop"]),
        url: z.string().optional(),
        pdf: z.string().optional(),
        doi: z.string().optional(),
        pages: z.string().optional(),
        code: z.string().optional(),
        models: z.string().optional(),
        dataset: z.string().optional(),
        bibtex: z.string(),
        tags: z.array(z.string()).default([]),
    }),
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        blurb: z.string(),
        year: z.string(),
        role: z.string().optional(),
        tag: z.string().optional(),
        stack: z.array(z.string()).default([]),
        repo: z.string().optional(),
        paper: z.string().optional(),
        demo: z.string().optional(),
        cover: z.string().optional(),
        featured: z.boolean().default(false),
        order: z.number().default(99),
    }),
});

export const collections = { publications, projects };
