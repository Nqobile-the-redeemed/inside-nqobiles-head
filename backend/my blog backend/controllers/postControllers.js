const Posts = require("../models/postSchema");
const fs = require('fs');
const path = require('path');

// Get all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Posts.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single post
const getPost = async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Create a new post
// const createPost = async (req, res) => {
//     try {
//         const post = new Posts({
//             title: req.body.title,
//             pageLink: req.body.pageLink,
//             tags: req.body.tags,
//             description: req.body.description,
//             summary: req.body.summary,
//             coverImage: req.body.coverImage,
//             refHold: req.body.refHold,
//             detailedDescription: req.body.detailedDescription,
//             categoryGallery: req.body.categoryGallery,
//             categoryFilter: req.body.categoryFilter
//         });
//         await post.save();
//         res.json({ message: "Post created successfully", post: post  });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

const createPost = async (req, res) => {
    const { title, pageLink, tags, description, summary, coverImage, refHold, detailedDescription, categoryGallery, categoryFilter } = req.body;
    try{
        const post = await Posts.create({
            title,
            pageLink,
            tags,
            description,
            summary,
            coverImage,
            refHold,
            detailedDescription,
            categoryGallery,
            categoryFilter
        });
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Update a post
const updatePost = async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        post.title = req.body.title;
        post.pageLink = req.body.pageLink;
        post.tags = req.body.tags;
        post.description = req.body.description;
        post.summary = req.body.summary;
        post.coverImage = req.body.coverImage;
        post.refHold = req.body.refHold;
        post.detailedDescription = req.body.detailedDescription;
        post.categoryGallery = req.body.categoryGallery;
        post.categoryFilter = req.body.categoryFilter;
        await post.save();
        res.json({ message: "Post updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Delete a post
const deletePost = async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        await post.remove();
        res.json({ message: "Post deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
  };