const express = require("express");
const axios = require("axios");

const app = express();
const port = 5000;
app.use(express.json());

//Define Paystack secret key
//const paystackSecretkey

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
