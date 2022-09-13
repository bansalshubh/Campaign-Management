const mongoose = require('mongoose');
const { Schema } = mongoose;

const userCampaignSchema = new Schema({
    title : {
        type:String,
        required:true
    },
    desc : {
        type:String,
        required:true
    },
    platform:{
        type:String,
        required:true
    },
    camp:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'allproducts'
    },
});


module.exports = mongoose.model('usercam',userCampaignSchema);
