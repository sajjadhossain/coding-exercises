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
        createdFiles = {};
        fs.writeFile(file, data);
        createdFiles.file = file;
        createdFiles.data = data;

        return createdFiles;
    };

module.exports = function (createdFiles) {
    'use strict';
    var key,
        requireModuleMade,
        describeBegin,
        behaviorEnd = '});',
        itOpen = 'it.skip(\'',
        itClose,
        its = [],
        assertBegin = 'assert(',
        assertEnd = ');',
        errorMessage,
        expected = 'Expected Result: ',
        actual = 'Actual Result: ',
        newLine = '\n',
        tabDelimit = '    ',
        testsToString,
        testsWritten,
        headerPartial = partials.header,
        writeModuleSchema = schemas.writeModule,
        isSchemaValid = schemas.schema.validate(createdFiles, writeModuleSchema).errors;

    if (!isSchemaValid[0]) {
        requireModuleMade = '\n' + tabDelimit + ', ' + createdFiles.args.moduleName + ' = require(\'../../' + createdFiles.args.moduleName + '\'); \n',
        describeBegin = 'describe(\'' + createdFiles.args.moduleName + '\', function () {',
        itClose = '(' + createdFiles.args.inputs + ') => some desired output\', function () {',
        errorMessage = '\'' + expected + 'expected output, ' + actual ;

        for (key in createdFiles.args.functions) {
            its.push(
                newLine + tabDelimit + itOpen + key + itClose +
                newLine + (tabDelimit + tabDelimit) + assertBegin +
                newLine + (tabDelimit + tabDelimit + tabDelimit) + createdFiles.args.moduleName + '.' + key + '(' + createdFiles.args.inputs + ')' + ' === \'expected value\',' +
                newLine + (tabDelimit + tabDelimit + tabDelimit + tabDelimit) + errorMessage + '\' \+ ' + createdFiles.args.moduleName + '.' + key + '(' + createdFiles.args.inputs + ')' +
                newLine + (tabDelimit + tabDelimit) + assertEnd +
                newLine + tabDelimit + behaviorEnd
            )
        };

        testsToString = headerPartial.mocha() +
            requireModuleMade +
            newLine + describeBegin +
            its.join('') +
            newLine + behaviorEnd;

        testsWritten = {
            test: createFile(createdFiles.test.file, testsToString)
        };

    } if (isSchemaValid[0]) {
        testsWritten = 'No test or modules written.';
    }

    return testsWritten;
};
