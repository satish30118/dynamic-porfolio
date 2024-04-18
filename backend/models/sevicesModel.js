const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        image: {
            type: String,
        },
    },
    { timestamps: true }
);

const servicesModel = new mongoose.model('Services', servicesSchema);
module.exports = servicesModel;
