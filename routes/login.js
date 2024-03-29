const express = require('express');
const LoginControllers = require('../controllers/loginControllers');

const router = express.Router();
const validationLogin = require('../middlewares/login');

router.post('/', validationLogin, LoginControllers.login);

module.exports = router;