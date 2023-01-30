function zigZagConversion(s, numRows) {
  if (numRows === 1 || numRows > s.length) {
    return s;
  }

  const numCols = Math.round(s.length / (numRows - 2));
  const matrix = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    matrix[i] = new Array(numCols).fill('');
  }

  let currRow = 0;
  let currCol = 0;
  let i = 0;

  while (i < s.length) {
    while (currRow < numRows && i < s.length) {
      matrix[currRow][currCol] = s[i];
      currRow++;
      i++;
    }

    currRow -= 2;
    currCol++;

    while (currRow > 0 && i < s.length) {
      matrix[currRow][currCol] = s[i];
      currRow--;
      currCol++;
      i++;
    }
  }

  let output = '';

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== '') {
        output += matrix[i][j];
      }
    }
  }

  return output;
}

console.log(zigZagConversion('PAYPALISHIRING', 4));
console.log(zigZagConversion('A', 1));
