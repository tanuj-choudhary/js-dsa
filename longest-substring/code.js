function getLongestSubstring(str) {
  if (str.length === 0) {
    return '';
  }

  if (str.length === 1) {
    return str;
  }

  const set = new Set();
  let currStr = '';

  for (let i = 0; i < str.length; i++) {
    if (!set.has(str[i])) {
      currStr += str[i];
      set.add(str[i]);
    } else {
      const str2 = getLongestSubstring(str.substr(i));
      return currStr.length > str2.length ? currStr : str2;
    }
  }

  return currStr;
}

console.log(getLongestSubstring('abcabcbb'));
console.log(getLongestSubstring('bbbbb'));
console.log(getLongestSubstring('pwwkew'));
