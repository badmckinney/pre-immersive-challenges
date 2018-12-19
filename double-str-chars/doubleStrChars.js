module.exports = function doubleStrChars(str) {
  if (typeof str === 'string') {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
      newStr += str[i];
      newStr += str[i];
    }
    return newStr;
  } else {
    return 'not a string!'
  }
}