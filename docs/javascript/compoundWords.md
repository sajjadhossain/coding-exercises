# Compound Words
## Objectives
### Objective 1
Write a function that takes a word and an array of words as input and returns if word is compound word as a boolean.

*Compound words are words that are made up of two or more whole words.*

**Input example** = `shutterstock, [shut,shutter,stock,shutterstock,snap,chat,snapchat]`

**Output example** = `true`

[Read more on Objective 1...](#Objective-1)

### Objective 2 
Write a function that takes a word and an array of words as input and returns the words it is a compound of.

**Input example** = `shutterstock, [shut,shutter,stock,shutterstock,snap,chat,snapchat]`

**Output example** = `shut, shutter, stock`

[Read more on Objective 2...](#Objective-2)

## The Functions
I'm choosing to complete these exercise using modules for each objective. Then calling the function in a spec file. TDD if you will. I'll start with tests, then the modules.

### <div id="Objective-1">Objective 1</div>
#### The test
See the test [here](../../javascript/test/specs/modules/compoundWords.js).

```js
// test/specs/compoundWords.js
var assert = require('chai').assert,
    _ = require('lodash'),
    compoundWords = require('../../../modules/compoundWords'),
    isCompoundWord = compoundWords.isCompoundWord,
    testData = [
        {
            input: 'shut',
            result: false
        },
        {
            input: 'shutter',
            result: false
        },
        {
            input: 'stock',
            result: false
        },
        {
            input: 'shutterstock',
            result: true
        },
        {
            input: 'snap',
            result: false
        },
        {
            input: 'chat',
            result: false
        },
        {
            input: 'snapchat',
            result: true
        }
    ],
    dictionary;
    
describe('is compound word', function() {
    dictionary = [];

    _.forEach(testData, function (data) {
        dictionary.push(data.input);
    });

    _.forEach(testData, function(data) {
        it('isCompoundWord(' + data.input + ', [' + dictionary + '])' + ' => ' + data.result, function () {
              assert(
                  isCompoundWord(data.input, dictionary) === data.result,
                  'Expected Result:' + data.result + ' Actual Result: ' +isCompoundWord(data.input, dictionary)
              );
        });
    });
});
```
#### The test explained
We have `testData`. An array of objects that each contain a word and an array of words that make up the word.

We created a module and exported a function called `isCompoundWord`. Using mocha, chai we assert that when I pass `isCompoundWord` a word and array of words, it returns the expected result boolean from `testData`, for each data set. We looped using `lodash`.

For the first loop, we make a dictionary in our test, then we do another loop on `testData`,  after the dictionary is defined.

#### The module
See the code [here](../../javascript/modules/compoundWords.js).

```js
// compoundWords.js
module.exports = {
    isCompoundWord = function (word, words) {
        var increment,
            isCompound = false,
            occurences = [];

        for (increment = 0; increment < words.length; increment += 1) {
            if (word.match(words[increment]) !== null && words[increment] !== word) {
                occurences.push(word.match(words[increment]));
            }
            if (Object.keys(occurences).length > 1) {
                isCompound = true;
            }
        }
        
        return isCompound;
    }
};
```
#### The code explained
Istantiate a variable to increment, set `isCompound` to false. For each word in the dictionary, if `word` matches the `word` in the dictionary, and if the `word` is not an instance of itself, push it to `occurences`. If the length of occurences is greater than 2, then `isCompound = true`.

### <div id="Objective-2">Objective 2</div>
#### The test
See the test [here](../../javascript/test/specs/modules/compoundWords.js).

```js
// test/specs/compoundWords.js
var assert = require('chai').assert,
    _ = require('lodash'),
    returnCompoundWords = compoundWords.returnCompoundWords,
    isCompoundWord = compoundWords.isCompoundWord,
    testData = [
        {
            input: 'shut',
            words: ''
        },
        {
            input: 'shutter',
            words: ''
        },
        {
            input: 'stock',
            words: ''
        },
        {
            input: 'shutterstock',
            words: 'shut,shutter,stock'
        },
        {
            input: 'snap',
            words: ''
        },
        {
            input: 'chat',
            words: ''
        },
        {
            input: 'snapchat',
            words: 'snap,chat'
        }
    ],
    dictionary;
    
describe('return compound words', function() {
    dictionary = [];

    _.forEach(testData, function (data) {
        dictionary.push(data.input);
    });

    _.forEach(testData, function(data) {
        it('returnCompoundWords(' + data.input + ', [' + dictionary + '])' + ' => ' + data.words, function () {
            assert(
                returnCompoundWords(data.input, dictionary) === data.words,
                'Expected Result:' + data.words + ' Actual Result: ' + returnCompoundWords(data.input, dictionary)
            );
        });
    });
});
```
#### The test explained
We have `testData`. An array of objects that each contain a word and a boolean.

We created a module and exported a function called `isCompoundWord`. Using mocha, chai we assert that when I pass `isCompoundWord` a word and array of words, it returns the expected result boolean from `testData`, for each data set. We looped using `lodash`.

For the first loop, we make a dictionary in our test, then we do another loop on `testData`,  after the dictionary is defined.

#### The module
See the code [here](../../javascript/modules/compoundWords.js).

```js
// compoundWords.js
module.exports = {
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
    }
};
```
#### The code explained
Istantiate a variable to increment, set `isCompound` to false. For each word in the dictionary, if `word` matches the `word` in the dictionary, and if the `word` is not an instance of itself, push it to `occurences`. If the length of occurences is greater than 2, then return the occurrences.
