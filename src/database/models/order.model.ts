import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: "Customer" },
    orderNo: { type: String },
    date: { type: Date },
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    status: { type: String },
})

const Order = models.Order || model("Order", OrderSchema)
export default Order