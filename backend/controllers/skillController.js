const skillModel = require('../models/skillModel');

/* ------------- SKILL SECTION ------------- */
const addNewSkill = async (req, res) => {
    try {
        const { title, image, level } = req.body;

        //CREATING NEW PROJECT
        const newSkill = await new skillModel({
            title,
            image,
            level,
        }).save();

        if (newSkill) {
            return res.status(201).send({
                success: true,
                message: 'New skill added successfully',
                newSkill,
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

/* GET ALL SKILL DETAILS */
const getAllSkillData = async (req, res) => {
    try {
        const allSkill = await skillModel.find({});
        res.status(200).send({
            message: 'All Skill details',
            allSkill,
        });
    } catch (error) {
        console.log(`${error}`);
        res.status(500).send({
            success: false,
            message: 'Server Problem, Please try again!',
        });
    }
};

/* Skill Update */
const updateSkillData = async (req, res) => {
    try {
        const { title, image, level } = req.body;
        const { id } = req.params;
        const updatedSkillData = await skillModel.findByIdAndUpdate(
            id,
            {title, image, level },
            { new: true }
        );

        if (updatedSkillData) {
            res.status(200).send({
                message: ' Updated Successfully',
                updatedSkillData,
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
const deleteSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const skillDeleted = await skillModel.findByIdAndDelete({ _id: id });
        res.status(200).send({
            message: 'Deleted Successfully!!',
            skillDeleted,
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
    addNewSkill,
    getAllSkillData,
    updateSkillData,
    deleteSkill
};
