// Function to help create multiple element in an array depending on the count
export function replicateArray(array, n) {
  var arrays = Array.apply(null, new Array(n))

  arrays = arrays.map(function () {
    return array
  })

  return [].concat.apply([], arrays)
}
