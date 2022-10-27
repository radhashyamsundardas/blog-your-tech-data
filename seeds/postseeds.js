const {Post} = require('../models');

const postInfo = [{
    title: 'Iskon Temple',
    content: 'i would like to donate to ISKON temple',
    user_id: 1
},
{
    title: 'pray',
    content: 'it is very important to pray every day',
    user_id: 2
},
{
    title: 'donate',
    content: 'It is very pious activity to donate',
    user_id: 3
}

];
const seedPosts = () => Post.bulkCreate(postInfo);
module.exports = seedPosts;