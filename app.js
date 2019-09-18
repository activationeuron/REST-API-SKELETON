const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyPaarser = require("body-parser");
dotenv.config();
const app = express();

// * mongoose database connection

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch(err => {
    console.log(err);
  });

// * dotenv configutration

dotenv.config();

// * external middleware

app.use(morgan("dev"));
app.use(bodyPaarser());

//  * Imported Roter
const postRouter = require("./routes/post.js");

// !* router middleware
app.use("/", postRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("app Started at " + PORT);
});
