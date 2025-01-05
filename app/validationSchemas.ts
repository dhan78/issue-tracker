import { z } from "zod";

export const createIssueSchema = z.object({
    title: z.string().min(1, 'Title is required. Please enter...').max(255),
    description: z.string().min(1, 'Enter a longer description..!')
});
