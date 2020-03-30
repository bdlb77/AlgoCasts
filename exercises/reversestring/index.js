// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



function reverse(str) {
  return [...str].reduce((revStr, char) => char + revStr, "");
}
// function reverse(str) {
  // let reverseString = "";
  // for(let i = str.length; i > 0; i--){
  //   reverseString += str[i - 1];
  // }
  // return reverseString;
// }
// function reverse(str){
  // str.split('').reverse().join('');
  // return [...str].reverse().join('');
// }

// function reverse(str){
//   let reversed = "";
//   for(let char of str){
//     reversed = char + reversed;
//   }
//   return reversed;
// }

module.exports = reverse;
