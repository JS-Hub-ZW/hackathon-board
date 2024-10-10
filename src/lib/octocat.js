// Octokit.js

import { Octokit } from "octokit"

// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: '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'
  })


const owner = 'JS-Hub-ZW'
const repo = 'hackathon-board'
 
export const getContributers = async () =>  {
  return await octokit.request(`GET /repos/${owner}/${repo}/contributors`, {
    owner: owner,
    repo: repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
}

