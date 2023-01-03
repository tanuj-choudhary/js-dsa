const arr = [1, 2, 7, 2, 4, 6, 2];

function getPairs(arr, k) {
  if (arr.length < 2) {
    return [];
  }

  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const elem1 = arr[i];
    const elem2 = k - arr[i];
    if (obj.hasOwnProperty(elem2) && obj[elem2] !== i) {
      return [elem1, elem2];
    } else {
      obj[elem1] = i;
    }
  }

  return [];
}

console.log(getPairs(arr, 8));
console.log(getPairs(arr, 12));
console.log(getPairs([1], 8));
