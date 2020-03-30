// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome(str) {
  const strLen = str.length;
  if (strLen < 2) return true;

  if (str[0] === str[strLen - 1]) {
    return palindrome(str.slice(1, strLen - 1));
  }
  return false;
  
}
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i -1];
//   }) 
// }
// function palindrome(str) {
//   const reduced = str.split('').reduce((rev, char) => char + rev, "");

//   return reduced === str;
// }
// function palindrome(str) {
//   let revStr = "";
//   for(char of str){
//     revStr = char + revStr;
//   }
//   return revStr === str;
// }

// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }


module.exports = palindrome;
