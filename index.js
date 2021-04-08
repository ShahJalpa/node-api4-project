const dotenv = require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 7000

app.use("/api/", (_, res) =>{
    res.json({data:"API is accounted for"})
})
app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
})

//console.log("hello")
//console.log(_dirname)
//console.log(_filename)
//console.log(process.env.USERNAME)
//console.log(process.env.PORT)
//console.log(process.env.FOOD)
//console.log(process.env.GREET)
//console.log(process.env.REALLY)