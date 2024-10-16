import axios from 'axios';

export async function getGitHubUserData(githubId: string) {
  const token = process.env.GITHUB_TOKEN;
  const headers = { Authorization: `token ${token}` };

  const [userResponse, reposResponse] = await Promise.all([
    axios.get(`https://api.github.com/users/${githubId}`, { headers }),
    axios.get(`https://api.github.com/users/${githubId}/repos`, { headers }),
  ]);

  const userData = userResponse.data;
  const repos = reposResponse.data;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const languages = repos.map((repo: any) => repo.language).filter(Boolean);
  const uniqueLanguages = Array.from(new Set(languages));

  return {
    name: userData.name,
    publicRepos: userData.public_repos,
    followers: userData.followers,
    following: userData.following,
    createdAt: userData.created_at,
    languages: uniqueLanguages,
  };
}