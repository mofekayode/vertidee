import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  img: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

const KV_KEY = 'portfolio:items';

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const items = await redis.get<PortfolioItem[]>(KV_KEY);
  return items ?? [];
}

export async function getPortfolioItem(id: string): Promise<PortfolioItem | undefined> {
  const items = await getPortfolioItems();
  return items.find(i => i.id === id);
}

export async function createPortfolioItem(item: Omit<PortfolioItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<PortfolioItem> {
  const items = await getPortfolioItems();
  const newItem: PortfolioItem = {
    ...item,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  items.push(newItem);
  await redis.set(KV_KEY, items);
  return newItem;
}

export async function updatePortfolioItem(id: string, updates: Partial<Omit<PortfolioItem, 'id' | 'createdAt'>>): Promise<PortfolioItem | null> {
  const items = await getPortfolioItems();
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return null;

  items[index] = {
    ...items[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  await redis.set(KV_KEY, items);
  return items[index];
}

export async function deletePortfolioItem(id: string): Promise<boolean> {
  const items = await getPortfolioItems();
  const filtered = items.filter(i => i.id !== id);
  if (filtered.length === items.length) return false;
  await redis.set(KV_KEY, filtered);
  return true;
}

export async function setPortfolioItems(items: PortfolioItem[]): Promise<void> {
  await redis.set(KV_KEY, items);
}
