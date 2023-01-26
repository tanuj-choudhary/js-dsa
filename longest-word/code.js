function longestWord(str) {
  let max = '';
  let curr = '';

  for (const char of str) {
    if (char === ' ') {
      if (curr.length > max.length) {
        max = curr;
      }
      curr = '';
    } else {
      curr += char;
    }
  }
  if (curr.length > max.length) {
    max = curr;
  }

  return max;
}

console.log(longestWord('Example of a string'));
console.log(longestWord('This is a sentence'));
console.log(longestWord(''));
console.log(longestWord('a'));
