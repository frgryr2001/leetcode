// https://leetcode.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let current = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
    if (current < target) {
      current = nums[i + 1];
    } else {
      return i;
    }
  }
  return nums.indexOf(current) !== -1 || nums.length;
};
console.log(searchInsert([1, 3, 5, 6], 0));
// nums = [1,3,5,6], target = 5 =>  2
