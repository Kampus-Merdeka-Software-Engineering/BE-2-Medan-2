// ! Import Dependencies
const express = require("express");
const cors = require("cors");
const csp = require("./src/controller/csp");
require("dotenv").config();

// ! Setting up the server
const app = express();
const PORT = process.env.PORT;

// ! Middleware
app.use(express.json());
app.use(cors());

// ! Import routes after setting up middleware
const bookTicketRoute = require("./src/routes/bookTicketRoute");
const checkTicketRoute = require("./src/routes/checkTicketRoute");

// ! Use routes
app.use("/book-ticket", bookTicketRoute);
app.use("/check-ticket", checkTicketRoute);

// ! Start the server
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
