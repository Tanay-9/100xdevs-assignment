const { Router } = require("express");
const jwt = require('jsonwebtoken')
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRETS } = require("../db_secrets");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) return res.status(404).json({
        message: "error in input"
    })

    const userDetails = await User.create({
        username,
        password
    })
    if (userDetails) {
        console.log(userDetails);
        return res.status(200).json({
            message: "user created successfully",
            user: userDetails
        })
    }
    else {
        return res.status(500).json({
            message: "internal server error"
        })
    }

});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) return res.status(400).json({
        message: "input is missing."
    })

    const userisAvailable = await User.find({ username, password })
    console.log(userisAvailable);
    if (userisAvailable) {
        const token = jwt.sign({ username }, JWT_SECRETS);
        if (token) {
            console.log(token);
            return res.status(200).json({
                message: "user has been logged in",
                token: token
            })
        }
    }
    else {
        return res.status(404).json({
            message: "first create an account, thank you!"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courseList = await Course.find({});
    if (courseList) return res.status(200).json({
        message: "list found",
        course: courseList
    })
    else {
        return res.status(404).json({
            message: "some error occured"
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.username;

    const addPurchases = await User.updateOne({
        username
    },
        {
            '$push': {
                "purchasesCourse": courseId
            }
        }
    )
        if(addPurchases) return res.status(200).json({
            message : "course has been purchased",
            addPurchases
        })
        else return res.status(404).json({message : "error"})
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
   
});

module.exports = router