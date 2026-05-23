/**
 * Most expensive product
 *
 * 1. Understand the problem
 * 2.
 */

const products = {
  shoes: 100,
  socks: 80,
  food: 90,
  grocery: 101,
  travel: 409,
};

const maxPrice = (products) => {
  const keys = Object.keys(products);

  let mostExpensive = {
    name: "",
    price: 0,
  };

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    const price = products[key];

    if (price > mostExpensive.price) {
      mostExpensive.price = price;
      mostExpensive.name = key;
    }
  }

  return mostExpensive;
};

console.log(maxPrice(products));
