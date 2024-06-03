import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
    orderNo: { type: String },
    orderDate: { type: Date, require: false },
    products: [{
        product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true },
    }],
    status: { type: String },
})

const Order = models.Order || model("Order", OrderSchema)
export default Order