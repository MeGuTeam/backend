const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const authRouter = require("./routes/authRoutes");
const writingJpRouter = require("./routes/writingJpController");

app.use(
    cors({
        origin: "http://localhost:3001",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(authRouter);
app.use(writingJpRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
