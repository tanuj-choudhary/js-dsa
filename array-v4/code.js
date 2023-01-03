const inputOne = [
  {
    name: 'John',
    age: 13,
  },
  {
    name: 'Mark',
    age: 56,
  },
  {
    name: 'Rachel',
    age: 45,
  },
  {
    name: 'Nate',
    age: 67,
  },
  {
    name: 'Jeniffer',
    age: 65,
  },
];

// Output - [ 67, 65]; - Age > 60

const outputOne = inputOne
  .filter((person) => person.age > 60)
  .map((person) => person.age);

console.log(outputOne);

const inputTwo = 'Every developer likes to mix kubernetes and javascript';
// Output - "E3y d7r l3s to mix k8s and j8t";

const outputTwo = inputTwo
  .split(' ')
  .map((item) => {
    if (item.length > 3) {
      return item[0] + (item.length - 2) + item.at(-1);
    }
    return item;
  })
  .join(' ');

console.log(outputTwo);

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

// - Output 1 - ['Hello John', 'Hello Becky', 'Hello Susy', 'Hello Tyson']
const output1 = inputThree.map((user) => 'Hello ' + user.username);
console.log(output1);

// - Output 2 - [4,5,4,5] -> username length
const output2 = inputThree.map((user) => user.username.length);
console.log(output2);

// - Output 3 - [3,3,3,3] - team length
const output3 = inputThree.map(() => 3);
console.log(output3);

// - Output 4 - ['Hello John from Red', 'Hello Becky from Blue', 'Hello Susy from Red', 'Hello Tyson from Green']
const output4 = inputThree.map(
  (user) => `Hello ${user.username} from ${user.team}`
);
console.log(output4);

// - Output 5 - [{ username: "susy", team: "red", score: 55, items: ["ball", "eraser", "pen"]}]
const output5 = inputThree.filter((user) => user.username === 'susy');
console.log(output5);

// - Output 6 - [71] - count of score
let sum = 0;
inputThree.forEach((user) => {
  sum += user.score;
});
console.log([sum]);
