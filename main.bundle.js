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

module.exports = "<navbar></navbar>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reusable_animations_fade__ = __webpack_require__("./src/app/reusable-animations/fade.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__reusable_animations_fade__["a" /* fadeAnimation */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buzz_buzz_component__ = __webpack_require__("./src/app/buzz/buzz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_experience_profile_experience_component__ = __webpack_require__("./src/app/profile-experience/profile-experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_education_profile_education_component__ = __webpack_require__("./src/app/profile-education/profile-education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_skill_profile_skill_component__ = __webpack_require__("./src/app/profile-skill/profile-skill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_certification_profile_certification_component__ = __webpack_require__("./src/app/profile-certification/profile-certification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_project_profile_project_component__ = __webpack_require__("./src/app/profile-project/profile-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_award_profile_award_component__ = __webpack_require__("./src/app/profile-award/profile-award.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_publication_profile_publication_component__ = __webpack_require__("./src/app/profile-publication/profile-publication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_web_profile_profile_web_profile_component__ = __webpack_require__("./src/app/profile-web-profile/profile-web-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_web_language_profile_web_language_component__ = __webpack_require__("./src/app/profile-web-language/profile-web-language.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__profile_portfolio_profile_portfolio_component__ = __webpack_require__("./src/app/profile-portfolio/profile-portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular_cropperjs__ = __webpack_require__("./node_modules/angular-cropperjs/angular-cropperjs.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular_cropperjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng5_slider__ = __webpack_require__("./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__buzz_buzz_component__["a" /* BuzzComponent */],
                __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__profile_experience_profile_experience_component__["a" /* ProfileExperienceComponent */],
                __WEBPACK_IMPORTED_MODULE_9__profile_education_profile_education_component__["a" /* ProfileEducationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__profile_skill_profile_skill_component__["a" /* ProfileSkillComponent */],
                __WEBPACK_IMPORTED_MODULE_11__profile_certification_profile_certification_component__["a" /* ProfileCertificationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__profile_project_profile_project_component__["a" /* ProfileProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_13__profile_award_profile_award_component__["a" /* ProfileAwardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__profile_publication_profile_publication_component__["a" /* ProfilePublicationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__profile_web_profile_profile_web_profile_component__["a" /* ProfileWebProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__profile_web_language_profile_web_language_component__["a" /* ProfileWebLanguageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__profile_portfolio_profile_portfolio_component__["a" /* ProfilePortfolioComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_18_angular_cropperjs__["AngularCropperjsModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_19_ng5_slider__["a" /* Ng5SliderModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__buzz_buzz_component__["a" /* BuzzComponent */] },
                    { path: 'buzz', component: __WEBPACK_IMPORTED_MODULE_4__buzz_buzz_component__["a" /* BuzzComponent */] },
                    {
                        path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */],
                        children: [
                            { path: 'experience', component: __WEBPACK_IMPORTED_MODULE_8__profile_experience_profile_experience_component__["a" /* ProfileExperienceComponent */] },
                            { path: 'education', component: __WEBPACK_IMPORTED_MODULE_9__profile_education_profile_education_component__["a" /* ProfileEducationComponent */] },
                            { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_10__profile_skill_profile_skill_component__["a" /* ProfileSkillComponent */] },
                            { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_17__profile_portfolio_profile_portfolio_component__["a" /* ProfilePortfolioComponent */] },
                            { path: 'certification', component: __WEBPACK_IMPORTED_MODULE_11__profile_certification_profile_certification_component__["a" /* ProfileCertificationComponent */] },
                            { path: 'project', component: __WEBPACK_IMPORTED_MODULE_12__profile_project_profile_project_component__["a" /* ProfileProjectComponent */] },
                            { path: 'award', component: __WEBPACK_IMPORTED_MODULE_13__profile_award_profile_award_component__["a" /* ProfileAwardComponent */] },
                            { path: 'publication', component: __WEBPACK_IMPORTED_MODULE_14__profile_publication_profile_publication_component__["a" /* ProfilePublicationComponent */] },
                            { path: 'web-profile', component: __WEBPACK_IMPORTED_MODULE_15__profile_web_profile_profile_web_profile_component__["a" /* ProfileWebProfileComponent */] },
                            { path: 'language', component: __WEBPACK_IMPORTED_MODULE_16__profile_web_language_profile_web_language_component__["a" /* ProfileWebLanguageComponent */] }
                        ]
                    },
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buzz/buzz.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/buzz/buzz.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page container -->\n<div class=\"page-container\">\n\t<!-- Page content -->\n\t<div class=\"page-content\">\n\t\t<!-- Main sidebar -->\n\t\t<div class=\"sidebar sidebar-main sidebar-default sidebar-separate\">\n\t\t\t<div class=\"sidebar-content\">\n\t\t\t\t<!-- User details (with sample pattern) -->\n\t\t\t\t<div class=\"content-group\">\n\t\t\t\t\t<div class=\"panel-body bg-blue border-radius-top text-center\" style=\"background-image: url(http://demo.interface.club/limitless/assets/images/bg.png); background-size: contain;\">\n\t\t\t\t\t\t<div class=\"content-group-sm\">\n\t\t\t\t\t\t\t<h5 class=\"text-semibold no-margin-bottom\">\n\t\t\t\t\t\t\t\tVictoria Davidson\n\t\t\t\t\t\t\t</h5>\n\n\t\t\t\t\t\t\t<span class=\"display-block\">Head of UX</span>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<a href=\"#\" class=\"display-inline-block content-group-sm\">\n\t\t\t\t\t\t\t<img src=\"assets/images/placeholder.jpg\" class=\"img-circle img-responsive\" alt=\"\" style=\"width: 120px; height: 120px;\">\n\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t<ul class=\"list-inline no-margin-bottom\">\n\t\t\t\t\t\t\t<li><a href=\"#\" class=\"btn bg-blue-700 btn-rounded btn-icon\"><i class=\"icon-phone\"></i></a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\" class=\"btn bg-blue-700 btn-rounded btn-icon\"><i class=\"icon-bubbles4\"></i></a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\" class=\"btn bg-blue-700 btn-rounded btn-icon\"><i class=\"icon-envelop4\"></i></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"panel panel-body no-border-top no-border-radius-top\">\n\t\t\t\t\t\t<div class=\"form-group mt-5\">\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Full name:</label>\n\t\t\t\t\t\t\t<span class=\"pull-right-sm\">Victoria Anna Davidson</span>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Phone number:</label>\n\t\t\t\t\t\t\t<span class=\"pull-right-sm\">+3630 8911837</span>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Corporate Email:</label>\n\t\t\t\t\t\t\t<span class=\"pull-right-sm\"><a href=\"#\">corporate@domain.com</a></span>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-group no-margin-bottom\">\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Personal Email:</label>\n\t\t\t\t\t\t\t<span class=\"pull-right-sm\"><a href=\"#\">personal@domain.com</a></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- /user details (with sample pattern) -->\n\n\n\n\n\n\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- /main sidebar -->\n\n\t\t<!-- Main sidebar -->\n\t\t<div class=\"sidebar sidebar-opposite sidebar-default sidebar-separate\">\n\t\t\t<div class=\"sidebar-content\">\n\n\t\t\t\t<!-- Latest updates -->\n\t\t\t\t<div class=\"sidebar-category\">\n\t\t\t\t\t<div class=\"category-title\">\n\t\t\t\t\t\t<span>Latest updates</span>\n\t\t\t\t\t\t<ul class=\"icons-list\">\n\t\t\t\t\t\t\t<li><a href=\"#\" data-action=\"collapse\"></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"category-content\">\n\t\t\t\t\t\t<ul class=\"media-list\">\n\t\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn border-primary text-primary btn-flat btn-rounded btn-icon btn-sm\"><i class=\"icon-git-pull-request\"></i></a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\tDrop the IE <a href=\"#\">specific hacks</a> for temporal inputs\n\t\t\t\t\t\t\t\t\t<div class=\"media-annotation\">4 minutes ago</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn border-warning text-warning btn-flat btn-rounded btn-icon btn-sm\"><i class=\"icon-git-commit\"></i></a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\tAdd full font overrides for popovers and tooltips\n\t\t\t\t\t\t\t\t\t<div class=\"media-annotation\">36 minutes ago</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn border-info text-info btn-flat btn-rounded btn-icon btn-sm\"><i class=\"icon-git-branch\"></i></a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Chris Arney</a> created a new <span class=\"text-semibold\">Design</span> branch\n\t\t\t\t\t\t\t\t\t<div class=\"media-annotation\">2 hours ago</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn border-success text-success btn-flat btn-rounded btn-icon btn-sm\"><i class=\"icon-git-merge\"></i></a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Eugene Kopyov</a> merged <span class=\"text-semibold\">Master</span> and <span class=\"text-semibold\">Dev</span>\n\t\t\t\t\t\t\t\t\tbranches\n\t\t\t\t\t\t\t\t\t<div class=\"media-annotation\">Dec 18, 18:36</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn border-primary text-primary btn-flat btn-rounded btn-icon btn-sm\"><i class=\"icon-git-pull-request\"></i></a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\tHave Carousel ignore keyboard events\n\t\t\t\t\t\t\t\t\t<div class=\"media-annotation\">Dec 12, 05:46</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- /latest updates -->\n\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- /main sidebar -->\n\n\t\t<!-- Main content -->\n\t\t<div class=\"content-wrapper\">\n\n\n\t\t\t<!-- Grid -->\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-8\">\n\n\t\t\t\t\t<!-- Share your thoughts -->\n\n\t\t\t\t\t<div class=\"panel panel-flat fade in\">\n\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h6 class=\"panel-title\">Share your thoughts, video, photos and links</h6>\n\t\t\t\t\t\t\t<div class=\"media-left media-middle\">\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"assets/images/5863c7afb5bcb_black-woman-thinking.-pf.jpg\" class=\"img-circle img-md\" alt=\"\"></a>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"media-body\" *ngFor=\"let user of userDetails\">\n\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"display-inline-block text-default\">{{user.firstname}} {{user.lastname}}</a>\n\n\t\t\t\t\t\t\t\t<div class=\"text-muted text-size-small\"><span class=\"display-block\" *ngFor=\"let addr of user.address\">\n\t\t\t\t\t\t\t\t\t\t{{addr[0].city}} @<b>{{addr.state}}</b></span></div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t<div class=\"heading-elements\">\n\t\t\t\t\t\t\t\t<ul class=\"icons-list\">\n\t\t\t\t\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\n\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"icon-popout\"></i> Notifications</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"icon-embed\"></i> Embed video</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"icon-pin-alt\"></i> Show location</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"icon-cog3\"></i> Settings</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\n\n\t\t\t\t\t\t<div class=\"panel-body\">\n\n\n\n\t\t\t\t\t\t\t<!-- Tabs with bottom line -->\n\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel panel-flat\" style=\"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"heading-elements\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"icons-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a data-action=\"close\"></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tabbable\" style=\"position:relative; top:-20px\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-tabs nav-tabs-bottom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"active\"><a href=\"#bottom-tab1\" data-toggle=\"tab\">Message</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#bottom-tab2\" data-toggle=\"tab\">Link</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#bottom-tab3\" data-toggle=\"tab\">Photo</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#bottom-tab4\" data-toggle=\"tab\">Video</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"bottom-tab1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"enter-message\" autofocus style=\"font-size:12px; color:#959494\" class=\"form-control mb-15\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t rows=\"3\" cols=\"1\" placeholder=\"Write or paste a link you like to share here !\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"submit\" value=\"Submitt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-labeled btn-labeled-right\">Share <b><i class=\"icon-circle-right2\"></i></b></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"bottom-tab2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group has-feedback has-feedback-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"url\" (keyup)=\"onPaste($event.target.value)\" class=\"form-control\" placeholder=\"http://\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-hyperlink text-muted\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"content-group\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{result.thumbnail_url}}\" class=\"img-responsive\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6>{{result.title}}</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"position:relative; top: -13px\" class=\"text-size-small text-muted\">{{result.provider_name}}</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" value=\"{{result.title}}\" class=\"form-control\" placeholder=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" value=\"{{memberID}}\" class=\"form-control\" placeholder=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"enter-message\" autofocus style=\"font-size:12px; color:#959494\" class=\"form-control mb-15\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t rows=\"2\" cols=\"1\" placeholder=\"Write your comments here !\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-labeled btn-labeled-right\">Share <b><i class=\"icon-circle-right2\"></i></b></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"bottom-tab3\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"my-snippet\" class=\"slim\" style=\"width:100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" id=\"myCropper\" />\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input formControlName=\"post_image\" id=\"post_image\" value=\"\" type=\"text\" placeholder=\"photo\">\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"enter-message\" class=\"form-control mb-15\" rows=\"3\" cols=\"1\" placeholder=\"Type your comment here\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">Image</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\">Log in</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-labeled btn-labeled-right\">Share <b><i class=\"icon-circle-right2\"></i></b></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"bottom-tab4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"my-snippet1\" class=\"slim\" style=\"width:100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" id=\"myCropper1\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /tabs with bottom line -->\n\n\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /share your thoughts -->\n\n\t\t\t\t\t<ng-template #other_content></ng-template>\n\n\n\n\n\n\n\n\n\t\t\t\t\t<div class=\"panel panel-flat\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"assets/images/59639c879aa65_team2.jpg\" class=\"img-circle img-md\" alt=\"\"></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t{{result.provider_name}}\n\n\n\t\t\t\t\t\t\t\t<h6 class=\"panel-title\">Ademola shared this post</h6>\n\t\t\t\t\t\t\t\t<div class=\"heading-elements\">\n\t\t\t\t\t\t\t\t\t<ul class=\"icons-list\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-menu\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"icon-popout\"></i> Notifications</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"icon-embed\"></i> Embed video</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"icon-pin-alt\"></i> Show location</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"icon-cog3\"></i> Settings</a></li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class=\"text-size-small\">Crazilyddd far excited less jeepers and due hit at greyhound tryingly one\n\t\t\t\t\t\t\t\t\tadjusted cuckoo hamster</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"heading-elements\">\n\t\t\t\t\t\t\t\t<ul class=\"icons-list\">\n\t\t\t\t\t\t\t\t\t<li><a data-action=\"collapse\"></a></li>\n\t\t\t\t\t\t\t\t\t<li><a data-action=\"reload\"></a></li>\n\t\t\t\t\t\t\t\t\t<li><a data-action=\"close\"></a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- User details (with sample pattern) -->\n\t\t\t\t\t\t<div class=\"content-group\">\n\t\t\t\t\t\t\t<img src=\"assets/images/post2.jpeg\" class=\"img-responsive\" alt=\"\">\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-footer panel-footer-transparent\">\n\t\t\t\t\t\t\t<div class=\"heading-elements\">\n\t\t\t\t\t\t\t\t<ul class=\"list-inline heading-text\">\n\t\t\t\t\t\t\t\t\t<li></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"text-grey-600\"><i class=\"icon-comment text-grey-400 position-left\"></i> 1,489</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"text-default\"><i class=\"icon-share text-pink position-left\"></i> 281</a></li>\n\n\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t\t<ul class=\"list-inline heading-text\">\n\t\t\t\t\t\t\t\t\t<li><span class=\"text-default\"></span></li>\n\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"heading-text pull-right\">Full article <i class=\"icon-circle-right2 position-right\"></i></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t<!-- /user details (with sample pattern) -->\n\n\t\t\t\t\t\t<div class=\"panel-body\">\n\n\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"assets/images/5863cb5a7e3f0_why-you-should-consider-dating-african-girls.jpg\" class=\"img-circle img-xs\"\n\t\t\t\t\t\t\t\t\t\t alt=\"\"></a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\n\t\t\t\t\t\t\t\t\t<h6 class=\"media-heading text-size-small text-semibold letter-icon-title\">This crud hypocritically <span class=\"media-annotation pull-right\">Yesterday,\n\t\t\t\t\t\t\t\t\t\t\t12:16</span></h6>\n\t\t\t\t\t\t\t\t\t<span class=\"media-annotation\">Ferret on bowed engagingly kangaroo and split contagious far one dear seagull\n\t\t\t\t\t\t\t\t\t\tfidgeted some</span>\n\n\t\t\t\t\t\t\t\t\t<ul class=\"list-inline mt-5\">\n\t\t\t\t\t\t\t\t\t\t<li>89 <a href=\"#\"><i class=\"icon-arrow-up22 text-success\"></i></a><a href=\"#\"><i class=\"icon-arrow-down22 text-danger\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Reply</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Edit</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"assets/images/5976031aa7186_1.jpg\" class=\"img-circle img-xs\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\n\t\t\t\t\t\t\t\t\t<h6 class=\"media-heading text-size-small text-semibold letter-icon-title\">This crud hypocritically <span class=\"media-annotation pull-right\">Yesterday,\n\t\t\t\t\t\t\t\t\t\t\t12:16</span></h6>\n\t\t\t\t\t\t\t\t\t<span class=\"media-annotation\">Ferret on bowed engagingly kangaroo and split contagious far one dear seagull\n\t\t\t\t\t\t\t\t\t\tfidgeted some</span>\n\n\t\t\t\t\t\t\t\t\t<ul class=\"list-inline mt-5\">\n\t\t\t\t\t\t\t\t\t\t<li>89 <a href=\"#\"><i class=\"icon-arrow-up22 text-success\"></i></a><a href=\"#\"><i class=\"icon-arrow-down22 text-danger\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Reply</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Edit</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t---------------\n\t\t\t\t\t<div class=\"panel panel-flat\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"assets/images/59639c879aa65_team2.jpg\" class=\"img-circle img-md\" alt=\"\"></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\n\n\n\t\t\t\t\t\t\t\t<h6 class=\"panel-title\">Ademola shared this post</h6>\n\t\t\t\t\t\t\t\t<div class=\"heading-elements\">\n\t\t\t\t\t\t\t\t\t<ul class=\"icons-list\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-menu\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"icon-popout\"></i> Notifications</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"icon-embed\"></i> Embed video</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"icon-pin-alt\"></i> Show location</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"icon-cog3\"></i> Settings</a></li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<span class=\"text-size-small\">{{result.description}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- User details (with sample pattern) -->\n\t\t\t\t\t\t<div class=\"content-group\">\n\n\t\t\t\t\t\t\t<img src=\"{{result.thumbnail_url}}\" class=\"img-responsive\" alt=\"\">\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-footer panel-footer-transparent\">\n\t\t\t\t\t\t\t<div class=\"heading-elements\">\n\t\t\t\t\t\t\t\t<ul class=\"list-inline heading-text\">\n\t\t\t\t\t\t\t\t\t<li></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"text-grey-600\"><i class=\"icon-comment text-grey-400 position-left\"></i> 1,489</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"text-default\"><i class=\"icon-share text-pink position-left\"></i> 281</a></li>\n\n\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t\t<ul class=\"list-inline heading-text\">\n\t\t\t\t\t\t\t\t\t<li><span class=\"text-default\"></span></li>\n\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"heading-text pull-right\">Full article <i class=\"icon-circle-right2 position-right\"></i></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t<!-- /user details (with sample pattern) -->\n\n\t\t\t\t\t\t<div class=\"panel-body\">\n\n\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"assets/images/5863cb5a7e3f0_why-you-should-consider-dating-african-girls.jpg\" class=\"img-circle img-xs\"\n\t\t\t\t\t\t\t\t\t\t alt=\"\"></a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\n\t\t\t\t\t\t\t\t\t<h6 class=\"media-heading text-size-small text-semibold letter-icon-title\">This crud hypocritically <span class=\"media-annotation pull-right\">Yesterday,\n\t\t\t\t\t\t\t\t\t\t\t12:16</span></h6>\n\t\t\t\t\t\t\t\t\t<span class=\"media-annotation\">Ferret on bowed engagingly kangaroo and split contagious far one dear seagull\n\t\t\t\t\t\t\t\t\t\tfidgeted some</span>\n\n\t\t\t\t\t\t\t\t\t<ul class=\"list-inline mt-5\">\n\t\t\t\t\t\t\t\t\t\t<li>89 <a href=\"#\"><i class=\"icon-arrow-up22 text-success\"></i></a><a href=\"#\"><i class=\"icon-arrow-down22 text-danger\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Reply</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Edit</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"assets/images/5976031aa7186_1.jpg\" class=\"img-circle img-xs\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\n\t\t\t\t\t\t\t\t\t<h6 class=\"media-heading text-size-small text-semibold letter-icon-title\">This crud hypocritically <span class=\"media-annotation pull-right\">Yesterday,\n\t\t\t\t\t\t\t\t\t\t\t12:16</span></h6>\n\t\t\t\t\t\t\t\t\t<span class=\"media-annotation\">Ferret on bowed engagingly kangaroo and split contagious far one dear seagull\n\t\t\t\t\t\t\t\t\t\tfidgeted some</span>\n\n\t\t\t\t\t\t\t\t\t<ul class=\"list-inline mt-5\">\n\t\t\t\t\t\t\t\t\t\t<li>89 <a href=\"#\"><i class=\"icon-arrow-up22 text-success\"></i></a><a href=\"#\"><i class=\"icon-arrow-down22 text-danger\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Reply</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Edit</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t----------------\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-4\">\n\n\t\t\t\t\t<!-- Connections -->\n\t\t\t\t\t<div class=\"panel panel-flat\">\n\n\n\t\t\t\t\t\t<div class=\"category-title\">\n\t\t\t\t\t\t\t<span>People you may know</span>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<ul class=\"media-list media-list-linked pb-5\">\n\n\t\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-link\">\n\t\t\t\t\t\t\t\t\t<div class=\"media-left\"><img src=\"assets/images/16.jpg\" class=\"img-circle img-md\" alt=\"\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"media-heading text-semibold\">James Alexander</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"media-annotation\">UI/UX expert</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"media-right media-middle\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"status-mark bg-success\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-link\">\n\t\t\t\t\t\t\t\t\t<div class=\"media-left\"><img src=\"assets/images/6.jpg\" class=\"img-circle img-md\" alt=\"\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"media-heading text-semibold\">Jeremy Victorino</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"media-annotation\">Senior designer</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"media-right media-middle\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"status-mark bg-grey-300\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-link\">\n\t\t\t\t\t\t\t\t\t<div class=\"media-left\"><img src=\"assets/images/5863c7afb5bcb_black-woman-thinking.-pf.jpg\" class=\"img-circle img-md\"\n\t\t\t\t\t\t\t\t\t\t alt=\"\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-heading\"><span class=\"text-semibold\">Jordana Mills</span></div>\n\t\t\t\t\t\t\t\t\t\t<span class=\"text-muted\">Sales consultant</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"media-right media-middle\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"status-mark bg-grey-300\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-link\">\n\t\t\t\t\t\t\t\t\t<div class=\"media-left\"><img src=\"assets/images/5863cb5a7e3f0_why-you-should-consider-dating-african-girls.jpg\"\n\t\t\t\t\t\t\t\t\t\t class=\"img-circle img-md\" alt=\"\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-heading\"><span class=\"text-semibold\">William Miles</span></div>\n\t\t\t\t\t\t\t\t\t\t<span class=\"text-muted\">SEO expert</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"media-right media-middle\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"status-mark bg-success\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-link\">\n\t\t\t\t\t\t\t\t\t<div class=\"media-left\"><img src=\"assets/images/59639c879aa65_team2.jpg\" class=\"img-circle img-md\" alt=\"\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"media-heading text-semibold\">Margo Baker</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"media-annotation\">Google</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"media-right media-middle\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"status-mark bg-success\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\n\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /connections -->\n\n\t\t\t\t\t<!-- Vertical form -->\n\t\t\t\t\t<div class=\"panel panel-flat\">\n\n\n\t\t\t\t\t\t<!-- Online users -->\n\t\t\t\t\t\t<div class=\"sidebar-category\">\n\t\t\t\t\t\t\t<div class=\"category-title\">\n\t\t\t\t\t\t\t\t<span>People you may know</span>\n\t\t\t\t\t\t\t\t<ul class=\"icons-list\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\" data-action=\"collapse\"></a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"category-content\">\n\n\t\t\t\t\t\t\t\t<ul class=\"media-list\">\n\t\t\t\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-left\"><img src=\"assets/images/5863cb5a7e3f0_why-you-should-consider-dating-african-girls.jpg\"\n\t\t\t\t\t\t\t\t\t\t\t class=\"img-circle img-md\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-heading text-semibold\">James Alexander</a>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-size-mini text-muted display-block\">Santa Ana, CA.</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-right media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"status-mark border-success\"></span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-left\"><img src=\"assets/images/5863c7afb5bcb_black-woman-thinking.-pf.jpg\" class=\"img-circle img-md\"\n\t\t\t\t\t\t\t\t\t\t\t alt=\"\"></a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-heading text-semibold\">Jeremy Victorino</a>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-size-mini text-muted display-block\">Dowagiac, MI.</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-right media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"status-mark border-danger\"></span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-left\"><img src=\"assets/images/16.jpg\" class=\"img-md img-circle\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-heading text-semibold\">Margo Baker</a>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-size-mini text-muted display-block\">Kasaan, AK.</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-right media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"status-mark border-success\"></span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-left\"><img src=\"assets/images/59639c879aa65_team2.jpg\" class=\"img-md img-circle\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-heading text-semibold\">Beatrix Diaz</a>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-size-mini text-muted display-block\">Neenah, WI.</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-right media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"status-mark border-warning\"></span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-left\"><img src=\"assets/images/6.jpg\" class=\"img-md img-circle\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-heading text-semibold\">Richard Vango</a>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-size-mini text-muted display-block\">Grapevine, TX.</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-right media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"status-mark border-grey-400\"></span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /online-users -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /vertical form -->\n\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\t\t\t<!-- /grid -->\n\n\t\t</div>\n\t\t<!-- /main content -->\n\n\t</div>\n\t<!-- /page content -->\n\n</div>\n<!-- /page container -->"

/***/ }),

/***/ "./src/app/buzz/buzz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuzzComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// tslint:disable-next-line:import-blacklist

var BuzzComponent = /** @class */ (function () {
    /*
    userDetails: any[]
    firstname
    lastname
    email
    memberID
    showSelected : boolean;
  
    public loginForm = this.fb.group({
      email: ["", Validators.required],
      profilephoto: ["", Validators.required],
      password: ["", Validators.required]
    });
  
    */
    function BuzzComponent() {
        /*
        @Input() myval
         result=[]
         //url =''
         base_url = 'https://api.embedly.com/1/oembed?'
         wee: any;
         */
        this.base_url = 'https://api.embedly.com/1/oembed?';
        this.isShareLinkThought = false;
        this.isSharePhoto = false;
        this.isShareVideo = false;
        this.isShareDefault = true;
    }
    BuzzComponent.prototype.ngOnInit = function () {
    };
    BuzzComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'buzz',
            template: __webpack_require__("./src/app/buzz/buzz.component.html"),
            styles: [__webpack_require__("./src/app/buzz/buzz.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BuzzComponent);
    return BuzzComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main navbar -->\n<div class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"navbar-boxed\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"index.html\"><img src=\"assets/images/logo.png\" alt=\"\"></a>\n\n      <ul class=\"nav navbar-nav pull-right visible-xs-block\">\n        <li><a data-toggle=\"collapse\" data-target=\"#navbar-mobile\"><i class=\"icon-tree5\"></i></a></li>\n      </ul>\n    </div>\n\n    <div class=\"navbar-collapse collapse\" id=\"navbar-mobile\">\n\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <div style=\"position:relative; top:5px\"><input style=\"width:290px\" type=\"search\" class=\"form-control typeahead-remote\"\n              placeholder=\"Find jobs, people, posts & groups\"></div>\n        </li>\n      </ul>\n\n\n      <ul class=\"nav navbar-nav navbar-right\">\n\n\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"icon-envelop5\"></i>\n            <span class=\"visible-xs-inline-block position-right\">Messages</span>\n            <span class=\"badge bg-warning-400\">4</span>\n          </a>\n\n          <div class=\"dropdown-menu dropdown-content width-350\">\n            <div class=\"dropdown-content-heading\">\n              Messages\n              <ul class=\"icons-list\">\n                <li><a href=\"#\"><i class=\"icon-compose\"></i></a></li>\n              </ul>\n            </div>\n\n            <ul class=\"media-list dropdown-content-body\">\n              <li class=\"media\">\n                <div class=\"media-left\">\n                  <img src=\"assets/images/placeholder.jpg\" class=\"img-circle img-sm\" alt=\"\">\n                  <span class=\"badge bg-danger-400 media-badge\">5</span>\n                </div>\n\n                <div class=\"media-body\">\n                  <a href=\"#\" class=\"media-heading\">\n                    <span class=\"text-semibold\">James Alexander</span>\n                    <span class=\"media-annotation pull-right\">04:58</span>\n                  </a>\n\n                  <span class=\"text-muted\">who knows, maybe that would be the best thing for me...</span>\n                </div>\n              </li>\n\n              <li class=\"media\">\n                <div class=\"media-left\">\n                  <img src=\"assets/images/placeholder.jpg\" class=\"img-circle img-sm\" alt=\"\">\n                  <span class=\"badge bg-danger-400 media-badge\">4</span>\n                </div>\n\n                <div class=\"media-body\">\n                  <a href=\"#\" class=\"media-heading\">\n                    <span class=\"text-semibold\">Margo Baker</span>\n                    <span class=\"media-annotation pull-right\">12:16</span>\n                  </a>\n\n                  <span class=\"text-muted\">That was something he was unable to do because...</span>\n                </div>\n              </li>\n\n              <li class=\"media\">\n                <div class=\"media-left\"><img src=\"assets/images/placeholder.jpg\" class=\"img-circle img-sm\" alt=\"\"></div>\n                <div class=\"media-body\">\n                  <a href=\"#\" class=\"media-heading\">\n                    <span class=\"text-semibold\">Jeremy Victorino</span>\n                    <span class=\"media-annotation pull-right\">22:48</span>\n                  </a>\n\n                  <span class=\"text-muted\">But that would be extremely strained and suspicious...</span>\n                </div>\n              </li>\n\n              <li class=\"media\">\n                <div class=\"media-left\"><img src=\"assets/images/placeholder.jpg\" class=\"img-circle img-sm\" alt=\"\"></div>\n                <div class=\"media-body\">\n                  <a href=\"#\" class=\"media-heading\">\n                    <span class=\"text-semibold\">Beatrix Diaz</span>\n                    <span class=\"media-annotation pull-right\">Tue</span>\n                  </a>\n\n                  <span class=\"text-muted\">What a strenuous career it is that I've chosen...</span>\n                </div>\n              </li>\n\n              <li class=\"media\">\n                <div class=\"media-left\"><img src=\"assets/images/placeholder.jpg\" class=\"img-circle img-sm\" alt=\"\"></div>\n                <div class=\"media-body\">\n                  <a href=\"#\" class=\"media-heading\">\n                    <span class=\"text-semibold\">Richard Vango</span>\n                    <span class=\"media-annotation pull-right\">Mon</span>\n                  </a>\n\n                  <span class=\"text-muted\">Other travelling salesmen live a life of luxury...</span>\n                </div>\n              </li>\n            </ul>\n\n            <div class=\"dropdown-content-footer\">\n              <a href=\"#\" data-popup=\"tooltip\" title=\"All messages\"><i class=\"icon-menu display-block\"></i></a>\n            </div>\n          </div>\n        </li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"icon-bell2\"></i>\n            <span class=\"visible-xs-inline-block position-right\">Messages</span>\n            <span class=\"badge bg-warning-400\">2</span>\n          </a>\n\n          <div class=\"dropdown-menu dropdown-content width-350\">\n            <div class=\"dropdown-content-heading\">\n              Messages\n              <ul class=\"icons-list\">\n                <li><a href=\"#\"><i class=\"icon-compose\"></i></a></li>\n              </ul>\n            </div>\n\n            <ul class=\"media-list dropdown-content-body\">\n              <li class=\"media\">\n                <div class=\"media-left\">\n                  <img src=\"assets/images/placeholder.jpg\" class=\"img-circle img-sm\" alt=\"\">\n                  <span class=\"badge bg-danger-400 media-badge\">5</span>\n                </div>\n\n                <div class=\"media-body\">\n                  <a href=\"#\" class=\"media-heading\">\n                    <span class=\"text-semibold\">James Alexander</span>\n                    <span class=\"media-annotation pull-right\">04:58</span>\n                  </a>\n\n                  <span class=\"text-muted\">who knows, maybe that would be the best thing for me...</span>\n                </div>\n              </li>\n\n              <li class=\"media\">\n                <div class=\"media-left\">\n                  <img src=\"assets/images/placeholder.jpg\" class=\"img-circle img-sm\" alt=\"\">\n                  <span class=\"badge bg-danger-400 media-badge\">4</span>\n                </div>\n\n                <div class=\"media-body\">\n                  <a href=\"#\" class=\"media-heading\">\n                    <span class=\"text-semibold\">Margo Baker</span>\n                    <span class=\"media-annotation pull-right\">12:16</span>\n                  </a>\n\n                  <span class=\"text-muted\">That was something he was unable to do because...</span>\n                </div>\n              </li>\n\n              <li class=\"media\">\n                <div class=\"media-left\"><img src=\"assets/images/placeholder.jpg\" class=\"img-circle img-sm\" alt=\"\"></div>\n                <div class=\"media-body\">\n                  <a href=\"#\" class=\"media-heading\">\n                    <span class=\"text-semibold\">Jeremy Victorino</span>\n                    <span class=\"media-annotation pull-right\">22:48</span>\n                  </a>\n\n                  <span class=\"text-muted\">But that would be extremely strained and suspicious...</span>\n                </div>\n              </li>\n\n              <li class=\"media\">\n                <div class=\"media-left\"><img src=\"assets/images/placeholder.jpg\" class=\"img-circle img-sm\" alt=\"\"></div>\n                <div class=\"media-body\">\n                  <a href=\"#\" class=\"media-heading\">\n                    <span class=\"text-semibold\">Beatrix Diaz</span>\n                    <span class=\"media-annotation pull-right\">Tue</span>\n                  </a>\n\n                  <span class=\"text-muted\">What a strenuous career it is that I've chosen...</span>\n                </div>\n              </li>\n\n              <li class=\"media\">\n                <div class=\"media-left\"><img src=\"assets/images/placeholder.jpg\" class=\"img-circle img-sm\" alt=\"\"></div>\n                <div class=\"media-body\">\n                  <a href=\"#\" class=\"media-heading\">\n                    <span class=\"text-semibold\">Richard Vango</span>\n                    <span class=\"media-annotation pull-right\">Mon</span>\n                  </a>\n\n                  <span class=\"text-muted\">Other travelling salesmen live a life of luxury...</span>\n                </div>\n              </li>\n            </ul>\n\n            <div class=\"dropdown-content-footer\">\n              <a href=\"#\" data-popup=\"tooltip\" title=\"All messages\"><i class=\"icon-menu display-block\"></i></a>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"dropdown dropdown-user\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <img src=\"assets/images/5863c7afb5bcb_black-woman-thinking.-pf.jpg\" alt=\"\">\n            <span>&nbsp;</span>\n            <i class=\"caret\"></i>\n\n          </a>\n\n          <ul class=\"dropdown-menu dropdown-menu-right\">\n            <li><a href=\"#\"><i class=\"icon-user-plus\"></i> My profile</a></li>\n            <li><a href=\"#\"><i class=\"icon-coins\"></i> My balance</a></li>\n            <li><a href=\"#\"><span class=\"badge badge-warning pull-right\">58</span> <i class=\"icon-comment-discussion\"></i>\n                Messages</a></li>\n            <li class=\"divider\"></li>\n            <li><a href=\"#\"><i class=\"icon-cog5\"></i> Account settings</a></li>\n            <li (click)=\"logout()\"><a href=\"#\"><i class=\"icon-switch2\"></i> Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- /main navbar -->\n\n<!-- Second navbar -->\n<div class=\"navbar navbar-default\" id=\"navbar-second\">\n  <div class=\"navbar-boxed\">\n    <ul class=\"nav navbar-nav no-border visible-xs-block\">\n      <li><a class=\"text-center collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-second-toggle\"><i class=\"icon-menu7\"></i></a></li>\n    </ul>\n\n    <div class=\"navbar-collapse collapse\" id=\"navbar-second-toggle\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active current\"><a routerLink=\"/buzz\" i18n><i class=\"icon-home position-left\"></i> Home</a></li>\n        <li routerLinkActive=\"active current\"><a routerLink=\"/profile\" i18n><i class=\"icon-user position-left\"></i>\n            Profile</a></li>\n        <li routerLinkActive=\"active current\"><a routerLink=\"/contacts/my-contacts\" i18n><i class=\"icon-collaboration position-left\"></i>\n            Contacts</a></li>\n        <li routerLinkActive=\"active current\"><a routerLink=\"/jobs\" i18n><i class=\"icon-briefcase3 position-left\"></i>\n            Jobs</a></li>\n        <li routerLinkActive=\"active current\"><a routerLink=\"/companies\"><i class=\"icon-office position-left\"></i>\n            Companies</a></li>\n        <li routerLinkActive=\"active current\"><a routerLink=\"/groups\"><i class=\"icon-users4 position-left\"></i> Groups</a></li>\n        <li routerLinkActive=\"active current\"><a routerLink=\"/test\"><i class=\"icon-users4 position-left\"></i> Test</a></li>\n\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\">\n            <i class=\"icon-grid3 position-left\"></i> Solutions <span class=\"caret\"></span>\n          </a>\n\n          <ul class=\"dropdown-menu\">\n\n            <li class=\" dropdown-menu-lg\" style=\"padding:10px\">\n              <div class=\"category-content\">\n                <div class=\"row\">\n                  <div class=\"col-xs-6\">\n                    <button class=\"btn bg-teal-400 btn-block btn-float btn-float-lg\" type=\"button\"><i class=\"icon-git-branch\"></i>\n                      <span>Branch</span></button>\n                    <button class=\"btn bg-purple-300 btn-block btn-float btn-float-lg\" type=\"button\"><i class=\"icon-mail-read\"></i>\n                      <span>Messages</span></button>\n                  </div>\n\n                  <div class=\"col-xs-6\">\n                    <button class=\"btn bg-warning-400 btn-block btn-float btn-float-lg\" type=\"button\"><i class=\"icon-stats-bars\"></i>\n                      <span>Statistics</span></button>\n                    <button class=\"btn bg-blue btn-block btn-float btn-float-lg\" type=\"button\"><i class=\"icon-people\"></i>\n                      <span>Users</span></button>\n                  </div>\n                </div>\n              </div>\n\n            </li>\n\n          </ul>\n        </li>\n\n\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- /second navbar -->"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile-award/profile-award.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile-award/profile-award.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-white\">\n  <div class=\"panel-heading\">\n    <h6 class=\"panel-title\">My awards and honours</h6>\n    <div class=\"heading-elements\">\n      <ul class=\"icons-list\">\n        <li><a data-action=\"collapse\"></a></li>\n        <li><a data-action=\"reload\"></a></li>\n        <li><a data-action=\"close\"></a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"panel-body\">\n    <div class=\"chart-container\">\n      <div class=\"chart has-fixed-height\" id=\"plans\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile-award/profile-award.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileAwardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileAwardComponent = /** @class */ (function () {
    function ProfileAwardComponent() {
    }
    ProfileAwardComponent.prototype.ngOnInit = function () {
    };
    ProfileAwardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-award',
            template: __webpack_require__("./src/app/profile-award/profile-award.component.html"),
            styles: [__webpack_require__("./src/app/profile-award/profile-award.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileAwardComponent);
    return ProfileAwardComponent;
}());



/***/ }),

/***/ "./src/app/profile-certification/profile-certification.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile-certification/profile-certification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-white\">\n  <div class=\"panel-heading\">\n    <h6 class=\"panel-title\">My Certifications</h6>\n    <div class=\"heading-elements\">\n      <ul class=\"icons-list\">\n        <li><a data-action=\"collapse\"></a></li>\n        <li><a data-action=\"reload\"></a></li>\n        <li><a data-action=\"close\"></a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"panel-body\">\n    <div class=\"chart-container\">\n      <div class=\"chart has-fixed-height\" id=\"plans\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile-certification/profile-certification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileCertificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileCertificationComponent = /** @class */ (function () {
    function ProfileCertificationComponent() {
    }
    ProfileCertificationComponent.prototype.ngOnInit = function () {
    };
    ProfileCertificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-certification',
            template: __webpack_require__("./src/app/profile-certification/profile-certification.component.html"),
            styles: [__webpack_require__("./src/app/profile-certification/profile-certification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileCertificationComponent);
    return ProfileCertificationComponent;
}());



/***/ }),

/***/ "./src/app/profile-education/profile-education.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile-education/profile-education.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-white\">\n  <div class=\"panel-heading\">\n    <h6 class=\"panel-title\">Educational History</h6>\n    <div class=\"heading-elements\">\n      <button type=\"button\" data-toggle=\"modal\" data-target=\"#modal_theme_add_education\" data-popup=\"tooltip\"\n        data-placement=\"top\" title=\"Add new\" class=\"btn border-teal text-teal btn-rounded btn-icon btn-xs\"><i class=\"icon-plus2\"></i></button>\n      &nbsp;&nbsp;\n    </div>\n  </div>\n\n  <div class=\"panel-body\">\n    <div class=\"chart-container\">\n      <div class=\"chart has-fixed-height\" id=\"plans\"></div>\n    </div>\n  </div>\n</div>\n\n\n<!-- edit education modal -->\n<div id=\"modal_theme_add_education\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-info\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h6 class=\"modal-title\">Add Education</h6>\n      </div>\n\n      <div class=\"modal-body\">\n\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-sm-8\">\n              <label class=\"text-semibold\">Job title</label>\n              <input type=\"text\" placeholder=\"Eg: Software Engineer\" class=\"form-control\">\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"text-semibold\">Employment Type</label>\n                <select data-placeholder=\"Select type...\" class=\"select\">\n                  <option>Founder</option>\n                  <option>Co-Founder</option>\n                  <option value=\"AZ\">Full-time</option>\n                  <option value=\"CO\">Part-time</option>\n                  <option value=\"ID\">Intern</option>\n                  <option value=\"WY\">Freelancer</option>\n                </select>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-sm-5\">\n              <label class=\"text-semibold\">Company name</label>\n              <input type=\"text\" placeholder=\"Ring street 12\" class=\"form-control\">\n            </div>\n\n            <div class=\"col-sm-3\">\n              <div class=\"form-group\">\n                <label class=\"text-semibold\">Industry</label>\n                <select data-placeholder=\"Select type...\" class=\"select\">\n                  <option>Founder</option>\n                  <option>Co-Founder</option>\n                  <option value=\"AZ\">Full-time</option>\n                  <option value=\"CO\">Part-time</option>\n                  <option value=\"ID\">Intern</option>\n                  <option value=\"WY\">Freelancer</option>\n                </select>\n              </div>\n\n            </div>\n\n            <div class=\"col-sm-4\">\n              <label class=\"text-semibold\">Location</label>\n              <input type=\"text\" placeholder=\"Lagos , Nigeria\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n\n\n\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-sm-3\">\n              <div class=\"form-group\">\n                <label class=\"text-semibold\">From</label>\n                <select data-placeholder=\"Select type...\" class=\"select\">\n                  <option>January</option>\n                  <option>February</option>\n                  <option value=\"AZ\">March</option>\n                  <option value=\"CO\">April</option>\n                  <option value=\"ID\">May</option>\n                  <option value=\"WY\">June</option>\n                  <option value=\"AZ\">July</option>\n                  <option value=\"CO\">August</option>\n                  <option value=\"ID\">September</option>\n                  <option value=\"WY\">October</option>\n                  <option value=\"AZ\">November</option>\n                  <option value=\"CO\">December</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-sm-2\">\n              <div class=\"form-group\">\n                <label>&nbsp;&nbsp;</label>\n                <select data-placeholder=\"Select type...\" class=\"select\">\n                  <option>1980</option>\n                  <option>1981</option>\n                  <option value=\"AZ\">1982</option>\n                  <option value=\"CO\">1983</option>\n                  <option value=\"ID\">1984</option>\n                  <option value=\"WY\">1985</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-sm-3\">\n              <div class=\"form-group\">\n                <label class=\"text-semibold\">To</label>\n                <select data-placeholder=\"Select type...\" class=\"select\">\n                  <option>January</option>\n                  <option>February</option>\n                  <option value=\"AZ\">March</option>\n                  <option value=\"CO\">April</option>\n                  <option value=\"ID\">May</option>\n                  <option value=\"WY\">June</option>\n                  <option value=\"AZ\">July</option>\n                  <option value=\"CO\">August</option>\n                  <option value=\"ID\">September</option>\n                  <option value=\"WY\">October</option>\n                  <option value=\"AZ\">November</option>\n                  <option value=\"CO\">December</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-sm-2\">\n              <div class=\"form-group\">\n                <label class=\"text-semibold\">&nbsp;&nbsp;</label>\n                <select data-placeholder=\"Select type...\" class=\"select\">\n                  <option>1980</option>\n                  <option>1981</option>\n                  <option value=\"AZ\">1982</option>\n                  <option value=\"CO\">1983</option>\n                  <option value=\"ID\">1984</option>\n                  <option value=\"WY\">1985</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n              <div class=\"form-group\">\n                <label class=\"text-semibold\">Present</label>\n                <div class=\"form-group\">\n                  <input type=\"checkbox\" required ngModel name=\"isAgree\" /> &nbsp;&nbsp;\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <label class=\"text-semibold\">Description</label>\n              <textarea name=\"description\" class=\"form-control mb-15\" rows=\"3\" placeholder=\"Type your job descripto here\"></textarea>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <input type=\"checkbox\" required ngModel name=\"isAgree\" /> &nbsp;&nbsp; Make this just my headline\n        </div>\n\n\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-info\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /add education  modal -->\n\n\n\n<!-- edit education modal -->\n<div id=\"modal_theme_edit_education\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-info\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h6 class=\"modal-title\">Edit Education</h6>\n      </div>\n\n      <div class=\"modal-body\">\n\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-sm-8\">\n              <label class=\"text-semibold\">Job title</label>\n              <input type=\"text\" placeholder=\"Eg: Software Engineer\" class=\"form-control\">\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"text-semibold\">Employment Type</label>\n                <select data-placeholder=\"Select type...\" class=\"select\">\n                  <option>Founder</option>\n                  <option>Co-Founder</option>\n                  <option value=\"AZ\">Full-time</option>\n                  <option value=\"CO\">Part-time</option>\n                  <option value=\"ID\">Intern</option>\n                  <option value=\"WY\">Freelancer</option>\n                </select>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-sm-5\">\n              <label class=\"text-semibold\">Company name</label>\n              <input type=\"text\" placeholder=\"Ring street 12\" class=\"form-control\">\n            </div>\n\n            <div class=\"col-sm-3\">\n              <div class=\"form-group\">\n                <label class=\"text-semibold\">Industry</label>\n                <select data-placeholder=\"Select type...\" class=\"select\">\n                  <option>Founder</option>\n                  <option>Co-Founder</option>\n                  <option value=\"AZ\">Full-time</option>\n                  <option value=\"CO\">Part-time</option>\n                  <option value=\"ID\">Intern</option>\n                  <option value=\"WY\">Freelancer</option>\n                </select>\n              </div>\n\n            </div>\n\n            <div class=\"col-sm-4\">\n              <label class=\"text-semibold\">Location</label>\n              <input type=\"text\" placeholder=\"Lagos , Nigeria\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n\n\n\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-sm-3\">\n              <div class=\"form-group\">\n                <label class=\"text-semibold\">From</label>\n                <select data-placeholder=\"Select type...\" class=\"select\">\n                  <option>January</option>\n                  <option>February</option>\n                  <option value=\"AZ\">March</option>\n                  <option value=\"CO\">April</option>\n                  <option value=\"ID\">May</option>\n                  <option value=\"WY\">June</option>\n                  <option value=\"AZ\">July</option>\n                  <option value=\"CO\">August</option>\n                  <option value=\"ID\">September</option>\n                  <option value=\"WY\">October</option>\n                  <option value=\"AZ\">November</option>\n                  <option value=\"CO\">December</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-sm-2\">\n              <div class=\"form-group\">\n                <label>&nbsp;&nbsp;</label>\n                <select data-placeholder=\"Select type...\" class=\"select\">\n                  <option>1980</option>\n                  <option>1981</option>\n                  <option value=\"AZ\">1982</option>\n                  <option value=\"CO\">1983</option>\n                  <option value=\"ID\">1984</option>\n                  <option value=\"WY\">1985</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-sm-3\">\n              <div class=\"form-group\">\n                <label class=\"text-semibold\">To</label>\n                <select data-placeholder=\"Select type...\" class=\"select\">\n                  <option>January</option>\n                  <option>February</option>\n                  <option value=\"AZ\">March</option>\n                  <option value=\"CO\">April</option>\n                  <option value=\"ID\">May</option>\n                  <option value=\"WY\">June</option>\n                  <option value=\"AZ\">July</option>\n                  <option value=\"CO\">August</option>\n                  <option value=\"ID\">September</option>\n                  <option value=\"WY\">October</option>\n                  <option value=\"AZ\">November</option>\n                  <option value=\"CO\">December</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-sm-2\">\n              <div class=\"form-group\">\n                <label class=\"text-semibold\">&nbsp;&nbsp;</label>\n                <select data-placeholder=\"Select type...\" class=\"select\">\n                  <option>1980</option>\n                  <option>1981</option>\n                  <option value=\"AZ\">1982</option>\n                  <option value=\"CO\">1983</option>\n                  <option value=\"ID\">1984</option>\n                  <option value=\"WY\">1985</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n              <div class=\"form-group\">\n                <label class=\"text-semibold\">Present</label>\n                <div class=\"form-group\">\n                  <input type=\"checkbox\" required ngModel name=\"isAgree\" /> &nbsp;&nbsp;\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <label class=\"text-semibold\">Description</label>\n              <textarea name=\"description\" class=\"form-control mb-15\" rows=\"3\" placeholder=\"Type your job descripto here\"></textarea>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <input type=\"checkbox\" required ngModel name=\"isAgree\" /> &nbsp;&nbsp; Make this just my headline\n        </div>\n\n\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-info\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /edit education modal -->"

/***/ }),

/***/ "./src/app/profile-education/profile-education.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEducationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileEducationComponent = /** @class */ (function () {
    function ProfileEducationComponent() {
    }
    ProfileEducationComponent.prototype.ngOnInit = function () {
    };
    ProfileEducationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-education',
            template: __webpack_require__("./src/app/profile-education/profile-education.component.html"),
            styles: [__webpack_require__("./src/app/profile-education/profile-education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileEducationComponent);
    return ProfileEducationComponent;
}());



/***/ }),

