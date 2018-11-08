const faker = require('faker');
const { Item } = require('../models/item.model');

const categories = ['Metal', 'Wood', 'Plastic', 'Polymer', 'Cotton'];

async function dummy() {
  for (let i = 1; i < 100; i++) {
    let name = faker.commerce.productName();
    let price = faker.commerce.price();
    let description = faker.lorem.paragraphs();
    let category = categories[Math.floor(Math.random() * categories.length)];
    let itemRecord = await new Item({
      name,
      price,
      description,
      category
    }).save();
    console.log(itemRecord);
  }
}
module.exports = dummy;
