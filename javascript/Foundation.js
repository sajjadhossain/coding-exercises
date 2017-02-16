/*
 * jshint node:true
 * Foundation for module/function scaffolding
 */

 /**
 * @param {string} moduleName The module name
 * @param {string} moduleDirectory The module directory
 * @param {function} functions The functions to add to this module directory
 * @param {sting|array|object} input The functions to add to this module directory
 * @param {sting|array|object} output The functions to add to this module directory
 */

module.exports = {
    makeModule: function (moduleName, moduleDirectory, functions, input, output) {
        "use strict";
        var fs = require('fs'),
            path = require('path'),
            saveTestAs,
            saveModuleAs,
            args,
            createFiles,
            createdFiles = {},
            createFile = function (file, data) {
                fs.writeFile(file, data);
                createdFiles.file = file;
                createdFiles.data = data;

                return createdFiles;
            };

        if (arguments.length === 5) {
            args = {};
            args.moduleName = (typeof moduleName === 'string') ? moduleName : 'undefined';
            args.moduleDirectory = (typeof moduleDirectory === 'string') ? moduleDirectory : 'undefined';
            args.modulePath = (typeof moduleDirectory === 'string') ? path.resolve(moduleDirectory) : 'undefined';
            args.numberOfFunctions = Object.keys(functions).length;
            args.input = input;
            args.output = output;
        }

        if (args.moduleName !== 'undefined' && args.modulePath !== 'undefined') {
            saveModuleAs = args.modulePath + '/' + args.moduleName + '.js';
            saveTestAs = args.modulePath + '/test/specs/' + args.moduleName + '.spec.js';
        }

        createFiles = {
            module: createFile(saveModuleAs, ''),
            test: createFile(saveTestAs, '')
        };

        return createFiles;
    }
};
