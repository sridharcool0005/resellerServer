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
const helpController= require('../controllers/helpdeskcontroller');
const bulkprofilecontroller=require('../controllers/bulkprofilecontroller');
const billingcontroller=require('../controllers/billingcontroller');


const APIRoutes = function (passport) {
  // POST Routes.
  router.post('/signup', AuthController.signUp);
  router.post('/authenticate', AuthController.authenticateUser);
  router.get('/partner/:partner_id/getClients', clientController.getclients);
  router.get('/partner/:partner_id/getuserdata', clientController.getuserdata);
  router.post('/partner/:partner_id/getuserDetails', clientController.getuserDetails);
  router.put('/partner/:partner_id/updateclientData',clientController.updateclientData);
  router.post('/partner/:partner_id/deleteclient',clientController.deleteclient);
  router.post('/addPackages', packageController.addPackage);
  router.put('/updatePackage', packageController.updatePackage);
  router.get('/getAllPackages', packageController.getAllPackages);
  router.post('/getPackageDetails', packageController.getPackageDetails);
  router.post('/deletePackage', packageController.deletePackage);
  router.post('/sendSMS', clientController.sendSMS);
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
  router.post('/createbulkprofiles', bulkprofilecontroller.createbulkprofiles);
  router.post('/updateclientStatus', clientController.updateclientStatus);
  router.post('/getclientsbyfilter', clientController.getclientsbyfilter);
  router.get('/getsmspackagelist', billingcontroller.getsmspackagelist)
    router.post('/getclientdetails', billingcontroller.getclientdetails);
    router.post('/getOrderId',billingcontroller.getOrderId);
    router.get('/getpremiumplanlist',billingcontroller.getpremiumplanlist);
    router.post('/postofficeApi', clientController.postofficeApi);
    router.post('/partner/:partner_id/getplanexpirycontacts',analyticsController.getplanexpirycontacts);
    router.get('/partner/:partner_id/getplanexpirycontactsAll', analyticsController.getplanexpirycontactsAll);
    router.post('/insertnotifications', analyticsController.insertnotifications);
    router.post('/partner/:partner_id/registeredcontactstracking',analyticsController.registeredcontactstracking);
    router.get('/partner/:partner_id/getTodayregisterdData',analyticsController.getTodayregisterdData);
    router.get('/fetchProfessions', clientController.fetchProfessions);
    router.get('/getAllpremiumplans', packageController.getAllportal_premiumplans_master);
    router.post('/getpremiumplandetails', packageController.getpremiumplandetails);
    router.post('/updatePremiumPlan', packageController.updatePremiumPlan);
    router.post('/deletePremiumPack', packageController.deletePremiumPack);
  // GET Routes.
  router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, UserController.index));
  router.get('/admin', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AdminController.index));

  return router;
};

module.exports = APIRoutes;