webpackJsonp([12],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandsPageModule", function() { return CommandsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commands__ = __webpack_require__(471);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommandsPageModule = (function () {
    function CommandsPageModule() {
    }
    return CommandsPageModule;
}());
CommandsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__commands__["a" /* CommandsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__commands__["a" /* CommandsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__commands__["a" /* CommandsPage */]
        ]
    })
], CommandsPageModule);

//# sourceMappingURL=commands.module.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_requests_requests__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CommandsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CommandsPage = (function () {
    function CommandsPage(navCtrl, navParams, userservice, alertCtrl, requestservice) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.alertCtrl = alertCtrl;
        this.requestservice = requestservice;
        this.newrequest = {};
        this.temparr = [];
        this.filteredusers = [];
        this.userservice.getallusers().then(function (res) {
            _this.filteredusers = res;
            _this.temparr = res;
        });
    }
    CommandsPage.prototype.ionViewDidLoad = function () {
    };
    CommandsPage.prototype.searchuser = function (searchbar) {
        this.filteredusers = this.temparr;
        var q = searchbar.target.value;
        if (q.trim() == '') {
            return;
        }
        this.filteredusers = this.filteredusers.filter(function (v) {
            if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            return false;
        });
    };
    CommandsPage.prototype.sendcomm = function (recipient) {
        var _this = this;
        this.newrequest.sender = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid;
        this.newrequest.recipient = recipient.uid;
        if (this.newrequest.sender === this.newrequest.recipient)
            alert('You are your friend always');
        else {
            var successalert_1 = this.alertCtrl.create({
                title: 'Request sent',
                subTitle: 'Your request was sent to ' + recipient.displayName,
                buttons: ['ok']
            });
            this.requestservice.sendrequest(this.newrequest).then(function (res) {
                if (res.success) {
                    successalert_1.present();
                    var sentuser = _this.filteredusers.indexOf(recipient);
                    _this.filteredusers.splice(sentuser, 1);
                }
            }).catch(function (err) {
                alert(err);
            });
        }
    };
    return CommandsPage;
}());
CommandsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-commands',template:/*ion-inline-start:"C:\Users\ipadc\Documents\Cloned repos\ITRW322\src\pages\commands\commands.html"*/'<ion-header>\n\n  <ion-navbar color="hcolor">\n    <ion-title>Commands</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar [(ngModel)]= "searchstring" (input)="searchuser($event)" placeholder="Search"></ion-searchbar>\n<ion-list no-lines>\n  <ion-list>\n    <ion-item-sliding *ngFor="let key of filteredusers">\n      <ion-item >\n        <ion-avatar item-left>\n          <img src="{{key.photoURL}}">\n        </ion-avatar>\n        <h2>{{key.displayName}}</h2>\n      </ion-item>\n      <ion-item-options slide="left">\n        <button ion-button color="primary" (click)="sendcomm(key)">\n          <ion-icon name="person-add"></ion-icon>\n          Send command\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n</ion-list>'/*ion-inline-end:"C:\Users\ipadc\Documents\Cloned repos\ITRW322\src\pages\commands\commands.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_requests_requests__["a" /* RequestsProvider */]])
], CommandsPage);

//# sourceMappingURL=commands.js.map

/***/ })

});
//# sourceMappingURL=12.js.map