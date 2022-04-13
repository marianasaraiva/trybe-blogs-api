const { BlogPost, Category, User } = require('../models');

const findAllPosts = async (req, res, next) => {
  try {
    const post = await BlogPost.findAll({
      include: 
        [{ model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });

    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const findPostById = async (req, res, next) => {
  try {
    const { id } = req.params; 
    const [post] = await BlogPost.findAll({
      where: { id },
      include: 
        [{ model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const updatePostsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, categoryIds } = req.body;

    if (categoryIds) return res.status(401).json({ message: 'Categories cannot be edited' });

    await BlogPost.update({ title, content }, { where: { id },
      returning: true });
    
    const findByOne = await BlogPost.findOne({ 
      where: { id },
      attributes: { exclude: ['published', 'updated'] },
      include: { model: Category, as: 'categories', through: { attributes: [] } },
    });

    if (findByOne.userId !== req.user.id) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    
    return res.status(200).json(findByOne); 
  } catch (error) {
    next(error);
  }
};

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

const deletePostsById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const findByOne = await BlogPost.findOne({ where: { id } });

    if (!findByOne) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    
    if (findByOne.userId !== req.user.id) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    await BlogPost.destroy({ where: { id } });
    
    return res.status(204).end(); 
  } catch (error) {
    next(error);
  }
};

module.exports = { findAllPosts, findPostById, updatePostsById, createPost, deletePostsById };