(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page\">\r\n<app-home></app-home>\r\n<router-outlet></router-outlet>\r\n<!-- <app-banner></app-banner> -->\r\n<!-- <app-sports></app-sports> -->\r\n<!-- <app-banner></app-banner> -->\r\n<!-- <app-sports></app-sports> -->\r\n\r\n<!-- <app-feedback></app-feedback>\r\n<app-blog></app-blog>\r\n<app-contact></app-contact> -->\r\n<!-- <app-footer></app-footer> -->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner/banner.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner/banner.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div *ngFor=\"let category of categories\">\r\n<div *ngIf=\"category.contents\">\r\n<div class=\"wrapper bgded overlay coloured\" id=\"{{category.title}}\" >\r\n  <article class=\"hoc cta clear\">\r\n    <!-- ################################################################################################ -->\r\n    <h6 class=\"three_quarter first\">Positivity of {{category.title}}</h6>\r\n    <footer class=\"one_quarter\"><a class=\"btn\" href=\"category/{{category.id}}\">View all </a></footer>\r\n    <!-- ################################################################################################ -->\r\n  </article>\r\n</div>\r\n<div class=\"wrapper row3\">\r\n  <main class=\"hoc container clear\">\r\n    <!-- main body -->\r\n    <!-- ################################################################################################ -->\r\n    <!-- <article class=\"group btmspace-80\">\r\n      <div class=\"two_third first\"><img class=\"borderedbox inspace-10\" src=\"assets/images/demo/660x360.png\" alt=\"\"></div>\r\n      <div class=\"one_third\">\r\n        <h6 class=\"heading\">Per inceptos himenaeos donec lacinia mollis vel</h6>\r\n        <ul class=\"nospace meta\">\r\n          <li><i class=\"fa fa-user\"></i> <a href=\"#\">Admin</a></li>\r\n          <li><i class=\"fa fa-tag\"></i> <a href=\"#\">Tag Name</a></li>\r\n        </ul>\r\n        <p>Aliquam mauris morbi tristique orci sit amet sapien tincidunt ut rutrum dui tincidunt.</p>\r\n        <p class=\"btmspace-30\">Cras eget lacinia magna nunc ut est est cras aliquam erat sem at dapibus lorem luctus sed nunc sagittis leo in&hellip;</p>\r\n        <footer class=\"nospace\"><a class=\"btn\" href=\"#\">Full Story &raquo;</a></footer>\r\n      </div>\r\n    </article> -->\r\n    <!-- ################################################################################################ -->\r\n    <hr class=\"btmspace-80\">\r\n    <!-- ################################################################################################ -->\r\n    <ul class=\"nospace group overview\">\r\n      <li class=\"one_third\"  *ngFor=\"let content of category.contents\">\r\n        <article *ngIf=\"content.is_approved=='YES'\"><a href=\"#\"><img src=\"{{content.picture_url}}\" alt=\"\"></a>\r\n          <h6 class=\"heading\">{{content.title}}</h6>\r\n          <span>{{content.description}}</span>\r\n          <ul class=\"nospace meta\">\r\n            <li><i class=\"fa fa-user\"></i> \r\n              <a href=\"#\">\r\n                <span *ngIf=\"content.users_id==0\">Admin</span>\r\n              </a>\r\n            </li>\r\n            \r\n            <li><i class=\"fa fa-tag\"></i> <a href=\"#\">{{category.title}}</a></li>\r\n          </ul>\r\n          <p>{{content.content}}</p>\r\n          <footer class=\"nospace\"><a class=\"btn\" href=\"{{content.source_url}}\">Full Story &raquo;</a></footer>\r\n        </article>\r\n      </li>\r\n      \r\n      \r\n      \r\n    </ul>\r\n    <div class=\"col-md-12\" *ngIf=\"!category.contents\">\r\n      NO Contents Found\r\n    </div>\r\n    <!-- ################################################################################################ -->\r\n    <!-- / main body -->\r\n    <div class=\"clear\"></div>\r\n  </main>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/category.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/category.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n    <div class=\"wrapper bgded overlay coloured\" id=\"{{category.title}}\" >\n      <article class=\"hoc cta clear\">\n        <!-- ################################################################################################ -->\n        <h6 class=\"three_quarter first\">Positivity of {{category.title}}</h6>\n        <!-- <footer class=\"one_quarter\"><a class=\"btn\" href=\"category/{{category.id}}\">View all </a></footer> -->\n        <!-- ################################################################################################ -->\n      </article>\n    </div>\n    <div class=\"wrapper row3\">\n      <main class=\"hoc container clear\">\n        <!-- main body -->\n        <!-- ################################################################################################ -->\n        <!-- <article class=\"group btmspace-80\">\n          <div class=\"two_third first\"><img class=\"borderedbox inspace-10\" src=\"assets/images/demo/660x360.png\" alt=\"\"></div>\n          <div class=\"one_third\">\n            <h6 class=\"heading\">Per inceptos himenaeos donec lacinia mollis vel</h6>\n            <ul class=\"nospace meta\">\n              <li><i class=\"fa fa-user\"></i> <a href=\"#\">Admin</a></li>\n              <li><i class=\"fa fa-tag\"></i> <a href=\"#\">Tag Name</a></li>\n            </ul>\n            <p>Aliquam mauris morbi tristique orci sit amet sapien tincidunt ut rutrum dui tincidunt.</p>\n            <p class=\"btmspace-30\">Cras eget lacinia magna nunc ut est est cras aliquam erat sem at dapibus lorem luctus sed nunc sagittis leo in&hellip;</p>\n            <footer class=\"nospace\"><a class=\"btn\" href=\"#\">Full Story &raquo;</a></footer>\n          </div>\n        </article> -->\n        <!-- ################################################################################################ -->\n        <hr class=\"btmspace-80\">\n        <!-- ################################################################################################ -->\n        <ul class=\"nospace group overview\">\n          <li class=\"one_third\"  *ngFor=\"let content of contents\">\n            <article *ngIf=\"content.is_approved=='YES'\"><a href=\"#\"><img src=\"{{content.picture_url}}\" alt=\"\"></a>\n              <h6 class=\"heading\">{{content.title}}</h6>\n              <span>{{content.description}}</span>\n              <ul class=\"nospace meta\">\n                <li><i class=\"fa fa-user\"></i> \n                  <a href=\"#\">\n                    <span *ngIf=\"content.users_id==0\">Admin</span>\n                  </a>\n                </li>\n                \n                <li><i class=\"fa fa-tag\"></i> <a href=\"#\">{{category.title}}</a></li>\n              </ul>\n              <p>{{content.content}}</p>\n              <footer class=\"nospace\"><a class=\"btn\" href=\"{{content.source_url}}\">Full Story &raquo;</a></footer>\n            </article>\n          </li>\n          \n          \n          \n        </ul>\n        <!-- <div class=\"col-md-12\" *ngIf=\"!category.contents\">\n          NO Contents Found\n        </div> -->\n        <!-- ################################################################################################ -->\n        <!-- / main body -->\n        <div class=\"clear\"></div>\n      </main>\n    </div>\n\n\n    \n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/featured/featured.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/featured/featured.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"hoc clear\">\r\n    <!-- ################################################################################################ -->\r\n    <figure id=\"introblocks\">\r\n      <ul class=\"nospace group\">\r\n        <li class=\"one_third first\"><a href=\"#\"><img src=\"assets/images/demo/320x240.png\" alt=\"\"></a></li>\r\n        <li class=\"one_third\"><a href=\"#\"><img src=\"assets/images/demo/320x240.png\" alt=\"\"></a></li>\r\n        <li class=\"one_third\"><a href=\"#\"><img src=\"assets/images/demo/320x240.png\" alt=\"\"></a></li>\r\n      </ul>\r\n    </figure>\r\n    <p class=\"center\"><a class=\"btn\" href=\"#\">Top Articles</a></p>\r\n    <!-- ################################################################################################ -->\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body id=\"top\">\r\n\r\n<div class=\"bgded overlay light\" style=\"background-image:url('assets/images/hope_banner.jpeg');\">\r\n\r\n  <div class=\"wrapper row1\">\r\n    <header id=\"header\" class=\"hoc clear\">\r\n\r\n      <div id=\"logo\" class=\"fl_left\">\r\n        <h1><a href=\"index.html\">HOPE</a></h1>\r\n      </div>\r\n      <nav id=\"mainav\" class=\"fl_right\">\r\n        <ul class=\"clear\">\r\n          <li class=\"active\"><a href=\"index.html\">Home</a></li>\r\n          <li><a class=\"drop\" href=\"#\">Categories</a>\r\n            <ul>\r\n              <li *ngFor=\"let category of categories\"><a href=\"#{{category.title}}\">{{category.title}}</a></li>\r\n              <!-- <li><a href=\"pages/full-width.html\">Full Width</a></li>\r\n              <li><a href=\"pages/sidebar-left.html\">Sidebar Left</a></li>\r\n              <li><a href=\"pages/sidebar-right.html\">Sidebar Right</a></li>\r\n              <li><a href=\"pages/basic-grid.html\">Basic Grid</a></li> -->\r\n            </ul>\r\n          </li>\r\n          <!-- <li><a class=\"drop\" href=\"#\">Dropdown</a>\r\n            <ul>\r\n              <li><a href=\"#\">Level 2</a></li>\r\n              <li><a class=\"drop\" href=\"#\">Level 2 + Drop</a>\r\n                <ul>\r\n                  <li><a href=\"#\">Level 3</a></li>\r\n                  <li><a href=\"#\">Level 3</a></li>\r\n                  <li><a href=\"#\">Level 3</a></li>\r\n                </ul>\r\n              </li>\r\n              <li><a href=\"#\">Level 2</a></li>\r\n            </ul>\r\n          </li> -->\r\n          <li><a href=\"#\">About Us</a></li>\r\n          <li><a href=\"#\">Contact Us</a></li>\r\n        </ul>\r\n      </nav>\r\n\r\n    </header>\r\n  </div>\r\n\r\n  <div id=\"pageintro\">\r\n\r\n    \r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-banner></app-banner>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sports/sports.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sports/sports.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper row3\">\r\n  <main class=\"hoc container clear\">\r\n    <!-- main body -->\r\n    <!-- ################################################################################################ -->\r\n    <article class=\"group btmspace-80\">\r\n      <div class=\"two_third first\"><img class=\"borderedbox inspace-10\" src=\"assets/images/demo/660x360.png\" alt=\"\"></div>\r\n      <div class=\"one_third\">\r\n        <h6 class=\"heading\">Per inceptos himenaeos donec lacinia mollis vel</h6>\r\n        <ul class=\"nospace meta\">\r\n          <li><i class=\"fa fa-user\"></i> <a href=\"#\">Admin</a></li>\r\n          <li><i class=\"fa fa-tag\"></i> <a href=\"#\">Tag Name</a></li>\r\n        </ul>\r\n        <p>Aliquam mauris morbi tristique orci sit amet sapien tincidunt ut rutrum dui tincidunt.</p>\r\n        <p class=\"btmspace-30\">Cras eget lacinia magna nunc ut est est cras aliquam erat sem at dapibus lorem luctus sed nunc sagittis leo in&hellip;</p>\r\n        <footer class=\"nospace\"><a class=\"btn\" href=\"#\">Full Story &raquo;</a></footer>\r\n      </div>\r\n    </article>\r\n    <!-- ################################################################################################ -->\r\n    <hr class=\"btmspace-80\">\r\n    <!-- ################################################################################################ -->\r\n    <ul class=\"nospace group overview\">\r\n      <li class=\"one_third\">\r\n        <article><a href=\"#\"><img src=\"assets/images/demo/320x240.png\" alt=\"\"></a>\r\n          <h6 class=\"heading\">Metus porta fringilla</h6>\r\n          <ul class=\"nospace meta\">\r\n            <li><i class=\"fa fa-user\"></i> <a href=\"#\">Admin</a></li>\r\n            <li><i class=\"fa fa-tag\"></i> <a href=\"#\">Tag Name</a></li>\r\n          </ul>\r\n          <p>Vestibulum porttitor rhoncus mi porta consectetur dui consequat vitae vivamus vitae urna quis urna pulvinar&hellip;</p>\r\n          <footer class=\"nospace\"><a class=\"btn\" href=\"#\">Full Story &raquo;</a></footer>\r\n        </article>\r\n      </li>\r\n      <li class=\"one_third\">\r\n        <article><a href=\"#\"><img src=\"assets/images/demo/320x240.png\" alt=\"\"></a>\r\n          <h6 class=\"heading\">Suspendisse sollicitudin</h6>\r\n          <ul class=\"nospace meta\">\r\n            <li><i class=\"fa fa-user\"></i> <a href=\"#\">Admin</a></li>\r\n            <li><i class=\"fa fa-tag\"></i> <a href=\"#\">Tag Name</a></li>\r\n          </ul>\r\n          <p>Lorem a mauris accumsan iaculis rutrum libero aenean fringilla risus eu varius blandit donec convallis nunc et&hellip;</p>\r\n          <footer class=\"nospace\"><a class=\"btn\" href=\"#\">Full Story &raquo;</a></footer>\r\n        </article>\r\n      </li>\r\n      <li class=\"one_third\">\r\n        <article><a href=\"#\"><img src=\"assets/images/demo/320x240.png\" alt=\"\"></a>\r\n          <h6 class=\"heading\">Lacus ultricies ac luctus</h6>\r\n          <ul class=\"nospace meta\">\r\n            <li><i class=\"fa fa-user\"></i> <a href=\"#\">Admin</a></li>\r\n            <li><i class=\"fa fa-tag\"></i> <a href=\"#\">Tag Name</a></li>\r\n          </ul>\r\n          <p>Neque tincidunt vestibulum finibus efficitur nisi sit amet elementum lorem efficitur eget habitant tristique&hellip;</p>\r\n          <footer class=\"nospace\"><a class=\"btn\" href=\"#\">Full Story &raquo;</a></footer>\r\n        </article>\r\n      </li>\r\n\r\n    </ul>\r\n    <!-- ################################################################################################ -->\r\n    <!-- / main body -->\r\n    <div class=\"clear\"></div>\r\n  </main>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/api/api.service.ts":
/*!************************************!*\
  !*** ./src/app/api/api.service.ts ***!
  \************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // apiURL: string = 'http://localhost:8080/api';
        this.apiURL = 'http://3.20.227.53:8080/api';
    }
    getCategories() {
        // return this.httpClient.get<Category[]>(`${this.apiURL}/categories`)
        //       .retry(2)
        //       // .catch(e => this.handleError("Get Users Error", e));
        return this.httpClient.get(`${this.apiURL}/categories`);
    }
    getCategoryById(cat_id) {
        console.log(cat_id);
        return this.httpClient.get(`${this.apiURL}/categories/` + cat_id);
    }
    getContents() {
        return this.httpClient.get(`${this.apiURL}/Content`);
    }
    getContentById(content_id) {
        return this.httpClient.get(`${this.apiURL}/Content/` + content_id);
    }
    getContentsByCategoryId(cat_id) {
        return this.httpClient.get(`${this.apiURL}/Content/?categories_id=` + cat_id);
    }
    addCategory(data) {
        console.log("addCategory stored", data);
        this.categoryData = Object.assign({}, (this.categoryData ? this.categoryData : {}), JSON.parse(JSON.stringify(data.value)));
        console.log(this.categoryData);
        return this.httpClient.post(`${this.apiURL}/categories/`, this.categoryData);
    }
    updateCategory(data) {
        console.log("updateCategory stored", data);
        this.categoryData = Object.assign({}, (this.categoryData ? this.categoryData : {}), JSON.parse(JSON.stringify(data.value)));
        console.log(this.categoryData);
        return this.httpClient.put(`${this.apiURL}/categories/` + this.categoryData.id, this.categoryData);
    }
    approveContent(data) {
        console.log("stored", data);
        this.contentData = Object.assign({}, (this.contentData ? this.contentData : {}), JSON.parse(JSON.stringify(data.value)));
        console.log(this.contentData);
        return this.httpClient.put(`${this.apiURL}/Content/` + this.contentData.id, this.contentData);
    }
    postContent(data) {
        return this.httpClient.post(`${this.apiURL}/Content/`, data);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/category/category.component */ "./src/app/components/category/category.component.ts");





