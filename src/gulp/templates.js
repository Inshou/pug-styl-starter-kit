import paths from './paths';
import gulp from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import onError from './errors';

const isDebug = true; //process.env.NODE_ENV !== 'production';

function templates() {
  return gulp.src(paths.templates.src)
  .pipe(plumber({ errorHandle: onError }))
  .pipe(pug({ pretty: isDebug }))
  .on('error', onError)
  .pipe(gulp.dest(paths.templates.dest))
  .pipe(notify({
    title   : 'Gulp Task Complete',
    message : 'Templates have been compiled'
  }));
}

export default templates;