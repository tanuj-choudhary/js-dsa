function characterCount(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const currChar = str[i].toLowerCase();

    if (currChar === ' ') continue;

    charCount[currChar] =
      charCount[currChar] === undefined ? 1 : charCount[currChar] + 1;
  }

  return charCount;
}

console.log(characterCount('An example string hello world'));
