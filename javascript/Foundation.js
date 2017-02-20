/*
 * jshint node:true
 * Foundation for module/function scaffolding
 */

 /**
 * @param {string} moduleName The module name
 * @param {string} moduleDirectory The module directory
 * @param {function} functions The functions to add to this module directory
 * @param {sting|array|object|number|function} inputs The functions to add to this module directory
 */

var fs = require('fs'),
    path = require('path'),
    schemas = require('./schema/index'),
    partials = require('./partials/index'),
    createdFiles,
    createFile = function (file, data) {
        createdFiles = {};
        fs.writeFile(file, data);
        createdFiles.file = file;
        createdFiles.data = data;

        return createdFiles;
    };

module.exports = {
    makeModule: function (moduleName, moduleDirectory, functions, inputs) {
        'use strict';
        var saveTestAs,
            saveModuleAs,
            args,
            createFiles,
            makeModuleSchema,
            isSchemaValid;

        if (arguments.length === 4) {
            args = {};
            args.moduleName = (typeof moduleName === 'string') ? moduleName : 'undefined';
            args.moduleDirectory = (typeof moduleDirectory === 'string') ? moduleDirectory : 'undefined';
            args.modulePath = (typeof moduleDirectory === 'string') ? path.resolve(moduleDirectory) : 'undefined';
            args.functions = functions;
            args.numberOfFunctions = Object.keys(functions).length;
            args.inputs = inputs;

            makeModuleSchema = schemas.makeModule;
            isSchemaValid = schemas.schema.validate(args, makeModuleSchema).errors;

            if (!isSchemaValid[0]) {
                saveModuleAs = args.modulePath + '/' + args.moduleName + '.js';
                saveTestAs = args.modulePath + '/test/specs/' + args.moduleName + '.spec.js';

                createFiles = {
                    module: createFile(saveModuleAs, ''),
                    test: createFile(saveTestAs, ''),
                    args: args
                }
            } else {
                createFiles = 'No test or modules created.'
            }
        }

        return createFiles;
    },
    writeModule: function (createdFiles) {
        'use strict';
        var key,
            moduleExportsBegin = 'module.exports = { \n',
            moduleExportsEnd = '\n}',
            functions = createdFiles.args.functions,
            functionsArray = [],
            newLine = '\n',
            tabDelimit = '    ',
            moduleToString,
            modulesWritten,
            headerPartial = partials.header,
            writeModuleSchema = schemas.writeModule,
            isSchemaValid = schemas.schema.validate(createdFiles, writeModuleSchema).errors;

        if (!isSchemaValid[0]) {
            modulesWritten = 'Written';
        } if (isSchemaValid[0]) {
            modulesWritten = 'No test or modules written.';
        }

        for (key in createdFiles.args.functions) {
            if(!functionsArray[0]) {
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
        }

        return modulesWritten;
    },
    writeTest: function (createdFiles) {
        'use strict';
        return createdFiles;
    }
};
