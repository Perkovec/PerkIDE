const fs = require('fs');
const path = require('path');
/* eslint-disable import/no-extraneous-dependencies */
const rollup = require('rollup');
const vue = require('rollup-plugin-vue2');
const babel = require('rollup-plugin-babel');
/* eslint-enable import/no-extraneous-dependencies */

const destDir = 'dest';

rollup.rollup({
  entry: 'src/browser/index.js',
  plugins: [
    vue(),
    babel(),
  ],
}).then(bundle => {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
  }

  bundle.write({
    format: 'cjs',
    useStrict: false,
    dest: path.join(destDir, 'bundle.js'),
  });
});