/***/ "./src/app/profile-experience/profile-experience.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile-experience/profile-experience.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-white\">\n\t<div class=\"panel-heading\">\n\t\t<h6 class=\"panel-title\">Professional Experience</h6>\n\t\t<div class=\"heading-elements\">\n\t\t\t<button type=\"button\" data-toggle=\"modal\" data-target=\"#modal_theme_add_experience\" data-popup=\"tooltip\"\n\t\t\t data-placement=\"top\" title=\"Add new\" class=\"btn border-teal text-teal btn-flat btn-rounded btn-icon btn-xs\"><i\n\t\t\t\t class=\"icon-plus2\"></i></button> &nbsp;&nbsp;\n\t\t</div>\n\t</div>\n\n\t<ul class=\"media-list\">\n\t\t<li class=\"media panel-body stack-media-on-mobile\">\n\t\t\t<div class=\"media-left\">\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"assets/images/sample-logos/bmw.jpeg\" class=\"img-rounded img-lg\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<div class=\"media-body\">\n\t\t\t\t<h6 class=\"media-heading text-semibold\">Regional Directors\n\t\t\t\t\t&nbsp;&nbsp; <i data-toggle=\"modal\" data-target=\"#modal_theme_edit_experience\" class=\"icon-pencil icon-1x text-teal-300 position-left\"\n\t\t\t\t\t style=\"cursor: pointer; size:50px\"></i>\n\t\t\t\t\t<span class=\"media-annotation pull-right\"> 2 years 6 months </span></h6>\n\t\t\t\t<span>McDonald</span>\n\t\t\t\t<ul class=\"list-inline list-inline-separate text-muted mb-5\">\n\t\t\t\t\t<li><i class=\"icon-book-play position-left\"></i> Video tutorials</li>\n\t\t\t\t\t<li>14 minutes ago</li>\n\t\t\t\t\t<li>14 minutes ago</li>\n\t\t\t\t</ul>\n\t\t\t\tHello some plentiful a beneath much glanced that Showcase your expertise using product brochures, catalogs,\n\t\t\t\tscientific publications, and product documentation. savage pending dashingly and hare insane dull Food truck fixie\n\t\t\t\tlocavore, accusamus mcsweeney's marfa nulla single-origin coffee squid laeggin.\n\t\t\t</div>\n\n\t\t</li>\n\n\t\t<li class=\"media panel-body stack-media-on-mobile\">\n\t\t\t<div class=\"media-left\">\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"assets/images/sample-logos/redbull.png\" class=\"img-rounded img-lg\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<div class=\"media-body\">\n\t\t\t\t<h6 class=\"media-heading text-semibold\">Regional Director <span class=\"media-annotation\"><i data-toggle=\"modal\"\n\t\t\t\t\t\t data-target=\"#modal_theme_edit_experience\" class=\"icon-pencil5 position-left\" style=\"cursor: pointer; size:50px\"></i>\n\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"media-annotation pull-right\"> 2 years 6 months </span></h6>\n\t\t\t\t<span>McDonald</span>\n\t\t\t\t<ul class=\"list-inline list-inline-separate text-muted mb-5\">\n\t\t\t\t\t<li><i class=\"icon-book-play position-left\"></i> Video tutorials</li>\n\t\t\t\t\t<li>14 minutes ago</li>\n\t\t\t\t</ul>\n\t\t\t\tHello some plentiful a beneath much glanced that savage pending dashingly and hare insane dull Food truck fixie\n\t\t\t\tlocavore, accusamus mcsweeney's marfa nulla single-origin coffee squid laeggin.\n\t\t\t</div>\n\n\t\t</li>\n\n\t\t<li class=\"media panel-body stack-media-on-mobile\">\n\t\t\t<div class=\"media-left\">\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"assets/images/sample-logos/mcdonald.jpeg\" class=\"img-rounded img-lg\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<div class=\"media-body\">\n\t\t\t\t<h6 class=\"media-heading text-semibold\">Regional Director <span class=\"media-annotation\"><i data-toggle=\"modal\"\n\t\t\t\t\t\t data-target=\"#modal_theme_edit_experience\" class=\"icon-pencil5 position-left\" style=\"cursor: pointer; size:50px\"></i>\n\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"media-annotation pull-right\"> 2 years 6 months </span></h6>\n\t\t\t\t<span>McDonald</span>\n\t\t\t\t<ul class=\"list-inline list-inline-separate text-muted mb-5\">\n\t\t\t\t\t<li><i class=\"icon-book-play position-left\"></i> Video tutorials</li>\n\t\t\t\t\t<li>14 minutes ago</li>\n\t\t\t\t</ul>\n\t\t\t\tHello some plentiful a beneath much glanced that savage pending dashingly and hare insane dull Food truck fixie\n\t\t\t\tlocavore, accusamus mcsweeney's marfa nulla single-origin coffee squid laeggin.\n\t\t\t</div>\n\n\t\t</li>\n\n\t\t<li class=\"media panel-body stack-media-on-mobile\">\n\t\t\t<div class=\"media-left\">\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"assets/images/sample-logos/aok.png\" class=\"img-rounded img-lg\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<div class=\"media-body\">\n\t\t\t\t<h6 class=\"media-heading text-semibold\">Regional Director <span class=\"media-annotation\"><i data-toggle=\"modal\"\n\t\t\t\t\t\t data-target=\"#modal_theme_edit_experience\" class=\"icon-pencil5 position-left\" style=\"cursor: pointer; size:50px\"></i>\n\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"media-annotation pull-right\"> 2 years 6 months </span></h6>\n\t\t\t\t<span>McDonald</span>\n\t\t\t\t<ul class=\"list-inline list-inline-separate text-muted mb-5\">\n\t\t\t\t\t<li><i class=\"icon-book-play position-left\"></i> Video tutorials</li>\n\t\t\t\t\t<li>14 minutes ago</li>\n\t\t\t\t</ul>\n\t\t\t\tHello some plentiful a beneath much glanced that savage pending dashingly and hare insane dull Food truck fixie\n\t\t\t\tlocavore, accusamus mcsweeney's marfa nulla single-origin coffee squid laeggin.\n\t\t\t</div>\n\n\t\t</li>\n\n\t\t<li class=\"media panel-body stack-media-on-mobile\">\n\t\t\t<div class=\"media-left\">\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"assets/images/sample-logos/ge.png\" class=\"img-rounded img-lg\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<div class=\"media-body\">\n\t\t\t\t<h6 class=\"media-heading text-semibold\">Regional Director <span class=\"media-annotation\"><i data-toggle=\"modal\"\n\t\t\t\t\t\t data-target=\"#modal_theme_edit_experience\" class=\"icon-pencil5 position-left\" style=\"cursor: pointer; size:50px\"></i>\n\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"media-annotation pull-right\"> 2 years 6 months </span></h6>\n\t\t\t\t<span>McDonald</span>\n\t\t\t\t<ul class=\"list-inline list-inline-separate text-muted mb-5\">\n\t\t\t\t\t<li><i class=\"icon-book-play position-left\"></i> Video tutorials</li>\n\t\t\t\t\t<li>14 minutes ago</li>\n\t\t\t\t</ul>\n\t\t\t\tHello some plentiful a beneath much glanced that savage pending dashingly and hare insane dull Food truck fixie\n\t\t\t\tlocavore, accusamus mcsweeney's marfa nulla single-origin coffee squid laeggin.\n\t\t\t</div>\n\n\t\t</li>\n\n\n\t</ul>\n</div>\n\n\n<!-- add experience modal -->\n<div id=\"modal_theme_add_experience\" class=\"modal fade\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header bg-info\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<h6 class=\"modal-title\">Add Experience</h6>\n\t\t\t</div>\n\n\t\t\t<div class=\"modal-body\">\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Job title</label>\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Eg: Software Engineer\" class=\"form-control\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">Employment Type</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>Founder</option>\n\t\t\t\t\t\t\t\t\t<option>Co-Founder</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">Full-time</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">Part-time</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">Intern</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">Freelancer</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Company name</label>\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Ring street 12\" class=\"form-control\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">Industry</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>Founder</option>\n\t\t\t\t\t\t\t\t\t<option>Co-Founder</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">Full-time</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">Part-time</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">Intern</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">Freelancer</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Location</label>\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Lagos , Nigeria\" class=\"form-control\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">From</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>January</option>\n\t\t\t\t\t\t\t\t\t<option>February</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">March</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">April</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">May</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">June</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">July</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">August</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">September</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">October</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">November</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">December</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>&nbsp;&nbsp;</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>1980</option>\n\t\t\t\t\t\t\t\t\t<option>1981</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">1982</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">1983</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">1984</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">1985</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">To</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>January</option>\n\t\t\t\t\t\t\t\t\t<option>February</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">March</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">April</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">May</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">June</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">July</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">August</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">September</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">October</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">November</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">December</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">&nbsp;&nbsp;</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>1980</option>\n\t\t\t\t\t\t\t\t\t<option>1981</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">1982</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">1983</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">1984</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">1985</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">Present</label>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" required ngModel name=\"isAgree\" /> &nbsp;&nbsp;\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Description</label>\n\t\t\t\t\t\t\t<textarea name=\"description\" class=\"form-control mb-15\" rows=\"3\" placeholder=\"Type your job descripto here\"></textarea>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"checkbox\" required ngModel name=\"isAgree\" /> &nbsp;&nbsp; Make this just my headline\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-info\">Save changes</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- /add experience modal -->\n\n\n\n\n<!-- edit experience modal -->\n<div id=\"modal_theme_edit_experience\" class=\"modal fade\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header bg-info\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<h6 class=\"modal-title\">Edit Experience</h6>\n\t\t\t</div>\n\n\t\t\t<div class=\"modal-body\">\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Job title</label>\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Eg: Software Engineer\" class=\"form-control\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">Employment Type</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>Founder</option>\n\t\t\t\t\t\t\t\t\t<option>Co-Founder</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">Full-time</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">Part-time</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">Intern</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">Freelancer</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Company name</label>\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Ring street 12\" class=\"form-control\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">Industry</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>Founder</option>\n\t\t\t\t\t\t\t\t\t<option>Co-Founder</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">Full-time</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">Part-time</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">Intern</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">Freelancer</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Location</label>\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Lagos , Nigeria\" class=\"form-control\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">From</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>January</option>\n\t\t\t\t\t\t\t\t\t<option>February</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">March</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">April</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">May</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">June</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">July</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">August</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">September</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">October</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">November</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">December</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>&nbsp;&nbsp;</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>1980</option>\n\t\t\t\t\t\t\t\t\t<option>1981</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">1982</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">1983</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">1984</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">1985</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">To</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>January</option>\n\t\t\t\t\t\t\t\t\t<option>February</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">March</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">April</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">May</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">June</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">July</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">August</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">September</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">October</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">November</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">December</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">&nbsp;&nbsp;</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>1980</option>\n\t\t\t\t\t\t\t\t\t<option>1981</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">1982</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">1983</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">1984</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">1985</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">Present</label>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" required ngModel name=\"isAgree\" /> &nbsp;&nbsp;\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Description</label>\n\t\t\t\t\t\t\t<textarea name=\"description\" class=\"form-control mb-15\" rows=\"3\" placeholder=\"Type your job descripto here\"></textarea>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"checkbox\" required ngModel name=\"isAgree\" /> &nbsp;&nbsp; Make this just my headline\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-info\">Save changes</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- /edit experience modal -->"

