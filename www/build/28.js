webpackJsonp([28],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupbuddiesPageModule", function() { return GroupbuddiesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupbuddies__ = __webpack_require__(472);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupbuddiesPageModule = (function () {
    function GroupbuddiesPageModule() {
    }
    return GroupbuddiesPageModule;
}());
GroupbuddiesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__groupbuddies__["a" /* GroupbuddiesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__groupbuddies__["a" /* GroupbuddiesPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__groupbuddies__["a" /* GroupbuddiesPage */]
        ]
    })
], GroupbuddiesPageModule);

//# sourceMappingURL=groupbuddies.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupbuddiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_requests_requests__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_groups_groups__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupbuddiesPage = (function () {
    function GroupbuddiesPage(navCtrl, navParams, requestservice, events, groupservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requestservice = requestservice;
        this.events = events;
        this.groupservice = groupservice;
        this.myfriends = [];
        this.groupmembers = [];
        this.tempmyfriends = [];
    }
    GroupbuddiesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.requestservice.getmyfriends();
        this.events.subscribe('gotintogroup', function () {
            _this.myfriends.splice(_this.myfriends.indexOf(_this.newbuddy.uid), 1);
            _this.tempmyfriends = _this.myfriends;
        });
        this.events.subscribe('friends', function () {
            _this.myfriends = [];
            _this.myfriends = _this.requestservice.myfriends;
            _this.groupmembers = _this.groupservice.currentgroup;
            for (var key in _this.groupmembers)
                for (var friend in _this.myfriends) {
                    if (_this.groupmembers[key].uid === _this.myfriends[friend].uid)
                        _this.myfriends.splice(_this.myfriends.indexOf(_this.myfriends[friend]), 1);
                }
            _this.tempmyfriends = _this.myfriends;
        });
    };
    GroupbuddiesPage.prototype.searchuser = function (searchbar) {
        var tempfriends = this.tempmyfriends;
        var q = searchbar.target.value;
        if (q.trim() === '') {
            this.myfriends = this.tempmyfriends;
            return;
        }
        tempfriends = tempfriends.filter(function (v) {
            if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            return false;
        });
        this.myfriends = tempfriends;
    };
    GroupbuddiesPage.prototype.addbuddy = function (buddy) {
        this.newbuddy = buddy;
        this.groupservice.addmember(buddy);
        var sentuser = this.tempmyfriends.indexOf(buddy);
        this.tempmyfriends.splice(sentuser, 1);
    };
    return GroupbuddiesPage;
}());
GroupbuddiesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-groupbuddies',template:/*ion-inline-start:"C:\Users\ipadc\Documents\Cloned repos\ITRW322-Mobile\src\pages\groupbuddies\groupbuddies.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="hcolor">\n\n    <ion-title>Group Buddies</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-searchbar [(ngModel)]="searchstring" (input)="searchuser($event)"\n\n                  placeholder="Search">\n\n  </ion-searchbar>\n\n<ion-list no-lines>\n\n  <ion-item-sliding *ngFor="let key of myfriends">\n\n    <ion-item>\n\n      <ion-avatar item-left>\n\n        <img src="{{key.photoURL}}">\n\n      </ion-avatar>\n\n      <h2>{{key.displayName}}</h2>\n\n    </ion-item>\n\n    <ion-item-options slide="left">\n\n      <button ion-button color="primary" (click)="addbuddy(key)">\n\n        <ion-icon name="person-add"></ion-icon>\n\n        Add\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ipadc\Documents\Cloned repos\ITRW322-Mobile\src\pages\groupbuddies\groupbuddies.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_requests_requests__["a" /* RequestsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_groups_groups__["a" /* GroupsProvider */]])
], GroupbuddiesPage);

//# sourceMappingURL=groupbuddies.js.map

/***/ })

});
//# sourceMappingURL=28.js.map