const routes = [
    { path: '', component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: 'category/:category_id', component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"] }
    // { path: 'quotes/:cat_id', component: QuoteComponent},
    // { path: 'quote/new-quote', component: AddQuoteComponent },
    // { path: 'admin', component: AdminComponent },
    // { path: 'admin/approve-form/:id', component: HeaderAdminComponent },
    // { path: 'admin/all-contents', component: NewscontentComponent },
    // { path: 'admin/add-category', component: CategoryAdminComponent },
    // { path: 'admin/all-categories', component: ShowCategoryComponent },
    // { path: 'admin/edit-category/:id', component: CategoryAdminComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'FinalTemplate';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_featured_featured_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/featured/featured.component */ "./src/app/components/featured/featured.component.ts");
/* harmony import */ var _components_sports_sports_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sports/sports.component */ "./src/app/components/sports/sports.component.ts");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/components/banner/banner.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/category/category.component */ "./src/app/components/category/category.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _components_featured_featured_component__WEBPACK_IMPORTED_MODULE_7__["FeaturedComponent"],
            _components_sports_sports_component__WEBPACK_IMPORTED_MODULE_8__["SportsComponent"],
            _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"],
            _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_10__["LandingComponent"],
            _components_category_category_component__WEBPACK_IMPORTED_MODULE_11__["CategoryComponent"],
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/banner/banner.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/banner/banner.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/banner/banner.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let BannerComponent = class BannerComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.service.getCategories().subscribe(res => {
            this.categories = res;
            this.service.getContents().subscribe(response => {
                this.contents = response;
                console.log(this.contents);
                this.categories.forEach((element) => {
                    var contents = [];
                    let counter = 1;
                    this.contents.forEach((ele) => {
                        if (element.id == ele.categories_id && counter <= 3) {
                            ele.content = ele.content.split('[')[0];
                            let user_id = ele.users_id;
                            if (user_id === null) {
                                ele.users_id = 0;
                            }
                            contents.push(ele);
                            counter = counter + 1;
                        }
                    });
                    if (contents.length > 0) {
                        element.contents = contents;
                    }
                    contents = [];
                });
                console.log(this.categories);
            });
            // console.log(this.categories)
        });
        // console.log(this.categories)
        // console.log(this.contents)
        // this.modifyCategories();
    }
    modifyCategories() {
        // for (let [key, value] of Object.entries(this.categories)) {
        //   console.log("Key: "+key+" Value: "+value)
        // }
        console.log(this.categories);
    }
};
BannerComponent.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner/banner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./banner.component.css */ "./src/app/components/banner/banner.component.css")).default]
    })
], BannerComponent);



