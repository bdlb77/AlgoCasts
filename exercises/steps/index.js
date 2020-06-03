// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (row === n) {
    return;
    // once row hits n return!
  }
  // if curr level for stair.. clg the stair and return
  // recurse to keep adding spaces until stair is row length
  if (n == stair.length) {
    console.log(stair)
    return steps(n, row + 1)
  }
  //  str should be of length
  //  if stair len is less than curr row.. add a #, else
  let add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}
steps(4)
module.exports = steps;
