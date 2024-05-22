import { Router } from "express";
import {
    checkCustomer, createACustomer,
    deleteCustomer, getACustomer, getAllCustomers, updateCustomer
} from "../controllers/controllers.customers";

const router = Router()

router.get("/", getAllCustomers)

router.get("/:id/get-a-customer", getACustomer)

router.post("/", createACustomer)

router.patch("/:id/update", updateCustomer)

router.delete("/:id/delete", deleteCustomer)

router.get("/:email/check-customer", checkCustomer)


export default router