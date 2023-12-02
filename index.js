const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

const bookTicketRoute = require("./src/routes/bookTicketRoute");
const checkTicketRoute = require("./src/routes/checkTickeRoute");
const database = require("./src/config/dbConfig");
const sequelize = require("./src/config/dbConfig");

app.use(express.json());
app.use(cors());

app.use("/book-ticket", bookTicketRoute);
app.use("/check-ticket", checkTicketRoute);

sequelize.sync({ alter: true });

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);

  try {
    await database.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
