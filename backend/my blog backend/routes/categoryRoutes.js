const express = require('express');
const router = express.Router();

const categoriesControllers = require('../controllers/categoriesControllers');

// Define the routes
router.get('/', categoriesControllers.getCategories);
router.get('/:id', categoriesControllers.getCategory);
router.post('/', categoriesControllers.createCategory);
router.put('/:id', categoriesControllers.updateCategory);
router.delete('/:id', categoriesControllers.deleteCategory);


module.exports = router;



