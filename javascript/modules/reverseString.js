/*
 * jshint node:true
 */
/**
 * @param {string} string The string to reverseString
 * @param {string} expression The string to split by
 */
'use strict';
var splitMethod = function (string, expression) {
        var result = [],
            sentence = '',
            stringKeyIterator = 0,
            keyIterator = 0,
            letter;

        while (stringKeyIterator < string.length) {
            letter = string[stringKeyIterator++];
            if (letter === expression) {
                keyIterator++;
                sentence = '';
            } else {
                sentence = sentence + letter
                result[keyIterator] = sentence;
            }
        }
        if (!result[0]) {
            result[0] = '';
        }

        return result;
    },
    reverseMethod = function (string) {
        var result = '',
            increment;

        for (increment = (string.length - 1); increment >= 0; increment -= 1) {
            if (typeof string === 'string') {
                result = result + string[increment];
            } if (typeof string === 'object') {
                if (!result[0]) {
                    result = result + string[increment];
                } else {
                    result = result + ' ' + string[increment];
                }
            }
        }

        return result;
    },
    reverseByLetter = function (string) {
        var splitByLetter = string.split(''),
            reverseSplitByLetter = splitByLetter.reverse(),
            reverseSplitByLetterAndJoin = reverseSplitByLetter.join('');

        return reverseSplitByLetterAndJoin;
    },
    reverseBySpace = function (string) {
        var splitBySpace = string.split(' '),
            reverseSplitBySpace = splitBySpace.reverse(),
            reverseSplitBySpaceAndJoin = reverseSplitBySpace.join(' ');

        return reverseSplitBySpaceAndJoin;
    },
    reverseByLetterWithoutMethods = function (string) {
        var reverseSplitByLetter = reverseMethod(string);

        return reverseSplitByLetter;
    },
    reverseBySpaceWithoutMethods = function (string) {
        var splitBySpace = splitMethod(string, ' '),
            reverseSplitBySpace = reverseMethod(splitBySpace);

        return reverseSplitBySpace;
    };

module.exports = {
    byLetter: reverseByLetter,
    bySpace: reverseBySpace,
    byLetterWithoutMethods: reverseByLetterWithoutMethods,
    bySpaceWithoutMethods: reverseBySpaceWithoutMethods
};
