const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://tanay:EQQBoPkrJnbDOtv1@cluster0.nb4jyzc.mongodb.net/todo-app")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);
//todos is the table name or collection name.
module.exports = {todo}