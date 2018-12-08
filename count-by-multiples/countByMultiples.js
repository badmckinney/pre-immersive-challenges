module.exports = function countByMultiples(length, x) {
  let arr = [];
  for (let i = 0; i < length + 1; i++) {
    if (i > 0) {
      arr.push(x * i);
    }
  }
  console.log(arr);
  return arr; 
}