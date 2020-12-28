var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    
    host       : 'localhost',
    user      : 'root',
    password  : '', 
    database  : 'bnb_hottel'
});


router.get('/:id',function(req,res){
    let sql = "SELECT bnb_apartment.* FROM `bnb_city` , bnb_apartment WHERE bnb_city.id = bnb_apartment.id_city and id_city = "+req.params.id+"" ;
    connection.query(sql, (error, results, fields) => {
      console.log(results)
     if(results != ""){
        res.json({
            "message":"Data of city_detail",
            "data":results,
            "err":false
          })
     }else{
        res.json({
            "message":"Data of city_detail",
            "err":"Sorry, the city has entered no data"
          })
     }

        
    });
    // console.log('id ='+req.params.id)
})
module.exports = router;
