require("../src/db/mongoose");
const { count } = require("mongodb/lib/operations/cursor_ops");
const User = require("../src/models/user");

//62cdb772f9195b2a5827e891

// User.findByIdAndUpdate("62cdb772f9195b2a5827e891", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

console.log("test");

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });

  return count;
};

updateAgeAndCount("62cdb772f9195b2a5827e891", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
