 export const Login= (req,res)=>{
    console.log("Inside register")
res.send("Login Page from auth.js");
}

export const Register= (req,res)=>{
    console.log(req.body,"req.body")
    console.log("Inside register")
    res.send("Register Page from auth.js");
    }
    