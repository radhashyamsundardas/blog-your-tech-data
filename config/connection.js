const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.blog_db,
  process.env.root,
 '',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);
// const Sequelize = require('sequelize');
// require('dotenv').config();

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.'blog_db',
//     process.env.'root',
//     '',
//     {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     }
//   );
// }

module.exports = sequelize;


