# Count Duplicates
## Objectives
### Objective 1
Write a function that takes a array of strings as input and returns a count for duplicates. The first integer passed in the array is the count for the array.


**Input example** = `[8, 1, 3, 1, 4, 5, 6, 3, 2]`

**Output example** = `2`

[Read more on Objective 1...](#Objective-1)

## The Functions
I'm choosing to complete these exercise using modules for each objective. Then calling the function in a spec file. TDD if you will. I'll start with tests, then the modules.

### <div id="Objective-1">Objective 1</div>
#### The test
See the test [here](../../javascript/modules/test/specs/countDuplicates.js).

```js
// test/specs/countDuplicates.js
var assert = require('chai').assert,
    _ = require('lodash'),
    countDuplicates = require('../../../modules/countDuplicates'),
    testData = {
        1: {
            input: [17,1,6,1,2,3,4,6,6,4,3,0,11,24,11,66,41,42],
            expectedOutcome: 5
        },
        2: {
            input: [5,1,1,2,3,4],
            expectedOutcome: 1
        }
    };

describe('count duplicates', function () {
    _.forEach(inputs, function (data) {
        it('countDuplicates(' + data.input + ') => ' + data.expectedOutcome, function() {
            assert(
                countDuplicates(data.input) === data.expectedOutcome,
                'Expected Result: ' + data.expectedOutcome + ' Actual Result: ' + countDuplicates(data.input)
            );
        });
    });
});
```
#### The test explained
We have `testData`. An array of objects that each contain an array of numbers and a count for the number of duplicates.

We created a module and exported a function called `countDuplicates`. Using mocha, chai we assert that when I pass `countDuplicates` an array of numbers, it returns the expected outcome integer from `testData`, for each data set. We looped using `lodash`.

#### The module
See the code [here](../../javascript/modules/compoundWords.js).

```js
// countDuplicates.js
module.exports = {
    countDuplicates: function (input) {
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
```
#### The code explained
Istantiate a variable to loop the keys of an array, an increment, an item to search for and return count, and the count as `input[0]`. For each number in the array, push it with itself as a key to the `instances` object. If the item already exists in `instances` then add one to the count, else it equals 1.

For each key in `instances`, if the count is greater than or equal to 2, then push the key the `duplicates` array. Return the length of `duplicates`.
