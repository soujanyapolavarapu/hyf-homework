let firstWords =["Easy", "Awesome", "Corporate", "Nick", "Buy & Go", "Thinknew", "Think Big", "AllyouNeed","One and Only", "All in One"];
let secondWords =["bujji", "papa", "babu", "laddu", "boondhi", "ammai", "avtar", "asger", "sony", "barathi"];
var startupName;
//const randomNumber =firstWords[8];
//startupName = firstWords(firstWords[8].length);
const randomNumber = Math.floor(Math.random(firstWords) * 10) + 0;
console.log(randomNumber);
starupName = firstWords[randomNumber];
var starupNamelength = starupName.length;
console.log(starupNamelength);
var newStartupName = "The starup : " + starupName + " contains " + starupNamelength + " characters";
console.log(newStartupName);
