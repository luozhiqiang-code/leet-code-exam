/**
 * 暴力法，超时
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      res = Math.max(prices[j] - prices[i], res);
    }
  }
  return res;
};

/**
 * 贪心，阶段最优解
 * @param {*} prices
 * @returns
 */
var maxProfit = function (prices) {
  let res = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    res = Math.max(prices[i] - min, res);
  }
  return res;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
