const express = require('express')
require('dotenv').config()
const tasksRouter = require('./routes/tasks')
const connectDB = require('./db/connect')

const app = express()
app.use(express.json())
app.use('/api/v1/tasks', tasksRouter)
const port = process.env.PORT || 6000

app.get('/', (req, res) => {
    console.log('app worked');
    res.send('app worked')
})

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
