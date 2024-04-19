const testimonialModel = require('../models/testimonialModel');

/* ------------- TESTIMONIAL  SECTION ------------- */
const addNewTestimonial = async (req, res) => {
    try {
        const { name, position, message } = req.body;
        const image = req.file.path;

        //CREATING NEW PROJECT
        const newtestimonial = await new testimonialModel({
            name,
            image,
            position,
            message,
        }).save();

        if (newtestimonial) {
            return res.status(201).send({
                success: true,
                message: 'New testimonial added successfully',
                newtestimonial,
            });
        }
    } catch (error) {
        console.log(`${error}`);
        res.status(500).send({
            success: false,
            message: 'Server Problem, Please try again!',
        });
    }
};

/* GET ALL Testimonial DETAILS */
const getAllTestimonialData = async (req, res) => {
    try {
        const allTestimonial = await testimonialModel.find({});
        res.status(200).send({
            success:true,
            message: 'All Testimonial details',
            allTestimonial,
        });
    } catch (error) {
        console.log(`${error}`);
        res.status(500).send({
            success: false,
            message: 'Server Problem, Please try again!',
        });
    }
};

/* Testimonial Update */
const updateTestimonialData = async (req, res) => {
    try {
        const { name, position, message } = req.body;
        let image;
        if (req.file) {
            image = req.file.path;
        }
        const { id } = req.params;
        const updatedTestimonialData = await testimonialModel.findByIdAndUpdate(id, { name,image, position, message }, { new: true });

        if (updatedTestimonialData) {
            res.status(200).send({
                success:true,
                message: ' Updated Successfully',
                updatedTestimonialData,
            });
        }
    } catch (error) {
        console.log(` ${error}`);
        res.status(500).send({
            success: false,
            message: 'Server Problem, Please try again!',
        });
    }
};

/* Delete  DETAILS */
const deleteTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        const testimonialDeleted = await testimonialModel.findByIdAndDelete({ _id: id });
        res.status(200).send({
            success:true,
            message: 'Deleted Successfully!!',
            testimonialDeleted,
        });
    } catch (error) {
        console.log(`ERROR IN GETTING ALL USER ${error}`);
        res.status(500).send({
            success: false,
            message: 'Server Problem, Please try again!',
        });
    }
};

module.exports = {
    addNewTestimonial,
    getAllTestimonialData,
    updateTestimonialData,
    deleteTestimonial
};
