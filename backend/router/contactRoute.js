const express = require('express');
const { adminVerification } = require('../middleware/authMiddleware');
const { deleteForm, addNewForm, getAllFormData, addContactLink, getAllContactLinkData, updateContactLinkData } = require('../controllers/contactController');

//ROUTER OBJECT
const router = express.Router();

//ROUTING FOR CONTACT FORM
router.post('/add-contact-form', addNewForm);
router.delete('/delete-contact-form/:id',adminVerification, deleteForm);
router.get('/get-all-contact-form', adminVerification, getAllFormData);

//ROUTING FOR CONTACT LINK
router.post('/add-contact-links', adminVerification, addContactLink);
router.get('/get-all-contact-links', adminVerification, getAllContactLinkData);
router.put('/update-contact-links/:id', adminVerification, updateContactLinkData);

module.exports = router;