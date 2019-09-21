webpackJsonp([15],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserProvider provider.
 
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var UserProvider = (function () {
    function UserProvider(afireauth) {
        this.afireauth = afireauth;
        this.firedata = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users');
    }
    /*
   
    Adds a new user to the system.
   
    Called from - signup.ts
    Inputs - The new user object containing the email, password and displayName.
    Outputs - Promise.
    
     */
    UserProvider.prototype.adduser = function (newuser) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(function () {
                _this.afireauth.auth.currentUser.updateProfile({
                    displayName: newuser.displayName,
                    photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
                }).then(function () {
                    _this.firedata.child(_this.afireauth.auth.currentUser.uid).set({
                        uid: _this.afireauth.auth.currentUser.uid,
                        displayName: newuser.displayName,
                        photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
                    }).then(function () {
                        resolve({ success: true });
                    }).catch(function (err) {
                        reject(err);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    /*
   
    For resetting the password of the user.
    Called from - passwordreset.ts
    Inputs - email of the user.
    Output - Promise.
    
     */
    UserProvider.prototype.passwordreset = function (email) {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().sendPasswordResetEmail(email).then(function () {
                resolve({ success: true });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    /*
    
    For updating the users collection and the firebase users list with
    the imageurl of the profile picture stored in firebase storage.
   
    Called from - profilepic.ts
    Inputs - Url of the image stored in firebase.
    OUtputs - Promise.
    
    */
    UserProvider.prototype.updateimage = function (imageurl) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: _this.afireauth.auth.currentUser.displayName,
                photoURL: imageurl
            }).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users/' + __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    displayName: _this.afireauth.auth.currentUser.displayName,
                    photoURL: imageurl,
                    uid: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.getuserdetails = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firedata.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.updatedisplayname = function (newname) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: newname,
                photoURL: _this.afireauth.auth.currentUser.photoURL
            }).then(function () {
                _this.firedata.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    displayName: newname,
                    photoURL: _this.afireauth.auth.currentUser.photoURL,
                    uid: _this.afireauth.auth.currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.getallusers = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firedata.orderByChild('uid').once('value', function (snapshot) {
                var userdata = snapshot.val();
                var temparr = [];
                for (var key in userdata) {
                    temparr.push(userdata[key]);
                }
                resolve(temparr);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
], UserProvider);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/buddies/buddies.module": [
		452,
		14
	],
	"../pages/buddychat/buddychat.module": [
		455,
		13
	],
	"../pages/chats/chats.module": [
		451,
		12
	],
	"../pages/groupbuddies/groupbuddies.module": [
		453,
		11
	],
	"../pages/groupchat/groupchat.module": [
		454,
		10
	],
	"../pages/groupinfo/groupinfo.module": [
		465,
		9
	],
	"../pages/groupmembers/groupmembers.module": [
		457,
		8
	],
	"../pages/groups/groups.module": [
		456,
		7
	],
	"../pages/login/login.module": [
		459,
		6
	],
	"../pages/newgroup/newgroup.module": [
		458,
		5
	],
	"../pages/passwordreset/passwordreset.module": [
		460,
		4
	],
	"../pages/profile/profile.module": [
		463,
		3
	],
	"../pages/profilepic/profilepic.module": [
		464,
		2
	],
	"../pages/signup/signup.module": [
		462,
		1
	],
	"../pages/tabs/tabs.module": [
		461,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 194;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GroupsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var GroupsProvider = (function () {
    function GroupsProvider(events) {
        this.events = events;
        this.firegroup = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/groups');
        this.mygroups = [];
        this.currentgroup = [];
        this.groupmsgs = [];
    }
    GroupsProvider.prototype.addgroup = function (newGroup) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(newGroup.groupName).set({
                groupimage: newGroup.groupPic,
                msgboard: '',
                owner: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid
            }).then(function () {
                resolve(true);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    GroupsProvider.prototype.getmygroups = function () {
        var _this = this;
        this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
            _this.mygroups = [];
            if (snapshot.val() != null) {
                var temp = snapshot.val();
                for (var key in temp) {
                    var newgroup = {
                        groupName: key,
                        groupimage: temp[key].groupimage
                    };
                    _this.mygroups.push(newgroup);
                }
            }
            _this.events.publish('allmygroups');
        });
    };
    GroupsProvider.prototype.getownership = function (groupname) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(groupname).once('value', function (snapshot) {
                var temp = snapshot.val().owner;
                if (temp == __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    GroupsProvider.prototype.getintogroup = function (groupname) {
        var _this = this;
        if (groupname != null) {
            this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(groupname).once('value', function (snapshot) {
                if (snapshot.val() != null) {
                    var temp = snapshot.val().members;
                    _this.currentgroup = [];
                    for (var key in temp) {
                        _this.currentgroup.push(temp[key]);
                    }
                    _this.currentgroupname = groupname;
                }
            });
        }
    };
    GroupsProvider.prototype.getgroupimage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(_this.currentgroupname).once('value', function (snapshot) {
                _this.grouppic = snapshot.val().groupimage;
                resolve(true);
            });
        });
    };
    GroupsProvider.prototype.addmember = function (newmember) {
        var _this = this;
        console.log('1' + __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
        console.log('2' + this.currentgroupname);
        this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(this.currentgroupname).child('members').push(newmember).then(function () {
            _this.getgroupimage().then(function () {
                _this.firegroup.child(newmember.uid).child(_this.currentgroupname).set({
                    groupimage: _this.grouppic,
                    owner: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                    msgboard: ''
                }).catch(function (err) {
                    console.log(err);
                });
            });
            _this.getintogroup(_this.currentgroupname);
        });
    };
    GroupsProvider.prototype.deletemember = function (member) {
        var _this = this;
        this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(this.currentgroupname)
            .child('members').orderByChild('uid').equalTo(member.uid).once('value', function (snapshot) {
            snapshot.ref.remove().then(function () {
                _this.firegroup.child(member.uid).child(_this.currentgroupname).remove().then(function () {
                    _this.getintogroup(_this.currentgroupname);
                });
            });
        });
    };
    GroupsProvider.prototype.getgroupmembers = function () {
        var _this = this;
        this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(this.currentgroupname).once('value', function (snapshot) {
            var tempdata = snapshot.val().owner;
            _this.firegroup.child(tempdata).child(_this.currentgroupname).child('members').once('value', function (snapshot) {
                var tempvar = snapshot.val();
                for (var key in tempvar) {
                    _this.currentgroup.push(tempvar[key]);
                }
            });
        });
        this.events.publish('gotmembers');
    };
    GroupsProvider.prototype.leavegroup = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(_this.currentgroupname).once('value', function (snapshot) {
                var tempowner = snapshot.val().owner;
                _this.firegroup.child(tempowner).child(_this.currentgroupname).child('members').orderByChild('uid')
                    .equalTo(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                    snapshot.ref.remove().then(function () {
                        _this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(_this.currentgroupname).remove().then(function () {
                            resolve(true);
                        }).catch(function (err) {
                            reject(err);
                        });
                    }).catch(function (err) {
                        reject(err);
                    });
                });
            });
        });
    };
    GroupsProvider.prototype.deletegroup = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(_this.currentgroupname).child('members').once('value', function (snapshot) {
                var tempmembers = snapshot.val();
                for (var key in tempmembers) {
                    _this.firegroup.child(tempmembers[key].uid).child(_this.currentgroupname).remove();
                }
                _this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(_this.currentgroupname).remove().then(function () {
                    resolve(true);
                }).catch(function (err) {
                    reject(err);
                });
            });
        });
    };
    GroupsProvider.prototype.addgroupmsg = function (newmessage) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(_this.currentgroupname).child('owner').once('value', function (snapshot) {
                var tempowner = snapshot.val();
                _this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(_this.currentgroupname).child('msgboard').push({
                    sentby: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                    displayName: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.displayName,
                    photoURL: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.photoURL,
                    message: newmessage,
                    timestamp: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database.ServerValue.TIMESTAMP
                }).then(function () {
                    if (tempowner != __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid) {
                        _this.firegroup.child(tempowner).child(_this.currentgroupname).child('msgboard').push({
                            sentby: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                            displayName: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.displayName,
                            photoURL: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.photoURL,
                            message: newmessage,
                            timestamp: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database.ServerValue.TIMESTAMP
                        });
                    }
                    var tempmembers = [];
                    _this.firegroup.child(tempowner).child(_this.currentgroupname).child('members').once('value', function (snapshot) {
                        var tempmembersobj = snapshot.val();
                        for (var key in tempmembersobj)
                            tempmembers.push(tempmembersobj[key]);
                    }).then(function () {
                        var postedmsgs = tempmembers.map(function (item) {
                            if (item.uid != __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid) {
                                return new Promise(function (resolve) {
                                    _this.postmsgs(item, newmessage, resolve);
                                });
                            }
                        });
                        Promise.all(postedmsgs).then(function () {
                            _this.getgroupmsgs(_this.currentgroupname);
                            resolve(true);
                        });
                    });
                });
            });
        });
    };
    GroupsProvider.prototype.postmsgs = function (member, msg, cb) {
        this.firegroup.child(member.uid).child(this.currentgroupname).child('msgboard').push({
            sentby: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
            displayName: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.displayName,
            photoURL: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.photoURL,
            message: msg,
            timestamp: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database.ServerValue.TIMESTAMP
        }).then(function () {
            cb();
        });
    };
    GroupsProvider.prototype.getgroupmsgs = function (groupname) {
        var _this = this;
        this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(groupname).child('msgboard').on('value', function (snapshot) {
            var tempmsgholder = snapshot.val();
            _this.groupmsgs = [];
            for (var key in tempmsgholder)
                _this.groupmsgs.push(tempmsgholder[key]);
            _this.events.publish('newgroupmsg');
        });
    };
    return GroupsProvider;
}());
GroupsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]) === "function" && _a || Object])
], GroupsProvider);

