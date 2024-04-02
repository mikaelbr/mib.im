import { LRUCache } from 'lru-cache';

const cache = new LRUCache<string, RepoStats>({
  max: 500,
  maxSize: 5000,

  // how long to live in ms
  ttl: 1000 * 60 * 60,
});

export type RepoStats = {
  name: string;
  url: string;
  stars: number;
  forks: number;
  description: string;
};

type RepoDto = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    type: string;
    site_admin: boolean;
  };
  description: string;
  fork: boolean;
  language: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  archived: boolean;
  disabled: boolean;
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  network_count: number;
  subscribers_count: number;
};
export async function getRepoStats(repo: `${string}/${string}`): Promise<RepoStats | undefined> {
  if (cache.has(repo)) return cache.get(repo)!;

  const response = await fetch(`https://api.github.com/repos/${repo}`);
  if (!response.ok) return undefined;
  const data = (await response.json()) as RepoDto;

  const obj = {
    name: data.full_name,
    description: data.description,
    url: data.html_url,
    stars: data.stargazers_count,
    forks: data.forks_count,
  };

  cache.set(repo, obj);
  return obj;
}

export async function getMultipleRepoStats(repo: `${string}/${string}`[]): Promise<RepoStats[]> {
  const response = await Promise.all(repo.map(getRepoStats));
  return sortProjects(response.filter(Boolean) as RepoStats[]);
}

export function sortProjects(presentations: RepoStats[]): RepoStats[] {
  return presentations.sort((a, b) => {
    return b.stars - a.stars;
  });
}
