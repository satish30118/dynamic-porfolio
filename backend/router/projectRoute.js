const express = require('express');
const { updateProjectData, getAllProjectData, deleteProject, addNewProject } = require('../controllers/projectController');
const { adminVerification } = require('../middleware/authMiddleware');

//ROUTER OBJECT
const router = express.Router();

//ROUTING
router.post('/add-project', adminVerification, addNewProject);
router.delete('/delete-project', adminVerification, deleteProject);
router.get('/get-all-project', getAllProjectData);
router.put('/update-project/:id', adminVerification,  updateProjectData);

module.exports = router;