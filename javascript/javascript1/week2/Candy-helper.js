let price;
let candyType;
let weight;
let totalPrice = 0;
let amountToSpend = Math.random() * 100;
var boughtCandyPrices = [];
var boughtCandy = [];
addCandy("sweet", 20);
addCandy("Chocolate", 0.03);
addCandy("Toffee", 2);
addCandy("Chewing-gum", 18);
console.log(boughtCandyPrices);
for (let i = 0; i < boughtCandyPrices.length; i++) {
  totalPrice = totalPrice + boughtCandyPrices[i];
}
console.log("Total price of the 1st Array " + totalPrice);
console.log("Total amount that we spent for candies is " + amountToSpend);
canBuyMoreCandy();

function addCandy(candyType, weight) {
  switch (candyType) {
    case  "sweet":
      price = weight * 0.5;
      boughtCandyPrices.push(price);
      break;
    case  "Chocolate":
      price = weight * 0.7;
      boughtCandyPrices.push(price);
      break;
    case  "Toffee":
      price = weight * 0.7;
      boughtCandyPrices.push(price);
      break;
    case  "Chewing-gum":
      price = weight * 0.03;
      boughtCandyPrices.push(price);
      break;
  }
  return boughtCandyPrices;
}

function canBuyMoreCandy() {
  if (amountToSpend > totalPrice) {
    console.log("You can buy more candy, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
}
