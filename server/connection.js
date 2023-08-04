var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootpass",
    database: "sd1",

});

module.exports=con;