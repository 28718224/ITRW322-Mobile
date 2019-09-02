webpackJsonp([7],{

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageModule", function() { return ChatsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chats__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatsPageModule = (function () {
    function ChatsPageModule() {
    }
    return ChatsPageModule;
}());
ChatsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chats__["a" /* ChatsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chats__["a" /* ChatsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__chats__["a" /* ChatsPage */]
        ]
    })
], ChatsPageModule);

//# sourceMappingURL=chats.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_requests_requests__ = __webpack_require__(281);
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
 * Generated class for the ChatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChatsPage = (function () {
    function ChatsPage(navCtrl, navParams, requestservice, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requestservice = requestservice;
        this.events = events;
    }
    ChatsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.requestservice.getmyrequests();
        this.events.subscribe('gotrequests', function () {
            _this.myrequests = [];
            _this.myrequests = _this.requestservice.userdetails;
        });
    };
    ChatsPage.prototype.ionViewDidLeave = function () {
        this.events.unsubscribe('gotrequests');
    };
    ChatsPage.prototype.addbuddy = function () {
        this.navCtrl.push('BuddiesPage');
    };
    return ChatsPage;
}());
ChatsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-chats',template:/*ion-inline-start:"/Users/juan/Desktop/ITRW322-Mobile/src/pages/chats/chats.html"*/'<!--\n  Generated template for the ChatsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="hcolor">\n    <ion-title>Chats</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addbuddy()">\n        <ion-icon name="person-add"></ion-icon>\n      </button>\n    </ion-buttons> \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n<ion-list no-lines>\n  <ion-list-header>\n    Requests\n  </ion-list-header>\n  <ion-item-sliding *ngFor="let item of myrequests">\n    <ion-item>\n    <ion-avatar item-left>\n      <img src="{{item.photoURL}}">\n    </ion-avatar>\n    <h4>{{item.displayName}}</h4>\n    </ion-item>\n    <ion-item-options>\n      <button ion-button color="secondary" (click)="accept(item)">\n        <ion-icon name="checkmark"></ion-icon>\n        ADD\n      </button>\n      <button ion-button color="danger" (click)="ignore(item)">\n        <ion-icon name="trash"></ion-icon>\n        NOPE\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/juan/Desktop/ITRW322-Mobile/src/pages/chats/chats.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_requests_requests__["a" /* RequestsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], ChatsPage);

//# sourceMappingURL=chats.js.map

/***/ })

});
//# sourceMappingURL=7.js.map