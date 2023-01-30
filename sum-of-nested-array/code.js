function sumOfNestedArray(array) {
  if (array.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += sumOfNestedArray(array[i]);
    } else {
      sum += array[i];
    }
  }

  return sum;
}

console.log(sumOfNestedArray([1, 2, [3, [4], [5, 6]], [7]]));
