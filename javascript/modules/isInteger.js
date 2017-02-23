/*
 * jshint node:true
 */
 /**
 * @param {number} number Index to find fibonacci value for
 */
'use strict';
var isInteger = function (number) {
        return Number.isInteger(number);
    },
    isIntegerWithoutMethods = function (number) {
        var value;

        if (typeof number === 'number') {
            value = number % 1 === 0;
        } else {
            value = false;
        }

        return value;
    };

module.exports = {
    isInteger: isInteger,
    isIntegerWithoutMethods: isIntegerWithoutMethods
};
