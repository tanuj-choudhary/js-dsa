function reverseStringWithIndividualWords(str) {
  return str.split('').reverse().join('');
}

console.log(reverseStringWithIndividualWords('this is a string'));
console.log(reverseStringWithIndividualWords('Some random words'));
