// const { BlogPost, PostsCategory } = require('../models');
const { BlogPost, Category } = require('../models');

const createPost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const categoryExist = await categoryIds.every(async (id) => {
      const result = await Category.findOne({ where: { id } });
      // console.log(result);
      return result;
    });
    // console.log(categoryExist);
    if (!categoryExist) {
      return res.status(404).json({ message: '"categoryIds" not found' });
    }
    const post = await BlogPost.create({ title, content });
    // console.log('post', post);

    return res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = { createPost };