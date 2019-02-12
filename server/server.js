var {mangoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  },(err) =>{
    res.status(400).send(err);
  })
});

app.listen(3000,() => {
  console.log('Started server on port 3000');
});


module.exports = {app};




























// // var newTodo = new Todo({
// //   text:'Cook dinner'
// // });
// //
// // newTodo.save().then((doc) =>{
// //   console.log('Saved todo',doc);
// // },(err) =>{
// //   console.log('Unable to save todo',err);
// // });
//
// // var otherTodo = new Todo({
// //   text:'Something to do'
// // });
// //
// // otherTodo.save().then((doc)=>{
// //   console.log(JSON.stringify(doc,undefined,2));
// // },(err)=>{
// //   console.log('Unable to save',err);
// // });
//
//
// var user = new User({
//   email:'some@example.com'
// });
//
// user.save().then((doc) =>{
//   console.log(JSON.stringify(doc,undefined,2));
// },(err) => {
//   console.log('Unable to save user',err);
// });
