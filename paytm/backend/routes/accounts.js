const express = require('express');
const authMiddleware = require('../middleware');
const { Account } = require('../db');

const router = express.Router();

router.get('/',(req,res) => {
    res.json({
        message : "this is account route"
    })
})

router.get('/balance', authMiddleware , async (req,res) => {
    console.log('this goes here');
    const userId = req.userId;
    try {
        const accData = await Account.findOne({
            userId : userId
        })

        console.log(accData);
        return res.status(200).json({
            message : "success",
            "balance" : accData.balance
        })
    }
    catch (err) {
        return res.status(500).json({
            message : "internal server error"
        })
    }
  
})


// router.post('/transfer',authMiddleware, (req,res) => {
//     const {amount, to} = req.body;

// })
module.exports = router;