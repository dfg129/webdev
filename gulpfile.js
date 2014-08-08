'use strict'

var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var nodemon = require('gulp-nodemon');
var stylus = require('gulp-stylus');
var livereload = require('gulp-livereload');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var reload = browserSync.reload;
var nib = require('nib');


var SERVER_PORT = 9000;
var APP_SRC = '.';
var APP_DEPLOY = './dist/public';
var LIVERELOAD_PORT = 35729;

var onError = function (err) { 
  console.log(err);
  gutil.beep();
}

gulp.task('clean', function (cb) {
  var rimraf = require('rimraf');
  rimraf('./dist', cb);
});

var paths = {
  scriptsSrc: APP_SRC + '/scripts/*.js',
  scriptsDest: APP_DEPLOY + '/scripts/',
  htmlSrc: APP_SRC + '/index.html',
  htmlDest: APP_DEPLOY,
  stylesSrc: APP_SRC + '/styles/*.styl',
  stylesDest: APP_DEPLOY + '/css/'
}

gulp.src(APP_SRC + '/bower_components/angular/angular.js')
    .pipe(gulp.dest(APP_DEPLOY + '/components/'));

gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: APP_DEPLOY
    }
  });
  
  gulp.watch(paths.stylesSrc, ['styles']);
  gulp.watch(paths.htmlSrc, ['html']);
  gulp.watch(paths.scriptsSrc, ['lint', 'scripts']);
});

gulp.task('lint', function () {
  return gulp.src(paths.scriptsSrc)
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
  console.log("Scripting : " + paths.scriptsSrc);
  return gulp.src(paths.scriptsSrc)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest(paths.scriptsDest))
    .pipe(reload({stream:true}));
});

gulp.task('styles', function () {
  console.log("Styling : " + paths.stylesSrc);
  return gulp.src(paths.stylesSrc)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(stylus({use: [nib()], import: ['nib']}))
    .pipe(gulp.dest(paths.stylesDest))
    .pipe(reload({stream:true}));
});

gulp.task('html', function() {
  console.log("Initing : " + paths.htmlSrc);
  return gulp.src(paths.htmlSrc)
   .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest(paths.htmlDest))
    .pipe(reload({stream:true}));
});



gulp.task('default', ['server', 'styles', 'lint', 'scripts', 'html']);
