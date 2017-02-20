/*
 * jshint node:true
 * Schema for makeModule output
 */

module.exports = {
    id: '/MakeModule',
    type: 'object',
    properties: {
        moduleName: {
            type: 'string'
        },
        moduleDirectory: {
            type: 'string'
        },
        modulePath: {
            type: 'string'
        },
        functions: {
            type: 'function'
        },
        numberOfFunctions: {
            type: 'number'
        }
    },
    required: ['moduleName', 'moduleDirectory']
};
