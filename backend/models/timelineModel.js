const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    startDate: {
        type: String,
        trim: true,
        required: true,
    },
    endDate: {
        type: String,
        trim: true,
        required: true,
    },
    jobPosition: {
        type: String,
    },
    companyName: {
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

const experienceModel = new mongoose.model("Experience", experienceSchema);


const educationSchema = new mongoose.Schema({
    startDate: {
        type: String,
        trim: true,
        required: true,
    },
    endDate: {
        type: String,
        trim: true,
        required: true,
    },
    collegeName: {
        type: String,
    },
    cgpa: {
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

const educationModel = new mongoose.model("Education", educationSchema);


module.exports ={experienceModel, educationModel};
