import { Request, Response } from "express"
import { connectToDatabase } from "../database"
import Order from "../database/models/order.model"

export const getAllOrders = async (request: Request, response: Response) => {
    try {
        await connectToDatabase()
        const orders = await Order.find().exec()
        if (!orders) {
            return response.status(404).send({
                message: "Products not found!"
            })
        }
        return response.status(200).send(orders)
    } catch (error) {
        throw error
    }
}


export const createAnOrder = async (request: Request, response: Response) => {
    const orderData = request.body

    try {
        await connectToDatabase()
        const order = await Order.create(orderData)
        if (!order) {
            return response.status(500).send({
                message: "Could not create order"
            })
        }
        return response.status(200).send(order)
    } catch (error) {
        throw error
    }
}

export const totalOrder = async (request: Request, response: Response) => {
    try {
        await connectToDatabase()
        const orders = await Order.find().exec()
        const totalOrders = orders.length
        if (!orders) {
            return response.status(404).send({
                message: "No Orders found!"
            })
        }
        return response.status(200).send({
            totalOrders: totalOrders
        })
    } catch (error) {
        throw error
    }
}
