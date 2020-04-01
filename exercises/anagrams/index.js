// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB){
   return cleanString(stringA) === cleanString(stringB);
}
function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
module.exports = anagrams;





// function anagrams(stringA, stringB) {
//   const strA = cleanString(stringA);
//   const strB = cleanString(stringB);
//   if(strA.length !== strB.length) return false;

//   const mapA = buildCharMap(strA);
//   const mapB = buildCharMap(strB);

//   for (let key in mapA) {
//     if (!mapB[key]) return false;

//     if(mapA[key] !== mapB[key]) {
//       return false;
//     }
//   }
//   return true;

// }
// function cleanString(str) {
//   return str.replace(/[^\w]/g, '').toLowerCase();

// }
// function buildCharMap(str) {
//   const charMap = {}
//   str.split('').forEach(l => charMap[l] ? charMap[l] += 1 : charMap[l] = 1);
//   return charMap;
// }

