const userModel = require("../models/userModel");

exports.make = (req, res) => {
  console.log(body)
  userModel.make(req.body)
};
