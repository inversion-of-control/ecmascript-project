#!/usr/bin/env node

/**
 * ============
 * elctron-project CLI
 * ============
**/

/**
 * ============
 * ecmascript-project CLI
 * ============
**/

var prc = require('yargs');
var cmd = require('./cmd');
var cwd = process.cwd();

prc.usage('$0 <cmd> [args]')
       .command('compile [mode]', 
                'compile project and generate file cache', 
                { mode: {default: 'development'}}, 
                function (argv) {cmd.compile(cwd, argv.mode);})
        .help()
        .argv;