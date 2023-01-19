function reverseStringWithoutWords1(str) {
  return str.split(' ').reverse().join(' ');
}

function reverseStringWithoutWords2(str) {
  let newStr = '';

  let word = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      newStr = word + str[i] + newStr;
      word = '';
    } else {
      word += str[i];
    }
  }

  newStr = word + ' ' + newStr;

  return newStr;
}

console.log(reverseStringWithoutWords1('this is a string'));
console.log(reverseStringWithoutWords1('Some random sentence'));

console.log(reverseStringWithoutWords2('this is a string'));
console.log(reverseStringWithoutWords2('Some random sentence'));
