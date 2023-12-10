// Importing required modules
const express = require("express");
const Ticket = require("../models/book-ticket");

// Create a new router object
const ticketRouter = express.Router();

// Define a POST route for creating a new ticket
ticketRouter.post("/", async (req, res) => {
  try {
    // Extract ticket data from the request body
    const ticketData = req.body;

    // Create a new ticket using the 'create' method from the 'Ticket' model
    const newTicket = await Ticket.create(ticketData);

    // If the ticket is successfully created, send a success message along with the ticket id
    res.status(201).json({ message: "Ticket successfully added", ticketNumber: newTicket.id });
  } catch (error) {
    // If an error occurs, send a 500 status code with an error message
    res.status(500).json({ message: "Failed to add ticket" });
  }
});

// Export the router to be used in other parts of the application
module.exports = ticketRouter;