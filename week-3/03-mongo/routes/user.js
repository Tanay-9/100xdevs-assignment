const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) return res.json({
        message: "input error"
    })
    const userData = await User.create({
        username,
        password
    })
    res.json({
        message: "User created successfully",
        userId: userData.id
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});
    return res.json({
        courses: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const { username } = req.headers;
    try {
        const output = await User.updateOne({
            username: username
        },
            {
                "$push": {
                    purchasesCourse : courseId
                }
            }
           
        )
        console.log(output);
       
    }
    catch(err) {
        console.log(err);
    }
   
    res.json({
        message: "purchase request complete"
    })

});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const { username } = req.headers;
    const user = await User.findOne({
        username : username
    })
    console.log(user.purchasesCourse);
    const courses = await Course.find({
         _id : {
            "$in" : user.purchasesCourse
         }
    })

    res.json({
        message : "hey there",
        courses : courses
    })
});

module.exports = router