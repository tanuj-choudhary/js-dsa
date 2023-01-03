const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const updatedArray = arr
  .filter((item) => item % 3 === 0)
  .map((item) => item * 2);

console.log(updatedArray);
