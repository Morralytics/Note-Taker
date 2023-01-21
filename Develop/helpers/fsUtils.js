const e = require('express');
const fs = require('fs');
const util = require('util');

// Turns fs.readFile into a promise
const readFile = util.promisify(fs.readFile);

// Function that writes our file given the where and what
const writeToFile = (path, content) => {
    fs.writeFile(path, JSON.stringify(content), (err) => {
        err ? console.log(err) : console.log(`Content written to ${path}`);
    });
};

// Function that reads the file and can append the same data to a file
const readAndAppend = (file, content) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData)
        }
    });
};

module.exports = { readFile, writeToFile, readAndAppend };