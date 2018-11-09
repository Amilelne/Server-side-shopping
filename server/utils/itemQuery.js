const { Item } = require('../models/item.model');

function itemQuery(req) {
  const searchText = req.query.search ? req.query.search : '.*';
  const category = req.query.category ? req.query.category : '.*';
  const sortby = req.query.sortby ? req.query.sortby.toLowerCase() : 'name';
  const asc = req.query.asc == -1 ? Number(-1) : Number(1);
  return Item.aggregate([
    {
      $match: {
        name: { $regex: new RegExp(searchText, 'i') },
        category: { $regex: new RegExp(category) }
      }
    },
    {
      $sort: { [sortby]: asc }
    },
    {
      $project: {
        name: 1,
        price: 1,
        description: { $substr: ['$description', 0, 50] },
        category: 1
      }
    }
  ]).then(function(res) {
    return res;
  });
}

function getItemById(req) {
  const id = req.query.id;
  return Item.findById(id);
}

module.exports = { itemQuery, getItemById };
