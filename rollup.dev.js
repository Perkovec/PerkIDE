const fs = require('fs');
const path = require('path');
/* eslint-disable import/no-extraneous-dependencies */
const vue = require('rollup-plugin-vue2');
const babel = require('rollup-plugin-babel');
const filesize = require('rollup-plugin-filesize');
/* eslint-enable import/no-extraneous-dependencies */

const destDir = 'dest';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

export default {
  entry: 'src/browser/index.js',
  format: 'cjs',
  useStrict: false,
  plugins: [
    vue(),
    babel(),
    filesize(),
  ],
  dest: path.join(destDir, 'bundle.js'),
};
