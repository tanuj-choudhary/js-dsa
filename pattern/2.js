function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let temp = '';
    for (let j = 0; j < n - i; j++) {
      temp += i + 1;
    }
    console.log(temp);
  }
}

function printPatternShortHand(n) {
  for (let i = 0; i < n; i++) {
    console.log(String(i + 1).repeat(n - i));
  }
}

printPattern(5);
printPatternShortHand(5);
