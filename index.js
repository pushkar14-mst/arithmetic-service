const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { add } = require("./arithmetica");
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

if (!process.env.PORT) {
  throw new Error("PORT is not defined");
}

const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/add/:n1/:n2", (req, res) => {
  let num1 = parseInt(req.params.n1);
  let num2 = parseInt(req.params.n2);
  let sum = add(num1, num2);
  res.json({ sum: sum });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
