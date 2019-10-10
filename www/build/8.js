webpackJsonp([8],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupmembersPageModule", function() { return GroupmembersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupmembers__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupmembersPageModule = (function () {
    function GroupmembersPageModule() {
    }
    return GroupmembersPageModule;
}());
GroupmembersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__groupmembers__["a" /* GroupmembersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__groupmembers__["a" /* GroupmembersPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__groupmembers__["a" /* GroupmembersPage */]
        ]
    })
], GroupmembersPageModule);

//# sourceMappingURL=groupmembers.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupmembersPage; });
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



var GroupmembersPage = (function () {
    function GroupmembersPage(navCtrl, navParams, groupservice, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.groupservice = groupservice;
        this.events = events;
    }
    GroupmembersPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.groupmembers = this.groupservice.currentgroup;
        this.tempgrpmembers = this.groupmembers;
        this.events.subscribe('gotintogroup', function () {
            _this.groupmembers = _this.groupservice.currentgroup;
            _this.tempgrpmembers = _this.groupmembers;
        });
    };
    GroupmembersPage.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe('gotintogroups');
    };
    GroupmembersPage.prototype.searchuser = function (searchbar) {
        var tempmembers = this.tempgrpmembers;
        var q = searchbar.target.value;
        if (q.trim() === '') {
            this.groupmembers = this.tempgrpmembers;
            return;
        }
        tempmembers = tempmembers.filter(function (v) {
            if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            return false;
        });
        this.groupmembers = tempmembers;
    };
    GroupmembersPage.prototype.removemember = function (member) {
        this.groupservice.deletemember(member);
        var sentuser = this.tempgrpmembers.indexOf(member);
        this.tempgrpmembers.splice(sentuser, 1);
    };
    return GroupmembersPage;
}());
GroupmembersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-groupmembers',template:/*ion-inline-start:"C:\Users\ipadc\Documents\Cloned repos\ITRW322-Mobile\src\pages\groupmembers\groupmembers.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="hcolor">\n\n    <ion-title>Group Members</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-searchbar  (input)="searchuser($event)"\n\n                  placeholder="Search">\n\n  </ion-searchbar>\n\n<ion-list no-lines>\n\n  <ion-item-sliding *ngFor="let key of groupmembers">\n\n    <ion-item>\n\n      <ion-avatar item-left>\n\n        <img src="{{key.photoURL}}">\n\n      </ion-avatar>\n\n      <h2>{{key.displayName}}</h2>\n\n    </ion-item>\n\n    <ion-item-options slide="left">\n\n      <button ion-button color="danger" (click)="removemember(key)">\n\n        <ion-icon name="trash"></ion-icon>\n\n        Remove\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ipadc\Documents\Cloned repos\ITRW322-Mobile\src\pages\groupmembers\groupmembers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_groups_groups__["a" /* GroupsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], GroupmembersPage);

//# sourceMappingURL=groupmembers.js.map

/***/ })

});
//# sourceMappingURL=8.js.map