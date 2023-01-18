function removeDuplicatesFromArray(array) {
  const newArr = [];
  const elemSet = new Set();

  for (let i = 0; i < array.length; i++) {
    if (!elemSet.has(array[i])) {
      newArr.push(array[i]);
      elemSet.add(array[i]);
    }
  }

  return newArr;
}

console.log(
  removeDuplicatesFromArray([
    55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5,
  ])
);

function removeDuplicatesFromArrayShortHand(array) {
  return Array.from(new Set(array));
}

console.log(
  removeDuplicatesFromArrayShortHand([
    55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5,
  ])
);
