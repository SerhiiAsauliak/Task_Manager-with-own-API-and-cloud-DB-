const express = require('express')
require('dotenv').config()
const tasksRouter = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

const app = express()
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasksRouter)
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 6000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server worked on port ${port}...`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()
