import express from "express"
import productsRoute from "./routes/routes.products"

const app = express()

app.use(express.json())

// /api/products
app.use("/api/products/", productsRoute)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})