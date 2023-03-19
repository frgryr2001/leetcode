// function addBinary(a: string, b: string): string {
//   let sum: string = '';
//   let carry:number = 0;
//   if (a.length > b.length) {
//     b = b + ''.padEnd(a.length - b.length, '0');
//   } else {
//     a = a + ''.padEnd(b.length - a.length, '0');
//   }
//   for(let i = a.length-1 ; i >=0 ; i-- ){
//     if(a[i] )
//   }

//   return '0';
// }

// console.log(
//   addBinary(
//     '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
//     '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'
//   )
// );

function addBinary(a: string, b: string): string {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
}
