const express = require('express')
const bollyRouter = require('./route/data')
const cors = require("cors")
const app = express()

app.use(cors())
app.use("/api",bollyRouter)


app.listen(4000,()=>{
    console.log("page is perfect");
})
