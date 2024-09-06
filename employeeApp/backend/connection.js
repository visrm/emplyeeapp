const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Rahul:rahulmurali@cluster0.ydq6c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));
