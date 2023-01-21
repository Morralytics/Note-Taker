// Import all modules and files we will use
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// Properly reads data from the json file and has the response of the promise parse it for viewing
notes.get('/', (req, res) => {
    console.log(`${req.method} request received for notes.`);
    readFromFile('./db/db.json')
        .then((data) => {
            res.json(JSON.parse(data));
        });
});

notes.post('/', (req, res) => {

});

module.exports = notes;