#!/usr/bin/env node
const cp = require('child_process');

const mode = process.argv[2] || '';

if (process.platform !== 'darwin') {
  process.exit(0);
}

let sdkPath = '';
try {
  sdkPath = cp.execSync('xcrun --show-sdk-path', {
    stdio: ['ignore', 'pipe', 'ignore']
  }).toString().trim();
}
catch (error) {
  process.exit(0);
}

if (!sdkPath) {
  process.exit(0);
}

if (mode === 'include') {
  console.log(`${sdkPath}/usr/include/c++/v1`);
  process.exit(0);
}

if (mode === 'isysroot') {
  console.log('-isysroot');
  console.log(sdkPath);
  process.exit(0);
}

process.exit(0);
