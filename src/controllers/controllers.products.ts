import { Request, Response } from "express-serve-static-core";
import { connectToDatabase } from "../database";
import Product from "../database/models/product.model";


export const getAllProducts = async (request: Request, response: Response) => {
    try {
        await connectToDatabase()
        const products = await Product.find().exec()
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

export const updateProduct = async (request: Request, response: Response) => {
    const  { id } = request.params
    const product = request.body
    try {
        await connectToDatabase()
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true })
        if (!updatedProduct) {
            return response.status(404).send({
                message: "Product not found!"
            })
        }
        return response.status(200).send(updatedProduct)
    } catch (error) {
        throw error
    }
}

export const deleteProduct = async (request: Request, response: Response) => {
    const  { id } = request.params

    try {
        await connectToDatabase()
        const deletedProduct = await Product.findByIdAndDelete(id)
        if (!deletedProduct) {
            return response.status(404).send({
                message: "Product not found!"
            })
        }
        return response.status(200).send({
            message: "Product Deleted!"
        })
    } catch (error) {
        throw error
    }
}

export const totalProduct = async (request: Request, response: Response) => {
    try {
        await connectToDatabase()
        const products = await Product.find().exec()
        // returns the total number of products available
        const totalProducts = products.length
        if(!totalProducts) {
            return response.status(404).send({
                message: "No Products Found!"
            })
        }
        return response.status(200).send({
            total: totalProducts
        })
    } catch (error) {
        throw error
    }
}


export const totalRevenue = async (request: Request, response: Response) => {
    try {
        await connectToDatabase()
        const products = await Product.find().exec()

        // price of each product
        const price = Number(products[0]?.price)
        const totalProducts = products.length
        const totalRevenue = Math.ceil(price * totalProducts)

        if(!totalRevenue) {
            return response.status(404).send({
                message: "Could not calculate revenue"
            })
        }
        return response.status(200).send({
            revenue: totalRevenue
        })
    } catch (error) {
        throw error
    }
}
