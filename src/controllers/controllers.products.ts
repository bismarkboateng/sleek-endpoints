import { Request, Response } from "express-serve-static-core";
import { connectToDatabase } from "../database";
import Product from "../database/models/product.model";


export const getAllProducts = async (request: Request, response: Response) => {
    try {
        await connectToDatabase()
        const products = await Product.find()
        if (!products) {
            return response.status(404).send({
                message: "Products not found!"
            })
        }
        return response.status(200).send(products)
    } catch (error) {
        throw error
    }
}

export const createAProduct = async (request: Request, response: Response) => {
    const product = request.body

    try {
        await connectToDatabase()
        const newProduct = await Product.create(product)
        if (!newProduct) {
            return response.status(500).send({
                message: "Product not created!"
            })
        }
        return response.status(201).send(newProduct)
    } catch (error) {
        throw error
    }
}