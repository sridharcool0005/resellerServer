'use strict';

const router = require('express').Router();

const config = require('../config');
const allowOnly = require('../services/routesHelper').allowOnly;
const clientController = require('../controllers/clientcontroller');
const AuthController = require('../controllers/authController');
const UserController = require('../controllers/userController');
const AdminController = require('../controllers/adminController');
const packageController = require('../controllers/packageController');
const analyticsController = require('../controllers/analyticsController');
const helpController = require('../controllers/helpdeskcontroller');
const bulkprofilecontroller = require('../controllers/bulkprofilecontroller');
const billingcontroller = require('../controllers/billingcontroller');
const bulksmsController = require('../controllers/bulksmsController');


const APIRoutes = function (passport) {
  // POST Routes.
  router.post('/signup', AuthController.signUp);
  router.post('/authenticate', AuthController.authenticateUser);
  router.get('/partner/:partner_id/getClients', clientController.getclients);
  router.get('/partner/:partner_id/getuserdata', clientController.getuserdata);
  router.post('/partner/:partner_id/getuserDetails', clientController.getuserDetails);
  router.put('/partner/:partner_id/updateclientData', clientController.updateclientData);
  router.post('/partner/:partner_id/deleteclient', clientController.deleteclient);
  router.post('/addPackages', packageController.addPackage);
  router.put('/updatePackage', packageController.updatePackage);
  router.get('/getAllPackages', packageController.getAllPackages);
  router.post('/getPackageDetails', packageController.getPackageDetails);
  router.post('/deletePackage', packageController.deletePackage);
  router.post('/partner/:partner_id/sendSMS', clientController.sendSMS);
  router.get('/getpurchaseData', analyticsController.getpurchaseData);
  router.post('/getpurchaseDetailed', analyticsController.getpurchaseDetailed);
  router.post('/getSalesData', analyticsController.getSalesData);
  router.post('/getpurchaseDataByDate', analyticsController.getpurchaseDataByDate);
  router.put('/updatePaymentStatus', analyticsController.updatePaymentStatus);
  router.post('/activationEmail', clientController.activationEmail);
  router.post('/partner/:partner_id/addnewClient', clientController.addnewClient);
  router.get('/getAllTickets', helpController.getAllTickets);
  router.put('/updateticketstatus', helpController.updateticketstatus);
  router.post('/getDataByQuery', helpController.getDataByQuery);
  router.post('/partner/:partner_id/createbulkprofiles', bulkprofilecontroller.createbulkprofiles);
  router.post('/updateclientStatus', clientController.updateclientStatus);
  router.post('/partner/:partner_id/getclientsbyfilter', clientController.getclientsbyfilter)
  router.get('/getsmspackagelist', billingcontroller.getsmspackagelist)
  router.post('/partner/:partner_id/getclientdetails', billingcontroller.getclientdetails);
  router.post('/getOrderId', billingcontroller.getOrderId);
  router.get('/getpremiumplanlist', billingcontroller.getpremiumplanlist);
  router.post('/postofficeApi', clientController.postofficeApi);
  router.post('/partner/:partner_id/getplanexpirycontacts', analyticsController.getplanexpirycontacts);
  router.get('/partner/:partner_id/getplanexpirycontactsAll', analyticsController.getplanexpirycontactsAll);
  router.post('/partner/:partner_id/insertnotifications', analyticsController.insertnotifications);
  router.post('/partner/:partner_id/registeredcontactstracking', analyticsController.registeredcontactstracking);
  router.get('/partner/:partner_id/getTodayregisterdData', analyticsController.getTodayregisterdData);
  router.get('/getAllpremiumplans', packageController.getAllportal_premiumplans_master);
  router.post('/getpremiumplandetails', packageController.getpremiumplandetails);
  router.get('/fetchProfessions', clientController.fetchProfessions);
  router.post('/updatePremiumPlan', packageController.updatePremiumPlan);
  router.post('/deletePremiumPack', packageController.deletePremiumPack);
  router.get('/partner/:partner_id/getuserdataCount', clientController.getuserdataCount);
    router.get('/partner/:partner_id/userdataCountweekly', clientController.getuserdataCountweekly);
  router.get('/partner/:partner_id/getplanexpirytoday', clientController.getplanexpirytoday);
  router.get('/partner/:partner_id/getplanexpirynextweek', clientController.getplanexpirynextweek);
  router.get('/partner/:partner_id/getclientscount', clientController.getclientscount);
  router.post('/partner/:partner_id/ChangePassword', clientController.ChangePassword);
  router.get('/partner/:partner_id/getrateCards', packageController.getrateCards);
  router.post('/partner/:partner_id/getpacksbyratecard', packageController.getpacksBYRatecard);
  router.get('/partner/:partner_id/getPremiumRatecards', packageController.getPremiumRatecards);
  router.post('/partner/:partner_id/getPremiumpacksByRateCard', packageController.getPremiumpacksByRateCard);
  router.post('/partner/:partner_id/sendPushnotifySMS', bulksmsController.sendBulkSMS);
  router.post('/partner/:partner_id/sendSingleSMS', bulksmsController.sendSMS);
  router.post('/partner/:partner_id/sendpushnotification', bulksmsController.insertnotifications);
  router.get('/partner/:partner_id/getusersfeedbackqueries',clientController.getusersfeedbackqueries);
  router.post('/submitcustomerdetails', clientController.submitcustomerdetails);
  router.post('/partner/:partner_id/verifyOTP', clientController.verifyAndSaveDetails);
  // GET Routes.
  router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, UserController.index));
  router.get('/admin', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AdminController.index));

  return router;
};

module.exports = APIRoutes;