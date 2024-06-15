// const mongoose = require('mongoose')
// mongoose.connect(process.env.db);


const mongoose = require('mongoose');
const Mongoose = require('mongoose')
const { Schema } = mongoose;


mongoose.connect("mongodb+srv://tanay:EQQBoPkrJnbDOtv1@cluster0.nb4jyzc.mongodb.net/paytm");
  
  

const UserSchema = new Schema ({
    firstName : {
        type : String,
        required : true,
        maxLength : 30
    },

    lastName : {
        type : String,
        required : true,
        maxLength : 30
    },
    username : {
        required : true,
        type : String,
        lowerCase : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minLength : 8
    }
})

const AccountSchema = Schema ({
    userId : {
        type : Mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance : {
        type : Number, 
        required : true
    }
})

const User = mongoose.model("User",UserSchema)
const Account = mongoose.model('Account',AccountSchema)

module.exports = {User,Account};