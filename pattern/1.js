function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let temp = '';
    for (let j = 0; j < n - i; j++) {
      temp += '*';
    }
    console.log(temp);
  }
}

function printPatternShortHand(n) {
  for (let i = 0; i < n; i++) {
    console.log('*'.repeat(n - i));
  }
}

printPattern(5);
printPatternShortHand(5);
