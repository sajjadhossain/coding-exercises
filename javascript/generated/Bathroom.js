/*
 * jshint node:true
 */
/*
 * @param {type} user Set type(s) and description. ,
 * @param {type} type Set type(s) and description. ,
 * @param {type} question Set type(s) and description. ,
 * @param {type} response Set type(s) and description. 
 */
module.exports = {
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
};