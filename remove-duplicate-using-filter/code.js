function removeDuplicatesFromArrayUsingFilter(array) {
  return array.filter((value, index, array) => array.indexOf(value) === index);
}

console.log(removeDuplicatesFromArrayUsingFilter([1, 2, 3, 4, 1, 2, 5, 3]));
console.log(removeDuplicatesFromArrayUsingFilter([1, 1, 1, 1, 1]));
