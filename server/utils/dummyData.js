const faker = require('faker');
const { Item } = require('../models/item.model');

const categories = ['Metal', 'Wood', 'Plastic', 'Polymer', 'Cotton'];

async function dummy() {
  for (let i = 1; i < 100; i++) {
    let Name = faker.commerce.productName();
    let Price = faker.commerce.price();
    let Description = faker.lorem.paragraphs();
    let Category = categories[Math.floor(Math.random() * categories.length)];
    let itemRecord = await new Item({
      Name,
      Price,
      Description,
      Category
    }).save();
    console.log(itemRecord);
  }
}
module.exports = dummy;
