const router = require('express').Router();
const {post} = require('../../models');
const withAuth = require('../../utils/auth');
// post request to create new post
router.post('/', withAuth, async(req,res) =>{
const body = req.body;
console.log(body);
try{
    const newPo = await post.create({...body, userId: req.session.userId});
    console.log('new post: newPo');
    res.json(newPo)
} catch (err) {
    console.log('failed', err);
    res.status(500).json(err);
}

});