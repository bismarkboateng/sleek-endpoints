import { Router } from "express";
import {
    createAProduct, deleteProduct, getAllProducts,
    totalProduct, totalRevenue, updateProduct
} from "../controllers/controllers.products";

const router = Router()

// / - get all products
router.get("/", getAllProducts)

// create a product
router.post("/", createAProduct)

// update a product
router.patch("/:id/update", updateProduct)

// delete a product
router.delete("/:id/delete", deleteProduct)

router.get("/total", totalProduct)

router.get("/revenue", totalRevenue)

export default router