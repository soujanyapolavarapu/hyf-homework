"use strict"

 let countS=0;
 let countL=0;

const userInput = document.getElementById('number');
const button = document.getElementById('button');
const gameInfo = document.getElementById('game_info');
const restart = document.getElementById('restart_button');

function gameEnd() {
  document.removeEventListener("keypress", keyPresses);
  if (countOne > countTwo) {
    gameInfo.innerHTML = "WINNER : S-key user";
    var confettiSettings = {
      target: 'my-canvas-one'
    };
    // @ts-ignore
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  } else if (countOne < countTwo) {
    gameInfo.innerHTML = "WINNER: L-key user ";
    var confettiSettings = {
      target: 'my-canvas-two'
    };
    // @ts-ignore
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  } else if (countS === 0 && countL === 0) {
    gameInfo.innerHTML = "No key presses!Try again";
  } else if (countS === countL) {
    gameInfo.innerHTML = "Its a Tie ";
    console.log('Its a Tie');

  }console.log(countS  ,  countL)
}

button.addEventListener('click', function gameStart() {
  // @ts-ignore
  document.getElementById("number").disabled = true;
  // @ts-ignore
  let time = userInput.value;
  //  console.log(Number(time));
  if (time === "" || Number.isNaN(Number(time))) {
    gameInfo.innerHTML = "Enter time in seconds"
  } else {
    // gameInfo.innerHTML = "Game will start and Time limit is set for " + time + " seconds";

    // @ts-ignore
    const timeLimit = time * 1000;
    let countdowntime = setInterval(countdownStarts, 1000);

    function countdownStarts() {
      document.getElementById("countdown_starts").innerHTML = "Time Left : " + time + " seconds";
      time--;
      if (time < 0) {
        clearInterval(countdowntime)
        document.getElementById("countdown_starts").innerHTML = "Game Over";
        gameEnd();
      }

    }
  }
});

let countOne = 0;
let countTwo = 0;

function keyPresses(event) {
  //console.log(event);
  let countS = document.getElementById('count-s');
  console.log(countS)
  let countL = document.getElementById('count-l');
  console.log(countL)
  if (event.key === 's') {
    countOne++;
    // @ts-ignore
    countS.innerHTML = countOne;
  } else if (event.key === 'l') {
    countTwo++;
    // @ts-ignore
    countL.innerHTML = countTwo;
  }
   else {
    gameInfo.innerHTML = "please enter right key";
  }

}
document.addEventListener('keypress', keyPresses);



function restartTheGame() {
  document.location.href = "";
}
// @ts-ignore
restart_button.addEventListener("click", restartTheGame);
