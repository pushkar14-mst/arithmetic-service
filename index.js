const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { add } = require("./arithmetica");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/add/:n1/:n2", (req, res) => {
  let num1 = parseInt(req.params.n1);
  let num2 = parseInt(req.params.n2);
  let sum = add(num1, num2);
  res.json({ sum: sum });
});
app.listen(8080, () => {
  console.log("Server started on port 8080");
});
