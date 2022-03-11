/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleProducts = [
  { id: 1, name: 'Panel Headboard', priceInCents: 12332 },
  { id: 2, name: 'Low Profile Sleigh Bed', priceInCents: 22999 },
  { id: 3, name: 'Oval 100% Cotton Solid Bath Rug', priceInCents: 1399 },
  { id: 4, name: 'Abstract Light Gray Area Rug', priceInCents: 33999 },
  { id: 5, name: 'Multi Game Table', priceInCents: 81743 },
];
// Do not change the line above.

/*
  This function should throw an error if:
  - The `cart` array is empty.
*/
//Traditional way to solve this function using the for...of loop:
// function getCartTotal(cart) {
//   let result = 0;
//   if (cart.length === 0) throw 'Error!';
//   for (let product of cart) {
//     result += product.priceInCents;
//   }
//   return result;
// }

//Use native array method (.reduce) and arrow function to solve this problem:
const getCartTotal = (cart) => {
  if (!cart.length) throw 'Error!';
  return cart.reduce((acc, curr) => {
    return acc + curr.priceInCents;
  }, 0);
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
//Traditional way to solve this by using the for...of loop:
// function filterProductsByPriceRange(products, min, max) {
//   if (
//     !products.length ||
//     max === 0 ||
//     min > max ||
//     max < 0 ||
//     min < 0 ||
//     typeof max !== 'number' ||
//     typeof min !== 'number'
//   ) {
//     throw 'Error!';
//   }
//   const result = [];
//   for (let product of products) {
//     if (!product.priceInCents) {
//       throw 'Error!';
//     }
//     if (min <= product.priceInCents && product.priceInCents <= max) {
//       result.push(product);
//     }
//   }
//   return result;
// }

//Using the native array method (.filter) and arrow function to solve this:
const filterProductsByPriceRange = (products, min, max) => {
  if (
    !products.length ||
    max === 0 ||
    min > max ||
    max < 0 ||
    min < 0 ||
    typeof max !== 'number' ||
    typeof min !== 'number'
  ) {
    throw 'Error!';
  }
  let result = products.filter((product) => {
    if (!product.priceInCents) {
      throw 'Error!';
    }
    return min <= product.priceInCents && product.priceInCents <= max;
  });
  return result;
};

//console.log(filterProductsByPriceRange(exampleProducts, 10000, 30000))

/*
  If any errors occur in this function, it should return `0`.
*/

function getTotalOfAllProductsByPriceRange(products, min, max) {
  try {
    const filteredProducts = filterProductsByPriceRange(products, min, max);
    const total = getCartTotal(filteredProducts);
    return total;
  } catch (error) {
    return 0;
  }
}

//Do not change any code below this line:

module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};
