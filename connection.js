const mysql = require('mysql2');


let db = mysql.createConnection ({
    host:'localhost', 
    user:'root',
    password:'zaxscd0909',
    port: 3306,
    database:'employee_db',
})

db.connect(function(err){
    if (err) throw err
})

module.exports=db