module.exports = function (gulp) {
  var fs = require('fs');
  var gutil = require('gulp-util');
  var git = require('gulp-git');
  var bump = require('gulp-bump');
  var path = require('path');
  var runSequence = require('run-sequence').use(gulp);

  function getPackageJsonVersion() {
    return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
  }

  gulp.task('bump-version', function () {
    var argv = require('minimist')(process.argv.slice(2));
    var type = argv['t'] || 'patch';
    var directory = argv['p'] || './';

    console.log([path.join(directory, 'bower.json'), path.join(directory, 'package.json')]);

    return gulp.src([path.join(directory, 'bower.json'), path.join(directory, 'package.json')])
      .pipe(bump({ type: type }).on('error', gutil.log))
      .pipe(gulp.dest(directory));
  });

  gulp.task('commit-changes', function () {
    z
    var version = getPackageJsonVersion();

    return gulp.src('.')
      .pipe(git.add())
      .pipe(git.commit('release: Version ' + version));
  });

  gulp.task('push-changes', function (next) {
    var argv = require('minimist')(process.argv.slice(2));
    var branch = argv['b'] || 'master';

    git.push('origin', branch, next);
  });

  gulp.task('create-new-tag', function (next) {
    var version = getPackageJsonVersion();

    git.tag('v' + version, 'v' + version, function (err) {
      if (err) return next(err);

      git.push('origin', 'v' + version, next);
    });
  });

  gulp.task('release', function (next) {
    runSequence(
      'bump-version',
      'commit-changes',
      'push-changes',
      'create-new-tag',
      function (err) {
        if (err) console.log(err.message);

        next(err);
      });
  });
};
