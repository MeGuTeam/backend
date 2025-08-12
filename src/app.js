const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const router = require("./routes/index");

app.use(
  cors(
    {
      origin: [
        "http://localhost:3000",
        "https://rifqicodes.icu",
        "https://www.rifqicodes.icu",
      ],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    },
    cookieParser()
  )
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
