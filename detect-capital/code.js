function checkCapital(str = '') {
  if (str.toUpperCase() === str) {
    return true;
  } else if (str.substring(1).toLowerCase() === str.substring(1)) {
    return true;
  }
  return false;
}

console.log(checkCapital('USA'));
console.log(checkCapital('leetcode'));
console.log(checkCapital('Google'));
console.log(checkCapital('proGram'));
console.log(checkCapital('DesKtop'));
