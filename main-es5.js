function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _game_new_game_new_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./game/new-game/new-game.component */
    "./src/app/game/new-game/new-game.component.ts");
    /* harmony import */


    var _game_play_game_play_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./game/play-game/play-game.component */
    "./src/app/game/play-game/play-game.component.ts");
    /* harmony import */


    var _game_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./game/game-over/game-over.component */
    "./src/app/game/game-over/game-over.component.ts");

    var appRoutes = [{
      path: '',
      component: _game_new_game_new_game_component__WEBPACK_IMPORTED_MODULE_2__["NewGameComponent"]
    }, {
      path: 'newgame',
      component: _game_new_game_new_game_component__WEBPACK_IMPORTED_MODULE_2__["NewGameComponent"]
    }, {
      path: 'playgame/:difficulty',
      component: _game_play_game_play_game_component__WEBPACK_IMPORTED_MODULE_3__["PlayGameComponent"]
    }, {
      path: 'gameover',
      component: _game_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_4__["GameOverComponent"]
    }, {
      path: '**',
      redirectTo: '/newgame'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'matching-game-angular';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [["fxLayout", "", 1, "container"], ["fxFlex", "100%"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _game_new_game_new_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./game/new-game/new-game.component */
    "./src/app/game/new-game/new-game.component.ts");
    /* harmony import */


    var _game_play_game_play_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./game/play-game/play-game.component */
    "./src/app/game/play-game/play-game.component.ts");
    /* harmony import */


    var _game_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./game/game-over/game-over.component */
    "./src/app/game/game-over/game-over.component.ts");
    /* harmony import */


    var _game_stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./game/stopwatch/stopwatch.component */
    "./src/app/game/stopwatch/stopwatch.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _game_new_game_new_game_component__WEBPACK_IMPORTED_MODULE_8__["NewGameComponent"], _game_play_game_play_game_component__WEBPACK_IMPORTED_MODULE_9__["PlayGameComponent"], _game_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_10__["GameOverComponent"], _game_stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_11__["StopwatchComponent"]],
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _game_new_game_new_game_component__WEBPACK_IMPORTED_MODULE_8__["NewGameComponent"], _game_play_game_play_game_component__WEBPACK_IMPORTED_MODULE_9__["PlayGameComponent"], _game_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_10__["GameOverComponent"], _game_stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_11__["StopwatchComponent"]],
          imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/game/game-over/game-over.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/game/game-over/game-over.component.ts ***!
    \*******************************************************/

  /*! exports provided: GameOverComponent */

  /***/
  function srcAppGameGameOverGameOverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameOverComponent", function () {
      return GameOverComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_game_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/game-service.service */
    "./src/app/service/game-service.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var GameOverComponent =
    /*#__PURE__*/
    function () {
      function GameOverComponent(router, service) {
        _classCallCheck(this, GameOverComponent);

        this.router = router;
        this.service = service;
      }

      _createClass(GameOverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.timeUsed = this.service.currentGame.timeUsed;
        }
      }, {
        key: "playAgain",
        value: function playAgain() {
          this.router.navigate(['newgame']);
        }
      }]);

      return GameOverComponent;
    }();

    GameOverComponent.ɵfac = function GameOverComponent_Factory(t) {
      return new (t || GameOverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_game_service_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]));
    };

    GameOverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameOverComponent,
      selectors: [["app-game-over"]],
      decls: 11,
      vars: 4,
      consts: [["fxLayout", "column", 1, "container"], ["fxFlex", "100", "fxLayoutAlign", "center center"], [1, "center-text", "mhs"], ["fxFlex", "100", "fxLayout", "row", "fxLayoutAlign", "center center"], ["mat-raised-button", "", "color", "basic", 1, "homeButton", 3, "click"]],
      template: function GameOverComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Game Over");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameOverComponent_Template_button_click_9_listener() {
            return ctx.playAgain();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Play Again");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Time used: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 1, ctx.timeUsed, "HH:mm:ss"), "");
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS1vdmVyL2dhbWUtb3Zlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameOverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game-over',
          templateUrl: './game-over.component.html',
          styleUrls: ['./game-over.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _service_game_service_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/game/new-game/new-game.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/game/new-game/new-game.component.ts ***!
    \*****************************************************/

  /*! exports provided: NewGameComponent */

  /***/
  function srcAppGameNewGameNewGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewGameComponent", function () {
      return NewGameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../model/enums */
    "./src/app/model/enums.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_game_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/game-service.service */
    "./src/app/service/game-service.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var NewGameComponent =
    /*#__PURE__*/
    function () {
      function NewGameComponent(router, service) {
        _classCallCheck(this, NewGameComponent);

        this.router = router;
        this.service = service;
      }

      _createClass(NewGameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "startNewGame",
        value: function startNewGame(difficulty) {
          this.service.createNewGame(difficulty);
          this.router.navigate(['playgame', difficulty]);
        }
      }, {
        key: "GameDifficulty",
        get: function get() {
          return _model_enums__WEBPACK_IMPORTED_MODULE_1__["GameDifficulty"];
        }
      }]);

      return NewGameComponent;
    }();

    NewGameComponent.ɵfac = function NewGameComponent_Factory(t) {
      return new (t || NewGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_game_service_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]));
    };

    NewGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewGameComponent,
      selectors: [["app-new-game"]],
      decls: 15,
      vars: 0,
      consts: [["fxLayout", "column", 1, "container"], ["fxFlex", "100", "fxLayout", "row", "fxLayoutAlign", "center center"], ["src", "assets/images/logo.png", "width", "48", "height", "48", 1, "mr-10"], [1, "mhs"], ["fxFlex", "100", "fxLayoutAlign", "center center"], [1, "center-text", "mhs"], ["mat-raised-button", "", "color", "basic", 1, "homeButton", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "homeButton", 3, "click"], ["mat-raised-button", "", "color", "warn", 1, "homeButton", 3, "click"]],
      template: function NewGameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Matching Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please select game difficulty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewGameComponent_Template_button_click_9_listener() {
            return ctx.startNewGame(ctx.GameDifficulty.Easy);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Easy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewGameComponent_Template_button_click_11_listener() {
            return ctx.startNewGame(ctx.GameDifficulty.Medium);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Medium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewGameComponent_Template_button_click_13_listener() {
            return ctx.startNewGame(ctx.GameDifficulty.Hard);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Hard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: [".homeButton[_ngcontent-%COMP%] {\r\n    margin-left: 4px;\r\n    margin-right: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9uZXctZ2FtZS9uZXctZ2FtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvbmV3LWdhbWUvbmV3LWdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lQnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-game',
          templateUrl: './new-game.component.html',
          styleUrls: ['./new-game.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _service_game_service_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/game/play-game/play-game.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/game/play-game/play-game.component.ts ***!
    \*******************************************************/

  /*! exports provided: PlayGameComponent */

  /***/
  function srcAppGamePlayGamePlayGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayGameComponent", function () {
      return PlayGameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_model_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/model/enums */
    "./src/app/model/enums.ts");
    /* harmony import */


    var _stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../stopwatch/stopwatch.component */
    "./src/app/game/stopwatch/stopwatch.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_game_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/game-service.service */
    "./src/app/service/game-service.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PlayGameComponent_ng_container_8_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayGameComponent_ng_container_8_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var card_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onClickSet1(card_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlayGameComponent_ng_container_8_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayGameComponent_ng_container_8_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var card_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.onClickSet1(card_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r2.point);
      }
    }

    function PlayGameComponent_ng_container_8_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r2.point);
      }
    }

    function PlayGameComponent_ng_container_8_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
      }
    }

    function PlayGameComponent_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayGameComponent_ng_container_8_button_1_Template, 1, 0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayGameComponent_ng_container_8_button_2_Template, 2, 1, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlayGameComponent_ng_container_8_div_3_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlayGameComponent_ng_container_8_div_4_Template, 1, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var card_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", card_r2.state === ctx_r0.CardState.Closed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", card_r2.state === ctx_r0.CardState.OpenGreen);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", card_r2.state === ctx_r0.CardState.OpenRed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", card_r2.state === ctx_r0.CardState.Hidden);
      }
    }

    function PlayGameComponent_ng_container_10_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayGameComponent_ng_container_10_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var card_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.onClickSet2(card_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlayGameComponent_ng_container_10_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayGameComponent_ng_container_10_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var card_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.onClickSet2(card_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r15.point);
      }
    }

    function PlayGameComponent_ng_container_10_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r15.point);
      }
    }

    function PlayGameComponent_ng_container_10_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
      }
    }

    function PlayGameComponent_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayGameComponent_ng_container_10_button_1_Template, 1, 0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayGameComponent_ng_container_10_button_2_Template, 2, 1, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlayGameComponent_ng_container_10_div_3_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlayGameComponent_ng_container_10_div_4_Template, 1, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var card_r15 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", card_r15.state === ctx_r1.CardState.Closed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", card_r15.state === ctx_r1.CardState.OpenGreen);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", card_r15.state === ctx_r1.CardState.OpenRed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", card_r15.state === ctx_r1.CardState.Hidden);
      }
    }

    var PlayGameComponent =
    /*#__PURE__*/
    function () {
      function PlayGameComponent(router, route, service) {
        _classCallCheck(this, PlayGameComponent);

        this.router = router;
        this.route = route;
        this.service = service;
      }

      _createClass(PlayGameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.subscribe(function (params) {
            _this.difficulty = Number(params.get('difficulty'));
          });
          this.game = this.service.currentGame;
          this.cardset1 = this.game.cardset1;
          this.cardset2 = this.game.cardset2;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.stopWatch.first.start();
        }
      }, {
        key: "noMoreCard",
        value: function noMoreCard() {
          return this.game.remainCards() === 0;
        }
      }, {
        key: "matchedCards",
        value: function matchedCards() {
          return this.game.matchedCards();
        }
      }, {
        key: "anyRedCard",
        value: function anyRedCard() {
          return this.game.anyRedCard();
        }
      }, {
        key: "gameIcon",
        value: function gameIcon() {
          if (this.matchedCards()) {
            return 'thumb_up';
          } else if (this.anyRedCard()) {
            return 'thumb_down';
          } else {
            return 'verified_user';
          }
        }
      }, {
        key: "onClickSet1",
        value: function onClickSet1(card) {
          this.game.updateCardInCardsetUno(card.point);
          this.checkAndStop();
        }
      }, {
        key: "onClickSet2",
        value: function onClickSet2(card) {
          this.game.updateCardInCardsetDue(card.point);
          this.checkAndStop();
        }
      }, {
        key: "checkAndStop",
        value: function checkAndStop() {
          var _this2 = this;

          setTimeout(function () {
            if (_this2.noMoreCard()) {
              _this2.stopWatch.first.stop();

              _this2.game.timeUsed = _this2.stopWatch.first.counter;

              _this2.router.navigate(['gameover']);
            }
          }, 1000);
        }
      }, {
        key: "CardState",
        get: function get() {
          return src_app_model_enums__WEBPACK_IMPORTED_MODULE_1__["CardState"];
        }
      }]);

      return PlayGameComponent;
    }();

    PlayGameComponent.ɵfac = function PlayGameComponent_Factory(t) {
      return new (t || PlayGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_game_service_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]));
    };

    PlayGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayGameComponent,
      selectors: [["app-play-game"]],
      viewQuery: function PlayGameComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_2__["StopwatchComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stopWatch = _t);
        }
      },
      decls: 11,
      vars: 4,
      consts: [["fxLayout", "column", 1, "container"], ["fxFlex", "100", "fxLayoutAlign", "space-evenly center"], [1, "center-text", "normal-text"], ["fxFlex", "100", "fxLayout", "row wrap", "fxLayoutAlign", "start center", 1, "card-set"], [4, "ngFor", "ngForOf"], ["class", "card card-closed", 3, "click", 4, "ngIf"], ["class", "card card-green", 3, "click", 4, "ngIf"], ["class", "card card-red", 4, "ngIf"], ["class", "card card-hidden", 4, "ngIf"], [1, "card", "card-closed", 3, "click"], [1, "card", "card-green", 3, "click"], [1, "card", "card-red"], [1, "card", "card-hidden"]],
      template: function PlayGameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-stopwatch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayGameComponent_ng_container_8_Template, 5, 4, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PlayGameComponent_ng_container_10_Template, 5, 4, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gameIcon());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Play Game: ", ctx.difficulty, " cards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardset1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardset2);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_2__["StopwatchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: [".center-text[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.card-set[_ngcontent-%COMP%] {\r\n    background-color: #c8dfd7;\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    padding: 5px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    outline: none !important;\r\n    border: 0px solid;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:focus, .card[_ngcontent-%COMP%]:active {\r\n    outline: none !important;\r\n    border: 0px solid;\r\n}\r\n\r\n.card-closed[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\r\n\r\n.card-green[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: green;\r\n}\r\n\r\n.card-red[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: red;\r\n}\r\n\r\n.card-hidden[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    border: 0px white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9wbGF5LWdhbWUvcGxheS1nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvcGxheS1nYW1lL3BsYXktZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtc2V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGRmZDc7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQ7XHJcbn1cclxuXHJcbi5jYXJkOmZvY3VzLCAuY2FyZDphY3RpdmUge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQ7XHJcbn1cclxuXHJcbi5jYXJkLWNsb3NlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtZ3JlZW4ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5jYXJkLXJlZCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jYXJkLWhpZGRlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMHB4IHdoaXRlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-play-game',
          templateUrl: './play-game.component.html',
          styleUrls: ['./play-game.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _service_game_service_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]
        }];
      }, {
        stopWatch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [_stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_2__["StopwatchComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/game/stopwatch/stopwatch.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/game/stopwatch/stopwatch.component.ts ***!
    \*******************************************************/

  /*! exports provided: StopwatchComponent */

  /***/
  function srcAppGameStopwatchStopwatchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StopwatchComponent", function () {
      return StopwatchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var StopwatchComponent =
    /*#__PURE__*/
    function () {
      function StopwatchComponent() {
        _classCallCheck(this, StopwatchComponent);
      }

      _createClass(StopwatchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.ticking = false;
          this.tick = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, 1000).subscribe(function (ellapsedCycles) {
            if (_this3.ticking) {
              _this3.counter = new Date(0, 0, 0, 0, 0, 0);

              _this3.counter.setSeconds(ellapsedCycles);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.tick.unsubscribe();
        }
      }, {
        key: "start",
        value: function start() {
          this.ticking = true;
        }
      }, {
        key: "stop",
        value: function stop() {
          this.ticking = false;
        }
      }]);

      return StopwatchComponent;
    }();

    StopwatchComponent.ɵfac = function StopwatchComponent_Factory(t) {
      return new (t || StopwatchComponent)();
    };

    StopwatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StopwatchComponent,
      selectors: [["app-stopwatch"]],
      decls: 3,
      vars: 4,
      consts: [[1, "normal-text"]],
      template: function StopwatchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx.counter, "HH:mm:ss"));
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvc3RvcHdhdGNoL3N0b3B3YXRjaC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StopwatchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stopwatch',
          templateUrl: './stopwatch.component.html',
          styleUrls: ['./stopwatch.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/enums.ts":
  /*!********************************!*\
    !*** ./src/app/model/enums.ts ***!
    \********************************/

  /*! exports provided: CardState, GameDifficulty */

  /***/
  function srcAppModelEnumsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardState", function () {
      return CardState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameDifficulty", function () {
      return GameDifficulty;
    });

    var CardState;

    (function (CardState) {
      CardState[CardState["Closed"] = 0] = "Closed";
      CardState[CardState["OpenGreen"] = 1] = "OpenGreen";
      CardState[CardState["OpenRed"] = 2] = "OpenRed";
      CardState[CardState["Hidden"] = 3] = "Hidden";
    })(CardState || (CardState = {}));

    var GameDifficulty;

    (function (GameDifficulty) {
      GameDifficulty[GameDifficulty["Easy"] = 3] = "Easy";
      GameDifficulty[GameDifficulty["Medium"] = 10] = "Medium";
      GameDifficulty[GameDifficulty["Hard"] = 25] = "Hard";
    })(GameDifficulty || (GameDifficulty = {}));
    /***/

  },

  /***/
  "./src/app/model/game.ts":
  /*!*******************************!*\
    !*** ./src/app/model/game.ts ***!
    \*******************************/

  /*! exports provided: Game */

  /***/
  function srcAppModelGameTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Game", function () {
      return Game;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./enums */
    "./src/app/model/enums.ts");

    var Game =
    /*#__PURE__*/
    function () {
      function Game() {
        _classCallCheck(this, Game);
      }

      _createClass(Game, [{
        key: "init",
        value: function init(gameId, gameLevel) {
          this.id = gameId;
          this.difficulty = gameLevel;
          var len = gameLevel;
          var pts = [];

          for (var n = 1; n <= len; n++) {
            pts.push(n);
          }

          pts = shuffle(pts);
          this.cardset1 = [];

          for (var _n = 1; _n <= len; _n++) {
            var card = {
              point: pts[_n - 1],
              state: _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].Closed
            };
            this.cardset1.push(card);
          }

          pts = shuffle(pts);
          this.cardset2 = [];

          for (var _n2 = 1; _n2 <= len; _n2++) {
            var _card = {
              point: pts[_n2 - 1],
              state: _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].Closed
            };
            this.cardset2.push(_card);
          }
        }
      }, {
        key: "updateCardInCardsetUno",
        value: function updateCardInCardsetUno(point) {
          var card = this.cardset1.find(function (c) {
            return c.point === point;
          });

          if (card !== undefined) {
            this.toggleStateInSameCardset(this.cardset1, card);
            this.updateStateBetweenCardset(this.cardset2, card);
          }
        }
      }, {
        key: "updateCardInCardsetDue",
        value: function updateCardInCardsetDue(point) {
          var card = this.cardset2.find(function (c) {
            return c.point === point;
          });

          if (card !== undefined) {
            this.toggleStateInSameCardset(this.cardset2, card);
            this.updateStateBetweenCardset(this.cardset1, card);
          }
        }
      }, {
        key: "toggleStateInSameCardset",
        value: function toggleStateInSameCardset(cardset, card) {
          var selectedCard = cardset.find(function (c) {
            return c.state === _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].OpenGreen;
          });

          if (selectedCard !== undefined) {
            selectedCard.state = _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].Closed;
            card.state = _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].OpenGreen;
          }
        }
      }, {
        key: "updateStateBetweenCardset",
        value: function updateStateBetweenCardset(cardset, card) {
          var selectedCard = cardset.find(function (c) {
            return c.state === _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].OpenGreen;
          });

          if (selectedCard !== undefined) {
            if (selectedCard.point === card.point) {
              card.state = _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].OpenGreen;
              setTimeout(function () {
                selectedCard.state = _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].Hidden;
                card.state = _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].Hidden;
              }, 1000);
            } else {
              card.state = _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].OpenRed;
              setTimeout(function () {
                card.state = _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].Closed;
              }, 3000);
            }
          } else {
            card.state = _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].OpenGreen;
          }
        }
      }, {
        key: "remainCards",
        value: function remainCards() {
          return this.cardset1.filter(function (c) {
            return c.state !== _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].Hidden;
          }).length + this.cardset2.filter(function (c) {
            return c.state !== _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].Hidden;
          }).length;
        }
      }, {
        key: "matchedCards",
        value: function matchedCards() {
          return this.cardset1.filter(function (c) {
            return c.state === _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].OpenGreen;
          }).length !== 0 && this.cardset2.filter(function (c) {
            return c.state === _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].OpenGreen;
          }).length !== 0;
        }
      }, {
        key: "anyRedCard",
        value: function anyRedCard() {
          return this.cardset1.filter(function (c) {
            return c.state === _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].OpenRed;
          }).length !== 0 || this.cardset2.filter(function (c) {
            return c.state === _enums__WEBPACK_IMPORTED_MODULE_1__["CardState"].OpenRed;
          }).length !== 0;
        }
      }]);

      return Game;
    }();

    Game.ɵfac = function Game_Factory(t) {
      return new (t || Game)();
    };

    Game.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Game,
      factory: Game.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Game, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/game-service.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/service/game-service.service.ts ***!
    \*************************************************/

  /*! exports provided: GameService */

  /***/
  function srcAppServiceGameServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameService", function () {
      return GameService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/game */
    "./src/app/model/game.ts");

    var GameService =
    /*#__PURE__*/
    function () {
      function GameService() {
        _classCallCheck(this, GameService);
      }

      _createClass(GameService, [{
        key: "createNewGame",
        value: function createNewGame(difficulty) {
          var g = new _model_game__WEBPACK_IMPORTED_MODULE_1__["Game"]();
          g.init(0, difficulty);
          this.currentGame = g;
        }
      }]);

      return GameService;
    }();

    GameService.ɵfac = function GameService_Factory(t) {
      return new (t || GameService)();
    };

    GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GameService,
      factory: GameService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! J:\Projects2020\MatchingGames\matching-game-angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map