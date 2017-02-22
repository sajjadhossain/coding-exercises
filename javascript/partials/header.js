/*
 * jshint node:true
 * Header partial
 */

'use strict';
var fs = require('fs'),
    compiledHeader,
    headerParsed,
    headerInjected,
    headerToStringAgain;

module.exports = {
    comments: function (input) {
        var increment,
            top = '/*' +
                '\n * jshint node:true' +
                '\n */\n',
            moduleName = input.moduleName,
            inputs = input.inputs,
            comments = [],
            commentsForInput = '@param {type} ',
            commentsForAllInput = '',
            beginComment = '/*',
            newLine = '\n * ',
            endComment = '\n */\n',
            allComments;

        for (increment = 0; increment < inputs.length; increment += 1) {
            comments.push(newLine + commentsForInput + inputs[increment] + ' Set type(s) and description. ');
        }

        allComments = top +
            beginComment +
            comments.join() +
            endComment;

        return allComments;
    },
    mocha: function () {
        'use strict';
        var comments = '/*' +
            '\n * jshint node:true, mocha:true' +
            '\n */ \n',
            chaiRequire = 'var assert = require(\'chai\').assert',
            mochaComments = comments + chaiRequire;

        return mochaComments;
    }
};
