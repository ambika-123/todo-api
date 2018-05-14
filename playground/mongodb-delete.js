const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndDelete({
    _id:new ObjectID("5af970ce0968953a000e5fbd")
  }).then((result)=>{
    console.log(result);
  })

});
