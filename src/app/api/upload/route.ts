import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';

export async function POST(request: NextRequest) {
  const auth = request.headers.get('authorization');
  if (auth !== `Bearer ${process.env.ADMIN_PASSWORD || 'vertidee-admin-2026'}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get('file') as File;
  const folder = (formData.get('folder') as string) || 'team';

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const blob = await put(`${folder}/${file.name}`, file, {
    access: 'public',
    addRandomSuffix: true,
  });

  return NextResponse.json({ url: blob.url });
}
