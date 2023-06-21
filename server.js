const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()


const mysql = require('mysql2/promise')

const PORT = 8000
const app = express()
app.use(cors())
app.use(express.json())

app.get('/' ,(req,res) => {
    return res.json('hello')
})

app.get('/units', async(req,res) => {
    const connection = await mysql.createConnection({
        host:'localhost',
        user:'root',
        database:'exams'
    })
    const q = 'SELECT * FROM `units`'
    const [values] = await connection.execute(q)
    res.status(200).json({data:values})
})

app.listen(PORT,(req,res) => {
    console.log(`Server running on port ${PORT}`)
})