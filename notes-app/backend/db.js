
const mongoose = require('mongoose')
const db_secrets = require('./db_sec')
mongoose.connect(db_secrets)

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);
//todos is the table name or collection name.
module.exports = {todo}