const express = require('express');
const router = express.Router();

const categoriesControllers = require('../controllers/categoriesControllers');

// Define the routes
router.get('/', categoriesControllers.getcategoriess);
router.get('/:id', categoriesControllers.getcategory);
router.categories('/', categoriesControllers.createcategory);
router.put('/:id', categoriesControllers.updatecategory);
router.delete('/:id', categoriesControllers.deletecategory);


module.exports = router;