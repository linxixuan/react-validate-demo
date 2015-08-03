var path = require('path');

var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	webpack = require('webpack'),
	gutil = require('gulp-util');

gulp.task('build', function (callback) {
	var webpackConfPath = path.resolve(__dirname, './webpack.config.js'),
		webpackConfig = require(webpackConfPath);

	webpack(webpackConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
		gutil.log("[webpack]", stats.toString({}));
		callback();
	});
});

gulp.task('default', function () {
  	runSequence('build');
});
