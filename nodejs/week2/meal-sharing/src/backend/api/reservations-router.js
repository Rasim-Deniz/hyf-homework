const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
    try {
        response.send(reservations);
    } catch (error) {
        throw error;
    }
});

router.get("/:id", async (request, response) => {
    const reservationId = parseInt(request.params.id);
    console.log(reservations);
    if (isNaN(reservationId)) {
        response.status(404).json({
            error: "IDs must be integers"
        });
        return;
    }
    const reservation = reservations.find(reservation => reservation.id === reservationId);
    if (reservation) {
        response.json(reservation);
    } else {
        response.status(404).json({
            error: "Reservations are not found"
        });
    }
});

module.exports = router;