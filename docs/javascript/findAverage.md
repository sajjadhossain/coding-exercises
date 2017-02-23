# Find Average
## Objectives
### Objective 1
Write a function that takes a array of numbers and returns its average.

*An average/mean is the sum of all integers divided by the number of integers*

**Input example** = `[1, 2, 3, 4, 5]`

**Output example** = `3`

[Read more on Objective 1...](#Objective-1)

## The Functions
I'm choosing to complete these exercised using modules for each objective. Then calling the function in a spec file. TDD if you will. I'll start with tests, then the modules.

### <div id="Objective-1">Objective 1</div>
#### The test
See the test [here](../../javascript/modules/test/specs/findAverage.js).

```js
// test/specs/findAverage.js
var assert = require('chai').assert,
    _ = require('lodash'),
    findAverage = require('../../../modules/findAverage'),
    testData = [
        {
            'numbers': [1,2,3,4,5,6,7,8,10],
            'average': 5.111111111111111
        },
        {
            'numbers': [1,2,3,4,5],
            'average': 3
        },
        {
            'numbers':  [1,1,1],
            'average': 1
        }
    ];

describe('find averages', function () {
    _.forEach(testData, function (data) {
        it('testData(' + data.numbers.toString() + ')' + ' => ' + data.average, function() {
            assert(
                findAverage(data.numbers) === data.average,
                'Expected Result: ' + findAverage(data.numbers) + ' Actual Result: ' + data.average
            );
        });
    });
});
```
#### The test explained
We have `testData`. An array of objects. Each object contains a set of numebrs and the average.

We created a module and exported a function called `findAverage`. Using mocha, chai we assert that when I pass `findAverage` an array of numbers, it returns the average integer from `testData`, for each data set. We looped using `lodash`.

#### The module
See the code [here](../../javascript/modules/findAverage.js).

```js
// findAverage.js
module.exports = function (numbers) {
    var total = 0,
        increment,
        average;

    for (increment = 0; increment < numbers.length; increment += 1) {
        total += numbers[increment];
    }

    average = total / numbers.length;

    return average;
};
```
#### The code explained
Istantiate a variable called `total`. In our loop we add each integer to the total. Then return our average which is `total` divided by the length of the array passed.
