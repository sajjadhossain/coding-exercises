/*
 * jslint node:true
 */
/**
 * @param {number} number The number of stairs to print
 */
'use strict';
var print = function (number) {
    var increment,
        decrement,
        newLine = '\n',
        stair = '#',
        stairs = [],
        staircase = [];

    for (increment = 1; increment <= number; increment += 1) {
        stairs.push(Array(increment + 1).join('#'));
    }

    for (increment = 0, decrement = stairs.length; increment < stairs.length; increment += 1, decrement -= 1) {
        if (!staircase[0]) {
            staircase.push(' ' + Array(decrement).join(' ') + stairs[increment]);
        } else {
            staircase.push('\n ' + Array(decrement).join(' ') + stairs[increment]);
        }
    }

    return staircase.join('');
};

module.exports = {
    print: print
};
