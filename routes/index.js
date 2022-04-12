const express = require('express');

const login = require('./login');
const users = require('./user');
const categories = require('./categories');
const post = require('./post');

const router = express.Router();

router.use('/user', users);
router.use('/login', login);
router.use('/categories', categories);
router.use('/post', post);

module.exports = router;