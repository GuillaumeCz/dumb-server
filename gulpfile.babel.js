const gulp = require('gulp');
const babel = require('gulp-babel');
import clean from 'gulp-clean';
import nodemon from 'gulp-nodemon';

const paths = {
  js: {
    src: ['./**/*.js', '!dist/**', '!node_modules/**'],
    dest: 'dist/'
  }
};

// Clean up dist directory
gulp.task('clean', () => 
  gulp
    .src(['dist/**', 'dist/.*', '!dist'])
    .pipe(clean()));

gulp.task('babel', () =>
  gulp
    .src(paths.js.src, { sourcemaps: true })
    .pipe(gulp.dest(paths.js.dest))
    .pipe(babel())
    .pipe(gulp.dest(paths.js.dest)));

gulp.task('nodemon', () => 
  nodemon({
    script: './dist/app.js',
    tasks: ['babel'],
    ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  })
);

gulp.task('default', gulp.series('clean', 'babel', 'nodemon'));
