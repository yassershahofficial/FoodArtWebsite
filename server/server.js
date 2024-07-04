const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.set("views","../client/public/views")
app.set("view engine", "ejs")
app.use(express.static("../client/public"))

app.get('/', (req,res) => {
    res.render("index")
})

app.listen(PORT, () => console.log(`Server is listening in ${PORT}`))