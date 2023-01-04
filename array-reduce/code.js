const inputThree = [
  {
    username: 'john',
    team: 'red',
    score: 5,
    items: ['ball', 'book', 'pen'],
  },
  {
    username: 'becky',
    team: 'blue',
    score: 10,
    items: ['tape', 'backpack', 'pen'],
  },
  {
    username: 'susy',
    team: 'red',
    score: 55,
    items: ['ball', 'eraser', 'pen'],
  },
  {
    username: 'tyson',
    team: 'green',
    score: 1,
    items: ['book', 'pen'],
  },
];

const output1 = inputThree.reduce(
  (prev, curr) => {
    prev[0] += curr.score;
    return prev;
  },
  [0]
);

const output2 = inputThree.reduce((acc, curr) => {
  acc.push({
    myScore: curr.score,
  });

  return acc;
}, []);

const output3 = inputThree.reduce(
  (prev, curr) => {
    prev.totalScore += curr.score;
    return prev;
  },
  { totalScore: 0 }
);

const output4 = inputThree.reduce(
  (prev, curr, index) => {
    prev.totalScore += curr.score;
    if (index === inputThree.length - 1) {
      prev.averageScore = prev.totalScore / inputThree.length;
    }

    return prev;
  },
  { totalScore: 0 }
);

console.log('output 1 = ', output1);
console.log('output 2 = ', output2);
console.log('output 3 = ', output3);
console.log('output 4 = ', output4);
