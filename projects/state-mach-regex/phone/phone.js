var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

  // !!!! IMPLEMENT ME

  // Come up with the phone regex
  const phoneRe = /\(?\d+\)?[-.\s]?\d+[-.\s]?\d+/g;

  // Find matches
  const findMatch = line.match(phoneReg);

  // If match found, print number with no spaces, parens, or dashes
  if (findMatch !== null) {
    findMatch.forEach(item => {
      const arr = item.split('');
      const result = arr.filter(element => Number.isInteger(Number(element)) === true && element !== ' ');
      console.log(result.join(''));
    });
  } else {
  // Else print that no number was found
  console.log("No phone number found");
   }
});
