let string = "Blå grød med røde bær"; // returns {total: 4, æ: 1, ø: 2, å: 1}*/
console.log(danishLetters(string));
string = "Jeg har en blå bil"; // returns {total: 1, å: 1}
console.log(danishLetters(string));


function danishLetters(string) {
  let countOfå = 0;
  let countOfø = 0;
  let countOfæ = 0;
  const strSplit = string.split('');
  for (let i = 0; i < strSplit.length; i++) {
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
  }
  result.total = total;
  if(countOfæ != 0){
  result.æ = countOfæ;
  }
  if(countOfø != 0){
    result.ø = countOfø;
  }
  if(countOfå != 0){
    result.å = countOfå;
  }
  return result;
}
