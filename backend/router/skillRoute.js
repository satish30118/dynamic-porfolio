const express = require('express');
const multer = require('multer');
const { adminVerification } = require('../middleware/authMiddleware');
const { getAllSkillData, updateSkillData, deleteSkill, addNewSkill } = require('../controllers/skillController');

//ROUTER OBJECT
const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/skill');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+ '-' + file.originalname);
    },
});

const upload = multer({ storage });

//ROUTING
router.post('/add-skill',adminVerification, upload.single("image"), addNewSkill);
router.delete('/delete-skill/:id', adminVerification, deleteSkill);
router.get('/get-all-skill', getAllSkillData);
router.put('/update-skill/:id', adminVerification,upload.single("image"), updateSkillData);

module.exports = router;