var _a;
//# sourceMappingURL=groups.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImghandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_chooser__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ImghandlerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ImghandlerProvider = (function () {
    function ImghandlerProvider(filechooser) {
        this.filechooser = filechooser;
        this.firestore = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage();
    }
    /*
   
    For uploading an image to firebase storage.
   
    Called from - profilepic.ts
    Inputs - None.
    Outputs - The image url of the stored image.
   
     */
    ImghandlerProvider.prototype.uploadimage = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.filechooser.open().then(function (url) {
                window.FilePath.resolveNativePath(url, function (result) {
                    _this.nativepath = result;
                    window.resolveLocalFileSystemURL(_this.nativepath, function (res) {
                        res.file(function (resFile) {
                            var reader = new FileReader();
                            reader.readAsArrayBuffer(resFile);
                            reader.onloadend = function (evt) {
                                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                                var imageStore = _this.firestore.ref('/profileimages').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
                                imageStore.put(imgBlob).then(function (res) {
                                    _this.firestore.ref('/profileimages').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).getDownloadURL().then(function (url) {
                                        resolve(url);
                                    }).catch(function (err) {
                                        reject(err);
                                    });
                                }).catch(function (err) {
                                    reject(err);
                                });
                            };
                        });
                    });
                });
            });
        });
        return promise;
    };
    ImghandlerProvider.prototype.picmsgstore = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.filechooser.open().then(function (url) {
                window.FilePath.resolveNativePath(url, function (result) {
                    _this.nativepath = result;
                    window.resolveLocalFileSystemURL(_this.nativepath, function (res) {
                        res.file(function (resFile) {
                            var reader = new FileReader();
                            reader.readAsArrayBuffer(resFile);
                            reader.onloadend = function (evt) {
                                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                                var uuid = _this.guid();
                                var imageStore = _this.firestore.ref('/picmsgs').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child('picmsg' + uuid);
                                imageStore.put(imgBlob).then(function (res) {
                                    resolve(res.downloadURL);
                                }).catch(function (err) {
                                    reject(err);
                                });
                            };
                        });
                    });
                });
            });
        });
        return promise;
    };
    ImghandlerProvider.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    ImghandlerProvider.prototype.grouppicstore = function (groupname) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.filechooser.open().then(function (url) {
                window.FilePath.resolveNativePath(url, function (result) {
                    _this.nativepath = result;
                    window.resolveLocalFileSystemURL(_this.nativepath, function (res) {
                        res.file(function (resFile) {
                            var reader = new FileReader();
                            reader.readAsArrayBuffer(resFile);
                            reader.onloadend = function (evt) {
                                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                                var imageStore = _this.firestore.ref('/groupimages').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(groupname);
                                imageStore.put(imgBlob).then(function (res) {
                                    _this.firestore.ref('/profileimages').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(groupname).getDownloadURL().then(function (url) {
                                        resolve(url);
                                    }).catch(function (err) {
                                        reject(err);
                                    });
                                }).catch(function (err) {
                                    reject(err);
                                });
                            };
                        });
                    });
                });
            });
        });
        return promise;
    };
    return ImghandlerProvider;
}());
ImghandlerProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_file_chooser__["a" /* FileChooser */]])
], ImghandlerProvider);

