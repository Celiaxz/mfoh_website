require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const bodyParser = require("body-parser");
const router = require("./routes");

const port = process.env.PORT || 5000;
//Parse incoming requests with JSON payloads
app.use(bodyParser.json());
//call the routers
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
