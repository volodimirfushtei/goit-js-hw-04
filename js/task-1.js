function isEnoughCapacity(products, containerSize) {
  let sumvalues = 0;
  for (let i in products) {
    sumvalues += products[i];
    if (sumvalues <= containerSize) {
      return "true";
    } else {
      return "false";
    }
  }
}
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14));
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7));
