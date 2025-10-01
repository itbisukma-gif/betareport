
'use server';
/**
 * @fileOverview A flow that analyzes a social media post URL and extracts details.
 *
 * - getPostDetails - A function that handles the post analysis process.
 * - GetPostDetailsInput - The input type for the getPostDetails function.
 * - GetPostDetailsOutput - The return type for the getPostDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const GetPostDetailsInputSchema = z.object({
  postUrl: z.string().describe('The URL of the social media post to analyze.'),
});
export type GetPostDetailsInput = z.infer<typeof GetPostDetailsInputSchema>;

const GetPostDetailsOutputSchema = z.object({
  caption: z
    .string()
    .describe('A short, engaging summary of the content at the URL. Should be like a social media caption.'),
  imageHint: z
    .string()
    .describe('Two or three keywords describing the visual content. This will be used to find a stock photo.'),
});
export type GetPostDetailsOutput = z.infer<typeof GetPostDetailsOutputSchema>;

const getPostDetailsPrompt = ai.definePrompt({
    name: 'getPostDetailsPrompt',
    input: { schema: GetPostDetailsInputSchema },
    output: { schema: GetPostDetailsOutputSchema },
    prompt: `Analyze the content at the following URL and provide a summary.

URL: {{{postUrl}}}

Based on the content, generate a social media-style caption and two or three keywords that describe the visual elements of the content.
`,
});

const getPostDetailsFlow = ai.defineFlow(
  {
    name: 'getPostDetailsFlow',
    inputSchema: GetPostDetailsInputSchema,
    outputSchema: GetPostDetailsOutputSchema,
  },
  async (input) => {
    const {output} = await getPostDetailsPrompt(input);
    return output!;
  }
);


export async function getPostDetails(
  input: GetPostDetailsInput
): Promise<GetPostDetailsOutput> {
  return getPostDetailsFlow(input);
}
