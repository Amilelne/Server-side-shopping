const { configure } = require('./config');
const mongoose = require('mongoose');

// Set mongodb varaibles
const { mongodb } = configure;
for (const key of Object.keys(mongodb)) {
  mongoose.set(key, mongodb[key]);
}

// Connect on mongodb
mongoose.connection.on('open', () => {
  console.log(`Connected to MongoDB`);
});
mongoose.connection.on('error', () => {
  console.log(`Failed to connect to MongoDB`);
  // Deal with the errors
  process.exit(-1);
});

module.exports = mongoose;
