import mongoose from "mongoose";
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter name"],
    },
    email:{
        type:String,
        required:[true,"Enter Email"],
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:[true,"Please enter the Password"]
    },
    role:{
       type:String,
       enum:["user","admin"],
       default:"user"
    }

},{
    timestamps:true//create and updated columns come defaultly
}) 
const Usermodel=mongoose.model("User",UserSchema);
export default Usermodel; //if you use default dont need to give curly braces while importing anywhere