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


