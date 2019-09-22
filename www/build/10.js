webpackJsonp([10],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupchatPageModule", function() { return GroupchatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupchat__ = __webpack_require__(470);
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

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupchatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_groups_groups__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_imghandler_imghandler__ = __webpack_require__(282);
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
                var d = new Date(_this.allgroupmsgs[key].timestamp);
                var hours = d.getHours();
                var minutes = "0" + d.getMinutes();
                var month = d.getMonth();
                var da = d.getDate();
                var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                var formattedTime = monthNames[month] + "-" + da + "-" + hours + ":" + minutes.substr(-2);
                _this.allgroupmsgs[key].timestamp = formattedTime;
                if (_this.allgroupmsgs[key].message.substring(0, 4) === 'http') {
                    _this.imgornot.push(true);
                }
                else {
                    _this.imgornot.push(false);
                }
            }
            _this.scrollto();
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
                _this.scrollto();
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
        this.groupservice.addgroupmsg(this.newmessage).then(function () {
            _this.scrollto();
            _this.newmessage = '';
        });
    };
    GroupchatPage.prototype.scrollto = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 1000);
    };
    return GroupchatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], GroupchatPage.prototype, "content", void 0);
GroupchatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-groupchat',template:/*ion-inline-start:"C:\Users\ipadc\Documents\Cloned repos\ITRW322\src\pages\groupchat\groupchat.html"*/'<ion-header>\n\n  <ion-navbar color="hcolor">\n    <ion-title>{{groupName}}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="sendpicmsg()">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n      <button *ngIf="owner" ion-button icon-only (click)="presentOwnerSheet()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <button *ngIf="!owner" ion-button icon-only (click)="presentMemberSheet()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content>\n<div class = "chatwindow">\n  <ion-list no-lines>\n    <ion-item *ngFor = "let item of allgroupmsgs; let i = index" text-wrap>\n      <ion-avatar item-left *ngIf="item.sentby === alignuid">\n        <img src="{{photoURL}}">\n      </ion-avatar>\n      <div class="bubble me" *ngIf="item.sentby === alignuid">\n        <h6 style="color: mediumpurple;">{{item.displayName}}</h6>\n        <h3 *ngIf="!imgornot[i]">{{item.message}}</h3>\n        <img src="{{item.message}}" *ngIf="imgornot[i]">\n        <p><small>{{item.timestamp}}</small></p>\n      </div>\n      <ion-avatar item-right *ngIf="item.sentby != alignuid">\n        <img src="{{item.photoURL}}">\n      </ion-avatar>\n      <div class="bubble you" *ngIf="item.sentby != alignuid">\n        <h6 style="color: mediumvioletred;">{{item.displayName}}</h6>\n        <h3 *ngIf="!imgornot[i]">{{item.message}}</h3>\n        <img src="{{item.message}}" *ngIf="imgornot[i]">\n        <p><small>{{item.timestamp}}</small></p>\n      </div>\n    </ion-item>\n  </ion-list>\n</div>\n</ion-content>\n<ion-footer ion-fixed>\n  <ion-toolbar class="no-border" color="white">\n    <ion-input [(ngModel)]="newmessage" placeholder="Write your message ..."></ion-input>\n    <ion-buttons end>\n      <button ion-button (click)="addgroupmsg()">\n        <ion-icon name="send" color="primary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\ipadc\Documents\Cloned repos\ITRW322\src\pages\groupchat\groupchat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_groups_groups__["a" /* GroupsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_imghandler_imghandler__["a" /* ImghandlerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], GroupchatPage);

//# sourceMappingURL=groupchat.js.map

/***/ })

});
//# sourceMappingURL=10.js.map