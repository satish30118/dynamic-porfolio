const express = require('express');
const { registerController, loginController, getAllUser, updateUser } = require('../controllers/authController');
const { adminVerification } = require('../middleware/authMiddleware');

//ROUTER OBJECT
const router = express.Router();

//ROUTING
router.post('/register', registerController);
router.post('/login', loginController);
router.get('/get-all-user', adminVerification, getAllUser);
router.put('/update-user/:id', adminVerification, updateUser);

//PROTECTED ROUTE FOR USER
router.route('/admin-auth').get(adminVerification, (req, res) => {
    res.status(200).send({ ok: true });
});

module.exports = router;
