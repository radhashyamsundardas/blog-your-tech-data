const router = require('express').Router();
const {Post, Comment, User} = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
    try{
        const putData = await Post.findAll({
            include:[User],
        });
        const posts = putData.map((post) => post.get({plain:true}));
        res.render('all-posts-admin', {posts, loggedIn: req.session.logeedIn});
    } catch (err){
        res.status(500).json(err);
    }
});
