const fs = require('fs');
const util = require('util');

// Turns fs.readFile into a promise
const readFile = util.promisify(fs.readFile);

// Function that writes our file given the where and what
const writeToFile = (path, content) =>
    fs.writeFile(path, JSON.stringify(content), (err) => {
        err ? console.log(err) : console.log(`Content written to ${path}`);
    });
