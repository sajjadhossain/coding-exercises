/*
 * jshint node:true
 * Index for schema
 */

'use strict';
var Validator = require('jsonschema').Validator,
    schema = new Validator(),
    makeModule = require('./makeModule'),
    writeModule = require('./writeModule');

module.exports = {
    schema: schema,
    makeModule: makeModule,
    writeModule: writeModule
};
