module.exports = function acceptableSequence(str) {
  
  // const format = /\+\+\w\+\+\=\=\=/g;
  // if (str.match(format)) {
  //   return true;
  // } else {
  //   return false;
  // }

  // if (str.charAt(0) === '+') {
  //   return true;
  // } else {
  //   return false;
  // }

  const letter = /[a-z]/i;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(letter)) {
      if (str[i - 1] === '+' || str[i + 1] === '+') {
        return true;
      } else {
        return false;
    }
  }
}

