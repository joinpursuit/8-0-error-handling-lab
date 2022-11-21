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

// Using helper-functions with error-handling
const isArrEmpty = (cart) => {

  if( !cart.length ){
    throw `The ${cart} is empty.`;
  };

};

// This could be turned into validProperty() - Must come back to it.
const hasPriceInCents = ( products ) => {
  return products.map( product => product.hasOwnProperty('priceInCents') ).includes(false);
};

const validNums= ( min, max ) =>{
  return typeof min !== 'number' || typeof max !== 'number';
};

// This could be combined with maxIsZero() - Must come back to it.
const lessThanZeroNums = ( min, max ) => {
 return min < 0 || max < 0 || min > max;
}

const maxIsZero = ( max ) => {
  return max === 0;
}

const isMinGreaterThanMax = (min, max) => {
  return min > max;
};


const runErrorHandling = ( products, min, max ) =>{

  if( isArrEmpty( products ) ){
    throw `The ${products} array is empty.`
  }else if( hasPriceInCents( products) ){
    throw `One of the products in the array '${products}' does not have a the key 'priceInCents'.`
  }else if( validNums( min, max ) ){
    throw `Either ${min} or ${max} is NaN.`
  }else if( isMinGreaterThanMax(min, max) ){
    throw `The ${min} value is greater than the ${max} value.`
  }else if( lessThanZeroNums( min, max ) ){
    throw `Either ${min} or ${max} is less than zero.`
  }else if( maxIsZero(max) ){
    throw `${max} is equal to zero.`
  };

};

/*
  This function should throw an error if:
  - The `cart` array is empty.
*/
function getCartTotal(cart) {

  isArrEmpty(cart);
  
  let result = 0;

  try{

    for (let product of cart) {
      result += product.priceInCents;
    };

  }catch(error){
    console.log(error);
  }

  return result;

};

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

  runErrorHandling( products, min, max );

  const result = [];

  try{  

    for (let product of products) {
      if (product.priceInCents >= min && product.priceInCents <= max) {
        result.push(product);
      };
    };

  }catch(error){
    console.log(error);
  };

  return result;

};

/*
  If any errors occur in this function, it should return `0`.
*/
function getTotalOfAllProductsByPriceRange(products, min, max) {

  try {
    return getCartTotal( filterProductsByPriceRange(products, min, max) );
  }catch( error ){
    return 0;
  };

};

module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};
