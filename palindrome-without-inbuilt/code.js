function findPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  const n = str.length - 1;

  for (let i = 0; i < n / 2; i++) {
    if (str[i] !== str[n - i]) {
      return false;
    }
  }

  return true;
}

console.log(`Is madam palindrome: ${findPalindrome('madam')}`);
console.log(`Is anna palindrome: ${findPalindrome('anna')}`);
console.log(`Is abcrbca palindrome: ${findPalindrome('abcrba')}`);
