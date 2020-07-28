var _=require('../util');
var userList =function (req, res) {
    console.log('test ++++++++');
    console.log(req.body);
    console.log(_);
    var sql='select id,LOGIN_ID,FULL_NAME from CM_USERS where DEL_STATUS=0 ';
    _.db.query(sql,[],function (err,doc) {
        console.log(err);
        console.log(doc);
        res.json(doc);
    });
    //var list = [{id: 1, name: 'Bob'}];
    //res.json(list);
};


module.exports = {
userList:userList
};

