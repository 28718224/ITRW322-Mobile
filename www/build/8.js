webpackJsonp([8],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuddychatPageModule", function() { return BuddychatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buddychat__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuddychatPageModule = (function () {
    function BuddychatPageModule() {
    }
    return BuddychatPageModule;
}());
BuddychatPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__buddychat__["a" /* BuddychatPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buddychat__["a" /* BuddychatPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__buddychat__["a" /* BuddychatPage */]
        ]
    })
], BuddychatPageModule);

//# sourceMappingURL=buddychat.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuddychatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_imghandler_imghandler__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(58);
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
 * Generated class for the BuddychatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BuddychatPage = (function () {
    function BuddychatPage(navCtrl, navParams, chatservice, events, zone, loadingCtrl, imgstore) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatservice = chatservice;
        this.events = events;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.imgstore = imgstore;
        this.allmessages = [];
        this.buddy = this.chatservice.buddy;
        this.photoURL = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.photoURL;
        this.scrollto();
        this.events.subscribe('newmessage', function () {
            _this.allmessages = [];
            _this.imgornot = [];
            _this.zone.run(function () {
                _this.allmessages = _this.chatservice.buddymessages;
                for (var key in _this.allmessages) {
                    if (_this.allmessages[key].message.substring(0, 4) == 'http')
                        _this.imgornot.push(true);
                    else
                        _this.imgornot.push(false);
                }
            });
        });
    }
    BuddychatPage.prototype.addmessage = function () {
        var _this = this;
        this.chatservice.addnewmessage(this.newmessage).then(function () {
            _this.content.scrollToBottom();
            _this.newmessage = '';
        });
    };
    BuddychatPage.prototype.ionViewDidEnter = function () {
        this.chatservice.getbuddymessages();
    };
    BuddychatPage.prototype.scrollto = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 1000);
    };
    BuddychatPage.prototype.sendPicMsg = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.imgstore.picmsgstore().then(function (imgurl) {
            loader.dismiss();
            _this.chatservice.addnewmessage(imgurl).then(function () {
                _this.scrollto();
                _this.newmessage = '';
            });
        }).catch(function (err) {
            alert(err);
            loader.dismiss();
        });
    };
    return BuddychatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], BuddychatPage.prototype, "content", void 0);
BuddychatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-buddychat',template:/*ion-inline-start:"C:\Users\ipadc\Documents\Cloned repos\ITRW322\src\pages\buddychat\buddychat.html"*/'<!--\n  Generated template for the BuddychatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="hcolor">\n    <ion-title>{{buddy.displayName}}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="sendPicMsg()">\n      <ion-icon name="camera"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content>\n<div class = "chatwindow">\n  <ion-list no-lines>\n    <ion-item *ngFor = "let item of allmessages; let i = index" text-wrap>\n      <ion-avatar item-left *ngIf="item.sentby === buddy.uid">\n        <img src="{{buddy.photoURL}}">\n      </ion-avatar>\n      <div class="bubble me" *ngIf="item.sentby === buddy.uid">\n        <h3 *ngIf="!imgornot[i]">{{item.message}}</h3>\n        <img src="{{item.message}}" *ngIf="imgornot[i]">\n      </div>\n      <ion-avatar item-right *ngIf="item.sentby != buddy.uid">\n        <img src="{{photoURL}}">\n      </ion-avatar>\n      <div class="bubble you" *ngIf="item.sentby != buddy.uid">\n        <h3 *ngIf="!imgornot[i]">{{item.message}}</h3>\n        <img src="{{item.message}}" *ngIf="imgornot[i]">\n      </div>\n    </ion-item>\n  </ion-list>\n</div>\n</ion-content>\n<ion-footer ion-fixed>\n  <ion-toolbar class="no-border" color="white">\n    <ion-input [(ngModel)]="newmessage" placeholder="Write your message ..."></ion-input>\n    <ion-buttons end>\n      <button ion-button (click)="addmessage()">\n        <ion-icon name="send" color="primary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\ipadc\Documents\Cloned repos\ITRW322\src\pages\buddychat\buddychat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_imghandler_imghandler__["a" /* ImghandlerProvider */]])
], BuddychatPage);

//# sourceMappingURL=buddychat.js.map

/***/ })

});
//# sourceMappingURL=8.js.map