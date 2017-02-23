'use strict';
const gutil = require('gulp-util');
const through = require('through2');

module.exports = opts => {
	return through.obj(function (file, enc, cb) {
		if ((file.isBuffer() || file.isStream()) && file.contents.length == 0) {
			gutil.log(file.path + ' is empty');
			cb(null, file);
			return;
		}
		if (file.isNull()) {
			gutil.log(file.cwd + ' is null');
			cb(null, file);
			return;
		}
		cb(null, file);
	}, function (cb) {
		cb();
	});
};