function countVowels(str) {
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  for (let i = 0; i < str.length; i++) {
    const currChar = str[i].toLowerCase();

    if (currChar in vowels) {
      vowels[currChar]++;
    }
  }

  return vowels;
}

console.log(countVowels('a string'));
