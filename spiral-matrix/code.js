function spiralMatrix(array) {
  const n = array.length;
  const m = array[0].length;

  let output = [];
  let count = 0;
  let rowStart = 0;
  let colStart = 0;
  let rowEnd = n - 1;
  let colEnd = m - 1;

  while (count < n * m) {
    for (let i = rowStart, j = colStart; j <= colEnd && count < n * m; j++) {
      count++;
      output.push(array[i][j]);
    }
    rowStart += 1;

    for (let i = rowStart, j = colEnd; i <= rowEnd && count < n * m; i++) {
      count++;
      output.push(array[i][j]);
    }
    colEnd -= 1;

    for (let i = rowEnd, j = colEnd; j >= colStart && count < n * m; j--) {
      count++;
      output.push(array[i][j]);
    }
    rowEnd -= 1;

    for (let i = rowEnd, j = colStart; i >= rowStart && count < n * m; i--) {
      count++;
      output.push(array[i][j]);
    }
    colStart += 1;
  }

  return output;
}

console.log(
  spiralMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
  ])
);

console.log(spiralMatrix([[1, 2, 3, 4]]));

console.log(spiralMatrix([[1], [2], [3], [4]]));
