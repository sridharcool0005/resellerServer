
var mysql = require('mysql');
var constants = require('../constants/constant');
var emailservice=require('../routes/mailer');
var http= require('http');
const crypto = require("crypto");
const request = require('request');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'smsdba_smsdba2',
    password: 'nnv9I^b7KantGk',
    database: 'smsdba_ntsmsdb',
    debug: false,
  
  });

module.exports.getAllTickets = async function (req, res) {
    query = "SELECT * FROM `portal_users_query_feedback`"
    await db.query(query, function (err, result, fields) {
        if (err) throw err;

        res.send({
            "code": 200,
            "success": "clients data ",
            "data": result
        });
    });

}

module.exports.updateticketstatus = async function (req, res) {
    
    const {query_id,status}=req.body
    var sql = "UPDATE portal_users_query_feedback SET  status =?  WHERE  query_id =?";
    await db.query(sql,[status,query_id] ,function (err, result, fields) {
       
        if (err) throw err;
        res.send({
            "code": 200,
            "message": "Data updated Sucessfully",
        });
    });
}

module.exports.getDataByQuery = async function (req, res) {
    const {status,fromDate,toDate} = req.body;
    query = "select * from `portal_users_query_feedback` where (status =? and ( created_on BETWEEN ? AND ? + interval 1 day)) "
    await db.query(query,[status,fromDate,toDate],function (err, result, fields) {
        if (err) throw err;
        if (!result.length)  {
            res.status(200).send({status:'false' ,message: 'no data Found' });
          }else{
            res.status(200).send({status:'success' ,data:result})
          }
        
    });
}
 
