const express = require('express');
const router = express.Router();

const User = require("../models/user")


router.post("/signup", async(req,res)=>{
    try{ 

        const {email,password} = req.body;

        let user = await User.findOne({ email});

        if(user){
            return res.status(400).json({message: "User already exists"});
        }

        user = await User.create({email,password});

        res.status(200).json({user});

    }
    catch(error){
        res.json({
            status :"failed",
            message: error.message
        })
    }
});

module.exports = router ;