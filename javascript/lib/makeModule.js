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
    },
    writeModule,
    writeTest;

module.exports = function (moduleName, moduleDirectory, functions, inputs) {
    'use strict';
    var saveTestAs,
        saveModuleAs,
        args,
        createFiles,
        createdAll,
        makeModuleSchema,
        isSchemaValid,
        writeModule = require('../Foundation').writeModule,
        writeTest = require('../Foundation').writeTest;

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
            };
        } else {
            createFiles = 'No test or modules created.';
        }
    }


    createdAll = {
        module: writeModule(createFiles),
        test: writeTest(createFiles)
    };

    return createdAll;
};
