function reverseStringWithoutInbuiltFunction(str) {
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}

console.log(reverseStringWithoutInbuiltFunction('this is a string'));
console.log(reverseStringWithoutInbuiltFunction('Some random words'));
