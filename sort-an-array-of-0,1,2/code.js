/*****************************  Using sort function *****************************************/
let list = [0, 0, 2, 1, 0, 0, 1, 2]; // [0,0,0,0,1,1,2,2]

list.sort();

console.log(list);

/*****************************  Using 2 loops **********************************************/
list = [0, 0, 2, 1, 0, 0, 1, 2];

let zeroesCount = 0;
let onesCount = 0;

for (const elem of list) {
  if (elem === 0) {
    zeroesCount++;
  } else if (elem === 1) {
    onesCount++;
  }
}

onesCount += zeroesCount;

for (let i = 0; i < list.length; i++) {
  if (i < zeroesCount) {
    list[i] = 0;
  } else if (i < onesCount) {
    list[i] = 1;
  } else {
    list[i] = 2;
  }
}

console.log(list);

/*********************  Using dutch national flag based algorithm ****************************/
list = [0, 0, 2, 1, 0, 0, 1, 2];

let low = 0;
let high = list.length - 1;
let mid = 0;

while (mid <= high) {
  if (list[mid] === 0) {
    //swap
    [list[mid], list[low]] = [list[low], list[mid]];
    low++;
    mid++;
  } else if (list[mid] === 2) {
    //swap
    [list[mid], list[high]] = [list[high], list[mid]];
    high--;
  } else {
    mid++;
  }
}

console.log(list);
