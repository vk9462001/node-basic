const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log("Server Running on PORT", PORT);
});
