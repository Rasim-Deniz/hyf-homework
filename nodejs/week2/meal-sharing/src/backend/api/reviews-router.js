const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
    try {
        response.send(reviews);
    } catch (error) {
        throw error;
    }
});

router.get("/:id", async (request, response) => {
    const reviewId = parseInt(request.params.id);
    console.log(reviews);
    if (isNaN(reviewId)) {
        response.status(404).json({
            error: "IDs must be integers"
        });
        return;
    }
    const review = reviews.find(review => review.id === reviewId);
    if (review) {
        response.json(review);
    } else {
        response.status(404).json({
            error: "Reviews are not found"
        });
    }
});

module.exports = router;