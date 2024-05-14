import { Router } from "express";
import { createAProduct, getAllProducts } from "../controllers/controllers.products";

const router = Router()

// / - get all products
router.get("/", getAllProducts)

// create a product
router.post("/", createAProduct)

export default router