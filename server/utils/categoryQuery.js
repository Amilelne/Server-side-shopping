const { Category } = require('../models/category.model');

function categoryQuery() {
  return Category.find();
}

module.exports = categoryQuery;
