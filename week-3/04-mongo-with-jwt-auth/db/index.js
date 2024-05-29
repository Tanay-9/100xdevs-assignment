const mongoose = require('mongoose');
const { mongoDBSecret } = require('../db_secrets');
// Connect to MongoDB
mongoose.connect(mongoDBSecret);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema defintion here
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasesCourse : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Course'
        }
    ]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition 
    title : String,
    description : String,
    price : Number,
    imageLink : String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}