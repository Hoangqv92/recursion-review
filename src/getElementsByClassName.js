// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
//Implement getElementsByClassName with your own function in src/getElementsByClassName.js, and make the specs pass, fixing them as necessary.
//You should use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className) {
  // your code here
  var result = [];
  var body = document.body;
  var getNode = function(element) {
    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }
    if (element.childNodes) {
      for (var i = 0; i < element.childNodes.length; i++) {
        getNode(element.childNodes[i]);
      }
    }
  };
  getNode(body);
  return result;
};
