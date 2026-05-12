/*
|-----------------------------------------
| setting up Route for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2026
|-----------------------------------------
*/

import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

import connectDB from '@/app/api/utils/mongoose';

import { handleRateLimit } from '../utils/rate-limit';
import { getAllPaths, addPath, deletePath } from './controller';

export async function GET(req: Request) {
  const rateLimitResponse = handleRateLimit(req);
  if (rateLimitResponse) return rateLimitResponse;
  try {
    await connectDB();
    const paths = await getAllPaths();
    return NextResponse.json({ paths });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch paths' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const rateLimitResponse = handleRateLimit(req);
  if (rateLimitResponse) return rateLimitResponse;
  try {
    await connectDB();
    const body = await req.json();
    const { path } = body;
    if (!path || typeof path !== 'string') {
      return NextResponse.json({ error: 'Valid path is required' }, { status: 400 });
    }
    const created = await addPath(path.trim());
    return NextResponse.json({ path: created }, { status: 201 });
  } catch (error: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((error as any)?.code === 11000) {
      return NextResponse.json({ error: 'Path already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to add path' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const rateLimitResponse = handleRateLimit(req);
  if (rateLimitResponse) return rateLimitResponse;
  try {
    await connectDB();
    const body = await req.json();
    const { id } = body;
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    const deleted = await deletePath(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Path not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete path' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const rateLimitResponse = handleRateLimit(req);
  if (rateLimitResponse) return rateLimitResponse;
  try {
    const body = await req.json();
    const { path } = body;
    if (!path || typeof path !== 'string') {
      return NextResponse.json({ error: 'Valid path is required' }, { status: 400 });
    }
    revalidatePath(path.trim());
    return NextResponse.json({ message: `Revalidated: ${path}`, revalidated: true });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Failed to revalidate', revalidated: false }, { status: 500 });
  }
}
