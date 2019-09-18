const express = require("express");
const morgan = require("morgan");
const app = express();
const dotenv = require("dotenv");

// ! dotenv configutration

dotenv.config();

// ! external middle wares
app.use(morgan("dev"));

//  ! Imported Roter
const postRouter = require("./routes/post.js");

// ! router middleware
app.use("/", postRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("app Started at " + PORT);
});