/***/ }),

/***/ "./src/app/profile-experience/profile-experience.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileExperienceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileExperienceComponent = /** @class */ (function () {
    function ProfileExperienceComponent() {
    }
    ProfileExperienceComponent.prototype.ngOnInit = function () {
    };
    ProfileExperienceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-experience',
            template: __webpack_require__("./src/app/profile-experience/profile-experience.component.html"),
            styles: [__webpack_require__("./src/app/profile-experience/profile-experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileExperienceComponent);
    return ProfileExperienceComponent;
}());



/***/ }),

/***/ "./src/app/profile-portfolio/profile-portfolio.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile-portfolio/profile-portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-white\">\n\t<div class=\"panel-heading\">\n\t\t<h6 class=\"panel-title\">My Portfolio</h6>\n\t\t<div class=\"heading-elements\">\n\t\t\t&nbsp;&nbsp; <button type=\"button\" data-toggle=\"modal\" data-target=\"#modal_theme_add_experience\" data-popup=\"tooltip\"\n\t\t\t title=\"Upload Photo\" class=\"btn border-teal text-teal btn-rounded btn-icon btn-xs\"><i class=\"icon-image2\"></i></button>\n\t\t\t&nbsp;&nbsp;\n\t\t\t<button type=\"button\" data-toggle=\"modal\" data-target=\"#modal_theme_add_experience\" data-popup=\"tooltip\" title=\"Upload video\"\n\t\t\t class=\"btn border-teal text-teal btn-rounded btn-icon btn-xs\"><i class=\"icon-video-camera2\"></i></button>\n\t\t\t&nbsp;&nbsp;\n\t\t\t<button type=\"button\" data-toggle=\"modal\" data-target=\"#modal_theme_add_experience\" data-popup=\"tooltip\" title=\"Upload PDF\"\n\t\t\t class=\"btn border-teal text-teal btn-rounded btn-icon btn-xs\"><i class=\"icon-file-text3\"></i></button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"panel-body\">\n\t\t<div class=\"caption text-center\" style=\"min-height:350px; padding-top:50px\">\n\t\t\t<img src=\"assets/images/flat-icons/businessmen-having-a-meeting.png\" style=\"width:130px\" alt=\"\">\n\t\t\t<h1 class=\"text-thin no-margin\">Your is currently empty</h1>\n\t\t\t<p class=\"text-muted mb-15 mt-5\">Show your profile visitors what you can do. Add video, photos and file of your past\n\t\t\t\tprojects</p>\n\n\t\t\t<a href=\"#\" class=\"btn bg-teal\"><i class=\"icon-paperplane position-left\"></i> Send invitation</a>\n\t\t</div>\n\t</div>\n\n\n</div>\n\n\n<!-- add experience modal -->\n<div id=\"modal_theme_add_experience\" class=\"modal fade\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header bg-info\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<h6 class=\"modal-title\">Add Experience</h6>\n\t\t\t</div>\n\n\t\t\t<div class=\"modal-body\">\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Job title</label>\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Eg: Software Engineer\" class=\"form-control\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">Employment Type</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>Founder</option>\n\t\t\t\t\t\t\t\t\t<option>Co-Founder</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">Full-time</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">Part-time</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">Intern</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">Freelancer</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Company name</label>\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Ring street 12\" class=\"form-control\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">Industry</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>Founder</option>\n\t\t\t\t\t\t\t\t\t<option>Co-Founder</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">Full-time</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">Part-time</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">Intern</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">Freelancer</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Location</label>\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Lagos , Nigeria\" class=\"form-control\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">From</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>January</option>\n\t\t\t\t\t\t\t\t\t<option>February</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">March</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">April</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">May</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">June</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">July</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">August</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">September</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">October</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">November</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">December</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>&nbsp;&nbsp;</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>1980</option>\n\t\t\t\t\t\t\t\t\t<option>1981</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">1982</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">1983</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">1984</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">1985</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">To</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>January</option>\n\t\t\t\t\t\t\t\t\t<option>February</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">March</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">April</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">May</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">June</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">July</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">August</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">September</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">October</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">November</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">December</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">&nbsp;&nbsp;</label>\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\n\t\t\t\t\t\t\t\t\t<option>1980</option>\n\t\t\t\t\t\t\t\t\t<option>1981</option>\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">1982</option>\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">1983</option>\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">1984</option>\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">1985</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">Present</label>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" required ngModel name=\"isAgree\" /> &nbsp;&nbsp;\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Description</label>\n\t\t\t\t\t\t\t<textarea name=\"description\" class=\"form-control mb-15\" rows=\"3\" placeholder=\"Type your job descripto here\"></textarea>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"checkbox\" required ngModel name=\"isAgree\" /> &nbsp;&nbsp; Make this just my headline\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-info\">Save changes</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- /add experience modal -->"

