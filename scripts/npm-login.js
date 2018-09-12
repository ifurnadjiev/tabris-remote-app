const exec = require('child_process').exec;
const fs = require('fs');
const os = require('os');
const path = require('path');

if (process.env.NPM_TOKEN) {
  let npmrc = path.resolve(os.homedir(), '.npmrc');
  console.log('write authentication token to ' + npmrc);
  let content = [
    'registry=https://npm.tabrisjs.com/\n',
    '//npm.tabrisjs.com/:_authToken=\"',
    process.env.NPM_TOKEN,
    '"\n'].join('');
  fs.writeFileSync(npmrc, content);
} else {
  console.log('no token for .npmrc found');
}
