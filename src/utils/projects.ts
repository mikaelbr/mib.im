import { LRUCache } from 'lru-cache';

const cache = new LRUCache<string, RepoStats>({
  max: 500,
  maxSize: 5000,

  // how long to live in ms
  ttl: 1000 * 60 * 60,
});

type HumanizedNumber = {
  value: number;
  short: string;
};

export type RepoStats = {
  name: string;
  url: string;
  stars: HumanizedNumber;
  forks: HumanizedNumber;
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
    stars: numberToHumanizedNumber(data.stargazers_count),
    forks: numberToHumanizedNumber(data.forks_count),
  };

  cache.set(repo, obj);
  return obj;
}

function numberToHumanizedNumber(number: number): HumanizedNumber {
  if (number < 1000) return { value: number, short: number.toString() };
  if (number < 1000000) return { value: number, short: `${(number / 1000).toFixed(1)}K` };
  return { value: number, short: `${(number / 1000000).toFixed(1)}M` };
}

export async function getMultipleRepoStats(repo: `${string}/${string}`[]): Promise<RepoStats[]> {
  // return [
  //   {
  //     name: 'mikaelbr/node-notifier',
  //     description:
  //       'A Node.js module for sending notifications on native Mac, Windows, and Linux (or Growl as fallback)',
  //     url: 'https://test.com',
  //     stars: numberToHumanizedNumber(3000),
  //     forks: numberToHumanizedNumber(200),
  //   },
  // ];
  const response = await Promise.all(repo.map(getRepoStats));
  return sortProjects(response.filter(Boolean) as RepoStats[]);
}

export function sortProjects(presentations: RepoStats[]): RepoStats[] {
  return presentations.sort((a, b) => {
    return b.stars.value - a.stars.value;
  });
}
