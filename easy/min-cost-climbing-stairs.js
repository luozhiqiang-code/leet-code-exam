/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dp = cost;

  if (dp.length < 2) return dp[0];

  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + dp[i];
  }

  return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
