require("../src/db/mongoose");
const User = require("../src/models/user");

//62cdb772f9195b2a5827e891

User.findByIdAndUpdate("62cdb772f9195b2a5827e891", { age: 1 }).then((user) => {
  console.log(user);
});

console.log("test");
