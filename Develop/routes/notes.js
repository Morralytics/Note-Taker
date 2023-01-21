// Import all modules and files we will use
const notes = require('express').Router();
const { readFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');