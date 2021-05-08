const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    let filteredMeals = meals;
    if ('maxPrice' in request.query) {
      const maxPrice = parseFloat(request.query.maxPrice);
      if (isNaN(maxPrice)) {
        response.status(400).json({
          error: "maxPrice must be an integer"
        });
        return;
      }
      filteredMeals = meals.filter((meal) => meal.price < maxPrice);
    }

    if ("title" in request.query) {
      const title = request.query.title.toLowerCase();
      filteredMeals = filteredMeals.filter(meal => meal.title.toLowerCase().includes(title));
    }

    if ("createdAfter" in request.query) {
      const createdAfter = new Date(request.query.createdAfter);
      filteredMeals = filteredMeals.filter(meal => new Date(meal.createdAt) > createdAfter);
    }

    if ("limit" in request.query) {
      const limit = parseInt(request.query.limit);
      if (isNaN(limit)) {
        response.status(400).json({
          error: "Limit must be an integer"
        })
        return;
      }
      filteredMeals = filteredMeals.slice(0, limit);
    }
    response.json(filteredMeals);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  const mealId = parseInt(request.params.id);
  console.log(meals);
  if (isNaN(mealId)) {
    response.status(404).json({
      error: "IDs must be integers"
    });
    return;
  }
  const meal = meals.find(meal => meal.id === mealId);
  if (meal) {
    response.json(meal);
  } else {
    response.status(404).json({
      error: "Meals are not found"
    });
  }
});

module.exports = router;