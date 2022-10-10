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
  //start-here
var op = "";
for(var i=0; i<1; i++){
for(var j=0; j<userInput[0].length; j++){
if(j==0){
op = op + userInput[0][j];
}
else{
op = op+ " " + userInput[0][j];
}

}
}
console.log(op);

  //end-here
});