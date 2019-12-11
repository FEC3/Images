const Image = require('./db');

const productId = 100;

let imagesOfOneProduct = [];

let generatingImages = (i) => {
  let allImages = [];
  let r = Math.floor(Math.random() * (6 - 3 + 1) + 3);
  for (let x = 1; x <= r; x++) {
    var randomimage = `https://picsum.photos/id/${i}${x}/900/900`;
    allImages.push({ url: randomimage, selected: false });
  }
  return allImages;
};

for (let i = 1; i <= productId; i++) {
  let fakeImage = new Image({
    id: i,
    images: generatingImages(i)
  });
  imagesOfOneProduct.push(fakeImage);
}

let insertProductImages = () => {
  Image.collection.insert(imagesOfOneProduct);
};

insertProductImages();

module.exports = generatingImages;
