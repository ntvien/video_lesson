const express = require("express");
require("dotenv").config();

const postRouter = require("./routers/post");

const app = express();
app.use("/api/post", postRouter);

// connect Port
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Port is listening on " + PORT);
});
