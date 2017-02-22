/*
 * jslint node: true
 * Playground
 */

 var Foundation = require('./Foundation'),
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
 );
