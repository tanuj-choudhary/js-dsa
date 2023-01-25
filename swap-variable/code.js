function swapTwoNumber1(a, b) {
  console.log(`a = ${a} b = ${b}`);

  let c = a;
  a = b;
  b = c;

  console.log('After swapping');
  console.log(`a = ${a} b = ${b}\n`);
}

function swapTwoNumber2(a, b) {
  console.log(`a = ${a} b = ${b}`);

  a = a + b;
  b = a - b;
  a = a - b;

  console.log('After swapping');
  console.log(`a = ${a} b = ${b}`);
}

swapTwoNumber1(5, 10);
swapTwoNumber2(5, 10);
