// https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    digits[i] %= 10;
  }
  if (carry) {
    digits.unshift(carry);
  }
  return digits;
}
console.log(plusOne([9, 9]));
