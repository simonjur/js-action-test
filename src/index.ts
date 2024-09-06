import * as core from '@actions/core';
import * as github from '@actions/github';

try {
  console.log('github|', JSON.stringify(github, null, 2));
  console.log('core.runner|', JSON.stringify(core, null, 2));

  console.log('env|', JSON.stringify(process.env, null, 2));
} catch (error) {
  core.setFailed((error as Error).message);
}
