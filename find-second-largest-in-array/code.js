function getSecondLargest(array) {
  if (array.length < 2) {
    return null;
  }

  let largest = null;
  let secondLargest = null;

  for (let i = 0; i < array.length; i++) {
    const currElem = array[i];

    if (largest === null) {
      largest = currElem;
    } else if (currElem > largest) {
      secondLargest = largest;
      largest = currElem;
    } else if (currElem > secondLargest) {
      secondLargest = currElem;
    }
  }

  return secondLargest;
}

console.log(getSecondLargest([1, 6, 13, 54, 23, 4])); // 23
console.log(getSecondLargest([1])); // null
console.log(getSecondLargest([-54, -23, -7, 56])); // -7