//# sourceMappingURL=imghandler.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RequestsProvider provider.
 
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var RequestsProvider = (function () {
    function RequestsProvider(userservice, events) {
        this.userservice = userservice;
        this.events = events;
        this.firereq = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/requests');
        this.firefriends = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/friends');
    }
    RequestsProvider.prototype.sendrequest = function (req) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firereq
                .child(req.recipient)
                .push().set({
                sender: req.sender,
            })
                .then(function () {
                resolve({ success: true });
            })
                .catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    RequestsProvider.prototype.getmyrequests = function () {
        var _this = this;
        var allmyrequests;
        var myrequests = [];
        this.firereq.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).on('value', function (snapshot) {
            allmyrequests = snapshot.val();
            myrequests = [];
            for (var i in allmyrequests) {
                myrequests.push(allmyrequests[i].sender);
            }
            _this.userservice.getallusers().then(function (res) {
                var allusers = res;
                _this.userdetails = [];
                for (var j in myrequests)
                    for (var key in allusers) {
                        if (myrequests[j] === allusers[key].uid) {
                            _this.userdetails.push(allusers[key]);
                        }
                    }
                _this.events.publish('gotrequests');
            });
        });
    };
    RequestsProvider.prototype.acceptrequest = function (buddy) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.myfriends = [];
            _this.firefriends.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).push().set({
                uid: buddy.uid
            }).then(function () {
                _this.firefriends.child(buddy.uid).push().set({
                    uid: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid
                }).then(function () {
                    _this.deleterequest(buddy).then(function () {
                        resolve(true);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    RequestsProvider.prototype.deleterequest = function (buddy) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firereq.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).orderByChild('sender').equalTo(buddy.uid).once('value', function (snapshot) {
                var somekey;
                for (var key in snapshot.val())
                    somekey = key;
                _this.firereq.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).child(somekey).remove().then(function () {
                    resolve(true);
                });
            })
                .then(function () {
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    RequestsProvider.prototype.getmyfriends = function () {
        var _this = this;
        var friendsuid = [];
        this.firefriends.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).on('value', function (snapshot) {
            var allfriends = snapshot.val();
            _this.myfriends = [];
            for (var i in allfriends)
                friendsuid.push(allfriends[i].uid);
            _this.userservice.getallusers().then(function (users) {
                _this.myfriends = [];
                for (var j in friendsuid)
                    for (var key in users) {
                        if (friendsuid[j] === users[key].uid) {
                            _this.myfriends.push(users[key]);
                        }
                    }
                _this.events.publish('friends');
            }).catch(function (err) {
                alert(err);
            });
        });
    };
    return RequestsProvider;
}());
RequestsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], RequestsProvider);

//# sourceMappingURL=requests.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ChatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ChatProvider = (function () {
    function ChatProvider(events) {
        this.events = events;
        this.firebuddychats = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/buddychats');
        this.buddymessages = [];
    }
    ChatProvider.prototype.initializebuddy = function (buddy) {
        this.buddy = buddy;
    };
    ChatProvider.prototype.addnewmessage = function (msg) {
        var _this = this;
        if (this.buddy) {
            var promise = new Promise(function (resolve, reject) {
                _this.firebuddychats.child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).child(_this.buddy.uid).push({
                    sentby: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid,
                    message: msg,
                    timestamp: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database.ServerValue.TIMESTAMP
                }).then(function () {
                    _this.firebuddychats.child(_this.buddy.uid).child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).push({
                        sentby: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid,
                        message: msg,
                        timestamp: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database.ServerValue.TIMESTAMP
                    }).then(function () {
                        resolve(true);
                    });
                });
            });
            return promise;
        }
    };
    ChatProvider.prototype.getbuddymessages = function () {
        var _this = this;
        var temp;
        this.firebuddychats.child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).child(this.buddy.uid).on('value', function (snapshot) {
            _this.buddymessages = [];
            temp = snapshot.val();
            for (var tempkey in temp) {
                _this.buddymessages.push(temp[tempkey]);
            }
            _this.events.publish('newmessage');
        });
    };
    return ChatProvider;
}());
ChatProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
], ChatProvider);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AuthProvider = (function () {
    function AuthProvider(afireauth) {
        this.afireauth = afireauth;
    }
    /*
        For logging in a particular user. Called from the login.ts file.
      
    */
    AuthProvider.prototype.login = function (credentials) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(function () {
                resolve(true);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(303);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_firebaseconfig__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_user__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_imghandler_imghandler__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_ngx__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_chooser__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_path_ngx__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_requests_requests__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_chat_chat__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_groups_groups__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], { tabsPlacement: 'top' }, {
                links: [
                    { loadChildren: '../pages/chats/chats.module#ChatsPageModule', name: 'ChatsPage', segment: 'chats', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/buddies/buddies.module#BuddiesPageModule', name: 'BuddiesPage', segment: 'buddies', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/groupbuddies/groupbuddies.module#GroupbuddiesPageModule', name: 'GroupbuddiesPage', segment: 'groupbuddies', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/groupchat/groupchat.module#GroupchatPageModule', name: 'GroupchatPage', segment: 'groupchat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/buddychat/buddychat.module#BuddychatPageModule', name: 'BuddychatPage', segment: 'buddychat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/groups/groups.module#GroupsPageModule', name: 'GroupsPage', segment: 'groups', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/groupmembers/groupmembers.module#GroupmembersPageModule', name: 'GroupmembersPage', segment: 'groupmembers', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newgroup/newgroup.module#NewgroupPageModule', name: 'NewgroupPage', segment: 'newgroup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/passwordreset/passwordreset.module#PasswordresetPageModule', name: 'PasswordresetPage', segment: 'passwordreset', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profilepic/profilepic.module#ProfilepicPageModule', name: 'ProfilepicPage', segment: 'profilepic', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/groupinfo/groupinfo.module#GroupinfoPageModule', name: 'GroupinfoPage', segment: 'groupinfo', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__app_firebaseconfig__["a" /* config */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_10__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_imghandler_imghandler__["a" /* ImghandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_ngx__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_path_ngx__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_15__providers_requests_requests__["a" /* RequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_groups_groups__["a" /* GroupsProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    apiKey: "AIzaSyDBR4cxxXePZB2Y-wsf8yFWv7fsKVh7pLY",
    authDomain: "itrw322final-464ab.firebaseapp.com",
    databaseURL: "https://itrw322final-464ab.firebaseio.com",
    projectId: "itrw322final-464ab",
    storageBucket: "",
    messagingSenderId: "977803938518",
    appId: "1:977803938518:web:e5bf8c1569f7d1ee"
};
//# sourceMappingURL=app.firebaseconfig.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Event = (function () {
    function Event(title) {
        this.title = title;
    }
    return Event;
}());
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ipadc\Documents\Cloned repos\ITRW322\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\ipadc\Documents\Cloned repos\ITRW322\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[286]);
//# sourceMappingURL=main.js.map