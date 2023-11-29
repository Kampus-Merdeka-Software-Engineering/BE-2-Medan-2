const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bookTicketRoute = require("../src/routes/bookTicketRoute");
const checkTicketRoute = require("../src/routes/checkTickeRoute");

app.use(express.json());
app.use("/book-ticket", bookTicketRoute);
app.use("/check-ticket", checkTicketRoute);

// app.get("./check-ticket", (req, rs) => {});
// app.post("./book-ticket", (req, rs) => {});
// app.post("./about-us", (req, rs) => {});
// app.post("./index", (req, rs) => {});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
