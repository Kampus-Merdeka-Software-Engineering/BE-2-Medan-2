const express = require("express");
const cors = require("cors");
const csp = require("./src/controller/csp");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(csp);

const bookTicketRoute = require("./src/routes/bookTicketRoute");
const checkTicketRoute = require("./src/routes/checkTickeRoute");
const sequelize = require("./src/config/dbConfig");
const csp = require("./src/controller/csp");

app.use("/book-ticket", bookTicketRoute);
app.use("/check-ticket", checkTicketRoute);

// sequelize.sync({ alter: true });

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
