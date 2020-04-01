// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let wordArray = [];
  for (let word of str.split(' ')) {
      wordArray.push(capitalizeWord(word));
    }
  return wordArray.join(" ");
}

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
module.exports = capitalize;

// function capitalize(str) {
//   let result = str[0].toUpperCase();


//   for (let i = 1; i < str.length; i++) {
//     result +=  (str[i - 1] === " ") ? str[i].toUpperCase() : str[i];
//   }
//   return result;
// }