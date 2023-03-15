//
//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const lenghtOfHaystack = haystack.toLocaleLowerCase().length;
  const lenghtOfNeele = needle.toLocaleLowerCase().length;
  if (haystack.substring(0, lenghtOfNeele) === needle) return 0;
  for (let i = 1; i < lenghtOfHaystack - lenghtOfNeele + 1; i++) {
    if (haystack.substring(i, i + lenghtOfNeele) === needle) return i;
  }
  return -1;
};
console.log(strStr('sadbutsaddd', 'sad213'));
