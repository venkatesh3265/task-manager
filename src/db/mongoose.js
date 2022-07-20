const { Error } = require("mongoose");
const mongoose = require("mongoose");
const { default: isEmail } = require("validator/lib/isEmail");
//Set up default mongoose connection
var mongoDB = "mongodb://127.0.0.1:27017/task-manager-api";

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  userCreateIndex: true,
  useFindAndModify: false,
});

// const me = new User({
//   name: "  Venkatesh   ",
//   email: "  Venkytest43@yopmail.com",
//   age: 25,
//   password: "Test@123",
// });

// me.save()
//   .then((me) => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

// const task = mongoose.model("task", {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// const newtask = new task({
//   description: "cycling",
// });

// newtask
//   .save()
//   .then((newtask) => {
//     console.log(newtask);
//   })
//   .catch((error) => {
//     console.log("Erroor occured", error);
//   });
