const mongoose = require("mongoose");


mongoose
  .connect("mongodb+srv://Vishwa3121:Mongodb123@cluster0.oenylg3.mongodb.net/users?retryWrites=true&w=majority")
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.log(err));
