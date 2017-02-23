# gulp-file-empty

> use for check file if it's empty

## install 

	$ npm install --save-dev gulp-file-empty

## Usage

	const gulp = require('gulp');
	const isEmpty = require('gulp-file-empty');

	gulp.task('default', () =>
	    gulp.src('src/app.js')
	        .pipe(isEmpty())
	        .pipe(gulp.dest('dist'))
	);

## License 

MIT © [x-yao](https://github.com/x-yao)