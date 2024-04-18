const express = require('express');
const { adminVerification } = require('../middleware/authMiddleware');
const { addNewService, deleteService, getAllServiceData, updateServiceData } = require('../controllers/servicesController');

//ROUTER OBJECT
const router = express.Router();

//ROUTING
router.post('/add-service', adminVerification, addNewService);
router.delete('/delete-service', adminVerification, deleteService);
router.get('/get-all-service', getAllServiceData);
router.put('/update-service/:id', adminVerification,  updateServiceData);

module.exports = router;