function findIntersection(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return [];
  }

  const outputSet = new Set();

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !outputSet.has(arr1[i])) {
        outputSet.add(arr1[i]);
      }
    }
  }

  return Array.from(outputSet);
}

console.log(findIntersection([1, 2, 3, 4, 5], [1, 2, 4]));
console.log(findIntersection([], []));
console.log(findIntersection([3, 5], [1, 2, 4]));
