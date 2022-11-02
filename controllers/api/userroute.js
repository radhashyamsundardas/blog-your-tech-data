const{user, User} = require('../../models');
const router = require('express').Router();

router.post ('/', async(req,res) =>{
    try{
        const nuser = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.userId = nuser.id;
            req.session.username = nuser.username;
            req.session.loggedIn = true;
    
            res.json(nuser);
        });
    } catch (err){
            res.status(500).json(err);
        }
    });
    



