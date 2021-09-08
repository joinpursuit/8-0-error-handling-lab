const exampleProducts = [
  { id: 1, name: "Panel Headboard", priceInCents: 12332 },
  { id: 2, name: "Low Profile Sleigh Bed", priceInCents: 22999 },
  { id: 3, name: "Oval 100% Cotton Solid Bath Rug", priceInCents: 1399 },
  { id: 4, name: "Abstract Light Gray Area Rug", priceInCents: 33999 },
  { id: 5, name: "Multi Game Table", priceInCents: 81743 },
];

function getCartTotal(cart) {
  let result = 0;
  if (!cart || cart.length == 0) {
    throw "Error: The cart is empty!";
  }
  for (let product of cart) {
    result += product.priceInCents;
  }
  return result;
}

function filterProductsByPriceRange(products, min, max) {
  const result = [];
  if (products.length == 0) {
    throw "Error: Products Array not found!";
  }
  if (typeof min != "number" || typeof max != "number") {
    throw "Error: Min/Max is not a number!";
  }
  if (min > max) {
    throw "Error: Min is greater than Max!";
  }
  if (max == 0) {
    throw "Error: Max is equal to zero!";
  }
  if (max < 0 || min < 0) {
    throw "Error: Min/Max is less than zero!";
  }
  for (let product of products) {
    if (!product.priceInCents) {
      throw "Error: Price in cents not defined!";
    }
    if (product.priceInCents >= min && product.priceInCents <= max) {
      result.push(product);
    }
  }
  return result;
}

function getTotalOfAllProductsByPriceRange(products, min, max) {
  try {
    const filteredProducts = filterProductsByPriceRange(products, min, max);
    const total = getCartTotal(filteredProducts);
    return total;
  } catch (err) {
    return 0;
  }
}

module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};
