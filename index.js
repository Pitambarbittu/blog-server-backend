const express = require('express')
const bollyRouter = require('./route/data')
const cors = require("cors")
const app = express()

app.use(cors())
app.use("/api",bollyRouter)


app.listen(process.env.PORT||8000,()=>{
    console.log("app is running");
})

