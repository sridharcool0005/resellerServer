(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Analytics/analytic/analytic.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Analytics/analytic/analytic.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-tab-group mat-align-tabs=\"center\">\r\n\r\n  <mat-tab label=\"UsageAnalysis\" *ngIf=\"role =='admin'\"><app-usage-analysis></app-usage-analysis></mat-tab>\r\n  <mat-tab label=\"PurchaseAnalysis\" *ngIf=\"role =='admin'\"><app-purchase-analysis></app-purchase-analysis></mat-tab>\r\n  <mat-tab label=\"SalesAnalysis\" *ngIf=\"role =='admin'\"><app-sales-analysis></app-sales-analysis></mat-tab>\r\n  <mat-tab label=\"PlanExpiryTracking\"><app-planexpirytracking></app-planexpirytracking></mat-tab>\r\n  <mat-tab label=\"Registration Tracking\"><app-registrationtracking></app-registrationtracking></mat-tab>\r\n\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Analytics/planexpirytracking/planexpirytracking.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Analytics/planexpirytracking/planexpirytracking.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">\n    Plan expiry Tracking</h3>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 \">\n        <form (ngSubmit)=\"regform.form.valid&&getplanexpirycontacts(regform.form.value)\" #regform=\"ngForm\">\n\n          <input type=\"date\"  name=\"fromDate\" placeholder=\"FromDate\" ngModel>&nbsp;\n          <input type=\"date\" name=\"toDate\" placeholder=\"ToDate\" ngModel>&nbsp;\n\n          <input type=\"submit\">\n        </form>\n      </div>\n      <div class=\"col-md-6 mubutn\" >\n        <input class=\"search\"  type=\"text\" [(ngModel)]=\"searchText\" placeholder=\" Search By Filter\"\n        aria-label=\"Search\" >\n&nbsp;\n\n\n<select class=\"browser-default custom-select filter\" (change)=\"getclientsbyfilter($event.target.value)\">\n  <option selected value=\"\">Select Partner</option>\n  <option  value=\"All\">ALL</option>\n  <option value=\"{{partner.partner_id}}\" *ngFor=\"let partner of partnerData\">{{partner.user_name}}</option>\n</select>\n\n  <button mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\" (click)=\"selectclients()\" matTooltip=\" Add Push notification\"\n  matTooltipClass=\"example-tooltip-red\" aria-label=\"Button that shows a red tooltip\">\n  <span class=\"material-icons\">\n    notifications\n    </span>\n  </button>\n\n\n\n        <img class=\"xlicon media \" src=\"assets/img/xlicon.png\" (click)=\"exportAsXLSX()\">\n\n\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div id=\"table\" class=\"table-editable\">\n\n      <table class=\"table table-bordered table-responsive-md table-striped text-center table-media\">\n        <tr style=\"background-color: darkblue;color:white\">\n          <th class=\"text-center\">\n            Client ID</th>\n          <th class=\"text-center\">\n            FullName</th>\n            <th class=\"text-center\">\n              MobileNumber</th>\n          <th class=\"text-center\">District</th>\n          <th class=\"text-center\">Account_Type</th>\n          <th class=\"text-center\">Date of Activation</th>\n          <th class=\"text-center\">Date of Expiry</th>\n          <th  class=\"text-center\">Action\n          </th>\n          <th  class=\"text-center\">\n            Select All<input type=\"checkbox\" name=\"all\" [checked]=\"allToppings\" (change)=\"selectAllToppings($event.target.checked,personList)\"/>\n          </th>\n        </tr>\n        <tr *ngFor=\"let person of personList| filter: {client_id: searchText, client_firstname:searchText,  client_lastname: searchText,user_mobile_number:searchText,account_type:searchText}; let id=index;\" #loaded>          <td>\n            {{person.client_id}}\n          </td>\n          <td>\n            {{person.client_firstname}} {{person.client_lastname}}\n          </td>\n          <td>\n            {{person.user_mobile_number}}\n          </td>\n          <td>\n            {{person.client_district}}\n          </td>\n          <td>{{person.account_type}}</td>\n          <td>\n             {{person.plan_activation_date| date: 'dd/MM/yyyy'}}\n          </td>\n          <td>\n            {{person.plan_expiry_date| date: 'dd/MM/yyyy'}}\n         </td>\n\n\n\n\n          <!-- <td>\n            <a> <span class=\"material-icons\" [routerLink]=\"['/client/viewDetail/',person.client_id]\"   matTooltip=\"View Detailed\"\n                matTooltipClass=\"example-tooltip-red\" aria-label=\"Button that shows a red tooltip\">\n                visibility\n              </span>\n            </a>\n          </td> -->\n          <td>\n            <img class=\"pointer\" src=\"assets/img/whatsaapicon.webp\" width=\"80%\" [routerLink]=\"['/downloadapksendsms',person.user_mobile_number]\">\n          </td>\n\n          <td>\n            <input type=\"checkbox\" name=\"sizecb[]\" value=\"{{person.id}}\" [checked]=\"allToppings\" (change)=\"selectNewTopping($event.target.checked,person)\"/>\n          </td>\n        </tr>\n      </table>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Analytics/purchase-analysis/purchase-analysis.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Analytics/purchase-analysis/purchase-analysis.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">Purchase Analysis</h3>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 \">\n        <form (ngSubmit)=\"regform.form.valid&&getpurchaseDataByDate(regform.form.value)\" #regform=\"ngForm\">\n\n          <input type=\"date\"  name=\"fromDate\" placeholder=\"FromDate\" ngModel>&nbsp;\n          <input type=\"date\" name=\"toDate\" placeholder=\"ToDate\" ngModel>&nbsp;\n\n          <input type=\"submit\">\n        </form>\n      </div>\n      <div class=\"col-md-6 mubutn\">\n        <input type=\"text\" class=\"search\" [(ngModel)]=\"client_firstname\" placeholder=\" Search By Name\" aria-label=\"Search\"\n        (input)=\"search()\">\n        <img class=\"xlicon media \" src=\"assets/img/xlicon.png\" (click)=\"exportAsXLSX()\">\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div id=\"table\" class=\"table-editable\">\n\n      <table class=\"table table-bordered table-responsive-md table-striped text-center table-media\">\n        <tr style=\"background-color: darkblue;color:white\">\n          <th class=\"text-center\">\n            Client ID</th>\n          <th class=\"text-center\">\n            FullName</th>\n          <th class=\"text-center\">DateofPurchase</th>\n          <th class=\"text-center\">Amount Paid</th>\n          <th class=\"text-center\">SMS Credits</th>\n\n          <th class=\"text-center\">Payment Status</th>\n          <th class=\"text-center\">Add Balance (Yes/No)</th>\n\n          <th colspan=\"2\" class=\"text-center\">Action\n          </th>\n\n        </tr>\n        <tr *ngFor=\"let person of personList; let id = index\">\n          <td>\n            {{person.client_id}}\n          </td>\n          <td>\n            {{person.client_firstname}}{{person.client_lastname}}\n          </td>\n          <td>\n             {{person.txn_date| date: 'dd/MM/yyyy'}}\n          </td>\n          <td>{{person.total_amount_paid}}</td>\n          <td>{{person.package_sms_credits}}</td>\n\n          <td >\n            <select [(ngModel)]=\"person.payment_status_code\" name=\"payment_status_code\" >\n              <option value=\"success\" [disabled]=\"person.payment_status_code=='success'\" >success</option>\n              <option value=\"pending\"  [disabled]=\"person.payment_status_code=='success'\">pending</option>\n              <option value=\"Cancel\"  [disabled]=\"person.payment_status_code=='success'\">Cancel</option>\n\n            </select>\n          </td>\n          <td>\n            <select [(ngModel)]=\"person.add_balance\" name=\"add_balance\" >\n              <option value=\"select\" selected disabled>select</option>\n              <option value=\"Yes\">yes</option>\n              <option value=\"No\" >No</option>\n            </select>\n          </td>\n          <td>\n            <a (click)=\"updateclientData(person)\"><span class=\"material-icons\">\n                save\n              </span></a>\n          </td>\n\n          <td>\n            <a> <span class=\"material-icons\" [routerLink]=\"['/viewPurchaseDetailed',person.package_id,person.order_id]\" matTooltip=\"View Detailed\"\n                matTooltipClass=\"example-tooltip-red\" aria-label=\"Button that shows a red tooltip\">\n                visibility\n              </span>\n            </a>\n          </td>\n\n\n        </tr>\n      </table>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Analytics/purchase-detailed/purchase-detailed.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Analytics/purchase-detailed/purchase-detailed.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Jumbotron -->\n<div class=\"jumbotron p-0\">\n  <div class=\"avatar mx-auto white\"><img src=\"assets/img/person.png\" class=\"rounded-circle\">\n</div>\n  <!-- Card image -->\n  <div class=\"view overlay rounded-top\">\n    <div class=\"card text-center\">\n      <div class=\"conatiner\" >\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <ul class=\"list-group list-group-flush\">\n\n              <li class=\"list-group-item\" >\n                <div class=\"list-group-item-fixed\">\n                  <strong class=\"list-group-left\">ClientId</strong>:\n                  <span class=\"list-group-right\">{{personList.client_id}}</span>\n                </div>\n              </li>\n              <li class=\"list-group-item\" >\n                <div class=\"list-group-item-fixed\">\n                  <strong class=\"list-group-left\">FullName</strong>:\n                  <span class=\"list-group-right\">{{personList.client_firstname}}{{personList.client_lastname}}</span>\n                </div>\n              </li>\n              <li class=\"list-group-item\">\n                <div class=\"list-group-item-fixed\">\n                  <strong class=\"list-group-left\">Email</strong>:\n                  <span class=\"list-group-right\">{{personList.client_email}}</span>\n                </div>\n              </li>\n              <li class=\"list-group-item\" >\n                <div class=\"list-group-item-fixed\">\n                  <strong class=\"list-group-left\">MobileNumber</strong>:\n                  <span class=\"list-group-right\">{{personList.client_mobile_number}}</span>\n                </div>\n              </li>\n\n              <li class=\"list-group-item\" >\n                <div class=\"list-group-item-fixed\">\n                  <strong class=\"list-group-left\">City</strong>:\n                  <span class=\"list-group-right\">{{personList.client_city}}</span>\n                </div>\n              </li>\n\n              <li class=\"list-group-item\">\n                <div class=\"list-group-item-fixed\">\n                  <strong class=\"list-group-left\">State</strong>:\n                  <span class=\"list-group-right\">{{personList.client_state}}</span>\n                </div>\n              </li>\n              <li class=\"list-group-item\">\n                <div class=\"list-group-item-fixed\">\n                  <strong class=\"list-group-left\">coupon_id</strong>:\n                  <span class=\"list-group-right\">{{personList.coupon_id}}</span>\n                </div>\n              </li>\n              <li class=\"list-group-item\">\n                <div class=\"list-group-item-fixed\">\n                  <strong class=\"list-group-left\">coupon_amount</strong>:\n                  <span class=\"list-group-right\">{{personList.coupon_amount}}</span>\n                </div>\n              </li>\n\n            </ul>\n        </div>\n\n\n<div class=\"col-md-6\">\n\n  <ul class=\"list-group list-group-flush\">\n\n\n    <li class=\"list-group-item\" >\n      <div class=\"list-group-item-fixed\">\n        <strong class=\"list-group-left\">Date of Purchase</strong>:\n        <span class=\"list-group-right\">{{personList.txn_date}}</span>\n      </div>\n    </li>\n    <li class=\"list-group-item\" >\n      <div class=\"list-group-item-fixed\">\n        <strong class=\"list-group-left\">OrderId</strong>:\n        <span class=\"list-group-right\">{{personList.order_id}}</span>\n      </div>\n    </li>\n    <li class=\"list-group-item\" >\n      <div class=\"list-group-item-fixed\">\n        <strong class=\"list-group-left\">PackageName</strong>:\n        <span class=\"list-group-right\">{{personList.package_name}}</span>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"list-group-item-fixed\">\n        <strong class=\"list-group-left\">SMSCredits</strong>:\n        <span class=\"list-group-right\">{{personList.package_sms_credits}}</span>\n      </div>\n    </li>\n    <li class=\"list-group-item\" >\n      <div class=\"list-group-item-fixed\">\n        <strong class=\"list-group-left\">PaymentMode</strong>:\n        <span class=\"list-group-right\">{{personList.payment_mode}}</span>\n      </div>\n    </li>\n    <li class=\"list-group-item\" >\n      <div class=\"list-group-item-fixed\">\n        <strong class=\"list-group-left\">Payment Status</strong>:\n        <span class=\"list-group-right\">{{personList.payment_status_code}}</span>\n      </div>\n    </li>\n\n    <li class=\"list-group-item\" >\n      <div class=\"list-group-item-fixed\">\n        <strong class=\"list-group-left\">TxnId</strong>:\n        <span class=\"list-group-right\">{{personList.payment_gateway_txn_id}}</span>\n      </div>\n    </li>\n    <li class=\"list-group-item\" >\n      <div class=\"list-group-item-fixed\">\n        <strong class=\"list-group-left\">TxnRef</strong>:\n        <span class=\"list-group-right\">{{personList.payment_gateway_txn_ref}}</span>\n      </div>\n    </li>\n  </ul>\n</div>\n\n      </div>\n\n\n    </div>\n  </div>\n\n  <!-- Card content -->\n  <div class=\"card-body text-center mb-3\">\n\n\n    <!-- Button -->\n    <a class=\"btn purple-gradient btn-rounded mb-4\" routerLink=\"/analytics\">Close</a>\n\n  </div>\n\n</div>\n<!-- Jumbotron -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Analytics/registrationtracking/registrationtracking.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Analytics/registrationtracking/registrationtracking.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">\n    Registration Tracking</h3>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 \">\n        <form (ngSubmit)=\"regform.form.valid&&getplanexpirycontacts(regform.form.value)\" #regform=\"ngForm\">\n\n          <input type=\"date\"  name=\"fromDate\" placeholder=\"FromDate\" ngModel>&nbsp;\n          <input type=\"date\" name=\"toDate\" placeholder=\"ToDate\" ngModel>&nbsp;\n\n          <input type=\"submit\">\n        </form>\n      </div>\n      <div class=\"col-md-6 mubutn\" >\n        <input type=\"text\" class=\"search\" [(ngModel)]=\"searchText\"  placeholder=\" Search \" aria-label=\"Search\">\n\n        <img class=\"xlicon media \" src=\"assets/img/xlicon.png\" (click)=\"exportAsXLSX()\">\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div id=\"table\" class=\"table-editable\">\n\n      <table class=\"table table-bordered table-responsive-md table-striped text-center table-media\">\n        <tr style=\"background-color: darkblue;color:white\">\n          <th class=\"text-center\">\n            Client ID</th>\n          <th class=\"text-center\">\n            FullName</th>\n            <th class=\"text-center\">\n              MobileNumber</th>\n          <!-- <th class=\"text-center\">District</th> -->\n          <th class=\"text-center\">Account_Type</th>\n          <th class=\"text-center\">PlanID</th>\n          <th class=\"text-center\">DateofRegn</th>\n          <th class=\"text-center\">DateofActivation</th>\n          <th class=\"text-center\">DateofExpiry</th>\n\n          <!-- <th  class=\"text-center\">Action\n          </th> -->\n\n        </tr>\n        <tr *ngFor=\"let person of personList| filter: {ClientID: searchText, ClientName:searchText,  MobileNumber: searchText}; let id = index\">\n          <td>\n            {{person.ClientID}}\n          </td>\n          <td>\n            {{person.ClientName}}\n          </td>\n          <td>\n            {{person.MobileNumber}}\n          </td>\n          <!-- <td>\n            {{person.District}}\n          </td> -->\n          <td>\n            {{person.AccountType}}\n         </td>\n          <td>{{person.PlanID}}</td>\n\n          <td>\n            {{person.DateofRegn| date: 'dd/MM/yyyy'}}\n         </td>\n         <td>\n          {{person.DateofActivation| date: 'dd/MM/yyyy'}}\n       </td>\n       <td>\n        {{person.DateofExpiry| date: 'dd/MM/yyyy'}}\n     </td>\n\n          <!-- <td>\n            <a> <span class=\"material-icons\" [routerLink]=\"['/client/viewDetail/',person.client_id]\"   matTooltip=\"View Detailed\"\n                matTooltipClass=\"example-tooltip-red\" aria-label=\"Button that shows a red tooltip\">\n                visibility\n              </span>\n            </a>\n          </td> -->\n\n\n        </tr>\n\n      </table>\n      <p *ngIf=\"message\" class=\"text-center\" style=\"color: red;\">{{message}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Analytics/sales-analysis/sales-analysis.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Analytics/sales-analysis/sales-analysis.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">Sales Analysis</h3>\n<form (ngSubmit)=\"regform.form.valid&&getSalesData(regform.form.value)\" #regform=\"ngForm\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <label>From Date:</label>\n        <input type=\"date\"  name=\"fromDate\" ngModel>\n      </div>\n&nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"col-md-2\">\n        <label>To Date:</label>\n        <input type=\"date\" name=\"toDate\" ngModel>\n      </div>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"col-md-2 mubutn\">\n        <input type=\"submit\" >\n      </div>\n\n      <div class=\"col-md-4 mubutn\">\n        <img class=\"xlicon media \" src=\"assets/img/xlicon.png\" (click)=\"exportAsXLSX()\">\n      </div>\n    </div>\n  </div>\n\n</form>\n\n<div class=\"card-body\">\n  <div id=\"table\" class=\"table-editable\">\n\n    <table class=\"table table-bordered table-responsive-md table-striped text-center table-media\">\n      <tr style=\"background-color: darkblue;color:white\">\n        <th class=\"text-center\">\n          Date</th>\n        <th class=\"text-center\">\n          PackageID</th>\n        <th class=\"text-center\">PackName</th>\n        <th class=\"text-center\">AmountReceived</th>\n        <th class=\"text-center\">Payment Mode</th>\n        <th class=\"text-center\">Status</th>\n\n\n      </tr>\n      <tr *ngFor=\"let person of personList; let id = index\">\n        <td>{{person.txn_date| date: 'dd/MM/yyyy'}}</td>\n\n        <td>\n          {{person.package_id}}\n        </td>\n        <td name=\"name\">\n          {{person.package_name}}\n        </td>\n        <td>{{person.total_amount_paid}}</td>\n        <td name=\"mobile\">\n          {{person.payment_mode}}\n        </td>\n\n        <td>\n          {{person.payment_status_code}}\n        </td>\n\n      </tr>\n    </table>\n\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Analytics/sendpushnotification/sendpushnotification.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Analytics/sendpushnotification/sendpushnotification.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n      <form class=\"text-center border border-light p-5\"  (ngSubmit)=\" regform.form.valid&&pushnotify(regform.form.value)\" #regform=\"ngForm\">\n\n        <p class=\"h4 mb-4\">Send Push Notification</p>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultChecked2\" (change)=\"checkbox($event.target.checked)\" unchecked>\n          <label class=\"custom-control-label\" for=\"defaultChecked2\">Push Notification</label>\n        </div>\n        <div class=\"form-group\">\n          <textarea class=\"form-control rounded-0\" id=\"exampleFormControlTextarea2\" rows=\"3\"\n            placeholder=\"Message\" name=\"message\" ngModel></textarea>\n        </div>\n\n          <!-- <button mdbBtn color=\"info\"  type=\"button\" routerLink=\"/viewnotifyTemplates\">Select Template</button> -->\n\n          <button mdbBtn color=\"info\" type=\"submit\">Send</button>\n\n      </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Analytics/usage-analysis/usage-analysis.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Analytics/usage-analysis/usage-analysis.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">Usage Analysis</h3>\n\n  <div class=\"card-body\">\n    <div id=\"table\" class=\"table-editable\">\n\n      <table class=\"table table-bordered table-responsive-md table-striped text-center table-media\">\n        <tr style=\"background-color: darkblue;color:white\">\n          <th class=\"text-center\">\n           Date</th>\n          <th class=\"text-center\">SMS Credits Sold</th>\n          <th class=\"text-center\">SMS Credits Used</th>\n\n          <th colspan=\"3\" class=\"text-center\">Action\n          </th>\n\n        </tr>\n        <tr *ngFor=\"let person of personList; let id = index\">\n          <td>\n            12/07/2020\n          </td>\n          <td>\n           1000\n          </td>\n          <td name=\"name\">\n         200\n          </td>\n\n          <td>\n           <a> <span class=\"material-icons\" routerLink=\"/ViewUsageDetailed\"      matTooltip=\"View Detailed\"\n            matTooltipClass=\"example-tooltip-red\"\n            aria-label=\"Button that shows a red tooltip\">\n              visibility\n              </span>\n              </a>\n          </td>\n\n\n\n\n        </tr>\n      </table>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Analytics/usage-detailed/usage-detailed.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Analytics/usage-detailed/usage-detailed.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button mat-raised-button color=\"primary\" routerLink=\"/analytics\">GoBack</button>\n<div class=\"card\">\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">Usage Analysis Detailed View</h3>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 search\">\n\n          <input  type=\"text\" [(ngModel)]=\"client_firstname\" placeholder=\" Search By Name\"\n            aria-label=\"Search\" (input)=\"search()\" >\n\n      </div>\n      <div class=\"col-md-4 mubutn\">\n\n\n        <img class=\"xlicon media \" src=\"assets/img/xlicon.png\" (click)=\"exportAsXLSX()\">\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div id=\"table\" class=\"table-editable\">\n\n      <table class=\"table table-bordered table-responsive-md table-striped text-center table-media\">\n        <tr style=\"background-color: darkblue;color:white\">\n          <th class=\"text-center\">\n           ClientId</th>\n          <th class=\"text-center\">Name</th>\n          <th class=\"text-center\">CreditsUsed</th>\n          <th class=\"text-center\">PackageID</th>\n          <th class=\"text-center\">PackName</th>\n        </tr>\n        <tr *ngFor=\"let person of personList; let id = index\">\n          <td>\n            115525\n          </td>\n          <td>\n           sridhar\n          </td>\n          <td name=\"name\">\n         200\n          </td>\n          <td>packageId</td>\n          <td>PackName</td>\n\n\n        </tr>\n      </table>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/DigitalCards/digitalcards/digitalcards.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/DigitalCards/digitalcards/digitalcards.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/DigitalCards/vcard01/vcard01.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/DigitalCards/vcard01/vcard01.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<title>W3.CSS Template</title>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<style>\n  html,\n  body,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: \"Roboto\", sans-serif\n  }\n</style>\n\n<body class=\"w3-light-grey\">\n\n  <!-- Page Container -->\n\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-6\">\n        <div class=\"w4-content w4-margin-top\" style=\"max-width:1400px;\">\n\n          <!-- The Grid -->\n          <div class=\"w6-row-padding\">\n\n            <!-- Left Column -->\n            <div class=\"w6-third\">\n\n              <div class=\"w6-white w6-text-grey w6-card-4\">\n                <div class=\"w6-display-container\">\n                  <img src=\"https://i.pinimg.com/originals/08/7a/ed/087aed56c9cfd315cee6aa306d1a8156.jpg\"\n                    style=\"width:100%\" alt=\"Avatar\">\n                  <div class=\"w6-display-bottomleft w3-container w3-text-black\">\n                    <h3>Mr.Sridhar Kokkirigadda</h3>\n                    <!-- <a class=\"phone\" href=\"\"><i class=\"fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal\"></i></a>\n                    <a  class=\"whatsapp\" href=\"\"><i class=\"fab fa-whatsapp fa-fw w3-margin-right w3-large w3-text-teal\"></i></a>\n                    <a class=\"email\" href=\"\"><i class=\"fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal\"></i></a>\n                    <a href=\"\"><i class=\"fab fa-location fa-fw w3-margin-right w3-large w3-text-teal\"></i></a> -->\n                  </div>\n                </div>\n                <br>\n                <div class=\"w6-container\">\n                  <p><i class=\"fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal\"></i>Meanstack Developer</p>\n                  <a target=\"_blank\" href=\"tel:+919951517660\">\n                    <p><i class=\"fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal\"></i>9951517660</p>\n                  </a>\n                  <a target=\"_blank\"\n                    href=\"https://wa.me/+918801559157?text=Got%20reference%20from%20your%20Digital%20vCard.%20Want%20to%20know%20more%20about%20your%20products%20and%20services.\">\n                    <p><i class=\"fab fa-whatsapp fa-fw w3-margin-right w3-large w3-text-teal\"></i>8801559157</p>\n                  </a>\n                  <p><i class=\"fa fa-home fa-fw w3-margin-right w3-large w3-text-teal\"></i>Kukatpally, Hyderabad</p>\n                  <a target=\"_blank\" href=\"mailto:sridhar@gmail.com\">\n                    <p><i class=\"fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal\"></i>sridhar0005@mail.com\n                    </p>\n                  </a>\n                  <p><i\n                      class=\"fa fa-edge fa-fw w3-margin-right w3-large w3-text-teal\"></i><a target=\"_blank\" href=\"https://www.ourdigitalvcard.in/\">https://www.ourdigitalvcard.in/</a>\n                  </p>\n                  <hr>\n                  <div class=\"p-30\"></div>\n\n   <input class=\"form-control inptmida\" type=\"text\" placeholder=\"+91 Enter mobile number\" [(ngModel)]=\"mobilenumber\">\n  <button type=\"button\" class=\"btn btn-success btn-rounded wtsmdia\" (click)=\"share()\"> <i class=\"fab fa-whatsapp\"></i> &nbsp; Share on Whatsapp</button>\n\n\n\n\n\n                  <br>\n\n                </div>\n              </div><br>\n\n              <!-- End Left Column -->\n            </div>\n\n            <!-- Right Column -->\n\n\n            <!-- End Grid -->\n          </div>\n\n          <!-- End Page Container -->\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n  <footer class=\"w3-container w3-teal w3-center w3-margin-top\">\n    <p>Find me on social media.</p>\n    <i class=\"fa fa-facebook-official w3-hover-opacity\"></i>\n    <i class=\"fa fa-instagram w3-hover-opacity\"></i>\n    <i class=\"fa fa-snapchat w3-hover-opacity\"></i>\n    <i class=\"fa fa-pinterest-p w3-hover-opacity\"></i>\n    <i class=\"fa fa-twitter w3-hover-opacity\"></i>\n    <i class=\"fa fa-linkedin w3-hover-opacity\"></i>\n    <p>Powered by <a href=\"https://nutantek.com/\" target=\"_blank\">Nutantek</a></p>\n  </footer>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/DigitalCards/vcard02/vcard02.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/DigitalCards/vcard02/vcard02.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<title>W3.CSS Template</title>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<style>\n  html,\n  body,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: \"Roboto\", sans-serif\n  }\n</style>\n\n<body class=\"w3-light-grey\">\n\n  <!-- Page Container -->\n\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-6\">\n        <div class=\"w4-content w4-margin-top\" style=\"max-width:1400px;\">\n\n          <!-- The Grid -->\n          <div class=\"w6-row-padding\">\n\n            <!-- Left Column -->\n            <div class=\"w6-third\">\n\n              <div class=\"w6-white w6-text-grey w6-card-4\">\n                <div class=\"w6-display-container\">\n                  <img src=\"https://i.pinimg.com/originals/08/7a/ed/087aed56c9cfd315cee6aa306d1a8156.jpg\"\n                    style=\"width:100%\" alt=\"Avatar\">\n                  <div class=\"w6-display-bottomleft w3-container w3-text-black\">\n                    <h3>Mr.Sridhar Kokkirigadda</h3>\n                    <!-- <a class=\"phone\" href=\"\"><i class=\"fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal\"></i></a>\n                    <a  class=\"whatsapp\" href=\"\"><i class=\"fab fa-whatsapp fa-fw w3-margin-right w3-large w3-text-teal\"></i></a>\n                    <a class=\"email\" href=\"\"><i class=\"fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal\"></i></a>\n                    <a href=\"\"><i class=\"fab fa-location fa-fw w3-margin-right w3-large w3-text-teal\"></i></a> -->\n\n                    <div class=\"round-contact-buttons\">\n\n                      <a target=\"_blank\" href=\"tel:+918124551179\">\n                        <i class=\"fas fa-phone fa-flip-horizontal contact-buttons-icon\"></i>\n                        <!-- <img src=\"/public/vcard/vjimages/call.png\" > -->\n                        <span class=\"contact-buttons-text\">Call Me</span>\n                      </a>\n\n                      <a target=\"_blank\"\n                        href=\"https://wa.me/918124551179?text=Got%20reference%20from%20your%20Digital%20vCard.%20Want%20to%20know%20more%20about%20your%20products%20and%20services.\">\n                        <i class=\"fab fa-whatsapp contact-buttons-icon\"></i>\n                        <!-- <img src=\"/public/vcard/vjimages/call.png\" > -->\n                        <span class=\"contact-buttons-text\">Whatsapp</span>\n                      </a>\n\n                      <a target=\"_blank\" href=\"https://maps.app.goo.gl/p88tH7wkXowkxE5B8\">\n                        <i class=\"fas fa-map-marker-alt fa-flip-horizontal contact-buttons-icon\"></i>\n                        <!-- <img src=\"/public/vcard/vjimages/call.png\" > -->\n                        <span class=\"contact-buttons-text\">Direction</span>\n                      </a>\n\n                      <a target=\"_blank\" href=\"mailto:ourdigitalvcard@gmail.com\">\n                        <i class=\"fas fa-envelope fa-flip-horizontal contact-buttons-icon\"></i>\n                        <!-- <img src=\"/public/vcard/vjimages/call.png\" > -->\n                        <span class=\"contact-buttons-text\">Mail</span>\n                      </a>\n\n                    </div>\n                  </div>\n                </div>\n                <br>\n\n                <div class=\"w6-container\">\n                  <p><i class=\"fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-brown\"></i>Meanstack Developer</p>\n                  <a target=\"_blank\" href=\"tel:+919951517660\">\n                    <p><i class=\"fa fa-phone fa-fw w3-margin-right w3-large w3-text-brown\"></i>9951517660</p>\n                  </a>\n                  <a target=\"_blank\"\n                    href=\"https://wa.me/+918801559157?text=Got%20reference%20from%20your%20Digital%20vCard.%20Want%20to%20know%20more%20about%20your%20products%20and%20services.\">\n                    <p><i class=\"fab fa-whatsapp fa-fw w3-margin-right w3-large w3-text-brown\"></i>8801559157</p>\n                  </a>\n                  <p><i class=\"fa fa-home fa-fw w3-margin-right w3-large w3-text-brown\"></i>Kukatpally, Hyderabad</p>\n                  <a target=\"_blank\" href=\"mailto:sridhar@gmail.com\">\n                    <p><i class=\"fa fa-envelope fa-fw w3-margin-right w3-large w3-text-brown\"></i>sridhar0005@mail.com\n                    </p>\n                  </a>\n                  <p><i class=\"fa fa-edge fa-fw w3-margin-right w3-large w3-text-brown\"></i><a target=\"_blank\"\n                      href=\"https://www.ourdigitalvcard.in/\">https://www.ourdigitalvcard.in/</a>\n                  </p>\n                  <hr>\n                  <div class=\"p-30\"></div>\n\n                  <input class=\"form-control inptmida\" type=\"text\" placeholder=\"+91 Enter mobile number\"\n                    [(ngModel)]=\"mobilenumber\">\n                  <button type=\"button\" class=\"btn btn-success btn-rounded wtsmdia\" (click)=\"share()\"> <i\n                      class=\"fab fa-whatsapp\"></i> &nbsp; Share on Whatsapp</button>\n                  <br>\n\n                </div>\n              </div><br>\n\n              <!-- End Left Column -->\n            </div>\n\n            <!-- Right Column -->\n\n\n            <!-- End Grid -->\n          </div>\n\n          <!-- End Page Container -->\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n  <footer class=\"w3-container w3-brown w3-center w3-margin-top\">\n    <p>Find me on social media.</p>\n    <i class=\"fa fa-facebook-official w3-hover-opacity\"></i>\n    <i class=\"fa fa-instagram w3-hover-opacity\"></i>\n    <i class=\"fa fa-snapchat w3-hover-opacity\"></i>\n    <i class=\"fa fa-pinterest-p w3-hover-opacity\"></i>\n    <i class=\"fa fa-twitter w3-hover-opacity\"></i>\n    <i class=\"fa fa-linkedin w3-hover-opacity\"></i>\n    <p>Powered by <a href=\"https://nutantek.com/\" target=\"_blank\">Nutantek</a></p>\n  </footer>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/DigitalCards/vcard03/vcard03.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/DigitalCards/vcard03/vcard03.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<title>W3.CSS Template</title>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<style>\n  html,\n  body,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: \"Roboto\", sans-serif\n  }\n</style>\n\n<body class=\"w3-light-grey\">\n\n  <!-- Page Container -->\n\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-6\">\n        <div class=\"w4-content w4-margin-top\" style=\"max-width:1400px;\">\n\n          <!-- The Grid -->\n          <div class=\"w6-row-padding\">\n\n            <!-- Left Column -->\n            <div class=\"w6-third\">\n\n              <div class=\"w6-white w6-text-grey w6-card-4\">\n                <div class=\"w6-display-container\">\n                  <img src=\"https://i.pinimg.com/originals/08/7a/ed/087aed56c9cfd315cee6aa306d1a8156.jpg\"\n                    style=\"width:100%\" alt=\"Avatar\">\n                  <div class=\"w6-display-bottomleft w3-container w3-text-black\">\n                    <h3>Mr.Sridhar Kokkirigadda</h3>\n                    <hr>\n                    <div class=\"p-30\"></div>\n                    <!-- <a class=\"phone\" href=\"\"><i class=\"fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal\"></i></a>\n                    <a  class=\"whatsapp\" href=\"\"><i class=\"fab fa-whatsapp fa-fw w3-margin-right w3-large w3-text-teal\"></i></a>\n                    <a class=\"email\" href=\"\"><i class=\"fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal\"></i></a>\n                    <a href=\"\"><i class=\"fab fa-location fa-fw w3-margin-right w3-large w3-text-teal\"></i></a> -->\n\n                    <div class=\"round-contact-buttons\">\n\n                      <a target=\"_blank\" href=\"tel:+918124551179\">\n                        <i class=\"fas fa-phone fa-flip-horizontal contact-buttons-icon\"></i>\n                        <!-- <img src=\"/public/vcard/vjimages/call.png\" > -->\n                        <span class=\"contact-buttons-text\">Call Me</span>\n                      </a>\n\n                      <a target=\"_blank\"\n                        href=\"https://wa.me/918124551179?text=Got%20reference%20from%20your%20Digital%20vCard.%20Want%20to%20know%20more%20about%20your%20products%20and%20services.\">\n                        <i class=\"fab fa-whatsapp contact-buttons-icon\"></i>\n                        <!-- <img src=\"/public/vcard/vjimages/call.png\" > -->\n                        <span class=\"contact-buttons-text\">Whatsapp</span>\n                      </a>\n\n                      <a target=\"_blank\" href=\"https://maps.app.goo.gl/p88tH7wkXowkxE5B8\">\n                        <i class=\"fas fa-map-marker-alt fa-flip-horizontal contact-buttons-icon\"></i>\n                        <!-- <img src=\"/public/vcard/vjimages/call.png\" > -->\n                        <span class=\"contact-buttons-text\">Direction</span>\n                      </a>\n\n                      <a target=\"_blank\" href=\"mailto:ourdigitalvcard@gmail.com\">\n                        <i class=\"fas fa-envelope fa-flip-horizontal contact-buttons-icon\"></i>\n                        <!-- <img src=\"/public/vcard/vjimages/call.png\" > -->\n                        <span class=\"contact-buttons-text\">Mail</span>\n                      </a>\n\n                    </div>\n                  </div>\n                </div>\n                <br>\n\n                <div class=\"w6-container\">\n                  <p><i class=\"fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-brown\"></i>Meanstack Developer</p>\n                  <a target=\"_blank\" href=\"tel:+919951517660\">\n                    <p><i class=\"fa fa-phone fa-fw w3-margin-right w3-large w3-text-brown\"></i>9951517660</p>\n                  </a>\n                  <a target=\"_blank\"\n                    href=\"https://wa.me/+918801559157?text=Got%20reference%20from%20your%20Digital%20vCard.%20Want%20to%20know%20more%20about%20your%20products%20and%20services.\">\n                    <p><i class=\"fab fa-whatsapp fa-fw w3-margin-right w3-large w3-text-brown\"></i>8801559157</p>\n                  </a>\n                  <p><i class=\"fa fa-home fa-fw w3-margin-right w3-large w3-text-brown\"></i>Kukatpally, Hyderabad</p>\n                  <a target=\"_blank\" href=\"mailto:sridhar@gmail.com\">\n                    <p><i class=\"fa fa-envelope fa-fw w3-margin-right w3-large w3-text-brown\"></i>sridhar0005@mail.com\n                    </p>\n                  </a>\n                  <p><i class=\"fa fa-edge fa-fw w3-margin-right w3-large w3-text-brown\"></i><a target=\"_blank\"\n                      href=\"https://www.ourdigitalvcard.in/\">https://www.ourdigitalvcard.in/</a>\n                  </p>\n                  <hr>\n                  <div class=\"p-30\"></div>\n\n                  <input class=\"form-control inptmida\" type=\"text\" placeholder=\"+91 Enter mobile number\"\n                    [(ngModel)]=\"mobilenumber\">\n                  <button type=\"button\" class=\"btn btn-success btn-rounded wtsmdia\" (click)=\"share()\"> <i\n                      class=\"fab fa-whatsapp\"></i> &nbsp; Share on Whatsapp</button>\n                  <br>\n\n                </div>\n              </div><br>\n\n              <!-- End Left Column -->\n            </div>\n\n            <!-- Right Column -->\n\n\n            <!-- End Grid -->\n          </div>\n\n          <!-- End Page Container -->\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n  <footer class=\"w3-container w3-blue w3-center w3-margin-top\">\n    <p>Find me on social media.</p>\n    <i class=\"fa fa-facebook-official w3-hover-opacity\"></i>\n    <i class=\"fa fa-instagram w3-hover-opacity\"></i>\n    <i class=\"fa fa-snapchat w3-hover-opacity\"></i>\n    <i class=\"fa fa-pinterest-p w3-hover-opacity\"></i>\n    <i class=\"fa fa-twitter w3-hover-opacity\"></i>\n    <i class=\"fa fa-linkedin w3-hover-opacity\"></i>\n    <p>Powered by <a href=\"https://nutantek.com/\" target=\"_blank\">Nutantek</a></p>\n  </footer>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/DigitalCards/viewdigitalcards/viewdigitalcards.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/DigitalCards/viewdigitalcards/viewdigitalcards.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <!-- Card -->\n      <div class=\"card card-image\"\n        style=\"background-image: url(assets/bgimg/screen1.PNG);\">\n\n        <!-- Content -->\n        <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n          <div>\n            <h5 class=\"pink-text\"><i class=\"fas fa-chart-pie\"></i> Marketing</h5>\n            <h3 class=\"card-title pt-2\"><strong>This is the card title</strong></h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,\n              optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.\n              Odit sed qui, dolorum!.</p>\n            <a class=\"btn btn-pink\" routerLink=\"/digitalcards/vcard01\"><i class=\"fas fa-clone left\"></i> View Demo</a>\n          </div>\n        </div>\n\n      </div>\n      <!-- Card -->\n    </div>\n    <div class=\"col-md-4\">\n      <!-- Card -->\n      <div class=\"card card-image\"\n        style=\"background-image: url(assets/bgimg/screen2.PNG);\">\n\n        <!-- Content -->\n        <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n          <div>\n            <h5 class=\"pink-text\"><i class=\"fas fa-chart-pie\"></i> Marketing</h5>\n            <h3 class=\"card-title pt-2\"><strong>This is the card title</strong></h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,\n              optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.\n              Odit sed qui, dolorum!.</p>\n            <a class=\"btn btn-pink\" routerLink=\"/digitalcards/vcard02\"><i class=\"fas fa-clone left\"></i> View Demo</a>\n          </div>\n        </div>\n\n      </div>\n      <!-- Card -->\n    </div>\n    <div class=\"col-md-4\">\n      <!-- Card -->\n      <div class=\"card card-image\"\n      style=\"background-image: url(assets/bgimg/screen2.PNG);\">\n\n        <!-- Content -->\n        <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n          <div>\n            <h5 class=\"pink-text\"><i class=\"fas fa-chart-pie\"></i> Marketing</h5>\n            <h3 class=\"card-title pt-2\"><strong>This is the card title</strong></h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,\n              optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.\n              Odit sed qui, dolorum!.</p>\n            <a class=\"btn btn-pink\" routerLink=\"/digitalcards/vcard03\"><i class=\"fas fa-clone left\"></i> View Demo</a>\n          </div>\n        </div>\n\n      </div>\n      <!-- Card -->\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/PackageManage/add-package/add-package.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/PackageManage/add-package/add-package.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"regform.form.valid&&add(regform.form.value)\" #regform=\"ngForm\">\n  <div class=\"medias mymedia text-center border border-light p-5 \" >\n      <img src=\"assets/img/addsmspack.jpg\" width=\"25%\">\n\n        <input type=\"text\"  class=\"form-control mb-4\" placeholder=\"package_name\" name=\"package_name\" ngModel>\n        <input type=\"text\"  class=\"form-control mb-4\" placeholder=\"package_route\t\" name=\"package_route\" ngModel >\n       <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"package_unit_price\" name=\"package_unit_price\" ngModel>\n      <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"package_sms_credits \" name=\"package_sms_credits\" ngModel>\n      <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"package_price\t\" name=\"package_price\" ngModel>\n      <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"package_details\" name=\"package_details\" ngModel>\n      <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"package_status\" name=\"package_status\" ngModel>\n      <input type=\"date\"   class=\"form-control mb-4\" placeholder=\"Validity\" name=\"package_validity_in_months\" ngModel>\n\n      <button mdbBtn color=\"info\" block=\"true\"  class=\"my-4\" type=\"submit\">Add</button>\n  </div>\n  </form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/PackageManage/pack-manage/pack-manage.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/PackageManage/pack-manage/pack-manage.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/PackageManage/packtabs/packtabs.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/PackageManage/packtabs/packtabs.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group mat-align-tabs=\"center\">\n  <mat-tab label=\"View Packages\"><app-view-package></app-view-package></mat-tab>\n  <mat-tab label=\"View Premium Plans\"><app-viewpremiumplans></app-viewpremiumplans></mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/PackageManage/update-package/update-package.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/PackageManage/update-package/update-package.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form    (ngSubmit)=\"updatePackage(regform.form.value)\" #regform=\"ngForm\">\n  <div class=\"medias mymedia text-center border border-light p-5 \" *ngFor=\"let pack of packageDetails\">\n\n\n      <img src=\"assets/img/addsmspack.jpg\" width=\"25%\">\n\n\n        <input type=\"text\"  class=\"form-control mb-4\" placeholder=\"package_name\" name=\"package_name\" [(ngModel)]=\"pack.package_name\">\n        <input type=\"text\"  class=\"form-control mb-4\" placeholder=\"package_route\" name=\"package_route\" [(ngModel)]=\"pack.package_route\" >\n\n          <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"package_unit_price\" name=\"package_unit_price\" [(ngModel)]=\"pack.package_unit_price\">\n\n\n      <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"package_sms_credits \" name=\"package_sms_credits\" [(ngModel)]=\"pack.package_sms_credits\">\n\n      <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"package_price\" name=\"package_price\" [(ngModel)]=\"pack.package_price\">\n\n      <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"package_details\" name=\"package_details\" [(ngModel)]=\"pack.package_details\">\n\n      <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"package_status\" name=\"package_status\" [(ngModel)]=\"pack.package_status\">\n      <input type=\"date\"   class=\"form-control mb-4\" placeholder=\"Validity\" name=\"package_validity_in_months\" [(ngModel)]=\"pack.package_validity_in_months\">\n\n      <!-- Sign up button -->\n      <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\">Update</button>\n  </div>\n  </form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/PackageManage/updatepremiumplan/updatepremiumplan.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/PackageManage/updatepremiumplan/updatepremiumplan.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form    (ngSubmit)=\"updatePackage(regform.form.value)\" #regform=\"ngForm\">\r\n  <div class=\"medias mymedia text-center border border-light p-5 \" *ngFor=\"let pack of packageDetails\">\r\n\r\n\r\n      <img src=\"assets/img/addsmspack.jpg\" width=\"25%\">\r\n\r\n\r\n        <input type=\"text\"  class=\"form-control mb-4\" placeholder=\"package_name\" name=\"package_name\" [(ngModel)]=\"pack.package_name\">\r\n        <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"free_sms_credits \" name=\"free_sms_credits\" [(ngModel)]=\"pack.free_sms_credits\">\r\n\r\n          <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"package_list_price\" name=\"package_list_price\" [(ngModel)]=\"pack.package_list_price\">\r\n          <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"package_offered_price\" name=\"package_offered_price\" [(ngModel)]=\"pack.package_offered_price\">\r\n      <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"total_package_price\" name=\"total_package_price\" [(ngModel)]=\"pack.total_package_price\">\r\n\r\n\r\n      <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"package_status\" name=\"package_status\" [(ngModel)]=\"pack.package_status\">\r\n      <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"is_sim_allowed\" name=\"is_sim_allowed\" [(ngModel)]=\"pack.is_sim_allowed\">\r\n      <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"is_min_bal_req\" name=\"is_min_bal_req\" [(ngModel)]=\"pack.is_min_bal_req\">\r\n      <input type=\"text\"   class=\"form-control mb-4\" placeholder=\"package_validity_in_months\" name=\"package_validity_in_months\" [(ngModel)]=\"pack.package_validity_in_months\">\r\n\r\n\r\n      <!-- Sign up button -->\r\n      <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\">Update</button>\r\n  </div>\r\n  </form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/PackageManage/view-package/view-package.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/PackageManage/view-package/view-package.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">View Packages</h3>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 search\">\n\n        <input  type=\"text\" [(ngModel)]=\"package_id\" placeholder=\" Search By packageId\"\n        aria-label=\"Search\" (input)=\"search()\" >\n      </div>\n\n      <div class=\"col-md-4 mubutn\">\n        <button mat-stroked-button color=\"primary\" routerLink=\"/packageMange/addPacks\">\n          Add\n          <span class=\"material-icons\">\n          add\n          </span></button>\n\n        <img class=\"xlicon media \" src=\"assets/img/xlicon.png\" (click)=\"exportAsXLSX()\">\n        </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div id=\"table\" class=\"table-editable\">\n\n      <table class=\"table table-bordered table-responsive-md table-striped text-center table-media\" >\n        <tr style=\"background-color: darkblue;color:white\" >\n          <th class=\"text-center\">\n            PackageID</th>\n          <th class=\"text-center\">\n            PackageName</th>\n          <th class=\"text-center\">PackageRoute\t</th>\n          <th class=\"text-center\">UnitPrice</th>\n          <th class=\"text-center\">Credits </th>\n          <th class=\"text-center\">packagePrice</th>\n          <th class=\"text-center\">Validity</th>\n          <th class=\"text-center\">status</th>\n          <th colspan=\"2\" class=\"text-center\">Action</th>\n\n        </tr>\n        <tr *ngFor=\"let person of personList; let id = index\">\n          <td >\n\n       {{person.package_id}}\n          </td>\n          <td >\n         {{person.package_name}}\n             </td>\n          <td name=\"name\">\n          {{person.package_route}}\n          </td>\n          <td name=\"mobile\">\n      {{person.\tpackage_unit_price}}\n          </td>\n          <td name=\"address1\">\n       {{person.package_sms_credits}}\n          </td>\n          <td name=\"city\">\n            {{person.\tpackage_price}}\n          </td>\n          <td name=\"state\">\n       {{person.package_validity_in_months\t}}\n          </td>\n          <td name=\"state\">\n            {{person.package_status}}\n               </td>\n          <td>\n            <span class=\"table-Add\">\n              <button type=\"Submit\" mdbBtn color=\"green\" rounded=\"true\" size=\"sm\" class=\"my-0\" [routerLink]=\"['/packageMange/editPacks/',person.package_id]\" ><i class=\"fas fa-user-edit\"></i></button>\n            </span>\n          </td>\n          <td>\n            <span class=\"table-remove\">\n              <button type=\"button\" mdbBtn color=\"danger\" rounded=\"true\" size=\"sm\" class=\"my-0\" (click)=\"deletePackage(person.package_id)\"><i class=\"fas fa-trash-alt\"></i></button>\n            </span>\n          </td>\n\n\n        </tr>\n      </table>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/PackageManage/viewpremiumplans/viewpremiumplans.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/PackageManage/viewpremiumplans/viewpremiumplans.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">View Premium Plans</h3>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 search\">\n\n        <input  type=\"text\" [(ngModel)]=\"package_id\" placeholder=\" Search By packageId\"\n        aria-label=\"Search\" (input)=\"search()\" >\n      </div>\n\n      <div class=\"col-md-4 mubutn\">\n        <button mat-stroked-button color=\"primary\" routerLink=\"/packageMange/addPacks\">\n          Add\n          <span class=\"material-icons\">\n          add\n          </span></button>\n\n        <img class=\"xlicon media \" src=\"assets/img/xlicon.png\" (click)=\"exportAsXLSX()\">\n        </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div id=\"table\" class=\"table-editable\">\n\n      <table class=\"table table-bordered table-responsive-md table-striped text-center table-media\" >\n        <tr style=\"background-color: darkblue;color:white\" >\n          <th class=\"text-center\">\n            PackageID</th>\n          <th class=\"text-center\">\n            PackageName</th>\n          <th class=\"text-center\">Credits</th>\n          <th class=\"text-center\">list Price </th>\n          <th class=\"text-center\">offered Price</th>\n          <th class=\"text-center\">packagePrice</th>\n          <th class=\"text-center\">Validity</th>\n          <th class=\"text-center\">status</th>\n          <th colspan=\"2\" class=\"text-center\">Action</th>\n\n        </tr>\n        <tr *ngFor=\"let person of personList; let id = index\">\n          <td >\n\n       {{person.package_id}}\n          </td>\n          <td >\n         {{person.package_name}}\n             </td>\n\n          <td >\n      {{person.\tfree_sms_credits}}\n          </td>\n          <td >\n       {{person.package_list_price}}\n          </td>\n          <td >\n            {{person.\tpackage_offered_price}}\n               </td>\n          <td name=\"city\">\n            {{person.\ttotal_package_price}}\n          </td>\n          <td name=\"state\">\n       {{person.package_validity_in_months\t}}\n          </td>\n          <td name=\"state\">\n            {{person.package_status}}\n               </td>\n          <td>\n            <span class=\"table-Add\">\n              <button type=\"Submit\" mdbBtn color=\"green\" rounded=\"true\" size=\"sm\" class=\"my-0\" [routerLink]=\"['/packageMange/editpremiumPlan/',person.package_id]\" ><i class=\"fas fa-user-edit\"></i></button>\n            </span>\n          </td>\n          <td>\n            <span class=\"table-remove\">\n              <button type=\"button\" mdbBtn color=\"danger\" rounded=\"true\" size=\"sm\" class=\"my-0\" (click)=\"deletePackage(person.package_id)\"><i class=\"fas fa-trash-alt\"></i></button>\n            </span>\n          </td>\n\n\n        </tr>\n      </table>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Reseller/reseller/reseller.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Reseller/reseller/reseller.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Reseller/resellerview/resellerview.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Reseller/resellerview/resellerview.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div class=\"card\">\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">View Reseller</h3>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 search\">\n        <button mat-mini-fab color=\"primary\" aria-label=\"Example icon button with a menu icon\" (click)=\"getClients()\">\n          <mdb-icon fas icon=\"sync-alt\"></mdb-icon>\n        </button>&nbsp;\n          <input  type=\"text\" [(ngModel)]=\"searchText\" placeholder=\" Search By Filter\"\n            aria-label=\"Search\" >\n\n&nbsp;\n<img src=\"assets/img/bulksmsicon.png\" width=\"12%\" (click)=\"selectclients()\">\n      </div>\n      <div class=\"col-md-6 mubutn\">\n\n\n\n\n        <button mat-stroked-button color=\"primary\" routerLink=\"/client/addclient\">\n          Add\n          <span class=\"material-icons\">\n            add\n          </span></button>\n          <button mat-stroked-button color=\"primary\" routerLink=\"/client/createprofile\" *ngIf=\"role =='admin'\">\n            Bulkprofile Create\n              <span class=\"material-icons\">\n                add\n              </span></button>\n\n        <img class=\"xlicon media \" src=\"assets/img/xlicon.png\" (click)=\"exportAsXLSX()\">\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div id=\"table\" class=\"table-editable\">\n\n      <table class=\"table table-bordered table-responsive-md table-striped text-center table-media\">\n        <tr style=\"background-color: darkblue;color:white\">\n          <th class=\"text-center\">\n           Partner ID</th>\n          <th class=\"text-center\">\n            FullName</th>\n          <th class=\"text-center\">Mobile</th>\n          <th class=\"text-center\">Email</th>\n          <th colspan=\"2\" class=\"text-center\">whatsaap/SMS</th>\n\n          <th class=\"text-center\">select All <input type=\"checkbox\" name=\"all\" [checked]=\"allToppings\" (change)=\"selectAllToppings($event.target.checked,personList)\"/></th>\n\n        </tr>\n        <tr *ngFor=\"let person of personList| filter: {client_id: searchText, client_firstname:searchText,  client_lastname: searchText,user_mobile_number:searchText}; let id=index;\" #loaded>\n          <td>\n            {{person.client_id}}\n          </td>\n          <td>\n            {{person.client_firstname}}&nbsp;{{person.client_lastname}}\n          </td>\n          <td name=\"name\">\n            {{person.user_mobile_number}}\n          </td>\n          <td name=\"name\">\n            {{person.email}}\n          </td>\n          <td>\n            <img class=\"pointer\" src=\"assets/img/whatsaapicon.webp\" width=\"100%\" [routerLink]=\"['/downloadapksendsms',person.user_mobile_number]\">\n          </td>\n          <td class=\"pointer\">\n           <a [routerLink]=\"['/client/sendsms/',person.user_mobile_number]\"><span class=\"material-icons\">\n              sms\n              </span>\n            </a>\n            </td>\n\n          <td>\n            <input type=\"checkbox\" name=\"sizecb[]\" value=\"{{person.id}}\" [checked]=\"allToppings\" (change)=\"selectNewTopping($event.target.checked,person)\"/>\n          </td>\n        </tr>\n      </table>\n\n\n      <h6 class=\"errorMessage\" *ngIf=\"errorMessage\">{{errorMessage}}</h6>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Templates/add-templates/add-templates.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Templates/add-templates/add-templates.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n <button mat-stroked-button color=\"primary\" routerLink=\"/templates/viewTemplates\">Back</button>\n\n<form (ngSubmit)=\"regform.form.valid&&add(regform.form.value)\" #regform=\"ngForm\">\n  <div class=\"medias mymedia text-center border border-light p-5 \">\n    <img src=\"assets/img/addsmspack.jpg\" width=\"25%\">\n\n    <select class=\"form-control mb-4\"  name=\"event_code\" ngModel>\n      <option selected  value=\"\"> Select Event </option>\n      <option [value]=\"event.event_code\" *ngFor=\"let event of events\">{{event.event_code}}</option>\n\n    </select>\n\n    <textarea class=\"form-control mb-4\" placeholder=\"message\" name=\"message\" ngModel></textarea>\n    <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\">Add</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Templates/addtemplate-type/addtemplate-type.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Templates/addtemplate-type/addtemplate-type.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n <button mat-stroked-button color=\"primary\" routerLink=\"/templates/viewTemplates\">Back</button>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n  <div class=\"medias mymedia text-center border border-light p-5 \" >\n      <img src=\"assets/img/addsmspack.jpg\" width=\"25%\">\n\n        <input type=\"text\"  class=\"form-control mb-4\" placeholder=\"Event Name\" formControlName=\"event_code\" >\n        <input type=\"text\"  class=\"form-control mb-4\" placeholder=\"DisplayName\" formControlName=\"display_name\"  >\n       <input type=\"file\"   class=\"form-control mb-4\" (change)=\"uploadFile($event)\">\n\n\n      <button mdbBtn color=\"info\" block=\"true\"  class=\"my-4\" type=\"submit\">Add</button>\n  </div>\n  </form>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Templates/templates/templates.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Templates/templates/templates.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Templates/viewsystemtemplates/viewsystemtemplates.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Templates/viewsystemtemplates/viewsystemtemplates.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" routerLink=\"/templates/viewTemplates\">Go Back</button>\n\n\n<h4 class=\"text-center \" style=\"color: darkblue\">choose your Templates</h4>\n<br>\n\n<!--\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col md-3\">\n    <ng-container   *ngFor=\"let templateItem of categoryArr\">\n        <button type=\"button\" class=\"btn btn-dark-blue btn-md\" (click)=\"selectTemplate(templateItem)\">{{templateItem.template}}</button>\n    </ng-container>\n  </div>\n    </div>\n\n  </div> -->\n\n\n\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <ng-container *ngFor=\"let templateItem of message\">\n    <div class=\"col-md-4\">\n      <div class=\"card-deck\">\n\n          <div class=\"card mb-4\">\n\n            <div class=\"card-body\">\n\n              <!--Text-->\n              <h5 class=\"card-text\">{{templateItem.message}}</h5>\n              <!-- <button type=\"button\" class=\"btn purple-gradient\" >Select</button> -->\n              <br>\n              <mat-card-actions>\n                <button mat-raised-button  color=\"warn\" (click)=\"delete(templateItem.tid)\">Delete</button>\n                <!-- <button mat-button>SHARE</button>  -->\n              </mat-card-actions>\n            </div>\n\n          </div>\n\n\n      </div>\n    </div>\n  </ng-container>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Templates/viewtemplates/viewtemplates.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Templates/viewtemplates/viewtemplates.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <button mat-stroked-button color=\"primary\" routerLink=\"/templates/addTemplates\">\n        AddTemplates\n        <span class=\"material-icons\">\n        add\n        </span></button>\n    </div>\n    <div class=\"col-md-2\">\n      <button mat-stroked-button color=\"primary\" routerLink=\"/templates/addTemplateType\">\n        AddEvents\n        <span class=\"material-icons\">\n        add\n        </span></button>\n    </div>\n<h5>CSV-Upload :</h5>\n    <div class=\"col-md-4\">\n\n  <input type=\"file\" name=\"files\" id=\"fileName\" accept=\".csv\" class=\"form-control\" #uploads\n      (change)=\"onChange(uploads.files)\" multiple value=\"process\" required />\n    </div>\n    <div class=\"col-md-2\">\n\n<button mat-raised-button color=\"primary\" (click)=\"uploadtemplates()\" [disabled]=\"!dataList\">upload</button><br>\n<a href=\"assets/img/record.csv\">SampleCSV</a>\n</div>\n\n  </div>\n  </div>\n\n<br><br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let item of data\">\n      <mat-card class=\"example-card\" [routerLink]=\"['/templates/viewsystemtemplates/',item.event_code]\" >\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>{{item.display_name}}</mat-card-title>\n\n        </mat-card-header>\n        <img mat-card-image [src]=\"item.image_filename\" width=\"50\" height=\"150\">\n        <mat-card-actions>\n          <!-- <button mat-button>LIKE</button>\n          <button mat-button>SHARE</button> -->\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/apkupload/apkuploads/apkuploads.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/apkupload/apkuploads/apkuploads.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <button mat-stroked-button color=\"primary\" routerLink=\"/viewapklist\">Back</button>\n\n <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n   <div class=\"medias mymedia text-center border border-light p-5 \" >\n       <img src=\"assets/img/addsmspack.jpg\" width=\"25%\">\n\n         <input type=\"text\"  class=\"form-control mb-4\" placeholder=\"Title\" formControlName=\"title\" >\n        <input type=\"file\"   class=\"form-control mb-4\" (change)=\"uploadFile($event)\">\n\n\n       <button mdbBtn color=\"info\" block=\"true\"  class=\"my-4\" type=\"submit\">Upload</button>\n   </div>\n   </form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/apkupload/viewapks/viewapks.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/apkupload/viewapks/viewapks.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <button mat-raised-button color=\"primary\" routerLink=\"/apkUpload\">UploadApk</button><br><br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\" *ngFor=\"let el of apkdata\">\n\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>{{el.title}}</mat-card-title>\n          <mat-card-subtitle>apk_id:&nbsp;{{el.apk_id}}</mat-card-subtitle>\n\n\n        </mat-card-header>\n        <img mat-card-image src=\"assets/img/apkicon.jpg\" >\n        <mat-card-content>\n          apk_filename:&nbsp;{{el.apk_filename}}<br>\n          <p>\n            createdAt: &nbsp;{{el.createdAt|date}}\n\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n         <a href=\"{{el.apk_filename}}\"> <button mat-button >Download</button></a>\n         <a><button mat-button (click)=\"deleteapk(el.apk_id)\">Delete</button></a>\n        </mat-card-actions>\n      </mat-card>\n\n    </div>\n  </div>\n</div>\n\n<h6>{{message}}</h6>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/billing/billing/billing.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/billing/billing/billing.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group mat-align-tabs=\"center\">\n  <mat-tab label=\"Buy SMS Package\"><app-smspackagelist></app-smspackagelist></mat-tab>\n  <mat-tab label=\"Buy SMS Premium Plan\"><app-buypremiumplans></app-buypremiumplans></mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/billing/buypremiumplans/buypremiumplans.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/billing/buypremiumplans/buypremiumplans.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Editable table -->\n<div class=\"card\">\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">Premium Packages</h3>\n  <div class=\"card-body\">\n    <div id=\"table\" class=\"table-editable\">\n\n      <table class=\"table table-bordered table-responsive-md table-striped text-center\">\n        <tr>\n          <th class=\"text-center\">Package Name</th>\n          <th class=\"text-center\">free_sms_credits</th>\n          <th class=\"text-center\">package_list_price\t</th>\n          <th class=\"text-center\">package_offered_price</th>\n          <!-- <th class=\"text-center\">GST(18%)</th>\n          <th class=\"text-center\">\tTotal Amount\t</th> -->\n          <th class=\"text-center\">\tValidity\t</th>\n          <th class=\"text-center\">Action</th>\n        </tr>\n        <tr *ngFor=\"let person of personList; let id = index\">\n          <td>\n            {{person.package_name}}\n          </td>\n          <td>\n            {{person.free_sms_credits}}\n          </td>\n          <td>\n            {{person.package_list_price}}\n          </td>\n          <td>\n            {{person.package_offered_price}}\n          </td>\n          <!-- <td>\n            {{person.package_gst_amount}}\n          </td>\n          <td>\n            RS:{{person.total_package_price}}\n          </td> -->\n          <td>\n            {{person.package_validity_in_months}} Months\n          </td>\n          <td>\n            <span class=\"table-remove\">\n              <button type=\"button\" mdbBtn color=\"success\" rounded=\"true\" size=\"sm\" class=\"my-0\" [routerLink]=\"['/paymentdetails/',person.package_id,person.package_offered_price,person.package_gst_rate]\">Proceed</button>\n            </span>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n<!-- Editable table -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/billing/paymentdetailsupdate/paymentdetailsupdate.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/billing/paymentdetailsupdate/paymentdetailsupdate.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-stroked-button color=\"primary\" routerLink=\"/billing/smspackagelist\">Back</button>\n<form (ngSubmit)=\"regform.form.valid&&getclientdetails(regform.form.value)\" #regform=\"ngForm\">\n<div class=\"container\">\n  <div class=\"row\">\n\n      <div class=\"col-md-4\">\n        <input type=\"text\"  class=\"form-control mb-4\" placeholder=\"Enter Clients MobileNumber\"  name=\"mobilenumber\" ngModel>\n      </div>\n      <div class=\"col-md-4\">\n    <button mat-raised-button color=\"primary\" type=\"submit\">verify client</button>\n  </div>\n</div>\n</div>\n</form>\n\n<div class=\"container\" *ngIf=\"clientData\" >\n  <div class=\"row\">\n\n    <div class=\"col-md-6\">\n      <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n\n        <div class=\"medias mymedia text-center border border-light p-5 \" >\n          <h6>ClientId: {{clientData.client_id}}</h6><h6>Name: {{clientData.client_firstname}}{{clientData.client_lastname}}</h6>\n            <img src=\"assets/img/addsmspack.jpg\" width=\"25%\"><br>\n\n              <input type=\"text\"  class=\"form-control mb-4\" placeholder=\"PaymentMode\" formControlName=\"payment_mode\" >\n              <input type=\"text\"  class=\"form-control mb-4\" placeholder=\"Transation ID\" formControlName=\"payment_gateway_txn_id\" >\n              <input type=\"text\"  class=\"form-control mb-4\" placeholder=\"Transation Ref\" formControlName=\"payment_gateway_txn_ref\" >\n              <input type=\"file\"   class=\"form-control mb-4\" (change)=\"uploadFile($event)\">\n              <input type=\"text\"  class=\"form-control mb-4\" placeholder=\"Notes\" formControlName=\"notes\" >\n\n            <button mdbBtn color=\"info\" block=\"true\"  class=\"my-4\" type=\"submit\">Submit</button>\n        </div>\n        </form>\n\n    </div>\n    <div class=\"col-md-6 payment\" >\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Payment Details</mat-card-title>\n        </mat-card-header>\n        <h6><b>Package price:&nbsp;{{package_price}}</b></h6>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>DiscountAmount</mat-label>\n          <input matInput placeholder=\"Enter Discount Amount\" (input)=\"calculatediscount($event.target.value)\">\n        </mat-form-field>\n      <hr>\n<h6><b>Amount to Pay:&nbsp;&nbsp;{{amount_topay}}</b></h6>\n<h6><b>GST:{{package_gst_amount}}%&nbsp;&nbsp;</b></h6>\n<hr class=\"new4\">\n<h6><b>Total Amount to Pay:&nbsp;&nbsp;{{totalamount}}</b></h6>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"message\">\n   {{message}}\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/billing/smspackagelist/smspackagelist.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/billing/smspackagelist/smspackagelist.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Editable table -->\n<div class=\"card\">\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">SMS Package List</h3>\n  <div class=\"card-body\">\n    <div id=\"table\" class=\"table-editable\">\n\n      <table class=\"table table-bordered table-responsive-md table-striped text-center\">\n        <tr>\n          <th class=\"text-center\">Package Name</th>\n          <th class=\"text-center\">SMS Credits</th>\n          <th class=\"text-center\">Price/SMS\t</th>\n          <th class=\"text-center\">Price</th>\n          <!-- <th class=\"text-center\">GST(18%)</th>\n          <th class=\"text-center\">\tTotal Amount\t</th> -->\n          <th class=\"text-center\">\tValidity\t</th>\n          <th class=\"text-center\">Action</th>\n        </tr>\n        <tr *ngFor=\"let person of personList; let id = index\">\n          <td>\n            {{person.package_name}}\n          </td>\n          <td>\n            {{person.package_sms_credits}}\n          </td>\n          <td>\n            {{person.package_unit_price}}\n          </td>\n          <td>\n            {{person.package_price}}\n          </td>\n          <!-- <td>\n            {{person.package_gst_amount}}\n          </td>\n          <td>\n            RS:{{person.total_package_price}}\n          </td> -->\n          <td>\n            {{person.package_validity_in_months}} Months\n          </td>\n          <td>\n            <span class=\"table-remove\">\n              <button type=\"button\" mdbBtn color=\"success\" rounded=\"true\" size=\"sm\" class=\"my-0\" [routerLink]=\"['/paymentdetails/',person.package_id,person.package_price,person.package_gst_rate]\">Proceed</button>\n            </span>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n<!-- Editable table -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/campaign/addpushnotification/addpushnotification.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/campaign/addpushnotification/addpushnotification.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <button mdbBtn color=\"info\" block=\"true\" type=\"button\" routerLink=\"/viewnotifyTemplates\">View Templates</button>\n  </div>\n  <div class=\"col-md-6\">\n<form class=\"text-center border border-light p-5\">\n  <p class=\"h4 mb-4\">Add Push Notification</p>\n  <div class=\"form-group\">\n    <textarea class=\"form-control rounded-0\" id=\"exampleFormControlTextarea2\" rows=\"3\" placeholder=\"Message\"></textarea>\n  </div>\n  <button mdbBtn color=\"info\" block=\"true\" type=\"submit\">ADD</button>\n</form>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/campaign/campaign-management/campaign-management.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/campaign/campaign-management/campaign-management.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">\n    campaign Management</h3>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <form (ngSubmit)=\"regform.form.valid&&getplanexpirycontacts(regform.form.value)\" #regform=\"ngForm\">\n\n          <input type=\"date\"  name=\"fromDate\" placeholder=\"FromDate\" ngModel>&nbsp;\n          <input type=\"date\" name=\"toDate\" placeholder=\"ToDate\" ngModel>&nbsp;\n\n          <input type=\"submit\">\n        </form>\n      </div>\n      <div class=\"col-md-6 mubutn\" >\n\n        <input  type=\"text\" [(ngModel)]=\"searchText\" placeholder=\" Search By Filter\"\n        aria-label=\"Search\" >\n  <!-- <button mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\" routerLink=\"/addpushnotify\" matTooltip=\" Add Push notification\"\n  matTooltipClass=\"example-tooltip-red\" aria-label=\"Button that shows a red tooltip\">\n    <span class=\"material-icons\">\n      add_alert\n      </span>\n  </button> -->\n  &nbsp;\n   <button mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\"  matTooltip=\"Push notification\" (click)=\"selectclients()\"\n  matTooltipClass=\"example-tooltip-red\" aria-label=\"Button that shows a red tooltip\">\n  <span class=\"material-icons\">\n    notifications\n    </span>\n  </button>\n        <img class=\"xlicon media \" src=\"assets/img/xlicon.png\" (click)=\"exportAsXLSX()\">\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div id=\"table\" class=\"table-editable\">\n\n      <table class=\"table table-bordered table-responsive-md table-striped text-center table-media\">\n        <tr style=\"background-color: darkblue;color:white\">\n          <th class=\"text-center\">\n            Client ID</th>\n          <th class=\"text-center\">\n            FullName</th>\n            <th class=\"text-center\">\n              MobileNumber</th>\n          <th class=\"text-center\">Account_Type</th>\n          <th class=\"text-center\">Date of Activation</th>\n          <th class=\"text-center\">Date of Expiry</th>\n          <th class=\"text-center\">Action</th>\n          <th  class=\"text-center\">\n            Select All<input type=\"checkbox\" name=\"all\" [checked]=\"allToppings\" (change)=\"selectAllToppings($event.target.checked,personList)\"/>\n          </th>\n        </tr>\n        <tr *ngFor=\"let person of personList| filter: {client_id: searchText, client_firstname:searchText,  client_lastname: searchText,user_mobile_number:searchText,account_type:searchText}; let id=index;\" #loaded>          <td>\n            {{person.client_id}}\n          </td>\n          <td>\n            {{person.client_firstname}} {{person.client_lastname}}\n          </td>\n          <td>\n            {{person.user_mobile_number}}\n          </td>\n          <td>{{person.account_type}}</td>\n          <td>\n             {{person.plan_activation_date| date: 'dd/MM/yyyy'}}\n          </td>\n          <td>\n            {{person.plan_expiry_date| date: 'dd/MM/yyyy'}}\n         </td>\n         <td>\n          <img class=\"pointer\" src=\"assets/img/whatsaapicon.webp\" width=\"80%\" [routerLink]=\"['/downloadapksendsms',person.user_mobile_number]\">\n        </td>\n          <td>\n            <input type=\"checkbox\" name=\"sizecb[]\" value=\"{{person.id}}\" [checked]=\"allToppings\" (change)=\"selectNewTopping($event.target.checked,person)\"/>\n          </td>\n        </tr>\n      </table>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/campaign/notifytemplates/notifytemplates.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/campaign/notifytemplates/notifytemplates.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" routerLink=\"/campaignManage\">Go Back</button>\n\n\n<h4 class=\"text-center \" style=\"color: darkblue\">choose your Templates</h4>\n<br>\n\n<!--\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col md-3\">\n    <ng-container   *ngFor=\"let templateItem of categoryArr\">\n        <button type=\"button\" class=\"btn btn-dark-blue btn-md\" (click)=\"selectTemplate(templateItem)\">{{templateItem.template}}</button>\n    </ng-container>\n  </div>\n    </div>\n\n  </div> -->\n\n\n\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <ng-container *ngFor=\"let templateItem of message\">\n    <div class=\"col-md-4\">\n      <div class=\"card-deck\">\n\n          <div class=\"card mb-4\">\n\n            <div class=\"card-body\">\n\n              <!--Text-->\n              <h5 class=\"card-text\">{{templateItem.message}}</h5>\n              <!-- <button type=\"button\" class=\"btn purple-gradient\" >Select</button> -->\n              <br>\n              <mat-card-actions>\n                <button mat-raised-button  color=\"warn\" >Delete</button>&nbsp;\n                <button mat-raised-button  color=\"primary\" >Select</button>\n                <!-- <button mat-button>SHARE</button>  -->\n              </mat-card-actions>\n            </div>\n\n          </div>\n\n\n      </div>\n    </div>\n  </ng-container>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/campaign/pushnotify/pushnotify.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/campaign/pushnotify/pushnotify.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<h3>Select One RateCard</h3>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <select class=\"browser-default custom-select\" (input)=\"getpacksbyratecard($event.target.value)\">\r\n        <option selected>Select Package</option>\r\n        <option value=\"{{item.ratecard_id}}\" *ngFor=\"let item of smspackratecards\">{{item.ratecard_name}}</option>\r\n\r\n      </select>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <select class=\"browser-default custom-select\" (input)=\"getPremiumpacksByRateCard($event.target.value)\">\r\n        <option selected>Select Premium Plan</option>\r\n        <option value=\"{{item.ratecard_id}}\" *ngFor=\"let item of premiumpackratecards\">{{item.ratecard_name}}</option>\r\n\r\n      </select>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div id=\"table\" class=\"table-editable\">\r\n        <div *ngIf=\"personList\">\r\n        <table  class=\"table table-bordered table-responsive-md table-striped text-center table-media\">\r\n          <tr style=\"background-color: darkblue;color:white\">\r\n            <th class=\"text-center\">\r\n              PackageID</th>\r\n            <th class=\"text-center\">\r\n              PackageName</th>\r\n            <th class=\"text-center\">PackageRoute </th>\r\n            <th class=\"text-center\">UnitPrice</th>\r\n            <th class=\"text-center\">Credits </th>\r\n            <th class=\"text-center\">packagePrice</th>\r\n            <th class=\"text-center\">Validity</th>\r\n          </tr>\r\n          <tr *ngFor=\"let person of personList; let id = index\">\r\n            <td>\r\n              {{person.package_id}}\r\n            </td>\r\n            <td>\r\n              {{person.package_name}}\r\n            </td>\r\n            <td name=\"name\">\r\n              {{person.package_route}}\r\n            </td>\r\n            <td name=\"mobile\">\r\n              {{person.\tpackage_unit_price}}\r\n            </td>\r\n            <td name=\"address1\">\r\n              {{person.package_sms_credits}}\r\n            </td>\r\n            <td name=\"city\">\r\n              {{person.\tpackage_price}}\r\n            </td>\r\n            <td name=\"state\">\r\n              {{person.package_validity_in_months\t}}\r\n            </td>\r\n          </tr>\r\n        </table>\r\n        <button mdbBtn color=\"success\" block=\"true\" type=\"submit\" routerLink=\"/sendnotify\" (click)=\"confirmpackages(personList)\">Proceed</button>\r\n      </div>\r\n\r\n        <div *ngIf=\"premiumpacks\">\r\n          <table  class=\"table table-bordered table-responsive-md table-striped text-center table-media\" >\r\n            <tr style=\"background-color: darkblue;color:white\" >\r\n              <th class=\"text-center\">\r\n                PackageID</th>\r\n              <th class=\"text-center\">\r\n                PackageName</th>\r\n              <th class=\"text-center\">Credits</th>\r\n              <th class=\"text-center\">list Price </th>\r\n              <th class=\"text-center\">offered Price</th>\r\n              <th class=\"text-center\">packagePrice</th>\r\n              <th class=\"text-center\">Validity</th>\r\n              <th class=\"text-center\">status</th>\r\n\r\n            </tr>\r\n            <tr *ngFor=\"let person of premiumpacks; let id = index\" >\r\n              <td >\r\n\r\n           {{person.package_id}}\r\n              </td>\r\n              <td >\r\n             {{person.package_name}}\r\n                 </td>\r\n\r\n              <td >\r\n          {{person.\tfree_sms_credits}}\r\n              </td>\r\n              <td >\r\n           {{person.package_list_price}}\r\n              </td>\r\n              <td >\r\n                {{person.\tpackage_offered_price}}\r\n                   </td>\r\n              <td name=\"city\">\r\n                {{person.\ttotal_package_price}}\r\n              </td>\r\n              <td name=\"state\">\r\n           {{person.package_validity_in_months\t}}\r\n              </td>\r\n              <td name=\"state\">\r\n                {{person.package_status}}\r\n                   </td>\r\n            </tr>\r\n          </table>\r\n\r\n          <button mdbBtn color=\"success\" block=\"true\" type=\"submit\" routerLink=\"/sendnotify\" (click)=\"confirmpackages(premiumpacks)\">Proceed</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/campaign/sendnotification/sendnotification.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/campaign/sendnotification/sendnotification.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n      <form class=\"text-center border border-light p-5\"  (ngSubmit)=\" regform.form.valid&&pushnotify(regform.form.value)\" #regform=\"ngForm\">\n\n        <p class=\"h4 mb-4\">Send Push Notification</p>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultChecked2\" (change)=\"checkbox($event.target.checked)\" unchecked>\n          <label class=\"custom-control-label\" for=\"defaultChecked2\">Push Notification</label>\n        </div>\n        <div class=\"form-group\">\n          <textarea class=\"form-control rounded-0\" id=\"exampleFormControlTextarea2\" rows=\"3\"\n            placeholder=\"Message\" name=\"message\" ngModel></textarea>\n        </div>\n\n          <!-- <button mdbBtn color=\"info\"  type=\"button\" routerLink=\"/viewnotifyTemplates\">Select Template</button> -->\n\n          <button mdbBtn color=\"info\" type=\"submit\">Send</button>\n\n      </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cards/cards/cards.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cards/cards/cards.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cards/uploadcards/uploadcards.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cards/uploadcards/uploadcards.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n <button mat-stroked-button color=\"primary\" routerLink=\"/card/viewcards\">Back</button>\n\n <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n   <div class=\"medias mymedia text-center border border-light p-5 \" >\n       <img src=\"assets/img/addsmspack.jpg\" width=\"25%\">\n\n         <input type=\"text\"  class=\"form-control mb-4\" placeholder=\"Title\" formControlName=\"title\" >\n        <input type=\"file\"   class=\"form-control mb-4\" (change)=\"uploadFile($event)\">\n\n\n       <button mdbBtn color=\"info\" block=\"true\"  class=\"my-4\" type=\"submit\">Upload</button>\n   </div>\n   </form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cards/uploaddigprofile/uploaddigprofile.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cards/uploaddigprofile/uploaddigprofile.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <button mat-stroked-button color=\"primary\" routerLink=\"/card/viewcards\">Back</button>\n\n <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n   <div class=\"medias mymedia text-center border border-light p-5 \" >\n       <img src=\"assets/img/addsmspack.jpg\" width=\"25%\">\n\n         <input type=\"text\"  class=\"form-control mb-4\" placeholder=\"Title\" formControlName=\"title\" >\n        <input type=\"file\"   class=\"form-control mb-4\" (change)=\"uploadFile($event)\">\n\n\n       <button mdbBtn color=\"info\" block=\"true\"  class=\"my-4\" type=\"submit\">Upload</button>\n   </div>\n   </form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cards/viewcards/viewcards.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cards/viewcards/viewcards.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-stroked-button color=\"primary\" routerLink=\"/card/uploadcards\">\n  DigitalCards\n  <span class=\"material-icons\">\n  add\n  </span></button>\n  <button mat-stroked-button color=\"primary\" routerLink=\"/card/uploaddigiProfiles\">\n    DigitalProfiles\n    <span class=\"material-icons\">\n    add\n    </span></button>\n\n  <br><br>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\" *ngFor=\"let item of cards\">\n        <mat-card class=\"example-card\" >\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>{{item.image_title}}</mat-card-title>\n            <hr>\n          </mat-card-header>\n\n         <a href=\"{{item.image_filename}}\" target=\"_blank\"> <img mat-card-image [src]=\"item.image_filename\" width=\"50\" height=\"150\"></a>\n          <mat-card-actions>\n            <!-- <button mat-button>LIKE</button>\n            <button mat-button>SHARE</button> -->\n            <h6>Category: {{item.image_category}}</h6>\n\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/changepassword/changepassword.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/changepassword/changepassword.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div  class=\"marginal mrgset\" >\n  <mdb-card >\n\n    <mdb-card-header class=\"info-color white-text text-center py-4\">\n      <h5>\n        <strong>Change Password</strong>\n      </h5>\n    </mdb-card-header>\n\n\n\n    <mdb-card-body class=\"px-lg-5 pt-0\">\n\n\n      <form class=\"text-center\" [formGroup]=\"registerForm\"  (ngSubmit)=\"changePassword()\"  style=\"color: #757575;\">\n\n\n        <div class=\"md-form\">\n          <input type=\"email\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"  mdbInput>\n          <label for=\"materialLoginFormEmail\">New Password</label>\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n        </div>\n\n\n        <div class=\"md-form\">\n          <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" mdbInput>\n          <label for=\"materialLoginFormPassword\">Confirm Password</label>\n          <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n            <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n        </div>\n        </div>\n\n        <div class=\"srmc\">\n        <button  mdbBtn color=\"info\" outline=\"true\" rounded=\"true\" block=\"true\" class=\"my-4 waves-effect z-depth-0 bttn\" mdbWavesEffect\n          type=\"submit\" >Change</button>\n        </div>\n\n      </form>\n\n\n    </mdb-card-body>\n\n  </mdb-card>\n  </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clientsManage/add-clients/add-clients.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clientsManage/add-clients/add-clients.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"regform.form.valid&&addnewClient(regform.form.value)\" #regform=\"ngForm\">\r\n  <div class=\"medias mymedia text-center border border-light p-5 \">\r\n\r\n\r\n    <img src=\"assets/img/newagenticon.png\" width=\"25%\">\r\n\r\n\r\n    <select class=\"browser-default custom-select\" name=\"profession_id\" ngModel>\r\n      <option selected value=\"\" default>Select Profession</option>\r\n      <option value=\"{{item.profession_id}}\" *ngFor=\"let item of professions\">{{item.profession_name}}</option>\r\n    </select>\r\n    <br><br>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <input type=\"text\" class=\"form-control mb-4\" placeholder=\"firstName\" #firstName=\"ngModel\"\r\n          [(ngModel)]=\"model.firstName\" name=\"client_firstname\" required\r\n          [ngClass]=\"{'invalid-textbox' :regform.submitted && !firstName.valid }\">\r\n        <div *ngIf=\"regform.submitted && firstName.errors?.pattern\">\r\n          <label class=\"validation-message\">first Name is required.</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <input type=\"text\" class=\"form-control mb-4\" placeholder=\"lastName\" #lastName=\"ngModel\"\r\n          [(ngModel)]=\"model.lastName\" name=\"client_lastname\" required\r\n          [ngClass]=\"{'invalid-textbox' :regform.submitted && !lastName.valid }\">\r\n        <div *ngIf=\"regform.submitted && lastName.errors?.pattern\">\r\n          <label class=\"validation-message\">lastName is required.</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <input type=\"text\" class=\"form-control mb-4\" placeholder=\"mobileNumber\" name=\"client_mobile_number\"\r\n          minlength=\"10\" maxlength=\"10\" ngModel>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <input type=\"text\" class=\"form-control mb-4\" placeholder=\"whatsaapNumber\" name=\"client_whatsapp_number\"\r\n          minlength=\"10\" maxlength=\"10\" ngModel>\r\n      </div>\r\n    </div>\r\n    <input type=\"text\" class=\"form-control mb-4\" placeholder=\"Email\" #email=\"ngModel\" [(ngModel)]=\"model.email\"\r\n      name=\"client_email\" [pattern]=\"emailRegex\" required\r\n      [ngClass]=\"{'invalid-textbox' :regform.submitted && !email.valid }\">\r\n    <div *ngIf=\"regform.submitted && email.errors?.pattern\">\r\n      <label class=\"validation-message\">Invalid email address.</label>\r\n    </div>\r\n    <!-- <div class=\"form-row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <input type=\"text\" class=\"form-control mb-4\" placeholder=\"client_address1\" name=\"address1\" ngModel>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <input type=\"text\" class=\"form-control mb-4\" placeholder=\"client_address2\" name=\"address2\" ngModel>\r\n      </div>\r\n    </div> -->\r\n\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <input type=\"text\" class=\"form-control mb-4\" placeholder=\"City\" name=\"client_city\" ngModel>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <input type=\"text\" class=\"form-control mb-4\" placeholder=\"Pincode\" name=\"client_pincode\" maxlength=\"6\"\r\n          ngModel (input)=\"postofficeApi($event.target.value)\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-md-6\">\r\n\r\n    <select class=\"browser-default custom-select\" name=\"postoffice\" ngModel>\r\n      <option selected value=\"\" default>Post Office</option>\r\n      <option value=\"{{item.postoffice}}\" *ngFor=\"let item of postoffice\">{{item.postoffice}}</option>\r\n    </select>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <input type=\"text\" class=\"form-control mb-4\" placeholder=\"Dstrict\" name=\"client_district\"\r\n          [(ngModel)]=\"district\">\r\n      </div>\r\n    </div>\r\n    <input type=\"text\" class=\"form-control mb-4\" placeholder=\"State\" name=\"client_state\" [(ngModel)]=\"state\">\r\n    <!-- Sign up button -->\r\n    <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\">Add</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clientsManage/bulkprofile-create/bulkprofile-create.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clientsManage/bulkprofile-create/bulkprofile-create.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h3>Create Profiles from XL-File</h3>\n<div class=\"medias mymedia text-center border border-light p-5 \" >\n\n <form (ngSubmit)=\"regform.form.valid&&importdata(regform.form.value)\" #regform=\"ngForm\">\n\n       <img src=\"assets/img/groupicon.png\" width=\"25%\">\n\n\n        <input type=\"file\" (change)=\"onFileChange($event)\"   class=\"form-control mb-4\" >\n\n       <button mdbBtn color=\"info\" block=\"true\"  class=\"my-4\" type=\"submit\">Import</button>\n\n   </form>\n\n\n   <a href=\"assets/xl/samplebulkprofile.xlsx\"><button mat-button color=\"primary\">Download sample </button></a>\n\n\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clientsManage/client/client.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clientsManage/client/client.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clientsManage/edit-clients/edit-clients.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clientsManage/edit-clients/edit-clients.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form (ngSubmit)=\"updateclientData(regform.form.value)\" #regform=\"ngForm\">\r\n  <div class=\"medias mymedia text-center border border-light p-5 \" *ngFor=\"let user of userdata\">\r\n    <h5>Client Name: {{user.client_firstname}} {{user.client_lastname}}</h5>\r\n    <h6>ClientId: {{user.client_id}}</h6> <img src=\"assets/img/person.png\" width=\"25%\">\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n    <div class=\"col-md-6\">\r\n    UserId<input type=\"text\" class=\"form-control mb-4\" placeholder=\"UserId\" name=\"user_smsgateway_id\" [(ngModel)]=\"user.user_smsgateway_id\">\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n    Authkey<input type=\"text\" class=\"form-control mb-4\" placeholder=\"user_smsgateway_authkey\"\r\n      name=\"user_smsgateway_authkey\" [(ngModel)]=\"user.user_smsgateway_authkey\">\r\n    </div>\r\n      <div class=\"col-md-4\">\r\n\r\n      SenderId<input type=\"text\" class=\"form-control mb-4\" placeholder=\"SenderId \" maxlength=\"6\" name=\"user_smsgateway_sender_id\"\r\n      [(ngModel)]=\"user.user_smsgateway_sender_id\">\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n    SenderId 1<input type=\"text\" class=\"form-control mb-4\" placeholder=\"SenderId 1\" maxlength=\"6\" name=\"user_smsgateway_sender_id1\"\r\n      [(ngModel)]=\"user.user_smsgateway_sender_id1\">\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n    SenderId 2<input type=\"text\" class=\"form-control mb-4\" placeholder=\"SenderId 2\" maxlength=\"6\" name=\"user_smsgateway_sender_id2\"\r\n      [(ngModel)]=\"user.user_smsgateway_sender_id2\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n    Route\r\n    <select class=\"browser-default custom-select\" name=\"user_smsgateway_route\" [(ngModel)]=\"user.user_smsgateway_route\">\r\n      <option selected value=\"\">select Route</option>\r\n      <option value=\"1\">1-Promo</option>\r\n      <option value=\"4\">4-Tran</option>\r\n      <option value=\"16\">16-OTP</option>\r\n    </select>\r\n</div>\r\n<div class=\"col-md-6\">\r\n    PID<input type=\"text\" class=\"form-control mb-4\" placeholder=\"PID\" name=\"user_smsgateway_pid\"\r\n      [(ngModel)]=\"user.user_smsgateway_pid\">\r\n</div>\r\n<div class=\"col-md-6\">\r\n    Unicode\r\n    <select class=\"browser-default custom-select\" name=\"user_smsgateway_unicode\"\r\n      [(ngModel)]=\"user.user_smsgateway_unicode\">\r\n      <option selected value=\"\">Select</option>\r\n      <option value=\"1\">1-Hindi</option>\r\n      <option value=\"0\">0-English</option>\r\n    </select>\r\n    </div>\r\n    <!-- <div class=\"col-md-4\">\r\n    AccountType<input type=\"text\" disabled class=\"form-control mb-4\" placeholder=\"AccountType\" name=\"account_type\"\r\n      [(ngModel)]=\"user.account_type\" value=\"user.account_type\">\r\n</div> -->\r\n\r\n<div class=\"col-md-6\">\r\n    AccountStatus\r\n    <select class=\"browser-default custom-select\" name=\"account_status\" [(ngModel)]=\"user.account_status\">\r\n      <option selected value=\"\">Select</option>\r\n      <option value=\"review\" [disabled]=\"user.account_status=='active'\">Review</option>\r\n      <option value=\"active\" [disabled]=\"user.account_status=='active'\">Active</option>\r\n      <option value=\"pending\" [disabled]=\"user.account_status=='active'\">Pending</option>\r\n      <option value=\"disable\" [disabled]=\"user.account_status=='active'\">Disable</option>\r\n    </select>\r\n</div>\r\n\r\n <div class=\"col-md-6\">\r\n    SIM Allowed<select class=\"browser-default custom-select\" name=\"is_sim_allowed\" [(ngModel)]=\"user.is_sim_allowed\">\r\n      <option value=\"\" selected>select</option>\r\n      <option value=\"YES\">Yes</option>\r\n      <option value=\"NO\">No</option>\r\n    </select>\r\n</div>\r\n    <div class=\"col-md-6\">\r\n    MinBalance Required<select class=\"browser-default custom-select\" name=\"is_min_bal_req\" [(ngModel)]=\"user.is_min_bal_req\">\r\n      <option value=\"\" selected>select</option>\r\n      <option value=\"YES\">Yes</option>\r\n      <option value=\"NO\">No</option>\r\n\r\n    </select>\r\n</div>\r\n\r\n<div class=\"col-md-6\">\r\n  <br>\r\n  Account_plan_id<input type=\"text\" class=\"form-control mb-4\" placeholder=\"account_plan_id\" [(ngModel)]=\"user.account_plan_id\" name=\"account_plan_id\" disabled>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <br>\r\n    plan_expiry_date<input type=\"date\" class=\"form-control mb-4\"   [ngModel]=\"user.plan_expiry_date| date:'y-MM-dd'\" (ngModelChange)=\"user.plan_expiry_date = $event\" name=\"plan_expiry_date\" >\r\n\r\n    </div>\r\n    <!-- Sign up button -->\r\n    <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\">Update</button>\r\n  </div>\r\n</div>\r\n</div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clientsManage/sendbulksms/sendbulksms.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clientsManage/sendbulksms/sendbulksms.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n      <form class=\"text-center border border-light p-5\"  (ngSubmit)=\" regform.form.valid&&sendsms(regform.form.value)\" #regform=\"ngForm\">\n\n        <p class=\"h4 mb-4\">Send SMS To Clients</p>\n        <!-- <div class=\"custom-control custom-checkbox\">\n          <label class=\"custom-control-label\" for=\"defaultChecked2\">Push Notification</label>\n        </div> -->\n        <div class=\"form-group\">\n\n<textarea class=\"form-control\" [(ngModel)]=\"mobilenumbers\" name=\"mobilenumbers\" placeholder=\"MObileNumbers\"></textarea>&nbsp;\n          <textarea class=\"form-control rounded-0\" id=\"exampleFormControlTextarea2\" rows=\"3\"\n            placeholder=\"Message\" name=\"message\" ngModel></textarea>\n        </div>\n\n          <!-- <button mdbBtn color=\"info\"  type=\"button\" routerLink=\"/viewnotifyTemplates\">Select Template</button> -->\n\n          <button mat-button color=\"primary\" routerLink=\"/client/viewclient\">Back</button>  <button mdbBtn color=\"info\" type=\"submit\">Send SMS</button>\n\n      </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clientsManage/sendsmstoclients/sendsmstoclients.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clientsManage/sendsmstoclients/sendsmstoclients.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n      <form class=\"text-center border border-light p-5\"  (ngSubmit)=\" regform.form.valid&&sendsms(regform.form.value)\" #regform=\"ngForm\">\n\n        <p class=\"h4 mb-4\">Send SMS To Clients</p>\n        <!-- <div class=\"custom-control custom-checkbox\">\n          <label class=\"custom-control-label\" for=\"defaultChecked2\">Push Notification</label>\n        </div> -->\n        <div class=\"form-group\">\n<h5><b>Send To:</b>&nbsp;{{mobilenumbers}}</h5>\n          <textarea class=\"form-control rounded-0\" id=\"exampleFormControlTextarea2\" rows=\"3\"\n            placeholder=\"Message\" name=\"message\" ngModel></textarea>\n        </div>\n\n          <!-- <button mdbBtn color=\"info\"  type=\"button\" routerLink=\"/viewnotifyTemplates\">Select Template</button> -->\n\n          <button mat-button color=\"primary\" routerLink=\"/client/viewclient\">Back</button>  <button mdbBtn color=\"info\" type=\"submit\">Send SMS</button>\n\n      </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clientsManage/view-detail/view-detail.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clientsManage/view-detail/view-detail.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Jumbotron -->\r\n<div class=\"jumbotron p-0\">\r\n  <div class=\"avatar mx-auto white\"><img src=\"assets/img/person.png\" class=\"rounded-circle\">\r\n  </div>\r\n  <!-- Card image -->\r\n  <div class=\"view overlay rounded-top\">\r\n    <div class=\"card text-center\">\r\n      <div class=\"conatiner\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <h4>Personal Details</h4>\r\n            <ul class=\"list-group list-group-flush\">\r\n\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">ClientId</strong>:\r\n                  <span class=\"list-group-right\">{{personList.client_id}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">FullName</strong>:\r\n                  <span class=\"list-group-right\">{{personList.client_firstname}}{{personList.client_lastname}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">Email</strong>:\r\n                  <span class=\"list-group-right\">{{personList.user_email}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">MobileNumber</strong>:\r\n                  <span class=\"list-group-right\">{{personList.user_mobile_number}}</span>\r\n                </div>\r\n              </li>\r\n\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">WhatsappNumber</strong>:\r\n                  <span class=\"list-group-right\">{{personList.client_whatsapp_number}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">TelegramNumber</strong>:\r\n                  <span class=\"list-group-right\">{{personList.client_telegram_number}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">City</strong>:\r\n                  <span class=\"list-group-right\">{{personList.client_city}}</span>\r\n                </div>\r\n              </li>\r\n\r\n              <h4>Gateway Details</h4>\r\n\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">SenderId 2</strong>:\r\n                  <span class=\"list-group-right\">{{personList.user_smsgateway_sender_id2}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">Route</strong>:\r\n                  <span class=\"list-group-right\">{{personList.user_smsgateway_route}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">Gateway Status</strong>:\r\n                  <span class=\"list-group-right\">{{personList.user_smsgateway_regn_status}}</span>\r\n                </div>\r\n              </li>\r\n              <h4>Plan Details</h4>\r\n\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">Account-Type</strong>:\r\n                  <span class=\"list-group-right\">{{personList.account_type}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">Act Date</strong>:\r\n                  <span class=\"list-group-right\">{{personList.plan_activation_date|date: 'dd/MM/yyyy'}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">Exp date</strong>:\r\n                  <span class=\"list-group-right\">{{personList.plan_expiry_date|date: 'dd/MM/yyyy'}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">SMS-Act-Date</strong>:\r\n                  <span class=\"list-group-right\">{{personList.smspackage_act_date|date}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">SMS-Exp-Date</strong>:\r\n                  <span class=\"list-group-right\">{{personList.smspackage_exp_date|date}}</span>\r\n                </div>\r\n              </li>\r\n\r\n            </ul>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-md-6\">\r\n            <h4>Personal Details</h4>\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">Address1</strong>:\r\n                  <span class=\"list-group-right\">{{personList.client_address1}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">Address2</strong>:\r\n                  <span class=\"list-group-right\">{{personList.client_address2}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">District</strong>:\r\n                  <span class=\"list-group-right\">{{personList.client_district}}</span>\r\n                </div>\r\n              </li>\r\n\r\n\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">Postoffice</strong>:\r\n                  <span class=\"list-group-right\">{{personList.client_postoffice}}</span>\r\n                </div>\r\n              </li>\r\n\r\n\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">Pincode</strong>:\r\n                  <span class=\"list-group-right\">{{personList.client_pincode}}</span>\r\n                </div>\r\n              </li>\r\n\r\n\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">State</strong>:\r\n                  <span class=\"list-group-right\">{{personList.client_state}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">Profession</strong>:\r\n                  <span class=\"list-group-right\">{{personList.client_company_name}}</span>\r\n                </div>\r\n              </li>\r\n\r\n              <h4>Gateway Details</h4>\r\n\r\n\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">PID</strong>:\r\n                  <span class=\"list-group-right\">{{personList.user_smsgateway_pid}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">Unicode</strong>:\r\n                  <span class=\"list-group-right\">{{personList.unicode}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">Reg-Channel</strong>:\r\n                  <span class=\"list-group-right\">{{personList.user_regn_channel}}</span>\r\n                </div>\r\n              </li>\r\n              <h4>Plan Details</h4>\r\n\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">Cross-RegStatus</strong>:\r\n                  <span class=\"list-group-right\">{{personList.user_cross_regn_status}}</span>\r\n                </div>\r\n              </li>\r\n\r\n\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">SIM Allowed </strong>:\r\n                  <span class=\"list-group-right\">{{personList.is_sim_allowed}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">MIN Bal Req</strong>:\r\n                  <span class=\"list-group-right\">{{personList.is_min_bal_req}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">Account Status</strong>:\r\n                  <span class=\"list-group-right\">{{personList.account_status}}</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"list-group-item-fixed\">\r\n                  <strong class=\"list-group-left\">ClientIndustry</strong>:\r\n                  <span class=\"list-group-right\">{{personList.client_industry}}</span>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body text-center mb-3\">\r\n      <a class=\"btn purple-gradient btn-rounded mb-4\" routerLink=\"/client/viewclient\">Close</a>\r\n\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clientsManage/viewclients/viewclients.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clientsManage/viewclients/viewclients.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<div class=\"card\">\r\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">View Clients</h3>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 search\">\r\n        <button mat-mini-fab color=\"primary\" aria-label=\"Example icon button with a menu icon\" (click)=\"getClients()\">\r\n          <mdb-icon fas icon=\"sync-alt\"></mdb-icon>\r\n        </button>&nbsp;\r\n          <input  type=\"text\" [(ngModel)]=\"searchText\" placeholder=\" Search By Filter\"\r\n            aria-label=\"Search\" >\r\n\r\n\r\n          <select class=\"browser-default custom-select filter\" (change)=\"getclientsbyfilter($event.target.value)\">\r\n            <option selected value=\"\">select</option>\r\n            <option  value=\"All\">ALL</option>\r\n            <option value=\"review\" >Review</option>\r\n            <option value=\"active\">Active</option>\r\n            <option value=\"pending\">Pending</option>\r\n            <option value=\"disable\">Disable</option>\r\n          </select>\r\n          &nbsp;&nbsp;\r\n<img src=\"assets/img/bulksmsicon.png\" width=\"12%\" (click)=\"selectclients()\">\r\n      </div>\r\n      <div class=\"col-md-6 mubutn\">\r\n\r\n\r\n\r\n\r\n        <button mat-stroked-button color=\"primary\" routerLink=\"/client/addclient\">\r\n          Add\r\n          <span class=\"material-icons\">\r\n            add\r\n          </span></button>\r\n          <button mat-stroked-button color=\"primary\" routerLink=\"/client/createprofile\" *ngIf=\"role =='admin'\">\r\n            Bulkprofile Create\r\n              <span class=\"material-icons\">\r\n                add\r\n              </span></button>\r\n\r\n        <img class=\"xlicon media \" src=\"assets/img/xlicon.png\" (click)=\"exportAsXLSX()\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div id=\"table\" class=\"table-editable\">\r\n\r\n      <table class=\"table table-bordered table-responsive-md table-striped text-center table-media\">\r\n        <tr style=\"background-color: darkblue;color:white\">\r\n          <th class=\"text-center\">\r\n           Client ID</th>\r\n          <th class=\"text-center\">\r\n            FullName</th>\r\n          <th class=\"text-center\">Mobile</th>\r\n          <th class=\"text-center\">Status</th>\r\n          <th colspan=\"2\" class=\"text-center\">whatsaap/SMS</th>\r\n          <th colspan=\"4\" class=\"text-center\">Action\r\n          </th>\r\n          <th class=\"text-center\">select All <input type=\"checkbox\" name=\"all\" [checked]=\"allToppings\" (change)=\"selectAllToppings($event.target.checked,personList)\"/></th>\r\n\r\n        </tr>\r\n        <tr *ngFor=\"let person of personList| filter: {client_id: searchText, client_firstname:searchText,  client_lastname: searchText,user_mobile_number:searchText,account_type:searchText}; let id=index;\" #loaded>\r\n          <td>\r\n            {{person.client_id}}\r\n          </td>\r\n          <td>\r\n            {{person.client_firstname}}&nbsp;{{person.client_lastname}}\r\n          </td>\r\n          <td name=\"name\">\r\n            {{person.user_mobile_number}}\r\n          </td>\r\n          <td name=\"mobile\">\r\n            <select class=\"browser-default custom-select\" [(ngModel)]=\"person.account_status\" name=\"account_status\">\r\n              <option selected value=\"\">select</option>\r\n              <option value=\"review\"  [disabled]=\"person.account_status=='active'\">Review</option>\r\n              <option value=\"active\"  [disabled]=\"person.account_status=='active'\">Active</option>\r\n              <option value=\"pending\" [disabled]=\"person.account_status=='active'\">Pending</option>\r\n              <option value=\"disable\" [disabled]=\"person.account_status=='active'\">Disable</option>\r\n            </select>\r\n          </td>\r\n\r\n          <td>\r\n            <img class=\"pointer\" src=\"assets/img/whatsaapicon.webp\" width=\"100%\" [routerLink]=\"['/downloadapksendsms',person.user_mobile_number]\">\r\n          </td>\r\n          <td class=\"pointer\">\r\n           <a [routerLink]=\"['/client/sendsms/',person.user_mobile_number]\"><span class=\"material-icons\">\r\n              sms\r\n              </span>\r\n            </a>\r\n            </td>\r\n          <td>\r\n            <a>\r\n              <span class=\"material-icons\" (click)=\"updatestatus(person)\" matTooltip=\"Save\"\r\n              matTooltipClass=\"example-tooltip-red\"\r\n              aria-label=\"Button that shows a red tooltip\">\r\n                save\r\n                </span>\r\n                </a>\r\n              </td>\r\n          <td>\r\n           <a> <span class=\"material-icons\" [routerLink]=\"['/client/viewDetail/',person.client_id]\"      matTooltip=\"View Detailed\"\r\n            matTooltipClass=\"example-tooltip-red\"\r\n            aria-label=\"Button that shows a red tooltip\">\r\n              visibility\r\n              </span>\r\n              </a>\r\n          </td>\r\n\r\n          <td>\r\n           <a [routerLink]=\"['/client/editclient/',person.client_id]\"> <span class=\"table-Add\"      matTooltip=\"Edit User\"\r\n            matTooltipClass=\"example-tooltip-red\"\r\n            aria-label=\"Button that shows a red tooltip\">\r\n              <i class=\"fas fa-user-edit\" ></i>\r\n            </span></a>\r\n          </td>\r\n          <td *ngIf=\"role=='admin'\">\r\n            <a (click)=\"deleteclient(person.client_id)\">\r\n              <span class=\"material-icons\"      matTooltip=\"Delete User\"\r\n              matTooltipClass=\"example-tooltip-red\"\r\n              aria-label=\"Button that shows a red tooltip\">\r\n                delete\r\n                </span>\r\n            </a>\r\n          </td>\r\n          <td>\r\n            <input type=\"checkbox\" name=\"sizecb[]\" value=\"{{person.id}}\" [checked]=\"allToppings\" (change)=\"selectNewTopping($event.target.checked,person)\"/>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n\r\n      <h6 class=\"errorMessage\" *ngIf=\"errorMessage\">{{errorMessage}}</h6>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dwnldapksendsms/dwnldapksendsms.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dwnldapksendsms/dwnldapksendsms.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <form (ngSubmit)=\" share(regform.form.value)\" #regform=\"ngForm\">\n  <input class=\"mobileShow\"\n  type=\"text\" name=\"message\" ngModel>\n<button  type=\"submit\" class=\"mobileShow\">\n  Share to whatsapp\n</button>\n</form> -->\n\n<h3>Send SMS To Whatsapp </h3>\n<div class=\"medias mymedia text-center border border-light p-5 \">\n  <form (ngSubmit)=\"regform.form.valid && share(regform.form.value)\" #regform=\"ngForm\">\n\n    <img src=\"assets/img/whatsaapicon.webp\" width=\"25%\"><br><br>\n\n    <ng-container>\n\n      <div>\n        <textarea class=\"form-control mb-4\" [(ngModel)]=\"message\" #text=ngModel name=\"message\" placeholder=\"message\"\n          [ngClass]=\"{ 'is-invalid': regform.submitted && text.invalid }\" required></textarea>\n        <div *ngIf=\"regform.submitted && text.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"text.errors.required\">Message is required</div>\n        </div>\n      </div>\n    </ng-container>\n\n    <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\">SendSMS</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/helpdesk/helpdesk/helpdesk.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/helpdesk/helpdesk/helpdesk.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/helpdesk/updateticket/updateticket.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/helpdesk/updateticket/updateticket.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>updateticket works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/helpdesk/viewhelpdesk/viewhelpdesk.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/helpdesk/viewhelpdesk/viewhelpdesk.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"card\">\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">HelpDesk</h3>\n<form (ngSubmit)=\"regform.form.valid&&getDataByQuery(regform.form.value)\" #regform=\"ngForm\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <label>Status:</label><select class=\"browser-default custom-select\" name=\"status\" ngModel>\n          <option selected value=\"\">select</option>\n          <option value=\"Opened\">Opened</option>\n          <option value=\"Inprogress\">Inprogress</option>\n          <option value=\"Pending\">Pending</option>\n          <option value=\"Resolved\">Resolved</option>\n          <option value=\"Closed\">Closed</option>\n          <option value=\"All\">All</option>\n        </select>\n      </div>\n      <div class=\"col-md-2\">\n        <label>From Date:</label>\n        <input type=\"date\"  name=\"fromDate\" ngModel>\n      </div>\n&nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"col-md-2\">\n        <label>To Date:</label>\n        <input type=\"date\" name=\"toDate\" ngModel>\n      </div>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"col-md-2 mubutn\">\n        <input type=\"submit\" >\n      </div>\n\n      <div class=\"col-md-4 mubutn\">\n        <img class=\"xlicon media \" src=\"assets/img/xlicon.png\" (click)=\"exportAsXLSX()\">\n      </div>\n    </div>\n  </div>\n\n</form>\n\n<div class=\"card-body\">\n  <div id=\"table\" class=\"table-editable\">\n\n    <table class=\"table table-bordered table-responsive-md table-striped text-center table-media\">\n      <tr style=\"background-color: darkblue;color:white\">\n        <th class=\"text-center\">\n          Date</th>\n        <th class=\"text-center\">\n          Ticket#</th>\n\n        <th class=\"text-center\">TicketDescription</th>\n\n        <th class=\"text-center\">Status</th>\n        <th class=\"text-center\">Tracking Comments</th>\n        <th class=\"text-center\">Action</th>\n\n      </tr>\n      <tr *ngFor=\"let person of personList; let id = index\">\n        <td>{{person.created_on| date }}</td>\n\n        <td>\n          {{person.query_id}}\n        </td>\n\n        <td>\n        {{person.subject}}\n        </td>\n\n        <td >\n         <select class=\"browser-default custom-select\" [(ngModel)]=\"person.status\" name=\"status\">\n            <option selected value=\"\">select</option>\n            <option value=\"Opened\">Opened</option>\n            <option value=\"Inprogress\">Inprogress</option>\n            <option value=\"Pending\">Pending</option>\n            <option value=\"Resolved\">Resolved</option>\n            <option value=\"Closed\">Closed</option>\n            <option value=\"All\">All</option>\n          </select>\n        </td>\n\n        <td>\n          <span contenteditable=\"true\">  {{person.message}}</span>\n\n        </td>\n        <td>\n        <a>\n\n          <span class=\"material-icons\" (click)=\"updateticketstatus(person)\" matTooltip=\"View Detailed\"\n          matTooltipClass=\"example-tooltip-red\"\n          aria-label=\"Button that shows a red tooltip\">\n            save\n            </span>\n\n            </a>\n          </td>\n      </tr>\n    </table>\n<p *ngIf=\"message\" style=\"text-align: center\">{{message}}</p>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/default/default.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/default/default.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header (toggleSideBarForMe)=\"sideBarToggler($event)\"></app-header>\n\n<mat-drawer-container>\n    <mat-drawer mode=\"side\" [opened]=\"sideBarOpen\">\n        <app-sidebar></app-sidebar>\n    </mat-drawer>\n    <mat-drawer-content>\n        <router-outlet></router-outlet>\n    </mat-drawer-content>\n</mat-drawer-container>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/dashboard.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/dashboard/dashboard.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\r\n    <app-widget-area [data]=\"bigChart\"></app-widget-area>\r\n</div>\r\n\r\n<br>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<br> -->\r\n<!--\r\n<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"20px\" class=\"stats-cards\">\r\n  <mat-card fxFlex=\"25\">\r\n      <app-widget-card label=\"New Users\" total=\"12\" percentage=\"50\" [data]=\"cards\"></app-widget-card>\r\n  </mat-card>\r\n  <mat-card fxFlex=\"25\">\r\n      <app-widget-card label=\"Plan Expiring \" total=\"22\" percentage=\"40\" [data]=\"cards\"></app-widget-card>\r\n  </mat-card>\r\n  <mat-card fxFlex=\"25\">\r\n      <app-widget-card label=\"Upgrades  \" total=\"8\" percentage=\"30\" [data]=\"cards\"></app-widget-card>\r\n  </mat-card>\r\n  <mat-card fxFlex=\"25\">\r\n      <app-widget-card label=\"SMS Credits Sold\" total=\"10\" percentage=\"20\" [data]=\"cards\"></app-widget-card>\r\n  </mat-card>\r\n</div> -->\r\n\r\n<!-- <br>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<br>\r\n\r\n<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"20px\">\r\n  <div fxFlex=\"60\">\r\n      <div class=\"mat-elevation-z8\">\r\n          <table mat-table [dataSource]=\"dataSource\">\r\n\r\n\r\n              <ng-container matColumnDef=\"position\">\r\n                  <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"name\">\r\n                  <th mat-header-cell *matHeaderCellDef> Name </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"weight\">\r\n                  <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"symbol\">\r\n                  <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          </table>\r\n\r\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator>\r\n      </div>\r\n\r\n  </div>\r\n  <div fxFlex=\"40\">\r\n      <app-widget-pie [data]=\"pieChart\"></app-widget-pie>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<br>\r\n<br> -->\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n      <div class=\"card card-stats\">\r\n        <div class=\"card-header card-header-info card-header-icon\">\r\n\r\n          <div>\r\n            <i class=\"fas fa-user-plus\">&nbsp;New Clients</i>\r\n            <p class=\"card-category\"></p>\r\n            <ul class=\"list-group list-group-horizontal-md\" >\r\n              <div class=\"list\">\r\n                <li >Today</li>\r\n                <h4 class=\"card-title\" >{{newclients}}</h4>\r\n              </div>\r\n\r\n              <div class=\"weak\">\r\n                <li >This Week</li>\r\n                <h4 class=\"card-title\" >{{newusersweekly}}</h4>\r\n              </div>\r\n            </ul>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"stats\">\r\n            <i class=\"material-icons\">update</i> Just Updated\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n      <div class=\"card card-stats\">\r\n        <div class=\"card-header card-header-success card-header-icon\">\r\n          <div >\r\n            <div class=\"card-icon\">\r\n              <i class=\"fas fa-users\">&nbsp;Total Clients</i>\r\n            </div>\r\n            <p class=\"card-category\"></p>\r\n\r\n\r\n          <ul class=\"list-group list-group-horizontal-md\" *ngIf=\"userdata\">\r\n            <div class=\"list\">\r\n              <li >Freedom    </li>\r\n              <h4 class=\"card-title\" >{{userdata.Freedom}}</h4>\r\n            </div>\r\n&nbsp;&nbsp;      &nbsp;&nbsp;\r\n            <div class=\"list\">\r\n              <li >Silver    </li>\r\n              <h4 class=\"card-title\" >{{userdata.Silver}}</h4>\r\n            </div>\r\n            &nbsp;&nbsp;      &nbsp;&nbsp;\r\n            <div class=\"list\">\r\n              <li >Gold  </li>\r\n              <h4 class=\"card-title\" >{{userdata.Gold}}</h4>\r\n            </div>\r\n            &nbsp;&nbsp;  &nbsp;&nbsp;\r\n            <div class=\"list\">\r\n              <li >Diamond  </li>\r\n              <h4 class=\"card-title\" >{{userdata.Diamond}}</h4>\r\n            </div>\r\n          </ul>\r\n        </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"card-footer\">\r\n          <div class=\"stats\">\r\n            <i class=\"material-icons\">date_range</i> Last 24 Hours\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n      <div class=\"card card-stats\">\r\n        <div class=\"card-header card-header-danger card-header-icon\" >\r\n          <div >\r\n          <div class=\"card-icon\">\r\n            <i class=\"fas fa-briefcase\">&nbsp; Plan Expiring</i>\r\n          </div>\r\n          <p class=\"card-category\"></p>\r\n          <ul class=\"list-group list-group-horizontal-md\">\r\n            <div class=\"list\">\r\n              <li >Today</li>\r\n              <h4 class=\"card-title\" >{{planexpirytdy}}</h4>\r\n            </div>\r\n\r\n            <div class=\"weak\">\r\n              <li >This Week</li>\r\n              <h4 class=\"card-title\" >{{planexpiryweekly}}</h4>\r\n            </div>\r\n          </ul>\r\n        </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"stats\">\r\n            <i class=\"material-icons\">date_range</i> Last 24 Hours\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n<!--\r\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n      <div class=\"card card-stats\" >\r\n        <div class=\"card-header card-header-warning card-header-icon\">\r\n          <div class=\"card-icon\">\r\n            <i class=\"fas fa-hand-holding-usd\"></i>\r\n          </div>\r\n            <p class=\"card-category\"> Payments Received</p>\r\n\r\n            <h4 class=\"card-title\" >   20 </h4>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"stats\">\r\n            <i class=\"material-icons\">date_range</i> 10  validity\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/posts/posts.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/posts/posts.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>posts works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"userDetails\" class=\"table-fill\">\n  <thead>\n      <tr>\n          <th colspan=\"2\" class=\"text-center\">User Profile</th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr>\n          <td>First Name</td>\n          <td>{{userDetails.fullName.split(' ')[0]}}</td>\n      </tr>\n      <tr>\n          <td>Last Name</td>\n          <td>{{userDetails.fullName.split(' ')[1]}}</td>\n      </tr>\n      <tr>\n          <td>Email</td>\n          <td>{{userDetails.email}}</td>\n      </tr>\n\n  </tbody>\n</table>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/footer/footer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-divider></mat-divider>\n<footer>\n    &copy; All rights reserved 2019\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <button mat-icon-button (click)=\"toggleSideBar()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n\r\n    <span> NUTANTEK </span>\r\n\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"flex-end\">\r\n      <ul fxLayout=\"row\" fxLayoutGap=\"20px\">\r\n        <li>\r\n          <button mat-icon-button>\r\n            <mat-icon>settings</mat-icon>\r\n          </button>\r\n        </li>\r\n        <li>\r\n          <button mat-icon-button>\r\n            <mat-icon>help_outline</mat-icon>\r\n          </button>\r\n        </li>\r\n        <li>\r\n          <button mat-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>person_outline</mat-icon>\r\n          </button>\r\n\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item routerLink=\"/changepassword\">\r\n              <mat-icon>exit_to_app</mat-icon>\r\n              Change Password\r\n            </button>\r\n            <button mat-menu-item (click)=\"onLogout()\" value=\"Logout\">\r\n              <mat-icon>exit_to_app</mat-icon>\r\n              Sign out\r\n            </button>\r\n          </mat-menu>\r\n\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/sidebar/sidebar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/sidebar/sidebar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n    <div class=\"profile-card\">\r\n        <div class=\"header\">\r\n        </div>\r\n        <img src=\"assets/img/person.png\" >\r\n        <h4>{{name}}</h4>\r\n        <h6><b>Role: </b>{{role}}</h6>\r\n    </div>\r\n\r\n    <mat-divider></mat-divider>\r\n<!--\r\n    <h2 matSubheader>Pages</h2> -->\r\n\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/home\" routerLinkActive=\"active\"><i class=\"fas fa-chart-line\"></i> &nbsp; Dashboard</a>\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/client/viewclient\" routerLinkActive=\"active\" ><i class=\"fas fa-users\" ></i> &nbsp; Client Management</a>\r\n    <!-- <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/reseller/view\" routerLinkActive=\"active\" *ngIf=\"role =='admin'\"> <i class=\"fas fa-chart-area\" ></i>&nbsp; Reseller Mangement</a> -->\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/packagemanagement\"  routerLinkActive=\"active\" *ngIf=\"role =='admin'\"> <i class=\"fas fa-tasks\" ></i>&nbsp; Package Management</a>\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/campaignManage\"  routerLinkActive=\"active\" *ngIf=\"role =='Partner'||role =='admin'\"> <i class=\"fas fa-tasks\" ></i>&nbsp; Campaign Management</a>\r\n\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/analytics\"  routerLinkActive=\"active\" *ngIf=\"role =='Partner'||role =='admin'\"> <i class=\"fas fa-chart-pie\"></i>&nbsp; Analytics</a>\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLinkActive=\"active\" routerLink=\"/billing/smspackagelist\" *ngIf=\"role =='admin'\"> <i class=\"fas fa-tasks\"></i>&nbsp; Billing</a>\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/helpdesk/viewhelpdesk\" *ngIf=\"role =='admin'\"><i class=\"fas fa-hands-helping\" ></i>&nbsp; HelpDesk</a>\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/templates/viewTemplates\" *ngIf=\"role =='admin'\"><i class=\"fas fa-images\"></i>&nbsp; Templates</a>\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/card/viewcards\" *ngIf=\"role =='admin'\"><i class=\"fas fa-images\"></i>&nbsp; cards</a>\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/viewapklist\" *ngIf=\"role =='Partner'||role =='admin'\"><span class=\"material-icons\">\r\n      android\r\n      </span> View Apk List</a>\r\n\r\n      <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/viewdownloadapklist\" *ngIf=\"role =='Partner'||role =='admin'\"><span class=\"material-icons\">\r\n        android\r\n        </span>&nbsp; Download APK List</a>\r\n        <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/viewusersfeedback\" *ngIf=\"role =='Partner'||role =='admin'\"><i class=\"fas fa-comment-alt\"></i>&nbsp; Users Queries List</a>\r\n    <!-- <mat-divider></mat-divider> -->\r\n\r\n\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/contacts\" *ngIf=\"role =='admin'\">\r\n        <mat-icon>import_contacts</mat-icon>\r\n        Contacts\r\n    </a>\r\n\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/contacts\" *ngIf=\"role =='admin'\">\r\n        <mat-icon>contact_phone</mat-icon>\r\n        Leads\r\n    </a>\r\n\r\n</mat-nav-list>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/area/area.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/widgets/area/area.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<highcharts-chart [Highcharts]=\"Highcharts\" [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block;\"></highcharts-chart>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/card/card.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/widgets/card/card.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text\">\n    <h4>{{ label }}</h4>\n\n    <span class=\"total\">{{ total }}</span>\n\n    <span>\n        <mat-icon color=\"primary\">trending_up</mat-icon>\n    </span>\n\n    <span class=\"description\">\n        {{ percentage }}%\n    </span>\n\n    <span> of target</span>\n</div>\n<div class=\"widget\">\n    <highcharts-chart [Highcharts]=\"Highcharts\" [options]=\"chartOptions\"\n        style=\"width: 100%; height: 60px; display: block;\">\n    </highcharts-chart>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/pie/pie.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/widgets/pie/pie.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<highcharts-chart [Highcharts]=\"Highcharts\" [options]=\"chartOptions\" style=\"width: 100%; display: block;\">\n</highcharts-chart>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/sign-in/sign-in.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/sign-in/sign-in.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img src=\"assets/img/single_user.png\" id=\"icon\" alt=\"User Icon\" />\n  </div>\n  <form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\">\n    <input type=\"text\" name=\"email_id\" #email=\"ngModel\" [(ngModel)]=\"model.email\" placeholder=\"Email\" [pattern]=\"emailRegex\" required\n      [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !email.valid }\">\n    <div *ngIf=\"signInForm.submitted && email.errors?.pattern\">\n      <label class=\"validation-message\">Invalid email address.</label>\n    </div>\n    <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" placeholder=\"Password\" required minlength=\"4\"\n      [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !password.valid }\">\n    <div *ngIf=\"signInForm.submitted && password.errors?.minlength\">\n      <label class=\"validation-message\">Minimum 4 characters.</label>\n    </div>\n    <input type=\"submit\" value=\"Sign In\">\n  </form>\n  <!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n    {{serverErrorMessages}}\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/sign-up/sign-up.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/sign-up/sign-up.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src=\"/assets/img/users.png\" id=\"icon\" alt=\"User Icon\" />\n</div>\n<form #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\n  <input type=\"text\" #username=\"ngModel\" [(ngModel)]=\"userService.selectedUser.user_name\" name=\"user_name\" placeholder=\"User Name\"\n  required  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !username.valid }\">\n  <div *ngIf=\"signUpForm.submitted && !username.valid\">\n    <label class=\"validation-message\">This field is required.</label>\n  </div>\n\n  <input type=\"text\" #MobileNumber=\"ngModel\" [(ngModel)]=\"userService.selectedUser.mobile_number\" pattern=\"[789][0-9]{9}\" maxlength=\"10\" name=\"mobile_number\" placeholder=\"MobileNumber\"\n  required  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !MobileNumber.valid }\">\n  <div *ngIf=\"signUpForm.submitted && !MobileNumber.valid\">\n    <label class=\"validation-message\">This field is required.</label>\n  </div>\n  <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"userService.selectedUser.email_id\" name=\"email_id\" placeholder=\"Email\"\n  required [pattern]=\"emailRegex\"  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid }\">\n  <div *ngIf=\"signUpForm.submitted && email.errors\">\n    <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is required.</label>\n    <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n  </div>\n  <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"userService.selectedUser.password\" name=\"password\" placeholder=\"Password\"\n  minlength=\"4\" required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\">\n  <div *ngIf=\"signUpForm.submitted && password.errors\">\n    <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is required.</label>\n    <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 4 characters.</label>\n  </div>\n  <input type=\"submit\" value=\"Sign Up\">\n</form>\n\n<!-- Success message -->\n<div class=\"success\" *ngIf=\"showSucessMessage\">\n  Saved successfully\n</div>\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n  {{serverErrorMessages}}\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div id=\"formContent\">\n    <h2 class=\"underlineHover\"  routerLink=\"/login\"  routerLinkActive=\"active\"> Sign In </h2>\n    <!-- <h2 class=\"underlineHover\"  routerLink=\"/signup\"  routerLinkActive=\"active\">Sign Up </h2> -->\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n<!-- Footer -->\n<footer class=\"page-footer font-small blue pt-4\">\n\n  <!-- Footer Links -->\n  <div class=\"container-fluid text-center text-md-left\">\n\n    <!-- Grid row -->\n    <div class=\"row\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-6 mt-md-0 mt-3\">\n\n        <!-- Content -->\n        <h5 class=\"text-uppercase\">Nutantek solutions</h5>\n        <p>Here you can use rows and columns to organize your footer content.</p>\n\n      </div>\n      <!-- Grid column -->\n\n      <hr class=\"clearfix w-100 d-md-none pb-3\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-3 mb-md-0 mb-3\">\n\n        <!-- Links -->\n        <h5 class=\"text-uppercase\">Links</h5>\n\n        <ul class=\"list-unstyled\">\n          <li>\n            <a href=\"#!\">Link 1</a>\n          </li>\n          <li>\n            <a href=\"#!\">Link 2</a>\n          </li>\n          <li>\n            <a href=\"#!\">Link 3</a>\n          </li>\n          <li>\n            <a href=\"#!\">Link 4</a>\n          </li>\n        </ul>\n\n      </div>\n      <!-- Grid column -->\n\n      <!-- Grid column -->\n      <div class=\"col-md-3 mb-md-0 mb-3\">\n\n        <!-- Links -->\n        <h5 class=\"text-uppercase\">Links</h5>\n\n        <ul class=\"list-unstyled\">\n          <li>\n            <a href=\"#!\">Link 1</a>\n          </li>\n          <li>\n            <a href=\"#!\">Link 2</a>\n          </li>\n          <li>\n            <a href=\"#!\">Link 3</a>\n          </li>\n          <li>\n            <a href=\"#!\">Link 4</a>\n          </li>\n        </ul>\n\n      </div>\n      <!-- Grid column -->\n\n    </div>\n    <!-- Grid row -->\n\n  </div>\n  <!-- Footer Links -->\n\n  <!-- Copyright -->\n  <div class=\"footer-copyright text-center py-3\">© 2020 Copyright:\n    <a href=\"https://mdbootstrap.com/\"> MDBootstrap.com</a>\n  </div>\n  <!-- Copyright -->\n\n</footer>\n<!-- Footer -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/userManage/add-users/add-users.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/userManage/add-users/add-users.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>add-users works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/userManage/editusers/editusers.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/userManage/editusers/editusers.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>editusers works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/userManage/user-manage/user-manage.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/userManage/user-manage/user-manage.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/userManage/viewusers/viewusers.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/userManage/viewusers/viewusers.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>viewusers works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/viewapkdownload/viewapkdownload.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/viewapkdownload/viewapkdownload.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">\n    View Download Apk</h3>\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- <div class=\"col-md-6\">\n        <form (ngSubmit)=\"regform.form.valid&&getplanexpirycontacts(regform.form.value)\" #regform=\"ngForm\">\n\n          <input type=\"date\"  name=\"fromDate\" placeholder=\"FromDate\" ngModel>&nbsp;\n          <input type=\"date\" name=\"toDate\" placeholder=\"ToDate\" ngModel>&nbsp;\n\n          <input type=\"submit\">\n        </form>\n      </div> -->\n      <div class=\"col-md-6 mubutn\" >\n\n        <!-- <select class=\"browser-default custom-select filter\" (change)=\"getclientsbyfilter($event.target.value)\">\n          <option selected value=\"\">select</option>\n          <option  value=\"All\">ALL</option>\n          <option value=\"Demo\" >Demo</option>\n          <option value=\"Business\">Business </option>\n          <option value=\"Express\">Express</option>\n          <option value=\"Business Plus\">Business Plus</option>\n          <option value=\"Business Express\">Business Express</option>\n\n        </select> -->\n\n\n\n        <img class=\"xlicon media \" src=\"assets/img/xlicon.png\" (click)=\"exportAsXLSX()\">\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div id=\"table\" class=\"table-editable\">\n\n      <table class=\"table table-bordered table-responsive-md table-striped text-center table-media\">\n        <tr style=\"background-color: darkblue;color:white\">\n          <th class=\"text-center\">\n            Query Id</th>\n          <th class=\"text-center\">\n            FullName</th>\n            <th class=\"text-center\">\n              MobileNumber</th>\n          <th class=\"text-center\">message</th>\n          <th class=\"text-center\">created_on</th>\n          <th class=\"text-center whatsapicon\">Action</th>\n\n\n        </tr>\n        <tr *ngFor=\"let person of personList; let id = index\">\n\n          <td>\n            {{person.query_id}}\n          </td>\n          <td>\n            {{person.name}}\n          </td>\n          <td>\n            {{person.mobilenumber}}\n          </td>\n          <td>\n             {{person.message}}\n          </td>\n          <td>\n            {{person.created_on| date: 'dd/MM/yyyy'}}\n         </td>\n         <td >\n          <img class=\"pointer\" src=\"assets/img/whatsaapicon.webp\" width=\"75%\" [routerLink]=\"['/downloadapksendsms',person.mobilenumber]\">\n        </td>\n       <!-- <td>\n\n        <span class=\"material-icons\">\n          sms\n          </span>\n      </td> -->\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/viewusersfeedback/viewusersfeedback.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/viewusersfeedback/viewusersfeedback.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">\n    View Users Feedback</h3>\n  <div class=\"container\">\n    <div class=\"row\">\n       <div class=\"col-md-6 mubutn\" >\n        <img class=\"xlicon media \" src=\"assets/img/xlicon.png\" (click)=\"exportAsXLSX()\">\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div id=\"table\" class=\"table-editable\">\n\n      <table class=\"table table-bordered table-responsive-md table-striped text-center table-media\">\n        <tr style=\"background-color: darkblue;color:white\">\n          <th class=\"text-center\">\n            Query Id</th>\n            <th class=\"text-center\">\n              ClientId </th>\n          <th class=\"text-center\">\n            FullName</th>\n            <th class=\"text-center\">\n              MobileNumber</th>\n          <th class=\"text-center\">message</th>\n          <th class=\"text-center\">Subject</th>\n          <th class=\"text-center\">created_on</th>\n          <th class=\"text-center whatsapicon\">Action</th>\n\n\n        </tr>\n        <tr *ngFor=\"let person of personList; let id = index\">\n          <td>\n            {{person.query_id}}\n          </td>\n          <td>\n            {{person.client_id}}\n          </td>\n          <td>\n            {{person.name}}\n          </td>\n          <td>\n            {{person.mobilenumber}}\n          </td>\n          <td>\n             {{person.message}}\n          </td>\n          <td>\n            {{person.subject}}\n         </td>\n          <td>\n            {{person.created_on| date: 'dd/MM/yyyy'}}\n         </td>\n         <td >\n          <img class=\"pointer\" src=\"assets/img/whatsaapicon.webp\" width=\"75%\" [routerLink]=\"['/downloadapksendsms',person.mobilenumber]\">\n        </td>\n       <!-- <td>\n\n        <span class=\"material-icons\">\n          sms\n          </span>\n      </td> -->\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Analytics/analytic/analytic.component.scss":
/*!************************************************************!*\
  !*** ./src/app/Analytics/analytic/analytic.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FuYWx5dGljcy9hbmFseXRpYy9hbmFseXRpYy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Analytics/analytic/analytic.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Analytics/analytic/analytic.component.ts ***!
  \**********************************************************/
/*! exports provided: AnalyticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticComponent", function() { return AnalyticComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");



let AnalyticComponent = class AnalyticComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.role = this.userService.getRole();
    }
};
AnalyticComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] }
];
AnalyticComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analytic',
        template: __webpack_require__(/*! raw-loader!./analytic.component.html */ "./node_modules/raw-loader/index.js!./src/app/Analytics/analytic/analytic.component.html"),
        styles: [__webpack_require__(/*! ./analytic.component.scss */ "./src/app/Analytics/analytic/analytic.component.scss")]
    })
], AnalyticComponent);



/***/ }),

/***/ "./src/app/Analytics/planexpirytracking/planexpirytracking.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/Analytics/planexpirytracking/planexpirytracking.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\ntd, th {\n  width: 25%;\n}\n\nimg.xlicon {\n  width: 25%;\n  margin-left: 76%;\n  margin-top: -10%;\n  margin-bottom: -4%;\n  cursor: pointer;\n}\n\ninput {\n  margin-top: 5%;\n}\n\nselect {\n  width: 33%;\n  margin-left: 2%;\n  margin-right: 3%;\n}\n\ninput.search {\n  width: 28%;\n  margin-left: -10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQW5hbHl0aWNzL3BsYW5leHBpcnl0cmFja2luZy9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxBbmFseXRpY3NcXHBsYW5leHBpcnl0cmFja2luZ1xccGxhbmV4cGlyeXRyYWNraW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BbmFseXRpY3MvcGxhbmV4cGlyeXRyYWNraW5nL3BsYW5leHBpcnl0cmFja2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFBVSxlQUFBO0FDR1Y7O0FERkE7RUFDRSxVQUFBO0FDS0Y7O0FESEE7RUFFRSxVQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0tKOztBRERBO0VBQ0UsY0FBQTtBQ0lGOztBRERBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0lGOztBRERBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9BbmFseXRpY3MvcGxhbmV4cGlyeXRyYWNraW5nL3BsYW5leHBpcnl0cmFja2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBvaW50ZXIge2N1cnNvcjogcG9pbnRlcjt9XHJcbnRkLCB0aCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5pbWcueGxpY29uIHtcclxuXHJcbiAgd2lkdGg6IDI1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NiU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTQlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG5cclxufVxyXG5zZWxlY3Qge1xyXG4gIHdpZHRoOjMzJTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcclxufVxyXG5cclxuaW5wdXQuc2VhcmNoIHtcclxuICB3aWR0aDogMjglO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAlO1xyXG59XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50ZCwgdGgge1xuICB3aWR0aDogMjUlO1xufVxuXG5pbWcueGxpY29uIHtcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luLWxlZnQ6IDc2JTtcbiAgbWFyZ2luLXRvcDogLTEwJTtcbiAgbWFyZ2luLWJvdHRvbTogLTQlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0IHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbnNlbGVjdCB7XG4gIHdpZHRoOiAzMyU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbn1cblxuaW5wdXQuc2VhcmNoIHtcbiAgd2lkdGg6IDI4JTtcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/Analytics/planexpirytracking/planexpirytracking.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Analytics/planexpirytracking/planexpirytracking.component.ts ***!
  \******************************************************************************/
/*! exports provided: PlanexpirytrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanexpirytrackingComponent", function() { return PlanexpirytrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/apiCalls/excel.service */ "./src/app/apiCalls/excel.service.ts");





let PlanexpirytrackingComponent = class PlanexpirytrackingComponent {
    constructor(apiCall, excelservice, router) {
        this.apiCall = apiCall;
        this.excelservice = excelservice;
        this.router = router;
        this.awaitingPersonList = [];
        this.selectedToppings = [];
        this.allToppings = false;
        this.curDate = new Date();
    }
    ngOnInit() {
        this.partner_id = this.apiCall.getPartner_id();
        this.getClients();
        this.getPartnerData();
    }
    updateList(id, property, event) {
        const editField = event.target.textContent;
        this.personList[id][property] = editField;
    }
    remove(id) {
        this.awaitingPersonList.push(this.personList[id]);
        this.personList.splice(id, 1);
    }
    add() {
        if (this.awaitingPersonList.length > 0) {
            const person = this.awaitingPersonList[0];
            this.personList.push(person);
            this.awaitingPersonList.splice(0, 1);
        }
    }
    changeValue(id, property, event) {
        this.editField = event.target.textContent;
    }
    getClients() {
        const partner_id = { partner_id: this.partner_id };
        this.apiCall.getplanexpirycontactsAll(partner_id).subscribe((res) => {
            this.personList = res.data;
        });
    }
    getPartnerData() {
        this.apiCall.getPartnerData().subscribe((res) => {
            this.partnerData = res.result;
            console.log(this.partnerData);
        });
    }
    exportAsXLSX() {
        this.excelservice.exportAsExcelFile(this.personList, 'sample');
    }
    search() {
        if (this.client_firstname != '') {
            this.personList = this.personList.filter(res => {
                return res.client_firstname.toLocaleLowerCase().match(this.client_firstname.toLocaleLowerCase());
            });
        }
        else if (this.client_firstname == '') {
            this.ngOnInit();
        }
    }
    getplanexpirycontacts(data) {
        data.partner_id = this.partner_id;
        this.apiCall.getplanexpirycontacts(data).subscribe((res) => {
            this.personList = res.data;
        });
    }
    updateclientData(data) {
        alert('Ensure you have added SMS balance to client account in SMS Gateway Portal');
        console.log(data);
        const userData = { client_id: data.client_id, order_id: data.order_id, add_balance: data.add_balance, payment_status: data.payment_status_code };
        this.apiCall.updatePaymentStatus(userData).subscribe((res) => {
            alert('Data updated Sucessfully');
        });
    }
    insertnotifications() {
        const agree = confirm('Are sure to add push notifications ?');
        if (agree) {
            const data = this.personList.map(person => person.client_id);
            const userData = { client_ids: data };
            this.apiCall.insertnotifications(userData).subscribe((res) => {
                alert(res.message);
            });
        }
    }
    getclientsbyfilter(value) {
        console.log(value);
        this.partner_id = value;
        const partner_id = { partner_id: this.partner_id };
        this.apiCall.getplanexpirycontactsAll(partner_id).subscribe((res) => {
            this.personList = res.data;
            if (value === 'All') {
                this.ngOnInit();
            }
        });
    }
    selectAllToppings(checked, toppings) {
        this.selectedToppings = toppings;
        if (checked) {
            this.allToppings = true;
            this.selectedclients = this.selectedToppings;
            console.log(this.selectedclients);
        }
        else {
            console.log(this.selectedToppings);
            this.allToppings = false;
        }
    }
    selectNewTopping(checked, topping) {
        if (checked) {
            this.selectedToppings.push(topping);
            this.selectedclients = this.selectedToppings;
            console.log(this.selectedclients);
        }
        else {
            this.selectedToppings = this.selectedToppings.filter(top => top.client_id !== topping.client_id);
        }
    }
    selectclients() {
        const notify = confirm("Are you sure you want to send notification");
        if (notify) {
            this.apiCall.getclientids(this.selectedclients);
            this.router.navigate(['/sendpushnotification']);
        }
    }
};
PlanexpirytrackingComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PlanexpirytrackingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-planexpirytracking',
        template: __webpack_require__(/*! raw-loader!./planexpirytracking.component.html */ "./node_modules/raw-loader/index.js!./src/app/Analytics/planexpirytracking/planexpirytracking.component.html"),
        styles: [__webpack_require__(/*! ./planexpirytracking.component.scss */ "./src/app/Analytics/planexpirytracking/planexpirytracking.component.scss")]
    })
], PlanexpirytrackingComponent);



/***/ }),

/***/ "./src/app/Analytics/purchase-analysis/purchase-analysis.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/Analytics/purchase-analysis/purchase-analysis.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\nimg.xlicon {\n  width: 25%;\n  margin-left: 76%;\n  margin-top: -10%;\n  margin-bottom: -4%;\n  cursor: pointer;\n}\n\ninput {\n  margin-top: 5%;\n}\n\ninput.search {\n  margin-left: 32%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQW5hbHl0aWNzL3B1cmNoYXNlLWFuYWx5c2lzL0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXEFuYWx5dGljc1xccHVyY2hhc2UtYW5hbHlzaXNcXHB1cmNoYXNlLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BbmFseXRpY3MvcHVyY2hhc2UtYW5hbHlzaXMvcHVyY2hhc2UtYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBRENBO0VBRUUsVUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9BbmFseXRpY3MvcHVyY2hhc2UtYW5hbHlzaXMvcHVyY2hhc2UtYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuaW1nLnhsaWNvbiB7XHJcblxyXG4gIHdpZHRoOiAyNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogNzYlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IC00JTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbmlucHV0IHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5pbnB1dC5zZWFyY2gge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMiU7XHJcbn1cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQsIHRoIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuaW1nLnhsaWNvbiB7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbi1sZWZ0OiA3NiU7XG4gIG1hcmdpbi10b3A6IC0xMCU7XG4gIG1hcmdpbi1ib3R0b206IC00JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG5pbnB1dC5zZWFyY2gge1xuICBtYXJnaW4tbGVmdDogMzIlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Analytics/purchase-analysis/purchase-analysis.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Analytics/purchase-analysis/purchase-analysis.component.ts ***!
  \****************************************************************************/
/*! exports provided: PurchaseAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseAnalysisComponent", function() { return PurchaseAnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/excel.service */ "./src/app/apiCalls/excel.service.ts");




let PurchaseAnalysisComponent = class PurchaseAnalysisComponent {
    constructor(apiCall, excelservice) {
        this.apiCall = apiCall;
        this.excelservice = excelservice;
        this.awaitingPersonList = [];
    }
    ngOnInit() {
        this.getClients();
    }
    updateList(id, property, event) {
        const editField = event.target.textContent;
        this.personList[id][property] = editField;
    }
    remove(id) {
        this.awaitingPersonList.push(this.personList[id]);
        this.personList.splice(id, 1);
    }
    add() {
        if (this.awaitingPersonList.length > 0) {
            const person = this.awaitingPersonList[0];
            this.personList.push(person);
            this.awaitingPersonList.splice(0, 1);
        }
    }
    changeValue(id, property, event) {
        this.editField = event.target.textContent;
    }
    getClients() {
        this.apiCall.getpurchaseData().subscribe((res) => {
            this.personList = res.data;
        });
    }
    deleteclient(client_id, id) {
        const data = { client_id: client_id };
        this.apiCall.deleteclient(data).subscribe((res) => {
            alert('User Deleted Sucessfully');
            this.remove(id);
        });
    }
    exportAsXLSX() {
        this.excelservice.exportAsExcelFile(this.personList, 'sample');
    }
    search() {
        if (this.client_firstname != "") {
            this.personList = this.personList.filter(res => {
                return res.client_firstname.toLocaleLowerCase().match(this.client_firstname.toLocaleLowerCase());
            });
        }
        else if (this.client_firstname == "") {
            this.ngOnInit();
        }
    }
    getpurchaseDataByDate(data) {
        this.apiCall.getpurchaseDataByDate(data).subscribe((res) => {
            this.personList = res.data;
        });
    }
    updateclientData(data) {
        alert('Ensure you have added SMS balance to client account in SMS Gateway Portal');
        console.log(data);
        const userData = { client_id: data.client_id, order_id: data.order_id, add_balance: data.add_balance, payment_status: data.payment_status_code };
        this.apiCall.updatePaymentStatus(userData).subscribe((res) => {
            alert('Data updated Sucessfully');
        });
    }
};
PurchaseAnalysisComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"] }
];
PurchaseAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase-analysis',
        template: __webpack_require__(/*! raw-loader!./purchase-analysis.component.html */ "./node_modules/raw-loader/index.js!./src/app/Analytics/purchase-analysis/purchase-analysis.component.html"),
        styles: [__webpack_require__(/*! ./purchase-analysis.component.scss */ "./src/app/Analytics/purchase-analysis/purchase-analysis.component.scss")]
    })
], PurchaseAnalysisComponent);



/***/ }),

/***/ "./src/app/Analytics/purchase-detailed/purchase-detailed.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/Analytics/purchase-detailed/purchase-detailed.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item-fixed {\n  width: auto;\n}\n\n.list-group-left {\n  text-align: left;\n  width: 40%;\n  font-weight: bold;\n  display: inline-block;\n}\n\n.list-group-right {\n  width: 50%;\n  display: inline-block;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n  width: 10%;\n}\n\nimg.rounded-circle {\n  margin-left: 45%;\n  margin-top: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQW5hbHl0aWNzL3B1cmNoYXNlLWRldGFpbGVkL0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXEFuYWx5dGljc1xccHVyY2hhc2UtZGV0YWlsZWRcXHB1cmNoYXNlLWRldGFpbGVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BbmFseXRpY3MvcHVyY2hhc2UtZGV0YWlsZWQvcHVyY2hhc2UtZGV0YWlsZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQUE7RUFFRSxVQUFBO0VBQ0EscUJBQUE7QUNFRjs7QURFQTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9BbmFseXRpY3MvcHVyY2hhc2UtZGV0YWlsZWQvcHVyY2hhc2UtZGV0YWlsZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cC1pdGVtLWZpeGVkIHtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4ubGlzdC1ncm91cC1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5saXN0LWdyb3VwLXJpZ2h0IHtcclxuXHJcbiAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcblxyXG4ucm91bmRlZC1jaXJjbGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJSFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG5pbWcucm91bmRlZC1jaXJjbGUge1xyXG4gIG1hcmdpbi1sZWZ0OiA0NSU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcblxyXG4iLCIubGlzdC1ncm91cC1pdGVtLWZpeGVkIHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5saXN0LWdyb3VwLWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogNDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubGlzdC1ncm91cC1yaWdodCB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnJvdW5kZWQtY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMCU7XG59XG5cbmltZy5yb3VuZGVkLWNpcmNsZSB7XG4gIG1hcmdpbi1sZWZ0OiA0NSU7XG4gIG1hcmdpbi10b3A6IDIlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Analytics/purchase-detailed/purchase-detailed.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Analytics/purchase-detailed/purchase-detailed.component.ts ***!
  \****************************************************************************/
/*! exports provided: PurchaseDetailedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseDetailedComponent", function() { return PurchaseDetailedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PurchaseDetailedComponent = class PurchaseDetailedComponent {
    constructor(apiCall, route) {
        this.apiCall = apiCall;
        this.route = route;
    }
    ngOnInit() {
        this.order_id = this.route.snapshot.paramMap.get('order_id');
        this.package_id = this.route.snapshot.paramMap.get('package_id');
        console.log(this.personList);
        this.getuserDetails();
    }
    getuserDetails() {
        const data = { order_id: this.order_id, package_id: this.package_id };
        this.apiCall.getpurchaseDetailed(data).subscribe((res) => {
            console.log(res);
            this.personList = res.data[0];
            console.log(this.personList);
        });
    }
};
PurchaseDetailedComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PurchaseDetailedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase-detailed',
        template: __webpack_require__(/*! raw-loader!./purchase-detailed.component.html */ "./node_modules/raw-loader/index.js!./src/app/Analytics/purchase-detailed/purchase-detailed.component.html"),
        styles: [__webpack_require__(/*! ./purchase-detailed.component.scss */ "./src/app/Analytics/purchase-detailed/purchase-detailed.component.scss")]
    })
], PurchaseDetailedComponent);



/***/ }),

/***/ "./src/app/Analytics/registrationtracking/registrationtracking.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/Analytics/registrationtracking/registrationtracking.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\nimg.xlicon {\n  width: 25%;\n  margin-left: 76%;\n  margin-top: -10%;\n  margin-bottom: -4%;\n  cursor: pointer;\n}\n\ninput {\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQW5hbHl0aWNzL3JlZ2lzdHJhdGlvbnRyYWNraW5nL0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXEFuYWx5dGljc1xccmVnaXN0cmF0aW9udHJhY2tpbmdcXHJlZ2lzdHJhdGlvbnRyYWNraW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BbmFseXRpY3MvcmVnaXN0cmF0aW9udHJhY2tpbmcvcmVnaXN0cmF0aW9udHJhY2tpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBRENBO0VBRUUsVUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNFLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL0FuYWx5dGljcy9yZWdpc3RyYXRpb250cmFja2luZy9yZWdpc3RyYXRpb250cmFja2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkLCB0aCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5pbWcueGxpY29uIHtcclxuXHJcbiAgd2lkdGg6IDI1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NiU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTQlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbmlucHV0LnNlYXJjaCB7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDMyJTtcclxufVxyXG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCwgdGgge1xuICB3aWR0aDogMjUlO1xufVxuXG5pbWcueGxpY29uIHtcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luLWxlZnQ6IDc2JTtcbiAgbWFyZ2luLXRvcDogLTEwJTtcbiAgbWFyZ2luLWJvdHRvbTogLTQlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0IHtcbiAgbWFyZ2luLXRvcDogNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/Analytics/registrationtracking/registrationtracking.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Analytics/registrationtracking/registrationtracking.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RegistrationtrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationtrackingComponent", function() { return RegistrationtrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/excel.service */ "./src/app/apiCalls/excel.service.ts");




let RegistrationtrackingComponent = class RegistrationtrackingComponent {
    constructor(apiCall, excelservice) {
        this.apiCall = apiCall;
        this.excelservice = excelservice;
        this.awaitingPersonList = [];
    }
    ngOnInit() {
        this.getClients();
    }
    updateList(id, property, event) {
        const editField = event.target.textContent;
        this.personList[id][property] = editField;
    }
    remove(id) {
        this.awaitingPersonList.push(this.personList[id]);
        this.personList.splice(id, 1);
    }
    add() {
        if (this.awaitingPersonList.length > 0) {
            const person = this.awaitingPersonList[0];
            this.personList.push(person);
            this.awaitingPersonList.splice(0, 1);
        }
    }
    changeValue(id, property, event) {
        this.editField = event.target.textContent;
    }
    getClients() {
        this.apiCall.getTodayregisterdData().subscribe((res) => {
            if (res.status === 'false') {
                this.message = res.message;
            }
            else {
                this.personList = res.data;
            }
        });
    }
    exportAsXLSX() {
        this.excelservice.exportAsExcelFile(this.personList, 'sample');
    }
    //   search() {
    // if (this.client_firstname !='') {
    //   this.personList = this.personList.filter(res => {
    //     return res.client_firstname.toLocaleLowerCase().match(this.client_firstname.toLocaleLowerCase());
    //   });
    // } else if (this.client_firstname == '') {
    //   this.ngOnInit();
    // }
    //   }
    getplanexpirycontacts(data) {
        this.apiCall.registeredcontactstracking(data).subscribe((res) => {
            this.personList = res.data;
        });
    }
    updateclientData(data) {
        alert('Ensure you have added SMS balance to client account in SMS Gateway Portal');
        console.log(data);
        const userData = { client_id: data.client_id, order_id: data.order_id, add_balance: data.add_balance, payment_status: data.payment_status_code };
        this.apiCall.updatePaymentStatus(userData).subscribe((res) => {
            alert('Data updated Sucessfully');
        });
    }
    insertnotifications() {
        const agree = confirm("Are sure to add push notifications ?");
        if (agree) {
            const data = this.personList.map(person => person.client_id);
            const userData = { client_ids: data };
            this.apiCall.insertnotifications(userData).subscribe((res) => {
                alert(res.message);
            });
        }
    }
};
RegistrationtrackingComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"] }
];
RegistrationtrackingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registrationtracking',
        template: __webpack_require__(/*! raw-loader!./registrationtracking.component.html */ "./node_modules/raw-loader/index.js!./src/app/Analytics/registrationtracking/registrationtracking.component.html"),
        styles: [__webpack_require__(/*! ./registrationtracking.component.scss */ "./src/app/Analytics/registrationtracking/registrationtracking.component.scss")]
    })
], RegistrationtrackingComponent);



/***/ }),

/***/ "./src/app/Analytics/sales-analysis/sales-analysis.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/Analytics/sales-analysis/sales-analysis.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  display: block;\n  font: 1rem \"Fira Sans\", sans-serif;\n}\n\ninput,\nlabel {\n  margin: 0.4rem 0;\n}\n\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\nimg.xlicon {\n  width: 35%;\n  margin-left: 28%;\n  margin-top: -3%;\n  margin-bottom: -6%;\n  cursor: pointer;\n}\n\n.col-md-4 {\n  margin-bottom: 0%;\n  margin-top: -3%;\n  margin-left: 74%;\n}\n\n.col-md-2.mubutn {\n  margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQW5hbHl0aWNzL3NhbGVzLWFuYWx5c2lzL0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXEFuYWx5dGljc1xcc2FsZXMtYW5hbHlzaXNcXHNhbGVzLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BbmFseXRpY3Mvc2FsZXMtYW5hbHlzaXMvc2FsZXMtYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7QUNBRjs7QURHQTs7RUFFRSxnQkFBQTtBQ0FGOztBRElBO0VBQ0UsV0FBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNERjs7QURJQTtFQUNFLFVBQUE7QUNERjs7QURHQTtFQUVFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNERjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUY7O0FES0E7RUFDRSxjQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9BbmFseXRpY3Mvc2FsZXMtYW5hbHlzaXMvc2FsZXMtYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQ6IDFyZW0gJ0ZpcmEgU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlucHV0LFxyXG5sYWJlbCB7XHJcbiAgbWFyZ2luOiAuNHJlbSAwO1xyXG59XHJcblxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQsIHRoIHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcbmltZy54bGljb24ge1xyXG5cclxuICB3aWR0aDogMzUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyOCU7XHJcbiAgbWFyZ2luLXRvcDogLTMlO1xyXG4gIG1hcmdpbi1ib3R0b206IC02JTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbC1tZC00e1xyXG4gIG1hcmdpbi1ib3R0b206IDAlO1xyXG4gIG1hcmdpbi10b3A6IC0zJTtcclxuICBtYXJnaW4tbGVmdDogNzQlO1xyXG59XHJcblxyXG5cclxuXHJcbi5jb2wtbWQtMi5tdWJ1dG4ge1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcbiIsImxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQ6IDFyZW0gXCJGaXJhIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuaW5wdXQsXG5sYWJlbCB7XG4gIG1hcmdpbjogMC40cmVtIDA7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkLCB0aCB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbmltZy54bGljb24ge1xuICB3aWR0aDogMzUlO1xuICBtYXJnaW4tbGVmdDogMjglO1xuICBtYXJnaW4tdG9wOiAtMyU7XG4gIG1hcmdpbi1ib3R0b206IC02JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29sLW1kLTQge1xuICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgbWFyZ2luLXRvcDogLTMlO1xuICBtYXJnaW4tbGVmdDogNzQlO1xufVxuXG4uY29sLW1kLTIubXVidXRuIHtcbiAgbWFyZ2luLXRvcDogMyU7XG59Il19 */"

/***/ }),

/***/ "./src/app/Analytics/sales-analysis/sales-analysis.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Analytics/sales-analysis/sales-analysis.component.ts ***!
  \**********************************************************************/
/*! exports provided: SalesAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesAnalysisComponent", function() { return SalesAnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/excel.service */ "./src/app/apiCalls/excel.service.ts");




let SalesAnalysisComponent = class SalesAnalysisComponent {
    constructor(apiCall, excelservice) {
        this.apiCall = apiCall;
        this.excelservice = excelservice;
        this.personList = [];
        this.awaitingPersonList = [];
    }
    ;
    ngOnInit() {
        console.log(status);
    }
    updateList(id, property, event) {
        const editField = event.target.textContent;
        this.personList[id][property] = editField;
    }
    remove(id) {
        this.awaitingPersonList.push(this.personList[id]);
        this.personList.splice(id, 1);
    }
    add() {
        if (this.awaitingPersonList.length > 0) {
            const person = this.awaitingPersonList[0];
            this.personList.push(person);
            this.awaitingPersonList.splice(0, 1);
        }
    }
    changeValue(id, property, event) {
        this.editField = event.target.textContent;
    }
    getSalesData(data) {
        this.apiCall.getSalesData(data).subscribe((res) => {
            console.log(res);
            this.personList = res.data;
            console.log(this.personList);
        });
    }
    deleteclient(client_id, id) {
        const data = { client_id: client_id };
        this.apiCall.deleteclient(data).subscribe((res) => {
            console.log(res);
            alert('User Deleted Sucessfully');
            this.remove(id);
        });
    }
    exportAsXLSX() {
        this.excelservice.exportAsExcelFile(this.personList, 'sample');
    }
};
SalesAnalysisComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"] }
];
SalesAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales-analysis',
        template: __webpack_require__(/*! raw-loader!./sales-analysis.component.html */ "./node_modules/raw-loader/index.js!./src/app/Analytics/sales-analysis/sales-analysis.component.html"),
        styles: [__webpack_require__(/*! ./sales-analysis.component.scss */ "./src/app/Analytics/sales-analysis/sales-analysis.component.scss")]
    })
], SalesAnalysisComponent);



/***/ }),

/***/ "./src/app/Analytics/sendpushnotification/sendpushnotification.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/Analytics/sendpushnotification/sendpushnotification.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin-left: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQW5hbHl0aWNzL3NlbmRwdXNobm90aWZpY2F0aW9uL0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXEFuYWx5dGljc1xcc2VuZHB1c2hub3RpZmljYXRpb25cXHNlbmRwdXNobm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BbmFseXRpY3Mvc2VuZHB1c2hub3RpZmljYXRpb24vc2VuZHB1c2hub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvQW5hbHl0aWNzL3NlbmRwdXNobm90aWZpY2F0aW9uL3NlbmRwdXNobm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG59XHJcbiIsImZvcm0ge1xuICBtYXJnaW4tbGVmdDogMjUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Analytics/sendpushnotification/sendpushnotification.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Analytics/sendpushnotification/sendpushnotification.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SendpushnotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendpushnotificationComponent", function() { return SendpushnotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");




let SendpushnotificationComponent = class SendpushnotificationComponent {
    constructor(apiCall, router) {
        this.apiCall = apiCall;
        this.router = router;
        this.boolean = false;
    }
    ngOnInit() {
        this.getMyContacts();
    }
    getMyContacts() {
        this.apiCall.client_idArray.subscribe((res = []) => {
            this.client_ids = res.map(el => el.client_id);
            this.mobilenumbers = res.map(el => el.user_mobile_number);
        });
    }
    pushnotify(data) {
        data.client_ids = this.client_ids;
        data.mobilenumbers = this.mobilenumbers;
        console.log(data);
        if (this.boolean) {
            this.apiCall.insertnotifications(data).subscribe((res) => {
                console.log(res);
                if (res.status == 'success') {
                    alert(res.message);
                    this.router.navigate(['/home']);
                }
                else {
                    alert(res.message);
                }
            });
        }
        this.apiCall.sendPushnotifySMS(data).subscribe((res) => {
            console.log(res);
            if (res.type == 'success') {
                alert('sms sent successfully');
                this.router.navigate(['/home']);
            }
        });
    }
    checkbox(event) {
        console.log(event);
        this.boolean = event;
    }
};
SendpushnotificationComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SendpushnotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sendpushnotification',
        template: __webpack_require__(/*! raw-loader!./sendpushnotification.component.html */ "./node_modules/raw-loader/index.js!./src/app/Analytics/sendpushnotification/sendpushnotification.component.html"),
        styles: [__webpack_require__(/*! ./sendpushnotification.component.scss */ "./src/app/Analytics/sendpushnotification/sendpushnotification.component.scss")]
    })
], SendpushnotificationComponent);



/***/ }),

/***/ "./src/app/Analytics/usage-analysis/usage-analysis.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/Analytics/usage-analysis/usage-analysis.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\nimg.xlicon {\n  width: 35%;\n  margin-left: 28%;\n  margin-top: -13%;\n  margin-bottom: -6%;\n  cursor: pointer;\n}\n\n.col-md-4 {\n  margin-bottom: 0%;\n  margin-top: -3%;\n  margin-left: 74%;\n}\n\ninput {\n  margin-top: 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQW5hbHl0aWNzL3VzYWdlLWFuYWx5c2lzL0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXEFuYWx5dGljc1xcdXNhZ2UtYW5hbHlzaXNcXHVzYWdlLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BbmFseXRpY3MvdXNhZ2UtYW5hbHlzaXMvdXNhZ2UtYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBRENBO0VBRUUsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9BbmFseXRpY3MvdXNhZ2UtYW5hbHlzaXMvdXNhZ2UtYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuaW1nLnhsaWNvbiB7XHJcblxyXG4gIHdpZHRoOiAzNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI4JTtcclxuICBtYXJnaW4tdG9wOiAtMTMlO1xyXG4gIG1hcmdpbi1ib3R0b206IC02JTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbC1tZC00e1xyXG4gIG1hcmdpbi1ib3R0b206IDAlO1xyXG4gIG1hcmdpbi10b3A6IC0zJTtcclxuICBtYXJnaW4tbGVmdDogNzQlO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgbWFyZ2luLXRvcDogNyU7XHJcbn1cclxuXHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkLCB0aCB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbmltZy54bGljb24ge1xuICB3aWR0aDogMzUlO1xuICBtYXJnaW4tbGVmdDogMjglO1xuICBtYXJnaW4tdG9wOiAtMTMlO1xuICBtYXJnaW4tYm90dG9tOiAtNiU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbC1tZC00IHtcbiAgbWFyZ2luLWJvdHRvbTogMCU7XG4gIG1hcmdpbi10b3A6IC0zJTtcbiAgbWFyZ2luLWxlZnQ6IDc0JTtcbn1cblxuaW5wdXQge1xuICBtYXJnaW4tdG9wOiA3JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Analytics/usage-analysis/usage-analysis.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Analytics/usage-analysis/usage-analysis.component.ts ***!
  \**********************************************************************/
/*! exports provided: UsageAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageAnalysisComponent", function() { return UsageAnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/excel.service */ "./src/app/apiCalls/excel.service.ts");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");




let UsageAnalysisComponent = class UsageAnalysisComponent {
    constructor(apiCall, excelservice) {
        this.apiCall = apiCall;
        this.excelservice = excelservice;
        this.personList = [];
        this.awaitingPersonList = [];
    }
    ngOnInit() {
        this.getClients();
    }
    updateList(id, property, event) {
        const editField = event.target.textContent;
        this.personList[id][property] = editField;
    }
    remove(id) {
        this.awaitingPersonList.push(this.personList[id]);
        this.personList.splice(id, 1);
    }
    add() {
        if (this.awaitingPersonList.length > 0) {
            const person = this.awaitingPersonList[0];
            this.personList.push(person);
            this.awaitingPersonList.splice(0, 1);
        }
    }
    changeValue(id, property, event) {
        this.editField = event.target.textContent;
    }
    getClients() {
        this.apiCall.getClients().subscribe((res) => {
            console.log(res);
            this.personList = res.data;
            console.log(this.personList);
        });
    }
    deleteclient(client_id, id) {
        const data = { client_id: client_id };
        this.apiCall.deleteclient(data).subscribe((res) => {
            console.log(res);
            alert('User Deleted Sucessfully');
            this.remove(id);
        });
    }
    exportAsXLSX() {
        this.excelservice.exportAsExcelFile(this.personList, 'sample');
    }
    search() {
        if (this.client_firstname != "") {
            this.personList = this.personList.filter(res => {
                return res.client_firstname.toLocaleLowerCase().match(this.client_firstname.toLocaleLowerCase());
            });
        }
        else if (this.client_firstname == "") {
            this.ngOnInit();
        }
    }
};
UsageAnalysisComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_2__["ExcelService"] }
];
UsageAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usage-analysis',
        template: __webpack_require__(/*! raw-loader!./usage-analysis.component.html */ "./node_modules/raw-loader/index.js!./src/app/Analytics/usage-analysis/usage-analysis.component.html"),
        styles: [__webpack_require__(/*! ./usage-analysis.component.scss */ "./src/app/Analytics/usage-analysis/usage-analysis.component.scss")]
    })
], UsageAnalysisComponent);



/***/ }),

/***/ "./src/app/Analytics/usage-detailed/usage-detailed.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/Analytics/usage-detailed/usage-detailed.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\nimg.xlicon {\n  width: 35%;\n  margin-left: 28%;\n  margin-top: -3%;\n  margin-bottom: -6%;\n  cursor: pointer;\n}\n\n.col-md-4 {\n  margin-bottom: 0%;\n  margin-top: -3%;\n  margin-left: 74%;\n}\n\ninput {\n  margin-top: 7%;\n}\n\nbutton.mat-raised-button.mat-button-base.mat-primary {\n  margin-bottom: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQW5hbHl0aWNzL3VzYWdlLWRldGFpbGVkL0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXEFuYWx5dGljc1xcdXNhZ2UtZGV0YWlsZWRcXHVzYWdlLWRldGFpbGVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BbmFseXRpY3MvdXNhZ2UtZGV0YWlsZWQvdXNhZ2UtZGV0YWlsZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBRENBO0VBRUUsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURBQTtFQUNFLGlCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9BbmFseXRpY3MvdXNhZ2UtZGV0YWlsZWQvdXNhZ2UtZGV0YWlsZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuaW1nLnhsaWNvbiB7XHJcblxyXG4gIHdpZHRoOiAzNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI4JTtcclxuICBtYXJnaW4tdG9wOiAtMyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTYlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29sLW1kLTR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgbWFyZ2luLXRvcDogLTMlO1xyXG4gIG1hcmdpbi1sZWZ0OiA3NCU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBtYXJnaW4tdG9wOiA3JTtcclxufVxyXG5idXR0b24ubWF0LXJhaXNlZC1idXR0b24ubWF0LWJ1dHRvbi1iYXNlLm1hdC1wcmltYXJ5IHtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCwgdGgge1xuICB3aWR0aDogMjUlO1xufVxuXG5pbWcueGxpY29uIHtcbiAgd2lkdGg6IDM1JTtcbiAgbWFyZ2luLWxlZnQ6IDI4JTtcbiAgbWFyZ2luLXRvcDogLTMlO1xuICBtYXJnaW4tYm90dG9tOiAtNiU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbC1tZC00IHtcbiAgbWFyZ2luLWJvdHRvbTogMCU7XG4gIG1hcmdpbi10b3A6IC0zJTtcbiAgbWFyZ2luLWxlZnQ6IDc0JTtcbn1cblxuaW5wdXQge1xuICBtYXJnaW4tdG9wOiA3JTtcbn1cblxuYnV0dG9uLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1idXR0b24tYmFzZS5tYXQtcHJpbWFyeSB7XG4gIG1hcmdpbi1ib3R0b206IDElO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Analytics/usage-detailed/usage-detailed.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Analytics/usage-detailed/usage-detailed.component.ts ***!
  \**********************************************************************/
/*! exports provided: UsageDetailedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageDetailedComponent", function() { return UsageDetailedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/excel.service */ "./src/app/apiCalls/excel.service.ts");




let UsageDetailedComponent = class UsageDetailedComponent {
    constructor(apiCall, excelservice) {
        this.apiCall = apiCall;
        this.excelservice = excelservice;
        this.personList = [];
        this.awaitingPersonList = [];
    }
    ngOnInit() {
        this.getClients();
    }
    updateList(id, property, event) {
        const editField = event.target.textContent;
        this.personList[id][property] = editField;
    }
    remove(id) {
        this.awaitingPersonList.push(this.personList[id]);
        this.personList.splice(id, 1);
    }
    add() {
        if (this.awaitingPersonList.length > 0) {
            const person = this.awaitingPersonList[0];
            this.personList.push(person);
            this.awaitingPersonList.splice(0, 1);
        }
    }
    changeValue(id, property, event) {
        this.editField = event.target.textContent;
    }
    getClients() {
        this.apiCall.getClients().subscribe((res) => {
            console.log(res);
            this.personList = res.data;
            console.log(this.personList);
        });
    }
    deleteclient(client_id, id) {
        const data = { client_id: client_id };
        this.apiCall.deleteclient(data).subscribe((res) => {
            console.log(res);
            alert('User Deleted Sucessfully');
            this.remove(id);
        });
    }
    exportAsXLSX() {
        this.excelservice.exportAsExcelFile(this.personList, 'sample');
    }
    search() {
        if (this.client_firstname != "") {
            this.personList = this.personList.filter(res => {
                return res.client_firstname.toLocaleLowerCase().match(this.client_firstname.toLocaleLowerCase());
            });
        }
        else if (this.client_firstname == "") {
            this.ngOnInit();
        }
    }
};
UsageDetailedComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"] }
];
UsageDetailedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usage-detailed',
        template: __webpack_require__(/*! raw-loader!./usage-detailed.component.html */ "./node_modules/raw-loader/index.js!./src/app/Analytics/usage-detailed/usage-detailed.component.html"),
        styles: [__webpack_require__(/*! ./usage-detailed.component.scss */ "./src/app/Analytics/usage-detailed/usage-detailed.component.scss")]
    })
], UsageDetailedComponent);



/***/ }),

/***/ "./src/app/DigitalCards/digitalcards/digitalcards.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/DigitalCards/digitalcards/digitalcards.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RpZ2l0YWxDYXJkcy9kaWdpdGFsY2FyZHMvZGlnaXRhbGNhcmRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/DigitalCards/digitalcards/digitalcards.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/DigitalCards/digitalcards/digitalcards.component.ts ***!
  \*********************************************************************/
/*! exports provided: DigitalcardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalcardsComponent", function() { return DigitalcardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DigitalcardsComponent = class DigitalcardsComponent {
    constructor() { }
    ngOnInit() {
    }
};
DigitalcardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-digitalcards',
        template: __webpack_require__(/*! raw-loader!./digitalcards.component.html */ "./node_modules/raw-loader/index.js!./src/app/DigitalCards/digitalcards/digitalcards.component.html"),
        styles: [__webpack_require__(/*! ./digitalcards.component.scss */ "./src/app/DigitalCards/digitalcards/digitalcards.component.scss")]
    })
], DigitalcardsComponent);



/***/ }),

/***/ "./src/app/DigitalCards/vcard01/vcard01.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/DigitalCards/vcard01/vcard01.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  border-radius: 8px;\n  margin-top: 5%;\n  max-height: 450px;\n}\n\nbutton.btn.btn-success {\n  margin-left: 55%;\n  margin-top: -10%;\n}\n\ninput.form-control {\n  width: 50%;\n}\n\ni.fab.fa-whatsapp {\n  font-size: 16px;\n}\n\n@media screen and (max-width: 1060px) {\n  input.form-control.ng-untouched.ng-pristine.ng-valid.inptmida {\n    width: 100%;\n  }\n\n  button.btn.btn-success.btn-rounded.wtsmdia.waves-effect.waves-light {\n    margin-top: 5%;\n    width: 100%;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGlnaXRhbENhcmRzL3ZjYXJkMDEvRjpcXGdpdCBodWJcXEFkbWlucGFubmVsVG9NYW5hZ2VUZWFtXFxGcm9udGVuZC9zcmNcXGFwcFxcRGlnaXRhbENhcmRzXFx2Y2FyZDAxXFx2Y2FyZDAxLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9EaWdpdGFsQ2FyZHMvdmNhcmQwMS92Y2FyZDAxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURJQTtFQUNFLFVBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURRQTtFQUVFO0lBQ0UsV0FBQTtFQ05GOztFRFFGO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VDTEE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL0RpZ2l0YWxDYXJkcy92Y2FyZDAxL3ZjYXJkMDEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xyXG59XHJcblxyXG5cclxuYnV0dG9uLmJ0bi5idG4tc3VjY2Vzc3tcclxuICBtYXJnaW4tbGVmdDogNTUlO1xyXG4gIG1hcmdpbi10b3A6IC0xMCU7XHJcbn1cclxuaW5wdXQuZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5pLmZhYi5mYS13aGF0c2FwcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi8vIC5jb250YWluZXIge1xyXG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pLnBpbmltZy5jb20vNzM2eC8yMC83ZC8xNS8yMDdkMTU1MWIwZGNhMjA2MTc2ODE3MGNhNjQ3ZjQzZi5qcGcnKTtcclxuLy8gfVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCl7XHJcblxyXG4gIGlucHV0LmZvcm0tY29udHJvbC5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctdmFsaWQuaW5wdG1pZGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuYnV0dG9uLmJ0bi5idG4tc3VjY2Vzcy5idG4tcm91bmRlZC53dHNtZGlhLndhdmVzLWVmZmVjdC53YXZlcy1saWdodCB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDAlO1xyXG59XHJcbn1cclxuIiwiaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWF4LWhlaWdodDogNDUwcHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3Mge1xuICBtYXJnaW4tbGVmdDogNTUlO1xuICBtYXJnaW4tdG9wOiAtMTAlO1xufVxuXG5pbnB1dC5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogNTAlO1xufVxuXG5pLmZhYi5mYS13aGF0c2FwcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA2MHB4KSB7XG4gIGlucHV0LmZvcm0tY29udHJvbC5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctdmFsaWQuaW5wdG1pZGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgYnV0dG9uLmJ0bi5idG4tc3VjY2Vzcy5idG4tcm91bmRlZC53dHNtZGlhLndhdmVzLWVmZmVjdC53YXZlcy1saWdodCB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/DigitalCards/vcard01/vcard01.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/DigitalCards/vcard01/vcard01.component.ts ***!
  \***********************************************************/
/*! exports provided: Vcard01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vcard01Component", function() { return Vcard01Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Vcard01Component = class Vcard01Component {
    constructor() { }
    ngOnInit() {
    }
    share(data) {
        console.log(data);
        const message = "this is test message";
        // Opening URL
        window.open('https://api.whatsapp.com/send?text=' + message + '&phone=' + '+91' + this.mobilenumber);
    }
};
Vcard01Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vcard01',
        template: __webpack_require__(/*! raw-loader!./vcard01.component.html */ "./node_modules/raw-loader/index.js!./src/app/DigitalCards/vcard01/vcard01.component.html"),
        styles: [__webpack_require__(/*! ./vcard01.component.scss */ "./src/app/DigitalCards/vcard01/vcard01.component.scss")]
    })
], Vcard01Component);



/***/ }),

/***/ "./src/app/DigitalCards/vcard02/vcard02.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/DigitalCards/vcard02/vcard02.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  border-radius: 8px;\n  margin-top: 5%;\n  max-height: 450px;\n}\n\nbutton.btn.btn-success {\n  margin-left: 55%;\n  margin-top: -10%;\n}\n\ninput.form-control {\n  width: 50%;\n}\n\ni.fab.fa-whatsapp {\n  font-size: 16px;\n}\n\n.round-contact-buttons {\n  display: flex;\n  margin-bottom: 15px;\n  margin-top: 10px;\n}\n\na {\n  text-decoration: none;\n  color: var(--theme-color);\n}\n\n.round-contact-buttons a {\n  margin: 0 10px;\n}\n\n.contact-buttons-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  margin: 0 auto;\n  box-shadow: 1px 1px 5px rgba(107, 128, 168, 0.2);\n  border-radius: 100px;\n  margin-bottom: 10px;\n  background-color: var(--theme-color);\n  color: #ffffff;\n}\n\n.contact-buttons-text {\n  color: #666666;\n  text-decoration: none;\n  font-size: 13px;\n  font-family: \"Uniform Medium\";\n}\n\ni.fas.fa-phone.fa-flip-horizontal.contact-buttons-icon {\n  background-color: brown;\n}\n\ni.fab.fa-whatsapp.contact-buttons-icon {\n  background-color: brown;\n}\n\ni.fas.fa-map-marker-alt.fa-flip-horizontal.contact-buttons-icon {\n  background-color: brown;\n}\n\ni.fas.fa-envelope.fa-flip-horizontal.contact-buttons-icon {\n  background-color: brown;\n}\n\n.w3-teal, .w3-hover-teal:hover {\n  color: #fff !important;\n  background-color: brown;\n}\n\n@media screen and (max-width: 1060px) {\n  input.form-control.ng-untouched.ng-pristine.ng-valid.inptmida {\n    width: 100%;\n  }\n\n  button.btn.btn-success.btn-rounded.wtsmdia.waves-effect.waves-light {\n    margin-top: 5%;\n    width: 100%;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGlnaXRhbENhcmRzL3ZjYXJkMDIvRjpcXGdpdCBodWJcXEFkbWlucGFubmVsVG9NYW5hZ2VUZWFtXFxGcm9udGVuZC9zcmNcXGFwcFxcRGlnaXRhbENhcmRzXFx2Y2FyZDAyXFx2Y2FyZDAyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9EaWdpdGFsQ2FyZHMvdmNhcmQwMi92Y2FyZDAyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURJQTtFQUNFLFVBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FDSkY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0RBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FDSEY7O0FES0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNGRjs7QURJQTtFQUNFLHVCQUFBO0FDREY7O0FESUE7RUFDRSx1QkFBQTtBQ0RGOztBREdBO0VBQ0UsdUJBQUE7QUNBRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQUE7RUFFRTtJQUNFLFdBQUE7RUNFRjs7RURBRjtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQ0dBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9EaWdpdGFsQ2FyZHMvdmNhcmQwMi92Y2FyZDAyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXgtaGVpZ2h0OiA0NTBweDtcclxufVxyXG5cclxuXHJcbmJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3N7XHJcbiAgbWFyZ2luLWxlZnQ6IDU1JTtcclxuICBtYXJnaW4tdG9wOiAtMTAlO1xyXG59XHJcbmlucHV0LmZvcm0tY29udHJvbCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuaS5mYWIuZmEtd2hhdHNhcHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4vLyAuY29udGFpbmVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaS5waW5pbWcuY29tLzczNngvMjAvN2QvMTUvMjA3ZDE1NTFiMGRjYTIwNjE3NjgxNzBjYTY0N2Y0M2YuanBnJyk7XHJcbi8vIH1cclxuXHJcbi5yb3VuZC1jb250YWN0LWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcclxufVxyXG4ucm91bmQtY29udGFjdC1idXR0b25zIGEge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcblxyXG4uY29udGFjdC1idXR0b25zLWljb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMTA3LCAxMjgsIDE2OCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uY29udGFjdC1idXR0b25zLXRleHQge1xyXG4gIGNvbG9yOiAjNjY2NjY2O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdVbmlmb3JtIE1lZGl1bSc7XHJcbn1cclxuaS5mYXMuZmEtcGhvbmUuZmEtZmxpcC1ob3Jpem9udGFsLmNvbnRhY3QtYnV0dG9ucy1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcclxufVxyXG5cclxuaS5mYWIuZmEtd2hhdHNhcHAuY29udGFjdC1idXR0b25zLWljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xyXG59XHJcbmkuZmFzLmZhLW1hcC1tYXJrZXItYWx0LmZhLWZsaXAtaG9yaXpvbnRhbC5jb250YWN0LWJ1dHRvbnMtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbn1cclxuaS5mYXMuZmEtZW52ZWxvcGUuZmEtZmxpcC1ob3Jpem9udGFsLmNvbnRhY3QtYnV0dG9ucy1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcclxufVxyXG4udzMtdGVhbCwgLnczLWhvdmVyLXRlYWw6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpe1xyXG5cclxuICBpbnB1dC5mb3JtLWNvbnRyb2wubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLXZhbGlkLmlucHRtaWRhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3MuYnRuLXJvdW5kZWQud3RzbWRpYS53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHQge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAwJTtcclxufVxyXG59XHJcbiIsImltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDU1JTtcbiAgbWFyZ2luLXRvcDogLTEwJTtcbn1cblxuaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaS5mYWIuZmEtd2hhdHNhcHAge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5yb3VuZC1jb250YWN0LWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xufVxuXG4ucm91bmQtY29udGFjdC1idXR0b25zIGEge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmNvbnRhY3QtYnV0dG9ucy1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMTA3LCAxMjgsIDE2OCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jb250YWN0LWJ1dHRvbnMtdGV4dCB7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFwiVW5pZm9ybSBNZWRpdW1cIjtcbn1cblxuaS5mYXMuZmEtcGhvbmUuZmEtZmxpcC1ob3Jpem9udGFsLmNvbnRhY3QtYnV0dG9ucy1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XG59XG5cbmkuZmFiLmZhLXdoYXRzYXBwLmNvbnRhY3QtYnV0dG9ucy1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XG59XG5cbmkuZmFzLmZhLW1hcC1tYXJrZXItYWx0LmZhLWZsaXAtaG9yaXpvbnRhbC5jb250YWN0LWJ1dHRvbnMtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xufVxuXG5pLmZhcy5mYS1lbnZlbG9wZS5mYS1mbGlwLWhvcml6b250YWwuY29udGFjdC1idXR0b25zLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbn1cblxuLnczLXRlYWwsIC53My1ob3Zlci10ZWFsOmhvdmVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCkge1xuICBpbnB1dC5mb3JtLWNvbnRyb2wubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLXZhbGlkLmlucHRtaWRhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3MuYnRuLXJvdW5kZWQud3RzbWRpYS53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHQge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/DigitalCards/vcard02/vcard02.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/DigitalCards/vcard02/vcard02.component.ts ***!
  \***********************************************************/
/*! exports provided: Vcard02Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vcard02Component", function() { return Vcard02Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Vcard02Component = class Vcard02Component {
    constructor() { }
    ngOnInit() {
    }
    share(data) {
        console.log(data);
        const message = "this is test message";
        // Opening URL
        window.open('https://api.whatsapp.com/send?text=' + message + '&phone=' + '+91' + this.mobilenumber);
    }
};
Vcard02Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vcard02',
        template: __webpack_require__(/*! raw-loader!./vcard02.component.html */ "./node_modules/raw-loader/index.js!./src/app/DigitalCards/vcard02/vcard02.component.html"),
        styles: [__webpack_require__(/*! ./vcard02.component.scss */ "./src/app/DigitalCards/vcard02/vcard02.component.scss")]
    })
], Vcard02Component);



/***/ }),

/***/ "./src/app/DigitalCards/vcard03/vcard03.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/DigitalCards/vcard03/vcard03.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  border-radius: 8px;\n  margin-top: 5%;\n  max-height: 450px;\n}\n\nbutton.btn.btn-success {\n  margin-left: 55%;\n  margin-top: -10%;\n}\n\ninput.form-control {\n  width: 50%;\n}\n\ni.fab.fa-whatsapp {\n  font-size: 16px;\n}\n\n.container {\n  background-image: url(\"https://1.bp.blogspot.com/-no3OIU8ojXo/UiWTXw5dsTI/AAAAAAAACvg/DwgoJEY04ro/s1600/Brochure-Background-Design.jpg\");\n}\n\np {\n  color: white;\n}\n\n.round-contact-buttons {\n  display: flex;\n  margin-bottom: 15px;\n  margin-top: 10px;\n}\n\na {\n  text-decoration: none;\n  color: var(--theme-color);\n}\n\n.round-contact-buttons a {\n  margin: 0 10px;\n}\n\n.contact-buttons-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  margin: 0 auto;\n  box-shadow: 1px 1px 5px rgba(107, 128, 168, 0.2);\n  border-radius: 100px;\n  margin-bottom: 10px;\n  background-color: var(--theme-color);\n  color: #ffffff;\n}\n\n.contact-buttons-text {\n  color: white;\n  text-decoration: none;\n  font-size: 13px;\n  font-family: \"Uniform Medium\";\n}\n\ni.fas.fa-phone.fa-flip-horizontal.contact-buttons-icon {\n  background-color: brown;\n}\n\ni.fab.fa-whatsapp.contact-buttons-icon {\n  background-color: brown;\n}\n\ni.fas.fa-map-marker-alt.fa-flip-horizontal.contact-buttons-icon {\n  background-color: brown;\n}\n\ni.fas.fa-envelope.fa-flip-horizontal.contact-buttons-icon {\n  background-color: brown;\n}\n\n.w3-teal, .w3-hover-teal:hover {\n  color: #fff !important;\n  background-color: brown;\n}\n\nh3 {\n  color: white;\n}\n\n@media screen and (max-width: 1060px) {\n  input.form-control.ng-untouched.ng-pristine.ng-valid.inptmida {\n    width: 100%;\n  }\n\n  button.btn.btn-success.btn-rounded.wtsmdia.waves-effect.waves-light {\n    margin-top: 5%;\n    width: 100%;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGlnaXRhbENhcmRzL3ZjYXJkMDMvRjpcXGdpdCBodWJcXEFkbWlucGFubmVsVG9NYW5hZ2VUZWFtXFxGcm9udGVuZC9zcmNcXGFwcFxcRGlnaXRhbENhcmRzXFx2Y2FyZDAzXFx2Y2FyZDAzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9EaWdpdGFsQ2FyZHMvdmNhcmQwMy92Y2FyZDAzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURJQTtFQUNFLFVBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURHQTtFQUNFLHdJQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdEQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDRUY7O0FEQUE7RUFDRSx1QkFBQTtBQ0dGOztBREFBO0VBQ0UsdUJBQUE7QUNHRjs7QUREQTtFQUNFLHVCQUFBO0FDSUY7O0FERkE7RUFDRSx1QkFBQTtBQ0tGOztBREhBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ01GOztBREhBO0VBQ0UsWUFBQTtBQ01GOztBREpBO0VBRUU7SUFDRSxXQUFBO0VDTUY7O0VESkY7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUNPQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvRGlnaXRhbENhcmRzL3ZjYXJkMDMvdmNhcmQwMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgbWF4LWhlaWdodDogNDUwcHg7XHJcbn1cclxuXHJcblxyXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNze1xyXG4gIG1hcmdpbi1sZWZ0OiA1NSU7XHJcbiAgbWFyZ2luLXRvcDogLTEwJTtcclxufVxyXG5pbnB1dC5mb3JtLWNvbnRyb2wge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbmkuZmFiLmZhLXdoYXRzYXBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovLzEuYnAuYmxvZ3Nwb3QuY29tLy1ubzNPSVU4b2pYby9VaVdUWHc1ZHNUSS9BQUFBQUFBQUN2Zy9Ed2dvSkVZMDRyby9zMTYwMC9Ccm9jaHVyZS1CYWNrZ3JvdW5kLURlc2lnbi5qcGcnKTtcclxufVxyXG5cclxucCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucm91bmQtY29udGFjdC1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XHJcbn1cclxuLnJvdW5kLWNvbnRhY3QtYnV0dG9ucyBhIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtYnV0dG9ucy1pY29uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDEwNywgMTI4LCAxNjgsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmNvbnRhY3QtYnV0dG9ucy10ZXh0IHtcclxuICBjb2xvcjp3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVW5pZm9ybSBNZWRpdW0nO1xyXG59XHJcbmkuZmFzLmZhLXBob25lLmZhLWZsaXAtaG9yaXpvbnRhbC5jb250YWN0LWJ1dHRvbnMtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbn1cclxuXHJcbmkuZmFiLmZhLXdoYXRzYXBwLmNvbnRhY3QtYnV0dG9ucy1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcclxufVxyXG5pLmZhcy5mYS1tYXAtbWFya2VyLWFsdC5mYS1mbGlwLWhvcml6b250YWwuY29udGFjdC1idXR0b25zLWljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xyXG59XHJcbmkuZmFzLmZhLWVudmVsb3BlLmZhLWZsaXAtaG9yaXpvbnRhbC5jb250YWN0LWJ1dHRvbnMtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbn1cclxuLnczLXRlYWwsIC53My1ob3Zlci10ZWFsOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbn1cclxuXHJcbmgzIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA2MHB4KXtcclxuXHJcbiAgaW5wdXQuZm9ybS1jb250cm9sLm5nLXVudG91Y2hlZC5uZy1wcmlzdGluZS5uZy12YWxpZC5pbnB0bWlkYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNzLmJ0bi1yb3VuZGVkLnd0c21kaWEud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0IHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbn1cclxufVxyXG4iLCJpbWcge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXgtaGVpZ2h0OiA0NTBweDtcbn1cblxuYnV0dG9uLmJ0bi5idG4tc3VjY2VzcyB7XG4gIG1hcmdpbi1sZWZ0OiA1NSU7XG4gIG1hcmdpbi10b3A6IC0xMCU7XG59XG5cbmlucHV0LmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmkuZmFiLmZhLXdoYXRzYXBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly8xLmJwLmJsb2dzcG90LmNvbS8tbm8zT0lVOG9qWG8vVWlXVFh3NWRzVEkvQUFBQUFBQUFDdmcvRHdnb0pFWTA0cm8vczE2MDAvQnJvY2h1cmUtQmFja2dyb3VuZC1EZXNpZ24uanBnXCIpO1xufVxuXG5wIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucm91bmQtY29udGFjdC1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbn1cblxuLnJvdW5kLWNvbnRhY3QtYnV0dG9ucyBhIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5jb250YWN0LWJ1dHRvbnMtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDEwNywgMTI4LCAxNjgsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY29udGFjdC1idXR0b25zLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJVbmlmb3JtIE1lZGl1bVwiO1xufVxuXG5pLmZhcy5mYS1waG9uZS5mYS1mbGlwLWhvcml6b250YWwuY29udGFjdC1idXR0b25zLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbn1cblxuaS5mYWIuZmEtd2hhdHNhcHAuY29udGFjdC1idXR0b25zLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbn1cblxuaS5mYXMuZmEtbWFwLW1hcmtlci1hbHQuZmEtZmxpcC1ob3Jpem9udGFsLmNvbnRhY3QtYnV0dG9ucy1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XG59XG5cbmkuZmFzLmZhLWVudmVsb3BlLmZhLWZsaXAtaG9yaXpvbnRhbC5jb250YWN0LWJ1dHRvbnMtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xufVxuXG4udzMtdGVhbCwgLnczLWhvdmVyLXRlYWw6aG92ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbn1cblxuaDMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCkge1xuICBpbnB1dC5mb3JtLWNvbnRyb2wubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLXZhbGlkLmlucHRtaWRhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3MuYnRuLXJvdW5kZWQud3RzbWRpYS53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHQge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/DigitalCards/vcard03/vcard03.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/DigitalCards/vcard03/vcard03.component.ts ***!
  \***********************************************************/
/*! exports provided: Vcard03Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vcard03Component", function() { return Vcard03Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Vcard03Component = class Vcard03Component {
    constructor() { }
    ngOnInit() {
    }
    share(data) {
        console.log(data);
        const message = "this is test message";
        // Opening URL
        window.open('https://api.whatsapp.com/send?text=' + message + '&phone=' + '+91' + this.mobilenumber);
    }
};
Vcard03Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vcard03',
        template: __webpack_require__(/*! raw-loader!./vcard03.component.html */ "./node_modules/raw-loader/index.js!./src/app/DigitalCards/vcard03/vcard03.component.html"),
        styles: [__webpack_require__(/*! ./vcard03.component.scss */ "./src/app/DigitalCards/vcard03/vcard03.component.scss")]
    })
], Vcard03Component);



/***/ }),

/***/ "./src/app/DigitalCards/viewdigitalcards/viewdigitalcards.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/DigitalCards/viewdigitalcards/viewdigitalcards.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RpZ2l0YWxDYXJkcy92aWV3ZGlnaXRhbGNhcmRzL3ZpZXdkaWdpdGFsY2FyZHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/DigitalCards/viewdigitalcards/viewdigitalcards.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/DigitalCards/viewdigitalcards/viewdigitalcards.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ViewdigitalcardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewdigitalcardsComponent", function() { return ViewdigitalcardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewdigitalcardsComponent = class ViewdigitalcardsComponent {
    constructor() { }
    ngOnInit() {
    }
    share(data) {
        console.log(data);
        const message = "this is test message";
        // Opening URL
        window.open('https://api.whatsapp.com/send?text=' + message + '&phone=' + '+91' + this.mobilenumber);
    }
};
ViewdigitalcardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewdigitalcards',
        template: __webpack_require__(/*! raw-loader!./viewdigitalcards.component.html */ "./node_modules/raw-loader/index.js!./src/app/DigitalCards/viewdigitalcards/viewdigitalcards.component.html"),
        styles: [__webpack_require__(/*! ./viewdigitalcards.component.scss */ "./src/app/DigitalCards/viewdigitalcards/viewdigitalcards.component.scss")]
    })
], ViewdigitalcardsComponent);



/***/ }),

/***/ "./src/app/PackageManage/add-package/add-package.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/PackageManage/add-package/add-package.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input#city {\n  margin-top: 0%;\n  margin-bottom: 4%;\n}\n\nbutton.my-4.btn.btn-info.btn-block {\n  margin-left: 0%;\n}\n\n.medias.text-center.border.border-light.p-5 {\n  width: 50%;\n  margin-left: 25%;\n}\n\n@media screen and (max-width: 1060px) {\n  .medias.mymedia.text-center.border.border-light.p-5 {\n    width: 100%;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFja2FnZU1hbmFnZS9hZGQtcGFja2FnZS9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxQYWNrYWdlTWFuYWdlXFxhZGQtcGFja2FnZVxcYWRkLXBhY2thZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1BhY2thZ2VNYW5hZ2UvYWRkLXBhY2thZ2UvYWRkLXBhY2thZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBRUU7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9QYWNrYWdlTWFuYWdlL2FkZC1wYWNrYWdlL2FkZC1wYWNrYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQjY2l0eSB7XHJcbiAgbWFyZ2luLXRvcDogMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbn1cclxuXHJcbmJ1dHRvbi5teS00LmJ0bi5idG4taW5mby5idG4tYmxvY2sge1xyXG4gIG1hcmdpbi1sZWZ0OiAwJTtcclxufVxyXG5cclxuLm1lZGlhcy50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCl7XHJcblxyXG4gIC5tZWRpYXMubXltZWRpYS50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICB9XHJcbn1cclxuIiwiaW5wdXQjY2l0eSB7XG4gIG1hcmdpbi10b3A6IDAlO1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbn1cblxuYnV0dG9uLm15LTQuYnRuLmJ0bi1pbmZvLmJ0bi1ibG9jayB7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbn1cblxuLm1lZGlhcy50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCkge1xuICAubWVkaWFzLm15bWVkaWEudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/PackageManage/add-package/add-package.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/PackageManage/add-package/add-package.component.ts ***!
  \********************************************************************/
/*! exports provided: AddPackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPackageComponent", function() { return AddPackageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddPackageComponent = class AddPackageComponent {
    constructor(apiCall, router) {
        this.apiCall = apiCall;
        this.router = router;
    }
    ngOnInit() {
    }
    add(data) {
        this.apiCall.addPackages(data).subscribe((res) => {
            console.log(res);
            alert('Package added successfully');
            this.router.navigate(['/packageMange/ViewPacks']);
        });
    }
};
AddPackageComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddPackageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-package',
        template: __webpack_require__(/*! raw-loader!./add-package.component.html */ "./node_modules/raw-loader/index.js!./src/app/PackageManage/add-package/add-package.component.html"),
        styles: [__webpack_require__(/*! ./add-package.component.scss */ "./src/app/PackageManage/add-package/add-package.component.scss")]
    })
], AddPackageComponent);



/***/ }),

/***/ "./src/app/PackageManage/pack-manage/pack-manage.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/PackageManage/pack-manage/pack-manage.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhY2thZ2VNYW5hZ2UvcGFjay1tYW5hZ2UvcGFjay1tYW5hZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/PackageManage/pack-manage/pack-manage.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/PackageManage/pack-manage/pack-manage.component.ts ***!
  \********************************************************************/
/*! exports provided: PackManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackManageComponent", function() { return PackManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PackManageComponent = class PackManageComponent {
    constructor() { }
    ngOnInit() {
    }
};
PackManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pack-manage',
        template: __webpack_require__(/*! raw-loader!./pack-manage.component.html */ "./node_modules/raw-loader/index.js!./src/app/PackageManage/pack-manage/pack-manage.component.html"),
        styles: [__webpack_require__(/*! ./pack-manage.component.scss */ "./src/app/PackageManage/pack-manage/pack-manage.component.scss")]
    })
], PackManageComponent);



/***/ }),

/***/ "./src/app/PackageManage/packtabs/packtabs.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/PackageManage/packtabs/packtabs.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhY2thZ2VNYW5hZ2UvcGFja3RhYnMvcGFja3RhYnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/PackageManage/packtabs/packtabs.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/PackageManage/packtabs/packtabs.component.ts ***!
  \**************************************************************/
/*! exports provided: PacktabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacktabsComponent", function() { return PacktabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PacktabsComponent = class PacktabsComponent {
    constructor() { }
    ngOnInit() {
    }
};
PacktabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-packtabs',
        template: __webpack_require__(/*! raw-loader!./packtabs.component.html */ "./node_modules/raw-loader/index.js!./src/app/PackageManage/packtabs/packtabs.component.html"),
        styles: [__webpack_require__(/*! ./packtabs.component.scss */ "./src/app/PackageManage/packtabs/packtabs.component.scss")]
    })
], PacktabsComponent);



/***/ }),

/***/ "./src/app/PackageManage/update-package/update-package.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/PackageManage/update-package/update-package.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input#city {\n  margin-top: 0%;\n  margin-bottom: 4%;\n}\n\nbutton.my-4.btn.btn-info.btn-block {\n  margin-left: 0%;\n}\n\n.medias.text-center.border.border-light.p-5 {\n  width: 50%;\n  margin-left: 25%;\n}\n\n@media screen and (max-width: 1060px) {\n  .medias.mymedia.text-center.border.border-light.p-5 {\n    width: 100%;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFja2FnZU1hbmFnZS91cGRhdGUtcGFja2FnZS9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxQYWNrYWdlTWFuYWdlXFx1cGRhdGUtcGFja2FnZVxcdXBkYXRlLXBhY2thZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1BhY2thZ2VNYW5hZ2UvdXBkYXRlLXBhY2thZ2UvdXBkYXRlLXBhY2thZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBRUU7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9QYWNrYWdlTWFuYWdlL3VwZGF0ZS1wYWNrYWdlL3VwZGF0ZS1wYWNrYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQjY2l0eSB7XHJcbiAgbWFyZ2luLXRvcDogMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbn1cclxuXHJcbmJ1dHRvbi5teS00LmJ0bi5idG4taW5mby5idG4tYmxvY2sge1xyXG4gIG1hcmdpbi1sZWZ0OiAwJTtcclxufVxyXG5cclxuLm1lZGlhcy50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCl7XHJcblxyXG4gIC5tZWRpYXMubXltZWRpYS50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICB9XHJcbn1cclxuIiwiaW5wdXQjY2l0eSB7XG4gIG1hcmdpbi10b3A6IDAlO1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbn1cblxuYnV0dG9uLm15LTQuYnRuLmJ0bi1pbmZvLmJ0bi1ibG9jayB7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbn1cblxuLm1lZGlhcy50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCkge1xuICAubWVkaWFzLm15bWVkaWEudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/PackageManage/update-package/update-package.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/PackageManage/update-package/update-package.component.ts ***!
  \**************************************************************************/
/*! exports provided: UpdatePackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePackageComponent", function() { return UpdatePackageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UpdatePackageComponent = class UpdatePackageComponent {
    constructor(apiCall, router, route) {
        this.apiCall = apiCall;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.package_id = this.route.snapshot.paramMap.get('package_id');
        this.getPackageDetails();
    }
    getPackageDetails() {
        const data = { package_id: this.package_id };
        this.apiCall.getPackageDetails(data).subscribe((res) => {
            this.packageDetails = res.data;
        });
    }
    updatePackage(packData) {
        packData.package_id = this.package_id;
        this.apiCall.updatePackage(packData).subscribe((res) => {
            console.log(res);
            if (res.code == '200') {
                alert(res.success);
                this.router.navigate(['/packageMange/ViewPacks']);
            }
        });
    }
};
UpdatePackageComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
UpdatePackageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-package',
        template: __webpack_require__(/*! raw-loader!./update-package.component.html */ "./node_modules/raw-loader/index.js!./src/app/PackageManage/update-package/update-package.component.html"),
        styles: [__webpack_require__(/*! ./update-package.component.scss */ "./src/app/PackageManage/update-package/update-package.component.scss")]
    })
], UpdatePackageComponent);



/***/ }),

/***/ "./src/app/PackageManage/updatepremiumplan/updatepremiumplan.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/PackageManage/updatepremiumplan/updatepremiumplan.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input#city {\n  margin-top: 0%;\n  margin-bottom: 4%;\n}\n\nbutton.my-4.btn.btn-info.btn-block {\n  margin-left: 0%;\n}\n\n.medias.text-center.border.border-light.p-5 {\n  width: 50%;\n  margin-left: 25%;\n}\n\n@media screen and (max-width: 1060px) {\n  .medias.mymedia.text-center.border.border-light.p-5 {\n    width: 100%;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFja2FnZU1hbmFnZS91cGRhdGVwcmVtaXVtcGxhbi9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxQYWNrYWdlTWFuYWdlXFx1cGRhdGVwcmVtaXVtcGxhblxcdXBkYXRlcHJlbWl1bXBsYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1BhY2thZ2VNYW5hZ2UvdXBkYXRlcHJlbWl1bXBsYW4vdXBkYXRlcHJlbWl1bXBsYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBRUU7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9QYWNrYWdlTWFuYWdlL3VwZGF0ZXByZW1pdW1wbGFuL3VwZGF0ZXByZW1pdW1wbGFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQjY2l0eSB7XHJcbiAgbWFyZ2luLXRvcDogMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbn1cclxuXHJcbmJ1dHRvbi5teS00LmJ0bi5idG4taW5mby5idG4tYmxvY2sge1xyXG4gIG1hcmdpbi1sZWZ0OiAwJTtcclxufVxyXG5cclxuLm1lZGlhcy50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCl7XHJcblxyXG4gIC5tZWRpYXMubXltZWRpYS50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICB9XHJcbn1cclxuIiwiaW5wdXQjY2l0eSB7XG4gIG1hcmdpbi10b3A6IDAlO1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbn1cblxuYnV0dG9uLm15LTQuYnRuLmJ0bi1pbmZvLmJ0bi1ibG9jayB7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbn1cblxuLm1lZGlhcy50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCkge1xuICAubWVkaWFzLm15bWVkaWEudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/PackageManage/updatepremiumplan/updatepremiumplan.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/PackageManage/updatepremiumplan/updatepremiumplan.component.ts ***!
  \********************************************************************************/
/*! exports provided: UpdatepremiumplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatepremiumplanComponent", function() { return UpdatepremiumplanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UpdatepremiumplanComponent = class UpdatepremiumplanComponent {
    constructor(apiCall, router, route) {
        this.apiCall = apiCall;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.package_id = this.route.snapshot.paramMap.get('package_id');
        this.getPackageDetails();
    }
    getPackageDetails() {
        const data = { package_id: this.package_id };
        this.apiCall.getpremiumplandetails(data).subscribe((res) => {
            this.packageDetails = res.data;
        });
    }
    updatePackage(packData) {
        packData.package_id = this.package_id;
        this.apiCall.updatePremiumPlan(packData).subscribe((res) => {
            console.log(res);
            if (res.code == '200') {
                alert(res.success);
                this.router.navigate(['/packagemanagement']);
            }
        });
    }
};
UpdatepremiumplanComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
UpdatepremiumplanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-updatepremiumplan',
        template: __webpack_require__(/*! raw-loader!./updatepremiumplan.component.html */ "./node_modules/raw-loader/index.js!./src/app/PackageManage/updatepremiumplan/updatepremiumplan.component.html"),
        styles: [__webpack_require__(/*! ./updatepremiumplan.component.scss */ "./src/app/PackageManage/updatepremiumplan/updatepremiumplan.component.scss")]
    })
], UpdatepremiumplanComponent);



/***/ }),

/***/ "./src/app/PackageManage/view-package/view-package.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/PackageManage/view-package/view-package.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\nimg.xlicon {\n  width: 35%;\n  margin-left: 28%;\n  margin-top: -13%;\n  margin-bottom: -6%;\n  cursor: pointer;\n}\n\n.col-md-4 {\n  margin-bottom: 0%;\n  margin-top: -3%;\n  margin-left: 74%;\n}\n\ninput {\n  margin-top: 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFja2FnZU1hbmFnZS92aWV3LXBhY2thZ2UvRjpcXGdpdCBodWJcXEFkbWlucGFubmVsVG9NYW5hZ2VUZWFtXFxGcm9udGVuZC9zcmNcXGFwcFxcUGFja2FnZU1hbmFnZVxcdmlldy1wYWNrYWdlXFx2aWV3LXBhY2thZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1BhY2thZ2VNYW5hZ2Uvdmlldy1wYWNrYWdlL3ZpZXctcGFja2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FEQ0E7RUFFRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL1BhY2thZ2VNYW5hZ2Uvdmlldy1wYWNrYWdlL3ZpZXctcGFja2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkLCB0aCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5pbWcueGxpY29uIHtcclxuXHJcbiAgd2lkdGg6IDM1JTtcclxuICBtYXJnaW4tbGVmdDogMjglO1xyXG4gIG1hcmdpbi10b3A6IC0xMyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTYlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29sLW1kLTR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgbWFyZ2luLXRvcDogLTMlO1xyXG4gIG1hcmdpbi1sZWZ0OiA3NCU7XHJcbn1cclxuaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDclO1xyXG59XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkLCB0aCB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbmltZy54bGljb24ge1xuICB3aWR0aDogMzUlO1xuICBtYXJnaW4tbGVmdDogMjglO1xuICBtYXJnaW4tdG9wOiAtMTMlO1xuICBtYXJnaW4tYm90dG9tOiAtNiU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbC1tZC00IHtcbiAgbWFyZ2luLWJvdHRvbTogMCU7XG4gIG1hcmdpbi10b3A6IC0zJTtcbiAgbWFyZ2luLWxlZnQ6IDc0JTtcbn1cblxuaW5wdXQge1xuICBtYXJnaW4tdG9wOiA3JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/PackageManage/view-package/view-package.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/PackageManage/view-package/view-package.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewPackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPackageComponent", function() { return ViewPackageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/apiCalls/excel.service */ "./src/app/apiCalls/excel.service.ts");





let ViewPackageComponent = class ViewPackageComponent {
    constructor(apiCall, router, excelservice) {
        this.apiCall = apiCall;
        this.router = router;
        this.excelservice = excelservice;
        this.personList = [];
        this.awaitingPersonList = [];
    }
    ngOnInit() {
        this.getAllPackages();
    }
    remove(id) {
        this.awaitingPersonList.push(this.personList[id]);
        this.personList.splice(id, 1);
    }
    getAllPackages() {
        this.apiCall.getAllPackages().subscribe((res) => {
            console.log(res);
            this.personList = res.data;
        });
    }
    deletePackage(package_id, id) {
        const data = { package_id: package_id };
        this.apiCall.deletePackage(data).subscribe((res) => {
            console.log(res);
            alert('Package Deleted Sucessfully');
            this.remove(id);
        });
    }
    exportAsXLSX() {
        this.excelservice.exportAsExcelFile(this.personList, 'sample');
    }
    search() {
        if (this.package_id != "") {
            this.personList = this.personList.filter(res => {
                return res.package_id.toLocaleLowerCase().match(this.package_id.toLocaleLowerCase());
            });
        }
        else if (this.package_id == "") {
            this.ngOnInit();
        }
    }
};
ViewPackageComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"] }
];
ViewPackageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-package',
        template: __webpack_require__(/*! raw-loader!./view-package.component.html */ "./node_modules/raw-loader/index.js!./src/app/PackageManage/view-package/view-package.component.html"),
        styles: [__webpack_require__(/*! ./view-package.component.scss */ "./src/app/PackageManage/view-package/view-package.component.scss")]
    })
], ViewPackageComponent);



/***/ }),

/***/ "./src/app/PackageManage/viewpremiumplans/viewpremiumplans.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/PackageManage/viewpremiumplans/viewpremiumplans.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\nimg.xlicon {\n  width: 35%;\n  margin-left: 28%;\n  margin-top: -13%;\n  margin-bottom: -6%;\n  cursor: pointer;\n}\n\n.col-md-4 {\n  margin-bottom: 0%;\n  margin-top: -3%;\n  margin-left: 74%;\n}\n\ninput {\n  margin-top: 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFja2FnZU1hbmFnZS92aWV3cHJlbWl1bXBsYW5zL0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXFBhY2thZ2VNYW5hZ2VcXHZpZXdwcmVtaXVtcGxhbnNcXHZpZXdwcmVtaXVtcGxhbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1BhY2thZ2VNYW5hZ2Uvdmlld3ByZW1pdW1wbGFucy92aWV3cHJlbWl1bXBsYW5zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURDQTtFQUVFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvUGFja2FnZU1hbmFnZS92aWV3cHJlbWl1bXBsYW5zL3ZpZXdwcmVtaXVtcGxhbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuaW1nLnhsaWNvbiB7XHJcblxyXG4gIHdpZHRoOiAzNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI4JTtcclxuICBtYXJnaW4tdG9wOiAtMTMlO1xyXG4gIG1hcmdpbi1ib3R0b206IC02JTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbC1tZC00e1xyXG4gIG1hcmdpbi1ib3R0b206IDAlO1xyXG4gIG1hcmdpbi10b3A6IC0zJTtcclxuICBtYXJnaW4tbGVmdDogNzQlO1xyXG59XHJcbmlucHV0IHtcclxuICBtYXJnaW4tdG9wOiA3JTtcclxufVxyXG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCwgdGgge1xuICB3aWR0aDogMjUlO1xufVxuXG5pbWcueGxpY29uIHtcbiAgd2lkdGg6IDM1JTtcbiAgbWFyZ2luLWxlZnQ6IDI4JTtcbiAgbWFyZ2luLXRvcDogLTEzJTtcbiAgbWFyZ2luLWJvdHRvbTogLTYlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb2wtbWQtNCB7XG4gIG1hcmdpbi1ib3R0b206IDAlO1xuICBtYXJnaW4tdG9wOiAtMyU7XG4gIG1hcmdpbi1sZWZ0OiA3NCU7XG59XG5cbmlucHV0IHtcbiAgbWFyZ2luLXRvcDogNyU7XG59Il19 */"

/***/ }),

/***/ "./src/app/PackageManage/viewpremiumplans/viewpremiumplans.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/PackageManage/viewpremiumplans/viewpremiumplans.component.ts ***!
  \******************************************************************************/
/*! exports provided: ViewpremiumplansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpremiumplansComponent", function() { return ViewpremiumplansComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/apiCalls/excel.service */ "./src/app/apiCalls/excel.service.ts");





let ViewpremiumplansComponent = class ViewpremiumplansComponent {
    constructor(apiCall, router, excelservice) {
        this.apiCall = apiCall;
        this.router = router;
        this.excelservice = excelservice;
        this.awaitingPersonList = [];
    }
    ngOnInit() {
        this.getAllPackages();
    }
    remove(id) {
        this.awaitingPersonList.push(this.personList[id]);
        this.personList.splice(id, 1);
    }
    getAllPackages() {
        this.apiCall.getAllpremiumplans().subscribe((res) => {
            console.log(res);
            this.personList = res.data;
        });
    }
    deletePackage(package_id, id) {
        const data = { package_id: package_id };
        const yes = confirm('Are you sure want to Delete?');
        if (yes) {
            this.apiCall.deletePremiumPack(data).subscribe((res) => {
                console.log(res);
                alert('Package Deleted Sucessfully');
                this.remove(id);
            });
        }
    }
    exportAsXLSX() {
        this.excelservice.exportAsExcelFile(this.personList, 'sample');
    }
    search() {
        if (this.package_id != "") {
            this.personList = this.personList.filter(res => {
                return res.package_id.toLocaleLowerCase().match(this.package_id.toLocaleLowerCase());
            });
        }
        else if (this.package_id == "") {
            this.ngOnInit();
        }
    }
};
ViewpremiumplansComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"] }
];
ViewpremiumplansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewpremiumplans',
        template: __webpack_require__(/*! raw-loader!./viewpremiumplans.component.html */ "./node_modules/raw-loader/index.js!./src/app/PackageManage/viewpremiumplans/viewpremiumplans.component.html"),
        styles: [__webpack_require__(/*! ./viewpremiumplans.component.scss */ "./src/app/PackageManage/viewpremiumplans/viewpremiumplans.component.scss")]
    })
], ViewpremiumplansComponent);



/***/ }),

/***/ "./src/app/Reseller/reseller/reseller.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/Reseller/reseller/reseller.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Jlc2VsbGVyL3Jlc2VsbGVyL3Jlc2VsbGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Reseller/reseller/reseller.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Reseller/reseller/reseller.component.ts ***!
  \*********************************************************/
/*! exports provided: ResellerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResellerComponent", function() { return ResellerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResellerComponent = class ResellerComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResellerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reseller',
        template: __webpack_require__(/*! raw-loader!./reseller.component.html */ "./node_modules/raw-loader/index.js!./src/app/Reseller/reseller/reseller.component.html"),
        styles: [__webpack_require__(/*! ./reseller.component.scss */ "./src/app/Reseller/reseller/reseller.component.scss")]
    })
], ResellerComponent);



/***/ }),

/***/ "./src/app/Reseller/resellerview/resellerview.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Reseller/resellerview/resellerview.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\ntd, th {\n  width: 25%;\n}\n\nimg.xlicon {\n  width: 30%;\n  margin-left: 60%;\n  margin-top: -11%;\n  margin-bottom: -4%;\n  cursor: pointer;\n}\n\n.col-md-6.mubutn {\n  margin-bottom: 0%;\n  margin-top: -3.5%;\n  margin-left: 52%;\n}\n\ninput {\n  margin-top: 7%;\n  width: 30%;\n}\n\nselect.browser-default.custom-select.filter {\n  width: 25%;\n  margin-left: 1%;\n}\n\nbutton.mat-stroked-button.mat-button-base.mat-primary {\n  margin-left: 1%;\n}\n\nh6.errorMessage.ng-star-inserted {\n  text-align: center;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVzZWxsZXIvcmVzZWxsZXJ2aWV3L0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXFJlc2VsbGVyXFxyZXNlbGxlcnZpZXdcXHJlc2VsbGVydmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvUmVzZWxsZXIvcmVzZWxsZXJ2aWV3L3Jlc2VsbGVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFBVSxlQUFBO0FDR1Y7O0FERkE7RUFDRSxVQUFBO0FDS0Y7O0FESEE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ01GOztBREpBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDT0Y7O0FESkE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ09GOztBREpBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNPRjs7QURGQTtFQUNFLGVBQUE7QUNLRjs7QURIQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvUmVzZWxsZXIvcmVzZWxsZXJ2aWV3L3Jlc2VsbGVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBvaW50ZXIge2N1cnNvcjogcG9pbnRlcjt9XHJcbnRkLCB0aCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5pbWcueGxpY29uIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA2MCU7XHJcbiAgbWFyZ2luLXRvcDogLTExJTtcclxuICBtYXJnaW4tYm90dG9tOiAtNCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jb2wtbWQtNi5tdWJ1dG57XHJcbiAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgbWFyZ2luLXRvcDogLTMuNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUyJTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDclO1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbnNlbGVjdC5icm93c2VyLWRlZmF1bHQuY3VzdG9tLXNlbGVjdC5maWx0ZXIge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcblxyXG5cclxuXHJcbmJ1dHRvbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWJ1dHRvbi1iYXNlLm1hdC1wcmltYXJ5IHtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuaDYuZXJyb3JNZXNzYWdlLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50ZCwgdGgge1xuICB3aWR0aDogMjUlO1xufVxuXG5pbWcueGxpY29uIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLWxlZnQ6IDYwJTtcbiAgbWFyZ2luLXRvcDogLTExJTtcbiAgbWFyZ2luLWJvdHRvbTogLTQlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb2wtbWQtNi5tdWJ1dG4ge1xuICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgbWFyZ2luLXRvcDogLTMuNSU7XG4gIG1hcmdpbi1sZWZ0OiA1MiU7XG59XG5cbmlucHV0IHtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIHdpZHRoOiAzMCU7XG59XG5cbnNlbGVjdC5icm93c2VyLWRlZmF1bHQuY3VzdG9tLXNlbGVjdC5maWx0ZXIge1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW4tbGVmdDogMSU7XG59XG5cbmJ1dHRvbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWJ1dHRvbi1iYXNlLm1hdC1wcmltYXJ5IHtcbiAgbWFyZ2luLWxlZnQ6IDElO1xufVxuXG5oNi5lcnJvck1lc3NhZ2Uubmctc3Rhci1pbnNlcnRlZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Reseller/resellerview/resellerview.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Reseller/resellerview/resellerview.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResellerviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResellerviewComponent", function() { return ResellerviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../apiCalls/excel.service */ "./src/app/apiCalls/excel.service.ts");





let ResellerviewComponent = class ResellerviewComponent {
    constructor(apiCall, excelservice, router) {
        this.apiCall = apiCall;
        this.excelservice = excelservice;
        this.router = router;
        this.awaitingPersonList = [];
        this.selectedToppings = [];
        this.allToppings = false;
        this.curDate = new Date();
    }
    ngOnInit() {
        this.role = this.apiCall.getRole();
        this.getClients();
    }
    updateList(id, property, event) {
        const editField = event.target.textContent;
        this.personList[id][property] = editField;
    }
    remove(id) {
        this.awaitingPersonList.push(this.personList[id]);
        this.personList.splice(id, 1);
    }
    add() {
        if (this.awaitingPersonList.length > 0) {
            const person = this.awaitingPersonList[0];
            this.personList.push(person);
            this.awaitingPersonList.splice(0, 1);
        }
    }
    changeValue(id, property, event) {
        this.editField = event.target.textContent;
    }
    getClients() {
        this.apiCall.getClients().subscribe((res) => {
            console.log(res);
            this.personList = res.data;
            console.log(this.personList);
        });
    }
    deleteclient(client_id, id) {
        console.log(id);
        const yes = confirm('Are you sure want to Delete?');
        if (yes) {
            const data = { client_id: client_id };
            this.apiCall.deleteclient(data).subscribe((res) => {
                console.log(res);
                alert('User Deleted Sucessfully');
                this.remove(id);
                this.getClients();
            });
        }
    }
    exportAsXLSX() {
        this.excelservice.exportAsExcelFile(this.personList, 'sample');
    }
    updatestatus(person) {
        const yes = confirm('Are you  sure want to change the status?');
        if (yes) {
            const data = { account_status: person.account_status, client_id: person.client_id, user_regn_channel: person.user_regn_channel };
            console.log(data);
            this.apiCall.updateclientStatus(data).subscribe((res) => {
                if (res.status == 'true') {
                    alert(res.message);
                }
                else if (res.status == 'false') {
                    alert(res.message);
                }
            });
        }
    }
    getclientsbyfilter(value) {
        console.log(value);
        const data = { account_status: value };
        this.apiCall.getclientsbyfilter(data).subscribe((res) => {
            this.personList = res.data;
            if (res.status == "false") {
                this.errorMessage = res.message;
            }
            if (value === 'All') {
                this.ngOnInit();
            }
        });
    }
    selectAllToppings(checked, toppings) {
        this.selectedToppings = toppings;
        if (checked) {
            this.allToppings = true;
            this.selectedclients = this.selectedToppings;
        }
        else {
            console.log(this.selectedToppings);
            this.allToppings = false;
        }
    }
    selectNewTopping(checked, topping) {
        if (checked) {
            this.selectedToppings.push(topping);
            this.selectedclients = this.selectedToppings;
        }
        else {
            this.selectedToppings = this.selectedToppings.filter(top => top.client_id !== topping.client_id);
        }
    }
    selectclients() {
        const notify = confirm("Are you sure you want to send Bulksms");
        if (notify) {
            this.apiCall.getclientids(this.selectedclients);
            this.router.navigate(['/client/sendbulksms']);
        }
    }
};
ResellerviewComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: _apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ResellerviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resellerview',
        template: __webpack_require__(/*! raw-loader!./resellerview.component.html */ "./node_modules/raw-loader/index.js!./src/app/Reseller/resellerview/resellerview.component.html"),
        styles: [__webpack_require__(/*! ./resellerview.component.scss */ "./src/app/Reseller/resellerview/resellerview.component.scss")]
    })
], ResellerviewComponent);



/***/ }),

/***/ "./src/app/Templates/add-templates/add-templates.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/Templates/add-templates/add-templates.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input#city {\n  margin-top: 0%;\n  margin-bottom: 4%;\n}\n\nbutton.my-4.btn.btn-info.btn-block {\n  margin-left: 0%;\n}\n\n.medias.text-center.border.border-light.p-5 {\n  width: 50%;\n  margin-left: 25%;\n}\n\n@media screen and (max-width: 1060px) {\n  .medias.mymedia.text-center.border.border-light.p-5 {\n    width: 100%;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVGVtcGxhdGVzL2FkZC10ZW1wbGF0ZXMvRjpcXGdpdCBodWJcXEFkbWlucGFubmVsVG9NYW5hZ2VUZWFtXFxGcm9udGVuZC9zcmNcXGFwcFxcVGVtcGxhdGVzXFxhZGQtdGVtcGxhdGVzXFxhZGQtdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9UZW1wbGF0ZXMvYWRkLXRlbXBsYXRlcy9hZGQtdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUVFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvVGVtcGxhdGVzL2FkZC10ZW1wbGF0ZXMvYWRkLXRlbXBsYXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0I2NpdHkge1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG59XHJcblxyXG5idXR0b24ubXktNC5idG4uYnRuLWluZm8uYnRuLWJsb2NrIHtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbn1cclxuXHJcbi5tZWRpYXMudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpe1xyXG5cclxuICAubWVkaWFzLm15bWVkaWEudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgfVxyXG59XHJcbiIsImlucHV0I2NpdHkge1xuICBtYXJnaW4tdG9wOiAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG59XG5cbmJ1dHRvbi5teS00LmJ0bi5idG4taW5mby5idG4tYmxvY2sge1xuICBtYXJnaW4tbGVmdDogMCU7XG59XG5cbi5tZWRpYXMudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpIHtcbiAgLm1lZGlhcy5teW1lZGlhLnRleHQtY2VudGVyLmJvcmRlci5ib3JkZXItbGlnaHQucC01IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/Templates/add-templates/add-templates.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Templates/add-templates/add-templates.component.ts ***!
  \********************************************************************/
/*! exports provided: AddTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTemplatesComponent", function() { return AddTemplatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddTemplatesComponent = class AddTemplatesComponent {
    constructor(apiCall, router) {
        this.apiCall = apiCall;
        this.router = router;
    }
    ngOnInit() {
        this.getevents();
    }
    add(data) {
        this.apiCall.addnewTemplate(data).subscribe((res) => {
            if (res.status == 'success') {
                alert(res.message);
                this.router.navigate(['/templates/viewTemplates']);
            }
        });
    }
    getevents() {
        this.apiCall.getevents().subscribe((res) => {
            console.log(res);
            this.events = res.data;
        });
    }
};
AddTemplatesComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddTemplatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-templates',
        template: __webpack_require__(/*! raw-loader!./add-templates.component.html */ "./node_modules/raw-loader/index.js!./src/app/Templates/add-templates/add-templates.component.html"),
        styles: [__webpack_require__(/*! ./add-templates.component.scss */ "./src/app/Templates/add-templates/add-templates.component.scss")]
    })
], AddTemplatesComponent);



/***/ }),

/***/ "./src/app/Templates/addtemplate-type/addtemplate-type.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/Templates/addtemplate-type/addtemplate-type.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input#city {\n  margin-top: 0%;\n  margin-bottom: 4%;\n}\n\nbutton.my-4.btn.btn-info.btn-block {\n  margin-left: 0%;\n}\n\n.medias.text-center.border.border-light.p-5 {\n  width: 50%;\n  margin-left: 25%;\n}\n\n@media screen and (max-width: 1060px) {\n  .medias.mymedia.text-center.border.border-light.p-5 {\n    width: 100%;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVGVtcGxhdGVzL2FkZHRlbXBsYXRlLXR5cGUvRjpcXGdpdCBodWJcXEFkbWlucGFubmVsVG9NYW5hZ2VUZWFtXFxGcm9udGVuZC9zcmNcXGFwcFxcVGVtcGxhdGVzXFxhZGR0ZW1wbGF0ZS10eXBlXFxhZGR0ZW1wbGF0ZS10eXBlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9UZW1wbGF0ZXMvYWRkdGVtcGxhdGUtdHlwZS9hZGR0ZW1wbGF0ZS10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUVFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvVGVtcGxhdGVzL2FkZHRlbXBsYXRlLXR5cGUvYWRkdGVtcGxhdGUtdHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0I2NpdHkge1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG59XHJcblxyXG5idXR0b24ubXktNC5idG4uYnRuLWluZm8uYnRuLWJsb2NrIHtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbn1cclxuXHJcbi5tZWRpYXMudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpe1xyXG5cclxuICAubWVkaWFzLm15bWVkaWEudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgfVxyXG59XHJcbiIsImlucHV0I2NpdHkge1xuICBtYXJnaW4tdG9wOiAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG59XG5cbmJ1dHRvbi5teS00LmJ0bi5idG4taW5mby5idG4tYmxvY2sge1xuICBtYXJnaW4tbGVmdDogMCU7XG59XG5cbi5tZWRpYXMudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpIHtcbiAgLm1lZGlhcy5teW1lZGlhLnRleHQtY2VudGVyLmJvcmRlci5ib3JkZXItbGlnaHQucC01IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/Templates/addtemplate-type/addtemplate-type.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Templates/addtemplate-type/addtemplate-type.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddtemplateTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtemplateTypeComponent", function() { return AddtemplateTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AddtemplateTypeComponent = class AddtemplateTypeComponent {
    constructor(apiCall, fb, router) {
        this.apiCall = apiCall;
        this.fb = fb;
        this.router = router;
        this.percentDone = 0;
        this.users = [];
        this.form = this.fb.group({
            event_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            avatar: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            display_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    // Image Preview
    uploadFile(event) {
        const file = event.target.files[0];
        this.form.patchValue({
            avatar: file
        });
        this.form.get('avatar').updateValueAndValidity();
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.preview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    submitForm() {
        this.apiCall.addtemplateType(this.form.value.event_code, this.form.value.display_name, this.form.value.avatar).subscribe((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress:
                    this.percentDone = Math.round(event.loaded / event.total * 100);
                    console.log(`Uploaded! ${this.percentDone}%`);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response:
                    console.log('User successfully created!', event.body);
                    this.percentDone = false;
                    alert('file uploaded sucessfully');
                    this.router.navigate(['/templates/viewTemplates']);
            }
        });
    }
};
AddtemplateTypeComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AddtemplateTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addtemplate-type',
        template: __webpack_require__(/*! raw-loader!./addtemplate-type.component.html */ "./node_modules/raw-loader/index.js!./src/app/Templates/addtemplate-type/addtemplate-type.component.html"),
        styles: [__webpack_require__(/*! ./addtemplate-type.component.scss */ "./src/app/Templates/addtemplate-type/addtemplate-type.component.scss")]
    })
], AddtemplateTypeComponent);



/***/ }),

/***/ "./src/app/Templates/templates/templates.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/Templates/templates/templates.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1RlbXBsYXRlcy90ZW1wbGF0ZXMvdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Templates/templates/templates.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Templates/templates/templates.component.ts ***!
  \************************************************************/
/*! exports provided: TemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesComponent", function() { return TemplatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TemplatesComponent = class TemplatesComponent {
    constructor() { }
    ngOnInit() {
    }
};
TemplatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-templates',
        template: __webpack_require__(/*! raw-loader!./templates.component.html */ "./node_modules/raw-loader/index.js!./src/app/Templates/templates/templates.component.html"),
        styles: [__webpack_require__(/*! ./templates.component.scss */ "./src/app/Templates/templates/templates.component.scss")]
    })
], TemplatesComponent);



/***/ }),

/***/ "./src/app/Templates/viewsystemtemplates/viewsystemtemplates.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/Templates/viewsystemtemplates/viewsystemtemplates.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1RlbXBsYXRlcy92aWV3c3lzdGVtdGVtcGxhdGVzL3ZpZXdzeXN0ZW10ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Templates/viewsystemtemplates/viewsystemtemplates.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Templates/viewsystemtemplates/viewsystemtemplates.component.ts ***!
  \********************************************************************************/
/*! exports provided: ViewsystemtemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsystemtemplatesComponent", function() { return ViewsystemtemplatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ViewsystemtemplatesComponent = class ViewsystemtemplatesComponent {
    constructor(apiCall, router, route) {
        this.apiCall = apiCall;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.event_code = this.route.snapshot.paramMap.get('event_code');
        this.getsmsTemplates();
    }
    getsmsTemplates() {
        const data = { event_code: this.event_code };
        this.apiCall.getsmsTemplates(data).subscribe((res) => {
            this.message = res.data;
            console.log(res);
        });
    }
    delete(id) {
        let isBoss = confirm("Are you sure to delete?");
        if (isBoss == true) {
            const data = { tid: id };
            this.apiCall.deletetemplate(data).subscribe((res) => {
                alert(res.message);
                this.getsmsTemplates();
            });
        }
    }
};
ViewsystemtemplatesComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ViewsystemtemplatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewsystemtemplates',
        template: __webpack_require__(/*! raw-loader!./viewsystemtemplates.component.html */ "./node_modules/raw-loader/index.js!./src/app/Templates/viewsystemtemplates/viewsystemtemplates.component.html"),
        styles: [__webpack_require__(/*! ./viewsystemtemplates.component.scss */ "./src/app/Templates/viewsystemtemplates/viewsystemtemplates.component.scss")]
    })
], ViewsystemtemplatesComponent);



/***/ }),

/***/ "./src/app/Templates/viewtemplates/viewtemplates.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/Templates/viewtemplates/viewtemplates.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-md-3.ng-star-inserted {\n  margin-bottom: 2%;\n}\n\nimg.mat-card-image {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVGVtcGxhdGVzL3ZpZXd0ZW1wbGF0ZXMvRjpcXGdpdCBodWJcXEFkbWlucGFubmVsVG9NYW5hZ2VUZWFtXFxGcm9udGVuZC9zcmNcXGFwcFxcVGVtcGxhdGVzXFx2aWV3dGVtcGxhdGVzXFx2aWV3dGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9UZW1wbGF0ZXMvdmlld3RlbXBsYXRlcy92aWV3dGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL1RlbXBsYXRlcy92aWV3dGVtcGxhdGVzL3ZpZXd0ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLW1kLTMubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuaW1nLm1hdC1jYXJkLWltYWdlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLmNvbC1tZC0zLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cblxuaW1nLm1hdC1jYXJkLWltYWdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Templates/viewtemplates/viewtemplates.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Templates/viewtemplates/viewtemplates.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewtemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtemplatesComponent", function() { return ViewtemplatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_4__);





let ViewtemplatesComponent = class ViewtemplatesComponent {
    constructor(apiCall, router) {
        this.apiCall = apiCall;
        this.router = router;
    }
    ngOnInit() {
        this.getAllTemplateTypes();
    }
    getAllTemplateTypes() {
        this.apiCall.getAllTemplateTypes().subscribe((res) => {
            this.data = res.data;
        });
    }
    onChange(files) {
        if (files[0]) {
            console.log(files[0]);
            papaparse__WEBPACK_IMPORTED_MODULE_4__["parse"](files[0], {
                header: true,
                skipEmptyLines: true,
                complete: (result, file) => {
                    console.log(result);
                    this.dataList = result.data;
                }
            });
        }
    }
    uploadtemplates() {
        const data = { data: this.dataList };
        this.apiCall.uploadtemplates(data).subscribe((res) => {
            console.log(res);
        });
    }
};
ViewtemplatesComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ViewtemplatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewtemplates',
        template: __webpack_require__(/*! raw-loader!./viewtemplates.component.html */ "./node_modules/raw-loader/index.js!./src/app/Templates/viewtemplates/viewtemplates.component.html"),
        styles: [__webpack_require__(/*! ./viewtemplates.component.scss */ "./src/app/Templates/viewtemplates/viewtemplates.component.scss")]
    })
], ViewtemplatesComponent);



/***/ }),

/***/ "./src/app/apiCalls/api-call.service.ts":
/*!**********************************************!*\
  !*** ./src/app/apiCalls/api-call.service.ts ***!
  \**********************************************/
/*! exports provided: ApiCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCallService", function() { return ApiCallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let ApiCallService = class ApiCallService {
    constructor(http) {
        this.http = http;
        this.clientSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.client_idArray = this.clientSource.asObservable();
        this.packSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.packArray = this.packSource.asObservable();
        this.selectedUser = {
            mobile_number: '',
            email_id: '',
            password: '',
            user_name: ''
        };
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ NoAuth: 'True' }) };
    }
    getclientids(client_idArray) {
        this.clientSource.next(client_idArray);
    }
    confirmpackage(packData) {
        this.packSource.next(packData);
    }
    // HttpMethods
    postUser(user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/signup', user, this.noAuthHeader);
    }
    login(authCredentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
    }
    getUserProfile() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/userProfile');
    }
    getuserdata() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getuserdata');
    }
    getClients() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/getClients');
    }
    getuserDetails(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/getuserDetails', data);
    }
    updateclientData(data) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/updateclientData', data);
    }
    deleteclient(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/deleteclient', data);
    }
    getAllPackages() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getAllPackages');
    }
    addPackages(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/addPackages', data);
    }
    getPackageDetails(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getPackageDetails', data);
    }
    updatePackage(data) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/updatePackage', data);
    }
    deletePackage(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/deletePackage', data);
    }
    getpurchaseData() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getpurchaseData');
    }
    getpurchaseDetailed(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getpurchaseDetailed', data);
    }
    getSalesData(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getSalesData', data);
    }
    getpurchaseDataByDate(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getpurchaseDataByDate', data);
    }
    updatePaymentStatus(data) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/updatePaymentStatus', data);
    }
    sendSMS(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/sendSMS', data);
    }
    activationEmail(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/activationEmail', data);
    }
    addnewClient(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/addnewClient', data);
    }
    getAllTickets() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getAllTickets');
    }
    getDataByQuery(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getDataByQuery', data);
    }
    updateticketstatus(data) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/updateticketstatus', data);
    }
    addtemplateType(event_code, display_name, profileImage) {
        const formData = new FormData();
        formData.append('event_code', event_code);
        formData.append('avatar', profileImage);
        formData.append('display_name', display_name);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/addTemplateType', formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
    addnewTemplate(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/addnewTemplate', data);
    }
    getAllTemplateTypes() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getAllTemplateTypes');
    }
    getevents() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getevents');
    }
    getsmsTemplates(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getsmsTemplates', data);
    }
    uploadtemplates(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/uploadtemplates', data);
    }
    getAllCards() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getAllCards');
    }
    uploaddigitalprofile(title, profileImage, category) {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('avatar', profileImage);
        formData.append('category', category);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/uploaddcprofile', formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
    postPaymentTransaction(TxnOrderId, payment_mode, payment_gateway_txn_ref, payment_gateway_txn_id, client_id, authkey, profileImage, notes, totalamount, discountAmount) {
        const formData = new FormData();
        formData.append('TxnOrderId', TxnOrderId);
        formData.append('payment_mode', payment_mode);
        formData.append('payment_gateway_txn_ref', payment_gateway_txn_ref);
        formData.append('payment_gateway_txn_id', payment_gateway_txn_id);
        formData.append('client_id', client_id);
        formData.append('authkey', authkey);
        formData.append('avatar', profileImage);
        formData.append('notes', notes);
        formData.append('totalamount', totalamount);
        formData.append('discountAmount', discountAmount);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/postPaymentTransaction', formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
    uploadapk(title, profileImage, partner_id) {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('avatar', profileImage);
        formData.append('partner_id', partner_id);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/uploadapk', formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
    deletetemplate(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/deletetemplate', data);
    }
    createbulkcontacts(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/createbulkprofiles', data);
    }
    getallapkslist() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getallapkslist/' + this.getPartner_id());
    }
    deleteapk(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/deleteapk', data);
    }
    updateclientStatus(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/updateclientStatus', data);
    }
    getclientsbyfilter(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/getclientsbyfilter', data);
    }
    getsmspackagelist() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getsmspackagelist');
    }
    getclientdetails(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/getclientdetails', data);
    }
    getOrderId(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getOrderId', data);
    }
    getpremiumplanlist() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getpremiumplanlist');
    }
    postofficeApi(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/postofficeApi', data);
    }
    getplanexpirycontacts(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getplanexpirycontacts', data);
    }
    getplanexpirycontactsAll(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getplanexpirycontactsAll', data);
    }
    insertnotifications(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/insertnotifications', data);
    }
    registeredcontactstracking(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/registeredcontactstracking', data);
    }
    getTodayregisterdData() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/getTodayregisterdData');
    }
    getAllpremiumplans() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getAllpremiumplans');
    }
    getpremiumplandetails(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getpremiumplandetails', data);
    }
    fetchProfessions() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/fetchProfessions');
    }
    updatePremiumPlan(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/updatePremiumPlan', data);
    }
    deletePremiumPack(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/deletePremiumPack', data);
    }
    getuserdataCount() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/getuserdataCount');
    }
    userdataCountweekly() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/userdataCountweekly');
    }
    getplanexpirytoday() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/getplanexpirytoday');
    }
    getplanexpirynextweek() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/getplanexpirynextweek');
    }
    getclientscount() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/getclientscount');
    }
    resetPassword(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/ChangePassword', data);
    }
    getrateCards() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/getrateCards');
    }
    getpacksbyratecard(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/getpacksbyratecard', data);
    }
    getPremiumRatecards() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/getPremiumRatecards');
    }
    getPremiumpacksByRateCard(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/getPremiumpacksByRateCard', data);
    }
    sendpushnotification(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/sendpushnotification', data);
    }
    sendPushnotifySMS(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/sendPushnotifySMS', data);
    }
    sendSingleSMS(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/sendSingleSMS', data);
    }
    getallapkDownloadlist() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/getallapkDownloadlist');
    }
    getusersfeedbackqueries() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/partner/' + this.getPartner_id() + '/getusersfeedbackqueries');
    }
    getPartnerData() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getPartnerData');
    }
    // Helper Methods
    setToken(token) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    setRole(role) {
        localStorage.setItem('role', role);
    }
    getRole() {
        return localStorage.getItem('role');
    }
    setName(name) {
        localStorage.setItem('name', name);
    }
    getName() {
        return localStorage.getItem('name');
    }
    setPartner_id(partner_id) {
        localStorage.setItem('partner_id', partner_id);
    }
    getPartner_id() {
        return localStorage.getItem('partner_id');
    }
    deleteToken() {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('partner_id');
        localStorage.removeItem('name');
    }
    getUserPayload() {
        let token = this.getToken();
        if (token) {
            let userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else {
            return null;
        }
    }
    isLoggedIn() {
        let userPayload = this.getUserPayload();
        if (userPayload) {
            return userPayload.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    }
};
ApiCallService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiCallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiCallService);



/***/ }),

/***/ "./src/app/apiCalls/excel.service.ts":
/*!*******************************************!*\
  !*** ./src/app/apiCalls/excel.service.ts ***!
  \*******************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
let ExcelService = class ExcelService {
    constructor() { }
    exportAsExcelFile(json, excelFileName) {
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
        console.log('worksheet', worksheet);
        const workbook = { Sheets: { 'data': worksheet, }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
};
ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ExcelService);



/***/ }),

/***/ "./src/app/apkupload/apkuploads/apkuploads.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/apkupload/apkuploads/apkuploads.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input#city {\n  margin-top: 0%;\n  margin-bottom: 4%;\n}\n\nbutton.my-4.btn.btn-info.btn-block {\n  margin-left: 0%;\n}\n\n.medias.text-center.border.border-light.p-5 {\n  width: 50%;\n  margin-left: 25%;\n}\n\n@media screen and (max-width: 1060px) {\n  .medias.mymedia.text-center.border.border-light.p-5 {\n    width: 100%;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBrdXBsb2FkL2Fwa3VwbG9hZHMvRjpcXGdpdCBodWJcXEFkbWlucGFubmVsVG9NYW5hZ2VUZWFtXFxGcm9udGVuZC9zcmNcXGFwcFxcYXBrdXBsb2FkXFxhcGt1cGxvYWRzXFxhcGt1cGxvYWRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcGt1cGxvYWQvYXBrdXBsb2Fkcy9hcGt1cGxvYWRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUVFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBrdXBsb2FkL2Fwa3VwbG9hZHMvYXBrdXBsb2Fkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0I2NpdHkge1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG59XHJcblxyXG5idXR0b24ubXktNC5idG4uYnRuLWluZm8uYnRuLWJsb2NrIHtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbn1cclxuXHJcbi5tZWRpYXMudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpe1xyXG5cclxuICAubWVkaWFzLm15bWVkaWEudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgfVxyXG59XHJcbiIsImlucHV0I2NpdHkge1xuICBtYXJnaW4tdG9wOiAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG59XG5cbmJ1dHRvbi5teS00LmJ0bi5idG4taW5mby5idG4tYmxvY2sge1xuICBtYXJnaW4tbGVmdDogMCU7XG59XG5cbi5tZWRpYXMudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpIHtcbiAgLm1lZGlhcy5teW1lZGlhLnRleHQtY2VudGVyLmJvcmRlci5ib3JkZXItbGlnaHQucC01IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/apkupload/apkuploads/apkuploads.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/apkupload/apkuploads/apkuploads.component.ts ***!
  \**************************************************************/
/*! exports provided: ApkuploadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApkuploadsComponent", function() { return ApkuploadsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ApkuploadsComponent = class ApkuploadsComponent {
    constructor(apiCall, fb, router) {
        this.apiCall = apiCall;
        this.fb = fb;
        this.router = router;
        this.percentDone = 0;
        this.users = [];
        this.form = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            avatar: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    // Image Preview
    uploadFile(event) {
        const file = event.target.files[0];
        this.form.patchValue({
            avatar: file
        });
        this.form.get('avatar').updateValueAndValidity();
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.preview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    submitForm() {
        this.apiCall.uploadapk(this.form.value.title, this.form.value.avatar, this.apiCall.getPartner_id()).subscribe((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress:
                    this.percentDone = Math.round(event.loaded / event.total * 100);
                    console.log(`Uploaded! ${this.percentDone}%`);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response:
                    console.log('User successfully created!', event.body);
                    this.percentDone = false;
                    alert('file uploaded sucessfully');
                    this.router.navigate(['viewapklist']);
            }
        });
    }
};
ApkuploadsComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ApkuploadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apkuploads',
        template: __webpack_require__(/*! raw-loader!./apkuploads.component.html */ "./node_modules/raw-loader/index.js!./src/app/apkupload/apkuploads/apkuploads.component.html"),
        styles: [__webpack_require__(/*! ./apkuploads.component.scss */ "./src/app/apkupload/apkuploads/apkuploads.component.scss")]
    })
], ApkuploadsComponent);



/***/ }),

/***/ "./src/app/apkupload/viewapks/viewapks.component.scss":
/*!************************************************************!*\
  !*** ./src/app/apkupload/viewapks/viewapks.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6 {\n  text-align: center;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBrdXBsb2FkL3ZpZXdhcGtzL0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXGFwa3VwbG9hZFxcdmlld2Fwa3NcXHZpZXdhcGtzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcGt1cGxvYWQvdmlld2Fwa3Mvdmlld2Fwa3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Fwa3VwbG9hZC92aWV3YXBrcy92aWV3YXBrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iLCJoNiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/apkupload/viewapks/viewapks.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/apkupload/viewapks/viewapks.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewapksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewapksComponent", function() { return ViewapksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ViewapksComponent = class ViewapksComponent {
    constructor(apicall, router) {
        this.apicall = apicall;
        this.router = router;
    }
    ngOnInit() {
        this.getallapkslist();
    }
    getallapkslist() {
        this.apicall.getallapkslist().subscribe((res) => {
            this.apkdata = res.data;
            this.message = res.message;
        });
    }
    deleteapk(data) {
        const apk_id = { apk_id: data };
        const userconfirm = confirm('Are you sure you want to delete ?');
        if (userconfirm) {
            this.apicall.deleteapk(apk_id).subscribe((res) => {
                alert(res.success);
                this.getallapkslist();
            });
        }
        else {
        }
    }
};
ViewapksComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ViewapksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewapks',
        template: __webpack_require__(/*! raw-loader!./viewapks.component.html */ "./node_modules/raw-loader/index.js!./src/app/apkupload/viewapks/viewapks.component.html"),
        styles: [__webpack_require__(/*! ./viewapks.component.scss */ "./src/app/apkupload/viewapks/viewapks.component.scss")]
    })
], ViewapksComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/default/default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/posts/posts.component */ "./src/app/modules/posts/posts.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _clientsManage_client_client_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clientsManage/client/client.component */ "./src/app/clientsManage/client/client.component.ts");
/* harmony import */ var _clientsManage_add_clients_add_clients_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clientsManage/add-clients/add-clients.component */ "./src/app/clientsManage/add-clients/add-clients.component.ts");
/* harmony import */ var _clientsManage_edit_clients_edit_clients_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clientsManage/edit-clients/edit-clients.component */ "./src/app/clientsManage/edit-clients/edit-clients.component.ts");
/* harmony import */ var _clientsManage_viewclients_viewclients_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clientsManage/viewclients/viewclients.component */ "./src/app/clientsManage/viewclients/viewclients.component.ts");
/* harmony import */ var _userManage_user_manage_user_manage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./userManage/user-manage/user-manage.component */ "./src/app/userManage/user-manage/user-manage.component.ts");
/* harmony import */ var _userManage_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./userManage/add-users/add-users.component */ "./src/app/userManage/add-users/add-users.component.ts");
/* harmony import */ var _userManage_editusers_editusers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./userManage/editusers/editusers.component */ "./src/app/userManage/editusers/editusers.component.ts");
/* harmony import */ var _userManage_viewusers_viewusers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./userManage/viewusers/viewusers.component */ "./src/app/userManage/viewusers/viewusers.component.ts");
/* harmony import */ var _PackageManage_pack_manage_pack_manage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PackageManage/pack-manage/pack-manage.component */ "./src/app/PackageManage/pack-manage/pack-manage.component.ts");
/* harmony import */ var _PackageManage_add_package_add_package_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./PackageManage/add-package/add-package.component */ "./src/app/PackageManage/add-package/add-package.component.ts");
/* harmony import */ var _PackageManage_update_package_update_package_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PackageManage/update-package/update-package.component */ "./src/app/PackageManage/update-package/update-package.component.ts");
/* harmony import */ var _PackageManage_view_package_view_package_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./PackageManage/view-package/view-package.component */ "./src/app/PackageManage/view-package/view-package.component.ts");
/* harmony import */ var _clientsManage_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./clientsManage/view-detail/view-detail.component */ "./src/app/clientsManage/view-detail/view-detail.component.ts");
/* harmony import */ var _Analytics_analytic_analytic_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Analytics/analytic/analytic.component */ "./src/app/Analytics/analytic/analytic.component.ts");
/* harmony import */ var _Analytics_purchase_analysis_purchase_analysis_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Analytics/purchase-analysis/purchase-analysis.component */ "./src/app/Analytics/purchase-analysis/purchase-analysis.component.ts");
/* harmony import */ var _Analytics_sales_analysis_sales_analysis_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Analytics/sales-analysis/sales-analysis.component */ "./src/app/Analytics/sales-analysis/sales-analysis.component.ts");
/* harmony import */ var _Analytics_usage_detailed_usage_detailed_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Analytics/usage-detailed/usage-detailed.component */ "./src/app/Analytics/usage-detailed/usage-detailed.component.ts");
/* harmony import */ var _Analytics_purchase_detailed_purchase_detailed_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Analytics/purchase-detailed/purchase-detailed.component */ "./src/app/Analytics/purchase-detailed/purchase-detailed.component.ts");
/* harmony import */ var _helpdesk_helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./helpdesk/helpdesk/helpdesk.component */ "./src/app/helpdesk/helpdesk/helpdesk.component.ts");
/* harmony import */ var _helpdesk_viewhelpdesk_viewhelpdesk_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./helpdesk/viewhelpdesk/viewhelpdesk.component */ "./src/app/helpdesk/viewhelpdesk/viewhelpdesk.component.ts");
/* harmony import */ var _helpdesk_updateticket_updateticket_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./helpdesk/updateticket/updateticket.component */ "./src/app/helpdesk/updateticket/updateticket.component.ts");
/* harmony import */ var _Templates_templates_templates_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Templates/templates/templates.component */ "./src/app/Templates/templates/templates.component.ts");
/* harmony import */ var _Templates_viewtemplates_viewtemplates_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Templates/viewtemplates/viewtemplates.component */ "./src/app/Templates/viewtemplates/viewtemplates.component.ts");
/* harmony import */ var _Templates_add_templates_add_templates_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Templates/add-templates/add-templates.component */ "./src/app/Templates/add-templates/add-templates.component.ts");
/* harmony import */ var _Templates_addtemplate_type_addtemplate_type_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Templates/addtemplate-type/addtemplate-type.component */ "./src/app/Templates/addtemplate-type/addtemplate-type.component.ts");
/* harmony import */ var _Templates_viewsystemtemplates_viewsystemtemplates_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Templates/viewsystemtemplates/viewsystemtemplates.component */ "./src/app/Templates/viewsystemtemplates/viewsystemtemplates.component.ts");
/* harmony import */ var _cards_cards_cards_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./cards/cards/cards.component */ "./src/app/cards/cards/cards.component.ts");
/* harmony import */ var _cards_viewcards_viewcards_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./cards/viewcards/viewcards.component */ "./src/app/cards/viewcards/viewcards.component.ts");
/* harmony import */ var _cards_uploadcards_uploadcards_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./cards/uploadcards/uploadcards.component */ "./src/app/cards/uploadcards/uploadcards.component.ts");
/* harmony import */ var _cards_uploaddigprofile_uploaddigprofile_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./cards/uploaddigprofile/uploaddigprofile.component */ "./src/app/cards/uploaddigprofile/uploaddigprofile.component.ts");
/* harmony import */ var _clientsManage_bulkprofile_create_bulkprofile_create_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./clientsManage/bulkprofile-create/bulkprofile-create.component */ "./src/app/clientsManage/bulkprofile-create/bulkprofile-create.component.ts");
/* harmony import */ var _apkupload_apkuploads_apkuploads_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./apkupload/apkuploads/apkuploads.component */ "./src/app/apkupload/apkuploads/apkuploads.component.ts");
/* harmony import */ var _apkupload_viewapks_viewapks_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./apkupload/viewapks/viewapks.component */ "./src/app/apkupload/viewapks/viewapks.component.ts");
/* harmony import */ var _billing_billing_billing_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./billing/billing/billing.component */ "./src/app/billing/billing/billing.component.ts");
/* harmony import */ var _billing_smspackagelist_smspackagelist_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./billing/smspackagelist/smspackagelist.component */ "./src/app/billing/smspackagelist/smspackagelist.component.ts");
/* harmony import */ var _billing_paymentdetailsupdate_paymentdetailsupdate_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./billing/paymentdetailsupdate/paymentdetailsupdate.component */ "./src/app/billing/paymentdetailsupdate/paymentdetailsupdate.component.ts");
/* harmony import */ var _campaign_campaign_management_campaign_management_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./campaign/campaign-management/campaign-management.component */ "./src/app/campaign/campaign-management/campaign-management.component.ts");
/* harmony import */ var _campaign_addpushnotification_addpushnotification_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./campaign/addpushnotification/addpushnotification.component */ "./src/app/campaign/addpushnotification/addpushnotification.component.ts");
/* harmony import */ var _PackageManage_packtabs_packtabs_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./PackageManage/packtabs/packtabs.component */ "./src/app/PackageManage/packtabs/packtabs.component.ts");
/* harmony import */ var _PackageManage_updatepremiumplan_updatepremiumplan_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./PackageManage/updatepremiumplan/updatepremiumplan.component */ "./src/app/PackageManage/updatepremiumplan/updatepremiumplan.component.ts");
/* harmony import */ var _campaign_pushnotify_pushnotify_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./campaign/pushnotify/pushnotify.component */ "./src/app/campaign/pushnotify/pushnotify.component.ts");
/* harmony import */ var _campaign_notifytemplates_notifytemplates_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./campaign/notifytemplates/notifytemplates.component */ "./src/app/campaign/notifytemplates/notifytemplates.component.ts");
/* harmony import */ var _campaign_sendnotification_sendnotification_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./campaign/sendnotification/sendnotification.component */ "./src/app/campaign/sendnotification/sendnotification.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/changepassword/changepassword.component.ts");
/* harmony import */ var _viewapkdownload_viewapkdownload_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./viewapkdownload/viewapkdownload.component */ "./src/app/viewapkdownload/viewapkdownload.component.ts");
/* harmony import */ var _dwnldapksendsms_dwnldapksendsms_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./dwnldapksendsms/dwnldapksendsms.component */ "./src/app/dwnldapksendsms/dwnldapksendsms.component.ts");
/* harmony import */ var _viewusersfeedback_viewusersfeedback_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./viewusersfeedback/viewusersfeedback.component */ "./src/app/viewusersfeedback/viewusersfeedback.component.ts");
/* harmony import */ var _Analytics_sendpushnotification_sendpushnotification_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./Analytics/sendpushnotification/sendpushnotification.component */ "./src/app/Analytics/sendpushnotification/sendpushnotification.component.ts");
/* harmony import */ var _clientsManage_sendsmstoclients_sendsmstoclients_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./clientsManage/sendsmstoclients/sendsmstoclients.component */ "./src/app/clientsManage/sendsmstoclients/sendsmstoclients.component.ts");
/* harmony import */ var _clientsManage_sendbulksms_sendbulksms_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./clientsManage/sendbulksms/sendbulksms.component */ "./src/app/clientsManage/sendbulksms/sendbulksms.component.ts");
/* harmony import */ var _Reseller_resellerview_resellerview_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./Reseller/resellerview/resellerview.component */ "./src/app/Reseller/resellerview/resellerview.component.ts");
/* harmony import */ var _Reseller_reseller_reseller_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./Reseller/reseller/reseller.component */ "./src/app/Reseller/reseller/reseller.component.ts");
/* harmony import */ var _DigitalCards_digitalcards_digitalcards_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./DigitalCards/digitalcards/digitalcards.component */ "./src/app/DigitalCards/digitalcards/digitalcards.component.ts");
/* harmony import */ var _DigitalCards_viewdigitalcards_viewdigitalcards_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./DigitalCards/viewdigitalcards/viewdigitalcards.component */ "./src/app/DigitalCards/viewdigitalcards/viewdigitalcards.component.ts");
/* harmony import */ var _DigitalCards_vcard01_vcard01_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./DigitalCards/vcard01/vcard01.component */ "./src/app/DigitalCards/vcard01/vcard01.component.ts");
/* harmony import */ var _DigitalCards_vcard02_vcard02_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./DigitalCards/vcard02/vcard02.component */ "./src/app/DigitalCards/vcard02/vcard02.component.ts");
/* harmony import */ var _DigitalCards_vcard03_vcard03_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./DigitalCards/vcard03/vcard03.component */ "./src/app/DigitalCards/vcard03/vcard03.component.ts");




































































const routes = [{
        path: '',
        component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        children: [{
                path: 'home',
                component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
            }, {
                path: 'posts',
                component: _modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"]
            },
            { path: 'changepassword', component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_54__["ChangepasswordComponent"] },
            { path: 'userprofile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"] },
            { path: 'client', component: _clientsManage_client_client_component__WEBPACK_IMPORTED_MODULE_11__["ClientComponent"], children: [
                    { path: 'addclient', component: _clientsManage_add_clients_add_clients_component__WEBPACK_IMPORTED_MODULE_12__["AddClientsComponent"] },
                    { path: 'editclient/:client_id', component: _clientsManage_edit_clients_edit_clients_component__WEBPACK_IMPORTED_MODULE_13__["EditClientsComponent"] },
                    { path: 'viewclient', component: _clientsManage_viewclients_viewclients_component__WEBPACK_IMPORTED_MODULE_14__["ViewclientsComponent"] },
                    { path: 'viewDetail/:client_id', component: _clientsManage_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_23__["ViewDetailComponent"] },
                    { path: 'createprofile', component: _clientsManage_bulkprofile_create_bulkprofile_create_component__WEBPACK_IMPORTED_MODULE_41__["BulkprofileCreateComponent"] },
                    { path: 'sendsms/:mobilenumber', component: _clientsManage_sendsmstoclients_sendsmstoclients_component__WEBPACK_IMPORTED_MODULE_59__["SendsmstoclientsComponent"] },
                    { path: 'sendbulksms', component: _clientsManage_sendbulksms_sendbulksms_component__WEBPACK_IMPORTED_MODULE_60__["SendbulksmsComponent"] }
                ] },
            { path: 'user', component: _userManage_user_manage_user_manage_component__WEBPACK_IMPORTED_MODULE_15__["UserManageComponent"], children: [
                    { path: 'adduser', component: _userManage_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_16__["AddUsersComponent"] },
                    { path: 'editUser', component: _userManage_editusers_editusers_component__WEBPACK_IMPORTED_MODULE_17__["EditusersComponent"] },
                    { path: 'viewUsers', component: _userManage_viewusers_viewusers_component__WEBPACK_IMPORTED_MODULE_18__["ViewusersComponent"] }
                ] },
            { path: 'reseller', component: _Reseller_reseller_reseller_component__WEBPACK_IMPORTED_MODULE_62__["ResellerComponent"], children: [
                    { path: 'view', component: _Reseller_resellerview_resellerview_component__WEBPACK_IMPORTED_MODULE_61__["ResellerviewComponent"] },
                ] },
            { path: 'packageMange', component: _PackageManage_pack_manage_pack_manage_component__WEBPACK_IMPORTED_MODULE_19__["PackManageComponent"], children: [
                    { path: 'addPacks', component: _PackageManage_add_package_add_package_component__WEBPACK_IMPORTED_MODULE_20__["AddPackageComponent"] },
                    { path: 'editPacks/:package_id', component: _PackageManage_update_package_update_package_component__WEBPACK_IMPORTED_MODULE_21__["UpdatePackageComponent"] },
                    { path: 'ViewPacks', component: _PackageManage_view_package_view_package_component__WEBPACK_IMPORTED_MODULE_22__["ViewPackageComponent"] },
                    { path: 'editpremiumPlan/:package_id', component: _PackageManage_updatepremiumplan_updatepremiumplan_component__WEBPACK_IMPORTED_MODULE_50__["UpdatepremiumplanComponent"] }
                ] },
            { path: 'packagemanagement', component: _PackageManage_packtabs_packtabs_component__WEBPACK_IMPORTED_MODULE_49__["PacktabsComponent"] },
            { path: 'viewdownloadapklist', component: _viewapkdownload_viewapkdownload_component__WEBPACK_IMPORTED_MODULE_55__["ViewapkdownloadComponent"] },
            { path: 'downloadapksendsms/:mobilenumber', component: _dwnldapksendsms_dwnldapksendsms_component__WEBPACK_IMPORTED_MODULE_56__["DwnldapksendsmsComponent"] },
            { path: 'viewusersfeedback', component: _viewusersfeedback_viewusersfeedback_component__WEBPACK_IMPORTED_MODULE_57__["ViewusersfeedbackComponent"] },
            { path: 'sendpushnotification', component: _Analytics_sendpushnotification_sendpushnotification_component__WEBPACK_IMPORTED_MODULE_58__["SendpushnotificationComponent"] },
            { path: 'analytics', component: _Analytics_analytic_analytic_component__WEBPACK_IMPORTED_MODULE_24__["AnalyticComponent"], children: [
                    { path: 'purchaseAnalysis', component: _Analytics_purchase_analysis_purchase_analysis_component__WEBPACK_IMPORTED_MODULE_25__["PurchaseAnalysisComponent"] },
                    { path: 'salesAnalysis', component: _Analytics_sales_analysis_sales_analysis_component__WEBPACK_IMPORTED_MODULE_26__["SalesAnalysisComponent"] },
                    { path: 'usageAnalysis', component: _Analytics_sales_analysis_sales_analysis_component__WEBPACK_IMPORTED_MODULE_26__["SalesAnalysisComponent"] },
                ] },
            { path: 'helpdesk', component: _helpdesk_helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_29__["HelpdeskComponent"], children: [
                    { path: 'viewhelpdesk', component: _helpdesk_viewhelpdesk_viewhelpdesk_component__WEBPACK_IMPORTED_MODULE_30__["ViewhelpdeskComponent"] },
                    { path: 'updateticket', component: _helpdesk_updateticket_updateticket_component__WEBPACK_IMPORTED_MODULE_31__["UpdateticketComponent"] }
                ] },
            {
                path: 'templates', component: _Templates_templates_templates_component__WEBPACK_IMPORTED_MODULE_32__["TemplatesComponent"], children: [
                    { path: 'viewTemplates', component: _Templates_viewtemplates_viewtemplates_component__WEBPACK_IMPORTED_MODULE_33__["ViewtemplatesComponent"] },
                    { path: 'addTemplateType', component: _Templates_addtemplate_type_addtemplate_type_component__WEBPACK_IMPORTED_MODULE_35__["AddtemplateTypeComponent"] },
                    { path: 'addTemplates', component: _Templates_add_templates_add_templates_component__WEBPACK_IMPORTED_MODULE_34__["AddTemplatesComponent"] },
                    { path: 'viewsystemtemplates/:event_code', component: _Templates_viewsystemtemplates_viewsystemtemplates_component__WEBPACK_IMPORTED_MODULE_36__["ViewsystemtemplatesComponent"] }
                ]
            },
            { path: 'card', component: _cards_cards_cards_component__WEBPACK_IMPORTED_MODULE_37__["CardsComponent"], children: [
                    { path: 'viewcards', component: _cards_viewcards_viewcards_component__WEBPACK_IMPORTED_MODULE_38__["ViewcardsComponent"] },
                    { path: 'uploadcards', component: _cards_uploadcards_uploadcards_component__WEBPACK_IMPORTED_MODULE_39__["UploadcardsComponent"] },
                    { path: 'uploaddigiProfiles', component: _cards_uploaddigprofile_uploaddigprofile_component__WEBPACK_IMPORTED_MODULE_40__["UploaddigprofileComponent"] }
                ] },
            { path: 'billing', component: _billing_billing_billing_component__WEBPACK_IMPORTED_MODULE_44__["BillingComponent"], children: [
                    { path: 'smspackagelist', component: _billing_smspackagelist_smspackagelist_component__WEBPACK_IMPORTED_MODULE_45__["SmspackagelistComponent"] },
                ] },
            { path: 'paymentdetails/:package_id/:package_price/:package_gst_rate', component: _billing_paymentdetailsupdate_paymentdetailsupdate_component__WEBPACK_IMPORTED_MODULE_46__["PaymentdetailsupdateComponent"] },
            { path: 'apkUpload', component: _apkupload_apkuploads_apkuploads_component__WEBPACK_IMPORTED_MODULE_42__["ApkuploadsComponent"] },
            { path: 'viewapklist', component: _apkupload_viewapks_viewapks_component__WEBPACK_IMPORTED_MODULE_43__["ViewapksComponent"] },
            { path: 'campaignManage', component: _campaign_campaign_management_campaign_management_component__WEBPACK_IMPORTED_MODULE_47__["CampaignManagementComponent"] },
            { path: 'addpushnotify', component: _campaign_addpushnotification_addpushnotification_component__WEBPACK_IMPORTED_MODULE_48__["AddpushnotificationComponent"] },
            { path: 'pushnotify', component: _campaign_pushnotify_pushnotify_component__WEBPACK_IMPORTED_MODULE_51__["PushnotifyComponent"] },
            { path: 'viewnotifyTemplates', component: _campaign_notifytemplates_notifytemplates_component__WEBPACK_IMPORTED_MODULE_52__["NotifytemplatesComponent"] },
            { path: 'sendnotify', component: _campaign_sendnotification_sendnotification_component__WEBPACK_IMPORTED_MODULE_53__["SendnotificationComponent"] },
            { path: 'ViewUsageDetailed', component: _Analytics_usage_detailed_usage_detailed_component__WEBPACK_IMPORTED_MODULE_27__["UsageDetailedComponent"] },
            { path: 'viewPurchaseDetailed/:package_id/:order_id', component: _Analytics_purchase_detailed_purchase_detailed_component__WEBPACK_IMPORTED_MODULE_28__["PurchaseDetailedComponent"] },
        ],
    },
    {
        path: 'signup', component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
        children: [{ path: '', component: _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"] }]
    },
    {
        path: 'login', component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
        children: [{ path: '', component: _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"] }]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    { path: 'digitalcards', component: _DigitalCards_digitalcards_digitalcards_component__WEBPACK_IMPORTED_MODULE_63__["DigitalcardsComponent"], children: [
            { path: 'view', component: _DigitalCards_viewdigitalcards_viewdigitalcards_component__WEBPACK_IMPORTED_MODULE_64__["ViewdigitalcardsComponent"] },
            { path: 'vcard01', component: _DigitalCards_vcard01_vcard01_component__WEBPACK_IMPORTED_MODULE_65__["Vcard01Component"] },
            { path: 'vcard02', component: _DigitalCards_vcard02_vcard02_component__WEBPACK_IMPORTED_MODULE_66__["Vcard02Component"] },
            { path: 'vcard03', component: _DigitalCards_vcard03_vcard03_component__WEBPACK_IMPORTED_MODULE_67__["Vcard03Component"] },
        ] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'dashboard';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/default/default.module */ "./src/app/layouts/default/default.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _clientsManage_viewclients_viewclients_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./clientsManage/viewclients/viewclients.component */ "./src/app/clientsManage/viewclients/viewclients.component.ts");
/* harmony import */ var _clientsManage_edit_clients_edit_clients_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./clientsManage/edit-clients/edit-clients.component */ "./src/app/clientsManage/edit-clients/edit-clients.component.ts");
/* harmony import */ var _clientsManage_add_clients_add_clients_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./clientsManage/add-clients/add-clients.component */ "./src/app/clientsManage/add-clients/add-clients.component.ts");
/* harmony import */ var _userManage_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./userManage/add-users/add-users.component */ "./src/app/userManage/add-users/add-users.component.ts");
/* harmony import */ var _userManage_editusers_editusers_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./userManage/editusers/editusers.component */ "./src/app/userManage/editusers/editusers.component.ts");
/* harmony import */ var _userManage_viewusers_viewusers_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./userManage/viewusers/viewusers.component */ "./src/app/userManage/viewusers/viewusers.component.ts");
/* harmony import */ var _PackageManage_view_package_view_package_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./PackageManage/view-package/view-package.component */ "./src/app/PackageManage/view-package/view-package.component.ts");
/* harmony import */ var _PackageManage_add_package_add_package_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./PackageManage/add-package/add-package.component */ "./src/app/PackageManage/add-package/add-package.component.ts");
/* harmony import */ var _PackageManage_update_package_update_package_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./PackageManage/update-package/update-package.component */ "./src/app/PackageManage/update-package/update-package.component.ts");
/* harmony import */ var _clientsManage_client_client_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./clientsManage/client/client.component */ "./src/app/clientsManage/client/client.component.ts");
/* harmony import */ var _userManage_user_manage_user_manage_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./userManage/user-manage/user-manage.component */ "./src/app/userManage/user-manage/user-manage.component.ts");
/* harmony import */ var _PackageManage_pack_manage_pack_manage_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./PackageManage/pack-manage/pack-manage.component */ "./src/app/PackageManage/pack-manage/pack-manage.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _clientsManage_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./clientsManage/view-detail/view-detail.component */ "./src/app/clientsManage/view-detail/view-detail.component.ts");
/* harmony import */ var _Analytics_analytic_analytic_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Analytics/analytic/analytic.component */ "./src/app/Analytics/analytic/analytic.component.ts");
/* harmony import */ var _Analytics_usage_analysis_usage_analysis_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Analytics/usage-analysis/usage-analysis.component */ "./src/app/Analytics/usage-analysis/usage-analysis.component.ts");
/* harmony import */ var _Analytics_sales_analysis_sales_analysis_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Analytics/sales-analysis/sales-analysis.component */ "./src/app/Analytics/sales-analysis/sales-analysis.component.ts");
/* harmony import */ var _Analytics_purchase_analysis_purchase_analysis_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Analytics/purchase-analysis/purchase-analysis.component */ "./src/app/Analytics/purchase-analysis/purchase-analysis.component.ts");
/* harmony import */ var _Analytics_usage_detailed_usage_detailed_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Analytics/usage-detailed/usage-detailed.component */ "./src/app/Analytics/usage-detailed/usage-detailed.component.ts");
/* harmony import */ var _Analytics_purchase_detailed_purchase_detailed_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Analytics/purchase-detailed/purchase-detailed.component */ "./src/app/Analytics/purchase-detailed/purchase-detailed.component.ts");
/* harmony import */ var _helpdesk_helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./helpdesk/helpdesk/helpdesk.component */ "./src/app/helpdesk/helpdesk/helpdesk.component.ts");
/* harmony import */ var _helpdesk_updateticket_updateticket_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./helpdesk/updateticket/updateticket.component */ "./src/app/helpdesk/updateticket/updateticket.component.ts");
/* harmony import */ var _helpdesk_viewhelpdesk_viewhelpdesk_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./helpdesk/viewhelpdesk/viewhelpdesk.component */ "./src/app/helpdesk/viewhelpdesk/viewhelpdesk.component.ts");
/* harmony import */ var _Templates_viewtemplates_viewtemplates_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Templates/viewtemplates/viewtemplates.component */ "./src/app/Templates/viewtemplates/viewtemplates.component.ts");
/* harmony import */ var _Templates_add_templates_add_templates_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Templates/add-templates/add-templates.component */ "./src/app/Templates/add-templates/add-templates.component.ts");
/* harmony import */ var _Templates_addtemplate_type_addtemplate_type_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./Templates/addtemplate-type/addtemplate-type.component */ "./src/app/Templates/addtemplate-type/addtemplate-type.component.ts");
/* harmony import */ var _Templates_templates_templates_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./Templates/templates/templates.component */ "./src/app/Templates/templates/templates.component.ts");
/* harmony import */ var _Templates_viewsystemtemplates_viewsystemtemplates_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./Templates/viewsystemtemplates/viewsystemtemplates.component */ "./src/app/Templates/viewsystemtemplates/viewsystemtemplates.component.ts");
/* harmony import */ var _cards_viewcards_viewcards_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./cards/viewcards/viewcards.component */ "./src/app/cards/viewcards/viewcards.component.ts");
/* harmony import */ var _cards_uploadcards_uploadcards_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./cards/uploadcards/uploadcards.component */ "./src/app/cards/uploadcards/uploadcards.component.ts");
/* harmony import */ var _cards_cards_cards_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./cards/cards/cards.component */ "./src/app/cards/cards/cards.component.ts");
/* harmony import */ var _cards_uploaddigprofile_uploaddigprofile_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./cards/uploaddigprofile/uploaddigprofile.component */ "./src/app/cards/uploaddigprofile/uploaddigprofile.component.ts");
/* harmony import */ var _clientsManage_bulkprofile_create_bulkprofile_create_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./clientsManage/bulkprofile-create/bulkprofile-create.component */ "./src/app/clientsManage/bulkprofile-create/bulkprofile-create.component.ts");
/* harmony import */ var _apkupload_apkuploads_apkuploads_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./apkupload/apkuploads/apkuploads.component */ "./src/app/apkupload/apkuploads/apkuploads.component.ts");
/* harmony import */ var _apkupload_viewapks_viewapks_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./apkupload/viewapks/viewapks.component */ "./src/app/apkupload/viewapks/viewapks.component.ts");
/* harmony import */ var _billing_smspackagelist_smspackagelist_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./billing/smspackagelist/smspackagelist.component */ "./src/app/billing/smspackagelist/smspackagelist.component.ts");
/* harmony import */ var _billing_paymentdetailsupdate_paymentdetailsupdate_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./billing/paymentdetailsupdate/paymentdetailsupdate.component */ "./src/app/billing/paymentdetailsupdate/paymentdetailsupdate.component.ts");
/* harmony import */ var _billing_billing_billing_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./billing/billing/billing.component */ "./src/app/billing/billing/billing.component.ts");
/* harmony import */ var _billing_buypremiumplans_buypremiumplans_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./billing/buypremiumplans/buypremiumplans.component */ "./src/app/billing/buypremiumplans/buypremiumplans.component.ts");
/* harmony import */ var _clientsManage_viewclients_filter_pipe__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./clientsManage/viewclients/filter.pipe */ "./src/app/clientsManage/viewclients/filter.pipe.ts");
/* harmony import */ var _Analytics_planexpirytracking_planexpirytracking_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./Analytics/planexpirytracking/planexpirytracking.component */ "./src/app/Analytics/planexpirytracking/planexpirytracking.component.ts");
/* harmony import */ var _Analytics_registrationtracking_registrationtracking_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./Analytics/registrationtracking/registrationtracking.component */ "./src/app/Analytics/registrationtracking/registrationtracking.component.ts");
/* harmony import */ var _campaign_campaign_management_campaign_management_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./campaign/campaign-management/campaign-management.component */ "./src/app/campaign/campaign-management/campaign-management.component.ts");
/* harmony import */ var _campaign_addpushnotification_addpushnotification_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./campaign/addpushnotification/addpushnotification.component */ "./src/app/campaign/addpushnotification/addpushnotification.component.ts");
/* harmony import */ var _PackageManage_viewpremiumplans_viewpremiumplans_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./PackageManage/viewpremiumplans/viewpremiumplans.component */ "./src/app/PackageManage/viewpremiumplans/viewpremiumplans.component.ts");
/* harmony import */ var _PackageManage_packtabs_packtabs_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./PackageManage/packtabs/packtabs.component */ "./src/app/PackageManage/packtabs/packtabs.component.ts");
/* harmony import */ var _PackageManage_updatepremiumplan_updatepremiumplan_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./PackageManage/updatepremiumplan/updatepremiumplan.component */ "./src/app/PackageManage/updatepremiumplan/updatepremiumplan.component.ts");
/* harmony import */ var _campaign_pushnotify_pushnotify_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./campaign/pushnotify/pushnotify.component */ "./src/app/campaign/pushnotify/pushnotify.component.ts");
/* harmony import */ var _campaign_notifytemplates_notifytemplates_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./campaign/notifytemplates/notifytemplates.component */ "./src/app/campaign/notifytemplates/notifytemplates.component.ts");
/* harmony import */ var _campaign_sendnotification_sendnotification_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./campaign/sendnotification/sendnotification.component */ "./src/app/campaign/sendnotification/sendnotification.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/changepassword/changepassword.component.ts");
/* harmony import */ var _viewapkdownload_viewapkdownload_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./viewapkdownload/viewapkdownload.component */ "./src/app/viewapkdownload/viewapkdownload.component.ts");
/* harmony import */ var _viewusersfeedback_viewusersfeedback_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./viewusersfeedback/viewusersfeedback.component */ "./src/app/viewusersfeedback/viewusersfeedback.component.ts");
/* harmony import */ var _dwnldapksendsms_dwnldapksendsms_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./dwnldapksendsms/dwnldapksendsms.component */ "./src/app/dwnldapksendsms/dwnldapksendsms.component.ts");
/* harmony import */ var _Analytics_sendpushnotification_sendpushnotification_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./Analytics/sendpushnotification/sendpushnotification.component */ "./src/app/Analytics/sendpushnotification/sendpushnotification.component.ts");
/* harmony import */ var _clientsManage_sendsmstoclients_sendsmstoclients_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./clientsManage/sendsmstoclients/sendsmstoclients.component */ "./src/app/clientsManage/sendsmstoclients/sendsmstoclients.component.ts");
/* harmony import */ var _clientsManage_sendbulksms_sendbulksms_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./clientsManage/sendbulksms/sendbulksms.component */ "./src/app/clientsManage/sendbulksms/sendbulksms.component.ts");
/* harmony import */ var _Reseller_reseller_reseller_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./Reseller/reseller/reseller.component */ "./src/app/Reseller/reseller/reseller.component.ts");
/* harmony import */ var _Reseller_resellerview_resellerview_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./Reseller/resellerview/resellerview.component */ "./src/app/Reseller/resellerview/resellerview.component.ts");
/* harmony import */ var _DigitalCards_digitalcards_digitalcards_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./DigitalCards/digitalcards/digitalcards.component */ "./src/app/DigitalCards/digitalcards/digitalcards.component.ts");
/* harmony import */ var _DigitalCards_viewdigitalcards_viewdigitalcards_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./DigitalCards/viewdigitalcards/viewdigitalcards.component */ "./src/app/DigitalCards/viewdigitalcards/viewdigitalcards.component.ts");
/* harmony import */ var _DigitalCards_vcard01_vcard01_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./DigitalCards/vcard01/vcard01.component */ "./src/app/DigitalCards/vcard01/vcard01.component.ts");
/* harmony import */ var _DigitalCards_vcard02_vcard02_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./DigitalCards/vcard02/vcard02.component */ "./src/app/DigitalCards/vcard02/vcard02.component.ts");
/* harmony import */ var _DigitalCards_vcard03_vcard03_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./DigitalCards/vcard03/vcard03.component */ "./src/app/DigitalCards/vcard03/vcard03.component.ts");



















































































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _clientsManage_viewclients_filter_pipe__WEBPACK_IMPORTED_MODULE_58__["FilterPipe"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
            _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__["SignUpComponent"],
            _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_14__["SignInComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
            _clientsManage_viewclients_viewclients_component__WEBPACK_IMPORTED_MODULE_19__["ViewclientsComponent"],
            _clientsManage_edit_clients_edit_clients_component__WEBPACK_IMPORTED_MODULE_20__["EditClientsComponent"],
            _clientsManage_add_clients_add_clients_component__WEBPACK_IMPORTED_MODULE_21__["AddClientsComponent"],
            _userManage_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_22__["AddUsersComponent"],
            _userManage_editusers_editusers_component__WEBPACK_IMPORTED_MODULE_23__["EditusersComponent"],
            _userManage_viewusers_viewusers_component__WEBPACK_IMPORTED_MODULE_24__["ViewusersComponent"],
            _PackageManage_view_package_view_package_component__WEBPACK_IMPORTED_MODULE_25__["ViewPackageComponent"],
            _PackageManage_add_package_add_package_component__WEBPACK_IMPORTED_MODULE_26__["AddPackageComponent"],
            _PackageManage_update_package_update_package_component__WEBPACK_IMPORTED_MODULE_27__["UpdatePackageComponent"],
            _clientsManage_client_client_component__WEBPACK_IMPORTED_MODULE_28__["ClientComponent"],
            _userManage_user_manage_user_manage_component__WEBPACK_IMPORTED_MODULE_29__["UserManageComponent"],
            _PackageManage_pack_manage_pack_manage_component__WEBPACK_IMPORTED_MODULE_30__["PackManageComponent"],
            _clientsManage_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_32__["ViewDetailComponent"],
            _Analytics_analytic_analytic_component__WEBPACK_IMPORTED_MODULE_33__["AnalyticComponent"],
            _Analytics_usage_analysis_usage_analysis_component__WEBPACK_IMPORTED_MODULE_34__["UsageAnalysisComponent"],
            _Analytics_sales_analysis_sales_analysis_component__WEBPACK_IMPORTED_MODULE_35__["SalesAnalysisComponent"],
            _Analytics_purchase_analysis_purchase_analysis_component__WEBPACK_IMPORTED_MODULE_36__["PurchaseAnalysisComponent"],
            _Analytics_usage_detailed_usage_detailed_component__WEBPACK_IMPORTED_MODULE_37__["UsageDetailedComponent"],
            _Analytics_purchase_detailed_purchase_detailed_component__WEBPACK_IMPORTED_MODULE_38__["PurchaseDetailedComponent"],
            _helpdesk_helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_39__["HelpdeskComponent"],
            _helpdesk_updateticket_updateticket_component__WEBPACK_IMPORTED_MODULE_40__["UpdateticketComponent"],
            _helpdesk_viewhelpdesk_viewhelpdesk_component__WEBPACK_IMPORTED_MODULE_41__["ViewhelpdeskComponent"],
            _Templates_viewtemplates_viewtemplates_component__WEBPACK_IMPORTED_MODULE_42__["ViewtemplatesComponent"],
            _Templates_add_templates_add_templates_component__WEBPACK_IMPORTED_MODULE_43__["AddTemplatesComponent"],
            _Templates_addtemplate_type_addtemplate_type_component__WEBPACK_IMPORTED_MODULE_44__["AddtemplateTypeComponent"],
            _Templates_templates_templates_component__WEBPACK_IMPORTED_MODULE_45__["TemplatesComponent"],
            _Templates_viewsystemtemplates_viewsystemtemplates_component__WEBPACK_IMPORTED_MODULE_46__["ViewsystemtemplatesComponent"],
            _cards_viewcards_viewcards_component__WEBPACK_IMPORTED_MODULE_47__["ViewcardsComponent"],
            _cards_uploadcards_uploadcards_component__WEBPACK_IMPORTED_MODULE_48__["UploadcardsComponent"],
            _cards_cards_cards_component__WEBPACK_IMPORTED_MODULE_49__["CardsComponent"],
            _cards_uploaddigprofile_uploaddigprofile_component__WEBPACK_IMPORTED_MODULE_50__["UploaddigprofileComponent"],
            _clientsManage_bulkprofile_create_bulkprofile_create_component__WEBPACK_IMPORTED_MODULE_51__["BulkprofileCreateComponent"],
            _apkupload_apkuploads_apkuploads_component__WEBPACK_IMPORTED_MODULE_52__["ApkuploadsComponent"],
            _apkupload_viewapks_viewapks_component__WEBPACK_IMPORTED_MODULE_53__["ViewapksComponent"],
            _billing_smspackagelist_smspackagelist_component__WEBPACK_IMPORTED_MODULE_54__["SmspackagelistComponent"],
            _billing_paymentdetailsupdate_paymentdetailsupdate_component__WEBPACK_IMPORTED_MODULE_55__["PaymentdetailsupdateComponent"],
            _billing_billing_billing_component__WEBPACK_IMPORTED_MODULE_56__["BillingComponent"],
            _billing_buypremiumplans_buypremiumplans_component__WEBPACK_IMPORTED_MODULE_57__["BuypremiumplansComponent"],
            _Analytics_planexpirytracking_planexpirytracking_component__WEBPACK_IMPORTED_MODULE_59__["PlanexpirytrackingComponent"],
            _Analytics_registrationtracking_registrationtracking_component__WEBPACK_IMPORTED_MODULE_60__["RegistrationtrackingComponent"],
            _campaign_campaign_management_campaign_management_component__WEBPACK_IMPORTED_MODULE_61__["CampaignManagementComponent"],
            _campaign_addpushnotification_addpushnotification_component__WEBPACK_IMPORTED_MODULE_62__["AddpushnotificationComponent"],
            _PackageManage_viewpremiumplans_viewpremiumplans_component__WEBPACK_IMPORTED_MODULE_63__["ViewpremiumplansComponent"],
            _PackageManage_packtabs_packtabs_component__WEBPACK_IMPORTED_MODULE_64__["PacktabsComponent"],
            _PackageManage_updatepremiumplan_updatepremiumplan_component__WEBPACK_IMPORTED_MODULE_65__["UpdatepremiumplanComponent"],
            _campaign_pushnotify_pushnotify_component__WEBPACK_IMPORTED_MODULE_66__["PushnotifyComponent"],
            _campaign_notifytemplates_notifytemplates_component__WEBPACK_IMPORTED_MODULE_67__["NotifytemplatesComponent"],
            _campaign_sendnotification_sendnotification_component__WEBPACK_IMPORTED_MODULE_68__["SendnotificationComponent"],
            _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_69__["ChangepasswordComponent"],
            _viewapkdownload_viewapkdownload_component__WEBPACK_IMPORTED_MODULE_70__["ViewapkdownloadComponent"],
            _viewusersfeedback_viewusersfeedback_component__WEBPACK_IMPORTED_MODULE_71__["ViewusersfeedbackComponent"],
            _dwnldapksendsms_dwnldapksendsms_component__WEBPACK_IMPORTED_MODULE_72__["DwnldapksendsmsComponent"],
            _Analytics_sendpushnotification_sendpushnotification_component__WEBPACK_IMPORTED_MODULE_73__["SendpushnotificationComponent"],
            _clientsManage_sendsmstoclients_sendsmstoclients_component__WEBPACK_IMPORTED_MODULE_74__["SendsmstoclientsComponent"],
            _clientsManage_sendbulksms_sendbulksms_component__WEBPACK_IMPORTED_MODULE_75__["SendbulksmsComponent"],
            _Reseller_reseller_reseller_component__WEBPACK_IMPORTED_MODULE_76__["ResellerComponent"],
            _Reseller_resellerview_resellerview_component__WEBPACK_IMPORTED_MODULE_77__["ResellerviewComponent"],
            _DigitalCards_digitalcards_digitalcards_component__WEBPACK_IMPORTED_MODULE_78__["DigitalcardsComponent"],
            _DigitalCards_viewdigitalcards_viewdigitalcards_component__WEBPACK_IMPORTED_MODULE_79__["ViewdigitalcardsComponent"],
            _DigitalCards_vcard01_vcard01_component__WEBPACK_IMPORTED_MODULE_80__["Vcard01Component"],
            _DigitalCards_vcard02_vcard02_component__WEBPACK_IMPORTED_MODULE_81__["Vcard02Component"],
            _DigitalCards_vcard03_vcard03_component__WEBPACK_IMPORTED_MODULE_82__["Vcard03Component"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_7__["DefaultModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_18__["MaterialModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_31__["MDBBootstrapModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_31__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_31__["TableModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_31__["IconsModule"],
        ],
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
                multi: true
            }, _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_11__["ApiCallService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthGuard = class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(next, state) {
        if (!this.userService.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            this.userService.deleteToken();
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");





let AuthInterceptor = class AuthInterceptor {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    intercept(req, next) {
        if (req.headers.get('noauth')) {
            return next.handle(req.clone());
        }
        else {
            const clonedreq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(event => { }, err => {
                if (err.error.auth == false) {
                    this.router.navigateByUrl('/login');
                }
            }));
        }
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_4__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/billing/billing/billing.component.scss":
/*!********************************************************!*\
  !*** ./src/app/billing/billing/billing.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpbGxpbmcvYmlsbGluZy9iaWxsaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/billing/billing/billing.component.ts":
/*!******************************************************!*\
  !*** ./src/app/billing/billing/billing.component.ts ***!
  \******************************************************/
/*! exports provided: BillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingComponent", function() { return BillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BillingComponent = class BillingComponent {
    constructor() { }
    ngOnInit() {
    }
};
BillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-billing',
        template: __webpack_require__(/*! raw-loader!./billing.component.html */ "./node_modules/raw-loader/index.js!./src/app/billing/billing/billing.component.html"),
        styles: [__webpack_require__(/*! ./billing.component.scss */ "./src/app/billing/billing/billing.component.scss")]
    })
], BillingComponent);



/***/ }),

/***/ "./src/app/billing/buypremiumplans/buypremiumplans.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/billing/buypremiumplans/buypremiumplans.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media all and (min-width: 768px) {\n  tr td {\n    vertical-align: middle !important;\n  }\n  tr span:not([class]) {\n    padding: 1rem 1rem;\n  }\n}\nh3.card-header.text-center.font-weight-bold.text-uppercase.py-4 {\n  background-color: darkslateblue;\n  color: white;\n}\nth.text-center {\n  background-color: grey;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGluZy9idXlwcmVtaXVtcGxhbnMvRjpcXGdpdCBodWJcXEFkbWlucGFubmVsVG9NYW5hZ2VUZWFtXFxGcm9udGVuZC9zcmNcXGFwcFxcYmlsbGluZ1xcYnV5cHJlbWl1bXBsYW5zXFxidXlwcmVtaXVtcGxhbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2JpbGxpbmcvYnV5cHJlbWl1bXBsYW5zL2J1eXByZW1pdW1wbGFucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0lBQ0UsaUNBQUE7RUNBSjtFREdJO0lBQ0Usa0JBQUE7RUNETjtBQUNGO0FES0E7RUFDRSwrQkFBQTtFQUNBLFlBQUE7QUNIRjtBREtBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9iaWxsaW5nL2J1eXByZW1pdW1wbGFucy9idXlwcmVtaXVtcGxhbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIHRyICB7XHJcbiAgICB0ZCB7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAmOm5vdChbY2xhc3NdKSB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmgzLmNhcmQtaGVhZGVyLnRleHQtY2VudGVyLmZvbnQtd2VpZ2h0LWJvbGQudGV4dC11cHBlcmNhc2UucHktNCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlYmx1ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxudGgudGV4dC1jZW50ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsIkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIHRyIHRkIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIH1cbiAgdHIgc3Bhbjpub3QoW2NsYXNzXSkge1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgfVxufVxuaDMuY2FyZC1oZWFkZXIudGV4dC1jZW50ZXIuZm9udC13ZWlnaHQtYm9sZC50ZXh0LXVwcGVyY2FzZS5weS00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG50aC50ZXh0LWNlbnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/billing/buypremiumplans/buypremiumplans.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/billing/buypremiumplans/buypremiumplans.component.ts ***!
  \**********************************************************************/
/*! exports provided: BuypremiumplansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuypremiumplansComponent", function() { return BuypremiumplansComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");




let BuypremiumplansComponent = class BuypremiumplansComponent {
    constructor(apiCall, router) {
        this.apiCall = apiCall;
        this.router = router;
        this.personList = [];
        this.awaitingPersonList = [];
    }
    ngOnInit() {
        this.getpremiumplanlist();
    }
    updateList(id, property, event) {
        const editField = event.target.textContent;
        this.personList[id][property] = editField;
    }
    remove(id) {
        this.awaitingPersonList.push(this.personList[id]);
        this.personList.splice(id, 1);
    }
    add() {
        if (this.awaitingPersonList.length > 0) {
            const person = this.awaitingPersonList[0];
            this.personList.push(person);
            this.awaitingPersonList.splice(0, 1);
        }
    }
    changeValue(id, property, event) {
        this.editField = event.target.textContent;
    }
    getpremiumplanlist() {
        this.apiCall.getpremiumplanlist().subscribe((res) => {
            console.log(res);
            this.personList = res.data;
        });
    }
};
BuypremiumplansComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BuypremiumplansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buypremiumplans',
        template: __webpack_require__(/*! raw-loader!./buypremiumplans.component.html */ "./node_modules/raw-loader/index.js!./src/app/billing/buypremiumplans/buypremiumplans.component.html"),
        styles: [__webpack_require__(/*! ./buypremiumplans.component.scss */ "./src/app/billing/buypremiumplans/buypremiumplans.component.scss")]
    })
], BuypremiumplansComponent);



/***/ }),

/***/ "./src/app/billing/paymentdetailsupdate/paymentdetailsupdate.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/billing/paymentdetailsupdate/paymentdetailsupdate.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input#city {\n  margin-top: 0%;\n  margin-bottom: 4%;\n}\n\nbutton.my-4.btn.btn-info.btn-block {\n  margin-left: 0%;\n}\n\nhr.new4 {\n  border: 1px solid black;\n}\n\n.col-md-6.payment {\n  margin-top: 11.5%;\n}\n\n@media screen and (max-width: 1060px) {\n  .medias.mymedia.text-center.border.border-light.p-5 {\n    width: 100%;\n    margin-left: 0%;\n  }\n}\n\n.row {\n  margin-top: 2%;\n  margin-left: 19%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGluZy9wYXltZW50ZGV0YWlsc3VwZGF0ZS9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxiaWxsaW5nXFxwYXltZW50ZGV0YWlsc3VwZGF0ZVxccGF5bWVudGRldGFpbHN1cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2JpbGxpbmcvcGF5bWVudGRldGFpbHN1cGRhdGUvcGF5bWVudGRldGFpbHN1cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURPQTtFQUNFLHVCQUFBO0FDSkY7O0FET0E7RUFDRSxpQkFBQTtBQ0pGOztBRE1BO0VBRUU7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQ0pGO0FBQ0Y7O0FETUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2JpbGxpbmcvcGF5bWVudGRldGFpbHN1cGRhdGUvcGF5bWVudGRldGFpbHN1cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCNjaXR5IHtcclxuICBtYXJnaW4tdG9wOiAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA0JTtcclxufVxyXG5cclxuYnV0dG9uLm15LTQuYnRuLmJ0bi1pbmZvLmJ0bi1ibG9jayB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAlO1xyXG59XHJcblxyXG4vLyAubWVkaWFzLnRleHQtY2VudGVyLmJvcmRlci5ib3JkZXItbGlnaHQucC01IHtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBtYXJnaW4tbGVmdDogMjUlO1xyXG4vLyB9XHJcblxyXG5oci5uZXc0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmNvbC1tZC02LnBheW1lbnQge1xyXG4gIG1hcmdpbi10b3A6IDExLjUlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCl7XHJcblxyXG4gIC5tZWRpYXMubXltZWRpYS50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICB9XHJcbn1cclxuLnJvdyB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE5JTtcclxufVxyXG4iLCJpbnB1dCNjaXR5IHtcbiAgbWFyZ2luLXRvcDogMCU7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xufVxuXG5idXR0b24ubXktNC5idG4uYnRuLWluZm8uYnRuLWJsb2NrIHtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xufVxuXG5oci5uZXc0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5jb2wtbWQtNi5wYXltZW50IHtcbiAgbWFyZ2luLXRvcDogMTEuNSU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCkge1xuICAubWVkaWFzLm15bWVkaWEudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxufVxuLnJvdyB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tbGVmdDogMTklO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/billing/paymentdetailsupdate/paymentdetailsupdate.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/billing/paymentdetailsupdate/paymentdetailsupdate.component.ts ***!
  \********************************************************************************/
/*! exports provided: PaymentdetailsupdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentdetailsupdateComponent", function() { return PaymentdetailsupdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let PaymentdetailsupdateComponent = class PaymentdetailsupdateComponent {
    constructor(apiCall, fb, router, route) {
        this.apiCall = apiCall;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.percentDone = 0;
        this.users = [];
        this.category = 'C';
        this.discountAmount = 0;
        this.form = this.fb.group({
            payment_mode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            payment_gateway_txn_ref: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            payment_gateway_txn_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            client_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            authkey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            TxnOrderId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            avatar: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            notes: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ngOnInit() {
        this.package_id = this.route.snapshot.params.package_id;
        this.package_price = this.route.snapshot.params.package_price;
        this.package_gst_amount = this.route.snapshot.params.package_gst_rate;
        console.log(this.package_gst_amount);
        this.amount_topay = -this.discountAmount - -this.package_price;
        this.gst_amount = this.amount_topay * this.package_gst_amount / 100;
        this.totalamount = (+this.gst_amount + +this.amount_topay);
    }
    // Image Preview
    uploadFile(event) {
        const file = event.target.files[0];
        this.form.patchValue({
            avatar: file
        });
        this.form.get('avatar').updateValueAndValidity();
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.preview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    submitForm() {
        this.apiCall.postPaymentTransaction(this.TxnOrderId, this.form.value.payment_mode, this.form.value.payment_gateway_txn_ref, this.form.value.payment_gateway_txn_id, this.clientData.client_id, this.authkey, this.form.value.avatar, this.form.value.notes, this.totalamount, this.discountAmount).subscribe((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress:
                    this.percentDone = Math.round(event.loaded / event.total * 100);
                    console.log(`Uploaded! ${this.percentDone}%`);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response:
                    console.log('User successfully created!', event.body);
                    this.percentDone = false;
                    alert('Data saved sucessfully');
                    this.router.navigate(['/billing/smspackagelist']);
            }
        });
    }
    getclientdetails(data) {
        this.apiCall.getclientdetails(data).subscribe((res) => {
            if (res.status == 'success') {
                this.clientData = res.data[0];
                this.authkey = this.clientData.user_authkey_old;
                this.getOrderId();
            }
            else if (res.status == 'false') {
                this.message = res.message;
            }
        });
    }
    getOrderId() {
        const data = { package_id: this.package_id, client_id: this.clientData.client_id, sales_channel: 'smsportal', authkey: this.clientData.user_authkey_old };
        this.apiCall.getOrderId(data).subscribe((res) => {
            this.TxnOrderId = res.TxnOrderId;
            console.log(this.TxnOrderId);
        });
    }
    calculatediscount(event) {
        this.discountAmount = event;
        this.amount_topay = -this.discountAmount - -this.package_price;
        // this.totalamount = +this.package_gst_amount + +this.amount_topay;
        this.gst_amount = this.amount_topay * this.package_gst_amount / 100;
        this.totalamount = (+this.gst_amount + +this.amount_topay);
    }
};
PaymentdetailsupdateComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
PaymentdetailsupdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paymentdetailsupdate',
        template: __webpack_require__(/*! raw-loader!./paymentdetailsupdate.component.html */ "./node_modules/raw-loader/index.js!./src/app/billing/paymentdetailsupdate/paymentdetailsupdate.component.html"),
        styles: [__webpack_require__(/*! ./paymentdetailsupdate.component.scss */ "./src/app/billing/paymentdetailsupdate/paymentdetailsupdate.component.scss")]
    })
], PaymentdetailsupdateComponent);



/***/ }),

/***/ "./src/app/billing/smspackagelist/smspackagelist.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/billing/smspackagelist/smspackagelist.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media all and (min-width: 768px) {\n  tr td {\n    vertical-align: middle !important;\n  }\n  tr span:not([class]) {\n    padding: 1rem 1rem;\n  }\n}\nh3.card-header.text-center.font-weight-bold.text-uppercase.py-4 {\n  background-color: darkslateblue;\n  color: white;\n}\nth.text-center {\n  background-color: grey;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGluZy9zbXNwYWNrYWdlbGlzdC9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxiaWxsaW5nXFxzbXNwYWNrYWdlbGlzdFxcc21zcGFja2FnZWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2JpbGxpbmcvc21zcGFja2FnZWxpc3Qvc21zcGFja2FnZWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTtJQUNFLGlDQUFBO0VDQUo7RURHSTtJQUNFLGtCQUFBO0VDRE47QUFDRjtBREtBO0VBQ0UsK0JBQUE7RUFDQSxZQUFBO0FDSEY7QURLQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvYmlsbGluZy9zbXNwYWNrYWdlbGlzdC9zbXNwYWNrYWdlbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgdHIgIHtcclxuICAgIHRkIHtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgICY6bm90KFtjbGFzc10pIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaDMuY2FyZC1oZWFkZXIudGV4dC1jZW50ZXIuZm9udC13ZWlnaHQtYm9sZC50ZXh0LXVwcGVyY2FzZS5weS00IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVibHVlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG50aC50ZXh0LWNlbnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIiwiQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgdHIgdGQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgfVxuICB0ciBzcGFuOm5vdChbY2xhc3NdKSB7XG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xuICB9XG59XG5oMy5jYXJkLWhlYWRlci50ZXh0LWNlbnRlci5mb250LXdlaWdodC1ib2xkLnRleHQtdXBwZXJjYXNlLnB5LTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVibHVlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnRoLnRleHQtY2VudGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/billing/smspackagelist/smspackagelist.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/billing/smspackagelist/smspackagelist.component.ts ***!
  \********************************************************************/
/*! exports provided: SmspackagelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmspackagelistComponent", function() { return SmspackagelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");




let SmspackagelistComponent = class SmspackagelistComponent {
    constructor(apiCall, router) {
        this.apiCall = apiCall;
        this.router = router;
        this.personList = [];
        this.awaitingPersonList = [];
    }
    ngOnInit() {
        this.getsmspackagelist();
    }
    updateList(id, property, event) {
        const editField = event.target.textContent;
        this.personList[id][property] = editField;
    }
    remove(id) {
        this.awaitingPersonList.push(this.personList[id]);
        this.personList.splice(id, 1);
    }
    add() {
        if (this.awaitingPersonList.length > 0) {
            const person = this.awaitingPersonList[0];
            this.personList.push(person);
            this.awaitingPersonList.splice(0, 1);
        }
    }
    changeValue(id, property, event) {
        this.editField = event.target.textContent;
    }
    getsmspackagelist() {
        this.apiCall.getsmspackagelist().subscribe((res) => {
            console.log(res);
            this.personList = res.data;
        });
    }
};
SmspackagelistComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SmspackagelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-smspackagelist',
        template: __webpack_require__(/*! raw-loader!./smspackagelist.component.html */ "./node_modules/raw-loader/index.js!./src/app/billing/smspackagelist/smspackagelist.component.html"),
        styles: [__webpack_require__(/*! ./smspackagelist.component.scss */ "./src/app/billing/smspackagelist/smspackagelist.component.scss")]
    })
], SmspackagelistComponent);



/***/ }),

/***/ "./src/app/campaign/addpushnotification/addpushnotification.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/campaign/addpushnotification/addpushnotification.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWduL2FkZHB1c2hub3RpZmljYXRpb24vYWRkcHVzaG5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/campaign/addpushnotification/addpushnotification.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/campaign/addpushnotification/addpushnotification.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddpushnotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpushnotificationComponent", function() { return AddpushnotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddpushnotificationComponent = class AddpushnotificationComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddpushnotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addpushnotification',
        template: __webpack_require__(/*! raw-loader!./addpushnotification.component.html */ "./node_modules/raw-loader/index.js!./src/app/campaign/addpushnotification/addpushnotification.component.html"),
        styles: [__webpack_require__(/*! ./addpushnotification.component.scss */ "./src/app/campaign/addpushnotification/addpushnotification.component.scss")]
    })
], AddpushnotificationComponent);



/***/ }),

/***/ "./src/app/campaign/campaign-management/campaign-management.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/campaign/campaign-management/campaign-management.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\nimg.xlicon {\n  width: 25%;\n  margin-left: 76%;\n  margin-top: -10%;\n  margin-bottom: -4%;\n  cursor: pointer;\n}\n\ninput {\n  margin-top: 5%;\n}\n\nselect.browser-default.custom-select.filter {\n  width: 25%;\n  margin-right: 2%;\n}\n\nbutton.mat-fab {\n  margin-top: 2%;\n}\n\n.pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFpZ24vY2FtcGFpZ24tbWFuYWdlbWVudC9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxjYW1wYWlnblxcY2FtcGFpZ24tbWFuYWdlbWVudFxcY2FtcGFpZ24tbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FtcGFpZ24vY2FtcGFpZ24tbWFuYWdlbWVudC9jYW1wYWlnbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7QUNHRjs7QUREQTtFQUNFLFVBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDRSxjQUFBO0FDS0Y7O0FESEE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURKQTtFQUNFLGNBQUE7QUNPRjs7QURMQTtFQUFVLGVBQUE7QUNTViIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWduL2NhbXBhaWduLW1hbmFnZW1lbnQvY2FtcGFpZ24tbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG50ZCwgdGgge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuaW1nLnhsaWNvbiB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NiU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTQlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmlucHV0IHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5zZWxlY3QuYnJvd3Nlci1kZWZhdWx0LmN1c3RvbS1zZWxlY3QuZmlsdGVyIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIG1hcmdpbi1yaWdodDogMiU7XHJcbn1cclxuYnV0dG9uLm1hdC1mYWJ7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuLnBvaW50ZXIge2N1cnNvcjogcG9pbnRlcjt9XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkLCB0aCB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbmltZy54bGljb24ge1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW4tbGVmdDogNzYlO1xuICBtYXJnaW4tdG9wOiAtMTAlO1xuICBtYXJnaW4tYm90dG9tOiAtNCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXQge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuc2VsZWN0LmJyb3dzZXItZGVmYXVsdC5jdXN0b20tc2VsZWN0LmZpbHRlciB7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbmJ1dHRvbi5tYXQtZmFiIHtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/campaign/campaign-management/campaign-management.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/campaign/campaign-management/campaign-management.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CampaignManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignManagementComponent", function() { return CampaignManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/apiCalls/excel.service */ "./src/app/apiCalls/excel.service.ts");





let CampaignManagementComponent = class CampaignManagementComponent {
    constructor(apiCall, excelservice, router) {
        this.apiCall = apiCall;
        this.excelservice = excelservice;
        this.router = router;
        this.awaitingPersonList = [];
        this.selectedToppings = [];
        this.allToppings = false;
        this.curDate = new Date();
    }
    ngOnInit() {
        this.partner_id = this.apiCall.getPartner_id();
        this.getClients();
    }
    updateList(id, property, event) {
        const editField = event.target.textContent;
        this.personList[id][property] = editField;
    }
    remove(id) {
        this.awaitingPersonList.push(this.personList[id]);
        this.personList.splice(id, 1);
    }
    add() {
        if (this.awaitingPersonList.length > 0) {
            const person = this.awaitingPersonList[0];
            this.personList.push(person);
            this.awaitingPersonList.splice(0, 1);
        }
    }
    changeValue(id, property, event) {
        this.editField = event.target.textContent;
    }
    getClients() {
        const partner_id = { partner_id: this.partner_id };
        this.apiCall.getplanexpirycontactsAll(partner_id).subscribe((res) => {
            this.personList = res.data;
        });
    }
    exportAsXLSX() {
        this.excelservice.exportAsExcelFile(this.personList, 'sample');
    }
    search() {
        if (this.client_firstname != '') {
            this.personList = this.personList.filter(res => {
                return res.client_firstname.toLocaleLowerCase().match(this.client_firstname.toLocaleLowerCase());
            });
        }
        else if (this.client_firstname == '') {
            this.ngOnInit();
        }
    }
    getplanexpirycontacts(data) {
        data.partner_id = this.partner_id;
        this.apiCall.getplanexpirycontacts(data).subscribe((res) => {
            this.personList = res.data;
        });
    }
    updateclientData(data) {
        alert('Ensure you have added SMS balance to client account in SMS Gateway Portal');
        console.log(data);
        const userData = { client_id: data.client_id, order_id: data.order_id, add_balance: data.add_balance, payment_status: data.payment_status_code };
        this.apiCall.updatePaymentStatus(userData).subscribe((res) => {
            alert('Data updated Sucessfully');
        });
    }
    insertnotifications() {
        const agree = confirm('Are sure to add push notifications ?');
        if (agree) {
            const data = this.personList.map(person => person.client_id);
            const userData = { client_ids: data };
            this.apiCall.insertnotifications(userData).subscribe((res) => {
                alert(res.message);
            });
        }
    }
    getclientsbyfilter(value) {
        console.log(value);
        const data = { account_type: value };
        this.apiCall.getclientsbyfilter(data).subscribe((res) => {
            this.personList = res.data;
            if (res.status == 'false') {
                this.errorMessage = res.message;
            }
            if (value === 'All') {
                this.ngOnInit();
            }
        });
    }
    selectAllToppings(checked, toppings) {
        this.selectedToppings = toppings;
        if (checked) {
            this.allToppings = true;
            this.selectedclients = this.selectedToppings;
        }
        else {
            console.log(this.selectedToppings);
            this.allToppings = false;
        }
    }
    selectNewTopping(checked, topping) {
        if (checked) {
            this.selectedToppings.push(topping);
            this.selectedclients = this.selectedToppings;
        }
        else {
            this.selectedToppings = this.selectedToppings.filter(top => top.client_id !== topping.client_id);
        }
    }
    selectclients() {
        const notify = confirm("Are you sure you want to send notification");
        if (notify) {
            this.apiCall.getclientids(this.selectedclients);
            this.router.navigate(['/pushnotify']);
        }
    }
};
CampaignManagementComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CampaignManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-campaign-management',
        template: __webpack_require__(/*! raw-loader!./campaign-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/campaign/campaign-management/campaign-management.component.html"),
        styles: [__webpack_require__(/*! ./campaign-management.component.scss */ "./src/app/campaign/campaign-management/campaign-management.component.scss")]
    })
], CampaignManagementComponent);



/***/ }),

/***/ "./src/app/campaign/notifytemplates/notifytemplates.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/campaign/notifytemplates/notifytemplates.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWduL25vdGlmeXRlbXBsYXRlcy9ub3RpZnl0ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/campaign/notifytemplates/notifytemplates.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/campaign/notifytemplates/notifytemplates.component.ts ***!
  \***********************************************************************/
/*! exports provided: NotifytemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifytemplatesComponent", function() { return NotifytemplatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotifytemplatesComponent = class NotifytemplatesComponent {
    constructor() {
        this.message = [];
    }
    ngOnInit() {
        this.message = [{ message: 'May this Dasara, light up for you. The hopes of Happy times, And dreams for a year full of smiles! Wish you all Happy Vijaya Dashami' },
            { message: 'May this Dasara, light up for you. The hopes of Happy times, And dreams for a year full of smiles! Wish you all Happy Vijaya Dashami' }
        ];
    }
};
NotifytemplatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifytemplates',
        template: __webpack_require__(/*! raw-loader!./notifytemplates.component.html */ "./node_modules/raw-loader/index.js!./src/app/campaign/notifytemplates/notifytemplates.component.html"),
        styles: [__webpack_require__(/*! ./notifytemplates.component.scss */ "./src/app/campaign/notifytemplates/notifytemplates.component.scss")]
    })
], NotifytemplatesComponent);



/***/ }),

/***/ "./src/app/campaign/pushnotify/pushnotify.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/campaign/pushnotify/pushnotify.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-md-6 {\n  margin-top: 5%;\n}\n\nh3 {\n  text-align: center;\n  background-color: darkblue;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFpZ24vcHVzaG5vdGlmeS9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxjYW1wYWlnblxccHVzaG5vdGlmeVxccHVzaG5vdGlmeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FtcGFpZ24vcHVzaG5vdGlmeS9wdXNobm90aWZ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWduL3B1c2hub3RpZnkvcHVzaG5vdGlmeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIiwiLmNvbC1tZC02IHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/campaign/pushnotify/pushnotify.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/campaign/pushnotify/pushnotify.component.ts ***!
  \*************************************************************/
/*! exports provided: PushnotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushnotifyComponent", function() { return PushnotifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/apiCalls/excel.service */ "./src/app/apiCalls/excel.service.ts");





let PushnotifyComponent = class PushnotifyComponent {
    constructor(apiCall, router, excelservice) {
        this.apiCall = apiCall;
        this.router = router;
        this.excelservice = excelservice;
    }
    ngOnInit() {
        this.getrateCards();
        this.getPremiumRatecards();
        this.getMyContacts();
    }
    getrateCards() {
        this.apiCall.getrateCards().subscribe((res) => {
            console.log(res);
            this.smspackratecards = res.result;
        });
    }
    getpacksbyratecard(data) {
        const userData = { ratecard_id: data };
        this.apiCall.getpacksbyratecard(userData).subscribe((res) => {
            console.log(res);
            this.personList = res.result;
            this.smspackage_ratecard = res.result[0].ratecard_id;
            console.log(this.smspackage_ratecard);
            this.premiumpacks = '';
            if (res.status == 'false') {
                alert(res.message);
            }
        });
    }
    getPremiumRatecards() {
        this.apiCall.getPremiumRatecards().subscribe((res) => {
            console.log(res);
            this.premiumpackratecards = res.result;
        });
    }
    getPremiumpacksByRateCard(data) {
        const userData = { ratecard_id: data };
        this.apiCall.getPremiumpacksByRateCard(userData).subscribe((res) => {
            this.premiumpacks = res.result;
            console.log(res);
            this.premiumplan_ratecard = res.result[0].ratecard_id;
            console.log(this.premiumplan_ratecard);
            this.personList = '';
        });
    }
    getMyContacts() {
        this.apiCall.client_idArray.subscribe((res = []) => {
            this.clientsData = res;
        });
    }
    confirmpackages(data) {
        data.userData = { clientdata: this.clientsData, premiumplan_ratecard: this.premiumplan_ratecard, smspackage_ratecard: this.smspackage_ratecard };
        console.log(data);
        this.apiCall.confirmpackage(data);
        this.router.navigate(['/sendnotify']);
    }
};
PushnotifyComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"] }
];
PushnotifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pushnotify',
        template: __webpack_require__(/*! raw-loader!./pushnotify.component.html */ "./node_modules/raw-loader/index.js!./src/app/campaign/pushnotify/pushnotify.component.html"),
        styles: [__webpack_require__(/*! ./pushnotify.component.scss */ "./src/app/campaign/pushnotify/pushnotify.component.scss")]
    })
], PushnotifyComponent);



/***/ }),

/***/ "./src/app/campaign/sendnotification/sendnotification.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/campaign/sendnotification/sendnotification.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin-left: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFpZ24vc2VuZG5vdGlmaWNhdGlvbi9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxjYW1wYWlnblxcc2VuZG5vdGlmaWNhdGlvblxcc2VuZG5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FtcGFpZ24vc2VuZG5vdGlmaWNhdGlvbi9zZW5kbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWduL3NlbmRub3RpZmljYXRpb24vc2VuZG5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxufVxyXG4iLCJmb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/campaign/sendnotification/sendnotification.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/campaign/sendnotification/sendnotification.component.ts ***!
  \*************************************************************************/
/*! exports provided: SendnotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendnotificationComponent", function() { return SendnotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");




let SendnotificationComponent = class SendnotificationComponent {
    constructor(apiCall, router) {
        this.apiCall = apiCall;
        this.router = router;
        this.boolean = false;
    }
    ngOnInit() {
        this.getMyContacts();
    }
    getMyContacts() {
        this.apiCall.packArray.subscribe((res = []) => {
            this.client_ids = res.userData.clientdata.map(el => el.client_id);
            this.mobilenumbers = res.userData.clientdata.map(el => Number(el.user_mobile_number));
            this.smspackage_ratecard = res.userData.smspackage_ratecard;
            this.premiumplan_ratecard = res.userData.premiumplan_ratecard;
            console.log(this.premiumplan_ratecard, this.smspackage_ratecard);
        });
    }
    pushnotify(data) {
        data.client_ids = this.client_ids;
        data.mobilenumbers = this.mobilenumbers;
        data.smspackage_ratecard = this.smspackage_ratecard;
        data.premiumplan_ratecard = this.premiumplan_ratecard;
        console.log(data);
        if (this.boolean) {
            this.apiCall.sendpushnotification(data).subscribe((res) => {
                console.log(res);
                if (res.status == 'success') {
                    alert(res.message);
                    this.router.navigate(['/campaignManage']);
                }
                else {
                    alert(res.message);
                }
            });
        }
        this.apiCall.sendPushnotifySMS(data).subscribe((res) => {
            console.log(res);
            if (res.type == 'success') {
                alert('sms sent successfully');
                this.router.navigate(['/home']);
            }
        });
    }
    checkbox(event) {
        console.log(event);
        this.boolean = event;
    }
};
SendnotificationComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SendnotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sendnotification',
        template: __webpack_require__(/*! raw-loader!./sendnotification.component.html */ "./node_modules/raw-loader/index.js!./src/app/campaign/sendnotification/sendnotification.component.html"),
        styles: [__webpack_require__(/*! ./sendnotification.component.scss */ "./src/app/campaign/sendnotification/sendnotification.component.scss")]
    })
], SendnotificationComponent);



/***/ }),

/***/ "./src/app/cards/cards/cards.component.scss":
/*!**************************************************!*\
  !*** ./src/app/cards/cards/cards.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmRzL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cards/cards/cards.component.ts":
/*!************************************************!*\
  !*** ./src/app/cards/cards/cards.component.ts ***!
  \************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardsComponent = class CardsComponent {
    constructor() { }
    ngOnInit() {
    }
};
CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cards',
        template: __webpack_require__(/*! raw-loader!./cards.component.html */ "./node_modules/raw-loader/index.js!./src/app/cards/cards/cards.component.html"),
        styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/cards/cards/cards.component.scss")]
    })
], CardsComponent);



/***/ }),

/***/ "./src/app/cards/uploadcards/uploadcards.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/cards/uploadcards/uploadcards.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input#city {\n  margin-top: 0%;\n  margin-bottom: 4%;\n}\n\nbutton.my-4.btn.btn-info.btn-block {\n  margin-left: 0%;\n}\n\n.medias.text-center.border.border-light.p-5 {\n  width: 50%;\n  margin-left: 25%;\n}\n\n@media screen and (max-width: 1060px) {\n  .medias.mymedia.text-center.border.border-light.p-5 {\n    width: 100%;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZHMvdXBsb2FkY2FyZHMvRjpcXGdpdCBodWJcXEFkbWlucGFubmVsVG9NYW5hZ2VUZWFtXFxGcm9udGVuZC9zcmNcXGFwcFxcY2FyZHNcXHVwbG9hZGNhcmRzXFx1cGxvYWRjYXJkcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FyZHMvdXBsb2FkY2FyZHMvdXBsb2FkY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBRUU7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXJkcy91cGxvYWRjYXJkcy91cGxvYWRjYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0I2NpdHkge1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG59XHJcblxyXG5idXR0b24ubXktNC5idG4uYnRuLWluZm8uYnRuLWJsb2NrIHtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbn1cclxuXHJcbi5tZWRpYXMudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpe1xyXG5cclxuICAubWVkaWFzLm15bWVkaWEudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgfVxyXG59XHJcbiIsImlucHV0I2NpdHkge1xuICBtYXJnaW4tdG9wOiAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG59XG5cbmJ1dHRvbi5teS00LmJ0bi5idG4taW5mby5idG4tYmxvY2sge1xuICBtYXJnaW4tbGVmdDogMCU7XG59XG5cbi5tZWRpYXMudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpIHtcbiAgLm1lZGlhcy5teW1lZGlhLnRleHQtY2VudGVyLmJvcmRlci5ib3JkZXItbGlnaHQucC01IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/cards/uploadcards/uploadcards.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cards/uploadcards/uploadcards.component.ts ***!
  \************************************************************/
/*! exports provided: UploadcardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadcardsComponent", function() { return UploadcardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let UploadcardsComponent = class UploadcardsComponent {
    constructor(apiCall, fb, router) {
        this.apiCall = apiCall;
        this.fb = fb;
        this.router = router;
        this.percentDone = 0;
        this.users = [];
        this.category = 'C';
        this.form = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            avatar: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    // Image Preview
    uploadFile(event) {
        const file = event.target.files[0];
        this.form.patchValue({
            avatar: file
        });
        this.form.get('avatar').updateValueAndValidity();
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.preview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    submitForm() {
        this.apiCall.uploaddigitalprofile(this.form.value.title, this.form.value.avatar, this.category).subscribe((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress:
                    this.percentDone = Math.round(event.loaded / event.total * 100);
                    console.log(`Uploaded! ${this.percentDone}%`);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response:
                    console.log('User successfully created!', event.body);
                    this.percentDone = false;
                    alert('file uploaded sucessfully');
                    this.router.navigate(['/card/viewcards']);
            }
        });
    }
};
UploadcardsComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UploadcardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uploadcards',
        template: __webpack_require__(/*! raw-loader!./uploadcards.component.html */ "./node_modules/raw-loader/index.js!./src/app/cards/uploadcards/uploadcards.component.html"),
        styles: [__webpack_require__(/*! ./uploadcards.component.scss */ "./src/app/cards/uploadcards/uploadcards.component.scss")]
    })
], UploadcardsComponent);



/***/ }),

/***/ "./src/app/cards/uploaddigprofile/uploaddigprofile.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/cards/uploaddigprofile/uploaddigprofile.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input#city {\n  margin-top: 0%;\n  margin-bottom: 4%;\n}\n\nbutton.my-4.btn.btn-info.btn-block {\n  margin-left: 0%;\n}\n\n.medias.text-center.border.border-light.p-5 {\n  width: 50%;\n  margin-left: 25%;\n}\n\n@media screen and (max-width: 1060px) {\n  .medias.mymedia.text-center.border.border-light.p-5 {\n    width: 100%;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZHMvdXBsb2FkZGlncHJvZmlsZS9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxjYXJkc1xcdXBsb2FkZGlncHJvZmlsZVxcdXBsb2FkZGlncHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FyZHMvdXBsb2FkZGlncHJvZmlsZS91cGxvYWRkaWdwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUVFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY2FyZHMvdXBsb2FkZGlncHJvZmlsZS91cGxvYWRkaWdwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQjY2l0eSB7XHJcbiAgbWFyZ2luLXRvcDogMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbn1cclxuXHJcbmJ1dHRvbi5teS00LmJ0bi5idG4taW5mby5idG4tYmxvY2sge1xyXG4gIG1hcmdpbi1sZWZ0OiAwJTtcclxufVxyXG5cclxuLm1lZGlhcy50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCl7XHJcblxyXG4gIC5tZWRpYXMubXltZWRpYS50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICB9XHJcbn1cclxuIiwiaW5wdXQjY2l0eSB7XG4gIG1hcmdpbi10b3A6IDAlO1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbn1cblxuYnV0dG9uLm15LTQuYnRuLmJ0bi1pbmZvLmJ0bi1ibG9jayB7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbn1cblxuLm1lZGlhcy50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCkge1xuICAubWVkaWFzLm15bWVkaWEudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cards/uploaddigprofile/uploaddigprofile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/cards/uploaddigprofile/uploaddigprofile.component.ts ***!
  \**********************************************************************/
/*! exports provided: UploaddigprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaddigprofileComponent", function() { return UploaddigprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let UploaddigprofileComponent = class UploaddigprofileComponent {
    constructor(apiCall, fb, router) {
        this.apiCall = apiCall;
        this.fb = fb;
        this.router = router;
        this.percentDone = 0;
        this.users = [];
        this.category = 'P';
        this.form = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            avatar: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    // Image Preview
    uploadFile(event) {
        const file = event.target.files[0];
        this.form.patchValue({
            avatar: file
        });
        this.form.get('avatar').updateValueAndValidity();
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.preview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    submitForm() {
        this.apiCall.uploaddigitalprofile(this.form.value.title, this.form.value.avatar, this.category).subscribe((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress:
                    this.percentDone = Math.round(event.loaded / event.total * 100);
                    console.log(`Uploaded! ${this.percentDone}%`);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response:
                    console.log('User successfully created!', event.body);
                    this.percentDone = false;
                    alert('file uploaded sucessfully');
                    this.router.navigate(['/card/viewcards']);
            }
        });
    }
};
UploaddigprofileComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UploaddigprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uploaddigprofile',
        template: __webpack_require__(/*! raw-loader!./uploaddigprofile.component.html */ "./node_modules/raw-loader/index.js!./src/app/cards/uploaddigprofile/uploaddigprofile.component.html"),
        styles: [__webpack_require__(/*! ./uploaddigprofile.component.scss */ "./src/app/cards/uploaddigprofile/uploaddigprofile.component.scss")]
    })
], UploaddigprofileComponent);



/***/ }),

/***/ "./src/app/cards/viewcards/viewcards.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/cards/viewcards/viewcards.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-md-4.ng-star-inserted {\n  margin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZHMvdmlld2NhcmRzL0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXGNhcmRzXFx2aWV3Y2FyZHNcXHZpZXdjYXJkcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FyZHMvdmlld2NhcmRzL3ZpZXdjYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXJkcy92aWV3Y2FyZHMvdmlld2NhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1tZC00Lm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbiIsIi5jb2wtbWQtNC5uZy1zdGFyLWluc2VydGVkIHtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59Il19 */"

/***/ }),

/***/ "./src/app/cards/viewcards/viewcards.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cards/viewcards/viewcards.component.ts ***!
  \********************************************************/
/*! exports provided: ViewcardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcardsComponent", function() { return ViewcardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ViewcardsComponent = class ViewcardsComponent {
    constructor(apiCall, router) {
        this.apiCall = apiCall;
        this.router = router;
    }
    ngOnInit() {
        this.getAllCards();
    }
    getAllCards() {
        this.apiCall.getAllCards().subscribe((res) => {
            this.cards = res.data;
        });
    }
};
ViewcardsComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ViewcardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewcards',
        template: __webpack_require__(/*! raw-loader!./viewcards.component.html */ "./node_modules/raw-loader/index.js!./src/app/cards/viewcards/viewcards.component.html"),
        styles: [__webpack_require__(/*! ./viewcards.component.scss */ "./src/app/cards/viewcards/viewcards.component.scss")]
    })
], ViewcardsComponent);



/***/ }),

/***/ "./src/app/changepassword/changepassword.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marginal {\n  margin-left: 30%;\n  width: 45%;\n}\n\nbutton.my-4.waves-effect.z-depth-0.bttn.btn.btn-rounded.btn-outline-info.btn-block {\n  width: 40%;\n  margin-left: 35%;\n}\n\nmdb-card.card {\n  margin-top: 10%;\n}\n\n@media screen and (max-width: 1060px) {\n  .marginal.mrgset {\n    width: 100%;\n    margin-left: 1%;\n  }\n\n  .srmc {\n    width: 110%;\n    margin-left: -10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlcGFzc3dvcmQvRjpcXGdpdCBodWJcXEFkbWlucGFubmVsVG9NYW5hZ2VUZWFtXFxGcm9udGVuZC9zcmNcXGFwcFxcY2hhbmdlcGFzc3dvcmRcXGNoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGFuZ2VwYXNzd29yZC9jaGFuZ2VwYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDQUY7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FER0E7RUFFRTtJQUNFLFdBQUE7SUFDQSxlQUFBO0VDREY7O0VESUY7SUFDRSxXQUFBO0lBQ0EsaUJBQUE7RUNEQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY2hhbmdlcGFzc3dvcmQvY2hhbmdlcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hcmdpbmFsIHtcclxuICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gIHdpZHRoOiA0NSU7XHJcblxyXG59XHJcbmJ1dHRvbi5teS00LndhdmVzLWVmZmVjdC56LWRlcHRoLTAuYnR0bi5idG4uYnRuLXJvdW5kZWQuYnRuLW91dGxpbmUtaW5mby5idG4tYmxvY2sge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcclxufVxyXG5cclxuXHJcbm1kYi1jYXJkLmNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpe1xyXG5cclxuICAubWFyZ2luYWwubXJnc2V0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcblxyXG4uc3JtYyB7XHJcbiAgd2lkdGg6IDExMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XHJcbn1cclxufVxyXG4iLCIubWFyZ2luYWwge1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICB3aWR0aDogNDUlO1xufVxuXG5idXR0b24ubXktNC53YXZlcy1lZmZlY3Quei1kZXB0aC0wLmJ0dG4uYnRuLmJ0bi1yb3VuZGVkLmJ0bi1vdXRsaW5lLWluZm8uYnRuLWJsb2NrIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbn1cblxubWRiLWNhcmQuY2FyZCB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA2MHB4KSB7XG4gIC5tYXJnaW5hbC5tcmdzZXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgfVxuXG4gIC5zcm1jIHtcbiAgICB3aWR0aDogMTEwJTtcbiAgICBtYXJnaW4tbGVmdDogLTEwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/changepassword/changepassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.ts ***!
  \************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_changepassword_must_match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/changepassword/must-match */ "./src/app/changepassword/must-match.ts");
/* harmony import */ var _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");






let ChangepasswordComponent = class ChangepasswordComponent {
    constructor(apicall, formBuilder, router) {
        this.apicall = apicall;
        this.formBuilder = formBuilder;
        this.router = router;
        this.password = " ";
        this.confirmPassword = "";
        this.model = [];
        this.submitted = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
            validator: Object(_app_changepassword_must_match__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('password', 'confirmPassword')
        });
    }
    get f() { return this.registerForm.controls; }
    changePassword() {
        this.submitted = true;
        console.log();
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.registerForm.value);
        this.apicall.resetPassword(this.registerForm.value).subscribe((res) => {
            console.log(res);
            if (res.status === 'success') {
                alert(res.message);
                this.router.navigateByUrl('home');
            }
            else {
            }
        });
    }
};
ChangepasswordComponent.ctorParameters = () => [
    { type: _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_5__["ApiCallService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-changepassword',
        template: __webpack_require__(/*! raw-loader!./changepassword.component.html */ "./node_modules/raw-loader/index.js!./src/app/changepassword/changepassword.component.html"),
        styles: [__webpack_require__(/*! ./changepassword.component.scss */ "./src/app/changepassword/changepassword.component.scss")]
    })
], ChangepasswordComponent);



/***/ }),

/***/ "./src/app/changepassword/must-match.ts":
/*!**********************************************!*\
  !*** ./src/app/changepassword/must-match.ts ***!
  \**********************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/clientsManage/add-clients/add-clients.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/clientsManage/add-clients/add-clients.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input#city {\n  margin-top: 0%;\n  margin-bottom: 4%;\n}\n\nbutton.my-4.btn.btn-info.btn-block {\n  margin-left: 0%;\n}\n\n.medias.text-center.border.border-light.p-5 {\n  width: 65%;\n  margin-left: 20%;\n}\n\nlabel.validation-message {\n  color: #ed5558;\n}\n\n@media screen and (max-width: 1060px) {\n  .medias.mymedia.text-center.border.border-light.p-5 {\n    width: 100%;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50c01hbmFnZS9hZGQtY2xpZW50cy9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxjbGllbnRzTWFuYWdlXFxhZGQtY2xpZW50c1xcYWRkLWNsaWVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHNNYW5hZ2UvYWRkLWNsaWVudHMvYWRkLWNsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRElFO0VBQ0UsY0FBQTtBQ0RKOztBREdBO0VBRUU7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzTWFuYWdlL2FkZC1jbGllbnRzL2FkZC1jbGllbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQjY2l0eSB7XHJcbiAgbWFyZ2luLXRvcDogMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbn1cclxuXHJcbmJ1dHRvbi5teS00LmJ0bi5idG4taW5mby5idG4tYmxvY2sge1xyXG4gIG1hcmdpbi1sZWZ0OiAwJTtcclxufVxyXG5cclxuLm1lZGlhcy50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcblxyXG5cclxuXHJcbiAgbGFiZWwudmFsaWRhdGlvbi1tZXNzYWdle1xyXG4gICAgY29sb3I6I2VkNTU1ODtcclxuICB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCl7XHJcblxyXG4gIC5tZWRpYXMubXltZWRpYS50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICB9XHJcbn1cclxuIiwiaW5wdXQjY2l0eSB7XG4gIG1hcmdpbi10b3A6IDAlO1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbn1cblxuYnV0dG9uLm15LTQuYnRuLmJ0bi1pbmZvLmJ0bi1ibG9jayB7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbn1cblxuLm1lZGlhcy50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbmxhYmVsLnZhbGlkYXRpb24tbWVzc2FnZSB7XG4gIGNvbG9yOiAjZWQ1NTU4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpIHtcbiAgLm1lZGlhcy5teW1lZGlhLnRleHQtY2VudGVyLmJvcmRlci5ib3JkZXItbGlnaHQucC01IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/clientsManage/add-clients/add-clients.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/clientsManage/add-clients/add-clients.component.ts ***!
  \********************************************************************/
/*! exports provided: AddClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientsComponent", function() { return AddClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddClientsComponent = class AddClientsComponent {
    constructor(apiCall, router) {
        this.apiCall = apiCall;
        this.router = router;
        this.model = {
            email: '',
            firstName: '',
            lastName: ''
        };
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    ngOnInit() {
        this.fetchProfessions();
    }
    addnewClient(data) {
        this.apiCall.addnewClient(data).subscribe((res) => {
            console.log(res);
            if (res.status == "success") {
                alert('new client added Sucessfully');
                this.router.navigate(['/client/viewclient']);
            }
            else if (res.status == "error") {
                alert(res.message);
            }
        });
    }
    postofficeApi(data) {
        const pincode = { pinCode: data };
        this.apiCall.postofficeApi(pincode).subscribe((res) => {
            console.log(res);
            this.state = res.state;
            this.district = res[0].district;
            this.postoffice = res[0].postoffice;
        });
    }
    fetchProfessions() {
        this.apiCall.fetchProfessions().subscribe((res) => {
            this.professions = res;
            console.log(res);
        });
    }
};
AddClientsComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-clients',
        template: __webpack_require__(/*! raw-loader!./add-clients.component.html */ "./node_modules/raw-loader/index.js!./src/app/clientsManage/add-clients/add-clients.component.html"),
        styles: [__webpack_require__(/*! ./add-clients.component.scss */ "./src/app/clientsManage/add-clients/add-clients.component.scss")]
    })
], AddClientsComponent);



/***/ }),

/***/ "./src/app/clientsManage/bulkprofile-create/bulkprofile-create.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/clientsManage/bulkprofile-create/bulkprofile-create.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input#city {\n  margin-top: 0%;\n  margin-bottom: 4%;\n}\n\nbutton.my-4.btn.btn-info.btn-block {\n  margin-left: 0%;\n}\n\n.medias.text-center.border.border-light.p-5 {\n  width: 50%;\n  margin-left: 25%;\n  margin-top: 2%;\n}\n\nh3 {\n  background-color: #0000FF;\n  color: white;\n  font-size: x-large;\n  text-align: center;\n}\n\n@media screen and (max-width: 1060px) {\n  .medias.mymedia.text-center.border.border-light.p-5 {\n    width: 100%;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50c01hbmFnZS9idWxrcHJvZmlsZS1jcmVhdGUvRjpcXGdpdCBodWJcXEFkbWlucGFubmVsVG9NYW5hZ2VUZWFtXFxGcm9udGVuZC9zcmNcXGFwcFxcY2xpZW50c01hbmFnZVxcYnVsa3Byb2ZpbGUtY3JlYXRlXFxidWxrcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHNNYW5hZ2UvYnVsa3Byb2ZpbGUtY3JlYXRlL2J1bGtwcm9maWxlLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENBO0VBRUUseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBRUU7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzTWFuYWdlL2J1bGtwcm9maWxlLWNyZWF0ZS9idWxrcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCNjaXR5IHtcclxuICBtYXJnaW4tdG9wOiAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA0JTtcclxufVxyXG5cclxuYnV0dG9uLm15LTQuYnRuLmJ0bi1pbmZvLmJ0bi1ibG9jayB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAlO1xyXG59XHJcblxyXG4ubWVkaWFzLnRleHQtY2VudGVyLmJvcmRlci5ib3JkZXItbGlnaHQucC01IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgbWFyZ2luLXRvcDoyJVxyXG59XHJcbmgzIHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBGRjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpe1xyXG5cclxuICAubWVkaWFzLm15bWVkaWEudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgfVxyXG59XHJcbiIsImlucHV0I2NpdHkge1xuICBtYXJnaW4tdG9wOiAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG59XG5cbmJ1dHRvbi5teS00LmJ0bi5idG4taW5mby5idG4tYmxvY2sge1xuICBtYXJnaW4tbGVmdDogMCU7XG59XG5cbi5tZWRpYXMudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuaDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMEZGO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpIHtcbiAgLm1lZGlhcy5teW1lZGlhLnRleHQtY2VudGVyLmJvcmRlci5ib3JkZXItbGlnaHQucC01IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/clientsManage/bulkprofile-create/bulkprofile-create.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/clientsManage/bulkprofile-create/bulkprofile-create.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BulkprofileCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkprofileCreateComponent", function() { return BulkprofileCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let BulkprofileCreateComponent = class BulkprofileCreateComponent {
    constructor(apiCall, router) {
        this.apiCall = apiCall;
        this.router = router;
    }
    ngOnInit() {
        console.log(this.filteredJsonData);
    }
    onFileChange(ev) {
        let workBook;
        let jsonData;
        const reader = new FileReader();
        const file = ev.target.files[0];
        reader.onload = () => {
            const data = reader.result;
            workBook = xlsx__WEBPACK_IMPORTED_MODULE_3__["read"](data, { type: 'binary' });
            jsonData = workBook.SheetNames.reduce((initial, name) => {
                const sheet = workBook.Sheets[name];
                initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].sheet_to_json(sheet);
                return initial;
            }, {});
            if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(jsonData.data)) {
                this.filteredJsonData = jsonData.data;
                console.log(this.filteredJsonData);
            }
        };
        reader.readAsBinaryString(file);
    }
    importdata() {
        const bulkData = { formdata: this.filteredJsonData };
        console.log(bulkData);
        this.apiCall.createbulkcontacts(bulkData).subscribe((res) => {
            alert(res.message);
            this.router.navigate(['home']);
        });
    }
};
BulkprofileCreateComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_4__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
BulkprofileCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bulkprofile-create',
        template: __webpack_require__(/*! raw-loader!./bulkprofile-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/clientsManage/bulkprofile-create/bulkprofile-create.component.html"),
        styles: [__webpack_require__(/*! ./bulkprofile-create.component.scss */ "./src/app/clientsManage/bulkprofile-create/bulkprofile-create.component.scss")]
    })
], BulkprofileCreateComponent);



/***/ }),

/***/ "./src/app/clientsManage/client/client.component.scss":
/*!************************************************************!*\
  !*** ./src/app/clientsManage/client/client.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHNNYW5hZ2UvY2xpZW50L2NsaWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/clientsManage/client/client.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/clientsManage/client/client.component.ts ***!
  \**********************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClientComponent = class ClientComponent {
    constructor() { }
    ngOnInit() {
    }
};
ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client',
        template: __webpack_require__(/*! raw-loader!./client.component.html */ "./node_modules/raw-loader/index.js!./src/app/clientsManage/client/client.component.html"),
        styles: [__webpack_require__(/*! ./client.component.scss */ "./src/app/clientsManage/client/client.component.scss")]
    })
], ClientComponent);



/***/ }),

/***/ "./src/app/clientsManage/edit-clients/edit-clients.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/clientsManage/edit-clients/edit-clients.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input#city {\n  margin-top: 0%;\n  margin-bottom: 4%;\n}\n\nbutton.my-4.btn.btn-info.btn-block {\n  margin-left: 0%;\n}\n\n.medias.text-center.border.border-light.p-5 {\n  width: 60%;\n  margin-left: 25%;\n}\n\n@media screen and (max-width: 1060px) {\n  .medias.mymedia.text-center.border.border-light.p-5 {\n    width: 100%;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50c01hbmFnZS9lZGl0LWNsaWVudHMvRjpcXGdpdCBodWJcXEFkbWlucGFubmVsVG9NYW5hZ2VUZWFtXFxGcm9udGVuZC9zcmNcXGFwcFxcY2xpZW50c01hbmFnZVxcZWRpdC1jbGllbnRzXFxlZGl0LWNsaWVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHNNYW5hZ2UvZWRpdC1jbGllbnRzL2VkaXQtY2xpZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0EsVUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFFRTtJQUNFLFdBQUE7SUFDQSxlQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHNNYW5hZ2UvZWRpdC1jbGllbnRzL2VkaXQtY2xpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0I2NpdHkge1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG59XHJcblxyXG5idXR0b24ubXktNC5idG4uYnRuLWluZm8uYnRuLWJsb2NrIHtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbn1cclxuXHJcbi5tZWRpYXMudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xyXG53aWR0aDo2MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpe1xyXG5cclxuICAubWVkaWFzLm15bWVkaWEudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgfVxyXG59XHJcbiIsImlucHV0I2NpdHkge1xuICBtYXJnaW4tdG9wOiAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG59XG5cbmJ1dHRvbi5teS00LmJ0bi5idG4taW5mby5idG4tYmxvY2sge1xuICBtYXJnaW4tbGVmdDogMCU7XG59XG5cbi5tZWRpYXMudGV4dC1jZW50ZXIuYm9yZGVyLmJvcmRlci1saWdodC5wLTUge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpIHtcbiAgLm1lZGlhcy5teW1lZGlhLnRleHQtY2VudGVyLmJvcmRlci5ib3JkZXItbGlnaHQucC01IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/clientsManage/edit-clients/edit-clients.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/clientsManage/edit-clients/edit-clients.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClientsComponent", function() { return EditClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");




let EditClientsComponent = class EditClientsComponent {
    constructor(route, router, apiCall) {
        this.route = route;
        this.router = router;
        this.apiCall = apiCall;
    }
    ngOnInit() {
        this.client_id = this.route.snapshot.paramMap.get('client_id');
        this.getuserDetails();
        console.log(this.userdata);
    }
    updateclientData(userData) {
        const yes = confirm('Are you sure want to update?');
        if (yes) {
            userData.client_id = this.client_id;
            const data = userData;
            this.apiCall.updateclientData(data).subscribe((res) => {
                alert(res.message);
                if (res) {
                    this.sendSMS();
                    this.activationEmail();
                    this.router.navigate(['/client/viewclient']);
                }
            });
        }
    }
    getuserDetails() {
        const data = { client_id: this.client_id };
        this.apiCall.getuserDetails(data).subscribe((res) => {
            this.userdata = res.data;
        });
    }
    sendSMS() {
        const data = { mobile: this.userdata[0].user_mobile_number, message: 'Thank you for Registering to Nutan App.How to use: https://bit.ly/3bH0g1u Any help: whatsaap.me/918527317659 Connect us on for updates: facebook.com/nutanteksolutions/' };
        this.apiCall.sendSMS(data).subscribe((res) => {
        });
    }
    activationEmail() {
        const data = { email: this.userdata[0].user_email };
        this.apiCall.activationEmail(data).subscribe((res) => {
        });
    }
};
EditClientsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] }
];
EditClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-clients',
        template: __webpack_require__(/*! raw-loader!./edit-clients.component.html */ "./node_modules/raw-loader/index.js!./src/app/clientsManage/edit-clients/edit-clients.component.html"),
        styles: [__webpack_require__(/*! ./edit-clients.component.scss */ "./src/app/clientsManage/edit-clients/edit-clients.component.scss")]
    })
], EditClientsComponent);



/***/ }),

/***/ "./src/app/clientsManage/sendbulksms/sendbulksms.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/clientsManage/sendbulksms/sendbulksms.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin-left: 25%;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50c01hbmFnZS9zZW5kYnVsa3Ntcy9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxjbGllbnRzTWFuYWdlXFxzZW5kYnVsa3Ntc1xcc2VuZGJ1bGtzbXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHNNYW5hZ2Uvc2VuZGJ1bGtzbXMvc2VuZGJ1bGtzbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHNNYW5hZ2Uvc2VuZGJ1bGtzbXMvc2VuZGJ1bGtzbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuIiwiZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIHdpZHRoOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/clientsManage/sendbulksms/sendbulksms.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/clientsManage/sendbulksms/sendbulksms.component.ts ***!
  \********************************************************************/
/*! exports provided: SendbulksmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendbulksmsComponent", function() { return SendbulksmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");




let SendbulksmsComponent = class SendbulksmsComponent {
    constructor(apiCall, router, route) {
        this.apiCall = apiCall;
        this.router = router;
        this.route = route;
        this.boolean = false;
    }
    ngOnInit() {
        this.getMyContacts();
    }
    sendsms(data) {
        data.mobilenumbers = this.mobilenumbers;
        this.apiCall.sendPushnotifySMS(data).subscribe((res) => {
            console.log(res);
            if (res.type == 'success') {
                alert('sms sent successfully');
                this.router.navigate(['/home']);
            }
        });
    }
    getMyContacts() {
        this.apiCall.client_idArray.subscribe((res = []) => {
            this.mobilenumbers = res.map(el => Number(el.user_mobile_number));
            console.log(this.mobilenumbers);
        });
    }
};
SendbulksmsComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SendbulksmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sendbulksms',
        template: __webpack_require__(/*! raw-loader!./sendbulksms.component.html */ "./node_modules/raw-loader/index.js!./src/app/clientsManage/sendbulksms/sendbulksms.component.html"),
        styles: [__webpack_require__(/*! ./sendbulksms.component.scss */ "./src/app/clientsManage/sendbulksms/sendbulksms.component.scss")]
    })
], SendbulksmsComponent);



/***/ }),

/***/ "./src/app/clientsManage/sendsmstoclients/sendsmstoclients.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/clientsManage/sendsmstoclients/sendsmstoclients.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin-left: 25%;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50c01hbmFnZS9zZW5kc21zdG9jbGllbnRzL0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXGNsaWVudHNNYW5hZ2VcXHNlbmRzbXN0b2NsaWVudHNcXHNlbmRzbXN0b2NsaWVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHNNYW5hZ2Uvc2VuZHNtc3RvY2xpZW50cy9zZW5kc21zdG9jbGllbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzTWFuYWdlL3NlbmRzbXN0b2NsaWVudHMvc2VuZHNtc3RvY2xpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4iLCJmb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/clientsManage/sendsmstoclients/sendsmstoclients.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/clientsManage/sendsmstoclients/sendsmstoclients.component.ts ***!
  \******************************************************************************/
/*! exports provided: SendsmstoclientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendsmstoclientsComponent", function() { return SendsmstoclientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");




let SendsmstoclientsComponent = class SendsmstoclientsComponent {
    constructor(apiCall, router, route) {
        this.apiCall = apiCall;
        this.router = router;
        this.route = route;
        this.boolean = false;
    }
    ngOnInit() {
        this.mobilenumbers = this.route.snapshot.paramMap.get('mobilenumber');
    }
    sendsms(data) {
        data.mobilenumbers = this.mobilenumbers;
        this.apiCall.sendSingleSMS(data).subscribe((res) => {
            console.log(res);
            if (res.type == 'success') {
                alert('sms sent successfully');
                this.router.navigate(['/home']);
            }
        });
    }
};
SendsmstoclientsComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SendsmstoclientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sendsmstoclients',
        template: __webpack_require__(/*! raw-loader!./sendsmstoclients.component.html */ "./node_modules/raw-loader/index.js!./src/app/clientsManage/sendsmstoclients/sendsmstoclients.component.html"),
        styles: [__webpack_require__(/*! ./sendsmstoclients.component.scss */ "./src/app/clientsManage/sendsmstoclients/sendsmstoclients.component.scss")]
    })
], SendsmstoclientsComponent);



/***/ }),

/***/ "./src/app/clientsManage/view-detail/view-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/clientsManage/view-detail/view-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item-fixed {\n  width: auto;\n}\n\n.list-group-left {\n  text-align: left;\n  width: 40%;\n  font-weight: bold;\n  display: inline-block;\n}\n\n.list-group-right {\n  width: 50%;\n  display: inline-block;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n  width: 10%;\n}\n\nimg.rounded-circle {\n  margin-left: 45%;\n  margin-top: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50c01hbmFnZS92aWV3LWRldGFpbC9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxjbGllbnRzTWFuYWdlXFx2aWV3LWRldGFpbFxcdmlldy1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHNNYW5hZ2Uvdmlldy1kZXRhaWwvdmlldy1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQUE7RUFFRSxVQUFBO0VBQ0EscUJBQUE7QUNFRjs7QURFQTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzTWFuYWdlL3ZpZXctZGV0YWlsL3ZpZXctZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAtaXRlbS1maXhlZCB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuLmxpc3QtZ3JvdXAtbGVmdCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogNDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubGlzdC1ncm91cC1yaWdodCB7XHJcblxyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cclxuLnJvdW5kZWQtY2lyY2xlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCUhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuaW1nLnJvdW5kZWQtY2lyY2xlIHtcclxuICBtYXJnaW4tbGVmdDogNDUlO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG5cclxuIiwiLmxpc3QtZ3JvdXAtaXRlbS1maXhlZCB7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ubGlzdC1ncm91cC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDQwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmxpc3QtZ3JvdXAtcmlnaHQge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yb3VuZGVkLWNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAlO1xufVxuXG5pbWcucm91bmRlZC1jaXJjbGUge1xuICBtYXJnaW4tbGVmdDogNDUlO1xuICBtYXJnaW4tdG9wOiAyJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/clientsManage/view-detail/view-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/clientsManage/view-detail/view-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDetailComponent", function() { return ViewDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ViewDetailComponent = class ViewDetailComponent {
    constructor(apiCall, route) {
        this.apiCall = apiCall;
        this.route = route;
    }
    ngOnInit() {
        this.client_id = this.route.snapshot.paramMap.get('client_id');
        console.log(this.client_id);
        console.log(this.personList);
        this.getuserDetails();
    }
    getuserDetails() {
        const data = { client_id: this.client_id };
        this.apiCall.getuserDetails(data).subscribe((res) => {
            console.log(res);
            this.personList = res.data[0];
            console.log(this.personList);
        });
    }
};
ViewDetailComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ViewDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-detail',
        template: __webpack_require__(/*! raw-loader!./view-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/clientsManage/view-detail/view-detail.component.html"),
        styles: [__webpack_require__(/*! ./view-detail.component.scss */ "./src/app/clientsManage/view-detail/view-detail.component.scss")]
    })
], ViewDetailComponent);



/***/ }),

/***/ "./src/app/clientsManage/viewclients/filter.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/clientsManage/viewclients/filter.pipe.ts ***!
  \**********************************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(items, filter, defaultFilter) {
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            let filterKeys = Object.keys(filter);
            if (defaultFilter) {
                return items.filter(item => filterKeys.reduce((x, keyName) => (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
            }
            else {
                return items.filter(item => {
                    return filterKeys.some((keyName) => {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                    });
                });
            }
        }
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/clientsManage/viewclients/viewclients.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/clientsManage/viewclients/viewclients.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\ntd, th {\n  width: 25%;\n}\n\nimg.xlicon {\n  width: 30%;\n  margin-left: 60%;\n  margin-top: -11%;\n  margin-bottom: -4%;\n  cursor: pointer;\n}\n\n.col-md-6.mubutn {\n  margin-bottom: 0%;\n  margin-top: -3.5%;\n  margin-left: 52%;\n}\n\ninput {\n  margin-top: 7%;\n  width: 30%;\n}\n\nselect.browser-default.custom-select.filter {\n  width: 25%;\n  margin-left: 1%;\n}\n\nbutton.mat-stroked-button.mat-button-base.mat-primary {\n  margin-left: 1%;\n}\n\nh6.errorMessage.ng-star-inserted {\n  text-align: center;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50c01hbmFnZS92aWV3Y2xpZW50cy9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxjbGllbnRzTWFuYWdlXFx2aWV3Y2xpZW50c1xcdmlld2NsaWVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHNNYW5hZ2Uvdmlld2NsaWVudHMvdmlld2NsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBQVUsZUFBQTtBQ0dWOztBREZBO0VBQ0UsVUFBQTtBQ0tGOztBREhBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNNRjs7QURKQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ09GOztBREpBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNPRjs7QURKQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDT0Y7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHNNYW5hZ2Uvdmlld2NsaWVudHMvdmlld2NsaWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wb2ludGVyIHtjdXJzb3I6IHBvaW50ZXI7fVxyXG50ZCwgdGgge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuaW1nLnhsaWNvbiB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXJnaW4tbGVmdDogNjAlO1xyXG4gIG1hcmdpbi10b3A6IC0xMSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTQlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29sLW1kLTYubXVidXRue1xyXG4gIG1hcmdpbi1ib3R0b206IDAlO1xyXG4gIG1hcmdpbi10b3A6IC0zLjUlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MiU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBtYXJnaW4tdG9wOiA3JTtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG5zZWxlY3QuYnJvd3Nlci1kZWZhdWx0LmN1c3RvbS1zZWxlY3QuZmlsdGVyIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG5cclxuXHJcblxyXG5idXR0b24ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1idXR0b24tYmFzZS5tYXQtcHJpbWFyeSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcbmg2LmVycm9yTWVzc2FnZS5uZy1zdGFyLWluc2VydGVkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGQsIHRoIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuaW1nLnhsaWNvbiB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi1sZWZ0OiA2MCU7XG4gIG1hcmdpbi10b3A6IC0xMSU7XG4gIG1hcmdpbi1ib3R0b206IC00JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29sLW1kLTYubXVidXRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMCU7XG4gIG1hcmdpbi10b3A6IC0zLjUlO1xuICBtYXJnaW4tbGVmdDogNTIlO1xufVxuXG5pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDclO1xuICB3aWR0aDogMzAlO1xufVxuXG5zZWxlY3QuYnJvd3Nlci1kZWZhdWx0LmN1c3RvbS1zZWxlY3QuZmlsdGVyIHtcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luLWxlZnQ6IDElO1xufVxuXG5idXR0b24ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1idXR0b24tYmFzZS5tYXQtcHJpbWFyeSB7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbn1cblxuaDYuZXJyb3JNZXNzYWdlLm5nLXN0YXItaW5zZXJ0ZWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/clientsManage/viewclients/viewclients.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/clientsManage/viewclients/viewclients.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewclientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewclientsComponent", function() { return ViewclientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../apiCalls/excel.service */ "./src/app/apiCalls/excel.service.ts");





let ViewclientsComponent = class ViewclientsComponent {
    constructor(apiCall, excelservice, router) {
        this.apiCall = apiCall;
        this.excelservice = excelservice;
        this.router = router;
        this.awaitingPersonList = [];
        this.selectedToppings = [];
        this.allToppings = false;
        this.curDate = new Date();
    }
    ngOnInit() {
        this.role = this.apiCall.getRole();
        this.getClients();
    }
    updateList(id, property, event) {
        const editField = event.target.textContent;
        this.personList[id][property] = editField;
    }
    remove(id) {
        this.awaitingPersonList.push(this.personList[id]);
        this.personList.splice(id, 1);
    }
    add() {
        if (this.awaitingPersonList.length > 0) {
            const person = this.awaitingPersonList[0];
            this.personList.push(person);
            this.awaitingPersonList.splice(0, 1);
        }
    }
    changeValue(id, property, event) {
        this.editField = event.target.textContent;
    }
    getClients() {
        this.apiCall.getClients().subscribe((res) => {
            console.log(res);
            this.personList = res.data;
            console.log(this.personList);
        });
    }
    deleteclient(client_id, id) {
        console.log(id);
        const yes = confirm('Are you sure want to Delete?');
        if (yes) {
            const data = { client_id: client_id };
            this.apiCall.deleteclient(data).subscribe((res) => {
                console.log(res);
                alert('User Deleted Sucessfully');
                this.remove(id);
                this.getClients();
            });
        }
    }
    exportAsXLSX() {
        this.excelservice.exportAsExcelFile(this.personList, 'sample');
    }
    updatestatus(person) {
        const yes = confirm('Are you  sure want to change the status?');
        if (yes) {
            const data = { account_status: person.account_status, client_id: person.client_id, user_regn_channel: person.user_regn_channel };
            console.log(data);
            this.apiCall.updateclientStatus(data).subscribe((res) => {
                if (res.status == 'true') {
                    alert(res.message);
                }
                else if (res.status == 'false') {
                    alert(res.message);
                }
            });
        }
    }
    getclientsbyfilter(value) {
        console.log(value);
        const data = { account_status: value };
        this.apiCall.getclientsbyfilter(data).subscribe((res) => {
            this.personList = res.data;
            if (res.status == "false") {
                this.errorMessage = res.message;
            }
            if (value === 'All') {
                this.ngOnInit();
            }
        });
    }
    selectAllToppings(checked, toppings) {
        this.selectedToppings = toppings;
        if (checked) {
            this.allToppings = true;
            this.selectedclients = this.selectedToppings;
        }
        else {
            console.log(this.selectedToppings);
            this.allToppings = false;
        }
    }
    selectNewTopping(checked, topping) {
        if (checked) {
            this.selectedToppings.push(topping);
            this.selectedclients = this.selectedToppings;
        }
        else {
            this.selectedToppings = this.selectedToppings.filter(top => top.client_id !== topping.client_id);
        }
    }
    selectclients() {
        const notify = confirm("Are you sure you want to send Bulksms");
        if (notify) {
            this.apiCall.getclientids(this.selectedclients);
            this.router.navigate(['/client/sendbulksms']);
        }
    }
};
ViewclientsComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: _apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ViewclientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewclients',
        template: __webpack_require__(/*! raw-loader!./viewclients.component.html */ "./node_modules/raw-loader/index.js!./src/app/clientsManage/viewclients/viewclients.component.html"),
        styles: [__webpack_require__(/*! ./viewclients.component.scss */ "./src/app/clientsManage/viewclients/viewclients.component.scss")]
    })
], ViewclientsComponent);



/***/ }),

/***/ "./src/app/dwnldapksendsms/dwnldapksendsms.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dwnldapksendsms/dwnldapksendsms.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input#city {\n  margin-top: 0%;\n  margin-bottom: 4%;\n}\n\nbutton.my-4.btn.btn-info.btn-block {\n  margin-left: 0%;\n}\n\n.medias.text-center.border.border-light.p-5 {\n  width: 50%;\n  margin-left: 25%;\n  margin-top: 2%;\n}\n\nh3 {\n  background-color: #0000FF;\n  color: white;\n  font-size: x-large;\n  text-align: center;\n}\n\n@media screen and (max-width: 1060px) {\n  .medias.mymedia.text-center.border.border-light.p-5 {\n    width: 100%;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHdubGRhcGtzZW5kc21zL0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXGR3bmxkYXBrc2VuZHNtc1xcZHdubGRhcGtzZW5kc21zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kd25sZGFwa3NlbmRzbXMvZHdubGRhcGtzZW5kc21zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFFRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FERUE7RUFFRTtJQUNFLFdBQUE7SUFDQSxlQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2R3bmxkYXBrc2VuZHNtcy9kd25sZGFwa3NlbmRzbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCNjaXR5IHtcclxuICBtYXJnaW4tdG9wOiAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA0JTtcclxufVxyXG5cclxuYnV0dG9uLm15LTQuYnRuLmJ0bi1pbmZvLmJ0bi1ibG9jayB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAlO1xyXG59XHJcblxyXG4ubWVkaWFzLnRleHQtY2VudGVyLmJvcmRlci5ib3JkZXItbGlnaHQucC01IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgbWFyZ2luLXRvcDoyJVxyXG59XHJcblxyXG5oMyB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwRkY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA2MHB4KXtcclxuXHJcbiAgLm1lZGlhcy5teW1lZGlhLnRleHQtY2VudGVyLmJvcmRlci5ib3JkZXItbGlnaHQucC01IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gIH1cclxufVxyXG4iLCJpbnB1dCNjaXR5IHtcbiAgbWFyZ2luLXRvcDogMCU7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xufVxuXG5idXR0b24ubXktNC5idG4uYnRuLWluZm8uYnRuLWJsb2NrIHtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xufVxuXG4ubWVkaWFzLnRleHQtY2VudGVyLmJvcmRlci5ib3JkZXItbGlnaHQucC01IHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbmgzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBGRjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA2MHB4KSB7XG4gIC5tZWRpYXMubXltZWRpYS50ZXh0LWNlbnRlci5ib3JkZXIuYm9yZGVyLWxpZ2h0LnAtNSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/dwnldapksendsms/dwnldapksendsms.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dwnldapksendsms/dwnldapksendsms.component.ts ***!
  \**************************************************************/
/*! exports provided: DwnldapksendsmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DwnldapksendsmsComponent", function() { return DwnldapksendsmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");




let DwnldapksendsmsComponent = class DwnldapksendsmsComponent {
    constructor(apiCall, router, route) {
        this.apiCall = apiCall;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.mobilenumber = this.route.snapshot.paramMap.get('mobilenumber');
    }
    share(data) {
        console.log(data);
        const message = data.message;
        // Opening URL
        window.open('https://api.whatsapp.com/send?text=' + message + '&phone=' + '+91' + this.mobilenumber);
    }
};
DwnldapksendsmsComponent.ctorParameters = () => [
    { type: _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DwnldapksendsmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dwnldapksendsms',
        template: __webpack_require__(/*! raw-loader!./dwnldapksendsms.component.html */ "./node_modules/raw-loader/index.js!./src/app/dwnldapksendsms/dwnldapksendsms.component.html"),
        styles: [__webpack_require__(/*! ./dwnldapksendsms.component.scss */ "./src/app/dwnldapksendsms/dwnldapksendsms.component.scss")]
    })
], DwnldapksendsmsComponent);



/***/ }),

/***/ "./src/app/helpdesk/helpdesk/helpdesk.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/helpdesk/helpdesk/helpdesk.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHBkZXNrL2hlbHBkZXNrL2hlbHBkZXNrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/helpdesk/helpdesk/helpdesk.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/helpdesk/helpdesk/helpdesk.component.ts ***!
  \*********************************************************/
/*! exports provided: HelpdeskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskComponent", function() { return HelpdeskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelpdeskComponent = class HelpdeskComponent {
    constructor() { }
    ngOnInit() {
    }
};
HelpdeskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk',
        template: __webpack_require__(/*! raw-loader!./helpdesk.component.html */ "./node_modules/raw-loader/index.js!./src/app/helpdesk/helpdesk/helpdesk.component.html"),
        styles: [__webpack_require__(/*! ./helpdesk.component.scss */ "./src/app/helpdesk/helpdesk/helpdesk.component.scss")]
    })
], HelpdeskComponent);



/***/ }),

/***/ "./src/app/helpdesk/updateticket/updateticket.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/helpdesk/updateticket/updateticket.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHBkZXNrL3VwZGF0ZXRpY2tldC91cGRhdGV0aWNrZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/helpdesk/updateticket/updateticket.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/helpdesk/updateticket/updateticket.component.ts ***!
  \*****************************************************************/
/*! exports provided: UpdateticketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateticketComponent", function() { return UpdateticketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UpdateticketComponent = class UpdateticketComponent {
    constructor() { }
    ngOnInit() {
    }
};
UpdateticketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-updateticket',
        template: __webpack_require__(/*! raw-loader!./updateticket.component.html */ "./node_modules/raw-loader/index.js!./src/app/helpdesk/updateticket/updateticket.component.html"),
        styles: [__webpack_require__(/*! ./updateticket.component.scss */ "./src/app/helpdesk/updateticket/updateticket.component.scss")]
    })
], UpdateticketComponent);



/***/ }),

/***/ "./src/app/helpdesk/viewhelpdesk/viewhelpdesk.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/helpdesk/viewhelpdesk/viewhelpdesk.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  display: block;\n  font: 1rem \"Fira Sans\", sans-serif;\n}\n\ninput,\nlabel {\n  margin: 0.4rem 0;\n}\n\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\nimg.xlicon {\n  width: 35%;\n  margin-left: 28%;\n  margin-top: -3%;\n  margin-bottom: -6%;\n  cursor: pointer;\n}\n\n.col-md-4 {\n  margin-bottom: 0%;\n  margin-top: -3%;\n  margin-left: 74%;\n}\n\n.col-md-2.mubutn {\n  margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscGRlc2svdmlld2hlbHBkZXNrL0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXGhlbHBkZXNrXFx2aWV3aGVscGRlc2tcXHZpZXdoZWxwZGVzay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVscGRlc2svdmlld2hlbHBkZXNrL3ZpZXdoZWxwZGVzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtBQ0FGOztBREdBOztFQUVFLGdCQUFBO0FDQUY7O0FESUE7RUFDRSxXQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtBQ0RGOztBREdBO0VBRUUsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURLQTtFQUNFLGNBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2hlbHBkZXNrL3ZpZXdoZWxwZGVzay92aWV3aGVscGRlc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQ6IDFyZW0gJ0ZpcmEgU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlucHV0LFxyXG5sYWJlbCB7XHJcbiAgbWFyZ2luOiAuNHJlbSAwO1xyXG59XHJcblxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQsIHRoIHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcbmltZy54bGljb24ge1xyXG5cclxuICB3aWR0aDogMzUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyOCU7XHJcbiAgbWFyZ2luLXRvcDogLTMlO1xyXG4gIG1hcmdpbi1ib3R0b206IC02JTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbC1tZC00e1xyXG4gIG1hcmdpbi1ib3R0b206IDAlO1xyXG4gIG1hcmdpbi10b3A6IC0zJTtcclxuICBtYXJnaW4tbGVmdDogNzQlO1xyXG59XHJcblxyXG5cclxuXHJcbi5jb2wtbWQtMi5tdWJ1dG4ge1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcbiIsImxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQ6IDFyZW0gXCJGaXJhIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuaW5wdXQsXG5sYWJlbCB7XG4gIG1hcmdpbjogMC40cmVtIDA7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkLCB0aCB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbmltZy54bGljb24ge1xuICB3aWR0aDogMzUlO1xuICBtYXJnaW4tbGVmdDogMjglO1xuICBtYXJnaW4tdG9wOiAtMyU7XG4gIG1hcmdpbi1ib3R0b206IC02JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29sLW1kLTQge1xuICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgbWFyZ2luLXRvcDogLTMlO1xuICBtYXJnaW4tbGVmdDogNzQlO1xufVxuXG4uY29sLW1kLTIubXVidXRuIHtcbiAgbWFyZ2luLXRvcDogMyU7XG59Il19 */"

/***/ }),

/***/ "./src/app/helpdesk/viewhelpdesk/viewhelpdesk.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/helpdesk/viewhelpdesk/viewhelpdesk.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewhelpdeskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewhelpdeskComponent", function() { return ViewhelpdeskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/excel.service */ "./src/app/apiCalls/excel.service.ts");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");




let ViewhelpdeskComponent = class ViewhelpdeskComponent {
    constructor(excelservice, apiCall) {
        this.excelservice = excelservice;
        this.apiCall = apiCall;
    }
    ngOnInit() {
        this.gettickets();
    }
    exportAsXLSX() {
        this.excelservice.exportAsExcelFile(this.personList, 'sample');
    }
    gettickets() {
        this.apiCall.getAllTickets().subscribe((res) => {
            this.personList = res.data;
        });
    }
    getDataByQuery(data) {
        this.apiCall.getDataByQuery(data).subscribe((res) => {
            this.personList = res.data;
            this.message = res.message;
        });
    }
    updateticketstatus(data) {
        console.log(data);
        const userData = { query_id: data.query_id, status: data.status };
        this.apiCall.updateticketstatus(userData).subscribe((res) => {
            alert(res.message);
        });
    }
};
ViewhelpdeskComponent.ctorParameters = () => [
    { type: src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_2__["ExcelService"] },
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] }
];
ViewhelpdeskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewhelpdesk',
        template: __webpack_require__(/*! raw-loader!./viewhelpdesk.component.html */ "./node_modules/raw-loader/index.js!./src/app/helpdesk/viewhelpdesk/viewhelpdesk.component.html"),
        styles: [__webpack_require__(/*! ./viewhelpdesk.component.scss */ "./src/app/helpdesk/viewhelpdesk/viewhelpdesk.component.scss")]
    })
], ViewhelpdeskComponent);



/***/ }),

/***/ "./src/app/layouts/default/default.component.scss":
/*!********************************************************!*\
  !*** ./src/app/layouts/default/default.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer {\n  width: 350px;\n}\n\nmat-drawer-container {\n  height: 100%;\n}\n\nmat-drawer-content {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dHNcXGRlZmF1bHRcXGRlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dHMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cbm1hdC1kcmF3ZXIge1xuICB3aWR0aDogMzUwcHg7XG59XG5cbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1kcmF3ZXIge1xuICB3aWR0aDogMzUwcHg7XG59XG5cbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/layouts/default/default.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/default/default.component.ts ***!
  \******************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DefaultComponent = class DefaultComponent {
    constructor() {
        this.sideBarOpen = true;
    }
    ngOnInit() { }
    sideBarToggler() {
        this.sideBarOpen = !this.sideBarOpen;
    }
};
DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-default',
        template: __webpack_require__(/*! raw-loader!./default.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/default/default.component.html"),
        styles: [__webpack_require__(/*! ./default.component.scss */ "./src/app/layouts/default/default.component.scss")]
    })
], DefaultComponent);



/***/ }),

/***/ "./src/app/layouts/default/default.module.ts":
/*!***************************************************!*\
  !*** ./src/app/layouts/default/default.module.ts ***!
  \***************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/posts/posts.component */ "./src/app/modules/posts/posts.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_app_modules_dashboard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/dashboard.service */ "./src/app/modules/dashboard.service.ts");











let DefaultModule = class DefaultModule {
};
DefaultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"],
            src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
            src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]
        ],
        providers: [
            src_app_modules_dashboard_service__WEBPACK_IMPORTED_MODULE_10__["DashboardService"]
        ]
    })
], DefaultModule);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");












































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
        ],
        declarations: []
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/modules/dashboard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/dashboard.service.ts ***!
  \**********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardService = class DashboardService {
    constructor() { }
    bigChart() {
        return [{
                name: 'Asia',
                data: [502, 635, 809, 947, 1402, 3634, 5268]
            }, {
                name: 'Africa',
                data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
                name: 'Europe',
                data: [163, 203, 276, 408, 547, 729, 628]
            }, {
                name: 'America',
                data: [18, 31, 54, 156, 339, 818, 1201]
            }, {
                name: 'Oceania',
                data: [2, 2, 2, 6, 13, 30, 46]
            }];
    }
    cards() {
        return [71, 78, 39, 66];
    }
    pieChart() {
        return [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Sogou Explorer',
                y: 1.64
            }, {
                name: 'Opera',
                y: 1.6
            }, {
                name: 'QQ',
                y: 1.2
            }, {
                name: 'Other',
                y: 2.61
            }];
    }
};
DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DashboardService);



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border: 1px solid silver;\n}\n\nth {\n  border: 1px solid silver;\n}\n\ntd {\n  border: 1px solid silver;\n}\n\ntr.table-bgrnd {\n  background-color: darkblue;\n  color: white;\n}\n\n.h3, h3 {\n  background-color: darkblue;\n  width: 100%;\n  font-size: 1.75rem;\n  color: white;\n  padding: 1%;\n  margin-top: -1%;\n}\n\nth.crs {\n  width: 15%;\n}\n\ntd.mrs {\n  width: 30%;\n}\n\nh2 {\n  background-color: darkblue;\n  color: white;\n  padding: -3pxpx;\n  border-radius: 4px;\n}\n\ntd.drs {\n  width: 10%;\n}\n\ntable.title-1 {\n  width: 70%;\n  margin-top: 1%;\n  margin-left: 15%;\n}\n\nh5.text-bst {\n  margin-left: 25%;\n  background-color: gray;\n  color: white;\n  padding: 0.2%;\n  text-align: center;\n  width: 50%;\n  margin-top: 1%;\n  border-radius: 4px;\n}\n\nh5.tite-1 {\n  /* background-color: cadetblue; */\n  color: black;\n}\n\ntable.tble-2 {\n  width: 100%;\n}\n\nh5.cmmdate {\n  background-color: darkblue;\n  color: white;\n  padding: 1%;\n  width: 50%;\n  text-align: center;\n  margin-left: 26%;\n  margin-top: 3%;\n  padding: 10px;\n  border-radius: 4px;\n}\n\nh6.single {\n  background-color: #2980B9;\n  color: white;\n  padding: 1%;\n  text-align: center;\n  font-size: larger;\n  margin-top: 1%;\n  padding: 10px;\n  border-radius: 4px;\n}\n\nh6.polcy-1 {\n  margin-left: -2%;\n  margin-top: 6%;\n  background-color: cadetblue;\n  color: white;\n  width: 93%;\n  padding: 1%;\n  text-align: center;\n}\n\nh6.polcy-2 {\n  width: 93%;\n  margin-top: 6%;\n  background-color: cadetblue;\n  color: white;\n  padding: 1%;\n  text-align: center;\n}\n\n.card.card-stats {\n  margin-bottom: 6%;\n}\n\n.card-header.card-header-warning.card-header-icon {\n  background-color: darkorange;\n  color: white;\n}\n\n.card-header.card-header-success.card-header-icon {\n  color: white;\n  background-color: green;\n}\n\n.card-header.card-header-danger.card-header-icon {\n  color: white;\n  background-color: rebeccapurple;\n}\n\n.card-header.card-header-info.card-header-icon {\n  color: white;\n  background-color: lightseagreen;\n}\n\n.card.card-cascade.wider.reverse {\n  margin-bottom: 2%;\n}\n\n.agewnt {\n  float: right;\n  margin-top: -45%;\n}\n\n.weak {\n  margin-left: 40%;\n}\n\nul.list-group.list-group-horizontal-md {\n  list-style: none;\n}\n\n@media screen and (max-width: 1060px) {\n  .wiedsa.smscredit.meida {\n    margin-top: -26%;\n  }\n\n  .wiedsa.credits {\n    float: right;\n    margin-top: -32%;\n  }\n\n  /* .wiedsa.balance {\n      margin-top: -37%;\n  } */\n  .chartwidth.media {\n    width: 100%;\n    margin-left: 1%;\n    margin-bottom: 5%;\n  }\n\n  h6.amount.media {\n    width: 45%;\n    margin-left: 27%;\n  }\n\n  h5.text-bst.media {\n    width: 100%;\n    margin-left: 1%;\n    margin-top: 5%;\n  }\n\n  h5.txt-1.medis-1 {\n    width: 100%;\n  }\n}\n\nh4.pack {\n  text-align: center;\n  color: blue;\n}\n\n.circle_container {\n  width: 128px;\n  height: 128px;\n  margin: 0;\n  padding: 0;\n  /*\tborder : 1px solid red; */\n}\n\n/* Circle Main draws the actual circle */\n\n.circle_main {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 2px solid blue;\n  /* can alter thickness and colour of circle on this line */\n  margin: 0;\n  padding: 0;\n}\n\n/* Circle Text Container - constrains text area to within the circle */\n\n.circle_text_container {\n  /* area constraints */\n  width: 70%;\n  height: 70%;\n  max-width: 70%;\n  max-height: 70%;\n  margin: 0;\n  padding: 0;\n  /* some position nudging to center the text area */\n  position: relative;\n  left: 15%;\n  top: 15%;\n  /* preserve 3d prevents blurring sometimes caused by the text centering in the next class */\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  /*border : 1px solid green;*/\n}\n\n/* Circle Text - the appearance of the text within the circle plus vertical centering */\n\n.circle_text {\n  /* change font/size/etc here */\n  font: 20px \"Tahoma\", Arial, Serif;\n  text-align: center;\n  /* vertical centering technique */\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.col-md-3.starter {\n  margin-left: 5%;\n}\n\n@media screen and (max-width: 1060px) {\n  h5.mediA-2 {\n    margin-bottom: 20%;\n  }\n\n  h2.ng-star-inserted.finyear {\n    width: 100%;\n    padding: -7%;\n    font-size: 150%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvRjpcXGdpdCBodWJcXEFkbWlucGFubmVsVG9NYW5hZ2VUZWFtXFxGcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDQTs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURDQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREdBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FESUE7RUFDRSxpQ0FBQTtFQUNBLFlBQUE7QUNERjs7QURHQTtFQUVFLFdBQUE7QUNERjs7QURHQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFFQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUVFLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0FDSUY7O0FERkE7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7QUNLRjs7QURGQTtFQUNFLGlCQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURIQTtFQUNFLGdCQUFBO0FDTUY7O0FESEE7RUFDRSxnQkFBQTtBQ01GOztBREpBO0VBQ0U7SUFDRSxnQkFBQTtFQ09GOztFRExBO0lBQ0UsWUFBQTtJQUNBLGdCQUFBO0VDUUY7O0VETkE7O0tBQUE7RUFHRjtJQUdFLFdBQUE7SUFDQSxlQUFBO0lBQ0YsaUJBQUE7RUNPRTs7RURKRjtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQ09BOztFREpGO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VDT0E7O0VESkY7SUFDRSxXQUFBO0VDT0E7QUFDRjs7QURIQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0tGOztBREZBO0VBRUMsWUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNELDRCQUFBO0FDSUE7O0FEREEsd0NBQUE7O0FBQ0E7RUFFQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFBeUIsMERBQUE7RUFDekIsU0FBQTtFQUNBLFVBQUE7QUNJRDs7QUREQSxzRUFBQTs7QUFDQTtFQUVDLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEsa0RBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsMkZBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBRUEsNEJBQUE7QUNBRDs7QURHQSx1RkFBQTs7QUFDQTtFQUVDLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUVBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0ZEOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBREdBO0VBQ0U7SUFDRSxrQkFBQTtFQ0FGOztFREVBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xufVxuXG50aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcbn1cblxudGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXI7XG59XG5cbnRyLnRhYmxlLWJncm5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmgzLCBoMyB7XG5iYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbndpZHRoOiAxMDAlO1xuZm9udC1zaXplOiAxLjc1cmVtO1xuY29sb3I6IHdoaXRlO1xucGFkZGluZzogMSU7XG5tYXJnaW4tdG9wOiAtMSU7XG59XG5cbnRoLmNycyB7XG4gIHdpZHRoOiAxNSU7XG59XG5cbnRkLm1ycyB7XG4gIHdpZHRoOiAzMCU7XG59XG5oMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IC0zcHhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5cbnRkLmRycyB7XG4gIHdpZHRoOiAxMCU7XG59XG5cblxudGFibGUudGl0bGUtMSB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tbGVmdDogMTUlO1xufVxuaDUudGV4dC1ic3Qge1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuMiU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuXG5cbmg1LnRpdGUtMSB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTsgKi9cbiAgY29sb3I6YmxhY2s7XG59XG50YWJsZS50YmxlLTIge1xuXG4gIHdpZHRoOiAxMDAlO1xufVxuaDUuY21tZGF0ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjpkYXJrYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxJTtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMjYlO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbmg2LnNpbmdsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwQjk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIG1hcmdpbi10b3A6MSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbmg2LnBvbGN5LTEge1xuICBtYXJnaW4tbGVmdDogLTIlO1xuICBtYXJnaW4tdG9wOiA2JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA5MyU7XG4gIHBhZGRpbmc6IDElO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oNi5wb2xjeS0yIHtcbiAgd2lkdGg6IDkzJTtcbiAgbWFyZ2luLXRvcDogNiU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDElO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkLmNhcmQtc3RhdHMge1xuXG4gIG1hcmdpbi1ib3R0b206IDYlO1xufVxuLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLXdhcm5pbmcuY2FyZC1oZWFkZXItaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmFuZ2U7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci1zdWNjZXNzLmNhcmQtaGVhZGVyLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWRhbmdlci5jYXJkLWhlYWRlci1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlO1xufVxuLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWluZm8uY2FyZC1oZWFkZXItaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcbn1cblxuLmNhcmQuY2FyZC1jYXNjYWRlLndpZGVyLnJldmVyc2Uge1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cbi5hZ2V3bnQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC00NSU7XG59XG5cbi53ZWFrIHtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbn1cblxudWwubGlzdC1ncm91cC5saXN0LWdyb3VwLWhvcml6b250YWwtbWQge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA2MHB4KXtcbiAgLndpZWRzYS5zbXNjcmVkaXQubWVpZGEge1xuICAgIG1hcmdpbi10b3A6IC0yNiU7XG59XG4gIC53aWVkc2EuY3JlZGl0cyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IC0zMiU7XG4gIH1cbiAgLyogLndpZWRzYS5iYWxhbmNlIHtcbiAgICBtYXJnaW4tdG9wOiAtMzclO1xufSAqL1xuLmNoYXJ0d2lkdGgubWVkaWF7XG5cblxuICB3aWR0aDoxMDAlO1xuICBtYXJnaW4tbGVmdDogMSU7XG5tYXJnaW4tYm90dG9tOiA1JTtcblxufVxuaDYuYW1vdW50Lm1lZGlhIHtcbiAgd2lkdGg6IDQ1JTtcbiAgbWFyZ2luLWxlZnQ6IDI3JTtcbn1cblxuaDUudGV4dC1ic3QubWVkaWEge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuaDUudHh0LTEubWVkaXMtMSB7XG4gIHdpZHRoOiAxMDAlO1xufVxufVxuXG5cbmg0LnBhY2sge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uY2lyY2xlX2NvbnRhaW5lclxue1xuXHR3aWR0aCA6IDEyOHB4O1xuXHRoZWlnaHQgOiAxMjhweDtcblx0bWFyZ2luIDogMDtcblx0cGFkZGluZyA6IDA7XG4vKlx0Ym9yZGVyIDogMXB4IHNvbGlkIHJlZDsgKi9cbn1cblxuLyogQ2lyY2xlIE1haW4gZHJhd3MgdGhlIGFjdHVhbCBjaXJjbGUgKi9cbi5jaXJjbGVfbWFpblxue1xuXHR3aWR0aCA6IDEwMCU7XG5cdGhlaWdodCA6IDEwMCU7XG5cdGJvcmRlci1yYWRpdXMgOiA1MCU7XG5cdGJvcmRlciA6IDJweCBzb2xpZCBibHVlO1x0LyogY2FuIGFsdGVyIHRoaWNrbmVzcyBhbmQgY29sb3VyIG9mIGNpcmNsZSBvbiB0aGlzIGxpbmUgKi9cblx0bWFyZ2luIDogMDtcblx0cGFkZGluZyA6IDA7XG59XG5cbi8qIENpcmNsZSBUZXh0IENvbnRhaW5lciAtIGNvbnN0cmFpbnMgdGV4dCBhcmVhIHRvIHdpdGhpbiB0aGUgY2lyY2xlICovXG4uY2lyY2xlX3RleHRfY29udGFpbmVyXG57XG5cdC8qIGFyZWEgY29uc3RyYWludHMgKi9cblx0d2lkdGggOiA3MCU7XG5cdGhlaWdodCA6IDcwJTtcblx0bWF4LXdpZHRoIDogNzAlO1xuXHRtYXgtaGVpZ2h0IDogNzAlO1xuXHRtYXJnaW4gOiAwO1xuXHRwYWRkaW5nIDogMDtcblxuXHQvKiBzb21lIHBvc2l0aW9uIG51ZGdpbmcgdG8gY2VudGVyIHRoZSB0ZXh0IGFyZWEgKi9cblx0cG9zaXRpb24gOiByZWxhdGl2ZTtcblx0bGVmdCA6IDE1JTtcblx0dG9wIDogMTUlO1xuXG5cdC8qIHByZXNlcnZlIDNkIHByZXZlbnRzIGJsdXJyaW5nIHNvbWV0aW1lcyBjYXVzZWQgYnkgdGhlIHRleHQgY2VudGVyaW5nIGluIHRoZSBuZXh0IGNsYXNzICovXG5cdHRyYW5zZm9ybS1zdHlsZSA6IHByZXNlcnZlLTNkO1xuXG5cdC8qYm9yZGVyIDogMXB4IHNvbGlkIGdyZWVuOyovXG59XG5cbi8qIENpcmNsZSBUZXh0IC0gdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHRleHQgd2l0aGluIHRoZSBjaXJjbGUgcGx1cyB2ZXJ0aWNhbCBjZW50ZXJpbmcgKi9cbi5jaXJjbGVfdGV4dFxue1xuXHQvKiBjaGFuZ2UgZm9udC9zaXplL2V0YyBoZXJlICovXG5cdGZvbnQ6IDIwcHggXCJUYWhvbWFcIiwgQXJpYWwsIFNlcmlmO1xuXHR0ZXh0LWFsaWduIDogY2VudGVyO1xuXG5cdC8qIHZlcnRpY2FsIGNlbnRlcmluZyB0ZWNobmlxdWUgKi9cblx0cG9zaXRpb24gOiByZWxhdGl2ZTtcblx0dG9wIDogNTAlO1xuXHR0cmFuc2Zvcm0gOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmNvbC1tZC0zLnN0YXJ0ZXIge1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpe1xuICBoNS5tZWRpQS0yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XG4gIH1cbiAgaDIubmctc3Rhci1pbnNlcnRlZC5maW55ZWFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAtNyU7XG4gICAgZm9udC1zaXplOiAxNTAlO1xufVxufVxuIiwidGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXI7XG59XG5cbnRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xufVxuXG50ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcbn1cblxudHIudGFibGUtYmdybmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaDMsIGgzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbi10b3A6IC0xJTtcbn1cblxudGguY3JzIHtcbiAgd2lkdGg6IDE1JTtcbn1cblxudGQubXJzIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuaDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAtM3B4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxudGQuZHJzIHtcbiAgd2lkdGg6IDEwJTtcbn1cblxudGFibGUudGl0bGUtMSB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tbGVmdDogMTUlO1xufVxuXG5oNS50ZXh0LWJzdCB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC4yJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5oNS50aXRlLTEge1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7ICovXG4gIGNvbG9yOiBibGFjaztcbn1cblxudGFibGUudGJsZS0yIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmg1LmNtbWRhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxJTtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMjYlO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5oNi5zaW5nbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MEI5O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDElO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5oNi5wb2xjeS0xIHtcbiAgbWFyZ2luLWxlZnQ6IC0yJTtcbiAgbWFyZ2luLXRvcDogNiU7XG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogOTMlO1xuICBwYWRkaW5nOiAxJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oNi5wb2xjeS0yIHtcbiAgd2lkdGg6IDkzJTtcbiAgbWFyZ2luLXRvcDogNiU7XG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC5jYXJkLXN0YXRzIHtcbiAgbWFyZ2luLWJvdHRvbTogNiU7XG59XG5cbi5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci13YXJuaW5nLmNhcmQtaGVhZGVyLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JhbmdlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci1zdWNjZXNzLmNhcmQtaGVhZGVyLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItZGFuZ2VyLmNhcmQtaGVhZGVyLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XG59XG5cbi5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci1pbmZvLmNhcmQtaGVhZGVyLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XG59XG5cbi5jYXJkLmNhcmQtY2FzY2FkZS53aWRlci5yZXZlcnNlIHtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbi5hZ2V3bnQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC00NSU7XG59XG5cbi53ZWFrIHtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbn1cblxudWwubGlzdC1ncm91cC5saXN0LWdyb3VwLWhvcml6b250YWwtbWQge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpIHtcbiAgLndpZWRzYS5zbXNjcmVkaXQubWVpZGEge1xuICAgIG1hcmdpbi10b3A6IC0yNiU7XG4gIH1cblxuICAud2llZHNhLmNyZWRpdHMge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAtMzIlO1xuICB9XG5cbiAgLyogLndpZWRzYS5iYWxhbmNlIHtcbiAgICAgIG1hcmdpbi10b3A6IC0zNyU7XG4gIH0gKi9cbiAgLmNoYXJ0d2lkdGgubWVkaWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxuXG4gIGg2LmFtb3VudC5tZWRpYSB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBtYXJnaW4tbGVmdDogMjclO1xuICB9XG5cbiAgaDUudGV4dC1ic3QubWVkaWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG4gIGg1LnR4dC0xLm1lZGlzLTEge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5oNC5wYWNrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmNpcmNsZV9jb250YWluZXIge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogMTI4cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgLypcdGJvcmRlciA6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbi8qIENpcmNsZSBNYWluIGRyYXdzIHRoZSBhY3R1YWwgY2lyY2xlICovXG4uY2lyY2xlX21haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG4gIC8qIGNhbiBhbHRlciB0aGlja25lc3MgYW5kIGNvbG91ciBvZiBjaXJjbGUgb24gdGhpcyBsaW5lICovXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLyogQ2lyY2xlIFRleHQgQ29udGFpbmVyIC0gY29uc3RyYWlucyB0ZXh0IGFyZWEgdG8gd2l0aGluIHRoZSBjaXJjbGUgKi9cbi5jaXJjbGVfdGV4dF9jb250YWluZXIge1xuICAvKiBhcmVhIGNvbnN0cmFpbnRzICovXG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNzAlO1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgbWF4LWhlaWdodDogNzAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIHNvbWUgcG9zaXRpb24gbnVkZ2luZyB0byBjZW50ZXIgdGhlIHRleHQgYXJlYSAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE1JTtcbiAgdG9wOiAxNSU7XG4gIC8qIHByZXNlcnZlIDNkIHByZXZlbnRzIGJsdXJyaW5nIHNvbWV0aW1lcyBjYXVzZWQgYnkgdGhlIHRleHQgY2VudGVyaW5nIGluIHRoZSBuZXh0IGNsYXNzICovXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC8qYm9yZGVyIDogMXB4IHNvbGlkIGdyZWVuOyovXG59XG5cbi8qIENpcmNsZSBUZXh0IC0gdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHRleHQgd2l0aGluIHRoZSBjaXJjbGUgcGx1cyB2ZXJ0aWNhbCBjZW50ZXJpbmcgKi9cbi5jaXJjbGVfdGV4dCB7XG4gIC8qIGNoYW5nZSBmb250L3NpemUvZXRjIGhlcmUgKi9cbiAgZm9udDogMjBweCBcIlRhaG9tYVwiLCBBcmlhbCwgU2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogdmVydGljYWwgY2VudGVyaW5nIHRlY2huaXF1ZSAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5jb2wtbWQtMy5zdGFydGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpIHtcbiAgaDUubWVkaUEtMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xuICB9XG5cbiAgaDIubmctc3Rhci1pbnNlcnRlZC5maW55ZWFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAtNyU7XG4gICAgZm9udC1zaXplOiAxNTAlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");




let DashboardComponent = class DashboardComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.newclients = 0;
        this.newusersweekly = 0;
        this.planexpirytdy = 0;
        this.planexpiryweekly = 0;
    }
    ngOnInit() {
        this.getclientscount();
        this.getuserdataCount();
        this.userdataCountweekly();
        this.getplanexpirytoday();
        this.getplanexpirynextweek();
    }
    getclientscount() {
        this.userService.getclientscount().subscribe((res) => {
            this.userdata = res.result[0];
        });
    }
    getuserdataCount() {
        this.userService.getuserdataCount().subscribe((res) => {
            this.newclients = res.result[0].NumberOfclients;
            console.log(this.newclients);
        });
    }
    userdataCountweekly() {
        this.userService.userdataCountweekly().subscribe((res) => {
            this.newusersweekly = res.result[0].NumberOfclients;
        });
    }
    getplanexpirytoday() {
        this.userService.getplanexpirytoday().subscribe((res) => {
            this.planexpirytdy = res.result[0].NumberOfclients;
        });
    }
    getplanexpirynextweek() {
        this.userService.getplanexpirynextweek().subscribe((res) => {
            this.planexpiryweekly = res.result[0].NumberOfclients;
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/dashboard/dashboard.component.scss")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/modules/posts/posts.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/posts/posts.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/posts/posts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/posts/posts.component.ts ***!
  \**************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostsComponent = class PostsComponent {
    constructor() { }
    ngOnInit() {
    }
};
PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: __webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/posts/posts.component.html"),
        styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/modules/posts/posts.component.scss")]
    })
], PostsComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Table Styles */\n.table-fill {\n  background: white;\n  border-radius: 3px;\n  border-collapse: collapse;\n  height: 320px;\n  margin: auto;\n  max-width: 600px;\n  padding: 5px;\n  width: 100%;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n  -webkit-animation: float 5s infinite;\n          animation: float 5s infinite;\n}\nth {\n  color: #D5DDE5;\n  background: #1b1e24;\n  border-bottom: 4px solid #9ea7af;\n  border-right: 1px solid #343a45;\n  font-size: 23px;\n  font-weight: 100;\n  padding: 24px;\n  text-align: left;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  vertical-align: middle;\n}\nth:first-child {\n  border-top-left-radius: 3px;\n}\nth:last-child {\n  border-top-right-radius: 3px;\n  border-right: none;\n}\ntr {\n  border-top: 1px solid #C1C3D1;\n  border-bottom-: 1px solid #C1C3D1;\n  color: #666B85;\n  font-size: 16px;\n  font-weight: normal;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);\n}\ntr:first-child {\n  border-top: none;\n}\ntr:last-child {\n  border-bottom: none;\n}\ntr:nth-child(odd) td {\n  background: #EBEBEB;\n}\ntr:last-child td:first-child {\n  border-bottom-left-radius: 3px;\n}\ntr:last-child td:last-child {\n  border-bottom-right-radius: 3px;\n}\ntd {\n  background: #FFFFFF;\n  padding: 20px;\n  text-align: left;\n  vertical-align: middle;\n  font-weight: 300;\n  font-size: 18px;\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\n  border-right: 1px solid #C1C3D1;\n}\ntd:last-child {\n  border-right: 0px;\n}\nth.text-left {\n  text-align: left;\n}\nth.text-center {\n  text-align: center;\n}\nth.text-right {\n  text-align: right;\n}\ntd.text-left {\n  text-align: left;\n}\ntd.text-center {\n  text-align: center;\n}\ntd.text-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsaUJBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQ0FGO0FER0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSxzQkFBQTtBQ0FGO0FER0E7RUFDRSwyQkFBQTtBQ0FGO0FER0E7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0FDQUY7QURHQTtFQUNFLDZCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUNBRjtBREdBO0VBQ0UsZ0JBQUE7QUNBRjtBREdBO0VBQ0UsbUJBQUE7QUNBRjtBREdBO0VBQ0UsbUJBQUE7QUNBRjtBREdBO0VBQ0UsOEJBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7QUNBRjtBREdBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0VBQ0EsK0JBQUE7QUNBRjtBREdBO0VBQ0UsaUJBQUE7QUNBRjtBREdBO0VBQ0UsZ0JBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7QUNBRjtBREdBO0VBQ0UsaUJBQUE7QUNBRjtBREdBO0VBQ0UsZ0JBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7QUNBRjtBREdBO0VBQ0UsaUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBUYWJsZSBTdHlsZXMgKi9cclxuLnRhYmxlLWZpbGwge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgaGVpZ2h0OiAzMjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBwYWRkaW5nOjVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBhbmltYXRpb246IGZsb2F0IDVzIGluZmluaXRlO1xyXG59XHJcblxyXG50aCB7XHJcbiAgY29sb3I6I0Q1RERFNTs7XHJcbiAgYmFja2dyb3VuZDojMWIxZTI0O1xyXG4gIGJvcmRlci1ib3R0b206NHB4IHNvbGlkICM5ZWE3YWY7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzM0M2E0NTtcclxuICBmb250LXNpemU6MjNweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIHBhZGRpbmc6MjRweDtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG59XHJcblxyXG50aDpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czozcHg7XHJcbn1cclxuXHJcbnRoOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweDtcclxuICBib3JkZXItcmlnaHQ6bm9uZTtcclxufVxyXG5cclxudHIge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQzFDM0QxO1xyXG4gIGJvcmRlci1ib3R0b20tOiAxcHggc29saWQgI0MxQzNEMTtcclxuICBjb2xvcjojNjY2Qjg1O1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMjU2LCAyNTYsIDI1NiwgMC4xKTtcclxufVxyXG5cclxudHI6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci10b3A6bm9uZTtcclxufVxyXG5cclxudHI6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQob2RkKSB0ZCB7XHJcbiAgYmFja2dyb3VuZDojRUJFQkVCO1xyXG59XHJcblxyXG50cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweDtcclxufVxyXG5cclxudHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICBiYWNrZ3JvdW5kOiNGRkZGRkY7XHJcbiAgcGFkZGluZzoyMHB4O1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gIGZvbnQtc2l6ZToxOHB4O1xyXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQzFDM0QxO1xyXG59XHJcblxyXG50ZDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IDBweDtcclxufVxyXG5cclxudGgudGV4dC1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50aC50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50aC50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxudGQudGV4dC1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50ZC50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZC50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4iLCIvKiBUYWJsZSBTdHlsZXMgKi9cbi50YWJsZS1maWxsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYW5pbWF0aW9uOiBmbG9hdCA1cyBpbmZpbml0ZTtcbn1cblxudGgge1xuICBjb2xvcjogI0Q1RERFNTtcbiAgYmFja2dyb3VuZDogIzFiMWUyNDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM5ZWE3YWY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzNDNhNDU7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZzogMjRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbnRoOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xufVxuXG50aDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG50ciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQzFDM0QxO1xuICBib3JkZXItYm90dG9tLTogMXB4IHNvbGlkICNDMUMzRDE7XG4gIGNvbG9yOiAjNjY2Qjg1O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG50cjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbnRyOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG50cjpudGgtY2hpbGQob2RkKSB0ZCB7XG4gIGJhY2tncm91bmQ6ICNFQkVCRUI7XG59XG5cbnRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG59XG5cbnRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG59XG5cbnRkIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDMUMzRDE7XG59XG5cbnRkOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDBweDtcbn1cblxudGgudGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGgudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRoLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxudGQudGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGQudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProfileComponent = class ProfileComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.userService.getUserProfile().subscribe(res => {
            this.userDetails = res['user'];
            console.log(this.userDetails);
        }, err => {
            console.log(err);
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbiIsImZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbiIsInVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.toggleSideBarForMe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.role = this.userService.getRole();
    }
    toggleSideBar() {
        this.toggleSideBarForMe.emit();
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
    onLogout() {
        this.userService.deleteToken();
        this.router.navigate(['/login']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderComponent.prototype, "toggleSideBarForMe", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-icon {\n  vertical-align: middle;\n  margin-right: 20px;\n}\n:host .profile-card {\n  text-align: center;\n  padding: 0 20px 20px 20px;\n}\n:host .profile-card img {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ0FKO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAubWF0LWljb24ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIC5wcm9maWxlLWNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCAubWF0LWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG46aG9zdCAucHJvZmlsZS1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xufVxuOmhvc3QgLnByb2ZpbGUtY2FyZCBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SidebarComponent = class SidebarComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.role = this.userService.getRole();
        this.name = this.userService.getName();
        this.userService.getUserProfile().subscribe(res => {
            this.userDetails = res['user'];
        }, err => {
            console.log(err);
        });
    }
};
SidebarComponent.ctorParameters = () => [
    { type: src_app_apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/shared/components/sidebar/sidebar.component.scss")]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widgets/area/area.component */ "./src/app/shared/widgets/area/area.component.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
/* harmony import */ var _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widgets/card/card.component */ "./src/app/shared/widgets/card/card.component.ts");
/* harmony import */ var _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widgets/pie/pie.component */ "./src/app/shared/widgets/pie/pie.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");














let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
            _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_9__["AreaComponent"],
            _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"],
            _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__["PieComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_10__["HighchartsChartModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
        ],
        exports: [
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
            _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_9__["AreaComponent"],
            _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"],
            _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__["PieComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/widgets/area/area.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/widgets/area/area.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL2FyZWEvYXJlYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/widgets/area/area.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/area/area.component.ts ***!
  \*******************************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let AreaComponent = class AreaComponent {
    constructor() {
        this.data = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Random DATA'
            },
            subtitle: {
                text: 'Demo'
            },
            tooltip: {
                split: true,
                valueSuffix: ' millions'
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
            },
            series: this.data
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AreaComponent.prototype, "data", void 0);
AreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-area',
        template: __webpack_require__(/*! raw-loader!./area.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/area/area.component.html"),
        styles: [__webpack_require__(/*! ./area.component.scss */ "./src/app/shared/widgets/area/area.component.scss")]
    })
], AreaComponent);



/***/ }),

/***/ "./src/app/shared/widgets/card/card.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/widgets/card/card.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.total {\n  font-size: 3em;\n}\n\n.mat-icon,\n.description {\n  color: green;\n  font-size: 2em;\n}\n\n.mat-icon {\n  position: relative;\n  padding: 0 20px;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3dpZGdldHMvY2FyZC9GOlxcZ2l0IGh1YlxcQWRtaW5wYW5uZWxUb01hbmFnZVRlYW1cXEZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXHdpZGdldHNcXGNhcmRcXGNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBOztFQUVFLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvd2lkZ2V0cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnRvdGFsIHtcbiAgZm9udC1zaXplOiAzZW07XG59XG5cbi5tYXQtaWNvbixcbi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5tYXQtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICB0b3A6IDVweDtcbn1cbiIsImg0IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udG90YWwge1xuICBmb250LXNpemU6IDNlbTtcbn1cblxuLm1hdC1pY29uLFxuLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuLm1hdC1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHRvcDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/widgets/card/card.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/card/card.component.ts ***!
  \*******************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let CardComponent = class CardComponent {
    constructor() {
        this.data = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {};
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: 'area',
                backgroundColor: null,
                borderWidth: 0,
                margin: [2, 2, 2, 2],
                height: 60
            },
            title: {
                text: null
            },
            subtitle: {
                text: null
            },
            tooltip: {
                split: true,
                outside: true
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false,
            },
            xAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            yAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            series: [{
                    data: this.data
                }]
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "total", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "percentage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "data", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-card',
        template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/card/card.component.html"),
        styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/shared/widgets/card/card.component.scss")]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/shared/widgets/pie/pie.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/pie/pie.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL3BpZS9waWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/widgets/pie/pie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/widgets/pie/pie.component.ts ***!
  \*****************************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let PieComponent = class PieComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {};
        this.data = [];
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'RANDOM DATA'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            exporting: {
                enabled: true
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: this.data
                }]
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PieComponent.prototype, "data", void 0);
PieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-pie',
        template: __webpack_require__(/*! raw-loader!./pie.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/pie/pie.component.html"),
        styles: [__webpack_require__(/*! ./pie.component.scss */ "./src/app/shared/widgets/pie/pie.component.scss")]
    })
], PieComponent);



/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url('https://fonts.googleapis.com/css?family=Poppins');\r\n/* You can add global styles to this file, and also import other style files */\r\n/* BASIC */\r\nhtml {\r\n  background-color: #56baed;\r\n}\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\r\na {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\nh2 {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 40px 8px 10px 8px;\r\n  color: #cccccc;\r\n}\r\n/* STRUCTURE */\r\n.wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  padding: 20px;\r\n}\r\n#formContent {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\r\n#formFooter {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n/* TABS */\r\nh2.inactive {\r\n  color: #cccccc;\r\n}\r\nh2.active {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n/* FORM TYPOGRAPHY*/\r\ninput[type=button], input[type=submit], input[type=reset]  {\r\n  cursor: pointer;\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n  background-color: #39ace7;\r\n}\r\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n  -webkit-transform: scale(0.95);\r\n  transform: scale(0.95);\r\n}\r\ninput[type=submit]:disabled{\r\n  background-color: grey;\r\n  color: white;\r\n}\r\ninput[type=text],input[type=password] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\ninput[type=text]:focus,input[type=password]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\ninput[type=text]:placeholder {\r\n  color: #cccccc;\r\n}\r\ninput[type=text].invalid-textbox,input[type=password].invalid-textbox{\r\nborder-bottom: 2px solid #ed5558;\r\n}\r\nlabel.validation-message{\r\n  color:#ed5558;\r\n}\r\n/* ANIMATIONS */\r\n/* Simple CSS3 Fade-in-down Animation */\r\n.fadeInDown {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\r\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\r\n/* Simple CSS3 Fade-in Animation */\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n.fadeIn {\r\n  opacity:0;\r\n  -webkit-animation:fadeIn ease-in 1;\r\n  animation:fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode:forwards;\r\n  animation-fill-mode:forwards;\r\n\r\n  -webkit-animation-duration:1s;\r\n  animation-duration:1s;\r\n}\r\n.fadeIn.first {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\r\n.fadeIn.second {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\r\n.fadeIn.third {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\r\n.fadeIn.fourth {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\r\n/* Simple CSS3 Fade-in Animation */\r\n.underlineHover:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  transition: width 0.2s;\r\n}\r\n.underlineHover:hover {\r\n  color: #0d0d0d;\r\n}\r\n.underlineHover:hover:after{\r\n  width: 100%;\r\n}\r\n/* OTHERS */\r\n*:focus {\r\n    outline: none;\r\n}\r\n#icon {\r\n  width:50%;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n.alert {\r\n  padding: 20px;\r\n  background-color: #f44336; /* Red */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\r\n.success{\r\n  padding: 20px;\r\n  background-color:#249424; /* Green */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\r\n/* Table Styles */\r\n.table-fill {\r\n  background: white;\r\n  border-radius:3px;\r\n  border-collapse: collapse;\r\n  height: 320px;\r\n  margin: auto;\r\n  max-width: 600px;\r\n  padding:5px;\r\n  width: 100%;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\r\n  -webkit-animation: float 5s infinite;\r\n          animation: float 5s infinite;\r\n}\r\nth {\r\n  color:#D5DDE5;;\r\n  background:#1b1e24;\r\n  border-bottom:4px solid #9ea7af;\r\n  border-right: 1px solid #343a45;\r\n  font-size:23px;\r\n  font-weight: 100;\r\n  padding:24px;\r\n  text-align:left;\r\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  vertical-align:middle;\r\n}\r\nth:first-child {\r\n  border-top-left-radius:3px;\r\n}\r\nth:last-child {\r\n  border-top-right-radius:3px;\r\n  border-right:none;\r\n}\r\ntr {\r\n  border-top: 1px solid #C1C3D1;\r\n  border-bottom-: 1px solid #C1C3D1;\r\n  color:#666B85;\r\n  font-size:16px;\r\n  font-weight:normal;\r\n  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);\r\n}\r\ntr:first-child {\r\n  border-top:none;\r\n}\r\ntr:last-child {\r\n  border-bottom:none;\r\n}\r\ntr:nth-child(odd) td {\r\n  background:#EBEBEB;\r\n}\r\ntr:last-child td:first-child {\r\n  border-bottom-left-radius:3px;\r\n}\r\ntr:last-child td:last-child {\r\n  border-bottom-right-radius:3px;\r\n}\r\ntd {\r\n  background:#FFFFFF;\r\n  padding:20px;\r\n  text-align:left;\r\n  vertical-align:middle;\r\n  font-weight:300;\r\n  font-size:18px;\r\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\r\n  border-right: 1px solid #C1C3D1;\r\n}\r\ntd:last-child {\r\n  border-right: 0px;\r\n}\r\nth.text-left {\r\n  text-align: left;\r\n}\r\nth.text-center {\r\n  text-align: center;\r\n}\r\nth.text-right {\r\n  text-align: right;\r\n}\r\ntd.text-left {\r\n  text-align: left;\r\n}\r\ntd.text-center {\r\n  text-align: center;\r\n}\r\ntd.text-right {\r\n  text-align: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsOERBQThEO0FBRDlELDhFQUE4RTtBQUc5RSxVQUFVO0FBRVY7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUlBLGNBQWM7QUFFZDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBRUE7RUFFRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBRVoseUNBQXlDO0VBQ3pDLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBRWxCLDRCQUE0QjtBQUM5QjtBQUlBLFNBQVM7QUFFVDtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7QUFJQSxtQkFBbUI7QUFFbkI7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBRWYsOENBQThDO0VBRTlDLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFLMUIsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUVFLDhCQUE4QjtFQUc5QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVix5QkFBeUI7RUFLekIsZ0NBQWdDO0VBRWhDLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFJQSxlQUFlO0FBRWYsdUNBQXVDO0FBQ3ZDO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7QUFDRjtBQUVBLGtDQUFrQztBQUNsQyw0QkFBNEIsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFO0FBRWxFLG9CQUFvQixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7QUFFMUQ7RUFDRSxTQUFTO0VBQ1Qsa0NBQWtDO0VBRWxDLDBCQUEwQjs7RUFFMUIsb0NBQW9DO0VBRXBDLDRCQUE0Qjs7RUFFNUIsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsMkJBQTJCO0VBRTNCLG1CQUFtQjtBQUNyQjtBQUVBLGtDQUFrQztBQUNsQztFQUNFLGNBQWM7RUFDZCxPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUlBLFdBQVc7QUFFWDtJQUNJLGFBQWE7QUFDakI7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBR0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCLEVBQUUsUUFBUTtFQUNuQyxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCLEVBQUUsVUFBVTtFQUNwQyxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsb0NBQTRCO1VBQTVCLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsK0NBQStDO0FBQ2pEO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkLDZDQUE2QztFQUM3QywrQkFBK0I7QUFDakM7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMnKTtcclxuXHJcbi8qIEJBU0lDICovXHJcblxyXG5odG1sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICM5MmJhZGQ7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4O1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFNUUlVDVFVSRSAqL1xyXG5cclxuLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNmb3JtQ29udGVudCB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZm9ybUZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZThmMTtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBUQUJTICovXHJcblxyXG5oMi5pbmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbmgyLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbn1cclxuXHJcblxyXG5cclxuLyogRk9STSBUWVBPR1JBUEhZKi9cclxuXHJcbmlucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSAge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCA4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2U3O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLCBpbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLCBpbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUgIHtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdOmRpc2FibGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0uaW52YWxpZC10ZXh0Ym94LGlucHV0W3R5cGU9cGFzc3dvcmRdLmludmFsaWQtdGV4dGJveHtcclxuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZDU1NTg7XHJcbn1cclxuXHJcbmxhYmVsLnZhbGlkYXRpb24tbWVzc2FnZXtcclxuICBjb2xvcjojZWQ1NTU4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEFOSU1BVElPTlMgKi9cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cclxuLmZhZGVJbkRvd24ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIG9wYWNpdHk6MDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG59XHJcblxyXG4uZmFkZUluLmZpcnN0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbn1cclxuXHJcbi5mYWRlSW4uc2Vjb25kIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuXHJcbi5mYWRlSW4udGhpcmQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxufVxyXG5cclxuLmZhZGVJbi5mb3VydGgge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxufVxyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTEwcHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBPVEhFUlMgKi9cclxuXHJcbio6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2ljb24ge1xyXG4gIHdpZHRoOjUwJTtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbi5hbGVydCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2OyAvKiBSZWQgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnN1Y2Nlc3N7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMyNDk0MjQ7IC8qIEdyZWVuICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi8qIFRhYmxlIFN0eWxlcyAqL1xyXG4udGFibGUtZmlsbCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czozcHg7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBoZWlnaHQ6IDMyMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIHBhZGRpbmc6NXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGFuaW1hdGlvbjogZmxvYXQgNXMgaW5maW5pdGU7XHJcbn1cclxuXHJcbnRoIHtcclxuICBjb2xvcjojRDVEREU1OztcclxuICBiYWNrZ3JvdW5kOiMxYjFlMjQ7XHJcbiAgYm9yZGVyLWJvdHRvbTo0cHggc29saWQgIzllYTdhZjtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzQzYTQ1O1xyXG4gIGZvbnQtc2l6ZToyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgcGFkZGluZzoyNHB4O1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbn1cclxuXHJcbnRoOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjNweDtcclxufVxyXG5cclxudGg6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6M3B4O1xyXG4gIGJvcmRlci1yaWdodDpub25lO1xyXG59XHJcblxyXG50ciB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDMUMzRDE7XHJcbiAgYm9yZGVyLWJvdHRvbS06IDFweCBzb2xpZCAjQzFDM0QxO1xyXG4gIGNvbG9yOiM2NjZCODU7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjEpO1xyXG59XHJcblxyXG50cjpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcDpub25lO1xyXG59XHJcblxyXG50cjpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOm5vbmU7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChvZGQpIHRkIHtcclxuICBiYWNrZ3JvdW5kOiNFQkVCRUI7XHJcbn1cclxuXHJcbnRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6M3B4O1xyXG59XHJcblxyXG50cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweDtcclxufVxyXG5cclxudGQge1xyXG4gIGJhY2tncm91bmQ6I0ZGRkZGRjtcclxuICBwYWRkaW5nOjIwcHg7XHJcbiAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICBmb250LXdlaWdodDozMDA7XHJcbiAgZm9udC1zaXplOjE4cHg7XHJcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDMUMzRDE7XHJcbn1cclxuXHJcbnRkOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogMHB4O1xyXG59XHJcblxyXG50aC50ZXh0LWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnRoLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRoLnRleHQtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG50ZC50ZXh0LWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnRkLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRkLnRleHQtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");




let SignInComponent = class SignInComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.model = {
            email: '',
            password: ''
        };
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    ngOnInit() {
        if (this.userService.isLoggedIn())
            this.router.navigateByUrl('/userprofile');
    }
    onSubmit(form) {
        this.userService.login(form.value).subscribe(res => {
            this.userService.setToken(res['token']);
            this.userService.setRole(res['role']);
            this.userService.setName(res['name']);
            this.userService.setPartner_id(res['partner_id']);
            this.router.navigateByUrl('/home');
        }, err => {
            this.serverErrorMessages = err.error.message;
        });
    }
};
SignInComponent.ctorParameters = () => [
    { type: _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/sign-in/sign-in.component.html"),
        styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/user/sign-in/sign-in.component.css")]
    })
], SignInComponent);



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url('https://fonts.googleapis.com/css?family=Poppins');\r\n/* You can add global styles to this file, and also import other style files */\r\n/* BASIC */\r\nhtml {\r\n  background-color: #56baed;\r\n}\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\r\na {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\nh2 {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 40px 8px 10px 8px;\r\n  color: #cccccc;\r\n}\r\n/* STRUCTURE */\r\n.wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  padding: 20px;\r\n}\r\n#formContent {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\r\n#formFooter {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n/* TABS */\r\nh2.inactive {\r\n  color: #cccccc;\r\n}\r\nh2.active {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n/* FORM TYPOGRAPHY*/\r\ninput[type=button], input[type=submit], input[type=reset]  {\r\n  cursor: pointer;\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n  background-color: #39ace7;\r\n}\r\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n  -webkit-transform: scale(0.95);\r\n  transform: scale(0.95);\r\n}\r\ninput[type=submit]:disabled{\r\n  background-color: grey;\r\n  color: white;\r\n}\r\ninput[type=text],input[type=password] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\ninput[type=text]:focus,input[type=password]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\ninput[type=text]:placeholder {\r\n  color: #cccccc;\r\n}\r\ninput[type=text].invalid-textbox,input[type=password].invalid-textbox{\r\nborder-bottom: 2px solid #ed5558;\r\n}\r\nlabel.validation-message{\r\n  color:#ed5558;\r\n}\r\n/* ANIMATIONS */\r\n/* Simple CSS3 Fade-in-down Animation */\r\n.fadeInDown {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\r\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\r\n/* Simple CSS3 Fade-in Animation */\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n.fadeIn {\r\n  opacity:0;\r\n  -webkit-animation:fadeIn ease-in 1;\r\n  animation:fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode:forwards;\r\n  animation-fill-mode:forwards;\r\n\r\n  -webkit-animation-duration:1s;\r\n  animation-duration:1s;\r\n}\r\n.fadeIn.first {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\r\n.fadeIn.second {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\r\n.fadeIn.third {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\r\n.fadeIn.fourth {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\r\n/* Simple CSS3 Fade-in Animation */\r\n.underlineHover:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  transition: width 0.2s;\r\n}\r\n.underlineHover:hover {\r\n  color: #0d0d0d;\r\n}\r\n.underlineHover:hover:after{\r\n  width: 100%;\r\n}\r\n/* OTHERS */\r\n*:focus {\r\n    outline: none;\r\n}\r\n#icon {\r\n  width:50%;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n.alert {\r\n  padding: 20px;\r\n  background-color: #f44336; /* Red */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\r\n.success{\r\n  padding: 20px;\r\n  background-color:#249424; /* Green */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\r\n/* Table Styles */\r\n.table-fill {\r\n  background: white;\r\n  border-radius:3px;\r\n  border-collapse: collapse;\r\n  height: 320px;\r\n  margin: auto;\r\n  max-width: 600px;\r\n  padding:5px;\r\n  width: 100%;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\r\n  -webkit-animation: float 5s infinite;\r\n          animation: float 5s infinite;\r\n}\r\nth {\r\n  color:#D5DDE5;;\r\n  background:#1b1e24;\r\n  border-bottom:4px solid #9ea7af;\r\n  border-right: 1px solid #343a45;\r\n  font-size:23px;\r\n  font-weight: 100;\r\n  padding:24px;\r\n  text-align:left;\r\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  vertical-align:middle;\r\n}\r\nth:first-child {\r\n  border-top-left-radius:3px;\r\n}\r\nth:last-child {\r\n  border-top-right-radius:3px;\r\n  border-right:none;\r\n}\r\ntr {\r\n  border-top: 1px solid #C1C3D1;\r\n  border-bottom-: 1px solid #C1C3D1;\r\n  color:#666B85;\r\n  font-size:16px;\r\n  font-weight:normal;\r\n  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);\r\n}\r\ntr:first-child {\r\n  border-top:none;\r\n}\r\ntr:last-child {\r\n  border-bottom:none;\r\n}\r\ntr:nth-child(odd) td {\r\n  background:#EBEBEB;\r\n}\r\ntr:last-child td:first-child {\r\n  border-bottom-left-radius:3px;\r\n}\r\ntr:last-child td:last-child {\r\n  border-bottom-right-radius:3px;\r\n}\r\ntd {\r\n  background:#FFFFFF;\r\n  padding:20px;\r\n  text-align:left;\r\n  vertical-align:middle;\r\n  font-weight:300;\r\n  font-size:18px;\r\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\r\n  border-right: 1px solid #C1C3D1;\r\n}\r\ntd:last-child {\r\n  border-right: 0px;\r\n}\r\nth.text-left {\r\n  text-align: left;\r\n}\r\nth.text-center {\r\n  text-align: center;\r\n}\r\nth.text-right {\r\n  text-align: right;\r\n}\r\ntd.text-left {\r\n  text-align: left;\r\n}\r\ntd.text-center {\r\n  text-align: center;\r\n}\r\ntd.text-right {\r\n  text-align: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsOERBQThEO0FBRDlELDhFQUE4RTtBQUc5RSxVQUFVO0FBRVY7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUlBLGNBQWM7QUFFZDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBRUE7RUFFRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBRVoseUNBQXlDO0VBQ3pDLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBRWxCLDRCQUE0QjtBQUM5QjtBQUlBLFNBQVM7QUFFVDtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7QUFJQSxtQkFBbUI7QUFFbkI7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBRWYsOENBQThDO0VBRTlDLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFLMUIsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUVFLDhCQUE4QjtFQUc5QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVix5QkFBeUI7RUFLekIsZ0NBQWdDO0VBRWhDLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFJQSxlQUFlO0FBRWYsdUNBQXVDO0FBQ3ZDO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7QUFDRjtBQUVBLGtDQUFrQztBQUNsQyw0QkFBNEIsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFO0FBRWxFLG9CQUFvQixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7QUFFMUQ7RUFDRSxTQUFTO0VBQ1Qsa0NBQWtDO0VBRWxDLDBCQUEwQjs7RUFFMUIsb0NBQW9DO0VBRXBDLDRCQUE0Qjs7RUFFNUIsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsMkJBQTJCO0VBRTNCLG1CQUFtQjtBQUNyQjtBQUVBLGtDQUFrQztBQUNsQztFQUNFLGNBQWM7RUFDZCxPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUlBLFdBQVc7QUFFWDtJQUNJLGFBQWE7QUFDakI7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBR0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCLEVBQUUsUUFBUTtFQUNuQyxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCLEVBQUUsVUFBVTtFQUNwQyxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsb0NBQTRCO1VBQTVCLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsK0NBQStDO0FBQ2pEO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkLDZDQUE2QztFQUM3QywrQkFBK0I7QUFDakM7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMnKTtcclxuXHJcbi8qIEJBU0lDICovXHJcblxyXG5odG1sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICM5MmJhZGQ7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4O1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFNUUlVDVFVSRSAqL1xyXG5cclxuLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNmb3JtQ29udGVudCB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZm9ybUZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZThmMTtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBUQUJTICovXHJcblxyXG5oMi5pbmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbmgyLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbn1cclxuXHJcblxyXG5cclxuLyogRk9STSBUWVBPR1JBUEhZKi9cclxuXHJcbmlucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSAge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCA4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2U3O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLCBpbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLCBpbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUgIHtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdOmRpc2FibGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0uaW52YWxpZC10ZXh0Ym94LGlucHV0W3R5cGU9cGFzc3dvcmRdLmludmFsaWQtdGV4dGJveHtcclxuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZDU1NTg7XHJcbn1cclxuXHJcbmxhYmVsLnZhbGlkYXRpb24tbWVzc2FnZXtcclxuICBjb2xvcjojZWQ1NTU4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEFOSU1BVElPTlMgKi9cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cclxuLmZhZGVJbkRvd24ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIG9wYWNpdHk6MDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG59XHJcblxyXG4uZmFkZUluLmZpcnN0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbn1cclxuXHJcbi5mYWRlSW4uc2Vjb25kIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuXHJcbi5mYWRlSW4udGhpcmQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxufVxyXG5cclxuLmZhZGVJbi5mb3VydGgge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxufVxyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTEwcHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBPVEhFUlMgKi9cclxuXHJcbio6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2ljb24ge1xyXG4gIHdpZHRoOjUwJTtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbi5hbGVydCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2OyAvKiBSZWQgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnN1Y2Nlc3N7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMyNDk0MjQ7IC8qIEdyZWVuICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi8qIFRhYmxlIFN0eWxlcyAqL1xyXG4udGFibGUtZmlsbCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czozcHg7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBoZWlnaHQ6IDMyMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIHBhZGRpbmc6NXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGFuaW1hdGlvbjogZmxvYXQgNXMgaW5maW5pdGU7XHJcbn1cclxuXHJcbnRoIHtcclxuICBjb2xvcjojRDVEREU1OztcclxuICBiYWNrZ3JvdW5kOiMxYjFlMjQ7XHJcbiAgYm9yZGVyLWJvdHRvbTo0cHggc29saWQgIzllYTdhZjtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzQzYTQ1O1xyXG4gIGZvbnQtc2l6ZToyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgcGFkZGluZzoyNHB4O1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbn1cclxuXHJcbnRoOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjNweDtcclxufVxyXG5cclxudGg6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6M3B4O1xyXG4gIGJvcmRlci1yaWdodDpub25lO1xyXG59XHJcblxyXG50ciB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDMUMzRDE7XHJcbiAgYm9yZGVyLWJvdHRvbS06IDFweCBzb2xpZCAjQzFDM0QxO1xyXG4gIGNvbG9yOiM2NjZCODU7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjEpO1xyXG59XHJcblxyXG50cjpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcDpub25lO1xyXG59XHJcblxyXG50cjpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOm5vbmU7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChvZGQpIHRkIHtcclxuICBiYWNrZ3JvdW5kOiNFQkVCRUI7XHJcbn1cclxuXHJcbnRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6M3B4O1xyXG59XHJcblxyXG50cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweDtcclxufVxyXG5cclxudGQge1xyXG4gIGJhY2tncm91bmQ6I0ZGRkZGRjtcclxuICBwYWRkaW5nOjIwcHg7XHJcbiAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICBmb250LXdlaWdodDozMDA7XHJcbiAgZm9udC1zaXplOjE4cHg7XHJcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDMUMzRDE7XHJcbn1cclxuXHJcbnRkOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogMHB4O1xyXG59XHJcblxyXG50aC50ZXh0LWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnRoLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRoLnRleHQtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG50ZC50ZXh0LWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnRkLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRkLnRleHQtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");



let SignUpComponent = class SignUpComponent {
    constructor(userService) {
        this.userService = userService;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        this.userService.postUser(form.value).subscribe(res => {
            this.showSucessMessage = true;
            setTimeout(() => this.showSucessMessage = false, 4000);
            this.resetForm(form);
        }, err => {
            if (err.status === 422) {
                this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        });
    }
    resetForm(form) {
        this.userService.selectedUser = {
            mobile_number: '',
            email_id: '',
            password: '',
            user_name: ''
        };
        form.resetForm();
        this.serverErrorMessages = '';
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/sign-up/sign-up.component.html"),
        styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user/sign-up/sign-up.component.css")]
    })
], SignUpComponent);



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url('https://fonts.googleapis.com/css?family=Poppins');\n/* You can add global styles to this file, and also import other style files */\n/* BASIC */\nhtml {\r\n  background-color: #56baed;\r\n}\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\na {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\nh2 {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 40px 8px 10px 8px;\r\n  color: #cccccc;\r\n}\n/* STRUCTURE */\n.wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  padding: 20px;\r\n}\n#formContent {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\n#formFooter {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\n/* TABS */\nh2.inactive {\r\n  color: #cccccc;\r\n}\nh2.active {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset]  {\r\n  cursor: pointer;\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  transition: all 0.3s ease-in-out;\r\n}\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n  background-color: #39ace7;\r\n}\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n  -webkit-transform: scale(0.95);\r\n  transform: scale(0.95);\r\n}\ninput[type=submit]:disabled{\r\n  background-color: grey;\r\n  color: white;\r\n}\ninput[type=text],input[type=password] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\ninput[type=text]:focus,input[type=password]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\ninput[type=text]:placeholder {\r\n  color: #cccccc;\r\n}\ninput[type=text].invalid-textbox,input[type=password].invalid-textbox{\r\nborder-bottom: 2px solid #ed5558;\r\n}\nlabel.validation-message{\r\n  color:#ed5558;\r\n}\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.fadeIn {\r\n  opacity:0;\r\n  -webkit-animation:fadeIn ease-in 1;\r\n  animation:fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode:forwards;\r\n  animation-fill-mode:forwards;\r\n\r\n  -webkit-animation-duration:1s;\r\n  animation-duration:1s;\r\n}\n.fadeIn.first {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\n.fadeIn.second {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\n.fadeIn.third {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\n.fadeIn.fourth {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  transition: width 0.2s;\r\n}\n.underlineHover:hover {\r\n  color: #0d0d0d;\r\n}\n.underlineHover:hover:after{\r\n  width: 100%;\r\n}\n/* OTHERS */\n*:focus {\r\n    outline: none;\r\n}\n#icon {\r\n  width:50%;\r\n}\n* {\r\n  box-sizing: border-box;\r\n}\n.alert {\r\n  padding: 20px;\r\n  background-color: #f44336; /* Red */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\n.success{\r\n  padding: 20px;\r\n  background-color:#249424; /* Green */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\n/* Table Styles */\n.table-fill {\r\n  background: white;\r\n  border-radius:3px;\r\n  border-collapse: collapse;\r\n  height: 320px;\r\n  margin: auto;\r\n  max-width: 600px;\r\n  padding:5px;\r\n  width: 100%;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\r\n  -webkit-animation: float 5s infinite;\r\n          animation: float 5s infinite;\r\n}\nth {\r\n  color:#D5DDE5;;\r\n  background:#1b1e24;\r\n  border-bottom:4px solid #9ea7af;\r\n  border-right: 1px solid #343a45;\r\n  font-size:23px;\r\n  font-weight: 100;\r\n  padding:24px;\r\n  text-align:left;\r\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  vertical-align:middle;\r\n}\nth:first-child {\r\n  border-top-left-radius:3px;\r\n}\nth:last-child {\r\n  border-top-right-radius:3px;\r\n  border-right:none;\r\n}\ntr {\r\n  border-top: 1px solid #C1C3D1;\r\n  border-bottom-: 1px solid #C1C3D1;\r\n  color:#666B85;\r\n  font-size:16px;\r\n  font-weight:normal;\r\n  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);\r\n}\ntr:first-child {\r\n  border-top:none;\r\n}\ntr:last-child {\r\n  border-bottom:none;\r\n}\ntr:nth-child(odd) td {\r\n  background:#EBEBEB;\r\n}\ntr:last-child td:first-child {\r\n  border-bottom-left-radius:3px;\r\n}\ntr:last-child td:last-child {\r\n  border-bottom-right-radius:3px;\r\n}\ntd {\r\n  background:#FFFFFF;\r\n  padding:20px;\r\n  text-align:left;\r\n  vertical-align:middle;\r\n  font-weight:300;\r\n  font-size:18px;\r\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\r\n  border-right: 1px solid #C1C3D1;\r\n}\ntd:last-child {\r\n  border-right: 0px;\r\n}\nth.text-left {\r\n  text-align: left;\r\n}\nth.text-center {\r\n  text-align: center;\r\n}\nth.text-right {\r\n  text-align: right;\r\n}\ntd.text-left {\r\n  text-align: left;\r\n}\ntd.text-center {\r\n  text-align: center;\r\n}\ntd.text-right {\r\n  text-align: right;\r\n}\n.wrapper {\r\n  background-image: url(\"/assets/img/business.png\");\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDhEQUE4RDtBQUQ5RCw4RUFBOEU7QUFHOUUsVUFBVTtBQUVWO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFJQSxjQUFjO0FBRWQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUVBO0VBRUUsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGtCQUFrQjtFQUVsQiw0QkFBNEI7QUFDOUI7QUFJQSxTQUFTO0FBRVQ7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDO0FBSUEsbUJBQW1CO0FBRW5CO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtFQUVmLDhDQUE4QztFQUU5Qyw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBSzFCLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFFRSw4QkFBOEI7RUFHOUIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YseUJBQXlCO0VBS3pCLGdDQUFnQztFQUVoQyw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBSUEsZUFBZTtBQUVmLHVDQUF1QztBQUN2QztFQUNFLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCO0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkNBQTJDO0lBQzNDLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCO0FBQ0Y7QUFFQSxrQ0FBa0M7QUFDbEMsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTtBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFO0FBRTFEO0VBQ0UsU0FBUztFQUNULGtDQUFrQztFQUVsQywwQkFBMEI7O0VBRTFCLG9DQUFvQztFQUVwQyw0QkFBNEI7O0VBRTVCLDZCQUE2QjtFQUU3QixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLDJCQUEyQjtFQUUzQixtQkFBbUI7QUFDckI7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxjQUFjO0VBQ2QsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFJQSxXQUFXO0FBRVg7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUdBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QixFQUFFLFFBQVE7RUFDbkMsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QixFQUFFLFVBQVU7RUFDcEMsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUNBQXlDO0VBQ3pDLG9DQUE0QjtVQUE1Qiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLCtDQUErQztBQUNqRDtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCw2Q0FBNkM7RUFDN0MsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRCIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMnKTtcclxuXHJcbi8qIEJBU0lDICovXHJcblxyXG5odG1sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICM5MmJhZGQ7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4O1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFNUUlVDVFVSRSAqL1xyXG5cclxuLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNmb3JtQ29udGVudCB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZm9ybUZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZThmMTtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBUQUJTICovXHJcblxyXG5oMi5pbmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbmgyLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbn1cclxuXHJcblxyXG5cclxuLyogRk9STSBUWVBPR1JBUEhZKi9cclxuXHJcbmlucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSAge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCA4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2U3O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLCBpbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLCBpbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUgIHtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdOmRpc2FibGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0uaW52YWxpZC10ZXh0Ym94LGlucHV0W3R5cGU9cGFzc3dvcmRdLmludmFsaWQtdGV4dGJveHtcclxuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZDU1NTg7XHJcbn1cclxuXHJcbmxhYmVsLnZhbGlkYXRpb24tbWVzc2FnZXtcclxuICBjb2xvcjojZWQ1NTU4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEFOSU1BVElPTlMgKi9cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cclxuLmZhZGVJbkRvd24ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIG9wYWNpdHk6MDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG59XHJcblxyXG4uZmFkZUluLmZpcnN0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbn1cclxuXHJcbi5mYWRlSW4uc2Vjb25kIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuXHJcbi5mYWRlSW4udGhpcmQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxufVxyXG5cclxuLmZhZGVJbi5mb3VydGgge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxufVxyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTEwcHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBPVEhFUlMgKi9cclxuXHJcbio6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2ljb24ge1xyXG4gIHdpZHRoOjUwJTtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbi5hbGVydCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2OyAvKiBSZWQgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnN1Y2Nlc3N7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMyNDk0MjQ7IC8qIEdyZWVuICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi8qIFRhYmxlIFN0eWxlcyAqL1xyXG4udGFibGUtZmlsbCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czozcHg7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBoZWlnaHQ6IDMyMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIHBhZGRpbmc6NXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGFuaW1hdGlvbjogZmxvYXQgNXMgaW5maW5pdGU7XHJcbn1cclxuXHJcbnRoIHtcclxuICBjb2xvcjojRDVEREU1OztcclxuICBiYWNrZ3JvdW5kOiMxYjFlMjQ7XHJcbiAgYm9yZGVyLWJvdHRvbTo0cHggc29saWQgIzllYTdhZjtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzQzYTQ1O1xyXG4gIGZvbnQtc2l6ZToyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgcGFkZGluZzoyNHB4O1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbn1cclxuXHJcbnRoOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjNweDtcclxufVxyXG5cclxudGg6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6M3B4O1xyXG4gIGJvcmRlci1yaWdodDpub25lO1xyXG59XHJcblxyXG50ciB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDMUMzRDE7XHJcbiAgYm9yZGVyLWJvdHRvbS06IDFweCBzb2xpZCAjQzFDM0QxO1xyXG4gIGNvbG9yOiM2NjZCODU7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjEpO1xyXG59XHJcblxyXG50cjpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcDpub25lO1xyXG59XHJcblxyXG50cjpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOm5vbmU7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChvZGQpIHRkIHtcclxuICBiYWNrZ3JvdW5kOiNFQkVCRUI7XHJcbn1cclxuXHJcbnRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6M3B4O1xyXG59XHJcblxyXG50cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweDtcclxufVxyXG5cclxudGQge1xyXG4gIGJhY2tncm91bmQ6I0ZGRkZGRjtcclxuICBwYWRkaW5nOjIwcHg7XHJcbiAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICBmb250LXdlaWdodDozMDA7XHJcbiAgZm9udC1zaXplOjE4cHg7XHJcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDMUMzRDE7XHJcbn1cclxuXHJcbnRkOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogMHB4O1xyXG59XHJcblxyXG50aC50ZXh0LWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnRoLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRoLnRleHQtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG50ZC50ZXh0LWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnRkLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRkLnRleHQtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYnVzaW5lc3MucG5nXCIpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserComponent = class UserComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
        styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/userManage/add-users/add-users.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/userManage/add-users/add-users.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJNYW5hZ2UvYWRkLXVzZXJzL2FkZC11c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/userManage/add-users/add-users.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/userManage/add-users/add-users.component.ts ***!
  \*************************************************************/
/*! exports provided: AddUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUsersComponent", function() { return AddUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddUsersComponent = class AddUsersComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-users',
        template: __webpack_require__(/*! raw-loader!./add-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/userManage/add-users/add-users.component.html"),
        styles: [__webpack_require__(/*! ./add-users.component.scss */ "./src/app/userManage/add-users/add-users.component.scss")]
    })
], AddUsersComponent);



/***/ }),

/***/ "./src/app/userManage/editusers/editusers.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/userManage/editusers/editusers.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJNYW5hZ2UvZWRpdHVzZXJzL2VkaXR1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/userManage/editusers/editusers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/userManage/editusers/editusers.component.ts ***!
  \*************************************************************/
/*! exports provided: EditusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditusersComponent", function() { return EditusersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditusersComponent = class EditusersComponent {
    constructor() { }
    ngOnInit() {
    }
};
EditusersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editusers',
        template: __webpack_require__(/*! raw-loader!./editusers.component.html */ "./node_modules/raw-loader/index.js!./src/app/userManage/editusers/editusers.component.html"),
        styles: [__webpack_require__(/*! ./editusers.component.scss */ "./src/app/userManage/editusers/editusers.component.scss")]
    })
], EditusersComponent);



/***/ }),

/***/ "./src/app/userManage/user-manage/user-manage.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/userManage/user-manage/user-manage.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJNYW5hZ2UvdXNlci1tYW5hZ2UvdXNlci1tYW5hZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/userManage/user-manage/user-manage.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/userManage/user-manage/user-manage.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManageComponent", function() { return UserManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserManageComponent = class UserManageComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-manage',
        template: __webpack_require__(/*! raw-loader!./user-manage.component.html */ "./node_modules/raw-loader/index.js!./src/app/userManage/user-manage/user-manage.component.html"),
        styles: [__webpack_require__(/*! ./user-manage.component.scss */ "./src/app/userManage/user-manage/user-manage.component.scss")]
    })
], UserManageComponent);



/***/ }),

/***/ "./src/app/userManage/viewusers/viewusers.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/userManage/viewusers/viewusers.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJNYW5hZ2Uvdmlld3VzZXJzL3ZpZXd1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/userManage/viewusers/viewusers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/userManage/viewusers/viewusers.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewusersComponent", function() { return ViewusersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewusersComponent = class ViewusersComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewusersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewusers',
        template: __webpack_require__(/*! raw-loader!./viewusers.component.html */ "./node_modules/raw-loader/index.js!./src/app/userManage/viewusers/viewusers.component.html"),
        styles: [__webpack_require__(/*! ./viewusers.component.scss */ "./src/app/userManage/viewusers/viewusers.component.scss")]
    })
], ViewusersComponent);



/***/ }),

/***/ "./src/app/viewapkdownload/viewapkdownload.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/viewapkdownload/viewapkdownload.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th.text-center.whatsapicon {\n  width: 10%;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\nimg.xlicon {\n  width: 30%;\n  margin-left: 174%;\n  margin-top: 0;\n  margin-bottom: -4%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld2Fwa2Rvd25sb2FkL0Y6XFxnaXQgaHViXFxBZG1pbnBhbm5lbFRvTWFuYWdlVGVhbVxcRnJvbnRlbmQvc3JjXFxhcHBcXHZpZXdhcGtkb3dubG9hZFxcdmlld2Fwa2Rvd25sb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3YXBrZG93bmxvYWQvdmlld2Fwa2Rvd25sb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBRENBO0VBQVUsZUFBQTtBQ0dWOztBREZBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvdmlld2Fwa2Rvd25sb2FkL3ZpZXdhcGtkb3dubG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoLnRleHQtY2VudGVyLndoYXRzYXBpY29uIHtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcbi5wb2ludGVyIHtjdXJzb3I6IHBvaW50ZXI7fVxyXG5pbWcueGxpY29uIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNzQlO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTQlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCJ0aC50ZXh0LWNlbnRlci53aGF0c2FwaWNvbiB7XG4gIHdpZHRoOiAxMCU7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbWcueGxpY29uIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLWxlZnQ6IDE3NCU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IC00JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/viewapkdownload/viewapkdownload.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/viewapkdownload/viewapkdownload.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewapkdownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewapkdownloadComponent", function() { return ViewapkdownloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/apiCalls/excel.service */ "./src/app/apiCalls/excel.service.ts");





let ViewapkdownloadComponent = class ViewapkdownloadComponent {
    constructor(apiCall, router, excelservice) {
        this.apiCall = apiCall;
        this.router = router;
        this.excelservice = excelservice;
    }
    ngOnInit() {
        this.getallapkDownloadlist();
    }
    getallapkDownloadlist() {
        this.apiCall.getallapkDownloadlist().subscribe((res) => {
            console.log(res);
            this.personList = res.result;
        });
    }
    exportAsXLSX() {
        this.excelservice.exportAsExcelFile(this.personList, 'sample');
    }
};
ViewapkdownloadComponent.ctorParameters = () => [
    { type: _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"] }
];
ViewapkdownloadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewapkdownload',
        template: __webpack_require__(/*! raw-loader!./viewapkdownload.component.html */ "./node_modules/raw-loader/index.js!./src/app/viewapkdownload/viewapkdownload.component.html"),
        styles: [__webpack_require__(/*! ./viewapkdownload.component.scss */ "./src/app/viewapkdownload/viewapkdownload.component.scss")]
    })
], ViewapkdownloadComponent);



/***/ }),

/***/ "./src/app/viewusersfeedback/viewusersfeedback.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/viewusersfeedback/viewusersfeedback.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th.text-center.whatsapicon {\n  width: 10%;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\nimg.xlicon {\n  width: 30%;\n  margin-left: 174%;\n  margin-top: 0;\n  margin-bottom: -4%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3VzZXJzZmVlZGJhY2svRjpcXGdpdCBodWJcXEFkbWlucGFubmVsVG9NYW5hZ2VUZWFtXFxGcm9udGVuZC9zcmNcXGFwcFxcdmlld3VzZXJzZmVlZGJhY2tcXHZpZXd1c2Vyc2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3dXNlcnNmZWVkYmFjay92aWV3dXNlcnNmZWVkYmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURDRTtFQUFVLGVBQUE7QUNHWjs7QURGRTtFQUNFLFVBQUE7RUFDRCxpQkFBQTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXd1c2Vyc2ZlZWRiYWNrL3ZpZXd1c2Vyc2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgudGV4dC1jZW50ZXIud2hhdHNhcGljb24ge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICB9XHJcbiAgLnBvaW50ZXIge2N1cnNvcjogcG9pbnRlcjt9XHJcbiAgaW1nLnhsaWNvbiB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICBtYXJnaW4tbGVmdDogMTc0JTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICIsInRoLnRleHQtY2VudGVyLndoYXRzYXBpY29uIHtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmltZy54bGljb24ge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tbGVmdDogMTc0JTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogLTQlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/viewusersfeedback/viewusersfeedback.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/viewusersfeedback/viewusersfeedback.component.ts ***!
  \******************************************************************/
/*! exports provided: ViewusersfeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewusersfeedbackComponent", function() { return ViewusersfeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apiCalls/api-call.service */ "./src/app/apiCalls/api-call.service.ts");
/* harmony import */ var _apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiCalls/excel.service */ "./src/app/apiCalls/excel.service.ts");





let ViewusersfeedbackComponent = class ViewusersfeedbackComponent {
    constructor(apiCall, router, excelservice) {
        this.apiCall = apiCall;
        this.router = router;
        this.excelservice = excelservice;
    }
    ngOnInit() {
        this.getusersfeedbackqueries();
    }
    getusersfeedbackqueries() {
        this.apiCall.getusersfeedbackqueries().subscribe((res) => {
            console.log(res);
            this.personList = res.result;
        });
    }
    exportAsXLSX() {
        this.excelservice.exportAsExcelFile(this.personList, 'sample');
    }
};
ViewusersfeedbackComponent.ctorParameters = () => [
    { type: _apiCalls_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _apiCalls_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"] }
];
ViewusersfeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewusersfeedback',
        template: __webpack_require__(/*! raw-loader!./viewusersfeedback.component.html */ "./node_modules/raw-loader/index.js!./src/app/viewusersfeedback/viewusersfeedback.component.html"),
        styles: [__webpack_require__(/*! ./viewusersfeedback.component.scss */ "./src/app/viewusersfeedback/viewusersfeedback.component.scss")]
    })
], ViewusersfeedbackComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: '/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\git hub\AdminpannelToManageTeam\Frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map