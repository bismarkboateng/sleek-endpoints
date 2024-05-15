import { Router } from "express";
import { createACustomer, deleteCustomer, getAllCustomers, updateCustomer } from "../controllers/controllers.customers";

const router = Router()

router.get("/", getAllCustomers)

router.post("/", createACustomer)

router.patch("/:id/update", updateCustomer)

router.delete("/:id/delete", deleteCustomer)

export default router