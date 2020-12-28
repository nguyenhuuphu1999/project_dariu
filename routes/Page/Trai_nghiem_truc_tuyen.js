var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    
    host       : 'localhost',
    user      : 'root',
    password  : '', 
    database  : 'bnb_experience'
});


router.get('/',function(req,res){
    let sql = "SELECT * FROM `bnb_page_home_trai_nghiem_truc_tuyen`" ;
    connection.query(sql, (error, results, fields) => {
      
      res.json({"data":results})
    });
    // console.log('id ='+req.params.id)
})
module.exports = router;
