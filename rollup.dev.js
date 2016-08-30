const fs = require('fs');
const path = require('path');
/* eslint-disable import/no-extraneous-dependencies */
const vue = require('rollup-plugin-vue2');
const babel = require('rollup-plugin-babel');
const filesize = require('rollup-plugin-filesize');
const postcss = require('rollup-plugin-postcss');
const scss = require('postcss-scss');
const precss = require('precss');
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
    postcss({
      parser: scss,
      processors: [
        precss,
      ],
      extensions: ['.css', '.sass', '.scss'],
    }),
    vue(),
    babel(),
    filesize(),
  ],
  dest: path.join(destDir, 'bundle.js'),
};
