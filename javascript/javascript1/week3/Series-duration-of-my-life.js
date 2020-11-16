const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Just add magic",
    days: 0,
    hours: 22,
    minutes: 30,
  },
  {
    title: "Just add magic:Mystory city",
    days: 0,
    hours: 4,
    minutes: 30,
  },
];
const avgLifeSpan = 80;
const hoursInDay = 24;
const daysInYear = 365.5;
//console.log('soujanya');
console.log(seriesDurations);
//console.log(seriesDurations[0].title);
const durationOfGameOfThronesInHours= (seriesDurations[0].days * hoursInDay ) + seriesDurations[0].hours ;
//console.log(durationOfGameOfThronesInHours);
//console.log(seriesDurations[1].title);
const durationOfJustAddMagicInHours= (seriesDurations[1].days * hoursInDay ) + seriesDurations[1].hours + (seriesDurations[1].minutes/60) ;
//console.log(durationOfJustAddMagicInHours);
//console.log(seriesDurations[2].title);
const durationOfMystoryCityInHours= (seriesDurations[2].days * hoursInDay ) + seriesDurations[2].hours + (seriesDurations[2].minutes/60) ;
//console.log(durationOfMystoryCityInHours);
logOutSeriesText();

function logOutSeriesText() {
const avgLifeSpanInHours = daysInYear * hoursInDay * avgLifeSpan;
//console.log(avgLifeSpanInHours);
var percentageOfGameOfThrones= (durationOfGameOfThronesInHours * 100)/ avgLifeSpanInHours;
var gameOfThrones= percentageOfGameOfThrones.toFixed(2);
//console.log(gameOfThrones);
console.log(`${seriesDurations[0].title} took ${gameOfThrones}% of my life`);
var percentageOfJustAddMagic= (durationOfJustAddMagicInHours * 100)/ avgLifeSpanInHours;
var justAddMagic= percentageOfJustAddMagic.toFixed(3);
//console.log(justAddMagic);
console.log(`${seriesDurations[1].title} took ${justAddMagic}% of my life`);
var percentageOfMystoryCity= (durationOfMystoryCityInHours * 100)/ avgLifeSpanInHours;
var mystoryCity= percentageOfMystoryCity.toFixed(3);
//console.log(mystoryCity);
console.log(`${seriesDurations[2].title} took ${mystoryCity}% of my life`);
var totalSeriesDuration = ((percentageOfGameOfThrones) + (percentageOfJustAddMagic) + (percentageOfMystoryCity)).toFixed(2);
console.log(`In total that is ${totalSeriesDuration} of my life`);
}
