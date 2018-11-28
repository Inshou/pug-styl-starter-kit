import gulp from 'gulp';
import zip from 'gulp-zip';

let correctNumber = number => number < 10 ? '0' + number : number;

let getDateTime = () => {
  let now = new Date();
  let year = now.getFullYear();
  let month = correctNumber(now.getMonth() + 1);
  let day = correctNumber(now.getDate());
  let hours = correctNumber(now.getHours());
  let minutes = correctNumber(now.getMinutes());

  return `${year}-${month}-${day}-${hours}${minutes}`;
};

function archive() {
  let datetime = getDateTime();
  let zipName = 'dist-' + datetime + '.zip';

  return gulp.src(['dist', '!dist/*.zip'])
  .pipe(zip(zipName))
  .pipe(gulp.dest('dist'));
}

export default archive;