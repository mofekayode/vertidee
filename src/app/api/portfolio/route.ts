import { NextRequest, NextResponse } from 'next/server';
import { getPortfolioItems, createPortfolioItem, setPortfolioItems, PortfolioItem } from '@/lib/portfolio-store';

export async function GET() {
  const items = await getPortfolioItems();
  return NextResponse.json(items);
}

export async function POST(request: NextRequest) {
  const auth = request.headers.get('authorization');
  if (auth !== `Bearer ${process.env.ADMIN_PASSWORD || 'vertidee-admin-2026'}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();

  // Bulk seed endpoint
  if (body.action === 'seed' && Array.isArray(body.items)) {
    const now = new Date().toISOString();
    const seeded: PortfolioItem[] = body.items.map((item: { title: string; category: string; img: string }, i: number) => ({
      id: (Date.now() + i).toString(),
      title: item.title,
      category: item.category,
      img: item.img,
      order: i + 1,
      createdAt: now,
      updatedAt: now,
    }));
    await setPortfolioItems(seeded);
    return NextResponse.json(seeded, { status: 201 });
  }

  const { title, category, img, order } = body;

  if (!title || !category) {
    return NextResponse.json({ error: 'Title and category are required' }, { status: 400 });
  }

  const item = await createPortfolioItem({
    title,
    category,
    img: img || '',
    order: order || 999,
  });

  return NextResponse.json(item, { status: 201 });
}
