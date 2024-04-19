const express = require('express');
const multer = require('multer');
const { adminVerification } = require('../middleware/authMiddleware');
const { addNewService, deleteService, getAllServiceData, updateServiceData } = require('../controllers/servicesController');

//ROUTER OBJECT
const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/service');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage });

//ROUTING
router.post('/add-service', adminVerification, upload.single('image'), addNewService);
router.delete('/delete-service', adminVerification, deleteService);
router.get('/get-all-service', getAllServiceData);
router.put('/update-service/:id', adminVerification, upload.single('image'), updateServiceData);

module.exports = router;
