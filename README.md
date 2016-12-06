gulp-release-tag
================

## Usage
`npm install gulp-release-tag --save-dev`

```javascript
// add to gulpfile.js
var gulp = require('gulp');
// pass along gulp reference to have tasks imported
require('gulp-release-tag')(gulp);
```

run `gulp -T` for a list of available commands

bumps the versions of your `package.json` and `bower.json`

### Release
task                    | version
------------------------|-------------------------------------
gulp release (-t patch) | v0.0.1 -> v0.0.2 + commit + tag + push
gulp release -t minor   | v0.0.1 -> v0.1.0 + commit + tag + push
gulp release -t major   | v0.0.1 -> v1.0.1 + commit + tag + push

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new pull request
