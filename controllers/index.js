const router = require('express').Router();
const apiRoutes = require('./api');
const homeroute = require('./homeroute');
const dashroutes = require('./dashroutes');


router.use('./api', apiRoutes);
router.use('./dashroutes', dashroutes);
router.use('./homeroute', homeroute);


router.use((req,res)=>{
    res.status(404).end();
});


module.exports = router;