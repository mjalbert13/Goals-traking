const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use('/api/goals', require('./routs/goalsRouts'))

app.listen(port, () => console.log(`Server Started on port ${port}`))