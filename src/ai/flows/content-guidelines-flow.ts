
'use server';
/**
 * @fileOverview A flow to generate content creation guidelines.
 *
 * - getContentGuidelines - A function that generates guidelines for content creation.
 * - ContentGuidelinesOutput - The return type for the getContentGuidelines function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ContentGuidelinesOutputSchema = z.object({
  hygieneStandards: z.string().describe('Detailed hygiene standards for a professional kitchen, focusing on food safety for a free nutritious meal program. Should be a bulleted or numbered list.'),
  contentRules: z.string().describe('Rules for filming video content inside the kitchen, focusing on what to do and what not to do. Should be a bulleted or numbered list.'),
});
export type ContentGuidelinesOutput = z.infer<typeof ContentGuidelinesOutputSchema>;

const prompt = ai.definePrompt({
  name: 'contentGuidelinesPrompt',
  model: 'gemini-1.5-flash',
  output: { schema: ContentGuidelinesOutputSchema },
  prompt: `You are a kitchen operations and social media manager for "MBG", a program that provides free nutritious meals.
Your task is to generate clear and concise guidelines for content creators filming in the kitchen.

Generate the following:
1.  **Hygiene Standards:** Create a list of essential hygiene rules for the "MBG Kitchen". These should be practical and easy to follow, ensuring food safety. Examples: hand washing, hair nets, clean uniforms, no jewelry.
2.  **Content Creation Rules:** Create a list of rules for filming. Focus on professionalism and respecting the kitchen's operations. Examples: don't interrupt staff, show clean areas only, get consent before filming people, focus on the positive aspects of the program.

Please provide the output in two distinct sections based on the output schema.
`,
});

export async function getContentGuidelines(): Promise<ContentGuidelinesOutput> {
    const { output } = await prompt();
    if (!output) {
        throw new Error("Failed to generate content guidelines.");
    }
    return output;
}
