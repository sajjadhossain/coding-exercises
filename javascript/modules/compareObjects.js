/*
 * jshint node:true
 */
 /**
 * @param {object} object1 The module name
 * @param {object} object2 The module directory
 */

'use strict';
var _ = require('lodash'),
    doObjectsEqual = function (object1, object2) {
        if (object1 && object2) {
            return JSON.stringify(object1) === JSON.stringify(object2);
        }
    },
    listObjectDifferences = function (object1, object2) {
        if (object1 && object2) {
            var reduceToKeys = _.reduce(object1, function (result, value, key) {
                return _.isEqual(value, object2[key]) ? result : result.concat(key);
            }, []);

            return reduceToKeys.toString();
        }
    },
    listObjectDifferencesWithoutLibraries = function (object1, object2) {
        if (object1 && object2) {
            var key,
                differentKeys = [];

            for (key in object1) {
                if (object1.hasOwnProperty(key)) {
                    if (object2.hasOwnProperty(key)) {
                        if (object1[key] !== object2[key]) {
                            differentKeys.push(key);
                        }
                    } else {
                        differentKeys.push(key);
                    }
                }
            }

            return differentKeys.toString();
        }
    };

module.exports = {
    doObjectsEqual: doObjectsEqual,
    listObjectDifferences: listObjectDifferences,
    listObjectDifferencesWithoutLibraries: listObjectDifferencesWithoutLibraries
};
