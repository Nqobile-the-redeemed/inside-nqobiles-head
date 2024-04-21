const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    pageLink: {
        type: String,
    },
    tags: {
        type: [String],
    },
    description: {
        type: String,
    },
    summary: {
        type: String,
    },
    coverImage: {
        type: String,
    },
    refHold:{
        type: String
    },
    detailedDescription: {
        type: String,
    },
    categoryGallery: {
        type: [String]
    },
    // categoryFilter: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Category'
    // }
}, { timestamps: true });

const Posts = mongoose.model('Posts', postsSchema);

module.exports = Posts;