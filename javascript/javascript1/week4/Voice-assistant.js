"use strict"
let name = '';
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
    var display = new Date();
    var todaysDate = display.getDate();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var displayYear = new Date();
    var month = months[display.getMonth()];
    var year = display.getFullYear();
    var statement = `${todaysDate}. of ${month} ${year}`;
    return statement;
  }

  if (command.slice(0, 7) === 'what is') {
    let newString1 = command.split(" ");
    var result;
    var a = 0;
    a = Number(newString1[2]);
    var b = 0;
    b = Number(newString1[4]);

    if (newString1[3] === '+') {
      result = a + b;
      // console.log('add');
      return result;

    } else if (newString1[3] === '-') {
      result = a - b;
      //console.log('sub');
      return result;

    } else if (newString1[3] === '*') {
      result = a * b;
      //console.log('multi');
      return result;
    } else if (newString1[3] === '/') {
      result = a / b;
      //console.log('div');
      return result;
    }

    return result;
  }

  if (command === 'Set a timer for 4 minutes') {
    let newString2 = command.split(" ");
    var display = new Date();
    var minutes = display.getMinutes();
    var milliSeconds = newString2[4] * 60 * 1000;
    var onclick = setTimeout(timer, milliSeconds);
    //alert('Timer done');

    return `Timer set for ${newString2[4]} minutes`;

  }
}

function timer() {
  console.log('timer done');
}

/*function currentDate(){
  var display = new Date();
  var todaysDate= display.getDate();
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var displayYear = new Date();
  var month= months[display.getMonth()];
  var year = display.getFullYear();
  var statement = `${todaysDate}. of ${month} ${year}`;
  console.log(statement);
  return ;

}*/
