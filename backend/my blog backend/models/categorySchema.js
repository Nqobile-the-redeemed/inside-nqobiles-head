const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
    subject: String,
    icon: String
});

const categoriesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tags: {
        type: [tagSchema],
    },
    shortDescription: {
        type: String,
    },
    coverImage: {
        type: String,
    },
    categoryLink: {
        type: String,
    },
    posts: {
        type: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Posts'
        }
    ]
    },
    detailedDescription: {
        type: String,
    },
    categoryGallery: {
        type: [String]
    }
}, { timestamps: true });

const Categories = mongoose.model('Categories', categoriesSchema);

module.exports = Categories;