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
    let sql = "SELECT name_footer_gio_thieu FROM `bnb_footer` , bnb_footer_gio_thieu where bnb_footer.id = bnb_footer_gio_thieu.id_footer and bnb_footer_gio_thieu.id_footer = 4" ;
    connection.query(sql, (error, results, fields) => {
      
      res.json({"data":results})
    });
    // console.log('id ='+req.params.id)
})
module.exports = router;
