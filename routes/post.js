const express = require('express');
const PostControllers = require('../controllers/postControllers');

const router = express.Router();
const validationPost = require('../middlewares/post');
const authToken = require('../controllers/auth/vallidateJWT');

router.get('/post', authToken, PostControllers.findAllPosts);
router.post('/post', validationPost, authToken, PostControllers.createPost);

module.exports = router;