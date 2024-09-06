const mongoose = require('mongoose');

const schema = mongoose.Schema({
  Name: String,
  Age: Number,
  Dept: String,
  Sal: Number,
});

const EmployeeModel = mongoose.model("Employee", schema);

module.exports = EmployeeModel;