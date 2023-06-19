const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
router.post("/createuser",
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password','Incorrect Password').isLength({ min: 5 }),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        try {
            await User.create({
                // name: "Shyam",           //adding data from js file
                // password:"123456",
                // email:"shyam11@gmail.com",
                // location:"unknow"

                name: req.body.name,           //adding data from thunder client
                password: req.body.password,
                email: req.body.email,
                location: req.body.location


            })
            res.json({ success: true }); //if user is successfully created in data bass msg is show in (thunder client)
        } catch (error) {
            console.log(error)
            res.json({ success: false }); //if user not created
        }
    })
module.exports = router;