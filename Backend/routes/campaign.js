const express = require('express');
const router = express.Router();
const Campaigns = require("../models/Allcampaigns")
const products = require("../models/Allproducts")


//Campaigns

router.get('/allcampaigns',async(req,res)=>{
    const cam = await Campaigns.find();
    res.json(cam);
})

router.post('/addNewCampaign',async (req,res)=>{
    console.log(req.body);
    let { title, description, platform } = req.body;
    // const camp = Campaigns(req.body);
    try {
        const camp = await Campaigns.create({
            title: title,
            desc: description,
            platform:platform
        })
        res.status(200).json({camp});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "Internal Server Error" });
    }
});

//Products

router.get('/allproducts',async(req,res)=>{
    const prod = await products.find();
    res.json(prod);
})

router.post('/fetchproduct',async(req,res)=>{
    const prod = await products.find({"title":req.body.title})
    res.json(prod);
})

router.post('/addNewProduct',async (req,res)=>{
    console.log(req.body);
    let { title, price } = req.body;
    try {
        const prod = await products.create({
            title: title,
            price:price
        })
        res.status(200).json({prod});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "Internal Server Error" });
    }
});

module.exports = router;