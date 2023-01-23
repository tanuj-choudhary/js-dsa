function isAnagram1(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let sorted1 = str1.toLowerCase().split('').sort().join('');
  let sorted2 = str2.toLowerCase().split('').sort().join('');

  return sorted1 === sorted2;
}

function isAnagram2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const freq1 = new Array(26).fill(0);
  const freq2 = new Array(26).fill(0);

  for (const char of str1) {
    const index = char.toLowerCase().charCodeAt(0) - 97;
    freq1[index]++;
  }
  for (const char of str2) {
    const index = char.toLowerCase().charCodeAt(0) - 97;
    freq2[index]++;
  }

  let anagram = true;

  for (let i = 0; i < freq1.length; i++) {
    if (freq1[i] !== freq2[i]) {
      anagram = false;
      break;
    }
  }

  return anagram;
}

console.log(isAnagram1('listen', 'silent'));
console.log(isAnagram1('lister', 'silent'));
console.log(isAnagram1('hello', 'hii'));

console.log(isAnagram2('listen', 'silent'));
console.log(isAnagram2('lister', 'silent'));
console.log(isAnagram2('hello', 'hii'));
