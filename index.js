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

//create a function to get cart total with the parameter cart whhich is an array of objects
function getCartTotal(cart) {

  //create a variable called result to equal 0
  let result = 0;
  //THROW CONDITIONAL - If the cart array is empty 
  if(cart.length === 0){
    //throw error message from the example "This cart array is empty."
    throw ('This cart array is empty.')
  }
  for (let product of cart) {
    result += product.priceInCents;
  }
  return result;
}
// try{console.log(getCartTotal())npm TestWatcher


/*
  This function should throw an error if:
  - The `products` array is empty.
  - Either `min` or `max` is not a number.          - ALL ARE EDGE CASE CONDITIONAL THROW MESSAGES
  - `max` is equal to `0`.
  - `min` is greater than `max`.
  - Either `min` or `max` is less than `0`.
  - Any of the products in the `products` array does not have a `priceInCents` key.
*/
//creates a function to filter products by price range with the parameters product an array of objects and min and max which are numbers
function filterProductsByPriceRange(products, min, max) {

  //create a permenent variable called result to equal an empty array
  const result = [];
  //THROW CONDITIONAL - If products array is empty 
  if(products.length === 0){
    //throw error message from the example "The products array is empty"
    throw 'The `products` array is empty.'
    //2ND THROW CONDITIONAL - If the type of min is not a number OR the typeof max is not a number 
  } else if (typeof min !== 'number' || typeof max !== 'number') {
    //throw error message from the example "Either min or max is not a number"
    throw 'Either `min` or `max` is not a number.'
    //3RD THROW CONDITIONAL - If max is equal to 0
  } else if (max === 0){
    //throw error message from the example "max is equal to 0"
    throw '`max` is equal to `0`.'
    //4TH THROW CONDITIONAL - If min is greater than max
  }else if (min > max){
    //throw error message from the example "min is greater than max"
    throw '`min` is greater than `max`.'
    //5TH THROW CONDITIONAL - If either min or max is less than 0
  } else if (min < 0 || max < 0){
    //throw error message from the example "Either min or max is less than 0"
    throw 'Either `min` or `max` is less than `0`.'
  }
  //for loop through the products array 
  for (let product of products) {
    //6TH THROW CONDITIONAL - If the products array doesn't have a priceInCents key 
    if(!product.priceInCents){
      //throw error message from the example "Any of the products in the products array does npt have a priceInCents key"
      throw 'Any of the products in the `products` array does not have a `priceInCents` key.'
    }
    if (product.priceInCents >= min && product.priceInCents <= max) {
      result.push(product);
    }
  }
  return result;
}

/*
  If any errors occur in this function, it should return `0`. - TRY AND CATCH ERROR IF ANY EDGE CASE FROM THE FUNCTION IS TRUE RETURN 0
*/
//creates a function to get the total of all products by the price range with the parameters products an array of objects, min and max which are numbers 
function getTotalOfAllProductsByPriceRange(products, min, max) {
  //TRY and run callback functions filterProductsByPriceRNGE AND getCartTotal where the return is supposed to be 'the total - if a CONDITIONAL ERROR (edge case) occurs
  try {
    const filteredProducts = filterProductsByPriceRange(products, min, max);
    const total = getCartTotal(filteredProducts);
  
    return total;
    //CATCH THE CONDITIONAL ERROR (edge case) 
  } catch (error){
    //then return 0
    return 0;
  }
  
}




module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};
