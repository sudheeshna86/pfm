
import UserModel from '../models/Users.js'
import bcrypt from "bcrypt"
export const Register = async(req,res) =>{
   try {
    console.log(req.body)
    const {name,email,password,role}=req.body
    
    // const {request,hello}=req.query;
    // const {id,ki}=req.params;
    // console.log(request,hello);
    // console.log(id,ki);
    const existingUser=await UserModel.findOne({email})
    if (existingUser) return res.status(400).json({message:"hey idot user is existing already"})
    const hashPassword=await bcrypt.hash(password,10)//10 is salt value
    const newUser=await UserModel.create({name,email,password:hashPassword,role})
    return res.status(201).json({message:"Hey bufffon your are registered"})
   }
   catch(err){
       console.log(err)
       return res.status(500).json({err:err.message});
   }
}

export const login=async(req,res)=>{
    try{
          
          const {email,password}=req.body
          const existingUser=await UserModel.findOne({email});
          if(!existingUser){
            return res.status(400).json({message:"Please Register"})
          }
          const isMatch=await bcrypt.compare(password,existingUser.password)
        //   if(isMatch){
        //     return res.status(200).json({message:"You are logged in succesfully"})
        //   }
          if(!isMatch){
            console.log(password)
            return res.status(404).json({message:"You are details are incorrect"})
            
          }
          res.status(201).json({message:"Login successfully",user:{id:existingUser.id,name:existingUser.name,email:existingUser.email,role:existingUser.role}})
          

    }
    catch(err){
        return res.status(500).json({err:err.message});
    }

}