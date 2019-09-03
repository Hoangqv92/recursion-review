// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // your code goes here
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj) && obj.length === 0) {
    return '[]';
  }
  if (Array.isArray(obj) && obj.length > 0) {
    var arr = [];
    obj.forEach(function(element) {
      arr.push(stringifyJSON(element));
    });
    return '[' + arr + ']';
  }
  if (typeof obj === 'object') {
    var obj1 = [];
    for (var i in obj) {
      if (obj[i] !== undefined && typeof obj[i] !== 'function') {
        obj1.push(stringifyJSON(i) + ':' + stringifyJSON(obj[i]));
      }
    }
    return '{' + obj1.join() + '}';
  }
};
