const express = require("express");
var cors = require("cors");

const app = express();

const port = process.env.PORT || 8000;

// middlewares
app.use(express.json({ extended: false }));

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello");
});

// route included
app.use("/payment", require("./routes/payment"));

app.listen(port, () => console.log(`server started on port ${port}`));
