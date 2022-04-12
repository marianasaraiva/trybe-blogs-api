module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategories', {}, { timestamps: false });
  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category,
      {
        as: 'category',
        through: PostsCategory,
        foreignKey: 'id',
        otherKey: 'id',
      });
    models.Category.belongsToMany(models.BlogPost,
      {
        as: 'blogPost',
        through: PostsCategory,
        foreignKey: 'id',
        otherKey: 'id',
      });
  };
  return PostsCategory;
};