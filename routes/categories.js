const express = require('express');
const CategoriesControllers = require('../controllers/categoriesControllers');

const router = express.Router();
const validationCategories = require('../middlewares/categories');
const authToken = require('../controllers/auth/vallidateJWT');

router.get('/categories', authToken, CategoriesControllers.findAllCategories);
router.post('/categories', validationCategories, authToken, CategoriesControllers.createCategory);

module.exports = router;