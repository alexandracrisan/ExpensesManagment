/* works as a run file
   this file will create a new directory called dist that will contain: main.js, index.html
*/

/* require includes modules that exist in separate files
   functionality: it reads a js file, executes the file and returns the .exports object
   if there are multiple calls (of the same module) to require, the module cache  will be
   invoked rather than reading the file again
*/
var gulp = require('gulp'); //gulp: automated task runner
var browserify = require('browserify'); //browserfy: organizes and compiles code distributed in multiple modules
var reactify = require('reactify'); //reactify: translates the jsx code to js
var myCss = require('gulp-import-css');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');

var connect = require('gulp-connect');

/* when using gulp with browserify:
   gulp requires that the input should be a stream
   browserify outputs a string
*/
var source = require('vinyl-source-stream'); //converts a string to a stream

//--------------------------------------TASKS------------------------------------------------------------------

gulp.task('browserify', function() {
	return browserify('./src/js/main.js',{ debug: true } ) //when calling browserify the argument should be the the entry point of the application
	 .transform('reactify') //transforms from jsx to js
	 .bundle()	//the output of the transform will be here

	 .pipe(source('main.js'))//takes as input the output of bundle and transforms it to a stream
	 .pipe(buffer())
	 .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
	 .pipe(uglify().on('error', gutil.log))
	 .pipe(sourcemaps.write('./')) // writes .map file
	 .pipe(gulp.dest('dist/js'))
	 .pipe(connect.reload());
}); //end of gulp task

gulp.task('copy', function(){
	// copies the file given as input to the destination file given in pipe
	gulp.src('src/index.html')
	 	.pipe(gulp.dest('dist'));

	 gulp.src('src/assets/**/*.*')
		.pipe(myCss())
	 	.pipe(gulp.dest('dist/assets/'));


});

gulp.task('connect', function() {
  return connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('watch', ['browserify', 'copy'], function(){ //in [] we run the tasks from above
	// **, *.* means anything
	// .watch creates a watcher that will spy on files that are mat
	return gulp.watch('src/**/*.*', ['browserify', 'copy']); //we re-run browserify and copy
});

gulp.task('default', ['connect', 'watch']);