/***/ }),

/***/ "./src/app/profile-portfolio/profile-portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfilePortfolioComponent = /** @class */ (function () {
    function ProfilePortfolioComponent() {
    }
    ProfilePortfolioComponent.prototype.ngOnInit = function () {
    };
    ProfilePortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-portfolio',
            template: __webpack_require__("./src/app/profile-portfolio/profile-portfolio.component.html"),
            styles: [__webpack_require__("./src/app/profile-portfolio/profile-portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfilePortfolioComponent);
    return ProfilePortfolioComponent;
}());



/***/ }),

/***/ "./src/app/profile-project/profile-project.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile-project/profile-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-white\">\n  <div class=\"panel-heading\">\n    <h6 class=\"panel-title\">My Projects</h6>\n    <div class=\"heading-elements\">\n      <ul class=\"icons-list\">\n        <li><a data-action=\"collapse\"></a></li>\n        <li><a data-action=\"reload\"></a></li>\n        <li><a data-action=\"close\"></a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"panel-body\">\n    <div class=\"chart-container\">\n      <div class=\"chart has-fixed-height\" id=\"plans\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile-project/profile-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileProjectComponent = /** @class */ (function () {
    function ProfileProjectComponent() {
    }
    ProfileProjectComponent.prototype.ngOnInit = function () {
    };
    ProfileProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-project',
            template: __webpack_require__("./src/app/profile-project/profile-project.component.html"),
            styles: [__webpack_require__("./src/app/profile-project/profile-project.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileProjectComponent);
    return ProfileProjectComponent;
}());



