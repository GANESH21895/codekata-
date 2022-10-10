// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 var str =userInput[0];
 function printChars(str) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
    result += str[i] + ',';
  }
  return result.slice(0, -1);
} 

  console.log(printChars(str));

  //end-here
});
