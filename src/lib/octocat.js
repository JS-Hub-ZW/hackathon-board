// Octokit.js

import { Octokit } from "octokit";

// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: atob('Z2hwX0x4cFJuM3ZJVG1GUFZvUDlyUEVRZG1kTXh6RlBMbTRVdTlZOA=='),
});

const owner = "JS-Hub-ZW";
const repo = "hackathon-board";

export const getContributers = async () => {
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
