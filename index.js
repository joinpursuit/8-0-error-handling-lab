/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleProducts = [
  { id: 1, name: "Panel Headboard", priceInCents: 12332 },
  { id: 2, name: "Low Profile Sleigh Bed", priceInCents: 22999 },
  { id: 3, name: "Oval 100% Cotton Solid Bath Rug", priceInCents: 1399 },
  { id: 4, name: "Abstract Light Gray Area Rug", priceInCents: 33999 },
  { id: 5, name: "Multi Game Table", priceInCents: 81743 },
];
// Do not change the line above.

/*
  This function should throw an error if:
  - The `cart` array is empty.
*/
function getCartTotal(cart) {
  let result = 0;
  if (cart.length < 1) {
    throw `cart is empty.`
  }
  for (let product of cart) {
    result += product.priceInCents;
  }
  return result;
}

/*
  This function should throw an error if:
  - The `products` array is empty.
  - Either `min` or `max` is not a number.
  - `max` is equal to `0`.
  - `min` is greater than `max`.
  - Either `min` or `max` is less than `0`.
  - Any of the products in the `products` array does not have a `priceInCents` key.
*/
function filterProductsByPriceRange(products, min, max) {
  if(products.length < 1) {
    throw `There must be at least one product.`
  }
  if(typeof min !== `number` || typeof max !== `number`) {
    throw `min and max must be numeric values.`
  }
  if (max === 0) {
    throw `max cannot be equal to 0.`
  }
  if (min > max) {
    throw `min needs to be a smaller value than max.`
  }
  if (min < 0 || max < 0) {
    throw `min and max must be larger than 0.`
  }
  const result = [];
  for (let product of products) {
    if (product.priceInCents === undefined) {
      throw `All products must have a price in cents value.`
    }
    if (product.priceInCents >= min && product.priceInCents <= max) {
      result.push(product);
    }
  }
  return result;
}

/*
  If any errors occur in this function, it should return `0`.
*/
function getTotalOfAllProductsByPriceRange(products, min, max) {
  const filteredProducts = filterProductsByPriceRange(products, min, max);
  const total = getCartTotal(filteredProducts);

  return total;
}

module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};
