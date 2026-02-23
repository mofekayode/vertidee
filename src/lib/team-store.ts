import fs from 'fs';
import path from 'path';

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

const DATA_FILE = path.join(process.cwd(), 'data', 'team.json');

function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, '[]', 'utf-8');
  }
}

export function getTeamMembers(): TeamMember[] {
  ensureDataFile();
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

export function getTeamMember(id: string): TeamMember | undefined {
  const members = getTeamMembers();
  return members.find(m => m.id === id);
}

export function createTeamMember(member: Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>): TeamMember {
  const members = getTeamMembers();
  const newMember: TeamMember = {
    ...member,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  members.push(newMember);
  fs.writeFileSync(DATA_FILE, JSON.stringify(members, null, 2), 'utf-8');
  return newMember;
}

export function updateTeamMember(id: string, updates: Partial<Omit<TeamMember, 'id' | 'createdAt'>>): TeamMember | null {
  const members = getTeamMembers();
  const index = members.findIndex(m => m.id === id);
  if (index === -1) return null;

  members[index] = {
    ...members[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(DATA_FILE, JSON.stringify(members, null, 2), 'utf-8');
  return members[index];
}

export function deleteTeamMember(id: string): boolean {
  const members = getTeamMembers();
  const filtered = members.filter(m => m.id !== id);
  if (filtered.length === members.length) return false;
  fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2), 'utf-8');
  return true;
}
