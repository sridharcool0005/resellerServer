var mysql = require('mysql');
const request = require('request');
var http = require("https");
const orderIdApi = 'https://www.portalapi.nutansms.in/getOrderID.php';

var database = mysql.createConnection({
  host: 'localhost',
  user: 'smsdba_smsdba2',
  password: 'nnv9I^b7KantGk',
  database: 'smsdba_ntsmsdb',
  debug: false,

});


module.exports.getsmspackagelist = async function (req, res) {

  query = "SELECT * FROM portal_smspackage_master "
  await database.query(query, function (err, result, fields) {
    if (err) throw err;
    if (!result.length) {
      res.status(200).send({ status: 'false', message: 'No data found' });
    } else {
      res.status(200).send({ status: 'success', data: result })
    }
  });
}


module.exports.getpremiumplanlist = async function (req, res) {

  query = "SELECT * FROM `portal_premiumplans_master` WHERE package_id like 'P1%'"
  await database.query(query, function (err, result, fields) {
    if (err) throw err;
    if (!result.length) {
      res.status(200).send({ status: 'false', message: 'No data found' });
    } else {
      res.status(200).send({ status: 'success', data: result })
    }
  });
}


module.exports.getclientdetails= async function (req, res) {
  const partner_id=req.params.partner_id;
const {mobilenumber}=req.body;
const query="select a.client_id,a.user_regn_channel,a.user_authkey_old,b.client_firstname, b.client_lastname from portal_users a,portal_clients_master b where a.user_mobile_number =? and b.client_mobile_number =? and a.partner_id =?"
await database.query(query, [mobilenumber,mobilenumber,partner_id], function (err, result, fields) {
  if (err) throw err;

  if (!result.length) {
    res.status(201).send({ status: 'false', message: 'No data found' });
  }else{
    res.send({
      "code": 200,
      status: 'success',
      "data": result
    });
  }
 
});

}


module.exports.getOrderId = async (req, res) => {
 
    const { package_id,coupon_id,sales_channel,client_id,authkey} = req.body;
    console.log(package_id)
    const options = {
      url: orderIdApi,
      qs: { client_id: client_id, sales_channel:sales_channel },
      headers: {
        'Authorization': authkey
      },
      body: {
        package_id: package_id,
        coupon_id: coupon_id,

      },
      json: true,
      method: 'Post',
    }
    console.log(options)
    request(options, (err, response, body) => {
      // console.log(err)
      // console.log(response)
      console.log(body)

      if (err) {
        res.json(err)
      } else {
        res.json(body)

      }
    });
  
}

