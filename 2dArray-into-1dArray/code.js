function convert2dArrayInto1DArray(array) {
  return array.reduce((acc, curr) => {
    acc.push(curr);
    return acc.flat();
  }, []);
}

console.log(
  convert2dArrayInto1DArray([
    ['a', 'b'],
    ['c', 'd'],
    ['e', 'f'],
  ])
);
