
function split(wholeArray) {
  if(wholeArray.length <= 1) {
    return wholeArray
  }
  const firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length/2))
  const secondHalf = wholeArray.slice(Math.floor(wholeArray.length/2))
  return [firstHalf, secondHalf];
}
//[3,4,5]
//[1,8]
//[1,3,4,5,8]

function merge(arr1, arr2) {
  //debugger;
  if(!arr1.length || !arr2.length) {
    return arr1.concat(arr2)
  } else {
    const arrToPop = arr1[0] > arr2[0] ? arr2 : arr1
    const merged = [arrToPop.shift()].concat(merge(arr1, arr2))
    return merged
  }
}

//[1,4,5,6]
//[[1,4], [5,6]]
//so we would call recursion on the elements but not the entire array?
function mergeSort(array) {
  if(array.length < 2) {
    return array
  }
  const splitted = split(array)
  const firstHalf = splitted[0]
  const secondHalf = splitted[1]
  const sortedFirst = mergeSort(firstHalf)
  const sortedSecond = mergeSort(secondHalf)
  return merge(sortedFirst, sortedSecond)
}
// const splitted = split(array)
// const leftSide = splitted[0] //[1,4]
// const rightside = splitted[1]  //[5,6]
//call recursion on leftside and right side, call recursion on just one and push back the returned array.
//call mergeSort on split array
//bring back merge after calling recursion
