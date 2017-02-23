# For Each
## Objectives
### Objective 1
Write a forEach function, like `lodash`'s `.forEach`, that loops through an object and provides the user with a callback function.

**Input example** = `{ 1: 1 }`

**Output example** = `1`

[Read more on Objective 1...](#Objective-1)

## The Functions
I'm choosing to complete these exercised using modules for each objective. Then calling the function in a spec file. TDD if you will. I'll start with tests, then the modules.

### <div id="Objective-1">Objective 1</div>
#### The test
See the test [here](../../javascript/test/specs/modules/forEach.js).

```js
// test/specs/forEach.js
var assert = require('chai').assert,
    _ = require('lodash'),
    forEach = require('../../../modules/forEach'),
    testData = [
        1,
        { 1: 1 },
        [ 1, 2 ],
        new Object(),
        new Array(),
        'test'
    ];

describe('for each', function() {
    _.forEach(testData, function(data, key) {
        it('forEach(' + data + ')' + ' => ' + data, function() {
            forEach(data, function(collection, key, value) {
                return assert(
                    collection === data[key],
                    'Expected Result: ' + collection + ' Actual Result: ' + data[key]
                );
            });
        });
    });
});
```
#### The test explained
We have `testData`. An array of values. Each value is different.

We created a module and exported a function called `forEach`. Using mocha, chai we assert that when I pass `forEach` anything but a function, it returns a callback function against key and values. We looped using `lodash`.

#### The module
See the code [here](../../javascript/modules/forEach.js).

```js
// forEach.js
module.exports = function (collection, callback, scope) {
    var property,
        increment;

    if (Object.prototype.toString.call(collection) === '[object Object]') {
        for (property in collection) {
            if (Object.prototype.hasOwnProperty.call(collection, property)) {
                callback.call(scope, collection[property], property, collection);
            }
        }
    } else {
        for (increment = 0; increment < collection.length; increment += 1) {
            callback.call(scope, collection[increment], increment, collection);
        }
    }
};
```
#### The code explained
We have to return the user a function. So we start by checking the input type. If its an object, then call `callback` with with the each value, its property, and the entire collection. Else we loop through the input, and call the `callback` with the aforementioned parameters.
