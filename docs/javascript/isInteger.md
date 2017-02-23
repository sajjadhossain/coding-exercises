# Is Integer
## Objectives
### Objective 1
Write a function that returns a boolean if integer.

*An average/mean is the sum of all integers divided by the number of integers*

**Input example** = `1.5`

**Output example** = `false`

[Read more on Objective 1...](#Objective-1)

## The Functions
I'm choosing to complete these exercise using modules for each objective. Then calling the function in a spec file. TDD if you will. I'll start with tests, then the modules.

### <div id="Objective-1">Objective 1</div>
#### The test
See the test [here](../../javascript/modules/test/specs/isInteger.js).

```js
// test/specs/isInteger.js
var assert = require('chai').assert,
    _ = require('lodash'),
    isInteger = require('../../../modules/isInteger').isInteger,
    valuesToTest = [
        {
            'input': NaN,
            'result': false
        },
        {
            'input': undefined,
            'result': false
        },
        {
            'input': 3.1234,
            'result': false
        },
        {
            'input': '2',
            'result': false
        },
        {
            'input': '2.0',
            'result': false
        },
        {
            'input': 1,
            'result': true
        }
    ];

describe('is integer', function() {
    _.forEach(valuesToTest, function(value) {
        it('isInteger(' + value.input + ')' + ' => ' + value.result, function() {
            assert(
                isInteger(value.input) === value.result,
                'Expected Result: ' + value.result + ' Assert Result: ' + isInteger(value.input)
            );
        });
    });
});
```
#### The test explained
We have `testData`. An array of objects. Each object contains a set of numbers and the average.

We created a module and exported a function called `isInteger`. Using mocha, chai we assert that when I pass `isInteger` an number, it returns boolean from `testData`, for each data set. We looped using `lodash`.

#### The module
See the code [here](../../javascript/modules/isInteger.js).

```js
// isInteger.js
module.exports = function (number) {
    return Number.isInteger(number);
};
```
#### The code explained
Simply return the boolean from javascripts `isInteger` method. You can also return `number % 1 === 0`.
