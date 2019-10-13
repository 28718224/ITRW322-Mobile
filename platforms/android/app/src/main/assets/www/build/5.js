webpackJsonp([5],{

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewgroupPageModule", function() { return NewgroupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newgroup__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewgroupPageModule = (function () {
    function NewgroupPageModule() {
    }
    return NewgroupPageModule;
}());
NewgroupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__newgroup__["a" /* NewgroupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newgroup__["a" /* NewgroupPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__newgroup__["a" /* NewgroupPage */]
        ]
    })
], NewgroupPageModule);

//# sourceMappingURL=newgroup.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewgroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_groups_groups__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_imghandler_imghandler__ = __webpack_require__(283);
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
 * Generated class for the NewgroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NewgroupPage = (function () {
    function NewgroupPage(navCtrl, navParams, alertCtrl, groupservice, imghandler, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.groupservice = groupservice;
        this.imghandler = imghandler;
        this.loadingCtrl = loadingCtrl;
        this.newgroup = {
            groupName: 'GroupName',
            groupPic: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
        };
    }
    NewgroupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewgroupPage');
    };
    NewgroupPage.prototype.chooseimage = function () {
        var _this = this;
        if (this.newgroup.groupName == 'GroupName') {
            var namealert = this.alertCtrl.create({
                buttons: ['okay'],
                message: 'Please enter the groupname first. Thanks'
            });
            namealert.present();
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: 'Loading, please wait..'
            });
            loader_1.present();
            this.imghandler.grouppicstore(this.newgroup.groupName).then(function (res) {
                loader_1.dismiss();
                if (res)
                    _this.newgroup.groupPic = res;
            }).catch(function (err) {
                alert(err);
            });
        }
    };
    NewgroupPage.prototype.creategroup = function () {
        var _this = this;
        this.groupservice.addgroup(this.newgroup).then(function () {
            _this.navCtrl.pop();
        }).catch(function (err) {
            alert(JSON.stringify(err));
        });
    };
    NewgroupPage.prototype.editgroupname = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Edit Group Name',
            inputs: [{
                    name: 'groupname',
                    placeholder: 'Give a new groupname'
                }],
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Set',
                    handler: function (data) {
                        if (data.groupname) {
                            _this.newgroup.groupName = data.groupname;
                        }
                        else {
                            _this.newgroup.groupName = 'groupName';
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    return NewgroupPage;
}());
NewgroupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-newgroup',template:/*ion-inline-start:"C:\Users\ipadc\Documents\Cloned repos\ITRW322-Mobile\src\pages\newgroup\newgroup.html"*/'<!--\n\n  Generated template for the NewgroupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="hcolor">\n\n    <ion-title>Add a New Group</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<div class="profile-image" (click)="chooseimage()">\n\n  <img src="{{newgroup.groupPic}}">\n\n</div>\n\n<div>\n\n  <h2 (click)="editgroupname()">{{newgroup.groupName}}</h2>\n\n</div>\n\n<div>\n\n  Tap on the pic or group name to change it.\n\n</div>\n\n<div class="spacer" style="height: 10px;"></div>\n\n<div>\n\n  <button ion-button round outline (click)="creategroup()">Create</button>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ipadc\Documents\Cloned repos\ITRW322-Mobile\src\pages\newgroup\newgroup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_groups_groups__["a" /* GroupsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_imghandler_imghandler__["a" /* ImghandlerProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], NewgroupPage);

//# sourceMappingURL=newgroup.js.map

/***/ })

});
//# sourceMappingURL=5.js.map