"use strict"
let toDo = [];

console.log(getReply(123));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply('What is my name'));
console.log(getReply('Add fishing to my todo'));
getReply('Add singing in the shower to my todo');
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('what is 3 + 2'));
console.log(getReply('what is 3 - 2'));
console.log(getReply('what is 3 * 2'));
console.log(getReply('what is 3 / 2'));
console.log(getReply('Set a timer for 4 minutes'));



function getReply(command) {
  let name;
  if (typeof command !== 'string') {
    let response = 'please enter valid command';
    return response;
  }
  if (command.slice(0, 16) === 'Hello my name is') {
    let newString = command.split(" ");
     name = newString[newString.length - 1];
    let response = 'Nice to meet you ' + name;
    return response;
  }

  if (command === 'What is my name') {
    return name;
  }

  if (command === 'Add fishing to my todo') {
    toDo.push(command);
    return 'fishing added to your todo';
  }

  if (command === 'Add singing in the shower to my todo') {
    toDo.push(command);
    return;
  }

  if (command === 'Remove fishing from my todo') {
    toDo.shift();
    return 'Removed fishing from your todo';
  }

  if (command === 'What is on my todo?') {
    if (toDo.length === 1) {
      if (toDo[0] === 'Add fishing to my todo') {
        return 'fishing'
      } else {
        return 'singing in the shower'
      }
    } else {
      return 'fishing and singing in the shower';
    }
  }

  if (command === 'What day is it today?') {
    //currentDate();
   let display = new Date();
   let todaysDate = display.getDate();
   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   let displayYear = new Date();
   let month = months[display.getMonth()];
   let year = display.getFullYear();
   let statement = `${todaysDate}. of ${month} ${year}`;
    return statement;
  }

  if (command.slice(0, 7) === 'what is') {
    let ArithmeticOperations = command.split(" ");
    let result;
    let a = 0;
    a = Number(ArithmeticOperations[2]);
    let b = 0;
    b = Number(ArithmeticOperations[4]);

    if (ArithmeticOperations[3] === '+') {
      result = a + b;
      // console.log('add');
      return result;

    } else if (ArithmeticOperations[3] === '-') {
      result = a - b;
      //console.log('sub');
      return result;

    } else if (ArithmeticOperations[3] === '*') {
      result = a * b;
      //console.log('multi');
      return result;
    } else if (ArithmeticOperations[3] === '/') {
      result = a / b;
      //console.log('div');
      return result;
    }

    return result;
  }

  if (command === 'Set a timer for 4 minutes') {
    let setTimer = command.split(" ");
    var display = new Date();
    var minutes = display.getMinutes();
    var milliSeconds = Number(setTimer[4]) * 60 * 1000;
    //setTimeout(timer, milliSeconds);
    
    return `Timer set for ${setTimer[4]} minutes`;

  }
}

function timer() {
  console.log('timer done');
}


