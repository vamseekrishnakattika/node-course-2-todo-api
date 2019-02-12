const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5c62ecb73fd7e1cf69f97a31")
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5c62e68c30bd72df50fb95b7")
  },{
    $set:{
      name:"Vamseekrishna"
    },
    $inc:{
      age: 1
    }
  },{
    returnOriginal:false
  }).then((res) =>{
    console.log(res);
  });

  //client.close();
});
