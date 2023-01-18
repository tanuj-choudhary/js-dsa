function removeDuplicatesFromString(str) {
  let newStr = '';
  let charSet = new Set();

  for (let i = 0; i < str.length; i++) {
    if (!charSet.has(str[i])) {
      newStr += str[i];
      charSet.add(str[i]);
    }
  }

  return newStr;
}

console.log(removeDuplicatesFromString('abcdeab'));
console.log(removeDuplicatesFromString('aaaaaa'));
