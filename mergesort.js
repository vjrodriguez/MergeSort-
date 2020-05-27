
function split(wholeArray) {
  const firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length/2))
  const secondHalf = wholeArray.slice(Math.floor(wholeArray.length/2))
  return [firstHalf, secondHalf];
}
