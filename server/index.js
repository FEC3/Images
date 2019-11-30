const express = require('express');
const path = require('path');
const parser = require('body-parser')
let app = express();
const PORT = process.env.PORT || 3002;


app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public')));
app.use(parser.urlencoded({ extended: true }));


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});