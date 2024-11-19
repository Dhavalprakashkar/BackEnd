import express from "express"
import allRoutes from "./routes/index.js"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors'
import morgan from "morgan"
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(morgan())
// app.use(cors());
app.use(express.json())
dotenv.config()
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("Home Page");

})

app.use('/api/v1', allRoutes)

mongoose.connect(process.env.MONGODBURL).then(()=>{console.log("Mongo Connected")})

app.listen(process.env.PORT,()=>{
    console.log("Running on port 8000")
})