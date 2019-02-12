const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text:"Eat lunch"}).then((res) => {
  //   console.log(res);
  // });

  // db.collection('Todos').deleteOne({text:"Eat lunch"}).then((res) => {
  //   console.log(res);
  // });

  // db.collection('Todos').findOneAndDelete({text:'Eat lunch'}).then((doc)=>{
  //   console.log(doc);
  // });
  // db.collection('Users').deleteMany({name:"Vamseekrishna"}).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5c62e6a16e85daf644303061")}).then((res) => {
    console.log(JSON.stringify(res,undefined,2));
  });
  //client.close();
});
