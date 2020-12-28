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
    let sql = "SELECT bnb_apartment_details.* FROM `bnb_apartment_details`,bnb_apartment WHERE bnb_apartment.id = bnb_apartment_details.id_apartment and bnb_apartment_details.id_apartment= "+req.params.id+"" ;
    connection.query(sql, (error, results, fields) => {
      console.log(results)
     if(results != ""){
        res.json({
            "message":"Data of Apartment_detail",
            "data":results,
            "err":false
          })
     }else{
        res.json({
            "message":"Data of Apartment_detail",
            "err":"Sorry, the city has entered no data"
          })
     }

        
    });
    // console.log('id ='+req.params.id)
})
module.exports = router;
