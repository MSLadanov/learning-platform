const express = require("express");
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const DB = require('./services/database')

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "UPDATE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/static/users", express.static(__dirname + "/static/users"));

app.use(express.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/api/v1/users", (req, res) => {
  res.json({ name: "John", surname: "Doe" });
});

app.post("/api/v1/register", (req, res) => {
  console.log(req.body)
  res.send(200, req.body);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
