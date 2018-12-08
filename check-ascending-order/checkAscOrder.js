module.exports = function checkAscOrder(numArray) {
    let ascOrder;
    for (i = 0; i < numArray.length; i += 1) {
    if (i > 0) {
      if (numArray[i] > numArray[i - 1]) {
        ascOrder = true;
      } else {
        return false;
      }
    }
  }
  console.log(ascOrder);
  return ascOrder;
}