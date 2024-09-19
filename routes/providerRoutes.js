const express = require('express');
const router = express.Router();
const {addProvider} = require('../controllers/addProvider');
const {verifyProvider} = require('../controllers/verifyProvider');
const { loginProvider } = require('../controllers/loginProvider');
const { verifyLogin } = require('../controllers/verifyLogin');
// Send OTP
router.post('/sendOTP', addProvider);

router.post('/verifyOTP', verifyProvider);

router.post('/sendOTPLogin', loginProvider);

router.post('/verifyLogin', verifyLogin);

module.exports = router;