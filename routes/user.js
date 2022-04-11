const express = require('express');
const UserControllers = require('../controllers/userControllers');

const router = express.Router();
const validationUsers = require('../middlewares/user');

router.get('/user', UserControllers.findAllUsers);
router.post('/user', validationUsers, UserControllers.createUsers);

module.exports = router;