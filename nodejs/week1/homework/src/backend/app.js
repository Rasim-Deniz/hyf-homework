const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

const reviewedMeals = meals.map((meal) => {
  meal.reviews = reviews.filter(review => review.mealId === meal.id);
  return meal;
});

const cheapMeals = reviewedMeals.filter(meal => meal.price <= 50);
const largeMeals = reviewedMeals.filter(meal => meal.maxNumberOfGuests >= 20);


// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.send(reviewedMeals);
});

app.get("/cheap-meals", async (request, response) => {
  response.send(cheapMeals);
});
app.get("/large-meals", async (request, response) => {
  response.send(largeMeals);
});

app.get("/meal", async (request, response) => {
  const randomMeal = reviewedMeals[Math.floor(Math.random() * reviewedMeals.length)];
  response.send(randomMeal);
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  const reservation = reservations[Math.floor(Math.random() * reservations.length)];
  response.send(reservation);
});

module.exports = app;