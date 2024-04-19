const express = require('express');
const multer = require('multer');
const { registerController, loginController, getAllUser, updateUser } = require('../controllers/authController');
const { adminVerification } = require('../middleware/authMiddleware');

//ROUTER OBJECT
const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/profile');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

//ROUTING
router.post('/register', registerController);
router.post('/login', loginController);
router.get('/get-all-user', adminVerification, getAllUser);
router.put('/update-user/:id', adminVerification, upload.single('image'), updateUser);

//PROTECTED ROUTE FOR USER
router.route('/admin-auth').get(adminVerification, (req, res) => {
    res.status(200).send({ success: true });
});

module.exports = router;
