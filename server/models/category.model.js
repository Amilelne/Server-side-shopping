const { conf } = require('../config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  category: {
    required: true,
    type: String
  }
});

const name = conf('collections.category');
exports.Category = mongoose.model(name, CategorySchema, name);
