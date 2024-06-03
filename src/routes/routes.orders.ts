import { Router } from "express";
import {
    OrdersStatus, createAnOrder,
    getAllOrders, totalOrder
} from "../controllers/controllers.orders";

const router = Router()

router.get("/", getAllOrders)

router.post("/", createAnOrder)

router.get("/total", totalOrder)

router.get("/status", OrdersStatus)

export default router