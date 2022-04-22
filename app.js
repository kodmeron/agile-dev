const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('uwu')
})
app.listen(3001,(req,res) => {
    console.log("fucking startad")
})