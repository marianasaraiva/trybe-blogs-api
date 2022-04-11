const express = require('express');
const UserControllers = require('../controllers/userControllers');

const router = express.Router();
const validationUsers = require('../middlewares/user');
const authToken = require('../controllers/auth/vallidateJWT');

router.get('/user', authToken, UserControllers.findAllUsers);
router.post('/user', validationUsers, UserControllers.createUsers);

module.exports = router;