const Image = require('./db');
const Faker = require('faker');


const productId = 100;

let imagesOfOneProduct = [];

let generatingImages = () => {
  let allImages = [];
  for (let x = 0; x <= 4; x++) {
    var randomimage = Faker.random.image();
    allImages.push({ url: randomimage, selected: false });
  }
  return allImages;
};

for (let i = 1; i <= productId; i++) {
  let fakeImage = new Image({
    id: i,
    images: generatingImages()
  });
  imagesOfOneProduct.push(fakeImage);
}

let insertProductImages = () => {
  Image.collection.insert(imagesOfOneProduct);
};

insertProductImages();