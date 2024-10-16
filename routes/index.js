import { Router } from "express";
import authRoutes from "./auth.routes.js"
import userRoutes from "./user.routes.js";

const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/user', userRoutes);
// routes.use('/admin', adminRoutes);
// routes.use('/kyc', kycRoutes);

export default routes;