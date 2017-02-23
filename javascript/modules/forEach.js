/*
* jshint node:true
*/
/**
* @param {object|array|string|number} collection a parameter to loop through
* @param {callback} function a function for the user
* @param {object} scope the scope of an instance of for each
*/
'use strict';
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
