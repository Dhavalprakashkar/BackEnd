import express from "express"
// import {Login, Register} from "./controllers/auth.controllers.js"
import allRoutes from "./routes/index.js"

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page");

})
// app.post("/login",Login)

// app.post("/register",Register)

app.use('/api/v1', allRoutes)

app.listen(8000,()=>{
    console.log("Running on port 8000")
})