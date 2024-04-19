const express = require('express');
const { adminVerification } = require('../middleware/authMiddleware');
const {
    addNewExperience,
    deleteExperience,
    getAllExperienceData,
    updateExperienceData,
    getAllEducationData,
    addNewEducation,
    updateEducationData,
} = require('../controllers/timelineController');

//ROUTER OBJECT
const router = express.Router();

//ROUTING FOR EXPERINCES FORM
router.post('/add-experience', adminVerification, addNewExperience);
router.delete('/delete-experience/:id', adminVerification, deleteExperience);
router.get('/get-all-experience', getAllExperienceData);
router.put('/update-experience/:id', adminVerification, updateExperienceData);

//ROUTING FOR EDUCATION
router.post('/add-education', adminVerification, addNewEducation);
router.get('/get-all-education', getAllEducationData);
router.put('/update-education/:id', adminVerification, updateEducationData);
router.delete('/delete-education/:id', adminVerification, deleteExperience);

module.exports = router;
