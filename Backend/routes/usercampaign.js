const express = require('express');
const router = express.Router();
const Camp = require("../models/Usercampaign");

router.get('/allusercampaigns',async(req,res)=>{
    const cam = await Camp.find();
    res.json(cam)
});

router.post('/createcampaign',async (req,res)=>{
    console.log(req.body);
    let { title, desc,platform,camp } = req.body;
    try {
        const cam = await Camp.create({
            title: title,
            desc: desc,
            platform:platform,
            camp: camp
        })
        res.status(200).json({cam});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "Internal Server Error" });
    }
});

module.exports = router;