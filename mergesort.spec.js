describe('Split Array function', function() {
  it('is able to split arrays with one value', function() {
    expect(split([1])).toEqual([1])
  });
  it('does not split an empty array', function() {
    expect(split([])).toEqual([])
  });
  it('split ararys with even number of elements', function() {
    expect(split([1,2,3,4,5,6])).toEqual([[1,2,3],[4,5,6]])
  });
  it('is able to split arrays with odd number of elements', function() {
    expect(split([1,2,3,4,5,6,7])).toEqual([[1,2,3],[4,5,6,7]])
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1,2],[3,4])).toEqual([1,2,3,4])
    expect(merge([1,3],[2,4])).toEqual([1,2,3,4])
  });
  it('is able to merge two sorted arrays of different length', function(){
    expect(merge([1,2,3],[4])).toEqual([1,2,3,4])
  })
  it('is able to merge two empty arrays', function(){
    expect(merge([],[])).toEqual([])
  })
});

describe('merge sort function', function(){
  it('merges and sorts two arrays each with a single element', function(){
    expect(mergeSort([1,2])).toEqual([1,2])
  });
  it('merges and sorts two arrays of the same length', function(){
    expect(mergeSort([7,4,3,8])).toEqual([3,4,7,8])
  });
  it('merges and sorts two arrays of different length', function(){
    expect(mergeSort([3,2,5,9,8,4,6])).toEqual([2,3,4,5,6,8,9])
  });
  it('merges and sorts two empty arrays', function(){
    expect(mergeSort([])).toEqual([])
  });
  it('merges and sorts an empty array and a not empty array', function(){
    expect(mergeSort([1000])).toEqual([1000])
  });
})
