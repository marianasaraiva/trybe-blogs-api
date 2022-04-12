// 'use strict';
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('BlogPosts', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       title: {
//         allowNull: false,
//         type: Sequelize.STRING
//       },
//       content: {
//         allowNull: false,
//         type: Sequelize.STRING
//       },
//       userId: {
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'Users',
//           key: 'id',
//         },
//         onDelete: 'CASCADE',
//       },
//       published: {
//         allowNull: false,
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.NOW,
//       },
//       updated: {
//         allowNull: false,
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.NOW,
//       }
//     }, { timestamps: false });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('BlogPosts');
//   }
// };

// // 20220411000737-create-blog-post.

// 'use strict';
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('PostsCategories', {
//       postId: {
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'BlogPosts',
//           key: 'id',
//         },
//         onDelete: 'CASCADE',
//         primaryKey: true,
//       },
//       categoryId: {
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'Categories',
//           key: 'id',
//         },
//         onDelete: 'CASCADE',
//         primaryKey: true,
//       },
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('PostsCategories');
//   }
// };

// 20220411000901-create-post-category