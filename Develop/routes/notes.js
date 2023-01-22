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
    console.log(`${req.method} request received to add a note.`);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        
        readAndAppend(newNote, './db/db.json');
        res.json(`Successfully added new note.`);
    } else {
        res.error(`Error adding note.`)
    }
});

notes.delete('/:id', (req, res) => {
    console.log(`${req.method} request received to delete a note.`);

    const { id } = req.params;

    console.log(id);
});

module.exports = notes;