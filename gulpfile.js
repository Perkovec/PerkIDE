/* eslint-disable import/no-extraneous-dependencies,no-console */
const exec = require('child_process').exec;
const gulp = require('gulp');
const watch = require('gulp-watch');
/* eslint-enable import/no-extraneous-dependencies */

function buildDev(cb) {
  return exec('npm run build:dev', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
  }).on('close', () => {
    (cb || (() => {}))();
  });
}

gulp.task('build:dev', buildDev);

gulp.task('dev', () => {
  buildDev(() => {
    exec('electron .');
    console.log(new Date());
  });
  watch('./src/browser/**/*', () => buildDev(() => console.log(new Date())));
});
