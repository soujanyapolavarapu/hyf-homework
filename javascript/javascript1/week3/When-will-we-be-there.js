const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = notThisFunctionName(travelInformation);
//console.log(travelTime);
function notThisFunctionName(travelInformation){
  var time = travelInformation.destinationDistance / travelInformation.speed ;
var hours =  Math.floor(time);
//var minutes = Math.fround(time);
var minutes = Math.floor( ( time - hours ) * 60);
console.log(`${hours} hours and ${minutes} minutes`)
  }
