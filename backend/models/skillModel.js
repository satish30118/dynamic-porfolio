const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    level: {
        type: String,
        trim: true,
        required: true,
    },
    image: {
        type: String,
    },
    
}, {timestamps : true});

const skillModel = new mongoose.model("Skill", skillSchema);
module.exports = skillModel;
