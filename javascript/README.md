# Foundation.js

This scaffold generates ES5, JSLint safe, test and modules for the functions passed.

## Usage
`moduleDirectory`, or the path to the module should exist, so create the required folders.

```js
// someFile.js
var Foundation = require('../../Foundation').
    moduleName = 'Test',
    moduleDirectory = './generated',
    functions = {
        test: function (input) {
            return input + ' tested!'
        }
    },
    inputs = [ 'inputString' ]

Foundation.makeModule(
    moduleName,
    moduleDirectory,
    functions,
    inputs
)
```
Then when we run `node someFile.js`, it generates the following...

### Module

```js
// generated/test.js
module.exports = {
    test: function (input) {
             return input + ' tested!'
         }
};
```

### Test

```js
// generated/test/specs/test.js
var assert = require('chai').assert
    , Test = require('../../Test'); 

describe('Test', function () {
    it.skip('test(inputString) => some desired output', function () {
        assert(
            Test.test(inputString) === 'expected value',
                'Expected Result: expected output, Actual Result: ' + Test.test(inputString)
        );
    });
});
```
