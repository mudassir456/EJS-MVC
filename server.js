const express = require("express")
let port =4000;
const connectionWithMongoDB = require("./models/index")
let app =express()
let path = require("path")
app.use(express.urlencoded())
app.use(express.json())
app.set("view engine", "ejs")

let productRouter =require("./routes/product")

connectionWithMongoDB()

app.use("/products",productRouter)
app.post("/api/products",productRouter);
app.put("/api/products/:userid",productRouter)
app.delete("/api/products/:userid",productRouter)


app.listen(port)