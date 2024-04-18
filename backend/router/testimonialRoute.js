const express = require('express');
const { adminVerification } = require('../middleware/authMiddleware');
const { updateTestimonialData, getAllTestimonialData, deleteTestimonial, addNewTestimonial } = require('../controllers/testimonialController');

//ROUTER OBJECT
const router = express.Router();

//ROUTING
router.post('/add-testimonial', adminVerification, addNewTestimonial);
router.delete('/delete-testimonial', adminVerification, deleteTestimonial);
router.get('/get-all-testimonial', getAllTestimonialData);
router.put('/update-testimonial/:id', adminVerification,  updateTestimonialData);

module.exports = router;