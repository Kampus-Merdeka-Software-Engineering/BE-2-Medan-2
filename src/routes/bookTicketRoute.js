const express = require("express");
const router = express.Router();
const bookings = require("../../js/bookings");
const bookTicket = require("../models/book_ticket");

router.post("/", async (req, res) => {
  try {
    await bookTicket.create({
      id: 123456,
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      message: req.body.message,
      destination: req.body.destination,
      quantity: req.body.quantity,
      arrivalDate: req.body.arrivalDate,
      leavingDate: req.body.leavingDate,
    });
    res.send({ message: "Data successfully added" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Failed to add data" });
  }
});

module.exports = router;
