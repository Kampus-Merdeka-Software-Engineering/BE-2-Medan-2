const express = require("express");
const router = express.Router();
const bookings = require("../../js/bookings");

router.get("/:ticketNumber", (req, res) => {
  let newTicket = { nama: "John" };
  // console.log(newTicket.nama);
  console.log(newTicket["nama"]);
  let ticketNumber = req.params.ticketNumber;
  if (bookings[ticketNumber]) {
    res.json(bookings[ticketNumber]);
  } else {
    res.status(404).send("Ticket not found");
  }
});

module.exports = router;
