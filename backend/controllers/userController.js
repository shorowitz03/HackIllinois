const userModel = require("../models/userModel");

exports.make = (req, res) => {
  console.log("make body: " + body)
  userModel.make(req.body)
};

exports.match = (req, res) => {
  console.log("match req.query" + req.query)
  userModel.match(req.query)
}