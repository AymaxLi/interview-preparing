let shellSort = arr => {
  var gap, i, j
  var temp

  for (gap = arr.length >> 1; gap > 0; gap >>= 1) {
    for (i = gap; i < arr.length; i++) {
      temp = arr[i];
      for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap)
        arr[j + gap] = arr[j];
      arr[j + gap] = temp;
    }
  }

  return arr
}

let res = shellSort([2, 3, 1, 6, 5, 3, 9, 0])
console.log('the res is ', res)