const express = require('express');
const multer = require('multer')
const { adminVerification } = require('../middleware/authMiddleware');
const { updateTestimonialData, getAllTestimonialData, deleteTestimonial, addNewTestimonial } = require('../controllers/testimonialController');

//ROUTER OBJECT
const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/testimonial');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+ '-' + file.originalname);
    },
});
const upload = multer({ storage });

//ROUTING
router.post('/add-testimonial', adminVerification,upload.single('image'), addNewTestimonial);
router.delete('/delete-testimonial/:id', adminVerification, deleteTestimonial);
router.get('/get-all-testimonial', getAllTestimonialData);
router.put('/update-testimonial/:id', adminVerification, upload.single('image'), updateTestimonialData);

module.exports = router;