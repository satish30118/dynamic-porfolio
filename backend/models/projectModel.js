const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    heading: {
        type: String,
        trim: true,
        required: true,
    },
    title: {
        type: String,
        trim: true,
        required: true,
    },
    image: {
        type: String,
    },
    techStack: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    link:{
        type:String
    }
}, {timestamps : true});

const projectModel = new mongoose.model("Project", projectSchema);
module.exports = projectModel;
