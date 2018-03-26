let selectionSort = arr => {
  let len = arr.length
  let minIndex, temp

  for (let i = 0; i < len - 1; i++) {
    minIndex = i

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // find the min element's index
        minIndex = j
      }
    }

    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] =temp
  }

  return arr
}

let res = selectionSort([2, 3, 1, 6, 5, 3, 9, 0])
console.log('the res is ', res)