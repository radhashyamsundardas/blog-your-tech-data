const seedUser = require('./userseeds');
const seedPost = require('./postseeds');
const seedComment = require('./commentseeds');

const sequelize = require('../config/connection');


const seedEverything = async() => {
    await sequelize.sync({force: true});
    await seedUser();
    await seedPost();
    await seedComment();
    process.exit(0);
};

seedEverything();