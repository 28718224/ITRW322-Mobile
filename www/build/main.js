webpackJsonp([16],{

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
		15
	],
	"../pages/buddychat/buddychat.module": [
		453,
		14
	],
	"../pages/chats/chats.module": [
		454,
		13
	],
	"../pages/commands/commands.module": [
		455,
		12
	],
	"../pages/groupbuddies/groupbuddies.module": [
		456,
		11
	],
	"../pages/groupchat/groupchat.module": [
		457,
		10
	],
	"../pages/groupinfo/groupinfo.module": [
		458,
		9
	],
	"../pages/groupmembers/groupmembers.module": [
		459,
		8
	],
	"../pages/groups/groups.module": [
		460,
		7
	],
	"../pages/login/login.module": [
		461,
		6
	],
	"../pages/newgroup/newgroup.module": [
		462,
		5
	],
	"../pages/passwordreset/passwordreset.module": [
		463,
		4
	],
	"../pages/profile/profile.module": [
		464,
		3
	],
	"../pages/profilepic/profilepic.module": [
		465,
		2
	],
	"../pages/signup/signup.module": [
		466,
		1
	],
	"../pages/tabs/tabs.module": [
		467,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(42);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
        this.firegroupname = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/groupsnames');
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
        var promise2 = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.firegroupname.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid)).child;
                        return [4 /*yield*/, this.getIndex5(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid)];
                    case 1:
                        _b.apply(_a, [_c.sent()]).set({
                            groupName: newGroup.groupName,
                            owner: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid
                        }).then(function () {
                            resolve(true);
                        }).catch(function (err) {
                            reject(err);
                        });
                        return [2 /*return*/];
                }
            });
        }); });
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
                _this.groupowner = snapshot.val().owner;
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
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(this.currentgroupname).child('members')).child;
                        return [4 /*yield*/, this.getIndex()];
                    case 1:
                        _b.apply(_a, [_c.sent()]).set(newmember).then(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        this.getgroupimage().then(function () {
                                            _this.firegroup.child(newmember.uid).child(_this.currentgroupname).set({
                                                groupimage: _this.grouppic,
                                                owner: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                                                msgboard: ''
                                            }).catch(function (err) {
                                                console.log(err);
                                            });
                                        });
                                        _b = (_a = this.firegroupname.child(newmember.uid)).child;
                                        return [4 /*yield*/, this.getIndex5(newmember.uid)];
                                    case 1:
                                        _b.apply(_a, [_c.sent()]).set({
                                            groupName: this.currentgroupname,
                                            owner: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid
                                        }).catch(function (err) {
                                            console.log(err);
                                        });
                                        this.firegroup.child(newmember.uid).child(this.currentgroupname).child('members').child('0').set({
                                            displayName: '',
                                            photoURL: '',
                                            uid: ''
                                        }).catch(function (err) {
                                            console.log(err);
                                        });
                                        this.getintogroup(this.currentgroupname);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
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
            _this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(_this.currentgroupname).child('owner').once('value', function (snapshot) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var tempowner, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            tempowner = snapshot.val();
                            _b = (_a = this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(this.currentgroupname).child('msgboard')).child;
                            return [4 /*yield*/, this.getIndex2()];
                        case 1:
                            _b.apply(_a, [_c.sent()]).set({
                                sentby: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                                message: this.CaesarCipher(newmessage, 13),
                                timestamp: (Math.round((new Date()).getTime() / 1000)).toString().substr(0, 10)
                            }).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var _a, _b, tempmembers;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            if (!(tempowner != __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid)) return [3 /*break*/, 2];
                                            _b = (_a = this.firegroup.child(tempowner).child(this.currentgroupname).child('msgboard')).child;
                                            return [4 /*yield*/, this.getIndex3(tempowner)];
                                        case 1:
                                            _b.apply(_a, [_c.sent()]).set({
                                                sentby: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                                                message: this.CaesarCipher(newmessage, 13),
                                                timestamp: (Math.round((new Date()).getTime() / 1000)).toString().substr(0, 10)
                                            });
                                            _c.label = 2;
                                        case 2:
                                            tempmembers = [];
                                            this.firegroup.child(tempowner).child(this.currentgroupname).child('members').once('value', function (snapshot) {
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
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    GroupsProvider.prototype.postmsgs = function (member, msg, cb) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.firegroup.child(member.uid).child(this.currentgroupname).child('msgboard')).child;
                        return [4 /*yield*/, this.getIndex4(member)];
                    case 1:
                        _b.apply(_a, [_c.sent()]).set({
                            sentby: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                            displayName: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.displayName,
                            message: this.CaesarCipher(msg, 13),
                            timestamp: (Math.round((new Date()).getTime() / 1000)).toString().substr(0, 10)
                        }).then(function () {
                            cb();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    GroupsProvider.prototype.getgroupmsgs = function (groupname) {
        var _this = this;
        this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(groupname).child('owner').once('value', function (snapshot) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var tempowner;
            return __generator(this, function (_a) {
                tempowner = snapshot.val();
                this.firegroup.child(tempowner).child(groupname).child('msgboard').on('value', function (snapshot) {
                    var tempmsgholder = snapshot.val();
                    _this.groupmsgs = [];
                    for (var key in tempmsgholder)
                        _this.groupmsgs.push(tempmsgholder[key]);
                    _this.events.publish('newgroupmsg');
                });
                return [2 /*return*/];
            });
        }); });
    };
    GroupsProvider.prototype.getIndex = function () {
        return __awaiter(this, void 0, void 0, function () {
            var found, number, _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        found = false;
                        number = 0;
                        _b = (_a = this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(this.currentgroupname).child('members')).once;
                        _c = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            number = 0;
                                            found = true;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([_g.sent()]))];
                    case 2:
                        _g.sent();
                        _g.label = 3;
                    case 3:
                        if (!!found) return [3 /*break*/, 6];
                        _e = (_d = this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(this.currentgroupname).child('members').child(number.toString())).once;
                        _f = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            console.log('Found next index');
                                            found = true;
                                        }
                                        else {
                                            number = number + 1;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 4: return [4 /*yield*/, _e.apply(_d, _f.concat([_g.sent()]))];
                    case 5:
                        _g.sent();
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, number.toString()];
                }
            });
        });
    };
    GroupsProvider.prototype.getIndex2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var found, number, _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        found = false;
                        number = 0;
                        _b = (_a = this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(this.currentgroupname).child('msgboard')).once;
                        _c = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            number = 0;
                                            found = true;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([_g.sent()]))];
                    case 2:
                        _g.sent();
                        _g.label = 3;
                    case 3:
                        if (!!found) return [3 /*break*/, 6];
                        _e = (_d = this.firegroup.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(this.currentgroupname).child('msgboard').child(number.toString())).once;
                        _f = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            found = true;
                                        }
                                        else {
                                            number = number + 1;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 4: return [4 /*yield*/, _e.apply(_d, _f.concat([_g.sent()]))];
                    case 5:
                        _g.sent();
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, number.toString()];
                }
            });
        });
    };
    GroupsProvider.prototype.getIndex3 = function (tempowner) {
        return __awaiter(this, void 0, void 0, function () {
            var found, number, _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        found = false;
                        number = 0;
                        _b = (_a = this.firegroup.child(tempowner).child(this.currentgroupname).child('msgboard')).once;
                        _c = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            number = 0;
                                            found = true;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([_g.sent()]))];
                    case 2:
                        _g.sent();
                        _g.label = 3;
                    case 3:
                        if (!!found) return [3 /*break*/, 6];
                        _e = (_d = this.firegroup.child(tempowner).child(this.currentgroupname).child('msgboard').child(number.toString())).once;
                        _f = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            found = true;
                                        }
                                        else {
                                            number = number + 1;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 4: return [4 /*yield*/, _e.apply(_d, _f.concat([_g.sent()]))];
                    case 5:
                        _g.sent();
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, number.toString()];
                }
            });
        });
    };
    GroupsProvider.prototype.getIndex4 = function (member) {
        return __awaiter(this, void 0, void 0, function () {
            var found, number, _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        found = false;
                        number = 0;
                        _b = (_a = this.firegroup.child(member.uid).child(this.currentgroupname).child('msgboard')).once;
                        _c = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            number = 0;
                                            found = true;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([_g.sent()]))];
                    case 2:
                        _g.sent();
                        _g.label = 3;
                    case 3:
                        if (!!found) return [3 /*break*/, 6];
                        _e = (_d = this.firegroup.child(member.uid).child(this.currentgroupname).child('msgboard').child(number.toString())).once;
                        _f = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            found = true;
                                        }
                                        else {
                                            number = number + 1;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 4: return [4 /*yield*/, _e.apply(_d, _f.concat([_g.sent()]))];
                    case 5:
                        _g.sent();
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, number.toString()];
                }
            });
        });
    };
    GroupsProvider.prototype.getIndex5 = function (person) {
        return __awaiter(this, void 0, void 0, function () {
            var found, number, _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        found = false;
                        number = 0;
                        _b = (_a = this.firegroupname.child(person)).once;
                        _c = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            number = 0;
                                            found = true;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([_g.sent()]))];
                    case 2:
                        _g.sent();
                        _g.label = 3;
                    case 3:
                        if (!!found) return [3 /*break*/, 6];
                        _e = (_d = this.firegroupname.child(person).child(number.toString())).once;
                        _f = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            found = true;
                                        }
                                        else {
                                            number = number + 1;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 4: return [4 /*yield*/, _e.apply(_d, _f.concat([_g.sent()]))];
                    case 5:
                        _g.sent();
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, number.toString()];
                }
            });
        });
    };
    GroupsProvider.prototype.CaesarCipher = function (str, num) {
        // you can comment this line
        var result = '';
        var charcode = 0;
        for (var i = 0; i < str.length; i++) {
            charcode = (str[i].charCodeAt()) + num;
            result += String.fromCharCode(charcode);
        }
        return result;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_chooser_ngx__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(42);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_file_chooser_ngx__["a" /* FileChooser */]])
], ImghandlerProvider);

