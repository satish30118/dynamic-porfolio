const { experienceModel, educationModel } = require("../models/timelineModel");

/* ------------- EDUCATION SECTION ------------- */
const addNewEducation = async (req, res) => {
  try {
    const { startDate, endDate, collegeName, cgpa, description, link } =
      req.body;

    //CREATING NEW Experience
    const newEducation = await new educationModel({
      startDate,
      endDate,
      collegeName,
      cgpa,
      description,
      link,
    }).save();

    if (newEducation) {
      return res.status(201).send({
        success: true,
        message: "New Education added successfully",
        newEducation,
      });
    }
  } catch (error) {
    console.log(`${error}`);
    res.status(500).send({
      success: false,
      message: "Server Problem, Please try again!",
    });
  }
};

/* GET ALL EDUCATION DETAILS */
const getAllEducationData = async (req, res) => {
  try {
    const allEducation = await educationModel.find({});
    res.status(200).send({
      message: "All Education details",
      allEducation,
    });
  } catch (error) {
    console.log(`${error}`);
    res.status(500).send({
      success: false,
      message: "Server Problem, Please try again!",
    });
  }
};

/* EDUCATION Section Update */
const updateEducationData = async (req, res) => {
  try {
    const { startDate, endDate, collegeName, cgpa, description, link } =
      req.body;
    const { id } = req.params;
    const updatedEducationData = await educationModel.findByIdAndUpdate(
      id,
      { startDate, endDate, collegeName, cgpa, description, link },
      { new: true }
    );

    if (updatedEducationData) {
      res.status(200).send({
        message: " Updated Successfully",
        updatedEducationData,
      });
    }
  } catch (error) {
    console.log(` ${error}`);
    res.status(500).send({
      success: false,
      message: "Server Problem, Please try again!",
    });
  }
};

/* Delete EDUCATION DETAILS */
const deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const educationDeleted = await educationModel.findByIdAndDelete({
      _id: id,
    });
    res.status(200).send({
      message: "Deleted Successfully!!",
      educationDeleted,
    });
  } catch (error) {
    console.log(`ERROR IN GETTING ALL USER ${error}`);
    res.status(500).send({
      success: false,
      message: "Server Problem, Please try again!",
    });
  }
};

/* ------------- EXPERIENCE SECTION ------------- */
const addNewExperience = async (req, res) => {
  try {
    const { startDate, endDate, jobPosition, companyName, description, link } =
      req.body;

    //CREATING NEW Experience
    const newExperience = await new experienceModel({
      startDate,
      endDate,
      jobPosition,
      companyName,
      description,
      link,
    }).save();

    if (newExperience) {
      return res.status(201).send({
        success: true,
        message: "New Experience added successfully",
        newExperience,
      });
    }
  } catch (error) {
    console.log(`${error}`);
    res.status(500).send({
      success: false,
      message: "Server Problem, Please try again!",
    });
  }
};

/* GET ALL Experiences DETAILS */
const getAllExperienceData = async (req, res) => {
  try {
    const allExperience = await experienceModel.find({}).sort({createdAt:-1});
    res.status(200).send({
      message: "All Experiences details",
      allExperience,
    });
  } catch (error) {
    console.log(`${error}`);
    res.status(500).send({
      success: false,
      message: "Server Problem, Please try again!",
    });
  }
};

/* Experinces Section Update */
const updateExperienceData = async (req, res) => {
  try {
    const { startDate, endDate, jobPosition, companyName, description, link } =
      req.body;
    const { id } = req.params;
    const updatedExperienceData = await experienceModel.findByIdAndUpdate(
      id,
      { startDate, endDate, jobPosition, companyName, description, link },
      { new: true }
    );

    if (updatedExperienceData) {
      res.status(200).send({
        message: " updated Successfully",
        updatedExperienceData,
      });
    }
  } catch (error) {
    console.log(` ${error}`);
    res.status(500).send({
      success: false,
      message: "Server Problem, Please try again!",
    });
  }
};

/* Delete Experience DETAILS */
const deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const experienceDeleted = await experienceModel.findByIdAndDelete({
      _id: id,
    });
    res.status(200).send({
      message: "Deleted Successfully!!",
      experienceDeleted,
    });
  } catch (error) {
    console.log(`ERROR IN GETTING ALL USER ${error}`);
    res.status(500).send({
      success: false,
      message: "Server Problem, Please try again!",
    });
  }
};

module.exports = {
  addNewExperience,
  updateExperienceData,
  getAllExperienceData,
  deleteExperience,
  addNewEducation,
  updateEducationData,
  getAllEducationData,
  deleteEducation,
};
