import express from "express"
import  cors from "cors"
import productsRoute from "./routes/routes.products"
import customersRoute from "./routes/routes.customers"
import ordersRoute from "./routes/routes.orders"
import { sampleRevenueData } from "./utils"

const app = express()

app.use(express.json())
const corsOptions = {
    origin: ["http://localhost:3000/"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
    credentials: true,
    optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

app.use("/api/products/", productsRoute)

app.use("/api/customers/", customersRoute)

app.use("/api/orders", ordersRoute)

app.get("/api/visitors", (request, response) => {
    return response.status(200).send({
        totalVisitors: 10000
    })
})

app.get("/api/card", (request, response) => {
    return response.status(200).send(sampleRevenueData)
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})