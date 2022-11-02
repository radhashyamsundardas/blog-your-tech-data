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

    router.post ('/login', async(req,res) =>{
        try{
            const user = await User.findOne({
                where: {
                    username: req.body.username
                }
            });

            if (!user){
                res.status(400).json({message: 'no account found'});
                return;
            }
            const password = user.checkPassword(req.body.password);

            if(!password){
                res.status(400).json({message: 'no account found'});
                return;
            }
            
                        req.session.save(() => {
                            req.session.userId = user.id;
                            req.session.username = user.username;
                            req.session.loggedIn = true;
                    
                            res.json({user, message: 'logged in now'});
                        });
                    } catch (err){
                            res.status(400).json({message:'no account found'});
                        }
                    });
    
 



    



