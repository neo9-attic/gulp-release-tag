module.exports = function (gulp) {
	var fs = require('fs');
	var gutil = require('gulp-util');
	var git = require('gulp-git');
	var	bump = require('gulp-bump');
	var runSequence = require('run-sequence').use(gulp);

	function getPackageJsonVersion () {
		return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
	}

	gulp.task('bump-version', function () {
		var argv = require('minimist')(process.argv.slice(2));
		var type = argv['t'] || 'patch';

		return gulp.src(['./bower.json', './package.json'])
			.pipe(bump({type: type}).on('error', gutil.log))
			.pipe(gulp.dest('./'));
	});

	gulp.task('commit-changes', function () {
		var version = getPackageJsonVersion();

		return gulp.src('.')
			.pipe(git.add())
			.pipe(git.commit('release: Version ' + version));
	});

	gulp.task('create-new-tag', function (next) {
		var version = getPackageJsonVersion();

		git.tag('v' + version, 'v' + version, function (err) {
			if (err) return next(err);

			git.push('origin', [ 'master', 'develop' ], {args: '--tags'}, next);
		});
	});

	gulp.task('release', function (next) {
		runSequence(
			'bump-version',
			'commit-changes',
			'create-new-tag',
			function (err) {
				if (err) console.log(err.message);

				next(err);
			});
	});
};