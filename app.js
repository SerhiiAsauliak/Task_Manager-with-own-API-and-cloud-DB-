const express = require('express')
const dotenv = require('dotenv')
const tasksRouter = require('./routes/tasks')

dotenv.config()
const app = express()
app.use(express.json())
app.use('/api/v1/tasks', tasksRouter)
const port = process.env.PORT || 6000

app.get('/', (req, res) => {
    console.log('app worked');
    res.send('app worked')
})

const start = () => {
    app.listen(port, () => {
        console.log(`Server worked on port ${port}...`)
    })
}

start()
