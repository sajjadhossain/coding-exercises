/*
* jshint node:true
*/
/**
* @param {array} input an array of numbers
*/
'use strict';
var temporaryInteger,
    greatestCommonDenominator,
    absoluteX,
    absoluteY,
    ofTwo = function (x, y) {
        absoluteX = Math.abs(x);
        absoluteY =  Math.abs(y);

        while (absoluteY) {
            temporaryInteger = absoluteY;
            absoluteY = absoluteX % absoluteY;
            absoluteX = temporaryInteger;
        }

        greatestCommonDenominator = absoluteX;

        return greatestCommonDenominator;
    };

module.exports = function (input) {
    var first,
        second,
        increment;

    if (input.length === 2) {
        return ofTwo(input[0], input[1]);
    }
    if (input.length > 2) {
        first = input[0];

        for (increment = 1; increment < input.length; increment += 1) {
            second = input[increment];
            first = ofTwo(first, second);
        }

        greatestCommonDenominator = first;

        return greatestCommonDenominator;
    }
};
