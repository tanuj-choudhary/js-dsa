function getMaxRepeatingCharacter(str = '') {
  if (str.length === 0) {
    return null;
  }

  if (str.length === 1) {
    return { character: str[0], count: 1 };
  }

  const charFreq = {};
  let maxRepeatingCount = -1;
  let maxRepeatingChar = '';

  for (const char of str) {
    if (char in charFreq) {
      charFreq[char]++;

      if (charFreq[char] > maxRepeatingCount) {
        maxRepeatingCount = charFreq[char];
        maxRepeatingChar = char;
      }
    } else {
      charFreq[char] = 1;
    }
  }

  return { character: maxRepeatingChar, count: maxRepeatingCount };
}

console.log(getMaxRepeatingCharacter('aaaabbaaccccccccccccccccccde'));
