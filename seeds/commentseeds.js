const comment =  require('../models');

const commInfo = [{
    comment_text: 'This is assignment 14',
    user_id: 1,
    post_id: 1
},
   { comment_text: 'It is going to be hard',
    user_id: 2,
    Post_id: 2
},
    {
        comment_text: 'Lets see how far i can go',
        user_id: 3,
        post_id: 3
    }
];


const seedComments = ()=> Comment.bulkCreate(commInfo);
modules.export = seedComments;