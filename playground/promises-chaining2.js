require("../src/db/mongoose");
const { count } = require("mongodb/lib/operations/cursor_ops");
const Task = require("../src/models/task");
//62cc60e66c2f1d1504203410

//62cf09a2fd41f7343430b1d6

// Task.findByIdAndDelete("62cdbe5f89395d2dbc263dc4")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id, completed) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: completed });
  return count;
};

deleteTaskAndCount("62cf09a2fd41f7343430b1d6", false)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
