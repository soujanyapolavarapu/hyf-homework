//Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

function afterTheScriptIsLoaded(){
  //console.log('Called after 2.5 seconds');
  setTimeout(()=>console.log('Called after 5 seconds'),5000);
}



//Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds.
//Call the function you have created with some different arguments.

delayForSeconds(1,'delay string for 1 seconds');
delayForSeconds(10,'delay string for 10 seconds');

function delayForSeconds(delay,stringToLog){
    setTimeout(()=>console.log(stringToLog),delay*1000);
  }

//Create a button in html.
//When clicking this button, use the function you created in the previous task to
 //log out the text: Called after 5 seconds 5 seconds after the button is clicked.
 const clickButton = document.getElementById('button-one');
 clickButton.addEventListener('click', afterTheScriptIsLoaded);


//4th ecercise
const logsOutEarth = function earth(){
  console.log('Earth');
};
const logsOutSaturn = function saturn(){
  console.log('Saturn');
};
function planetLogFunction(callback){
    callback(planetLogFunction);
}
planetLogFunction(logsOutEarth);
planetLogFunction(logsOutSaturn);


//Create a button with the text called "Log location".
//When this button is clicked the location (latitude, longitude) of the user should be
//logged out using this browser api

const logLocation =document.getElementById('button-two');
logLocation.addEventListener('click', initMap);
let map;
//initMap();
function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function showPosition(position) {
      document.getElementById('co-ordinates').innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
     map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: position.coords.latitude, lng: position.coords.longitude},
        zoom: 8,
      })
    });
    console.log(map);
  }
}


//Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function.
//Try and call this function with different delays and different callback functions

function runAfterDelay(delay,callback){
setTimeout(callback,delay*1000);
}
runAfterDelay(10,logsOutEarth/*function(){console.log('should logged after 5 seconds')}*/);

//Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds.
//If a double click has been detected, log out the text: "double click!"
const functionDoubleClick = ()=>{
    setTimeout(()=>{console.log('double click!')}, 0.5*1000);
  }
document.getElementById('button-three').addEventListener('click', functionDoubleClick);


/*Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke
 - boolean, logFunnyJoke - function and logBadJoke - function.
 If you set tellFunnyJoke to true it should call the logFunnyJoke
 function that should log out a funny joke.
 And vice versa.*/


function jokeCreator(shouldTellFunnyJoke,logFunnyJoke,logBadJoke){
  (shouldTellFunnyJoke=== true) ? logFunnyJoke() : logBadJoke();
}
jokeCreator(true, function(){
  console.log('logFunnyJoke');
},function(){
  console.log('logBadJoke');
});

//Function as a variable
//Create an array with 3 items. All items should be functions.
//Iterate through the array and call all the functions.
function add(a,b){
  return a+b;
}
function sub(a,b){
  return a-b;
}
function mul(a,b){
  return a*b;
}
const functionsArray =[add, sub, mul];
for(let i=0; i<functionsArray.length; i++){
  console.log(functionsArray[(i)]);
}


//Create a function as a const and try creating a function normally.
//Call both functions.


// We can't call it here
// constantFunction();   UNDEFINED!!!
// We can call it here
normal();// Defined

const constantFunction = ()=>{
  console.log('constant function');
}
// We can call it here
constantFunction(); // works
function normal(){
  console.log('Normal function');
}


//Create an object that has a key whose value is a function. Try calling this function.
//coding();
 let myDetails ={
   name: 'souji',
   type: function coding(){
     console.log('coding');
   },
 };
console.log(myDetails.type);
