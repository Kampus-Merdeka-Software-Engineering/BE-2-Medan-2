// ! Importing required modules
const express = require("express");
const Ticket = require("../models/book-ticket");

// ! Create a new router object
const ticketRouter = express.Router();

// ! Define a GET route to fetch a ticket by its number
ticketRouter.get("/:ticketNumber", async (req, res) => {
  try {
    // Extract 'ticketNumber' from the request parameters
    const ticketNumber = req.params.ticketNumber;

    // Use the 'findByPk' method from the 'Ticket' model to find a ticket by its primary key
    const ticket = await Ticket.findByPk(ticketNumber);

    // If a ticket is found, send it in the response
    if (ticket) {
      res.status(200).json({ ticket });
    } else {
      // If no ticket is found, send a 404 status code with an error message
      res.status(404).json({ error: "Ticket not found" });
    }
  } catch (error) {
    // If an error occurs, send a 500 status code with an error message
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// ! Export the router to be used in other parts of the application
module.exports = ticketRouter;