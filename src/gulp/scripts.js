import gulp from 'gulp';
import paths from './paths';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import onError from './errors';
import webpackstream from 'webpack-stream';
import webpack from 'webpack';
import webpackConfigDev from '../../webpack.dev.config';
import webpackConfigProd from '../../webpack.prod.config';

const isDebug = process.env.NODE_ENV !== 'production';

let webpackConfig;

if (isDebug) {
  webpackConfig = webpackConfigDev;
} else {
  webpackConfig = webpackConfigProd;
}

function scripts() {
  return gulp.src(paths.scripts.src)
  .pipe(plumber({ errorHandle: onError }))
  .pipe(webpackstream(webpackConfig, webpack))
  .on('error', onError)
  .pipe(gulp.dest(paths.scripts.dest))
  .pipe(notify({
    title   : 'Gulp Task Complete',
    message : 'Scripts have been bundled'
  }));
}

export default scripts;