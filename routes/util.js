var db=null;
var mysql={
    "orm": "sequelize",
    "type": "mysql",
    "host": "d",
    "port": 3306,
    "user": "jtoadev",
    "password": "KuxIsi848E",
    "database": "jtoa"
};
console.log(require('C:/DE/common/mysql'));
db= require('../../common/mysql')(mysql);
console.log(db);

module.exports = {
    db:db
};
