import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    name: { type: String },
    price: { type: String },
    stock: { type: Number, required: true },
    description: { type: String, required: false },
    image: { type: String, required: false },
    category: { type: String, required: false },
})

const Product = models.Product || model("Product", ProductSchema)
export default Product