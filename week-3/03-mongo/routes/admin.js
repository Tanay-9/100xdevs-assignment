const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) return res.status(403).json({
        message: "input error"
    })
    const adminCreate = await Admin.create({
        username,
        password
    })
    console.log(adminCreate);
    return res.json({
        message: "Admin Created successfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price

    //zod

    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    })
    console.log(newCourse);
    return res.json({
        message: "Course created successfully", courseId: newCourse.id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({})
    console.log(allCourses);
    res.json({
        courses : allCourses
    })

});

module.exports = router;