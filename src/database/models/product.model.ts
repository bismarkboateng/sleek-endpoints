import { Schema, model, models } from "mongoose";


const ProductSchema = new Schema({
    name: { type: String },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    price: { type: String },
    stock: { type: Number, required: true },
    description: { type: String, required: false },
    sold: { type: Number, required: false },
    revenue: { type: String }
})

const Product = models.Product || model("Product", ProductSchema)
export default Product