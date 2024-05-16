import { Router } from "express";
import { createAnOrder, getAllOrders, totalOrder } from "../controllers/controllers.orders";

const router = Router()

router.get("/", getAllOrders)

router.post("/", createAnOrder)

router.get("/total", totalOrder)

export default router