/*
 * jslint node: true, mocha: true
 * Testing foundation for module/function scaffolding
 * In this example im gonna test my module to create a function and a test spec for a Bathroom Story App
 * The story will simply tell the story of a user using the bathroom
 */

var assert = require('chai').assert,
    Foundation = require('../../Foundation'),
    tab = '    ',
    type,
    user1 = 'ME',
    user2 = 'HOST',
    user1Question = 'Hello! May I use your bathroom?',
    user2Response = 'Sure, just leave it how you see it, eh?',
    user2ResponseIfClogged = 'What the ... ?!?',
    moduleName = 'Bathroom',
    moduleDirectory = './generated',
    functions,
    use = {
        ask: function (user, question) {
            'use strict';
            var askUser = user + ': ' + question;

            return askUser;
        },
        respond: function (user, response) {
            'use strict';
            var respondToUser = user + ': ' + response;

            return respondToUser;
        },
        reason: function (user, type) {
            'use strict';
            var reason;

            switch (type) {
            case 1:
                reason = user + ': I need to urinate.';
                break;
            case 2:
                reason = user + ': I need to deficate.';
                break;
            case 3:
                reason = user + ': I need to vomit.';
                break;
            case 4:
                reason = user + ': I need to ... I can\'t control bodily functions!';
                break;
            default:
                reason = user + ': ... Umm, actually I don\'t think I need to.';
            }

            return type ? reason : user + ': ... Umm, actually I don\'t think I need to.';
        },
        gratitude: function (user) {
            'use strict';
            var sayThanks = user + ': Thanks so much!';

            return sayThanks;
        },
        flush: function (type) {
            'use strict';
            var isClogged;

            if (type === 4) {
                isClogged = 'clogged';
            } else {
                isClogged = 'not clogged';
            }

            return isClogged;
        },
        toilet: function (type) {
            'use strict';

            return use.flush(type);
        }
    },
    input = ,
    output = 'function';

describe('BATHROOM STORY', function () {
    'use strict';
    var type = 4;

    it('use.ask(\'' + user1 + '\', \'' + user1Question + '\') => ME: Hello! May I use your bathroom?', function () {
        assert(
            use.ask(user1, user1Question) === 'ME: Hello! May I use your bathroom?',
            'Expected: \'ME: Hello! May I use your bathroom?\'' +
                'Actual: ' + use.ask(user1, user1Question)
        );
    });
    it('use.reason(\'' + user1 + '\', \'' + type + '\') => ME: I need to ... I can\'t control bodily functions!', function () {
        assert(
            use.reason(user1, type) === 'ME: I need to ... I can\'t control bodily functions!',
            'Expected: \'ME: I need to ... I can\'t control bodily functions!\'' +
                'Actual: ' + use.reason(user1, type)
        );
    });
    it('use.respond(\'' + user2 + '\', \'' + user2Response + '\') => HOST: Sure, just leave it how you see it, eh?', function () {
        assert(
            use.respond(user2, user2Response) === 'HOST: Sure, just leave it how you see it, eh?',
            'Expected: \'HOST: Sure, just leave it how you see it, eh?\'' +
                'Actual: ' + use.reason(user1, type)
        );
    });
    it('use.gratitude(\'' + user1 + '\') => ME: Thanks so much!', function () {
        assert(
            use.gratitude(user1) === 'ME: Thanks so much!',
            'Expected: \'ME: Thanks so much!\'' +
                'Actual: ' + use.reason(user1)
        );
    });
    it('use.toilet(\'' + type + '\') => uses toilet and returns if clogged', function () {
        assert(
            use.toilet(type) === 'clogged',
            'Expected: \'clogged\'' +
                'Actual: ' + use.toilet(type)
        );
    });
    if (use.toilet(type) === 'clogged') {
        it('use.respond(\'' + user2 + '\', \'' + user2ResponseIfClogged + '\') => HOST: What the ... ?!?', function () {
            assert(
                use.respond(user2, user2ResponseIfClogged) === 'HOST: What the ... ?!?',
                'Expected: \'HOST: What the ... ?!?\'' +
                    'Actual: ' + use.respond(user2, user2ResponseIfClogged)
            );
        });
    }
});


describe('Foundation', function () {
    'use strict';
    functions = use;

    it('makeModule(moduleName, moduleDirectory, functions, input, output) => makes a module and test in directory passed', function () {
        var createModule = Foundation.makeModule(
            moduleName,
            moduleDirectory,
            functions,
            input,
            output
        );

        assert(
            (createModule.module !== undefined && createModule.test !== undefined),
            'module returned undefined'
        );

        console.log(createModule)
    });
});
