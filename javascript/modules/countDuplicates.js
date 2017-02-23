/*
* jshint node:true
*/
/**
* @param {array} input Array of numbers
*/
'use strict';
var countDuplicates = function (input) {
        var key,
            increment,
            item,
            totalNumbers = input[0],
            duplicates = [],
            totalDuplicates,
            instances = {};

        for (increment = 1; increment < totalNumbers + 1; increment += 1) {
            item = input[increment];
            instances[item] = instances[item] >= 1 ? instances[item] + 1 : 1;
        }

        for (key in instances) {
            if (instances.hasOwnProperty(key)) {
                if (instances[key] >= 2) {
                    duplicates.push(instances[key]);
                }
            }
        }

        totalDuplicates = duplicates.length;

        return totalDuplicates;
    };

module.exports = countDuplicates;
