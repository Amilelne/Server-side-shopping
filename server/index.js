const app = require('./app');

const port = Number(app.get('port'));
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
