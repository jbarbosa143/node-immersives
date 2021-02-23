// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const first = getInput(0);

const last = getInput(1);

console.log("--------------------");
console.log("Hello" + first + " " + last +"! Thanks for using my app!");
console.log("Let's scream your name! " + first.toUpperCase() + " " + last.toUpperCase());
console.log("Now here are your initals! " + first[0] + "." + last[0] + ".");
console.log("Finally here is your new email address! " + first.toLowerCase() + "." + last.toLowerCase() + "@codeimmersives.com")
