const generatingImages = require('../server/database/seed');
const Image = require('../server/database/db');
const retrieve = require('../server/database/db');


describe("seed generatingImagesfunction", () => {
  test("creating array of images objects", () => {
    let output = generatingImages(2);
    expect(output[0].url).toContain(`https://picsum.photos/id/21/900/900`)
    expect(output[1].url).toContain(`https://picsum.photos/id/22/900/900`)
    expect(output[2].url).toContain(`https://picsum.photos/id/23/900/900`)
    expect(output[3].url).toContain(`https://picsum.photos/id/24/900/900`)
    expect(output[4].url).toContain(`https://picsum.photos/id/25/900/900`)
  });

  test("Images objects should contain a 'selected' key with value of 'false'", () => {
    let output = generatingImages(3);
    expect(output[0].selected).toBe(false);
    expect(output[1].selected).toBeFalsy();
    expect(output[2].selected).toEqual(false);
  });
});

describe("Find in database", () => {
  test("Should Find a product in database with productId <= 100", async () => {
    let product = await Image.retrieve(55);
    expect(product[0].images[0]).toHaveProperty('url')
    expect(product[0].images[0]).toHaveProperty('selected')
  });
  test("Should not find product in database with productId > 100", async () => {
    let product = await Image.retrieve(101);
    console.log(product)
    expect(product[0]).toBeUndefined()
  });

})


