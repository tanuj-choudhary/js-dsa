function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let spaces = '';
    let ones = '';

    for (let j = 0; j < i; j++) {
      spaces += ' ';
    }

    for (let j = 0; j < n - i; j++) {
      ones += '1';
    }

    console.log(spaces + ones);
  }
}

function printPatternShortHand(n) {
  for (let i = 0; i < n; i++) {
    console.log(' '.repeat(i) + '1'.repeat(n - i));
  }
}

printPattern(5);
printPatternShortHand(5);
