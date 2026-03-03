import { NextRequest, NextResponse } from 'next/server';
import { getTeamMembers, createTeamMember } from '@/lib/team-store';

export async function GET() {
  const members = await getTeamMembers();
  return NextResponse.json(members);
}

export async function POST(request: NextRequest) {
  const auth = request.headers.get('authorization');
  if (auth !== `Bearer ${process.env.ADMIN_PASSWORD || 'vertidee-admin-2026'}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { name, designation, description, image, order } = body;

  if (!name || !designation) {
    return NextResponse.json({ error: 'Name and designation are required' }, { status: 400 });
  }

  const member = await createTeamMember({
    name,
    designation,
    description: description || '',
    image: image || '',
    order: order || 999,
  });

  return NextResponse.json(member, { status: 201 });
}
