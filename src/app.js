const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const authRouter = require("./routes/authRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
