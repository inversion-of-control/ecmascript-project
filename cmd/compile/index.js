var fs = require('fs');
var npmRun = require('npm-run');
var path = require('path');
var config;

module.exports = function compile(cwd, mode) {
    config = path.resolve(__dirname, 'webpack.config.js'); 
    npmRun.exec('webpack --config ' + config, {cwd: cwd}, onCompile); 
};

function onCompile(err, stdout, stderr) {
    err === null && console.log("complete");  
    err !== null && console.log("error: " + err.toString());
}