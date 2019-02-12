// const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);
// var user = {name:'Vamseekrishna',age:26};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //     text: 'Something to do',
  //     completed:false
  // },(err,result) =>{
  //   if (err) {
  //       return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name: 'Vamseekrishna',
    age: 26,
    location: 'Dallas'
  },(err,res) => {
    if(err){
      return console.log('Unable to insert Users',err);
    }
    console.log(JSON.stringify(res.ops[0]._id.getTimestamp(),undefined,2));
  });

  client.close();
});
