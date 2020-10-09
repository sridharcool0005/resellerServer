var mysql = require('mysql');
const bulkcontactsModel = require('../models/bulkprofilecreateModel');
const crypto = require("crypto");
const db = require('../services/database');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const request = require('request');

var database = mysql.createConnection({
  host: 'localhost',
  user: 'smsdba_smsdba2',
  password: 'nnv9I^b7KantGk',
  database: 'smsdba_ntsmsdb',
  debug: false,

});

// module.exports.createbulkprofiles = async (req, res) => {

//   const password = '121212'
//   const hash = bcrypt.hashSync(password, saltRounds);

//   const { formdata } = req.body;
//   var count = '';
//   var promiseSaveArr = [];
//   if (Array.isArray(formdata)) {
//     formdata.forEach(obj => {
//       count = formdata.length
      
//       const smsportal_authkey = crypto.randomBytes(16).toString("hex");
//       const agent_id = crypto.randomBytes(4).toString("hex");
//       // create excel model

//       var newTemplate = {
//         agent_id: agent_id,
//         smsportal_authkey: smsportal_authkey,
//         firstname: obj.firstname,
//         lastname: obj.lastname,
//         email: obj.email,
//         mobilenumber: obj.mobilenumber,
//         country_code: '91',
//         profession: obj.profession,
//         pin: hash,
//         password:password
//       };

//       const query = "INSERT INTO portal_bulk_account_db SET ?"
//       database.query(query,newTemplate, function (err, result, fields) {
//         if (err) throw err;
//         promiseSaveArr.push(newTemplate)

//       });
//     });
//   }

//   return await Promise.all(promiseSaveArr).then(result => {

//     res.status(200).send({ success: true, message: count + ' ' + 'profiles created  sucessfully' });
//   }).catch((err) => {
   
//     res.status(400).send({ success: false, message: err.message })
//   });

// };



module.exports.createbulkprofiles = async (req, res) => {

  const api = 'https://www.portalapi.nutansms.in/addNewClient.php?sales_channel=smsportal';

  const { formdata } = req.body;

  var count = '';
  var promiseSaveArr = [];
  if (Array.isArray(formdata)) {
    formdata.forEach(obj => {
      count = formdata.length
      const smsportal_authkey = crypto.randomBytes(16).toString("hex");
      const agent_id = crypto.randomBytes(4).toString("hex");

      const options = {
        url: api,
        body: {
          client_id: agent_id,
          client_authkey: smsportal_authkey,
          client_firstname: obj.firstname,
          client_lastname: obj.lastname,
          client_mobile_number: obj.mobilenumber,
          client_role: obj.profession
        },
        headers: {
          'Authorization': 'bh#xg6sf(gs67nsbsf99gsf%nn'
        },
        json: true,
        method: 'POST',
      }

      promiseSaveArr.push(options)
      request(options, (err, response, body) => {
        if (err) {
          res.json(err)
        } else {
          console.log(body)
        }
      });

    });

  }

  return await Promise.all(promiseSaveArr).then(result => {
    //  console.log(result,'result')
    res.status(200).send({ success: true, message: count + ' ' + 'profiles created  sucessfully' });
  }).catch((err) => {

    res.status(400).send({ success: false, message: err.message })
  });

}
