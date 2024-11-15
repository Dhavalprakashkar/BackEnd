import { model, Schema } from "mongoose";

const productSchema=new Schema({
    Name:String,
    Category:String,
    Price:Number,
    Quantity:Number,
    Image:String,
    Createdby:String



})

const productModel=model("productModel",productSchema)
export default productModel;