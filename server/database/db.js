const mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect('mongodb://127.0.0.1/images', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Our database is connected!');
});

const productImageSchema = new mongoose.Schema({
  id: Number,
  images: Array
});

const Image = mongoose.model('Image', productImageSchema);

let retrieve = (productId) => {
  return new Promise((resolve, reject) => {
    Image.find({ id: productId})
      .exec((err, doc) => {
        resolve(doc);
      });

  });
};

module.exports = Image;
module.exports.retrieve = retrieve;
