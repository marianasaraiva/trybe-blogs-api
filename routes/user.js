const express = require('express');
const UserControllers = require('../controllers/userControllers');

const router = express.Router();
const validationUsers = require('../middlewares/user');
const authToken = require('../controllers/auth/vallidateJWT');

router.get('/', authToken, UserControllers.findAllUsers);
router.get('/:id', authToken, UserControllers.findUserById);
router.post('/', validationUsers, UserControllers.createUsers);
router.delete('/me', authToken, UserControllers.deleteUserMe);

module.exports = router;