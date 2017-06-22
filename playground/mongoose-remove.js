const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '594bec0c19c00922dcba8068'}).then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove('594bec0c19c00922dcba8068').then((todo) => {
//   console.log(todo);
// });