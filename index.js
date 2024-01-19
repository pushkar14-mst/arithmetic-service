const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.post("sum", (req, res) => {
  let num1 = parseInt(req.body.num1);
  let num2 = parseInt(req.body.num2);
  let sum = num1 + num2;
  res.json({ sum: sum });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
