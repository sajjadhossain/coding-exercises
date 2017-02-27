# Count Duplicates
## Objectives
### Objective 1
Consider an array of `n` integers, numbers. We define a non-unique value of numbers to be an integer that appears at least twice in the array. For example, if `numbers = [1, 1, 2, 2, 2, 3, 4, 3, 9]`, then there are a total of `3` non-unique values in the array (i.e., 1, 2, and 3).

Complete the `countDuplicates` function. It has 1 parameter: an array of integers, numbers. It must return an integer denoting the number of non-unique values in the numbers array.

#### Input

* The first line contains an integer, n, denoting the size of the numbers array.
* Each line i of the n subsequent lines (where 0 ≤ i < n) contains an integer describing the value of `numbers[i]`.

#### Constraints

1 ≤ n ≤ 1000 1 ≤ numbers[i] ≤ 1000

#### Output

The function must return an integer denoting the number of non-unique values in numbers. This is printed to stdout by locked stub code in the editor.

##### Sample Input 1

`8 1 3 1 4 5 6 3 2`

##### Sample Output 1

`2`

#####  Explanation 1

`n = 8` and numbers = `[1, 3, 1, 4, 5, 6, 3, 2]`.

The integers 1 and 3 both occur more than once, so we return `2` as our answer.

##### Sample Input 2

`6 1 1 2 2 2 3`

##### Sample Output 2

`2`

##### Explanation 2

`n = 6` and numbers = `[1, 1, 2, 2, 2, 3]`.

The integers 1 and 2 both occur more than once, so we return `2` as our answer.

## The Functions
I'm choosing to complete the exercise using modules for each objective. Then calling the function in a spec file. TDD if you will. I'll start with tests, then the modules.

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
