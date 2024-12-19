/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  /**
   * 为什么取left?
   * mid除以2是向下取整，
   * 当nums为奇数则left=right停止，当nums为偶数，则最后一定是right右移到left的左边，直到跳出循环
   * 如果mid值使用Math.floor效果一样，也是取left。mid取Math.ceil，则取right
   * */
  return left;
};
