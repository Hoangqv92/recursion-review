// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var currentPlace = 1;
  // your code goes here
  // null, boolean
  var specialCase = function(result) {
    if (result === 'n') {
      return null;
    }
    if (result === 't') {
      return true;
    }
    if (result === 'f') {
      return false;
    }
  };
  // number
  var numberCase = function(result) {
    return Number(result);
  };
  // string
  var stringCase = function(result) {

  }


  // object

  // array

  for (var i = 0; i < json.length; i++) {
    nextChar(json.charAt(i));
  }

  var nextChar = function(element, startPoint) {
    if (element.charAt(startPoint = ' ')) {
      if (element.charAt(startPoint - 1) === '[' || element.charAt(startPoint - 1) === '{' || element.charAt(startpoint - 1) === '}' || element.charAt(startpoint - 1) === ']') {
        currentPlace += 1;
        return nextChar(element, startPoint + 1);
      }
      if (element.charAt(startPoint + 1) === ']' || element.charAt(startPoint + 1) === '}' || element.charAt(startpoint + 1) === '{' || element.charAt(startpoint + 1) === '[') {
        currentPlace += 1;
        return nextChar(element, startPoint + 1);
      }
    }
    currentPlace += 1;
    return element.charAt(startPoint + 1);
  };
  var parseStr = function (str) {
    while (currentPlace < str.length - 1) {
      if (nextChar(str, currentPlace) === '"') {
        var result = '';
        while (result.charAt(currentPlace) !== '"') {
          result += nextchar(str, currentPlace);
        }
        currentPlace += 1;
        stringCase(result);
      }
    }
  };
};
