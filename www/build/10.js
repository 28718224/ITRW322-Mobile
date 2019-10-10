webpackJsonp([10],{

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupchatPageModule", function() { return GroupchatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupchat__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupchatPageModule = (function () {
    function GroupchatPageModule() {
    }
    return GroupchatPageModule;
}());
GroupchatPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__groupchat__["a" /* GroupchatPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__groupchat__["a" /* GroupchatPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__groupchat__["a" /* GroupchatPage */]
        ]
    })
], GroupchatPageModule);

//# sourceMappingURL=groupchat.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupchatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_groups_groups__ = __webpack_require__(281);
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
 * Generated class for the GroupchatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GroupchatPage = (function () {
    function GroupchatPage(navCtrl, navParams, groupservice, actionSheet, events, imgstore, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.groupservice = groupservice;
        this.actionSheet = actionSheet;
        this.events = events;
        this.imgstore = imgstore;
        this.loadingCtrl = loadingCtrl;
        this.owner = false;
        this.alignuid = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid;
        this.photoURL = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.photoURL;
        this.groupName = this.navParams.get('groupName');
        this.groupservice.getownership(this.groupName).then(function (res) {
            if (res)
                _this.owner = true;
        }).catch(function (err) {
            alert(err);
        });
        this.groupservice.getgroupmsgs(this.groupName);
        this.events.subscribe('newgroupmsg', function () {
            _this.allgroupmsgs = [];
            _this.imgornot = [];
            _this.allgroupmsgs = _this.groupservice.groupmsgs;
            for (var key in _this.allgroupmsgs) {
                /*  var d = new Date(this.allgroupmsgs[key].timestamp);
                  var hours = d.getHours();
                  var minutes = "0" + d.getMinutes();
                  var month = d.getMonth();
                  var da = d.getDate();
          
                  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          
                  var formattedTime = monthNames[month] + "-" + da + "-" + hours + ":" + minutes.substr(-2);*/
                var utcSeconds = _this.allgroupmsgs[key].timestamp;
                var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
                d.setUTCSeconds(utcSeconds);
                _this.allgroupmsgs[key].timestamp = d.toString().substr(0, d.toString().indexOf('GMT') - 1);
                if (_this.allgroupmsgs[key].message.substring(0, 4) === _this.CaesarCipher('http', 13)) {
                    _this.imgornot.push(true);
                }
                else {
                    _this.imgornot.push(false);
                }
            }
            try {
                _this.scrollto();
            }
            catch (err) {
            }
        });
    }
    GroupchatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GroupchatPage');
    };
    GroupchatPage.prototype.sendpicmsg = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.imgstore.picmsgstore().then(function (imgurl) {
            loader.dismiss();
            _this.groupservice.addgroupmsg(imgurl).then(function () {
                try {
                    _this.scrollto();
                }
                catch (err) {
                }
                _this.newmessage = '';
            });
        }).catch(function (err) {
            alert(err);
            loader.dismiss();
        });
    };
    GroupchatPage.prototype.presentOwnerSheet = function () {
        var _this = this;
        var sheet = this.actionSheet.create({
            title: 'Group Actions',
            buttons: [
                {
                    text: 'Add member',
                    icon: 'person-add',
                    handler: function () {
                        _this.navCtrl.push('GroupbuddiesPage');
                    }
                },
                {
                    text: 'Remove member',
                    icon: 'remove-circle',
                    handler: function () {
                        _this.navCtrl.push('GroupmembersPage');
                    }
                },
                {
                    text: 'Group Info',
                    icon: 'person',
                    handler: function () {
                        _this.navCtrl.push('GroupinfoPage', { groupName: _this.groupName });
                    }
                },
                {
                    text: 'Delete Group',
                    icon: 'trash',
                    handler: function () {
                        _this.groupservice.deletegroup().then(function () {
                            _this.navCtrl.pop();
                        }).catch(function (err) {
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: 'cancel',
                    handler: function () {
                        console.log('Cancelled');
                    }
                }
            ]
        });
        sheet.present();
    };
    GroupchatPage.prototype.presentMemberSheet = function () {
        var _this = this;
        var sheet = this.actionSheet.create({
            title: 'Group Actions',
            buttons: [
                {
                    text: 'Leave Group',
                    icon: 'log-out',
                    handler: function () {
                        _this.groupservice.leavegroup().then(function () {
                            _this.navCtrl.pop();
                        }).catch(function (err) {
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Group Info',
                    icon: 'person',
                    handler: function () {
                        _this.navCtrl.push('GroupinfoPage', { groupName: _this.groupName });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: 'cancel',
                    handler: function () {
                        console.log('Cancelled');
                    }
                }
            ]
        });
        sheet.present();
    };
    GroupchatPage.prototype.addgroupmsg = function () {
        var _this = this;
        if (this.newmessage.length != " ") {
            this.groupservice.addgroupmsg(this.newmessage).then(function () {
                _this.scrollto();
                _this.newmessage = '';
            });
        }
    };
    GroupchatPage.prototype.scrollto = function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.content.scrollToBottom();
            }, 1000);
        }
        catch (err) {
        }
    };
    GroupchatPage.prototype.CaesarCipher = function (str, num) {
        // you can comment this line
        var result = '';
        var charcode = 0;
        for (var i = 0; i < str.length; i++) {
            charcode = (str[i].charCodeAt()) + num;
            result += String.fromCharCode(charcode);
        }
        return result;
    };
    return GroupchatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('content'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]) === "function" && _a || Object)
], GroupchatPage.prototype, "content", void 0);
GroupchatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-groupchat',template:/*ion-inline-start:"C:\Users\ipadc\Documents\Cloned repos\ITRW322-Mobile\src\pages\groupchat\groupchat.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="hcolor">\n\n    <ion-title>{{groupName}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="sendpicmsg()">\n\n        <ion-icon name="camera"></ion-icon>\n\n      </button>\n\n      <button *ngIf="owner" ion-button icon-only (click)="presentOwnerSheet()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <button *ngIf="!owner" ion-button icon-only (click)="presentMemberSheet()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content #content>\n\n<div class = "chatwindow">\n\n  <ion-list no-lines>\n\n    <ion-item *ngFor = "let item of allgroupmsgs; let i = index" text-wrap>\n\n\n\n      <div class="bubble you" *ngIf="item.sentby === alignuid">\n\n        <h6 style="color: mediumpurple;">{{item.displayName}}</h6>\n\n        <h3 *ngIf="!imgornot[i]">{{this.CaesarCipher(item.message,-13)}}</h3>\n\n        <img src="{{this.CaesarCipher(item.message,-13)}}" *ngIf="imgornot[i]">\n\n        <p><small>{{item.timestamp}}</small></p>\n\n      </div>\n\n\n\n      <div class="bubble me" *ngIf="item.sentby != alignuid">\n\n        <h6 style="color: mediumvioletred;">{{item.displayName}}</h6>\n\n        <h3 *ngIf="!imgornot[i]">{{this.CaesarCipher(item.message,-13)}}</h3>\n\n        <img src="{{this.CaesarCipher(item.message,-13)}}" *ngIf="imgornot[i]">\n\n        <p><small>{{item.timestamp}}</small></p>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n</ion-content>\n\n<ion-footer ion-fixed>\n\n  <ion-toolbar class="no-border" color="white">\n\n    <ion-input [(ngModel)]="newmessage" placeholder="Write your message ..."></ion-input>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="addgroupmsg()">\n\n        <ion-icon name="send" color="primary"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\ipadc\Documents\Cloned repos\ITRW322-Mobile\src\pages\groupchat\groupchat.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_groups_groups__["a" /* GroupsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_groups_groups__["a" /* GroupsProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__providers_imghandler_imghandler__["a" /* ImghandlerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_imghandler_imghandler__["a" /* ImghandlerProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _h || Object])
], GroupchatPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=groupchat.js.map

/***/ })

});
//# sourceMappingURL=10.js.map