const array = [12, 3, 4, 1, 6, 9];
const K = 24;

function getTriplets(array, K) {
  for (let i = 0; i < array.length; i++) {
    const element1 = array[i];

    for (let j = i + 1; j < array.length; j++) {
      const element2 = array[j];

      for (let k = j + 1; k < array.length; k++) {
        const element3 = array[k];

        if (element1 + element2 + element3 === K) {
          return [element1, element2, element3];
        }
      }
    }
  }
}

console.log(getTriplets(array, K));
