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

export const singleproductData=async (req,res)=>{
    try{
        const{productId}=req.params
        console.log("params",req.params)
        if(!productId){
            return res.json({message:"ID missing",success:false})
        }

        const productdata=await productModel.findById(productId)
        if(!productdata){
        return res.json({
            success:false,
            message:"prod not found"
        })
    }
    

        return res.json({
            success:true,
            productdata
        })
    }
    
    catch(error){
        return res.json({
            message:"oops something went wrong",
            success:false
        })
        

    }
}

export const filterProducts=async (req,res)=>{
    try{
        const{category}=req.body
        let query={}
        if(category){
            query={Category:category}
        }
        const allproducts=await productModel.find(query)
       
    

        return res.json({
            success:true,
            allproducts
           
        })
    }
    
    catch(error){
        return res.json({
            message:"oops something went wrong",
            success:false
        })
        

    }
}

export const sortProducts=async (req,res)=>{
    try{
        const{sortMethod}=req.body;
        let sortQuery={}
        if(sortMethod=="lowtoHigh"){
            sortQuery={Price:1,}

        }
        else{
            sortQuery={Price:-1,}

        }
        console.log(sortQuery,"sortQuery",":",sortMethod,"sortMethod")
        const products=await productModel.find({}).sort(sortQuery)
         return res.json({
            success:true,
            products
           
        })
    }
    
    catch(error){
        return res.json({
            message:"oops something went wrong",
            success:false
        })
        

    }
}