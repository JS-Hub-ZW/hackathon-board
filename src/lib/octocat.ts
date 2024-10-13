// Octokit.js

import { Octokit } from "octokit";

// https://github.com/octokit/core.js#readme



const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});


export const getContributers = async (owner:string, repo:string) => {
  try {
    let result = await octokit.request(
      `GET /repos/${owner}/${repo}/contributors`,
      {
        owner: owner,
        repo: repo,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
