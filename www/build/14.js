webpackJsonp([14],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuddychatPageModule", function() { return BuddychatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buddychat__ = __webpack_require__(469);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buddychat__["a" /* BuddychatPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__buddychat__["a" /* BuddychatPage */]
        ]
    })
], BuddychatPageModule);

//# sourceMappingURL=buddychat.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuddychatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_imghandler_imghandler__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(42);
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
                    if (_this.allmessages[key].message.substring(0, 4) == _this.CaesarCipher('http', 13))
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
        try {
            setTimeout(function () {
                _this.content.scrollToBottom();
            }, 1000);
        }
        catch (err) {
        }
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
    BuddychatPage.prototype.CaesarCipher = function (str, num) {
        // you can comment this line
        var result = '';
        var charcode = 0;
        for (var i = 0; i < str.length; i++) {
            charcode = (str[i].charCodeAt()) + num;
            result += String.fromCharCode(charcode);
        }
        return result;
    };
    return BuddychatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('content'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]) === "function" && _a || Object)
], BuddychatPage.prototype, "content", void 0);
BuddychatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-buddychat',template:/*ion-inline-start:"C:\Users\ipadc\Documents\Cloned repos\ITRW322\src\pages\buddychat\buddychat.html"*/'<!--\n\n  Generated template for the BuddychatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="hcolor">\n\n    <ion-title>{{buddy.displayName}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="sendPicMsg()">\n\n      <ion-icon name="camera"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content #content>\n\n<div class = "chatwindow">\n\n  <ion-list no-lines>\n\n    <ion-item *ngFor = "let item of allmessages; let i = index" text-wrap>\n\n      <ion-avatar item-left *ngIf="item.sentby === buddy.uid">\n\n        <img src="{{buddy.photoURL}}">\n\n      </ion-avatar>\n\n      <div class="bubble me" *ngIf="item.sentby === buddy.uid">\n\n        <h3 *ngIf="!imgornot[i]">{{this.CaesarCipher(item.message,-13)}}</h3>\n\n        <img src="{{this.CaesarCipher(item.message,-13)}}" *ngIf="imgornot[i]">\n\n      </div>\n\n      <ion-avatar item-right *ngIf="item.sentby != buddy.uid">\n\n        <img src="{{photoURL}}">\n\n      </ion-avatar>\n\n      <div class="bubble you" *ngIf="item.sentby != buddy.uid">\n\n        <h3 *ngIf="!imgornot[i]">{{this.CaesarCipher(item.message,-13)}}</h3>\n\n        <img src="{{this.CaesarCipher(item.message,-13)}}" *ngIf="imgornot[i]">\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n</ion-content>\n\n<ion-footer ion-fixed>\n\n  <ion-toolbar class="no-border" color="white">\n\n    <ion-input [(ngModel)]="newmessage" placeholder="Write your message ..."></ion-input>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="addmessage()">\n\n        <ion-icon name="send" color="primary"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\ipadc\Documents\Cloned repos\ITRW322\src\pages\buddychat\buddychat.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__providers_imghandler_imghandler__["a" /* ImghandlerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_imghandler_imghandler__["a" /* ImghandlerProvider */]) === "function" && _h || Object])
], BuddychatPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=buddychat.js.map

/***/ })

});
//# sourceMappingURL=14.js.map