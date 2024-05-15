import express from "express"
import productsRoute from "./routes/routes.products"
import customersRoute from "./routes/routes.customers"

const app = express()

app.use(express.json())

app.use("/api/products/", productsRoute)

app.use("/api/customers/", customersRoute)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})