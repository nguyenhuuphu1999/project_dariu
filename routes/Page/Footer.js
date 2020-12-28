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
    let sql = "SELECT * FROM `bnb_footer`" ;
    connection.query(sql, (error, results, fields) => {
      
      res.json({"data":results})

      console.log(results)
    });
    // console.log('id ='+req.params.id)
})
module.exports = router;
