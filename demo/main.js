var StyleSerializer = window.StyleSerializer;

var convertToObjectButton = document.getElementById("to-object-button");
var convertToObjectInput = document.getElementById("to-object-input");
var convertToObjectOutput = document.getElementById("to-object-output");
convertToObjectButton.addEventListener("click", function() {
  try {
    var cssString = convertToObjectInput.value;
    var cssObject = StyleSerializer.cssStringToObject(cssString);
    convertToObjectOutput.innerText = JSON.stringify(cssObject, null, 2);
  } catch (e) {
    convertToObjectOutput.innerText = "🙅‍♀️ Whoops, something went wrong: \n" + e;
  }
});

var convertToStringButton = document.getElementById("to-string-button");
var convertToStringInput = document.getElementById("to-string-input");
var convertToStringOutput = document.getElementById("to-string-output");
convertToStringButton.addEventListener("click", function() {
  try {
    var cssObject = convertToStringInput.value;
    var cssString = StyleSerializer.cssObjectToString(JSON.parse(cssObject));
    convertToStringOutput.innerText = cssString;
  } catch (e) {
    convertToStringOutput.innerText = "🙅‍♀️ Whoops, something went wrong: \n" + e;
  }
});
