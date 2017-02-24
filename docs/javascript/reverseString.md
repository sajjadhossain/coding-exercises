# Reverse String
## Objectives
### Objective 1
Write a function that reverse orders a passed string by letter.

**Input example** = `.ecnetnes a si sihT`

**Output example** = `This is a sentence.`

[Read more on Objective 1...](#Objective-1)

### <div id="Objective-1">Objective 1</div>
#### The test
See the test [here](../../javascript/modules/test/specs/reverseString.js).

```js
// test/specs/reverseString.js
var assert = require('chai').assert,
    _ = require('lodash'),
    reverseString = require('../../../modules/reverseString.js'),
    reverseStringByLettersWithoutMethods = reverseString.byLetterWithoutMethods,
    testDataByLetter = [
        {
            'reverse': '.ecnetnes a si sihT',
            'expected': 'This is a sentence.',
        },
        {
            'reverse': '.ecnetnes rehtona si sihT',
            'expected': 'This is another sentence.'
        },
        {
            'reverse': '.ecnetnes rerehtona si sihT',
            'expected': 'This is anotherer sentence.'
        }
    ];
    
describe('reverse string by letters without methods', function() {
    _.forEach(testDataByLetter, function (data) {
        it('reverseStringByLettersWithoutMethods(' + data.reverse + ')' + ' => ' + data.expected, function() {
            assert(
                reverseStringByLettersWithoutMethods(data.reverse) === data.expected,
                '\n     Expected Result: ' + data.expected + '\n     Actual Result: ' + reverseStringByLettersWithoutMethods(data.reverse)
            );
        });
    });
});
```
#### The test explained
We have `testData`. An array of objects. Each object contains a sentence in reverse, as well as its' expected value after being reversed.

We created a module and exported a function called `reverseStringByLettersWithoutMethods`. Using mocha, chai we assert that when I pass `reverseStringByLettersWithoutMethods` a string, it returns the string reversed. We looped using `lodash`.

#### The module
See the code [here](../../javascript/modules/reverseString.js).

```js
// reverseString.js
module.exports = {
    reverseStringByLettersWithoutMethods = function (string) {
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
    }
};
```
#### The code explained
Loop through the string, decrementing from the length of the string. Then add the value to another string and return it.
