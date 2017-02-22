/*
 * jshint node:true, mocha:true
 */

 /**
 * @param {sting|array|object|number|function} value1 The module name
 * @param {sting|array|object|number|function} value2 The module directory
 */

var assert = require('chai').assert,
    _ = require('lodash'),
    doObjectsEqual = require('../../../modules/compareObjects').doObjectsEqual,
    listObjectDifferences = require('../../../modules/compareObjects').listObjectDifferences,
    listObjectDifferencesWithoutLibraries = require('../../../modules/compareObjects').listObjectDifferencesWithoutLibraries,
    testData = [
        {
            1: { a: 1, b: 2, c: 3},
            2: { a: 1, b: 1, c: 4},
            result: false,
            difference: 'b,c'
        },
        {
            1: { a: 1, b: 2, c: 3},
            2: { b: 2, a: 1},
            result: false,
            difference: 'c'
        },
        {
            1: { a: 1, b: 2, c: 3},
            2: { a: 1, b: 2, c: 3},
            result: true,
            difference: ''
        }
    ];

describe('do objects equal', function () {
    'use strict';
    _.forEach(testData, function (value) {
        it(
            'doObjectsEqual(' + JSON.stringify(value[1]) + ', ' + JSON.stringify(value[2]) + ')' + ' => ' + value.result,
            function () {
                assert(
                    doObjectsEqual(value[1], value[2]) === value.result,
                    'Expected Result: ' + value.result + ' Actual Result: ' + value[1]
                );
            }
        );
    });
});

describe('list object differences', function () {
    _.forEach(testData, function (value) {
        'use strict';
        it('listObjectDifferences(' + JSON.stringify(value[1]) + ', ' + JSON.stringify(value[2]) + ')' + ' => ' + value.difference,
            function () {
                assert(
                    listObjectDifferences(value[1], value[2]) === value.difference,
                    'Expected Result: ' + value.result + ' Actual Result: ' + value[1]
                );
            }
        );
    });
});

describe('list object differences without libraries', function () {
    _.forEach(testData, function (value) {
        'use strict';
        it('listObjectDifferencesWithoutLibraries(' + JSON.stringify(value[1]) + ', ' + JSON.stringify(value[2]) + ')' + ' => ' + value.difference,
            function () {
                assert(
                    listObjectDifferencesWithoutLibraries(value[1], value[2]) === value.difference,
                    'Expected Result: ' + value.result + ' Actual Result: ' + value[1]
                );
            }
        );
    });
});
