import { Router } from "express";
import authRoutes from "./auth.routes.js"
import Productroutes from "./productRoutes.js";;

const routes = Router();

routes.use('/auth', authRoutes);
routes.use("/products",Productroutes)
// routes.use('/admin', adminRoutes);
// routes.use('/kyc', kycRoutes);

export default routes;