require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors= require ('cors')
const tokenValidation = require('./middlewares/tokenValidation')
const { taskRouter, authRouter } = require('./routes')


const app = express()
const PORT = process.env.PORT || 4000
app.use(cors())
app.use(express.json())

app.use('/api/tasks', tokenValidation, taskRouter)
app.use('/api/auth', authRouter)

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  })

