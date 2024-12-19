/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = x;
  let mid;
  while (left <= right) {
    mid = (left + right) >> 1;
    // 按照题目要求向下取整，难点在于判断条件
    if (mid * mid <= x && (mid + 1) * (mid + 1) > x) return mid;
    if (mid * mid < x) left = mid + 1;
    else right = mid - 1;
  }
};
