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
  if (!cart.length) {
    throw "Cart is empty."
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
  const result = [];
  if (!products.length) {
    throw "There are no products available."
  }
  // ERROR IF MISSING PRICEINCENTS
  if (products.some((product) => !product.priceInCents)) {
    throw "One or more of the products do not have the priceInCents key."
  }
  // ERROR IF MIN / MAX NOT A NUMBER
  if (typeof min !== "number" || typeof max !== "number") {
    throw "The min or max value is not a number."
  }
  // ERROR if MIN > MAX
  if (min > max) {
    throw "Min is greater than max."
  }
  // ERROR IF MIN / MAX IS LESS THAN ZERO
  if (min < 0 || max < 0) {
    throw "The min or max value is less than zero."
  }
  // ERROR IF MAX VALUE IS EQUAL TO ZERO
  if (max === 0) {
    throw "The max value is equal to zero."
  }

  for (let product of products) {
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
    let total = 0
    try {
      const filteredProducts = filterProductsByPriceRange(products, min, max);
      const total = getCartTotal(filteredProducts);
      return total 
    } catch (error) {
      return total
    }
}



module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};
