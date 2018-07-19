const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const fileData = fs.readFileSynce(filename, { encoding: 'utf8' });

// Set up regex
const reGex = /^(https?):\/\/[^\\'">\s]+?\.[^\\'">\s]+/gi;
// Find matches
const result = fileData.match(reGex);
// Print all matches
if (result !== null) {
    result.forEach(item => console.log(item));
} else {
    console.log("Nothig was found"); // Tells me if no number was found
}
