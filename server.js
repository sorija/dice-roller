const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '.', 'public');
// use Heroku port if available
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log('Express server is up');
});
