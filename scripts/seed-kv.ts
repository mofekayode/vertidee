import { Redis } from '@upstash/redis';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

async function seed() {
  const dataFile = path.join(process.cwd(), 'data', 'team.json');

  if (!fs.existsSync(dataFile)) {
    console.error('data/team.json not found');
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
  console.log(`Found ${data.length} team members in data/team.json`);

  await redis.set('team:members', data);
  console.log('Successfully seeded team:members into Upstash Redis');

  // Verify
  const stored = await redis.get('team:members');
  console.log(`Verified: ${(stored as unknown[]).length} members stored in Redis`);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
