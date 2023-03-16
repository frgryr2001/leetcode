// https://leetcode.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  let count = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
      count--;
    }
  }

  return count;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
