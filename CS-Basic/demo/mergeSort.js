let mergeSort = arr => {
  let merge = (letf, right) => {
    let final = []
    // 不停的比较 letf 与 right 的栈顶，小的出栈，直到任意一个栈为空
    while (left.length && right.length) {
      final.push(left[0] <= right[0] ? left.shift() : right.shift());
    }

    return final.concat(left.concat(right))
  }

  // 最小有序序列
  let len = arr.length
  if (len < 2) return arr

  // 分拆
  let mid = parseInt(len / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  // 归并
  return merge(mergeSort(left), mergeSort(right))
}

res = mergeSort([2, 3, 1, 6, 5, 3, 9, 0])
console.log(res)