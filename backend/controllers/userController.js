const userModel = require("../models/userModel");

exports.make = (req, res) => {
  console.log(body)
  userModel.make(req.body)
};

exports.match = (req, res) => {
  console.log("match req.query" + req.query)
  userModel.match(req.query)
}
