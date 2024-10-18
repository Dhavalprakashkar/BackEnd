import { Router } from "express";
import { getUserDetails } from "../controllers/user.controller.js";


const userRoutes = Router();

userRoutes.post("/get-profile-details", getUserDetails);

export default userRoutes