import paths from './paths';
import gulp from 'gulp';
import templates from './templates';
import styles from './styles';
import scripts from './scripts';

function watch() {
  gulp.watch(paths.templates.src[0], templates);
  gulp.watch(paths.styles.src[0], styles);
  gulp.watch(paths.scripts.src, scripts);
}

export default watch;