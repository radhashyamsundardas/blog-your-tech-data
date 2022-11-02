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


router.put ('./:id', withAuth, async(req,res) => {
    try{
        console.log("req.body");
        const [rows] = awaitpost.update(req.body,{
            where:{
                id:req.params.id,
            },
        });
        if(rows > 0){
            res.status(200).end();
        } else{
            res.status(404).end();
        }
    } catch (err){
        res.status(500).json(err);
    }
});

router.delete ('./:id', withAuth, async(req,res) => {
    try{
        console.log("req.body");
        const [rows] = post.destroy({
            where:{
                id:req.params.id,
            },
        });
        if(rows > 0){
            res.status(200).end();
        } else{
            res.status(404).end();
        }
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;



