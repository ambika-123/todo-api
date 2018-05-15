const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');


  Todo.findByIdAndRemove('5af98e2534fbef3380cdc64f').then((todo)=>{
    console.log(todo);
  })
