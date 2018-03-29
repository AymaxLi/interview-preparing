let insertionSort = arr => {

  for(let i = 1; i < arr.length; i++){
    for(let j = 0; j < i; j++){
      if(arr[j] > arr[i]) {
        // 将 arr[i] 插入到 j
        arr.splice(j, 0, arr[i])
        // 将 arr[i + 1] (原a[i])删除
        arr.splice(i + 1, 1)
      }
    }
  }
  return arr
}

let res = insertionSort([2, 3, 1, 6, 5, 3, 9, 0])
console.log('the res is ', res)