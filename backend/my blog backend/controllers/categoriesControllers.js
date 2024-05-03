const Categories = require("../models/categorySchema");
const Posts = require("../models/postSchema");
const fs = require('fs');
const path = require('path');

const getCategories = async (req, res) => {
  try {
    const categories = await Categories.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Categories.findById(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createCategory = async (req, res) => {
  const {title, tags, shortDescription, coverImage, categoryLink, posts, detailedDescription, categoryGallery} = req.body;
  try {
		// Fetch post documents based on provided IDs
    const foundPosts = await Posts.find({ _id: { $in: posts } });

    console.log(foundPosts);
    
    // Map the post documents to an array of post IDs
    const postIds = foundPosts.map(post => post._id);
        
	  const category = await Categories.create({
            title,
            tags,
            shortDescription,
            coverImage,
            categoryLink,
            posts: postIds, // Use the array of post IDs here
            detailedDescription,
            categoryGallery
        });
    res.status(201).json(category);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const category = req.body;
  try {
    const updatedCategory = await Categories.findByIdAndUpdate(id, category, {
      new: true,
    });
    res.status(200).json(updatedCategory);
    } catch (error) {
    res.status(409).json({ message: error.message });
    }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Categories.findById(id);
    const imagePath = path.join(__dirname, `../public/uploads/${category.image}`);
    fs.unlinkSync(imagePath);
    await Categories.findByIdAndDelete(id);
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
