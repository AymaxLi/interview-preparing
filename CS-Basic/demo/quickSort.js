/**
 * Quick Sort
 * @param {Array} arr array to be sorted
 * @param {Fuction} compare the compare function return with boolean
 */
let quickSort = (arr, compare) => {
  if (arr.length <= 1) {
    return arr
  }
  console.log(arr)

  let pivot = arr[0]  // 基值 the pivot
  let chunkT = [] // the chunk of whose return ture
  let chunkF = [] // the chunk of whose return false

  let i = 1 // avoid query the pivot
  for (i; i < arr.length; i ++) {
    // comparing
    if (compare(pivot, arr[i])) {
      chunkT.push(arr[i])
    } else {
      chunkF.push(arr[i])
    }
  }

  // concatenate the result
  return [quickSort(chunkT, compare), [pivot], quickSort(chunkF, compare)].reduce((a, b) => a.concat(b))
}

// the comparing function, which must reutrn with a boolean
let compare = (a, b) => (a - b >= 0)

let res = quickSort([2, 3, 1, 6, 5, 3, 9, 0], compare)
console.log('result is ', res)