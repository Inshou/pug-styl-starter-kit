import gulp from 'gulp';
import paths from './paths';
import browserSync from 'browser-sync';

const bs = browserSync.create();

function reload(done) {
  bs.reload();
  done();
}

function server() {
  bs.init({
	  port: process.env.PORT || 5000,
    server: {
      baseDir: paths.root,
      notify: false
    }
  });
  gulp.watch(paths.root+'/assets/**/*.*', reload);
  gulp.watch(paths.root+'/*.html', reload);
}

export default server;