function getLongestWordUsingFunctions(str) {
  return str
    .split(' ')
    .reduce((acc, curr) => (curr.length > acc.length ? curr : acc), '');
}

console.log(getLongestWordUsingFunctions('this is a sentence'));
console.log(getLongestWordUsingFunctions('An example string'));
console.log(getLongestWordUsingFunctions(''));
console.log(getLongestWordUsingFunctions('a'));
