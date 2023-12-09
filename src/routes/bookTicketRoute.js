// Importing required modules
const express = require("express");
const router = express.Router();
const bookTicket = require("../models/book-ticket");

// Define a POST route for creating a new ticket
router.post("/", async (req, res) => {
  try {
    // Create a new ticket using the 'create' method from the 'bookTicket' model
    // The ticket data is extracted from the request body
    const ticket = await bookTicket.create({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      message: req.body.message,
      destination: req.body.destination,
      quantity: req.body.quantity,
      arrivalDate: req.body.arrivalDate,
      leavingDate: req.body.leavingDate,
    });

    // If the ticket is successfully created, send a success message along with the ticket id
    res.send({ message: "Data successfully added", ticketNumber: ticket.id });
  } catch (error) {
    // Log the error for debugging purposes
    console.log(error);

    // If an error occurs, send a 500 status code with an error message
    res.status(500).send({ message: "Failed to add data" });
  }
});

// Export the router to be used in index.js
module.exports = router;
