gulp-release-tag
================

> Release plugin for Gulp inspired from [gulp-release-tasks](https://github.com/lfender6445/gulp-release-tasks) that follows automate release workflow guidelines from [gulpjs.org](http://gulpjs.org/recipes/automate-release-workflow.html).

## Usage
`npm install gulp-release-tag --save-dev`

```javascript
// gulpfile.js

var gulp = require('gulp');

require('gulp-release-tag')(gulp);
```

`gulp -T` for a list of available commands

### Workflow

1. Bumps the versions of your `package.json` and `bower.json`
2. Create an automatic commit : `release: Version v{version}`
3. Create a new tag : `v{version}`
4. Push commit + tag

### Tasks

- `bump-version`
- `commit-changes`
- `create-new-tag`
- `release` :

task                    | version
------------------------|-------------------------------------
gulp release (-t patch) | v0.0.1 -> v0.0.2 + commit + tag + push
gulp release -t minor   | v0.0.1 -> v0.1.0 + commit + tag + push
gulp release -t major   | v0.0.1 -> v1.0.1 + commit + tag + push

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
