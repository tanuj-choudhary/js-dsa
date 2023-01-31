function getEquilibriumPointBruteForce(array = []) {
  for (let i = 0; i < array.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) {
      leftSum += array[j];
    }

    for (let j = i + 1; j < array.length; j++) {
      rightSum += array[j];
    }

    if (leftSum === rightSum) {
      return i + 1;
    }
  }

  return 'No equilibrium point exists';
}

function getEquilibriumPointOptimised(array = []) {
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < array.length; i++) {
    rightSum += array[i];
  }

  for (let i = 0; i < array.length; i++) {
    rightSum -= array[i];
    if (leftSum === rightSum) {
      return i + 1;
    }
    leftSum += array[i];
  }

  return 'No equilibrium point exists';
}

console.log(getEquilibriumPointBruteForce([1, 3, 5, 2, 2])); // 3
console.log(getEquilibriumPointBruteForce([2, 6, 5, 8])); // 3
console.log(getEquilibriumPointBruteForce([1])); // 1
console.log(getEquilibriumPointBruteForce([0, 1])); // 2

console.log(getEquilibriumPointOptimised([1, 3, 5, 2, 2])); // 3
console.log(getEquilibriumPointOptimised([2, 6, 5, 8])); // 3
console.log(getEquilibriumPointOptimised([1])); // 1
console.log(getEquilibriumPointOptimised([0, 1])); // 2
