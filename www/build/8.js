webpackJsonp([8],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuddiesPageModule", function() { return BuddiesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buddies__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuddiesPageModule = (function () {
    function BuddiesPageModule() {
    }
    return BuddiesPageModule;
}());
BuddiesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__buddies__["a" /* BuddiesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buddies__["a" /* BuddiesPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__buddies__["a" /* BuddiesPage */]
        ]
    })
], BuddiesPageModule);

//# sourceMappingURL=buddies.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuddiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuddiesPage = (function () {
    function BuddiesPage(navCtrl, navParams, userservice) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.temparr = [];
        this.filteredusers = [];
        this.userservice.getallusers().then(function (res) {
            _this.filteredusers = res;
            _this.temparr = res;
        });
    }
    BuddiesPage.prototype.ionViewDidLoad = function () {
    };
    BuddiesPage.prototype.searchuser = function (searchbar) {
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
    BuddiesPage.prototype.sendreq = function (recipient) {
        var _this = this;
        this.newrequest.sender = firebase.auth().currentUser.uid;
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
    return BuddiesPage;
}());
BuddiesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-buddies',template:/*ion-inline-start:"/Users/juan/Desktop/ITRW322-Mobile/src/pages/buddies/buddies.html"*/'<!--\n  Generated template for the BuddiesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="hcolor">\n    <ion-title>Buddies</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar [(ngModel)]="searchstring" (input)="searchuser($event)" placeholder="Search"></ion-searchbar>\n<ion-list no-lines>\n  <ion-list>\n    <ion-item-sliding *ngFor="let key of filteredusers">\n      <ion-item >\n        <ion-avatar item-left>\n          <img src="{{key.photoURL}}">\n        </ion-avatar>\n        <h2>{{key.displayName}}</h2>\n      </ion-item>\n      <ion-item-options slide="left">\n        <button ion-button color="primary" (click)="sendreq(key)">\n          <ion-icon name="person-add"></ion-icon>\n          Add\n        </button>\n      </ion-item-options>\n      \n    </ion-item-sliding>\n  </ion-list>\n</ion-list>'/*ion-inline-end:"/Users/juan/Desktop/ITRW322-Mobile/src/pages/buddies/buddies.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
], BuddiesPage);

//# sourceMappingURL=buddies.js.map

/***/ })

});
//# sourceMappingURL=8.js.map