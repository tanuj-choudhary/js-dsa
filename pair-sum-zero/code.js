function firstPairUsingBruteforce(array) {
  const pair = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        pair.push(array[i], array[j]);
        return pair;
      }
    }
  }

  return pair;
}

function firstPairUsingHashing(array) {
  const pair = [];
  const s = new Set();

  for (let i = 0; i < array.length; i++) {
    const firstNum = array[i];
    const secondNum = 0 - array[i];

    if (s.has(secondNum)) {
      pair.push(firstNum, secondNum);
      return pair;
    } else if (!s.has(firstNum)) {
      s.add(firstNum);
    }
  }

  return pair;
}

function firstPairUsingSorting(array) {
  const pair = [];

  array.sort((a, b) => a - b);

  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    let sum = array[i] + array[j];

    if (sum === 0) {
      pair.push(array[i], array[j]);

      return pair;
    } else if (sum < 0) {
      i++;
    } else if (sum > 0) {
      j--;
    }
  }

  return pair;
}

console.log(firstPairUsingBruteforce([]));
console.log(firstPairUsingHashing([]));
console.log(firstPairUsingSorting([]));

console.log(firstPairUsingBruteforce([20, 30, 15, 10, 12]));
console.log(firstPairUsingHashing([20, 30, 15, 10, 12]));
console.log(firstPairUsingSorting([20, 30, 15, 10, 12]));

console.log(firstPairUsingBruteforce([-20, -30, -15, -10, -12]));
console.log(firstPairUsingHashing([-20, -30, -15, -10, -12]));
console.log(firstPairUsingSorting([-20, -30, -15, -10, -12]));

console.log(firstPairUsingBruteforce([-18, 34, 7, -7, 18, -17, 9, 6, -2, -1]));
console.log(firstPairUsingHashing([-18, 34, 7, -7, 18, -17, 9, 6, -2, -1]));
console.log(firstPairUsingSorting([-18, 34, 7, -7, 18, -17, 9, 6, -2, -1]));
