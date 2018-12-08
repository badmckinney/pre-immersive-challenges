module.exports = function cookieProblem(array) {
  let max = Math.max.apply(null, array);
  let totalAdditional = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < max) {
      let additional = max - array[i];
      array[i] += additional;
      totalAdditional += additional;
    }
  }
  return totalAdditional;
}