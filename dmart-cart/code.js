function initCart() {
  const items = [];

  return function (item) {
    items.push(item);
    return items;
  };
}

const myBasket = initCart();

console.log(myBasket({ id: 1, name: 'dabar hair oil' }));
console.log(myBasket({ id: 10, name: 'milk rusk' }));
