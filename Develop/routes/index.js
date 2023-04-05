const express = require('express');

const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

//Export app
module.exports = app;
