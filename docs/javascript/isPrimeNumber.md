# Is Prime Number
## Objectives
### Objective 1
Write a function that takes a number an returns a boolean if its a prime numbers.

*A prime number is a number that is only divisible by 1 and itself.*

**Input example** = `4`

**Output example** = `false`

[Read more on Objective 1...](#Objective-1)

## The Functions
I'm choosing to complete these exercise using modules for each objective. Then calling the function in a spec file. TDD if you will. I'll start with tests, then the modules.

### <div id="Objective-1">Objective 1</div>
#### The test
See the test [here](../../javascript/modules/test/specs/isPrimeNumber.js).

```js
// test/specs/isPrimeNumber.js
var assert = require('chai').assert,
    _ = require('lodash'),
    isPrimeNumber = require('../../../modules/isPrimeNumber');
    testData = [
        1: {
            'input': 1,
            'result': false
        },
        2: {
            'input': 4,
            'result': false
        },
        3: {
            'input':  3,
            'result': true
        },
        4: {
            'input':  20,
            'result': false
        },
        5: {
            'input':  199,
            'result': true
        }
    ];

describe('is prime number', function() {
    _.forEach(valuesToTest, function(value) {
        it('isPrimeNumber(' + value.input + ')' + ' => ' + value.result, function() {
            assert(
                isPrimeNumber(value.input) === value.result,
                'Expected Result: ' + isPrimeNumber(value.input) + ' Actual Result: ' + value.result
            );
        });
    });
});
```
#### The test explained
We have `testData`. An array of objects. Each object contains a set of numbers and the average.

We created a module and exported a function called `findAverage`. Using mocha, chai we assert that when I pass `findAverage` an array of numbers, it returns the average integer from `testData`, for each data set. We looped using `lodash`.

#### The module
See the code [here](../../javascript/modules/isPrimeNumber.js).

```js
// isPrimeNumber.js
module.exports = function (number) {
    var increment;
    for (increment = 2; increment < number; increment += 1) {
        if (number % increment === 0) {
            return false;
        }
    }

    return number > 1;
};
```
#### The code explained
Loop until the number and keep dividing, if not 0, return false, else it's greater than one, so, true.
