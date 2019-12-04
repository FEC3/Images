const express = require('express');
const path = require('path');
const parser = require('body-parser');
const Image = require('./database/db');
const retrieve = require('./database/db');
const morgan = require('morgan');



let app = express();
const PORT = process.env.PORT || 3002;


app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public')));
app.use(parser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.get('/images/:productId', (req, res) => {
  let productId = req.params.productId;
  Image.retrieve(productId).then(data => res.send(data[0].images));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});