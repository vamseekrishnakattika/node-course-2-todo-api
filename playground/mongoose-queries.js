const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectId} = require('mongodb')

var id = "5c631613fcbf6d9aacfb78c5";
var id2 = "5c6302173ea485b00c4248a2"

// if (!ObjectId.isValid(id)) {
//   console.log('ID not valid');
// }


// Todo.find({
//   _id:id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo) => {
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id',todo);
// }).catch((e) => console.log(e));

User.findById(id2).then((user) =>{
  if(!user){
    return console.log('User not found');
  }
  console.log('User By Id',user);
}).catch((e) => console.log(e));
