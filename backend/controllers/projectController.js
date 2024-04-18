const projectModel = require('../models/projectModel');

/* ------------- PROJECT SECTION ------------- */
const addNewProject = async (req, res) => {
    try {
        const { heading, title, image, techStack, description, link } = req.body;

        //CREATING NEW PROJECT
        const newProject = await new projectModel({
            heading,
            title,
            image,
            techStack,
            description,
            link,
        }).save();

        if (newProject) {
            return res.status(201).send({
                success: true,
                message: 'New Project added successfully',
                newProject,
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

/* GET ALL PROJECT DETAILS */
const getAllProjectData = async (req, res) => {
    try {
        const allProject = await projectModel.find({});
        res.status(200).send({
            message: 'All Project details',
            allProject,
        });
    } catch (error) {
        console.log(`${error}`);
        res.status(500).send({
            success: false,
            message: 'Server Problem, Please try again!',
        });
    }
};

/* Project Section Update */
const updateProjectData = async (req, res) => {
    try {
        const { heading, title, image, techStack, description, link } = req.body;
        const { id } = req.params;
        const updatedProjectData = await projectModel.findByIdAndUpdate(id, { heading, title, image, techStack, description, link }, { new: true });

        if (updatedProjectData) {
            res.status(200).send({
                message: ' Updated Successfully',
                updatedProjectData,
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
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const projectDeleted = await projectModel.findByIdAndDelete({ _id: id });
        res.status(200).send({
            message: 'Deleted Successfully!!',
            projectDeleted,
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
    addNewProject,
    deleteProject,
    updateProjectData,
    getAllProjectData
};