//# sourceMappingURL=imghandler.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(42);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
        var promise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.firereq
                            .child(req.recipient)).child;
                        return [4 /*yield*/, this.getIndex(req)];
                    case 1:
                        _b.apply(_a, [_c.sent()]).set({
                            sender: req.sender,
                        })
                            .then(function () {
                            resolve({ success: true });
                        })
                            .catch(function (err) {
                            resolve(err);
                        });
                        return [2 /*return*/];
                }
            });
        }); });
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
        console.log('User: ' + __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid);
        console.log('Buddy: ' + buddy.uid);
        var promise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.myfriends = [];
                        _b = (_a = this.firefriends.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid)).child;
                        return [4 /*yield*/, this.getIndex2('1', buddy)];
                    case 1:
                        _b.apply(_a, [_c.sent()]).set({
                            uid: buddy.uid
                        }).then(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _b = (_a = this.firefriends.child(buddy.uid)).child;
                                        return [4 /*yield*/, this.getIndex2('2', buddy)];
                                    case 1:
                                        _b.apply(_a, [_c.sent()]).set({
                                            uid: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid
                                        }).then(function () {
                                            _this.deleterequest(buddy).then(function () {
                                                resolve(true);
                                            });
                                        }).catch(function (err) {
                                            reject(err);
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); }).catch(function (err) {
                            reject(err);
                        });
                        return [2 /*return*/];
                }
            });
        }); });
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
    RequestsProvider.prototype.getIndex = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var found, number, _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        found = false;
                        number = 0;
                        _b = (_a = this.firereq.child(req.recipient)).once;
                        _c = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            console.log('Not exists');
                                            number = 0;
                                            found = true;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([_g.sent()]))];
                    case 2:
                        _g.sent();
                        _g.label = 3;
                    case 3:
                        if (!!found) return [3 /*break*/, 6];
                        _e = (_d = this.firereq.child(req.recipient).child(number.toString())).once;
                        _f = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            console.log('Found next index');
                                            found = true;
                                        }
                                        else {
                                            number = number + 1;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 4: return [4 /*yield*/, _e.apply(_d, _f.concat([_g.sent()]))];
                    case 5:
                        _g.sent();
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, number.toString()];
                }
            });
        });
    };
    RequestsProvider.prototype.getIndex2 = function (type, buddy) {
        return __awaiter(this, void 0, void 0, function () {
            var found, number, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        found = false;
                        number = 0;
                        if (!(type === '1')) return [3 /*break*/, 7];
                        _b = (_a = this.firefriends.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid)).once;
                        _c = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            number = 0;
                                            found = true;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([_o.sent()]))];
                    case 2:
                        _o.sent();
                        _o.label = 3;
                    case 3:
                        if (!!found) return [3 /*break*/, 6];
                        _e = (_d = this.firefriends.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).child(number.toString())).once;
                        _f = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            found = true;
                                        }
                                        else {
                                            number = number + 1;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 4: return [4 /*yield*/, _e.apply(_d, _f.concat([_o.sent()]))];
                    case 5:
                        _o.sent();
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, number.toString()];
                    case 7:
                        _h = (_g = this.firefriends.child(buddy.uid)).once;
                        _j = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            number = 0;
                                            found = true;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 8: return [4 /*yield*/, _h.apply(_g, _j.concat([_o.sent()]))];
                    case 9:
                        _o.sent();
                        _o.label = 10;
                    case 10:
                        if (!!found) return [3 /*break*/, 13];
                        _l = (_k = this.firefriends.child(buddy.uid).child(number.toString())).once;
                        _m = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            found = true;
                                        }
                                        else {
                                            number = number + 1;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 11: return [4 /*yield*/, _l.apply(_k, _m.concat([_o.sent()]))];
                    case 12:
                        _o.sent();
                        return [3 /*break*/, 10];
                    case 13: return [2 /*return*/, number.toString()];
                }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
    ChatProvider.prototype.CaesarCipher = function (str, num) {
        // you can comment this line
        var result = '';
        var charcode = 0;
        for (var i = 0; i < str.length; i++) {
            charcode = (str[i].charCodeAt()) + num;
            result += String.fromCharCode(charcode);
        }
        return result;
    };
    ChatProvider.prototype.addnewmessage = function (msg) {
        var _this = this;
        if (this.buddy) {
            var promise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _b = (_a = this.firebuddychats.child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).child(this.buddy.uid)).child;
                            return [4 /*yield*/, this.getIndex2('1')];
                        case 1:
                            _b.apply(_a, [_c.sent()]).set({
                                sentby: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid,
                                message: this.CaesarCipher(msg, 13),
                                timestamp: (Math.round((new Date()).getTime() / 1000)).toString().substr(0, 10)
                            }).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _b = (_a = this.firebuddychats.child(this.buddy.uid).child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid)).child;
                                            return [4 /*yield*/, this.getIndex2('2')];
                                        case 1:
                                            _b.apply(_a, [_c.sent()]).set({
                                                sentby: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid,
                                                message: this.CaesarCipher(msg, 13),
                                                timestamp: (Math.round((new Date()).getTime() / 1000)).toString().substr(0, 10)
                                            }).then(function () {
                                                resolve(true);
                                            });
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                    }
                });
            }); });
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
    ChatProvider.prototype.getIndex2 = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var found, number, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        found = false;
                        number = 0;
                        if (!(type === '1')) return [3 /*break*/, 7];
                        _b = (_a = this.firebuddychats.child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).child(this.buddy.uid)).once;
                        _c = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            number = 0;
                                            found = true;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([_o.sent()]))];
                    case 2:
                        _o.sent();
                        _o.label = 3;
                    case 3:
                        if (!!found) return [3 /*break*/, 6];
                        _e = (_d = this.firebuddychats.child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).child(this.buddy.uid).child(number.toString())).once;
                        _f = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            found = true;
                                        }
                                        else {
                                            number = number + 1;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 4: return [4 /*yield*/, _e.apply(_d, _f.concat([_o.sent()]))];
                    case 5:
                        _o.sent();
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, number.toString()];
                    case 7:
                        _h = (_g = this.firebuddychats.child(this.buddy.uid).child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid)).once;
                        _j = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            number = 0;
                                            found = true;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 8: return [4 /*yield*/, _h.apply(_g, _j.concat([_o.sent()]))];
                    case 9:
                        _o.sent();
                        _o.label = 10;
                    case 10:
                        if (!!found) return [3 /*break*/, 13];
                        _l = (_k = this.firebuddychats.child(this.buddy.uid).child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).child(number.toString())).once;
                        _m = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            found = true;
                                        }
                                        else {
                                            number = number + 1;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 11: return [4 /*yield*/, _l.apply(_k, _m.concat([_o.sent()]))];
                    case 12:
                        _o.sent();
                        return [3 /*break*/, 10];
                    case 13: return [2 /*return*/, number.toString()];
                }
            });
        });
    };
    return ChatProvider;
}());
ChatProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]) === "function" && _a || Object])
], ChatProvider);

