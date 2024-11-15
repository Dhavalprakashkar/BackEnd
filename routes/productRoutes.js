import { Router } from "express";
import { createProduct, viewProducts } from "../controllers/product.controller.js";

const Productroutes=Router();

Productroutes.post("/create-product",createProduct)
Productroutes.get("/view-products",viewProducts)


export default Productroutes; 