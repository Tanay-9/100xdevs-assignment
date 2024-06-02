const express = require('express');
const app = express();
const { todo } = require('./db')
const PORT = 3000;
const cors = require('cors');
const { createTodo, updateTodo } = require('./types')
app.use(express.json());

app.use(cors())


app.get('/', (req, res) => {
    res.status(200).json({
        yeah: "working"
    })
})
//title, description, iscomplete
app.post('/todo', async (req, res) => {
    console.log('this is on, from backend');
    const parseInput = createTodo.safeParse(req.body);
    console.log(parseInput);
    if (!parseInput.success) return res.status(411).json({
        message: "invalid input"
    })

    const title = req.body.title;
    const description = req.body.description;


    try {
        const todoCreation = await todo.create({
            title,
            description,
            completed: false
        })

        return res.status(201).json({
            message: "input success",
            todoId: todoCreation._id
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "internal server problem"
        })
    }

    //    

})

app.get('/todos', async (req, res) => {
    try {
        const getTodos = await todo.find({})        
        return res.status(200).json({
            message: `todos found (${getTodos.length})`,
            getTodos
        })
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({
            message: "operation failed"
        })
    }


})

app.put('/completed', async (req, res) => {
    const parseInput = updateTodo.safeParse(req.body)
    if (!parseInput.success) return res.status(411).json({
        message: "wrong input"
    })

    const id = req.body.id;
    try {
        const updateComplete = await todo.updateOne({
            _id: id
        }, {
            "$set": {
                completed: true
            }
        })


        return res.status(200).json({
            message: "updation complete",
            updateComplete
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "internal server errror"
        })
    }

})
app.listen(PORT, () => console.log('server is up'))