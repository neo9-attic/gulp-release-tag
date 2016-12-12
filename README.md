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

## Tasks

### gulp bump-version
`gulp bump-version`

Bumps the versions of your `package.json` and `bower.json`

`-t`: Type (optional), options: `patch`, `minor`, `major`, default: `patch`
 
### gulp commit-changes
`gulp commit-changes`

Create an automatic commit : `release: Version v{version}`

### gulp push-changes
`gulp push-changes`

Push commit to a branch

`-b`: Branch (optional), default: `master`

### gulp create-new-tag
`gulp create-new-tag`

Create a new tag : `v{version}` and push it to origin

### gulp release
`gulp release`

Run the following sequence:

1. `bump-version`
2. `commit-changes`
3. `push-changes`
3. `create-new-tag`

All options passed to `gulp release` will be used by the different tasks of the sequence.

Task                       | Workflow
---------------------------|--------------------------------------------------
gulp release (-b develop)  | v0.0.1 -> v0.0.2 + commit + push develop + tag + push tag
gulp release (-t minor)    | v0.0.1 -> v0.1.0 + commit + push master + tag + push tag
gulp release (-t major)    | v0.0.1 -> v1.0.1 + commit + push master + tag + push tag

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
