'use strict';
/* eslint-disable import/no-extraneous-dependencies */

import path from 'path';
import gulp from 'gulp';
import mocha from 'gulp-mocha';
import istanbul from 'gulp-babel-istanbul';
import nsp from 'gulp-nsp';
import plumber from 'gulp-plumber';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import coveralls from 'gulp-coveralls';

const files = {
  src: 'src/**/*.js',
  test: 'test/**/*.js',
};

gulp.task('nsp', (cb) => {
  nsp({ package: path.resolve('package.json') }, cb);
});

gulp.task('lint', () => gulp.src([
  files.src,
  '!node_modules/**',
  '!coverage/**',
  '!logs/**',
  '!dist/**',
]).pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
);

gulp.task('pre-test', () => gulp.src(files.src)
    .pipe(istanbul({
      includeUntested: true,
    }))
    .pipe(istanbul.hookRequire())
);

gulp.task('transpile', ['copy_templates'], () => gulp.src(files.src)
    .pipe(babel())
    .pipe(gulp.dest('dist'))
);

gulp.task('copy_templates', () => gulp.src('./src/templates/*.json')
  .pipe(gulp.dest('./dist/templates/'))
);


gulp.task('test', ['lint'], (cb) => {
  let mochaErr;

  gulp.src(files.test)
    .pipe(plumber())
    .pipe(mocha({
      reporter: 'spec',
      compilers: {
        js: babel,
      },
    }))
    .on('error', (err) => {
      mochaErr = err;
    })
    .pipe(istanbul.writeReports())
    .on('end', () => {
      cb(mochaErr);
    });
});

gulp.task('coveralls', ['test'], () => gulp.src('coverage/lcov.info')
    .pipe(coveralls())
);

gulp.task('watch', () => {
  gulp.watch(['src/**/*.js', 'test/**'], ['test']);
});

gulp.task('build', ['test', 'transpile']);

gulp.task('prepublish', ['nsp']);
gulp.task('default', ['test']);