/***/ }),

/***/ "./src/app/profile-publication/profile-publication.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile-publication/profile-publication.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-white\">\n  <div class=\"panel-heading\">\n    <h6 class=\"panel-title\">My Publication</h6>\n    <div class=\"heading-elements\">\n      <ul class=\"icons-list\">\n        <li><a data-action=\"collapse\"></a></li>\n        <li><a data-action=\"reload\"></a></li>\n        <li><a data-action=\"close\"></a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"panel-body\">\n    <div class=\"chart-container\">\n      <div class=\"chart has-fixed-height\" id=\"plans\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile-publication/profile-publication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePublicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfilePublicationComponent = /** @class */ (function () {
    function ProfilePublicationComponent() {
    }
    ProfilePublicationComponent.prototype.ngOnInit = function () {
    };
    ProfilePublicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-publication',
            template: __webpack_require__("./src/app/profile-publication/profile-publication.component.html"),
            styles: [__webpack_require__("./src/app/profile-publication/profile-publication.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfilePublicationComponent);
    return ProfilePublicationComponent;
}());



/***/ }),

/***/ "./src/app/profile-skill/profile-skill.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile-skill/profile-skill.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Available hours -->\n<div class=\"panel panel-white\">\n  <div class=\"panel-heading\">\n    <h6 class=\"panel-title\">My Skills</h6>\n    <div class=\"heading-elements\">\n      <ul class=\"icons-list\">\n        <li><a data-action=\"collapse\"></a></li>\n        <li><a data-action=\"reload\"></a></li>\n        <li><a data-action=\"close\"></a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"panel-body\">\n    <div class=\"chart-container\">\n      <div class=\"chart has-fixed-height\" id=\"plans\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile-skill/profile-skill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileSkillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileSkillComponent = /** @class */ (function () {
    function ProfileSkillComponent() {
    }
    ProfileSkillComponent.prototype.ngOnInit = function () {
    };
    ProfileSkillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-skill',
            template: __webpack_require__("./src/app/profile-skill/profile-skill.component.html"),
            styles: [__webpack_require__("./src/app/profile-skill/profile-skill.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileSkillComponent);
    return ProfileSkillComponent;
}());



