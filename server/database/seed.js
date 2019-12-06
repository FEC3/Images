const Image = require('./db');

const productId = 100;

let imagesOfOneProduct = [];

const generatingImages = (i) => {
  let allImages = [];
  for (let x = 1; x <= 5; x++) {
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
