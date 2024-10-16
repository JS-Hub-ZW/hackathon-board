// Octokit.js

import { Octokit } from "octokit";

const GITHUB_API_VERSION = "2022-11-28";

const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});


export const getContributers = async (owner: string, repo: string) => {
  try {
    const result = await octokit.request(
      `GET /repos/${owner}/${repo}/contributors`,
      {
        owner: owner,
        repo: repo,
        headers: {
          "X-GitHub-Api-Version": GITHUB_API_VERSION,
        },
      }
    );
    
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
