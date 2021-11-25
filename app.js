const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

// middlewares
app.use(express.json({ extended: false }));

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

// route included
app.use("/payment", require("./routes/payment"));

app.listen(port, () => console.log(`server started on port ${port}`));
