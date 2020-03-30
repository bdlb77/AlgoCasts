// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
}

// function chunk(array, size) {
//    // declare new arr chunked
//     // iterate over array (each el in unchunked arr(array))
//       // retrieve last el in chunked arr
//       // if el does NOT exist OR length == size
//         // push new chunk into "chunked" arr
//       // else add to current chunked
//     // look at last el inside chunked arr
//     const chunked = [];
//     for (el of array) {
//       // if no sub array of the length of subarray is size.. ADD a new chunk.
//       const last = chunked[chunked.length -1];
//       if (!last || last.length === size) {
//         chunked.push([el]); // push new CHUNK with el inside!
//       } else {
//         // else if sub array is not full (last) .. add el to it
//         last.push(el);
//       }
//     }
//     return chunked;
// }
chunk([1,2,3,4], 2);
module.exports = chunk;
