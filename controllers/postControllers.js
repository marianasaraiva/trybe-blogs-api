const { BlogPost, Category } = require('../models');

const createPost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    const categoryExist = categoryIds.map((e) => Category.findOne({ where: { id: e } }));
    const result = await Promise.all(categoryExist).then((data) => data);
    if (result.includes(null)) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
    const post = await BlogPost.create({
      userId: id, title, content, published: new Date(), updated: new Date(),
    });

    return res.status(201).json({ id: post.id, userId: id, title, content });
  } catch (error) {
    next(error);
  }
};

module.exports = { createPost };