import { Router } from "express";
import { createProduct, viewProducts,singleproductData, filterProducts, sortProducts } from "../controllers/product.controller.js";

const Productroutes=Router();

Productroutes.post("/create-product",createProduct)
Productroutes.get("/view-products",viewProducts)
Productroutes.get("/single-product/:productId",singleproductData)
Productroutes.post("/filter-products",filterProducts)
Productroutes.post("/sort-products",sortProducts)

export default Productroutes; 