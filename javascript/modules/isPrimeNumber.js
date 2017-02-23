/*
 * jshint node:true
 */
 /**
 * @param {number} number Index to find fibonacci value for
 */
'use strict';
module.exports = function (number) {
    var increment;
    for (increment = 2; increment < number; increment += 1) {
        if (number % increment === 0) {
            return false;
        }
    }

    return number > 1;
};
