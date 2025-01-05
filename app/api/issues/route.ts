import { NextRequest, NextResponse } from "next/server";
import {z } from 'zod';
import {prisma} from '@/prisma/client';

const createIssueSchema =  z.object({
    title: z.string().min(1, 'Title is required. Please enter...').max(255),
    description: z.string().min(1, 'Enter a longer description..!')
})
export async function POST (request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.format(), {status:400})
    const newIssue = prisma.issue.create(
        {
            data: {title: body.title, description: body.description}
            // console.log(data)
        });

    return NextResponse.json(newIssue, {status:201})

}