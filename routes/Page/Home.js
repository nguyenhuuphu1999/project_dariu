var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    
    host       : 'localhost',
    user      : 'root',
    password  : '', 
    database  : 'bnb_hottel'
});


router.get('/',function(req,res){
    let sql = "SELECT * FROM `bnb_city`" ;
    connection.query(sql, (error, results, fields) => {
      
      res.json({
          "message":"Data [home] [city]",
          "data":results
          
        })
    });
    // console.log('id ='+req.params.id)
})
module.exports = router;
