// https://leetcode.com/problems/climbing-stairs/

function climbStairs(n: number): number {
  const step = [1, 2];
  for (let i = 2; i < n; i++) {
    step[i] = step[i - 1] + step[i - 2];
  }
  return step[n - 1];
}

console.log(climbStairs(5));
