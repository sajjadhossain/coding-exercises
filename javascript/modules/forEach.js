// Objective: Write a forEach function

// Exporting a module that takes a collection and callback function
module.exports = function (collection, callback, scope) {
  // if collection.toString is an object
  if (Object.prototype.toString.call(collection) === '[object Object]') {
    // For each key in the collection
    for (var prop in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, prop)) {
        callback.call(scope, collection[prop], prop, collection);
      }
    }
  } else {
    for (var i = 0, len = collection.length; i < len; i++) {
      callback.call(scope, collection[i], i, collection);
    }
  }
};
