function getTripletsBruteforce(array, K) {
  if (array.length < 3) {
    return [];
  }

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
  return [];
}

function getTripletsOptimal(array, sum) {
  if (array.length < 3) {
    return [];
  }

  for (let i = 0; i < array.length; i++) {
    const set = new Set();
    const element1 = array[i];

    for (let j = i + 1; j < array.length; j++) {
      const element2 = array[j];
      const element3 = sum - element2 - element1;

      if (set.has(element3)) {
        return [element1, element3, element2];
      } else {
        set.add(element2);
      }
    }
  }
  return [];
}

console.log(getTripletsBruteforce([12, 3, 4, 1, 6, 9], 24));
console.log(getTripletsOptimal([12, 3, 4, 1, 6, 9], 24));
console.log(getTripletsOptimal([3, 1], 7));
