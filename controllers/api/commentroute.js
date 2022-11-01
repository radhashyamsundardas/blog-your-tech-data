const router = require('express').Router();
const {comment, beforeDestroy} = require('../../models/comment');
const withAuth = require('../../utils/auth');
// get route for comment info
router.get('/', withAuth, async(req,res) => {
try{
    const commentInfo = await comment.findAll({
        include: [User],
    });
    const comment = commentInfo.map((comment)=> comment.get({plain:true}));
    console.log(comment);
    res.render('single-post', {comment, loggedIn: req.session.loggedIn});
} catch (err){
    res.status(500).json(err);
}
});

// post route for new comment

router.post('/', withAuth, async(req,res) => {
    try{
        const newComm = await comment.create({
            ...beforeDestroy,
            userId: req.session.userId,
        });
        res.json(newComm)
    } catch (err){
        res.status(500).json(err);
    }
    });

    module.exports = router;


