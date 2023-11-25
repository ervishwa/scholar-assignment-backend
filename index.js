const express = require("express");
const mongoose = require("mongoose");
const User = require("./userSchema");
require("./connectionToDB");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("lets do the scholarNest Project");
});

app.post("/createUser", async (req, res) => {
  const { firstName, lastName, email, phone, username } = req.body;
  try {
    const user = new User({
      firstName,
      lastName,
      email,
      phone,
      username,
    });

    const result = await user.save();
    return res.status(200).json({
      msg: "Successfully created the user",
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message,
      msg: "Internal Server Error",
    });
  }
});

app.get("/getuser", async (req, res) => {
  try {
    const { id } = req.query;
    const user = await User.find({ id: id });
    return res.status(200).json({
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message,
      msg: "Internal Server Error",
    });
  }
});

app.post("/updateuser", async (req, res) => {
  try {
    const { id, firstName, lastName, phone } = req.body;
    console.log(id, firstName, lastName, phone);
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        mess: "User not found",
      });
    }
    user.firstName = firstName;
    user.lastName = lastName;
    user.phone = phone;

    const updatedUser = await user.save();

    return res.status(200).json({
      mess: "User updated",
      data: updatedUser,
    });
  } catch (err) {
    return res.status(500).json({
      errors: err.message,
      msg: "Internal Server Error",
    });
  }
});

app.listen(5500, () => {
  console.log("server is running on port 5500");
});
