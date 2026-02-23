import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  const auth = request.headers.get('authorization');
  if (auth !== `Bearer ${process.env.ADMIN_PASSWORD || 'vertidee-admin-2026'}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Generate unique filename
  const ext = path.extname(file.name) || '.jpg';
  const filename = `team-${Date.now()}${ext}`;
  const uploadDir = path.join(process.cwd(), 'public', 'assets', 'img', 'team');

  // Ensure directory exists
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const filepath = path.join(uploadDir, filename);
  fs.writeFileSync(filepath, buffer);

  const publicUrl = `/assets/img/team/${filename}`;
  return NextResponse.json({ url: publicUrl });
}
