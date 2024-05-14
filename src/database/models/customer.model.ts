import { Schema, model, models } from "mongoose";

const CustomerSchema = new Schema({
    firstName: { type: String, required: false, unique: false },
    lastName: { type: String, required: false, unique: false },
    order: { type: Schema.Types.ObjectId, ref: "Order"},
    spent: { type: String, required: true },
    lastOrdered: { type: Date, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: false, unique: true },
    status: { type: String, required: false }
})

const Customer = models.Customer || model("Customer", CustomerSchema)
export default Customer