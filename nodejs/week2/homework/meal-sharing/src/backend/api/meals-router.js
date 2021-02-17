const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/:id", async (request, response) => {
 if(isNaN(parseInt(request.params.id))){
   response.status(400).send();
 }
  else{
 const mealsId = meals.filter((meal)=> meal.id === parseInt(request.params.id));
if(mealsId.length === 0 ){
  response.send(`Requested meal Id: ${request.params.id} is Not Available`);
} else{
  response.send(mealsId[0]);
}
}
});


router.get("/", async (request, response) => {
  try{
  key = Object.keys(request.query)[0];

switch(true){
  case  typeof(key) === "undefined":
    response.send(meals);
    break;

  case  key === "maxPrice":
    if(isNaN(parseInt(request.query.maxPrice)) || (parseInt(request.query.maxPrice) < 0)){
      response.status(400).send();
    }
    else{
    const mealsPrice = meals.filter((meal)=>meal.price < parseInt(request.query.maxPrice));
    if(mealsPrice.length === 0 ){
      response.send(`Requested meal price under: ${request.query.maxPrice} is/are Not Available`);
     }
     else  {
    response.send(mealsPrice);
      }
    }
    break;

  case key === "title":
   const mealsTitle = meals.filter((meal)=>{
         return (meal.title).includes(request.query.title);
       });
       response.send(mealsTitle);
    break;

  case key === "createdAfter":


  if (Number.isNaN(Date.parse(request.query.createdAfter))) {
    response.status(400).send();
  } else {
    const mealsDate = meals.filter(meal => Date.parse(meal.createdAt) > Date.parse(request.query.createdAfter));
    response.send(mealsDate);
  }

    break;

  case key === "limit":
    const newArray=[];
    const numberOfMeals = parseInt(request.query.limit) > meals.length ? meals.length : parseInt(request.query.limit);

    function mealsLimit(){
              for(let i=0; i<numberOfMeals; i++){
                  newArray.push(meals[i]);
              }
              return newArray;
          }

          if(isNaN(parseInt(request.query.limit))){
             response.status(400).send();
           }else{

          const newLimit =  mealsLimit();
          if(numberOfMeals === 0 ){
            response.send(`Requested meals limit : ${request.query.limit} is/are Not Available`);
          }
          else  {
          response.send(newLimit);
          }
        }

    break;

   default:
      response.status(400).send("Please enter valid query params");
 }
}
 catch(error){
  throw error;
}
});


module.exports = router;
