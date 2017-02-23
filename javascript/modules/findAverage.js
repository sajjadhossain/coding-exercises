/*
 * jshint node:true
 */
/**
 * @param {array} numbers Array of number to find average of
 */
'use strict';
module.exports = function (numbers) {
    var total = 0,
        increment,
        average;

    for (increment = 0; increment < numbers.length; increment += 1) {
        total += numbers[increment];
    }

    average = total / numbers.length;

    return average;
};
