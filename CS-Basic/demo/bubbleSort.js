/**
 * Bubble Sort
 * @param {Array} arr
 */
let bubbleSort = arr => {
  let len = arr.length

  for (let i = 0; i < len; i ++) {
    console.log(arr)
    for (let j = 0; j < len - i - 1; j ++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }

  return arr
}

let res = bubbleSort([2, 3, 1, 6, 5, 3, 9, 0])
console.log('the res is ', res)