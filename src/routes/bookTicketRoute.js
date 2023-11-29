const express = require("express");
const router = express.Router();
const bookings = require("../../js/bookings");

router.post("/", (req, res) => {
  let ticketNumber = Math.floor(Math.random() * 1000000000);
  bookings[ticketNumber] = req.body;
  res.json({ ticketNumber: ticketNumber });
});

module.exports = router;
