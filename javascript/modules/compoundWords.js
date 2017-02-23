/*
 * jshint node:true, mocha:true
 */
/**
 * @param {string} word The word under test`
 * @param {array} words An array of words, dictionary
 */
'use strict';
var isCompoundWord = function (word, words) {
        var increment,
            isCompound = false,
            occurences = [];

        for (increment = 0; increment < words.length; increment += 1) {
            if (words.hasOwnProperty(increment)) {
                if (word.match(words[increment]) !== null && words[increment] !== word) {
                    occurences.push(word.match(words[increment]));
                }
                if (Object.keys(occurences).length > 1) {
                    isCompound = true;
                }
            }
        }

        return isCompound;
    },
    returnCompoundWords = function (word, words) {
        var increment,
            compoundWords,
            occurences = [];

        for (increment = 0; increment < words.length; increment += 1) {
            if (words.hasOwnProperty(increment)) {
                if (word.match(words[increment]) !== null && words[increment] !== word) {
                    occurences.push(word.match(words[increment]));
                }
            }
        }

        if (occurences.length > 1) {
            compoundWords = occurences.toString();
        } else {
            compoundWords = '';
        }

        return compoundWords;
    };

module.exports = {
    isCompoundWord: isCompoundWord,
    returnCompoundWords: returnCompoundWords
};