/***/ }),

/***/ "./src/app/profile-web-language/profile-web-language.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile-web-language/profile-web-language.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-white\">\n  <div class=\"panel-heading\">\n    <h6 class=\"panel-title\">Language</h6>\n    <div class=\"heading-elements\">\n      <ul class=\"icons-list\">\n        <li><a data-action=\"collapse\"></a></li>\n        <li><a data-action=\"reload\"></a></li>\n        <li><a data-action=\"close\"></a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"panel-body\">\n    <div class=\"chart-container\">\n      <div class=\"chart has-fixed-height\" id=\"plans\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile-web-language/profile-web-language.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileWebLanguageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileWebLanguageComponent = /** @class */ (function () {
    function ProfileWebLanguageComponent() {
    }
    ProfileWebLanguageComponent.prototype.ngOnInit = function () {
    };
    ProfileWebLanguageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-web-language',
            template: __webpack_require__("./src/app/profile-web-language/profile-web-language.component.html"),
            styles: [__webpack_require__("./src/app/profile-web-language/profile-web-language.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileWebLanguageComponent);
    return ProfileWebLanguageComponent;
}());



/***/ }),

/***/ "./src/app/profile-web-profile/profile-web-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile-web-profile/profile-web-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-white\">\n    <div class=\"panel-heading\">\n        <h6 class=\"panel-title\">My other web profiles</h6>\n        <div class=\"heading-elements\">\n            <ul class=\"icons-list\">\n                <li><a data-action=\"collapse\"></a></li>\n                <li><a data-action=\"reload\"></a></li>\n                <li><a data-action=\"close\"></a></li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"panel-body\">\n        <div class=\"chart-container\">\n            <div class=\"chart has-fixed-height\" id=\"plans\"></div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/profile-web-profile/profile-web-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileWebProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileWebProfileComponent = /** @class */ (function () {
    function ProfileWebProfileComponent() {
    }
    ProfileWebProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileWebProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-web-profile',
            template: __webpack_require__("./src/app/profile-web-profile/profile-web-profile.component.html"),
            styles: [__webpack_require__("./src/app/profile-web-profile/profile-web-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileWebProfileComponent);
    return ProfileWebProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "/* .image-body {\r\n    margin-bottom: 30px;\r\n} */\r\n\r\n.image-body img {\r\n    width: 80%;\r\n    margin-left: 10%;\r\n    max-width: 100%;\r\n}\r\n\r\n.image-body canvas {\r\n    width: 100% !important;\r\n}\r\n\r\n.page-content {\r\n    position: relative;\r\n}\r\n\r\n.cropper-container {\r\n    width: 100% !important;\r\n}\r\n\r\n.zoom-range {\r\n    background-size: 100%, 300% 100%, 200%;\r\n    background-position: left top, 0px -100%, calc(100% - -10px) center;\r\n}\r\n\r\n/* #modal_theme_edit_profile_image {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    display: none;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n} */\r\n\r\n/* #modal_theme_edit_profile_image .edit-modal-body {\r\n    width: 600px;\r\n    height: 450px;\r\n    margin-top: auto;\r\n    margin: auto;\r\n    background-color: black;\r\n} */\r\n\r\n.filter-body {\r\n    width: 100%;\r\n    height: 380px;\r\n    margin: auto;\r\n    background-color: black;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.filter-main-image {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.filter-main-image img {\r\n    width: 120px;\r\n    height: 120px;\r\n    margin: auto;\r\n    border-radius: 50%;\r\n}\r\n\r\n.back-filter {\r\n    width: 120px;\r\n    height: 120px;\r\n    margin: auto;\r\n    border-radius: 50%;\r\n}\r\n\r\n.filter-images {\r\n    width: 100%;\r\n    height: 380px;\r\n    position: absolute;\r\n    top: 0\r\n}\r\n\r\n.middle-filter {\r\n    margin-left: 180px;\r\n}\r\n\r\n.middle-padding-top {\r\n    padding-top: 20px;\r\n}\r\n\r\n.middle-padding-bottom {\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.filter-images span {\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 95px;\r\n    overflow-x: auto;\r\n}\r\n\r\n.filter-images img {\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: auto 10px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.each-filter-image div {\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.selected-filter {\r\n    border: 2px solid white;\r\n    color: white;\r\n}\r\n\r\n.unselect-filter {\r\n    border: none;\r\n    color: #333333;\r\n}\r\n\r\n.selected-font {\r\n    color: white;\r\n}\r\n\r\n.unselect-font {\r\n    color: #333333;\r\n}\r\n\r\n.zoom-slider {\r\n    height: 80px;\r\n    padding-top: 4px;\r\n    margin-bottom: 5px;\r\n    background-color: black;\r\n}\r\n\r\n.zoom-slider .row {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.zoom-slider .col-sm-9 {\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.zoom-slider .col-sm-3 {\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.zoom-slider ng5-slider {\r\n    margin: auto;\r\n}\r\n\r\n.slider-title-row .slider-title {\r\n    color: white;\r\n    text-align: left;\r\n}\r\n\r\n.slider-title-row .slider-value {\r\n    color: white;\r\n    text-align: right;\r\n    float: right;\r\n}\r\n\r\n.crop-setting {\r\n    height: 20px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.crop-setting button {\r\n    height: 20px;\r\n    padding-top: 0px;\r\n    padding-right: 10px;\r\n    padding-bottom: 3px;\r\n    padding-left: 10px;\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n}\r\n\r\n.crop-span-button {\r\n    height: 20px;\r\n    margin: auto;\r\n}\r\n\r\n#profile_background {\r\n    height: 250px;\r\n}\r\n\r\n#back_image_open {\r\n    display: none;\r\n}\r\n\r\n#profile_image_open {\r\n    display: none;\r\n}\r\n\r\n.custom-slider {\r\n    margin-top: 10px;\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    height: 4px;\r\n    z-index: 1;\r\n    background: #d8e0f3;\r\n    border-radius: 2px;\r\n    -webkit-transition: .2s;\r\n    -webkit-transition: opacity .2s;\r\n    transition: opacity .2s;\r\n}\r\n\r\n.custom-slider:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.custom-slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #0db9f0;\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n}\r\n\r\n.custom-slider::-moz-range-thumb {\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #0db9f0;\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n}\r\n\r\n.custom-slider::-ms-track {\r\n    margin-top: 10px;\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    height: 4px;\r\n    z-index: 1;\r\n    background: #d8e0f3;\r\n    border-radius: 2px;\r\n    -webkit-transition: .2s;\r\n    -webkit-transition: opacity .2s;\r\n    transition: opacity .2s;\r\n}\r\n\r\n.custom-slider::-ms-thumb {\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #0db9f0;\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n    z-index: 100;\r\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page container -->\r\n<div class=\"page-container\" @page @imganimate>\r\n\r\n\t<!-- Page content -->\r\n\t<div class=\"page-content\">\r\n\r\n\t\t<!-- Main content -->\r\n\t\t<div class=\"content-wrapper\">\r\n\r\n\r\n\t\t\t<!-- User profile -->\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-9\">\r\n                  <div>\r\n\t\t\t\t\tnpm install angular-cropperjs@0.1.5\r\n\t\t\t\t\t\tno need npm cli for filter.\r\n\t\t\t\t\t\tBut you need to install this\r\n\t\t\t\t\t\tUser Avatar\r\n\t\t\t\t\t\tnpm install ng5-slider\r\n\t\t\t\t  </div>\r\n\r\n\t\t\t\t\t<!-- Cover area -->\r\n\t\t\t\t\t<div class=\"profile-cover\">\r\n\t\t\t\t\t\t<div class=\"profile-cover-img\" id=\"profile_background\" [ngStyle]=\"{'background-image':backCroppedImage}\"></div>\r\n\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t\t<a class=\"profile-thumb\" data-toggle=\"modal\" data-target=\"#modal_theme_edit_profile_image\">\r\n\t\t\t\t\t\t\t\t\t<!-- <a class=\"profile-thumb\"> -->\r\n\t\t\t\t\t\t\t\t\t<img src=\"{{croppedImage}}\" class=\"img-circle {{mainFilter}}\" style=\"width: 120px; height: 120px\" alt=\"\"\r\n\t\t\t\t\t\t\t\t\t (click)=\"cropImage()\">\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<h1>Hanna Dorman <small class=\"display-block\">UX/UI designer</small></h1>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"media-right media-middle\">\r\n\t\t\t\t\t\t\t\t<ul class=\"list-inline list-inline-condensed no-margin-bottom text-nowrap\">\r\n\t\t\t\t\t\t\t\t\t<li><a data-toggle=\"modal\" data-target=\"#modal_theme_edit_background_image\" class=\"btn btn-default\" (click)=\"openProfileBackground()\"><i\r\n\t\t\t\t\t\t\t\t\t\t\t class=\"icon-file-picture position-left\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\tCover image</a></li>\r\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"btn btn-default\"><i class=\"icon-file-stats position-left\"></i> Statistics</a></li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /cover area -->\r\n\r\n\r\n\t\t\t\t\t<!-- Toolbar -->\r\n\t\t\t\t\t<div class=\"navbar navbar-default navbar-xs navbar-component no-border-radius-top mb-20\">\r\n\t\t\t\t\t\t<ul class=\"nav navbar-nav visible-xs-block\">\r\n\t\t\t\t\t\t\t<li class=\"full-width text-center\"><a data-toggle=\"collapse\" data-target=\"#navbar-filter\"><i class=\"icon-menu7\"></i></a></li>\r\n\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t<div class=\"navbar-collapse collapse\" id=\"navbar-filter\">\r\n\t\t\t\t\t\t\t<ul class=\"nav navbar-nav\">\r\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active current\"><a [routerLink]=\"['/profile/experience']\"><i class=\"icon-portfolio position-left\"></i>\r\n\t\t\t\t\t\t\t\t\t\tExperience <span class=\"badge badge-success badge-inline position-right\">3</span></a></li>\r\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active current\"><a [routerLink]=\"['/profile/education']\"><i class=\"icon-graduation2 position-left\"></i>\r\n\t\t\t\t\t\t\t\t\t\tEducation </a></li>\r\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active current\"><a [routerLink]=\"['/profile/skills']\"><i class=\"icon-scissors position-left\"></i>\r\n\t\t\t\t\t\t\t\t\t\tSkills <span class=\"badge badge-info badge-inline position-right\">0</span> </a> </li>\r\n\t\t\t\t\t\t\t\t<li routerLinkActive=\"active current\"><a [routerLink]=\"['/profile/portfolio']\"><i class=\"icon-folder position-left\"></i>\r\n\t\t\t\t\t\t\t\t\t\tPortfolio</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t<div class=\"navbar-right navbar-collapse collapse\" id=\"navbar-filter\">\r\n\t\t\t\t\t\t\t\t<ul class=\"nav navbar-nav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon-plus2 position-left\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\tArchievements<span class=\"visible-xs-inline-block position-right\"> Options</span> <span class=\"caret\"></span></a>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<li routerLinkActive=\"active current\"><a [routerLink]=\"['/profile/certification']\"><i class=\"icon-certificate\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tCertifications</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li routerLinkActive=\"active current\"><a [routerLink]=\"['/profile/project']\"><i class=\"icon-presentation\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tProjects</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li routerLinkActive=\"active current\"><a [routerLink]=\"['/profile/award']\"><i class=\"icon-trophy2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tAward & Honor</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li routerLinkActive=\"active current\"><a [routerLink]=\"['/profile/publication']\"><i class=\"icon-clippy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tPublications</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<li routerLinkActive=\"active current\"><a [routerLink]=\"['/profile/web-profile']\"><i class=\"icon-file-media\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tWeb Profiles</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li routerLinkActive=\"active current\"><a [routerLink]=\"['/profile/language']\"><i class=\"icon-cube\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tLanguage</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /toolbar -->\r\n\r\n\r\n\t\t\t\t\t<div class=\"tabbable\">\r\n\r\n\t\t\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t<div class=\"col-lg-3\">\r\n\r\n\t\t\t\t\t<!-- Invitation stats white -->\r\n\t\t\t\t\t<div class=\"panel text-center bg-grey-400 has-bg-image\">\r\n\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t<h6 class=\"text-semibold no-margin-bottom mt-5\">Profile Strength</h6>\r\n\t\t\t\t\t\t\t<div class=\"opacity-75 content-group\">Intermediate</div>\r\n\t\t\t\t\t\t\t<div class=\"svg-center position-relative mb-5\" id=\"progress_percentage_three\"></div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"panel-body panel-body-accent pb-15\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-uppercase text-size-mini opacity-75\">Followers</div>\r\n\t\t\t\t\t\t\t\t\t<h5 class=\"text-semibold no-margin\">2,483</h5>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-uppercase text-size-mini opacity-75\">Following</div>\r\n\t\t\t\t\t\t\t\t\t<h5 class=\"text-semibold no-margin\">1,257</h5>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-5\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-uppercase text-size-mini opacity-75\">&nbsp;&nbsp;Profile Views</div>\r\n\t\t\t\t\t\t\t\t\t<h5 class=\"text-semibold no-margin\">8,472</h5>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /invitation stats white -->\r\n\r\n\r\n\r\n\t\t\t\t\t<!-- Simple info widget with icon -->\r\n\t\t\t\t\t<div class=\"panel panel-body\">\r\n\t\t\t\t\t\t<div class=\"media no-margin\">\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"media-heading text-semibold\">Contact Info &nbsp;&nbsp; <i data-toggle=\"modal\" data-target=\"#modal_theme_update_contact\"\r\n\t\t\t\t\t\t\t\t\t class=\"icon-pencil icon-1x text-teal-300 position-left\" style=\"cursor: pointer; size:50px\"></i></h5>\r\n\t\t\t\t\t\t\t\t<span class=\"text-muted\"><a href=\"#\">careercolony.com/nkechi</a></span>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"caption mb-15\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"no-margin-bottom text-teal text-semibold\">\r\n\t\t\t\t\t\t\t\t\t\tAddress\r\n\t\t\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t\t\t\t7 Folawewo street off Allen Avenue Ikeja Lagos\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"caption mb-15\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"no-margin-bottom text-teal text-semibold\">\r\n\t\t\t\t\t\t\t\t\t\tEmail\r\n\t\t\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t\t\t\tflavoursoft@yahoo.com\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"media-right media-middle\">\r\n\t\t\t\t\t\t\t\t<i class=\"icon-vcard icon-2x text-grey-300\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /simplw info widget with icon -->\r\n\r\n\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t\t<!-- /user profile -->\r\n\r\n\t\t</div>\r\n\t\t<!-- /main content -->\r\n\r\n\t</div>\r\n\t<!-- /page content -->\r\n\r\n</div>\r\n<!-- /page container -->\r\n\r\n\r\n\r\n\r\n\r\n<!-- add experience modal -->\r\n<div id=\"modal_theme_update_contact\" class=\"modal fade\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header bg-info\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\t\t\t\t<h6 class=\"modal-title\">Update contact info</h6>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"modal-body\">\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Address</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"form-control\">\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t<label class=\"text-semibold\">City</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"form-control\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t<label class=\"text-semibold\">State</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"form-control\">\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">Country</label>\r\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\r\n\t\t\t\t\t\t\t\t\t<option>Nigeria</option>\r\n\t\t\t\t\t\t\t\t\t<option>USA</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">United Kingdom</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">India</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">China</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">Japan</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Email</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"form-control\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Mobile phone</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"form-control\">\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label class=\"text-semibold\">Birthday</label>\r\n\t\t\t\t\t\t\t\t<select data-placeholder=\"Select type...\" class=\"select\">\r\n\t\t\t\t\t\t\t\t\t<option>January</option>\r\n\t\t\t\t\t\t\t\t\t<option>February</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">March</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">April</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">May</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">June</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">July</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">August</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">September</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">October</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">November</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">December</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t<label class=\"text-semibold\">&nbsp;&nbsp;</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"form-control\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Twitter Profile</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"form-control\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<label class=\"text-semibold\">Facebook Profile</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"form-control\">\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\">Save changes</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- /add experience modal -->\r\n\r\n\r\n<div id=\"modal_theme_edit_profile_image\" class=\"modal fade\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header bg-info\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"reset()\">&times;</button>\r\n\t\t\t\t<h6 class=\"modal-title\">Edit Photo</h6>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"modal-body\">\r\n\r\n\t\t\t\t<div class=\"tabbable\" style=\"position:relative; top:-20px\">\r\n\r\n\t\t\t\t\t<div class=\"tab-content\">\r\n\r\n\t\t\t\t\t\t<div class=\"tab-pane active image-body\" id=\"top-tab1\">\r\n\t\t\t\t\t\t\t<angular-cropper #angularCropper [cropperOptions]=\"cropperOptions\" [imageUrl]=\"myImage\" *ngIf=\"myImage\"></angular-cropper>\r\n\t\t\t\t\t\t\t<div class=\"zoom-slider\">\r\n\t\t\t\t\t\t\t\t<div class=\"row slider-row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"slider-title-row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tZoom\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <ng5-slider [(value)]=\"value\" [options]=\"options\" (userChangeEnd)=\"setZoomImage(value)\" (userChange)=\"setZoomImage(value)\"></ng5-slider> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"custom-slider\" type=\"range\" min=\"0\" max=\"10\" step=\"0.1\" [(ngModel)]=\"value\" (mousedown)=\"strightenMouseDown()\"\r\n\t\t\t\t\t\t\t\t\t\t\t (mouseup)=\"setZoomImage(value)\" (mousemove)=\"setZoomImage(value)\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"slider-title-row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tStraighten\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider-value\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{strValue}}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <ng5-slider id=\"pro_str_value\" [(value)]=\"strValue\" [(highValue)]=\"strMaxValue\" [options]=\"strOptions\"\r\n\t\t\t\t\t\t\t\t\t\t\t (userChangeStart)=\"strightenMouseDown()\" (userChangeEnd)=\"strightenMouseUp(strValue)\" (userChange)=\"strightenMouseUp(strValue)\"></ng5-slider> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"custom-slider\" type=\"range\" min=\"-180\" max=\"180\" [(ngModel)]=\"strValue\" (mousedown)=\"strightenMouseDown()\"\r\n\t\t\t\t\t\t\t\t\t\t\t (mouseup)=\"strightenMouseUp(strValue)\" (mousemove)=\"strightenMouseUp(strValue)\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"crop-setting\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"crop-span-button\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"flipX()\">FlipX</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"flipY()\">FlipY</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"reset()\">Reset</button>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"tab-pane filter-body\" id=\"top-tab2\">\r\n\t\t\t\t\t\t\t<div class=\"filter-main-image\">\r\n\t\t\t\t\t\t\t\t<img src=\"{{preCropImage}}\" class=\"{{selFilter}}\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"filter-images\">\r\n\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"each-filter-image\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{preCropImage}}\" class=\"Original\" [ngClass]=\"{'selected-filter':selFilter == 'Original', 'unselect-filter':selFilter != 'Original'}\"\r\n\t\t\t\t\t\t\t\t\t\t (click)=\"selectImage('Original')\">\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t<div [ngClass]=\"{'selected-font':selFilter == 'Original', 'unselect-font':selFilter != 'Original'}\">\r\n\t\t\t\t\t\t\t\t\t\t\tOriginal\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"middle-padding-bottom\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"each-filter-image\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{preCropImage}}\" class=\"Brightness\" [ngClass]=\"{'selected-filter':selFilter == 'Brightness', 'unselect-filter':selFilter != 'Brightness'}\"\r\n\t\t\t\t\t\t\t\t\t\t (click)=\"selectImage('Brightness')\">\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t<div [ngClass]=\"{'selected-font':selFilter == 'Brightness', 'unselect-font':selFilter != 'Brightness'}\">\r\n\t\t\t\t\t\t\t\t\t\t\tBrightness\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"each-filter-image middle-filter\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{preCropImage}}\" class=\"Contrast\" [ngClass]=\"{'selected-filter':selFilter == 'Contrast', 'unselect-filter':selFilter != 'Contrast'}\"\r\n\t\t\t\t\t\t\t\t\t\t (click)=\"selectImage('Contrast')\">\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t<div [ngClass]=\"{'selected-font':selFilter == 'Contrast', 'unselect-font':selFilter != 'Contrast'}\">\r\n\t\t\t\t\t\t\t\t\t\t\tContrast\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"middle-padding-top\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"each-filter-image\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{preCropImage}}\" class=\"Grayscale\" [ngClass]=\"{'selected-filter':selFilter == 'Grayscale', 'unselect-filter':selFilter != 'Grayscale'}\"\r\n\t\t\t\t\t\t\t\t\t\t (click)=\"selectImage('Grayscale')\">\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t<div [ngClass]=\"{'selected-font':selFilter == 'Grayscale', 'unselect-font':selFilter != 'Grayscale'}\">\r\n\t\t\t\t\t\t\t\t\t\t\tGrayscale\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"each-filter-image middle-filter\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{preCropImage}}\" class=\"Saturate\" [ngClass]=\"{'selected-filter':selFilter == 'Saturate', 'unselect-filter':selFilter != 'Saturate'}\"\r\n\t\t\t\t\t\t\t\t\t\t (click)=\"selectImage('Saturate')\">\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t<div [ngClass]=\"{'selected-font':selFilter == 'Saturate', 'unselect-font':selFilter != 'Saturate'}\">\r\n\t\t\t\t\t\t\t\t\t\t\tSaturate\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"each-filter-image\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{preCropImage}}\" class=\"Sepia\" [ngClass]=\"{'selected-filter':selFilter == 'Sepia', 'unselect-filter':selFilter != 'Sepia'}\"\r\n\t\t\t\t\t\t\t\t\t\t (click)=\"selectImage('Sepia')\">\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t<div [ngClass]=\"{'selected-font':selFilter == 'Sepia', 'unselect-font':selFilter != 'Sepia'}\">\r\n\t\t\t\t\t\t\t\t\t\t\tSepia\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<ul class=\"nav nav-tabs nav-tabs-top\">\r\n\t\t\t\t\t\t<li class=\"active\" id=\"top-tab-link1\"><a href=\"#top-tab1\" data-toggle=\"tab\" (click)=\"clickCrop()\">Crop</a></li>\r\n\t\t\t\t\t\t<li id=\"top-tab-link2\"><a href=\"#top-tab2\" data-toggle=\"tab\" (click)=\"getPrePhoto()\">Filter</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"openNewProfilePhoto()\">Change photo</button>\r\n\t\t\t\t\t<input type=\"file\" id=\"profile_image_open\" accept=\"image/x-png, image/jpeg\" (change)=\"getProfilePhoto($event)\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"savePhoto()\">Save photo</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div id=\"modal_theme_edit_background_image\" class=\"modal fade\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header bg-info\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"reset()\">&times;</button>\r\n\t\t\t\t<h6 class=\"modal-title\">Edit Photo</h6>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"modal-body\">\r\n\r\n\t\t\t\t<div class=\"tabbable\" style=\"position:relative; top:-20px\">\r\n\r\n\t\t\t\t\t<div class=\"tab-content\">\r\n\r\n\t\t\t\t\t\t<div class=\"tab-pane active image-body\" id=\"top-back-tab1\">\r\n\t\t\t\t\t\t\t<angular-cropper #backCropper [cropperOptions]=\"backCropperOptions\" [imageUrl]=\"backImage\" *ngIf=\"backImage\"></angular-cropper>\r\n\t\t\t\t\t\t\t<div class=\"zoom-slider\">\r\n\t\t\t\t\t\t\t\t<div class=\"row slider-row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"slider-title-row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tZoom\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <span class=\"slider-value\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{value}}\r\n\t\t\t\t\t\t\t\t\t\t\t</span> -->\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <ng5-slider [(value)]=\"backValue\" [options]=\"backOptions\" (userChangeEnd)=\"setBackZoomImage(backValue)\"\r\n\t\t\t\t\t\t\t\t\t\t\t (userChange)=\"setBackZoomImage(backValue)\"></ng5-slider> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"custom-slider\" type=\"range\" min=\"0\" max=\"10\" step=\"0.1\" [(ngModel)]=\"backValue\" (mousedown)=\"strightenMouseDown()\"\r\n\t\t\t\t\t\t\t\t\t\t\t (mouseup)=\"setBackZoomImage(backValue)\" (mousemove)=\"setBackZoomImage(backValue)\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"slider-title-row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tStraighten\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider-value\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{backStrValue}}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <ng5-slider [(value)]=\"backStrValue\" [options]=\"backStrOptions\" (userChangeStart)=\"strightenBackMouseDown()\"\r\n\t\t\t\t\t\t\t\t\t\t\t (userChangeEnd)=\"strightenBackMouseUp(backStrValue)\" (userChange)=\"strightenBackMouseUp(backStrValue)\"></ng5-slider> -->\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"custom-slider\" type=\"range\" min=\"-180\" max=\"180\" [(ngModel)]=\"backStrValue\" (mousedown)=\"strightenMouseDown()\"\r\n\t\t\t\t\t\t\t\t\t\t\t (mouseup)=\"strightenBackMouseUp(backStrValue)\" (mousemove)=\"strightenBackMouseUp(backStrValue)\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"crop-setting\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"crop-span-button\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"backFlipX()\">FlipX</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"backFlipY()\">FlipY</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"backReset()\">Reset</button>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"tab-pane filter-body\" id=\"top-back-tab2\">\r\n\t\t\t\t\t\t\t<div class=\"filter-main-image\">\r\n\t\t\t\t\t\t\t\t<img src=\"{{preBcakImage}}\" class=\"{{selBackFilter}}\">\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"back-filter {{selBackFilter}}\" [ngStyle]=\"{'background-image':mainBcakImage}\"></div> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"filter-images\">\r\n\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"each-filter-image\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{preBcakImage}}\" class=\"Original\" [ngClass]=\"{'selected-filter':selBackFilter == 'Original', 'unselect-filter':selBackFilter != 'Original'}\"\r\n\t\t\t\t\t\t\t\t\t\t (click)=\"selectBackImage('Original')\">\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t<div [ngClass]=\"{'selected-font':selBackFilter == 'Original', 'unselect-font':selBackFilter != 'Original'}\">\r\n\t\t\t\t\t\t\t\t\t\t\tOriginal\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"middle-padding-bottom\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"each-filter-image\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{preBcakImage}}\" class=\"Brightness\" [ngClass]=\"{'selected-filter':selBackFilter == 'Brightness', 'unselect-filter':selBackFilter != 'Brightness'}\"\r\n\t\t\t\t\t\t\t\t\t\t (click)=\"selectBackImage('Brightness')\">\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t<div [ngClass]=\"{'selected-font':selBackFilter == 'Brightness', 'unselect-font':selBackFilter != 'Brightness'}\">\r\n\t\t\t\t\t\t\t\t\t\t\tBrightness\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"each-filter-image middle-filter\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{preBcakImage}}\" class=\"Contrast\" [ngClass]=\"{'selected-filter':selBackFilter == 'Contrast', 'unselect-filter':selBackFilter != 'Contrast'}\"\r\n\t\t\t\t\t\t\t\t\t\t (click)=\"selectBackImage('Contrast')\">\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t<div [ngClass]=\"{'selected-font':selBackFilter == 'Contrast', 'unselect-font':selBackFilter != 'Contrast'}\">\r\n\t\t\t\t\t\t\t\t\t\t\tContrast\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span class=\"middle-padding-top\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"each-filter-image\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{preBcakImage}}\" class=\"Grayscale\" [ngClass]=\"{'selected-filter':selBackFilter == 'Grayscale', 'unselect-filter':selBackFilter != 'Grayscale'}\"\r\n\t\t\t\t\t\t\t\t\t\t (click)=\"selectBackImage('Grayscale')\">\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t<div [ngClass]=\"{'selected-font':selBackFilter == 'Grayscale', 'unselect-font':selBackFilter != 'Grayscale'}\">\r\n\t\t\t\t\t\t\t\t\t\t\tGrayscale\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"each-filter-image middle-filter\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{preBcakImage}}\" class=\"Saturate\" [ngClass]=\"{'selected-filter':selBackFilter == 'Saturate', 'unselect-filter':selBackFilter != 'Saturate'}\"\r\n\t\t\t\t\t\t\t\t\t\t (click)=\"selectBackImage('Saturate')\">\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t<div [ngClass]=\"{'selected-font':selBackFilter == 'Saturate', 'unselect-font':selBackFilter != 'Saturate'}\">\r\n\t\t\t\t\t\t\t\t\t\t\tSaturate\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"each-filter-image\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{preBcakImage}}\" class=\"Sepia\" [ngClass]=\"{'selected-filter':selBackFilter == 'Sepia', 'unselect-filter':selBackFilter != 'Sepia'}\"\r\n\t\t\t\t\t\t\t\t\t\t (click)=\"selectBackImage('Sepia')\">\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t<div [ngClass]=\"{'selected-font':selBackFilter == 'Sepia', 'unselect-font':selBackFilter != 'Sepia'}\">\r\n\t\t\t\t\t\t\t\t\t\t\tSepia\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<ul class=\"nav nav-tabs nav-tabs-top\">\r\n\t\t\t\t\t\t<li class=\"active\" id=\"top-back-tab-link1\"><a href=\"#top-back-tab1\" data-toggle=\"tab\" (click)=\"clickBackCrop()\">Crop</a></li>\r\n\t\t\t\t\t\t<li id=\"top-back-tab-link2\"><a href=\"#top-back-tab2\" data-toggle=\"tab\" (click)=\"getPreBackPhoto()\">Filter</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"openNewBackImage()\">Change photo</button>\r\n\t\t\t\t\t<input type=\"file\" id=\"back_image_open\" accept=\"image/x-png, image/jpeg\" (change)=\"getBackImage($event)\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"saveBackImage()\">Save photo</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_cropperjs__ = __webpack_require__("./node_modules/angular-cropperjs/angular-cropperjs.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_cropperjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(detRef) {
        this.detRef = detRef;
        this.isLoggedin = false;
        this.filterList = ['Original', 'Brightness', 'Contrast', 'Grayscale', 'Saturate', 'Sepia'];
        this.enableSlide = false;
        this.filterState = false;
        this.value = 0;
        this.options = {
            floor: 0,
            ceil: 10,
            step: 0.1,
            hidePointerLabels: true,
            autoHideLimitLabels: true,
            hideLimitLabels: true
        };
        this.strValue = 0;
        this.strOptions = {
            floor: -180,
            ceil: 180,
            step: 1,
            hidePointerLabels: true,
            autoHideLimitLabels: true,
            hideLimitLabels: true
        };
        this.myImage = null;
        this.scaleValX = 1;
        this.scaleValY = 1;
        this.backFilterState = false;
        this.backValue = 0;
        this.backOptions = {
            floor: 0,
            ceil: 10,
            step: 0.1,
            hidePointerLabels: true,
            autoHideLimitLabels: true,
            hideLimitLabels: true
        };
        this.backStrValue = 0;
        this.backStrOptions = {
            floor: -180,
            ceil: 180,
            step: 1,
            hidePointerLabels: true,
            autoHideLimitLabels: true,
            hideLimitLabels: true
        };
        this.backImage = null;
        this.backScaleValX = 1;
        this.backScaleValY = 1;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.selectImage('Original');
        this.selectBackImage('Original');
        this.myImage = 'assets/images/alderman.jpg';
        this.backImage = 'assets/images/sample-logos/bg3.jpg';
        this.croppedImage = 'assets/images/5863c7afb5bcb_black-woman-thinking.-pf.jpg';
        this.cropperOptions = {
            dragMode: 'move',
            aspectRatio: 1,
            autoCrop: true,
            movable: true,
            zoomable: true,
            scalable: true,
            autoCropArea: 1,
            minContainerWidth: 558,
            minContainerHeight: 300,
            zoomOnWheel: false,
            rounded: true,
            cropBoxMovable: false,
            cropBoxResizable: false,
        };
        this.backCroppedImage = 'url(assets/images/sample-logos/bg3.jpg)';
        var backImageData = document.getElementById('profile_background');
        // or however you get a handle to the IMG
        this.backCropperOptions = {
            dragMode: 'move',
            aspectRatio: backImageData.clientWidth / backImageData.clientHeight,
            autoCrop: true,
            movable: true,
            zoomable: true,
            scalable: true,
            autoCropArea: 1,
            minContainerWidth: 558,
            minContainerHeight: 300,
            zoomOnWheel: false,
            rounded: true,
            cropBoxMovable: false,
            cropBoxResizable: false,
        };
    };
    ProfileComponent.prototype.savePhoto = function () {
        var croppedImgB64String = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
        this.croppedImage = croppedImgB64String;
        this.mainFilter = this.selFilter;
        $('#modal_theme_edit_profile_image').modal('toggle');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
            });
        }
        else {
            alert('Geolocation is not supported by this browser.');
        }
    };
    ProfileComponent.prototype.getPrePhoto = function () {
        var croppedImgB64String = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
        this.preCropImage = croppedImgB64String;
        $('#top-tab1').hide();
        $('#top-tab2').show();
    };
    ProfileComponent.prototype.cropImage = function () {
        $('#modal_theme_edit_profile_image').css('display', 'flex');
    };
    ProfileComponent.prototype.selectImage = function (className) {
        this.selIndex = className;
        this.selFilter = className;
        if ($('#modal_theme_edit_profile_image').find('.cropper-hide') != null) {
            $('#modal_theme_edit_profile_image').find('.cropper-hide').addClass(this.selFilter);
            console.log($('#modal_theme_edit_profile_image').find('.cropper-hide'));
            if (typeof ($('#modal_theme_edit_profile_image').find('.cropper-hide').attr('class')) !== 'undefined') {
                var classList = $('#modal_theme_edit_profile_image').find('.cropper-hide').attr('class').split(/\s+/);
                for (var _i = 0, classList_1 = classList; _i < classList_1.length; _i++) {
                    var list = classList_1[_i];
                    if (list !== this.selFilter && list !== 'cropper-hide') {
                        $('#modal_theme_edit_profile_image').find('.cropper-hide').removeClass(list);
                    }
                }
            }
        }
    };
    ProfileComponent.prototype.setZoomImage = function (rangeValue) {
        this.setRangeFromImage();
        var croppedData = this.angularCropper.cropper.getCropBoxData();
        this.angularCropper.cropper.zoomTo(rangeValue, {
            x: croppedData.width / 2 + croppedData.left,
            y: croppedData.height / 2 + croppedData.top,
        });
    };
    ProfileComponent.prototype.reset = function () {
        this.value = 0;
        this.strValue = 0;
        this.angularCropper.cropper.reset();
    };
    ProfileComponent.prototype.closeModal = function () {
        $('#modal_theme_edit_profile_image').css('display', 'none');
    };
    ProfileComponent.prototype.setRangeFromImage = function () {
    };
    ProfileComponent.prototype.strightenMouseUp = function (strightenValue) {
        this.enableSlide = false;
        this.angularCropper.cropper.rotateTo(strightenValue);
    };
    ProfileComponent.prototype.strightenMouseDown = function () {
        this.enableSlide = true;
        console.log('Strighten MouseDown');
    };
    ProfileComponent.prototype.flipX = function () {
        this.scaleValX = this.scaleValX * -1;
        this.angularCropper.cropper.scaleX(this.scaleValX);
    };
    ProfileComponent.prototype.flipY = function () {
        this.scaleValY = this.scaleValY * -1;
        this.angularCropper.cropper.scaleY(this.scaleValY);
    };
    ProfileComponent.prototype.move = function (x, y) {
        this.angularCropper.cropper.move(x, y);
    };
    ProfileComponent.prototype.setBackZoomImage = function (rangeValue) {
        // console.log(rangeValue);
        this.setRangeFromBackImage();
        var croppedData = this.backCropper.cropper.getCropBoxData();
        this.backCropper.cropper.zoomTo(rangeValue, {
            x: croppedData.width / 2 + croppedData.left,
            y: croppedData.height / 2 + croppedData.top,
        });
    };
    ProfileComponent.prototype.openNewProfilePhoto = function () {
        document.getElementById('profile_image_open').click();
    };
    ProfileComponent.prototype.getProfilePhoto = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            // tslint:disable-next-line:no-shadowed-variable
            reader.onload = function (event) {
                _this.angularCropper.cropper.destroy();
                _this.myImage = event.target.result;
                console.log(_this.myImage);
                _this.clickCrop();
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    ProfileComponent.prototype.setRangeFromBackImage = function () {
    };
    ProfileComponent.prototype.openProfileBackground = function () {
        setTimeout(function () {
            // this.backReset();
        }, 1000);
    };
    ProfileComponent.prototype.clickCrop = function () {
        $('#top-tab1').show();
        $('#top-tab-link1').addClass('active');
        $('#top-tab2').hide();
        $('#top-tab-link2').removeClass('active');
        this.filterState = false;
    };
    ProfileComponent.prototype.strightenBackMouseDown = function () {
        console.log('Strighten MouseDown');
    };
    ProfileComponent.prototype.strightenBackMouseUp = function (strightenValue) {
        this.value = 0;
        this.backCropper.cropper.rotateTo(strightenValue);
    };
    ProfileComponent.prototype.backFlipX = function () {
        this.backScaleValX = this.backScaleValX * -1;
        this.backCropper.cropper.scaleX(this.backScaleValX);
    };
    ProfileComponent.prototype.backFlipY = function () {
        this.backScaleValY = this.backScaleValY * -1;
        this.backCropper.cropper.scaleY(this.backScaleValY);
    };
    ProfileComponent.prototype.backReset = function () {
        this.backValue = 0;
        this.backStrValue = 0;
        this.backCropper.cropper.reset();
    };
    ProfileComponent.prototype.saveBackImage = function () {
        var croppedImgB64String = this.backCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
        this.backCroppedImage = 'url(' + croppedImgB64String + ')';
        this.mainBackFilter = this.selBackFilter;
        $('#modal_theme_edit_background_image').modal('toggle');
        $('#profile_background').addClass(this.mainBackFilter);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
            });
        }
        else {
            alert('Geolocation is not supported by this browser.');
        }
    };
    ProfileComponent.prototype.openNewBackImage = function () {
        document.getElementById('back_image_open').click();
    };
    ProfileComponent.prototype.getBackImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            // tslint:disable-next-line:no-shadowed-variable
            reader.onload = function (event) {
                _this.backCropper.cropper.destroy();
                _this.backImage = event.target.result;
                _this.clickBackCrop();
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    ProfileComponent.prototype.sliderMouseDown = function () {
    };
    ProfileComponent.prototype.clickBackCrop = function () {
        $('#top-back-tab1').show();
        $('#top-back-tab-link1').addClass('active');
        $('#top-back-tab2').hide();
        $('#top-back-tab-link2').removeClass('active');
    };
    ProfileComponent.prototype.getPreBackPhoto = function () {
        var croppedImgB64String = this.backCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
        this.preBcakImage = croppedImgB64String;
        this.mainBcakImage = 'url(' + croppedImgB64String + ')';
        $('#top-back-tab1').hide();
        $('#top-back-tab2').show();
    };
    ProfileComponent.prototype.selectBackImage = function (className) {
        this.selBackFilter = className;
        if ($('#modal_theme_edit_background_image').find('.cropper-hide') != null) {
            $('#modal_theme_edit_background_image').find('.cropper-hide').addClass(this.selFilter);
            console.log($('#modal_theme_edit_background_image').find('.cropper-hide'));
            if (typeof ($('#modal_theme_edit_background_image').find('.cropper-hide').attr('class')) !== 'undefined') {
                var classList = $('#modal_theme_edit_background_image').find('.cropper-hide').attr('class').split(/\s+/);
                for (var _i = 0, classList_2 = classList; _i < classList_2.length; _i++) {
                    var list = classList_2[_i];
                    if (list !== this.selFilter && list !== 'cropper-hide') {
                        $('#modal_theme_edit_background_image').find('.cropper-hide').removeClass(list);
                    }
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('angularCropper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular_cropperjs__["AngularCropperjsComponent"])
    ], ProfileComponent.prototype, "angularCropper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('backCropper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular_cropperjs__["AngularCropperjsComponent"])
    ], ProfileComponent.prototype, "backCropper", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('imganimate', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])('img', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0 })),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])('img', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* stagger */])('60ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('600ms 1.3s ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1 }))
                        ]))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('page', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])('.page-content', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0 })),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])('.page-content', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* stagger */])('30ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('600ms 1.2s ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1 }))
                        ]))
                    ])
                ]),
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/reusable-animations/fade.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var fadeAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('fadeAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* query */])(':enter', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0 })], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* query */])(':leave', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1 }), Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.3s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0 }))], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* query */])(':enter', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0 }), Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.3s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1 }))], { optional: true })
    ])
]);


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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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