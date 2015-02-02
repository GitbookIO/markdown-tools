#!/usr/bin/env node

var _ = require('lodash');

var fs = require('fs');
var program = require('commander');

var pkg = require('../package.json');

// Commands
var fmt = require('../lib/fmt');
var lex = require('../lib/lex');
var render = require('../lib/render');

// Utility funcs
var log = console.log.bind(console);

// Version
program
.version(pkg.version);

// Format
program
  .command('fmt <file>')
  .description('Like "go fmt" but for markdown. Removes inconsistencies in your markdown code')
  .action(function (file) {
    log(fmt(read(file)));
  });

// Lex
program
  .command('lex <file>')
  .description('Outputs the lex tree as JSON')
  .action(function (file) {
    var lexed = lex(read(file));
    log(JSON.stringify(lexed, null, 4));
  });

// Render
program
  .command('render <file>')
  .description('Render\'s your markdown to html')
  .action(function (file) {
    log(render(read(file)));
  });

// Utility read func
function read(filename) {
    return fs.readFileSync(filename, 'utf8');
}

// Parse and fallback to help if no args
if(_.isEmpty(program.parse(process.argv).args) && process.argv.length === 2) {
    program.help();
}