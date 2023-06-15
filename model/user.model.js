const mongoose=require("mongoose")
const usersschema=mongoose.Schema({
    name:String,
    age:Number,
    location:String,
    adult:Boolean,
    followers:Number
   },{
    versionKey:false
   })
   const UserModel=mongoose.model("users",usersschema)
   module.exports={UserModel}