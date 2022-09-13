const mongoose = require('mongoose');
const { Schema } = mongoose;

const campaignSchema = new Schema({
    title : {
        type:String,
        required:true
    },
    desc : {
        type:String,
        required:true
    },
    platform : {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('allcampaign',campaignSchema);
