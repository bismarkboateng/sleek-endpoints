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

export const OrdersStatus = async (request: Request, response: Response) => {
    try {
        await connectToDatabase()
        const orders = await Order.find().exec()
        
        if(!orders) {
            return response.status(404).send({
                message: "No Orders found!"
            })
        }

        let ordersData = []
        let countDelivered = 0
        let countPending = 0
        let countCancelled = 0

        orders.forEach(order => {
            if(order.status === "Delivered") {
                countDelivered += 1
            } else if (order.status === "Pending") {
                countPending += 1
            } else if (order.status === "Cancelled") {
                countCancelled += 1
            }
        })

        orders.forEach(order => {
            if(order.status === "Delivered" && countDelivered > 0) {
                ordersData.push({ name: "Delivered", value: countDelivered, color: "green.6"})
                countDelivered = 0
            } else if (order.status === "Pending" && countPending > 0) {
                ordersData.push({ name: "Pending", value: countPending, color: "yellow.6"})
                countPending = 0
            } else if (order.status === "Cancelled" && countCancelled > 0) {
                ordersData.push({ name: "Cancelled", value: countCancelled, color: "red.6"})
                countCancelled = 0
            }
        })

        return response.status(200).send({
            ordersData: ordersData
        })

    } catch (error) {
        throw error
    }
}