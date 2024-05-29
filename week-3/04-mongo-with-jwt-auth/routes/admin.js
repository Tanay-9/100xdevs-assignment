const { Router } = require("express");
const jwt = require('jsonwebtoken')
const { JWT_SECRETS } = require('../db_secrets')
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    
    const username = req.body.username;
    const password = req.body.password; 

    if(!username || !password) return res.status(404).json({
        message : "input are wrong"
    })
    
    const adminInfo = await Admin.create({
        username, 
        password
    })
 
    if(adminInfo) return res.status(200).json({
        message : "Admin created succssfully",
        admin_data : adminInfo
    })
    else return res.status(404).json({messgae: "error"})

});

router.post('/signin', async (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;

    if(!username || !password) {
        return res.status(404).json({message: "There is an error in input"});
    }

    const userCheck = await Admin.find({
        username,
        password
    });
  
    if(userCheck.length > 0) { 
        const token = jwt.sign({username}, JWT_SECRETS);
        if(token) {
            console.log(token); 
            return res.status(200).json({message: "Sign-in success", token});
        } else {
            return res.status(500).json({message: "Internal server error"});
        }
    } else {
        return res.status(404).json({message: "Admin not found, please create an admin account first"});
    }
});


router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const price = req.body.price;
    const description = req.body.description;
    const title = req.body.title;
    const imageLink = req.body.imageLink;
    if(!price || !description || !title || !imageLink) return res.status(404).json({message : "error in input"});
    const addCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    })
    if(addCourse) {
        console.log(addCourse);
        return res.status(200).json({
            message : "course has been added",
            courseDetails : addCourse
        })
    }
    else return res.status(404).json({
        message : "course additon failed"
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courseData = await Course.find({});
    if(courseData)
    {
        console.log(courseData);
        return res.status(200).json({
            message : "data retrived",
            courses : courseData 
        })
    }
    else {
        return res.status(404).json({
            message : "courses data retrival failed"
        })
    }
});

module.exports = router;