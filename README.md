[![Build Status][1]][2]
# Learning Crafty

## Fork of https://github.com/cjwillia/Learning-Crafty

### Tools

This fork utilizes a number of build tools to improve overall code quality of the experiment, `Learning-Crafty`. This is purely educational, and should not be treated as production quality code.

Core concepts used here:
- Static Code Analysis
  - Use of [JSHint][3] code linting tool
- Grunt automation
  - Watches our `src` directory
  - Runs JSHint upon updating any files in `src`
  - Acts as an entry point for [Travis-CI][4] to execute tests
- Travis-CI testing
  - Runs a simple test suite on push
  - Currently configured to only lint javascript

### Overview

This is treated as a static site, regardless of the [NodeJS][5] packages being used for static code analysis and automation. This is purely educational, and should not be treated as production quality code. Goals here are to establish a fairly simple baseline of quality tested code, minimal redundancy, and a clean global object for proper garbage collection. Additional goals are to acclimate the developer to build tools available now which may dramatically increase productivity whilst creating new projects.

#### Installing Grunt

[Grunt][6] is a task runner built on top of [NodeJS][5] which allows for extensible tasks to be added to your project, enabling things like script concatination, script minification, static code analysis, even preview servers for static sites. From their site:

> Why use a task runner?
In one word: automation. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes. After you've configured it, a task runner can do most of that mundane work for you—and your team—with basically zero effort.
>
Why use Grunt?
The Grunt ecosystem is huge and it's growing every day. With literally hundreds of plugins to choose from, you can use Grunt to automate just about anything with a minimum of effort. If someone hasn't already built what you need, authoring and publishing your own Grunt plugin to npm is a breeze.

Installation assumes you have [NodeJS][5] already configured, along with [npm][7]. This will not be covered as part of the grunt install process.

Open a terminal, and run the following command:

```
npm install -g grunt-cli
```

This is the CLI shell grunt uses to execute commands. Grunt-CLI will check for the existence of the `grunt` package in your `node_modules/` directory.

Install your project's NodeJS dependencies with:

```
npm install
```

This will install your project's local grunt instance, along with any packages necessary to execute tasks.

#### Configuring Travis-CI

W.I.P.

#### Running Grunt locally

W.I.P.

#### Testing with Travis-CI

W.I.P.

[1]: https://travis-ci.org/buzzedword/Learning-Crafty.png?branch=master
[2]: https://travis-ci.org/buzzedword/Learning-Crafty
[3]: https://github.com/jshint/jshint/
[4]: https://travis-ci.org/
[5]: http://nodejs.org
[6]: http://gruntjs.com
[7]: https://www.npmjs.org/
