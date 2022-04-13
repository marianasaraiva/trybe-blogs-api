const express = require('express');
const PostControllers = require('../controllers/postControllers');

const router = express.Router();
const validationPost = require('../middlewares/post');
const updatedPost = require('../middlewares/updatePost');
const authToken = require('../controllers/auth/vallidateJWT');

router.get('/:id', authToken, PostControllers.findPostById);
router.put('/:id', updatedPost, authToken, PostControllers.updatePostsById);
router.delete('/:id', authToken, PostControllers.deletePostsById);
router.get('/', authToken, PostControllers.findAllPosts);
router.post('/', validationPost, authToken, PostControllers.createPost);

module.exports = router;