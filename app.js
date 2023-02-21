// Dependencies
const cors = require('cors');
const express = require('express');
const songsController = require('./controllers/songController');

// Congfig
const app = express();

// Middleware

app.use(cors());
app.use(express.json());
app.use('/songs', songsController);

// Routes for your get 
app.get('/', (req, res) => {
  res.send('Welcome to the Songs App');
});

// 404
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Export
module.exports = app;