/***/ }),

/***/ "./src/app/components/category/category.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/category/category.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/category/category.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/category/category.component.ts ***!
  \***********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");




let CategoryComponent = class CategoryComponent {
    constructor(route, service) {
        this.route = route;
        this.service = service;
    }
    ngOnInit() {
        alert("I am in categoryComponent");
        this.route.params.subscribe((params) => {
            if (params.category_id) {
                this.categoryId = params.category_id;
            }
        });
        console.log(this.categoryId);
        this.service.getCategoryById(this.categoryId).subscribe(res => {
            this.category = res;
            console.log("category", this.category);
        });
        this.service.getContentsByCategoryId(this.categoryId).subscribe(response => {
            this.contents = response;
        });
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.component.css */ "./src/app/components/category/category.component.css")).default]
    })
], CategoryComponent);



/***/ }),

/***/ "./src/app/components/featured/featured.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/featured/featured.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVhdHVyZWQvZmVhdHVyZWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/featured/featured.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/featured/featured.component.ts ***!
  \***********************************************************/
/*! exports provided: FeaturedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedComponent", function() { return FeaturedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeaturedComponent = class FeaturedComponent {
    constructor() { }
    ngOnInit() {
    }
};
FeaturedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-featured',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./featured.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/featured/featured.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./featured.component.css */ "./src/app/components/featured/featured.component.css")).default]
    })
], FeaturedComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");



let HomeComponent = class HomeComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getCategories().subscribe(res => {
            this.categories = res;
            this.service.getContents().subscribe(response => {
                this.contents = response;
                console.log(this.contents);
                this.categories.forEach((element) => {
                    var contents = [];
                    let counter = 1;
                    this.contents.forEach((ele) => {
                        if (element.id == ele.categories_id && counter <= 3) {
                            contents.push(ele);
                            counter = counter + 1;
                        }
                    });
                    if (contents.length > 0) {
                        element.contents = contents;
                    }
                    contents = [];
                });
                var cats = [];
                this.categories.forEach((cat) => {
                    if (cat.contents) {
                        cats.push(cat);
                    }
                });
                this.categories = cats;
                console.log(this.categories);
            });
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/landing/landing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/landing/landing.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.css */ "./src/app/components/landing/landing.component.css")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/components/sports/sports.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/sports/sports.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3BvcnRzL3Nwb3J0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/sports/sports.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/sports/sports.component.ts ***!
  \*******************************************************/
/*! exports provided: SportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsComponent", function() { return SportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SportsComponent = class SportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sports/sports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sports.component.css */ "./src/app/components/sports/sports.component.css")).default]
    })
], SportsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\self_projects\Hope - frontend\Hope\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map