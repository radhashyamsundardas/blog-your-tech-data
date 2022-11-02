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


router.get('/post/:id',withAuth, async (req,res) => {
    try{
        const postInfo = await Post.findOne({
            where: {id: req.params.id},
            include:[
                User,{
                    model:Comment,
                    include: [User],
                },
            ],
        });

        if (postData){
            const posts= postInfo.get({ plain: true});
            console.log(posts)
            res.render('single-post', {posts, loggedIn: req.session.loggedIn});
        } else {
            res.sendStatus(400).end();
        }
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/login',  (req,res) => {
      if (req.session.logeedIn){
        res.redirect('/dashboard');
        return;
      }
      res.render('login');
});

router.get('./signup', (req,res) =>{
    if (req.session.logeedIn){
        res.redirect('/dashboard');
        return;
    }
    res.render('signup')
});


module.exports = router;
