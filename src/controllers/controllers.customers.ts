import { Request, Response } from "express-serve-static-core";
import { connectToDatabase } from "../database";
import Customer from "../database/models/customer.model";

export const getAllCustomers = async (request: Request, response: Response) => {
    try {
        await connectToDatabase()
        const customers = await Customer.find().exec()
        if (!customers) {
            return response.status(404).send({
                message: "Customers not found"
            })
        }
        return response.status(200).send(customers)
    } catch (error) {
        throw error
    }
}

export const createACustomer = async (request: Request, response: Response) => {
    const customer = request.body

    try {
        await connectToDatabase()
        const newCustomer = await Customer.create(customer)
        if (!newCustomer) {
            return response.status(500).send({
                message: "Customer not found!"
            })
        }
        return response.status(201).send(newCustomer)
    } catch (error) {
        throw error
    }
}

export const updateCustomer = async (request: Request, response: Response) => {
    const  { id } = request.params
    const customer = request.body
    try {
        await connectToDatabase()
        const updatedCustomer = await Customer.findByIdAndUpdate(id, customer, { new: true })
        if (!updatedCustomer) {
            return response.status(404).send({
                message: "Customer not found!"
            })
        }
        return response.status(200).send(updatedCustomer)
    } catch (error) {
        throw error
    }
}

export const deleteCustomer = async (request: Request, response: Response) => {
    const  { id } = request.params

    try {
        await connectToDatabase()
        const deletedCustomer = await Customer.findByIdAndDelete(id)
        if (!deletedCustomer) {
            return response.status(404).send({
                message: "Customer not found!"
            })
        }
        return response.status(200).send({
            message: "Customer Deleted!"
        })
    } catch (error) {
        throw error
    }
}

export const checkCustomer = async (request: Request, response: Response) => {
    const { email } = request.params

    try {
        await connectToDatabase()
        const customers = await Customer.find().exec()

        if (!customers) {
            return response.status(404).send({
                message: "Customers not found!"
            })
        }

        const customer = customers.find((customer) => customer.email == email)

        if(!customer) {
            return response.status(404).send({
                message: "Customer not found!"
            })
        }

        return response.status(200).send(customer)
    } catch (error) {
        throw error
    }
}