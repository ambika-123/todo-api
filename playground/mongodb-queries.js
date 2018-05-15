const {ObjectID}=require('mongodb');

var {mongoose}=require('./../server/db/mongoose');
var {Todo}=require('./../server/models/todo');

var id='5af98c64bd698639dcdcbc3f';
if(!ObjectID.isValid(id)){
  console.log("Id is not valid");
}

    // Todo.find({
    //   _id:id}).then((doc)=>{
    //     console.log(doc);
    // },(e)=>{
    //   console.log("error",e);
    // });
    //
    // Todo.findOne({
    //   _id:id}).then((doc)=>{
    //     console.log(doc);
    // },(e)=>{
    //   console.log("error",e);
    // });

    Todo.findById(id).then((todo)=>{


      if(!todo){
      return  console.log('Id not found');
      }

        console.log(todo);
    }).catch((e)=>{
      console.log(e);
    });
