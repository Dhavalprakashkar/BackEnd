import productModel from "../models/Productschema.js"

export const createProduct=async(req,res)=>{

    try{
        const{productName,productCategory,productPrice,productQuantity,productImage}=req.body.productData
        const{userId}=req.body
        if(!productName || !productCategory || !productPrice || !productQuantity || !productImage || !userId){
            return res.json({message:"all fields mandatory",success:false})
        }
        const Newuser=productModel({
            Name:productName,
            Category:productCategory,
            Price:productPrice,
            Quantity:productQuantity,
            Image:productImage,
            Createdby:userId


        })
        Newuser.save().then(()=>{
            console.log("Product saved")

        })
        return res.json({
            message:"Product saved successfully",
            success:true
        })
        

    }
    catch(error){
        res.send({message:"oops something is wrong",success:false})

    }


}

export const viewProducts=async(req,res)=>{

    try{
      const allproducts=await productModel.find({})
      
        return res.json({
            allproducts,
            message:"Data fetched",
           
            success:true
        })
        

    }
    catch(error){
       return res.json({message:"oops something went wrong",success:false})

    }


}