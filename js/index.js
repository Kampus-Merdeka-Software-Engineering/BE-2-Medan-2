const express = require("express");
const app = express();
const port = 3000;

app.get("./check-ticket", (req, rs) => {});
app.post("./book-ticket", (req, rs) => {});
app.post("./about-us", (req, rs) => {});
app.post("./index", (req, rs) => {});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
