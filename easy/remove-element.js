/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let slow = nums.indexOf(val);
  if (slow === -1) return nums.length;

  for (let fast = slow + 1; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast];
    }
  }

  return slow;
};
