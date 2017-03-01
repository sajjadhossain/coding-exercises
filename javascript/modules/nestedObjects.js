/* jslint node:true */
/**
 * @param {object} input
 */
'use strict';
var returnValues = function (input) {
        var isObject,
            message = 'Not an object',
            increment,
            current,
            values = [];

        if (input) {
            if (typeof input === 'object') {
                isObject = true;
                for (increment = 0; increment < input.length; increment += 1) {
                    current = input[increment];
                    if (typeof current === 'number') {
                        values.push(current)
                    }
                    else {
                        values = values.concat(returnValues(current));
                    }
                }
            } else {
                isObject = false;
                return message;
            }
        }
        return values;
    };

module.exports = {
    returnValues: returnValues
}
