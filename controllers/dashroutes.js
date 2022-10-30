const router = require('express').Router();
const sequelize = require('../config/connection');
const {comment, post, user} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, (req,res) => {
    post.findAll({
        where: {
            user_id: request.session.user_id
        },
        attributes: [
            'id',
            'title',
            'content',
            'created_by'
        ],
        includes: [{
            model: comment,
            attributes: ['id','user_id', 'post_id', 'created_by', 'comment'],
            includes:{
                model: user,
                attributes: ['username']
            }
        }]
        .then (postData => {
            const post = postData.map(post => post.get({plain:true}));
            res.render('dashboard', {posts,loggedIn:true});
        })
        .catch(error =>{
            console.log(error);
            res.status(500).json(err);
        });




    })
})