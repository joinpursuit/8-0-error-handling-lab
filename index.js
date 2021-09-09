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
  if(!cart.length){//guard clause
    throw "";
  }
  let result = 0;
  for (let product of cart) {// looping through if guard clause passed
    result += product.priceInCents;// accumulating priceInCents
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
  if(!products.length){// empty array
    throw "";
  } if (typeof min !== "number" || typeof max !== "number"){//NaN min max
    throw "";
  } if (max <= 0 || min < 0){
    throw "";
  } if (min > max){
    throw "";
  } 
  for (let product of products) {//loop through if above conditions net
    if(!product.priceInCents){// no priceInCents key
      throw "";
    }
    if (product.priceInCents >= min && product.priceInCents <= max) {// filter
      result.push(product);// push filtered objects
    }
  }
  return result;
}

/*
  If any errors occur in this function, it should return `0`.
*/
function getTotalOfAllProductsByPriceRange(products, min, max) {
  try {
    let filteredProducts = filterProductsByPriceRange(products, min, max); // this should produce an array of objects
    let total = getCartTotal(filteredProducts);// total will be equal to the sum of all objects filtered in above fx
      return total;// if no error

  } catch (error) { // if error
    return 0;
  }
}

module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};
