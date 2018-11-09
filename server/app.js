const { configure } = require('./config');
const express = require('express');
const exphbs = require('express-handlebars');
const helmet = require('helmet');
const mongoose = require('./mongoose');
const {
  dummy,
  itemQuery,
  categoryQuery,
  getItemById,
  pagination
} = require('./utils');

const app = express();

// Set config from config files
const { server } = configure;
for (const key of Object.keys(server)) {
  app.set(key, server[key]);
}

// Connect to MongoDB
mongoose.connect(mongoose.get('db_url'));

// Generate dummy data
// dummy();

// Set view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set public directory
app.use(express.static(process.cwd() + '/public'));

// Use helmet for safety
app.use(helmet());

// Home router
app.get('/', async (req, res) => {
  let items = await itemQuery(req);
  let currentPage = req.query.page ? Number(req.query.page) : 1;
  let finalPage = Math.ceil(Number(items.length) / 9);
  res.render('home', {
    items: items.slice((currentPage - 1) * 9, currentPage * 9),
    categories: await categoryQuery(),
    pages: pagination(currentPage, Number(finalPage))
  });
});

app.get('/item', async (req, res) => {
  res.render('item', {
    item: await getItemById(req)
  });
});

module.exports = app;
