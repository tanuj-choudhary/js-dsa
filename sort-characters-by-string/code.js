function sortString(str) {
  str.toLowerCase();

  const characterFreq = new Array(26).fill(0);
  let output = '';

  for (let i = 0; i < str.length; i++) {
    const currChar = str[i];
    const currCharIndex = currChar.charCodeAt(0) - 97;

    characterFreq[currCharIndex] =
      characterFreq[currCharIndex] === 0 ? 1 : characterFreq[currCharIndex] + 1;
  }

  for (let i = 0; i < characterFreq.length; i++) {
    const currCharFreq = characterFreq[i];
    const currChar = String.fromCharCode(i + 97);
    output += currChar.repeat(currCharFreq);
  }

  return output;
}

console.log(sortString('thisisastring')); // aghiiinrssstt
