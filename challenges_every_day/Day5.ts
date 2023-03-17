// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s: string): number {
  const t: number = s.trim().split(' ').pop()?.length || 0;
  return t;
}

console.log(lengthOfLastWord('   fly me   to   the moon  '));
