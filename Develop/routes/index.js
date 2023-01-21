// Will be used to import the routes used and export them out from a single file

const express = require('express');
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;