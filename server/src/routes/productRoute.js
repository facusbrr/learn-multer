import { Router } from "express";
import { uploadImage } from "../middleware/uploadMiddleware.js";
import { createProductCtrl } from "../controller/productController.js";
import { validationsZod } from "../middleware/validationZod.js";
import { productSchema } from "../validations/productSchema.js";

const productRoute = Router();

productRoute.post(
  "/product",
  uploadImage("productImage"),
  validationsZod(productSchema),
  createProductCtrl
);

export default productRoute;
