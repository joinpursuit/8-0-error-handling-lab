function getProductDescription(product) {
    if (!product.name || !product.priceInCents) {
      return "Product requires a name and price.";
    }
  
    const priceInDollars = (product.priceInCents / 100).toFixed(2);
    return `${product.name} - $${priceInDollars}`;
  }
  console.log(getProductDescription({ name: "Shirt", priceInCents: 2499 })))