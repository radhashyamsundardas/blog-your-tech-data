const router = require ('express').Router();
const userroute = require('./userroute');
const postroute = require('./postroute');
const commentroute = require('./commentroute');


router.use('./userroute', userroute);
router.use('./postroute', postroute);
router.use('./commentroute', commentroute);

module.exports = router;