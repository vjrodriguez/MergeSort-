describe('Split Array function', function() {
  it('is able to split arrays with one value', function() {
    expect(split([1]).toEqual([1]))
  });
  it('does not split an empty array', function() {
    expect(split([]).toEqual([]))
  });
  it('split ararys with even number of elements', function() {
    expect(split([1,2,3,4,5,6]).toEqual([[1,2,3],[4,5,6]]))
  });
  it('is able to split arrays with odd number of elements', function() {
    expect(split([1,2,3,4,5,6,7]).toEqual([[1,2,3],[4,5,6,7]]))
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
  });
});
