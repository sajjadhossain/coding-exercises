# Compare Objects
## Objectives
### Objective 1
Write a function that takes two objects as an input and returns if objects match as a boolean.

**Input example** = `{ a: 1, b: 2, c: 3}, { a: 1, b: 1, c: 4}`

**Output example** = `false`

[Read more on Objective 1...](#Objective-1)

### Objective 2 
Write a function that takes two objects as an input and returns the keys for differences between the objects.

**Input example** = `{ a: 1, b: 2, c: 3}, { a: 1, b: 1, c: 4}`

**Output example** = `b, c`

[Read more on Objective 2...](#Objective-2)

### Objective 3
Complete [Objective 2](#Objective-2) without using libraries.  

**Input example** = `{ a: 1, b: 2, c: 3}, { a: 1, b: 1, c: 4}`

**Output example** = `b, c`

[Read more on Objective 3.B...](#Objective-3.B)

## The Functions
I'm choosing to complete these exercised using modules for each objective. Then calling the function in a spec file. TDD if you will. I'll start with tests, then the modules.

### <div id="Objective-1">Objective 1</div>
#### The test
See the test [here](../../javascript/modules/compareObjects.js).

```js
// test/specs/compareObjects.js
var assert = require('chai').assert,
    _ = require('lodash'),
    doObjectsEqual = require('../../../modules/compareObjects').doObjectsEqual,
    testData = [
        {
            1: { a: 1, b: 2, c: 3},
            2: { a: 1, b: 1, c: 4},
            result: false
        },
        {
            1: { a: 1, b: 2, c: 3},
            2: { b: 2, a: 1},
            result: false
        },
        {
            1: { a: 1, b: 2, c: 3},
            2: { a: 1, b: 2, c: 3},
            result: true
        }
    ];
    
describe('do objects equal', function () {
    'use strict';
    _.forEach(testData, function (value) {
        it(
            'doObjectsEqual(' + JSON.stringify(value[1]) + ', ' + JSON.stringify(value[2]) + ')' + ' => ' + value.result,
            function () {
                assert(
                    doObjectsEqual(value[1], value[2]) === value.result,
                    'Expected Result: ' + value.result + ' Actual Result: ' + value[1]
                );
            }
        );
    });
});
```
#### The test explained
We have `testData`. An array of objects that each nest two objects, and an expected result.

We created a module and exported a function called `doObjectsEqual`. Using mocha, chai we assert that when I pass `doObjectsEqual` two objects it returns the expected result boolean from `testData`, for each data set. We looped using `lodash`.

#### The module
See the code [here](../../javascript/modules/compareObjects.js).

```js
// compareObjects.js
module.exports = {
    doObjectsEqual: function (object1, object2) {
            return JSON.stringify(object1) === JSON.stringify(object2);
    }
};
```
#### The code explained
It's simple, just return the boolean that a strict equal against two variables returns. We wrap that in an if statement that checks that the parameters are not undefined.

### <div id="Objective-2">Objective 2</div>
#### The test
See the test [here](../../javascript/modules/compareObjects.js).

```js
// test/specs/compareObjects.js
var assert = require('chai').assert,
    _ = require('lodash'),
    listObjectDifferences = require('../../../modules/compareObjects'). listObjectDifferences,
    testData = [
        {
            1: { a: 1, b: 2, c: 3},
            2: { a: 1, b: 1, c: 4},
            difference: 'b,c'
        },
        {
            1: { a: 1, b: 2, c: 3},
            2: { b: 2, a: 1},
            difference: 'c'
        },
        {
            1: { a: 1, b: 2, c: 3},
            2: { a: 1, b: 2, c: 3},
            difference: ''
        }
    ];
    
describe('list object differences', function() {
  _.forEach(testData, function (value) {
        it('listObjectDifferences(' + JSON.stringify(value[1]) + ', ' + JSON.stringify(value[2]) + ')' + ' => ' + value.difference,
            function () {
                assert(
                    listObjectDifferences(value[1], value[2]) === value.difference,
                    'Expected Result: ' + value.result + ' Actual Result: ' + value[1]
                );
            }
        );
    });
});
```

#### The test explained
We have `testData`. An array of objects that each nest two objects, and an expected difference.

We created a module and exported a function called `listObjectDifferences`. Using mocha, chai we assert that when I pass `listObjectDifferences` two objects it returns the expected difference from `testData`, for each data set. We looped using `lodash`.

#### The code
See the code [here](../../javascript/modules/compareObjects.js).

```js
module.exports = {
    listObjectDifferences = function (object1, object2) {
        var reduceToKeys = _.reduce(object1, function (result, value, key) {
            return _.isEqual(value, object2[key]) ? result : result.concat(key);
        }, []);

        return reduceToKeys.toString();
    }
};
```
#### The code explained
For this one we used a couple of `lodash`'s handy functions. We start by reducing the first object by keys, and we push the key to an array if the key for the first object is found in the second. The latter most is done via an `isEqual` callback. We wrap that in an if statement that checks that the parameters are not undefined.

### <div id="Objective-3">Objective 3</div>
#### The test
See the test [here](../../javascript/modules/compareObjects.js).

```js
// test/specs/compareObjects.js
var assert = require('chai').assert,
    _ = require('lodash'),
    listObjectDifferencesWithoutLibraries = require('../../../modules/compareObjects').listObjectDifferencesWithoutLibraries,
    testData = [
        {
            1: { a: 1, b: 2, c: 3},
            2: { a: 1, b: 1, c: 4},
            difference: 'b,c'
        },
        {
            1: { a: 1, b: 2, c: 3},
            2: { b: 2, a: 1},
            difference: 'c'
        },
        {
            1: { a: 1, b: 2, c: 3},
            2: { a: 1, b: 2, c: 3},
            difference: ''
        }
    ];
    
describe('list object differences without libraries', function() {
  _.forEach(testData, function (value) {
        it('listObjectDifferencesWithoutLibraries(' + JSON.stringify(value[1]) + ', ' + JSON.stringify(value[2]) + ')' + ' => ' + value.difference,
            function () {
                assert(
                    listObjectDifferencesWithoutLibraries(value[1], value[2]) === value.difference,
                    'Expected Result: ' + value.result + ' Actual Result: ' + value[1]
                );
            }
        );
    });
});
```

#### The test explained
We have `testData`. An array of objects that each nest two objects, and an expected difference.

We created a module and exported a function called `listObjectDifferencesWithoutLibraries`. Using mocha, chai we assert that when I pass `listObjectDifferencesWithoutLibraries` two objects it returns the expected difference from `testData`, for each data set. We looped using `lodash`.

#### The code
See the code [here](../../javascript/modules/compareObjects.js).

```js
module.exports = {
    listObjectDifferencesWithoutLibraries: function (object1, object2) {
        if (object1 && object2) {
            var key,
                differentKeys = [];

            for (key in object1) {
                if(object2.hasOwnProperty(key)) {
                    if (object1[key] !== object2[key]) {
                        differentKeys.push(key);
                    }
                } else {
                    differentKeys.push(key);
                }
            };

            return differentKeys.toString();
        }
    }
};
```
#### The code explained
For this one we loop for each key in the first object. If the second object does contain the `key`, then if the `key` of object 1 does not strict equal the `key` for object 2, push to the `differentKeys` array. Else push the non-existing `key` to the `differentKeys`. Return the differemces as a string. We wrap that in an if statement that checks that the parameters are not undefined.
