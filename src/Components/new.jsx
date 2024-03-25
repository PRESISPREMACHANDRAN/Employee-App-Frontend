// import
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes for add
app.post("/", (req, res) => {
  var id = req.body;
  var imageUrl = req.body;
  var firstName = req.body;
  var lastName = req.body;
  var email = req.body;
  var contactNumber = req.body;
  var age = req.body;
  var dob = req.body;
  var salary = req.body;
  var address = req.body;

  res.json({
    id: id,
    imageUrl: imageUrl,
    firstName: firstName,
    lastName: lastName,
    email: email,
    contactNumber: contactNumber,
    age: age,
    dob: dob,
    salary: salary,
    address: address,
  });
});

// running server
app.listen(4000, () => {
  console.log("server starts running ");
});
