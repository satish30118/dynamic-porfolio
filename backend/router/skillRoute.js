const express = require('express');
const { adminVerification } = require('../middleware/authMiddleware');
const { getAllSkillData, updateSkillData, deleteSkill, addNewSkill } = require('../controllers/skillController');

//ROUTER OBJECT
const router = express.Router();

//ROUTING
router.post('/add-skill', adminVerification, addNewSkill);
router.delete('/delete-skill', adminVerification, deleteSkill);
router.get('/get-all-skill', getAllSkillData);
router.put('/update-skill/:id', adminVerification,  updateSkillData);

module.exports = router;