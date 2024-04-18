const { contactFormModel, contactLinksModel } = require('../models/contactModel');

/* ------------- CONTACT FORM  SECTION------------- */
const addNewForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        //CREATING NEW
        const newForm = await new contactFormModel({
            title,
            image,
        }).save();

        if (newForm) {
            return res.status(201).send({
                success: true,
                message: 'New skill added successfully',
                newForm,
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

/* GET ALL Form DETAILS */
const getAllFormData = async (req, res) => {
    try {
        const allForm = await contactFormModel.find({});
        res.status(200).send({
            message: 'All form details',
            allForm,
        });
    } catch (error) {
        console.log(`${error}`);
        res.status(500).send({
            success: false,
            message: 'Server Problem, Please try again!',
        });
    }
};

/* Delete  DETAILS */
const deleteForm = async (req, res) => {
    try {
        const { id } = req.params;
        const formDeleted = await contactFormModel.findByIdAndDelete({ _id: id });
        res.status(200).send({
            message: 'Deleted Successfully!!',
            formDeleted,
        });
    } catch (error) {
        console.log(`ERROR IN GETTING ALL USER ${error}`);
        res.status(500).send({
            success: false,
            message: 'Server Problem, Please try again!',
        });
    }
};

/* ------------- CONTACT LINK  SECTION------------- */
const addContactLink = async (req, res) => {
    try {
        const { links } = req.body;

        //CREATING NEW
        const newLink = await new contactLinksModel({
            links,
        }).save();

        if (newLink) {
            return res.status(201).send({
                success: true,
                message: 'New skill added successfully',
                newLink,
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

/* GET ALL CONTACT LINK DETAILS */
const getAllContactLinkData = async (req, res) => {
    try {
        const allLink = await contactLinksodel.find({});
        res.status(200).send({
            message: 'All links details',
            allLink,
        });
    } catch (error) {
        console.log(`${error}`);
        res.status(500).send({
            success: false,
            message: 'Server Problem, Please try again!',
        });
    }
};

/* Contact Update */
const updateContactLinkData = async (req, res) => {
    try {
        const { links } = req.body;
        const { id } = req.params;
        const updatedContactLinkData = await servicesModel.findByIdAndUpdate(id, { links }, { new: true });

        if (updatedContactLinkData) {
            res.status(200).send({
                message: ' Updated Successfully',
                updatedContactLinkData,
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

module.exports = {
    addNewForm,
    getAllFormData,
    deleteForm,
    addContactLink,
    getAllContactLinkData,
    updateContactLinkData
};
