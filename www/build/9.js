webpackJsonp([9],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupinfoPageModule", function() { return GroupinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupinfo__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupinfoPageModule = (function () {
    function GroupinfoPageModule() {
    }
    return GroupinfoPageModule;
}());
GroupinfoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__groupinfo__["a" /* GroupinfoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__groupinfo__["a" /* GroupinfoPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__groupinfo__["a" /* GroupinfoPage */]
        ]
    })
], GroupinfoPageModule);

//# sourceMappingURL=groupinfo.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_groups_groups__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupinfoPage = (function () {
    function GroupinfoPage(navCtrl, navParams, groupservice, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.groupservice = groupservice;
        this.events = events;
    }
    GroupinfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.groupservice.getownership(this.groupservice.currentgroupname).then(function (res) {
            if (res)
                _this.groupmembers = _this.groupservice.currentgroup;
            else {
                _this.groupservice.getgroupmembers();
            }
        });
        this.events.subscribe('gotmembers', function () {
            _this.groupmembers = _this.groupservice.currentgroup;
        });
    };
    GroupinfoPage.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe('gotmembers');
    };
    return GroupinfoPage;
}());
GroupinfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-groupinfo',template:/*ion-inline-start:"C:\Users\ipadc\Documents\Cloned repos\ITRW322\src\pages\groupinfo\groupinfo.html"*/'<ion-header>\n\n  <ion-navbar color="hcolor">\n    <ion-title>Group Info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list no-lines>\n    <ion-list-header>\n      Group Members\n    </ion-list-header>\n    <ion-item *ngFor="let item of groupmembers">\n      <ion-avatar item-left>\n        <img src="{{item.photoURL}}">\n      </ion-avatar>\n      <h2>{{item.displayName}}</h2>\n      <p>Member</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ipadc\Documents\Cloned repos\ITRW322\src\pages\groupinfo\groupinfo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_groups_groups__["a" /* GroupsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], GroupinfoPage);

//# sourceMappingURL=groupinfo.js.map

/***/ })

});
//# sourceMappingURL=9.js.map