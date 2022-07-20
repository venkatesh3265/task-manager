const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
//register the express
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//user endpoint

//task end point

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
