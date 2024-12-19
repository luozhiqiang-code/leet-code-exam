/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let dp = new Array(numRows)
    .fill(0)
    .map((item, idx) => new Array(idx + 1).fill(1));

  for (let i = 1; i < numRows; i++) {
    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
    }
  }
  return dp;
};

console.log(generate(5));
