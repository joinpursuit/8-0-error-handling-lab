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
  if(!cart.length){
    throw "Cart Array is empty"     // throw an error if the cart array is empty.
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

  if(!products.length){
    throw "Products Array is empty"   // throw an error if products array is empty
  }
  
  else if(typeof min !== "number" || typeof max !== "number"){ // throw error if min and max is not a number
    throw "${min} and ${max} both must be numbers";
  }
  
  else if (min < 0 || min > max){
    throw `${min} cant be less than 0 and cant be greater than ${max}.` // throw error if min less than 0 or greater than amx
  }

  else if(max <= 0){
    throw `${max} cant be less than or equal to 0`    // throw error if max cant be less than or equal to 0
  }
  
  for (let product of products) {
    if (!product.priceInCents){
      throw "Products is missing priceInCents key"  // throw error if product does not have priceInCents
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
  
  try{
    filterProductsByPriceRange(products, min, max);   // when called filterProductsByPriceRange(), if any error, return 0
  } catch(error) {
    return 0
  }

  const filteredProducts = filterProductsByPriceRange(products, min, max);

  try{
    getCartTotal(filteredProducts)        // // when called getCartTotal(), if any error, return 0
  }catch(error){
    return 0
  }
  const total = getCartTotal(filteredProducts);
  return total;
}

module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};
