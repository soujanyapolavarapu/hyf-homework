 let peterView = {
  height: 10,
  width: 8,
  depth: 10,
  housePrice: 2500000,
  gardenSizeIn: 100,
}
let volumeInMeters = peterView.height * peterView.width * peterView.depth;
console.log(volumeInMeters);
peterView.housePrice = volumeInMeters * 2.5 * 1000 + peterView.gardenSizeIn * 300;
console.log(peterView.housePrice);

let juliaView = {
 height: 8,
 width: 5,
 depth: 11,
 housePrice: 1000000,
 gardenSizeIn: 70,
}
volumeInMeters = juliaView.height * juliaView.width * juliaView.depth;
console.log(volumeInMeters);
juliaView.housePrice = volumeInMeters * 2.5 * 1000 + juliaView.gardenSizeIn * 300;
console.log(juliaView.housePrice);

console.log('Peter and Julia paying :' + juliaView.housePrice + ',' + peterView.housePrice + ' and it is excess money.');
