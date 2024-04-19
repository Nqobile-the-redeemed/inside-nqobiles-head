const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    pageLink: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    refHold:{
        type: String
    },
    detailedDescription: {
        type: String,
        required: true
    },
    categoryGallery: {
        type: [String],
        required: true
    },
    categoryFilter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
}, { timestamps: true });

const Posts = mongoose.model('Posts', postsSchema);

module.exports = Posts;