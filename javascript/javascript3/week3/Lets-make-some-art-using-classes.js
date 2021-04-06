//creating canvas and filling color(Paint a circle to a canvas element)
//Now lets make art!
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    context.fillStyle = this.fillColor;
    context.fill();
    context.lineWidth = 5;
    //  context.strokeStyle = '#003300';
    context.stroke();
    context.closePath();
  }
}
const c1 = new Circle(100, 100, 60, 0, 2 * Math.PI, "pink");
c1.draw(context);
//Now lets make art! using set Interval
setInterval(function() {
  let newColor = generateRandomColor();

  function generateRandom(minNum, maxNum) {
    let randomDecimal = Math.random();
    let range = maxNum - minNum;
    let scaleUp = Math.round(randomDecimal * range);
    let finalNum = minNum + scaleUp;
    return finalNum;
  }

  let xCenter = generateRandom(0, window_width);
  let yCenter = generateRandom(0, window_height);
  let radius = generateRandom(10, 50);
  let c1 = new Circle(xCenter, yCenter, radius, 0, 2 * Math.PI, newColor);
  console.log(c1);
  c1.draw(context);

  function generateRandomColor() {
    let red = generateRandom(0, 255);
    let green = generateRandom(0, 255);
    let blue = generateRandom(0, 255);
    let totalColor = "rgb(" + red + "," + green + "," + blue + ")";
    return totalColor;
  }
}, 100);


//Follow the mouse
document.body.addEventListener("mousemove", function(e) {
  let mouseInfo = 'Position X : ' + e.clientX + 'Position Y : ' + e.clientY;
  let newColor = generateRandomColor();

  function generateRandom(minNum, maxNum) {
    let randomDecimal = Math.random();
    let range = maxNum - minNum;
    let scaleUp = Math.round(randomDecimal * range);
    let finalNum = minNum + scaleUp;
    return finalNum;
  }

  let radius = generateRandom(10, 50);
  let c1 = new Circle(e.clientX, e.clientY, radius, 0, 2 * Math.PI, newColor);
  console.log(c1);
  c1.draw(context);

  function generateRandomColor() {
    let red = generateRandom(0, 255);
    let green = generateRandom(0, 255);
    let blue = generateRandom(0, 255);
    let totalColor = "rgb(" + red + "," + green + "," + blue + ")";
    return totalColor;
  }

});
