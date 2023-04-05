const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// GET Route for retrieving all the feedback
notes.get('/', (req, res) =>
  fs.readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);
