const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const router = require('./routes/index')

app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "UPDATE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/static/users", express.static(__dirname + "/static/users"));

app.use("/static/courses", express.static(__dirname + "/static/courses"));

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
