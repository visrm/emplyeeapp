// 1. Imports
const express = require("express");
const cors = require('cors');
require("./connection");
var empModel = require("./model/employee");


// 2. Initialise express
const app = new express();

// middleware
app.use(express.json());
app.use(cors())

// 3. API creation
app.get("/", (req, res) => {
  try {
    res.send("message from the server");
  } catch (err) {
    console.log(err);
  }
});

app.get("/trial", (req, res) => {
  res.send("trial message from the server");
});

// add api
app.post("/add", async (req, res) => {
  try {
    await empModel(req.body).save();
    res.send({ message: "Success!" });
  } catch (err) {
    console.log(err);
  }
});

// view api
app.get("/view", async (req, res) => {
  try {
    var data = await empModel.find();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

// delete api
app.delete("/delete/:id", async (req, res) => {
  try {
    await empModel.findByIdAndDelete(req.params.id);
    res.send({ message: "Data deleted!" });
  } catch (err) {
    console.log(err);
  }
});

// update api
app.put("/edit/:id", async (req, res) => {
  try {
    var data = await empModel.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: "Data updated!", data });
  } catch (err) {
    console.log(err);
  }
});

// 4. Create port
app.listen(3004, () => {
  console.log("port is running...");
});
