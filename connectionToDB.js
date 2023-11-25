const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.log(err));
