console.log("inside warmup file");

class Circle{
constructor(radius){
 this.radius = radius;
}

getDiameter(){
  return this.radius + this.radius ;
}

getCircumference(){
    return 2 * 3.14 * this.radius;
}

getArea(){
    return 3.14 * this.radius * this.radius;
}
}

const circle = new Circle(10);
console.log(circle.getDiameter()); // 20
console.log(circle.getCircumference()); //62.80
console.log(circle.getArea()); // 314

const circle1 = new Circle(5);
console.log(circle1.getDiameter()); // 10
console.log(circle1.getCircumference()); //31.40
console.log(circle1.getArea()); // 78.5

