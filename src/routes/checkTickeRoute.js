const express = require("express");
const router = express.Router();
const bookings = require("../../bookings");
const bookTicket = require("../models/book-ticket");

router.get("/:ticketNumber", async (req, res) => {
  try {
    let ticketNumber = req.params.ticketNumber;
    let ticket = await bookTicket.findByPk(ticketNumber);
    if (ticket) {
      return res.send({ ticket });
    } else {
      return res.status(404).send("Ticket not found");
    }
  } catch (error) {
    return res.status(500).send("Data gagal ditambahkan");
  }
});

module.exports = router;