var _a;
//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(42);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
  Generated class for the CommandProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var CommandProvider = (function () {
    function CommandProvider(userservice, events) {
        this.userservice = userservice;
        this.events = events;
        this.firereq = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/commands');
        this.firefriends = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/friends');
        this.fireindex = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('Index');
    }
    CommandProvider.prototype.sendcommand = function (req, cmd) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, promise;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = console).log;
                        return [4 /*yield*/, this.getIndex(req)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        promise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _b = (_a = this.firereq
                                            .child(req.recipient)).child;
                                        return [4 /*yield*/, this.getIndex(req)];
                                    case 1:
                                        _b.apply(_a, [_c.sent()]).set({
                                            sender: req.sender,
                                            Command: cmd,
                                        })
                                            .then(function () {
                                            resolve({ success: true });
                                        })
                                            .catch(function (err) {
                                            resolve(err);
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    CommandProvider.prototype.getIndex = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var found, number, _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        found = false;
                        number = 0;
                        _b = (_a = this.firereq.child(req.recipient)).once;
                        _c = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            console.log('Not exists');
                                            number = 0;
                                            found = true;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([_g.sent()]))];
                    case 2:
                        _g.sent();
                        _g.label = 3;
                    case 3:
                        if (!!found) return [3 /*break*/, 6];
                        _e = (_d = this.firereq.child(req.recipient).child(number.toString())).once;
                        _f = ['value'];
                        return [4 /*yield*/, function (snapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!snapshot.exists()) {
                                            console.log('Found next index');
                                            found = true;
                                        }
                                        else {
                                            number = number + 1;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }];
                    case 4: return [4 /*yield*/, _e.apply(_d, _f.concat([_g.sent()]))];
                    case 5:
                        _g.sent();
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, number.toString()];
                }
            });
        });
    };
    return CommandProvider;
}());
CommandProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], CommandProvider);

