const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
//notThisFunctionName(danishWords); // returns 'ø'
findShortestWord(danishWords);


function findShortestWord(danishWords) {
  let shortestWord;
  let shortestWordLength = danishWords[0].length;
  for (let i = 1; i < danishWords.length; i++) {
    if (shortestWordLength > danishWords[i].length) {
      shortestWordLength = danishWords[i].length;
      shortestWord = danishWords[i];

    }
  }
  console.log(shortestWord);
  return shortestWord;
}
