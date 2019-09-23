webpackJsonp([7],{

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPageModule", function() { return GroupsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groups__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupsPageModule = (function () {
    function GroupsPageModule() {
    }
    return GroupsPageModule;
}());
GroupsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__groups__["a" /* GroupsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__groups__["a" /* GroupsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__groups__["a" /* GroupsPage */]
        ]
    })
], GroupsPageModule);

//# sourceMappingURL=groups.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
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



/**
 * Generated class for the GroupsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GroupsPage = (function () {
    function GroupsPage(navCtrl, navParams, events, loadingCtrl, groupservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.groupservice = groupservice;
    }
    GroupsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Getting your groups, Please wait...'
        });
        loader.present();
        this.groupservice.getmygroups();
        loader.dismiss();
        this.events.subscribe('allmygroups', function () {
            _this.allmygroups = _this.groupservice.mygroups;
        });
    };
    GroupsPage.prototype.ionViewDidLeave = function () {
        this.events.unsubscribe('allmygroups');
    };
    GroupsPage.prototype.addgroup = function () {
        this.navCtrl.push('NewgroupPage');
    };
    GroupsPage.prototype.openchat = function (group) {
        this.groupservice.getintogroup(group.groupName);
        this.navCtrl.push('GroupchatPage', { groupName: group.groupName });
    };
    return GroupsPage;
}());
GroupsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-groups',template:/*ion-inline-start:"C:\Users\ipadc\Documents\Cloned repos\ITRW322\src\pages\groups\groups.html"*/'<!--\n\n  Generated template for the GroupsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="hcolor">\n\n    <ion-title>Groups</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addgroup()">\n\n        <ion-icon name="contacts"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<ion-list no-lines>\n\n  <ion-list-header>\n\n    My Groups\n\n  </ion-list-header>\n\n  <ion-item *ngFor="let item of allmygroups">\n\n    <ion-avatar item-left>\n\n      <img src="{{item.groupimage}}">\n\n    </ion-avatar>\n\n    <h3 (click)="openchat(item)">{{item.groupName}}</h3>\n\n  </ion-item>\n\n</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ipadc\Documents\Cloned repos\ITRW322\src\pages\groups\groups.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_groups_groups__["a" /* GroupsProvider */]])
], GroupsPage);

//# sourceMappingURL=groups.js.map

/***/ })

});
//# sourceMappingURL=7.js.map