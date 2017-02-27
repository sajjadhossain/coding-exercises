/*
 * jslint node: true
 */
/**
 * @param {array} input The values to get max step for
 */
'use strict';
var maxStep = function (input) {
        var increment,
            numberOfActions = input[0],
            stepToAvoid = input[1],
            maxStep;

        for (increment = 0; increment < numberOfActions; increment += 1) {
            if (increment + 2 === stepToAvoid) {
                maxStep = increment + 3;
            }
            if (increment + 1 === stepToAvoid) {
                maxStep = increment + 2;
            }
            if (numberOfActions > 2) {
                maxStep = increment + 3
            }
        }

        return maxStep;
    };

module.exports = {
    maxStep: maxStep
};
