let price;
let candyType;
let weight;
let totalPrice =0;
let amountToSpend = Math.random() * 100;
var boughtCandyPrices=[];
var boughtCandy= [];
addCandy('sweet', 20);
addCandy('Chocolate', 0.03)
addCandy('Toffee', 2);
addCandy('Chewing-gum', 18);
console.log(boughtCandyPrices);
for (i=0; i<boughtCandyPrices.length; i++){
   totalPrice= totalPrice + boughtCandyPrices[i];
}
console.log('Total price of the 1st Array ' + totalPrice);
console.log('Total amount that we spent for candies is ' + amountToSpend);
canBuyMoreCandy( );
if(true){
  console.log("You can buy more candy, so please do!");
}
else
{
  console.log("Enough candy for you!");
}




function addCandy (candyType , weight) {
  if(candyType== 'sweet'){
    price= weight * 0.5;
  }
  else if (candyType== 'Chocolate'){
    price= weight * 0.7;
  }
  else if (candyType== 'Toffee'){
    price= weight * 1.1;
  }
  else if (candyType== 'Chewing-gum'){
    price= weight * 0.03;
  }
  boughtCandyPrices.push(price);
}

function canBuyMoreCandy( ){
  if(amountToSpend > totalPrice){
    return true;
  }
  else{
    return false;
  }
}
