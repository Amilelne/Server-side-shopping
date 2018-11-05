const { conf } = require('../config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
  {
    Name: {
      required: true,
      type: String
    },
    Price: {
      required: true,
      type: Schema.Types.Decimal128
    },
    Description: {
      required: false,
      type: String
    },
    Category: {
      required: true,
      type: String
    }
  },
  {
    versionKey: false
  }
);

const name = conf('collections.item');
exports.Item = mongoose.model(name, ItemSchema, name);
