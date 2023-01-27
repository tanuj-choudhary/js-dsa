function fourSum(nums, target) {
  nums.sort((a, b) => a - b);

  const outputSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        for (let l = k + 1; l < nums.length; l++) {
          if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
            const output = [nums[i], nums[j], nums[k], nums[l]];
            outputSet.add(output);
          }
        }
      }
    }
  }

  return [...outputSet];
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2], 8));
