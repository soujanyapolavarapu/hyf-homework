const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

const mealReview = meals.map((meal)=>{
  meal.reviews = reviews.filter((review)=>review.mealId ===meal.id)
return meal
});


app.get("/meals", async (request, response) => {
  response.send(mealReview);
});

app.get("/cheap-meals", async (request, response) => {
  const cheapMeals = mealReview.filter((item)=>item.price<30);
  response.send(cheapMeals);
});

app.get("/large-meals", async (request, response) => {
  const largeMeals = mealReview.filter((item)=>item.price>30);
  response.send(largeMeals);
});

app.get("/meal", async (request, response) => {
  //Math.floor(Math.random()* 10);
  const mealobj = mealReview[Math.floor(Math.random() * mealReview.length)];
console.log(mealobj)
  response.send(mealobj);
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  const randomRevervation = reservations[Math.floor(Math.random() * reservations.length)];
  response.send(randomRevervation);
});

module.exports = app;