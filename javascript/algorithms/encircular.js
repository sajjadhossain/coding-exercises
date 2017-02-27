/*
 * jslint node:true
 */
/**
 * @param {string} input The input to encircular
 */
'use strict';
var doesCircleExist = function (input) {
        var isCircle = [],
            key,
            increment1,
            increment2,
            inputArray = input.split(' '),
            commands = {};

        for (increment1 = 1, increment2 = 0; increment1 <= inputArray[0]; increment1 += 1, increment2 += 1) {
            commands[increment2] = inputArray[increment1];
        }

        for (key in commands) {
            switch (commands[key]) {
                case 'L':
                    isCircle.push('YES');
                    break;
                case 'R':
                    isCircle.push('YES');
                    break;
                default:
                    isCircle.push('NO');
            }
        }

        return isCircle.join(', ');
    };

module.exports = {
    doesCircleExist: doesCircleExist
};
