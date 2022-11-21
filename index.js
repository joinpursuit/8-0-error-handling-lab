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
  if (cart.length === 0) { throw "Cart is empty" }
  //>if it was done underneath the loop or the line of the loop, it would not work
  //>it would not be in the correct order to pass the results of  an empty cart 
  //>if this condition passes, then the rest of the code would stop
  let result = 0;
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
  //V---Each return & attempt below that works but effect function 3
  //if (products.length === 0) { throw "Empty Array" }
  // if (typeof min != "number" || typeof max != "number") { throw "Not a Number" }
  // if (max === 0) { throw "Max is 0" }
  // if (min > max) { throw "Min is greater Max" }
  // if (min < 0 || max < 0) { throw "Either is less than 0" }
  //if (products[0].priceInCents === "undefined") {throw "Price in cents not found"}
  //if (products.some(newProduct => newProduct.priceInCents === "undefined")) { throw "Price In Cents not there" }

  //--V--for loop to run through products
  // for (let i = 0; i < products.length; i++) {
  //   if (products[i].priceInCents === "undefined") {
  //     throw " Price In Cents not there"
  //   }
  // }
  if ((products.length === 0) || (products.some(newProduct => (newProduct.priceInCents === undefined)))) {
    throw "First Error"//>Empty Array Or Price In Cents not there"
    //>when === undefined, no "" needed b/c it is not a string but a VALUE
  }
  if (typeof min != "number" || typeof max != "number" || max <= 0 || min > max || min < 0) {
    throw "Second Error"//>Min-Max not a number;Min-Max less than or greater 0;Max is equal to 0"
  }

  const result = [];
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

  try {
    const filteredProducts = filterProductsByPriceRange(products, min, max);
    const total = getCartTotal(filteredProducts);
    //getCartTotal(filterProductsByPriceRange(products, min, max))
    //^--(above)--passes last two checks but not the first check

    return total;

  } catch { return 0 }
}

module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};
