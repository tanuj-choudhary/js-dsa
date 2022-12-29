// Bruteforce

function findDuplicateInArray1(arr = []) {
  if (arr.length < 2) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].toLowerCase() === arr[j].toLowerCase()) {
        return arr[i];
      }
    }
  }

  return null;
}

console.log(findDuplicateInArray1(['a']));
console.log(findDuplicateInArray1(['a', 'b', 'c']));
console.log(findDuplicateInArray1(['a', 'b', 'a', 'c', 'b', 'f']));
console.log(findDuplicateInArray1(['a', 'b', 'k', 'c', 'b', 'f']));

// Optimal
function findDuplicateInArray2(arr = []) {
  if (arr.length < 2) {
    return null;
  }

  const charSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (charSet.has(arr[i])) {
      return arr[i];
    } else {
      charSet.add(arr[i]);
    }
  }

  return null;
}

console.log(findDuplicateInArray1(['a']));
console.log(findDuplicateInArray1(['a', 'b', 'c']));
console.log(findDuplicateInArray1(['a', 'b', 'a', 'c', 'b', 'f']));
console.log(findDuplicateInArray1(['a', 'b', 'k', 'c', 'b', 'f']));
