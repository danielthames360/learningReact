const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./database/config");

//? Create express server

const app = express();

//? Database
dbConnection();

//? Cors
app.use(cors());

//? Public directory
app.use(express.static("public"));

//? Reading and parsing the body
app.use(express.json());

//? Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

//? Listen requests
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
