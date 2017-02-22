/*
 * jshint node:true
 * Foundation for module/function scaffolding
 */

var makeModule = require('./lib/makeModule'),
    writeModule = require('./lib/writeModule'),
    writeTest = require('./lib/writeTest');

module.exports = {
    makeModule: makeModule,
    writeModule: writeModule,
    writeTest: writeTest
};
