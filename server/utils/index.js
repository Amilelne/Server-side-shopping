const dummy = require('./dummyData');
const { itemQuery, getItemById } = require('./itemQuery');
const categoryQuery = require('./categoryQuery');
const pagination = require('./pagination');

module.exports = {
  dummy,
  itemQuery,
  getItemById,
  categoryQuery,
  pagination
};
