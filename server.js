const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello From Express app");
});

app.listen(PORT, () => console.log(`Express App started on the Port ${PORT}`));
