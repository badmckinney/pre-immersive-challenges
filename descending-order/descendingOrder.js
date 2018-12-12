module.exports = function descendingOrder(number) {
  if (typeof number === 'number') {
    let numStr = number.toString();
    numStrArr = [];
    for(i = 0; i < numStr.length; i++) {
      numStrArr.push(numStr[i]);
    }
    numStrArr.sort().reverse();
    newNumber = numStrArr.join('');
    return parseInt(newNumber);
  } else {
    return "not a number!"
  }
}