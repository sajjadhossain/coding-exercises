/*
 * jshint node:true
 * Schema for makeModule output
 */

module.exports = {
    id: '/WriteModule',
    type: 'object',
    properties: {
        module: {
            type: 'object',
            properties: {
                file: {
                    type: 'string'
                },
                data: {
                    type: 'string'
                }
            }
        },
        test: {
            type: 'object',
            properties: {
                file: {
                    type: 'string'
                },
                data: {
                    type: 'string'
                }
            }
        },
        args: {
            type: 'object'
        }
    },
    required: ['module', 'test']
};
