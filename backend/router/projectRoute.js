const express = require('express');
const multer = require('multer')
const { updateProjectData, getAllProjectData, deleteProject, addNewProject } = require('../controllers/projectController');
const { adminVerification } = require('../middleware/authMiddleware');

//ROUTER OBJECT
const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/project');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage });

//ROUTING
router.post('/add-project', adminVerification, upload.single("image"), addNewProject);
router.delete('/delete-project', adminVerification, deleteProject);
router.get('/get-all-project', getAllProjectData);
router.put('/update-project/:id', adminVerification,upload.single("image"),  updateProjectData);

module.exports = router;