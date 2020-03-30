// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9




function reverseInt(n) {
  if (n === 0) return 0;
  
  let absNum = Math.abs(n);
  const arr = [];
  while (absNum >= 1 ){
    arr.push(Math.floor(absNum % 10));
    absNum /= 10;
  }

  const newInt = parseInt(arr.join(''));
  return n > 0 ? newInt * 1 : newInt * -1;
}

// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
//   if (n < 0) {
//     return parseInt(reversed) * -1;
//   }
//   return parseInt(reversed);
// }
// function reverseInt(n) {
//   let str = Math.abs(n).toString().split('').reverse().join('');
//   const num = parseInt(str)

//   return parseInt(str) * Math.sign(n);
// }

module.exports = reverseInt;
