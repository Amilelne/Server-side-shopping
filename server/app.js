const { configure } = require('./config');
const express = require('express');
const hbs = require('hbs');

const app = express();

const { server } = configure;
for (const key of Object.keys(server)) {
  app.set(key, server[key]);
}

// Set view engine
app.set('view engine', 'hbs');

module.exports = app;
