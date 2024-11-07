import User from "../models/user.schema.js";
import bcrypt from "bcrypt" 

 export const Login= async (req,res)=>{
   try{
    
    const{email,password}=req.body.Userdata;
    console.log("email",email,"password",password)
    if(!email || !password){
        return res.json({message:"Fill the fields", success:false})
    }
    const existemail= await Usermodel.findOne({email:email})
    console.log(existemail);
    if(!existemail){
        return res.json({message:"Email not found Try again",success:false})
    }
    const passwordcheck=await bcrypt.compare(password,existemail.password)
    if(!passwordcheck){
        return res.json({message:"wrong password Try again",success:false})
    }
    
    return res.json({
        message:"Login Successful",
        success:true,
        Userdata:{
            email:existemail.email,password:existemail.password,name:existemail.name
        }
    
    
    
    });
    
    
    
    
    }
   catch(error){
    console.log(error)
   }
}

export const Register= async (req,res)=>{
    try{

        const {name, email, password, confirmpassword} = req.body.userData;
        if(!name || !email || !password ||!confirmpassword){
           return res.json({message:"All Field are mandatory", success: false})
        }
        if(password !== confirmpassword){
            return res.json({message:"password or confirmpassword didnt match", success: false})
        }

        const Emailexist = await User.findOne({email : email});
        console.log(Emailexist,"Emailexist")
        if(Emailexist){
            return res.json({
                message:"Email exist already", 
                success:false,
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword)

        const NewUser = new User({
            name : name,
            email : email,
            password: hashedPassword,
        }) 
        console.log(NewUser, "newuser")
        await NewUser.save();
       
        return res.json({message:"Registered in successfully",success:true});
        
        // res.send("Register Page from auth.js");
    }catch(error){
        return res.json({success:false, message:error})
    }
  
    }
    