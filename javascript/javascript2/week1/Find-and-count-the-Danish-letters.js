let string = "Blå grød med røde bær"; // returns {total: 4, æ: 1, ø: 2, å: 1}*/
console.log(danishLetters(string));
string = "Jeg har en blå bil"; // returns {total: 1, å: 1}
console.log(danishLetters(string));


function danishLetters(string) {
  let countOfå = 0;
  let countOfø = 0;
  let countOfæ = 0;
  let strSplit = string.split('');
  for (i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === 'å') {
      countOfå = countOfå + 1;
    } else if (strSplit[i] === 'ø') {
      countOfø = countOfø + 1;
    } else if (strSplit[i] === 'æ') {
      countOfæ = countOfæ + 1;
    }
  }

  const total = countOfå + countOfø + countOfæ;
  const result = {
    total: 0,
    æ: 0,
    ø: 0,
    å: 0
  }
  result.total = total;
  result.æ = countOfæ;
  result.ø = countOfø;
  result.å = countOfå;

  if (countOfæ === 0) {
    delete result.æ;
  }
  if (countOfø === 0) {
    delete result.ø;
  }
  if (countOfå === 0) {
    delete result.å
  }
  return result;
}
