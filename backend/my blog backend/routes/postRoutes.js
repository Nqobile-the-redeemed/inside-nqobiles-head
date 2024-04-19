const express = require('express');
const router = express.Router();

const postControllers = require('../controllers/postControllers');

// Define the routes
router.get('/', postControllers.getPosts);
router.get('/:id', postControllers.getPost);
router.post('/', postControllers.createPost);
router.put('/:id', postControllers.updatePost);
router.delete('/:id', postControllers.deletePost);


module.exports = router;