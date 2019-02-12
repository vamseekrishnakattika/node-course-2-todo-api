const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) =>{
//   console.log(result);
// });

// Todo.findOneAndRemove({_id:"5c63429f3fd7e1cf69f98c5a"}).then((todo) =>{
//   console.log(todo);
// })

Todo.findByIdAndRemove("5c63429f3fd7e1cf69f98c5a").then((todo) =>{
  console.log(todo);
});
