import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  description: string;
  image: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

const KV_KEY = 'team:members';

export async function getTeamMembers(): Promise<TeamMember[]> {
  const members = await redis.get<TeamMember[]>(KV_KEY);
  return members ?? [];
}

export async function getTeamMember(id: string): Promise<TeamMember | undefined> {
  const members = await getTeamMembers();
  return members.find(m => m.id === id);
}

export async function createTeamMember(member: Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>): Promise<TeamMember> {
  const members = await getTeamMembers();
  const newMember: TeamMember = {
    ...member,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  members.push(newMember);
  await redis.set(KV_KEY, members);
  return newMember;
}

export async function updateTeamMember(id: string, updates: Partial<Omit<TeamMember, 'id' | 'createdAt'>>): Promise<TeamMember | null> {
  const members = await getTeamMembers();
  const index = members.findIndex(m => m.id === id);
  if (index === -1) return null;

  members[index] = {
    ...members[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  await redis.set(KV_KEY, members);
  return members[index];
}

export async function deleteTeamMember(id: string): Promise<boolean> {
  const members = await getTeamMembers();
  const filtered = members.filter(m => m.id !== id);
  if (filtered.length === members.length) return false;
  await redis.set(KV_KEY, filtered);
  return true;
}
