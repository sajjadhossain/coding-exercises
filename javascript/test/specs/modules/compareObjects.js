/*
 * jshint node:true, mocha:true
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
    _.forEach(testData, function (data) {
        it(
            'doObjectsEqual(' + JSON.stringify(data[1]) + ', ' + JSON.stringify(data[2]) + ')' + ' => ' + data.result,
            function () {
                assert(
                    doObjectsEqual(data[1], data[2]) === data.result,
                    '\n     Expected Result: ' + data.result + '\n     Actual Result: ' + data[1]
                );
            }
        );
    });
});

describe('list object differences', function () {
    _.forEach(testData, function (data) {
        'use strict';
        it('listObjectDifferences(' + JSON.stringify(data[1]) + ', ' + JSON.stringify(data[2]) + ')' + ' => ' + data.difference,
            function () {
                assert(
                    listObjectDifferences(data[1], data[2]) === data.difference,
                    '\n     Expected Result: ' + data.result + '\n     Actual Result: ' + data[1]
                );
            }
        );
    });
});

describe('list object differences without libraries', function () {
    _.forEach(testData, function (data) {
        'use strict';
        it('listObjectDifferencesWithoutLibraries(' + JSON.stringify(data[1]) + ', ' + JSON.stringify(data[2]) + ')' + ' => ' + data.difference,
            function () {
                assert(
                    listObjectDifferencesWithoutLibraries(data[1], data[2]) === data.difference,
                    '\n     Expected Result: ' + data.result + '\n     Actual Result: ' + data[1]
                );
            }
        );
    });
});
