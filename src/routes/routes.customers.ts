import { Router } from "express";
import {
    checkCustomer, createACustomer,
    deleteCustomer, getAllCustomers, updateCustomer
} from "../controllers/controllers.customers";

const router = Router()

router.get("/", getAllCustomers)

router.post("/", createACustomer)

router.patch("/:id/update", updateCustomer)

router.delete("/:id/delete", deleteCustomer)

router.get("/:email/check-customer", checkCustomer)

export default router