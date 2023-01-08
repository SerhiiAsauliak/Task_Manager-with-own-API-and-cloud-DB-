
const getAllTasks = (req,res) => {
    console.log('task route')
    res.send('from tasks controller')
}

const createTask = (req,res) => {
    console.log('create task')
    res.json(req.body)
}

const getOneTask = (req,res) => {
    console.log('get one task')
    res.json(req.params)
}

const updateTask = (req,res) => {
    console.log('update task')
    // res.send('update task')
    res.json(req.params)
}

const deleteTask = (req,res) => {
    console.log('delete task')
    // res.send('delete task')
    res.json(req.params)
}


module.exports = {getAllTasks, createTask,getOneTask, updateTask, deleteTask}