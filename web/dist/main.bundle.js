webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <app-content></app-content>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_content_component__ = __webpack_require__("./src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__get_field_get_field_component__ = __webpack_require__("./src/app/get-field/get-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__get_field_get_field_component__["a" /* GetFieldComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"header\" *ngIf=\"ready\">\r\n    <table class=\"centered\">\r\n     \r\n      <tr>\r\n        <th>Documents per page</th><th><select (ngModelChange)=\"clear($event);\" [(ngModel)]=\"documentsPerAPage\" class=\"\" name=\"documentsPerAPage\">\r\n          <option value=\"1\">1</option>\r\n          <option value=\"5\">5</option>\r\n          <option value=\"10\">10</option>\r\n          <option value=\"25\">25</option>\r\n          <option value=\"50\">50</option>\r\n          <option value=\"100\">100</option>\r\n        </select></th>\r\n      </tr>\r\n      <tr>\r\n        <th><button class=\"btn btn-sm\" type=\"button\" name=\"submitQuery\" (click)=\"query();\">Query</button></th>\r\n      </tr>\r\n    </table>\r\n    <div *ngFor=\"let queryDocument of queryDocuments\">\r\n      <app-get-field #getField [document]=\"queryDocument\"></app-get-field>\r\n      <hr>\r\n    </div>\r\n    <table class=\"centeredBottom\">\r\n      <th><div *ngIf=\"!previousDisabled\"><button class=\"btn btn-sm\" type=\"button\" name=\"Previous\" (click)=\"previousSet();\"> Previous</button></div></th><th><div *ngIf=\"!nextDisabled\"><button class=\"btn btn-sm\" (click)=\"nextSet();\" type=\"button\" name=\"Next\">Next</button></div></th>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentComponent = /** @class */ (function () {
    function ContentComponent(client) {
        this.client = client;
        this.queryDocuments = [];
        this.documentsPerAPage = 1;
        this.fields = [];
        this.ready = false;
        this.from = 0;
        this.userDocument = {};
        this.RestServerURL = "http://127.0.0.1";
        this.nextDisabled = false;
        this.previousDisabled = true;
    }
    ContentComponent.prototype.ngOnInit = function () {
        this.query();
    };
    ContentComponent.prototype.query = function () {
        var host = this;
        var query = "";
        host.queryDocuments.length = 0;
        host.client.get(host.RestServerURL + "/api/story" + "?" + query + "$count=" + host.documentsPerAPage + "&$from=" + host.from).subscribe(function (data) {
            console.log(data);
            if (data["status"] != "no results")
                for (var index in data) {
                    host.queryDocuments.push(data[index]);
                    console.log(data[index]);
                }
            else {
                host.nextDisabled = true;
                console.log("none");
            }
            host.ready = true;
            console.log(host.queryDocuments);
        });
    };
    ContentComponent.prototype.clear = function (value) {
        this.from = 0;
        console.log(value);
        this.documentsPerAPage = parseInt(value);
        console.log(this.documentsPerAPage);
        this.previousDisabled = true;
        this.query();
    };
    ContentComponent.prototype.previousSet = function () {
        if (this.from - this.documentsPerAPage >= 0)
            this.from = this.from - this.documentsPerAPage;
        console.log(this.from);
        console.log(this.documentsPerAPage);
        this.query();
        this.nextDisabled = false;
        if (this.from == 0)
            this.previousDisabled = true;
    };
    ContentComponent.prototype.nextSet = function () {
        console.log("length = " + this.queryDocuments.length);
        if (this.queryDocuments.length == 0)
            return;
        console.log(this.from);
        this.documentsPerAPage = this.documentsPerAPage * 1;
        this.from = this.from + this.documentsPerAPage;
        if (this.from > 0)
            this.previousDisabled = false;
        console.log(this.documentsPerAPage);
        this.query();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentComponent.prototype, "document", void 0);
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-content',
            template: __webpack_require__("./src/app/content/content.component.html"),
            styles: [__webpack_require__("./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/get-field/get-field.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/get-field/get-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let field of fields\">\n    <div class=\"field\">\n      {{field.key}} : {{field.value}}\n    </div>\n</div>\n<div *ngFor=\"let image of images\">\n  <img class=\"img-responsive\" src=\"{{image}}\">\n</div>\n"

/***/ }),

/***/ "./src/app/get-field/get-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetFieldComponent = /** @class */ (function () {
    function GetFieldComponent(client) {
        this.client = client;
        this.images = [];
        this.options = [];
        this.show = [];
        this.save = [];
        this.fields = [];
    }
    GetFieldComponent.prototype.ngOnInit = function () {
        //check each field name and add it to 'fields' it if it in the schema's "show" array.
        var host = this;
        for (var index in this.document) {
            if (index != "Files") {
                var x = { "key": index, "value": this.document[index], "edit": false };
                this.fields.push(x);
            }
            else {
                var Files = this.document[index];
                if (Files.length != 0)
                    for (var filename in Files) {
                        host.images.push("/web/upload/" + Files[filename]);
                        console.log("/web/upload/" + Files[filename]);
                    }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], GetFieldComponent.prototype, "RestServerURL", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], GetFieldComponent.prototype, "document", void 0);
    GetFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-get-field',
            template: __webpack_require__("./src/app/get-field/get-field.component.html"),
            styles: [__webpack_require__("./src/app/get-field/get-field.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GetFieldComponent);
    return GetFieldComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map