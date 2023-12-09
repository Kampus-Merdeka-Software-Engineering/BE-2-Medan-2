// Importing required modules
const express = require("express");
const router = express.Router();
const bookTicket = require("../models/book-ticket");

// Define a GET route with a dynamic parameter 'ticketNumber'
router.get("/:ticketNumber", async (req, res) => {
  try {
    // Extract 'ticketNumber' from the request parameters
    let ticketNumber = req.params.ticketNumber;

    // Use the 'findByPk' method from the 'bookTicket' model to find a ticket by its primary key
    let ticket = await bookTicket.findByPk(ticketNumber);

    // If a ticket is found, send it in the response
    if (ticket) {
      return res.send({ ticket });
    } else {
      // If no ticket is found, send a 404 status code with an error message
      return res.status(404).send("Ticket not found");
    }
  } catch (error) {
    // If an error occurs, send a 500 status code with an error message
    return res.status(500).send("Failed to add data");
  }
});

// Export the router to be used in index.js
module.exports = router;