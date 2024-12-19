/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    let mid = (left + right) >> 1;
    let squaRes = mid * mid;
    if (squaRes === num) return true;
    if (squaRes > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};
