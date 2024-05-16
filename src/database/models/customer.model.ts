import { Schema, model, models } from "mongoose";

const CustomerSchema = new Schema({
    firstName: { type: String, required: false, unique: false },
    lastName: { type: String, required: false, unique: false },
    order: { type: Schema.Types.ObjectId, ref: "Order", required: false},
    spent: { type: String, required: false },
    lastOrdered: { type: Date, required: false, unique: false },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: false, unique: true },
    status: { type: String, required: false },
    userId: { type: String, require: false },
})

const Customer = models.Customer || model("Customer", CustomerSchema)
export default Customer