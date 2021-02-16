const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");
//{}

router.get("/", async (request, response) => {
  try {
    console.log(reservations);
    console.log("in /api/reservations");
  } catch (error) {
    throw error;
  }
  response.send(reservations);
});

router.get("/:id", async (request, response) => {
  const reservationsId = reservations.filter((reservation)=> reservation.id === Number(request.params.id));
  response.send(reservationsId[0]);
});

module.exports = router;
