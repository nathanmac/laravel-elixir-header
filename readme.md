# laravel-elixir-header

This is a simple header banner wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile, like so:

## Install

```
npm install --save-dev laravel-elixir-header
```

## Usage

This will scan your `public` directory for all css/js files and add a given header message to the files.

### Example *Gulpfile*:

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-header');

elixir(function(mix) {
   mix.header('\n/** ABC Solutions - 2014 */\n');
});
```

#### Advanced example

In second argument you could pass data to be used in the banner.

```javascript
var pkg = require('./composer.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

mix.header(banner, { pkg : pkg });
```

For more examples please refer to the documentation for the [gulp-header](https://www.npmjs.org/package/gulp-header) package. 