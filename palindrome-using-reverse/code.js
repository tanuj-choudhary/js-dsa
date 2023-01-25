function checkPalindrome(str = '') {
  return str === str.split('').reverse().join('');
}

console.log(checkPalindrome('abcdcba'));
console.log(checkPalindrome('aaa'));
console.log(checkPalindrome('123321'));
console.log(checkPalindrome('1231'));
