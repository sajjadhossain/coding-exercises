/*
 * jshint node:true
 * Foundation for module/function scaffolding
 */

 /**
 * @param {object} createdFiles The object thats required to write a module
 */

var fs = require('fs'),
    path = require('path'),
    schemas = require('../schema/index'),
    partials = require('../partials/index'),
    createdFiles,
    createFile = function (file, data) {
        'use strict';
        createdFiles = {};
        fs.writeFile(file, data);
        createdFiles.file = file;
        createdFiles.data = data;

        return createdFiles;
    };

module.exports = function (createdFiles) {
    'use strict';
    var key,
        moduleExportsBegin = 'module.exports = {\n',
        moduleExportsEnd = '\n};',
        functionsArray = [],
        newLine = '\n',
        tabDelimit = '    ',
        moduleToString,
        modulesWritten,
        headerPartial = partials.header,
        writeModuleSchema = schemas.writeModule,
        isSchemaValid = schemas.schema.validate(createdFiles, writeModuleSchema).errors;

    if (!isSchemaValid[0]) {
        for (key in createdFiles.args.functions) {
            if (!functionsArray[0]) {
                functionsArray.push(tabDelimit + key + ': ' + createdFiles.args.functions[key]);
            } else {
                functionsArray.push(newLine + tabDelimit + key + ': ' + createdFiles.args.functions[key]);
            }
        }

        moduleToString = headerPartial.comments(createdFiles.args) +
            moduleExportsBegin +
            functionsArray.join() +
            moduleExportsEnd;

        modulesWritten = {
            module: createFile(createdFiles.module.file, moduleToString)
        };

    }

    if (isSchemaValid[0]) {
        modulesWritten = 'No test or modules written.';
    }

    return modulesWritten;
};
