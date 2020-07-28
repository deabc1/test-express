var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/userList/:id', function(req, res, next) {
    console.log('id:'+req.params.id);
    var list=[{id:1,name:'Bob'}];
    res.json(list);
});

router.post('/userList', function(req, res, next) {
    console.log(req.body);
    var list=[{id:1,name:'Bob'}];
    res.json(list);
});


module.exports = router;
