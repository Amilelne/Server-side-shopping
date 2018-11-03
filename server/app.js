const { configure } = require('./config');
const express = require('express');

const app = express();

const { server } = configure;
for (const key of Object.keys(server)) {
  app.set(key, server[key]);
}

module.exports = app;
