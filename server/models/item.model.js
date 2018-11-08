const { conf } = require('../config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
  {
    name: {
      required: true,
      type: String
    },
    price: {
      required: true,
      type: Schema.Types.Decimal128
    },
    description: {
      required: false,
      type: String
    },
    category: {
      required: true,
      type: String
    }
  },
  {
    versionKey: false
  }
);

// Query helpers
ItemSchema.query.byCategory = function(Category) {
  return this.where({ category: new RegExp(Category, 'i') });
};

const name = conf('collections.item');
exports.Item = mongoose.model(name, ItemSchema, name);
