 const JWT_SECRET = 'tanay';

 const zod = require('zod');
 const userValidate = zod.object({
    username : zod.string().email({ message: "Invalid email address" }),
    firstName : zod.string().min(1,{message : "firstname is missing, if no lastname enter N/A"}),
    lastName : zod.string().min(1,{message : "lastname is missing, if no lastname enter N/A"}),
    password : zod.string().min(8,{message : "password should contain atleast 8 words "})
 }) 

 const updateValidate = zod.object({
   firstName : zod.string().optional(),
   lastName : zod.string().optional(),
   password : zod.string().min(8).optional()
 })

 module.exports = {JWT_SECRET,userValidate,updateValidate};