//# sourceMappingURL=command.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(110);
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

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(304);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_firebaseconfig__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_user__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_imghandler_imghandler__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_ngx__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_chooser_ngx__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_path_ngx__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_requests_requests__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_chat_chat__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_groups_groups__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_command_command__ = __webpack_require__(285);
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
                    { loadChildren: '../pages/buddies/buddies.module#BuddiesPageModule', name: 'BuddiesPage', segment: 'buddies', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/buddychat/buddychat.module#BuddychatPageModule', name: 'BuddychatPage', segment: 'buddychat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chats/chats.module#ChatsPageModule', name: 'ChatsPage', segment: 'chats', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/commands/commands.module#CommandsPageModule', name: 'CommandsPage', segment: 'commands', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/groupbuddies/groupbuddies.module#GroupbuddiesPageModule', name: 'GroupbuddiesPage', segment: 'groupbuddies', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/groupchat/groupchat.module#GroupchatPageModule', name: 'GroupchatPage', segment: 'groupchat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/groupinfo/groupinfo.module#GroupinfoPageModule', name: 'GroupinfoPage', segment: 'groupinfo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/groupmembers/groupmembers.module#GroupmembersPageModule', name: 'GroupmembersPage', segment: 'groupmembers', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/groups/groups.module#GroupsPageModule', name: 'GroupsPage', segment: 'groups', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newgroup/newgroup.module#NewgroupPageModule', name: 'NewgroupPage', segment: 'newgroup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/passwordreset/passwordreset.module#PasswordresetPageModule', name: 'PasswordresetPage', segment: 'passwordreset', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profilepic/profilepic.module#ProfilepicPageModule', name: 'ProfilepicPage', segment: 'profilepic', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
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
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_chooser_ngx__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_ngx__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_path_ngx__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_15__providers_requests_requests__["a" /* RequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_groups_groups__["a" /* GroupsProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_command_command__["a" /* CommandProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 448:
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

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ipadc\Documents\Cloned repos\ITRW322-Mobile\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\ipadc\Documents\Cloned repos\ITRW322-Mobile\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(42);
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

/***/ })

},[287]);
//# sourceMappingURL=main.js.map