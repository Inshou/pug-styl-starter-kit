import gulp from 'gulp';
import templates from './src/gulp/templates';
import styles from './src/gulp/styles';
import scripts from './src/gulp/scripts';
import watch from './src/gulp/watch';
import server from './src/gulp/server';
import clean from './src/gulp/clean';
import archive from "./src/gulp/zip";

gulp.task(clean);
gulp.task(archive);

gulp.task('build', gulp.series(
  clean,
  gulp.parallel(
    templates,
    styles,
    scripts
  )
));

gulp.task('default', gulp.series(
  'build',
  gulp.parallel(
    watch,
    server
  )
));
