webpackJsonp([29],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandsPageModule", function() { return CommandsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commands__ = __webpack_require__(471);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommandsPageModule = (function () {
    function CommandsPageModule() {
    }
    return CommandsPageModule;
}());
CommandsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__commands__["a" /* CommandsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__commands__["a" /* CommandsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__commands__["a" /* CommandsPage */]
        ]
    })
], CommandsPageModule);

//# sourceMappingURL=commands.module.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_requests_requests__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_command_command__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
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
 * Generated class for the CommandsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CommandsPage = (function () {
    function CommandsPage(navCtrl, navParams, userservice, alertCtrl, requestservice, actionSheet, commandProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.alertCtrl = alertCtrl;
        this.requestservice = requestservice;
        this.actionSheet = actionSheet;
        this.commandProvider = commandProvider;
        this.newrequest = {};
        this.temparr = [];
        this.filteredusers = [];
        this.userservice.getallusers().then(function (res) {
            _this.filteredusers = res;
            _this.temparr = res;
        });
    }
    CommandsPage.prototype.ionViewDidLoad = function () {
    };
    CommandsPage.prototype.searchuser = function (searchbar) {
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
    CommandsPage.prototype.sendcomm = function (recipient, cmd) {
        this.newrequest.sender = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser.uid;
        this.newrequest.recipient = recipient.uid;
        var successalert = this.alertCtrl.create({
            title: 'Command sent',
            subTitle: 'Your command was sent to ' + recipient.displayName + 'a report on the command success should be in shortly',
            buttons: ['ok']
        });
        this.commandProvider.sendcommand(this.newrequest, cmd).then(function (res) {
            if (res.success) {
                successalert.present();
            }
        }).catch(function (err) {
            alert(err);
        });
    };
    CommandsPage.prototype.presentCommandOptions = function (receiver) {
        var _this = this;
        var sheet = this.actionSheet.create({
            title: 'List of Commands',
            buttons: [
                {
                    text: 'Shut Down PC',
                    icon: 'ios-power',
                    handler: function () {
                        _this.sendcomm(receiver, "ShutDown");
                    }
                },
                {
                    text: 'Sleep PC',
                    icon: 'medkit',
                    handler: function () {
                        _this.sendcomm(receiver, "Sleep");
                    }
                },
                {
                    text: 'Display Popup',
                    icon: 'happy',
                    handler: function () {
                        var alert = _this.alertCtrl.create({
                            title: 'Message',
                            inputs: [
                                {
                                    name: 'Message',
                                    placeholder: 'Message'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Send message',
                                    handler: function (data) {
                                        _this.sendcomm(receiver, "ShowPopup=" + data.Message);
                                    }
                                }
                            ]
                        });
                        alert.present();
                    }
                },
                {
                    text: 'View files of PC(Only if pc is on)',
                    icon: 'folder',
                    handler: function () {
                        _this.sendcomm(receiver, "ShowFileStructure");
                    }
                }, {
                    text: 'Cancel',
                    icon: 'close',
                    role: 'cancel',
                }
            ]
        });
        sheet.present();
    };
    return CommandsPage;
}());
CommandsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-commands',template:/*ion-inline-start:"C:\Users\ipadc\Documents\Cloned repos\ITRW322-Mobile\src\pages\commands\commands.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="hcolor">\n\n    <ion-title>Commands</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-searchbar [(ngModel)]= "searchstring" (input)="searchuser($event)" placeholder="Search"></ion-searchbar>\n\n<ion-list no-lines>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let key of filteredusers" (click)= "presentCommandOptions(key)">\n\n      <ion-item >\n\n        <ion-avatar item-left>\n\n          <img src="{{key.photoURL}}">\n\n        </ion-avatar>\n\n        <h2>{{key.displayName}}</h2>\n\n      </ion-item>\n\n\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-list>'/*ion-inline-end:"C:\Users\ipadc\Documents\Cloned repos\ITRW322-Mobile\src\pages\commands\commands.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_requests_requests__["a" /* RequestsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_command_command__["a" /* CommandProvider */]])
], CommandsPage);

//# sourceMappingURL=commands.js.map

/***/ })

});
//# sourceMappingURL=29.js.map