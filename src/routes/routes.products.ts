import { Router } from "express";
import { createAProduct, deleteProduct, getAllProducts, updateProduct } from "../controllers/controllers.products";

const router = Router()

// / - get all products
router.get("/", getAllProducts)

// create a product
router.post("/", createAProduct)

// update a product
router.patch("/:id/update", updateProduct)

// delete a product
router.delete("/:id/delete", deleteProduct)

export default router