const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
//const danishWords =["ø", "bil", "plante", "kaffe", "bog", "planetarium"]
//notThisFunctionName(danishWords); // returns 'ø'
findShortestWord(danishWords);


function findShortestWord(danishWords) {
  let shortestWord = danishWords[0];
//  let shortestWordLength = danishWords[0];
  for (let i = 1; i < danishWords.length; i++) {
    if (danishWords[i].length < shortestWord.length) {
      //shortestWord = danishWords[i].length;
      shortestWord = danishWords[i];

    }
  }
  console.log(shortestWord);
  return shortestWord;
}
