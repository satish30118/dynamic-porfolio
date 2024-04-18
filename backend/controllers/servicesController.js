const servicesModel = require('../models/sevicesModel');

/* ------------- SERVICES SECTION ------------- */
const addNewService = async (req, res) => {
    try {
        const { title, image } = req.body;

        //CREATING NEW PROJECT
        const newService = await new servicesModel({
            title,
            image,
        }).save();

        if (newService) {
            return res.status(201).send({
                success: true,
                message: 'New skill added successfully',
                newService,
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

/* GET ALL SERVICES DETAILS */
const getAllServiceData = async (req, res) => {
    try {
        const allService = await servicesModel.find({});
        res.status(200).send({
            message: 'All Skill details',
            allService,
        });
    } catch (error) {
        console.log(`${error}`);
        res.status(500).send({
            success: false,
            message: 'Server Problem, Please try again!',
        });
    }
};

/* Service Update */
const updateServiceData = async (req, res) => {
    try {
        const { title, image } = req.body;
        const { id } = req.params;
        const updatedServiceData = await servicesModel.findByIdAndUpdate(id, { title, image }, { new: true });

        if (updatedServiceData) {
            res.status(200).send({
                message: ' Updated Successfully',
                updatedServiceData,
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
const deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const serviceDeleted = await servicesModel.findByIdAndDelete({ _id: id });
        res.status(200).send({
            message: 'Deleted Successfully!!',
            serviceDeleted,
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
    addNewService,
    getAllServiceData,
    updateServiceData,
    deleteService,
};
