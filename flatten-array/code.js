function flatten2DArray(array) {
  if (array.length === 0) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      array.splice(i, 1, ...array[i]);
    }
  }

  return array;
}

function flattenArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenArray(array[i]);
      array.splice(i, 1, ...array[i]);
    }
  }

  return array;
}

console.log(flatten2DArray([1, 2, 3, 4, [5, 6], 7, [8, 9], 10]));
console.log(flattenArray([1, 2, [3, 4, [5, 6, [7]]], 8, [[9], 10]]));
