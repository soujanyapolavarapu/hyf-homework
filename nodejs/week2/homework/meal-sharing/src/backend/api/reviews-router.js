const express = require("express");
const router= express.Router();


const reviews = require("./../data/reviews.json");

console.log(reviews);
//{}

router.get("/", (request, response)=>{
    try{
        console.log(reviews);
        console.log("in/api/reviews");
    }
    catch(error){
      throw error;
    }
    console.log(request.params);
    console.log("hi" + reviews);
    response.send(reviews);
});


router.get("/:id", (request, response)=>{

  console.log(request.params);
  const reviewsId = reviews.filter((review)=>review.id === Number(request.params.id));
  response.send(reviewsId[0]);
});

module.exports = router;
