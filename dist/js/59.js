(self["webpackChunk_ice_lite_scaffold"] = self["webpackChunk_ice_lite_scaffold"] || []).push([[59],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(factory) {
     true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(function() {
    "use strict";
    var _classCallCheck = function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };
    var _defineProperties = function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    };
    var _createClass = function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    };
    var _inherits = function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        Object.defineProperty(subClass, "prototype", {
            writable: false
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    };
    var _isNativeReflectConstruct = function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    };
    var _assertThisInitialized = function _assertThisInitialized(self1) {
        if (self1 === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self1;
    };
    var _possibleConstructorReturn = function _possibleConstructorReturn(self1, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
            return call;
        } else if (call !== void 0) {
            throw new TypeError("Derived constructors may only return object or undefined");
        }
        return _assertThisInitialized(self1);
    };
    var _createSuper = function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived), result;
            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
        };
    };
    var _superPropBase = function _superPropBase(object, property) {
        while(!Object.prototype.hasOwnProperty.call(object, property)){
            object = _getPrototypeOf(object);
            if (object === null) break;
        }
        return object;
    };
    var polyfillNeeded = function polyfillNeeded(self1) {
        if (self1.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
            console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill");
            return true;
        } // Note that the "unfetch" minimal fetch polyfill defines fetch() without
        // defining window.Request, and this polyfill need to work on top of unfetch
        // so the below feature detection needs the !self.AbortController part.
        // The Request.prototype check is also needed because Safari versions 11.1.2
        // up to and including 12.1.x has a window.AbortController present but still
        // does NOT correctly implement abortable fetch:
        // https://bugs.webkit.org/show_bug.cgi?id=174980#c2
        return typeof self1.Request === "function" && !self1.Request.prototype.hasOwnProperty("signal") || !self1.AbortController;
    };
    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }
    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o, p);
    }
    function _get() {
        if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get.bind();
        } else {
            _get = function _get(target, property, receiver) {
                var base = _superPropBase(target, property);
                if (!base) return;
                var desc = Object.getOwnPropertyDescriptor(base, property);
                if (desc.get) {
                    return desc.get.call(arguments.length < 3 ? target : receiver);
                }
                return desc.value;
            };
        }
        return _get.apply(this, arguments);
    }
    var Emitter = /*#__PURE__*/ function() {
        function Emitter() {
            _classCallCheck(this, Emitter);
            Object.defineProperty(this, "listeners", {
                value: {},
                writable: true,
                configurable: true
            });
        }
        _createClass(Emitter, [
            {
                key: "addEventListener",
                value: function addEventListener(type, callback, options) {
                    if (!(type in this.listeners)) {
                        this.listeners[type] = [];
                    }
                    this.listeners[type].push({
                        callback: callback,
                        options: options
                    });
                }
            },
            {
                key: "removeEventListener",
                value: function removeEventListener(type, callback) {
                    if (!(type in this.listeners)) {
                        return;
                    }
                    var stack = this.listeners[type];
                    for(var i = 0, l = stack.length; i < l; i++){
                        if (stack[i].callback === callback) {
                            stack.splice(i, 1);
                            return;
                        }
                    }
                }
            },
            {
                key: "dispatchEvent",
                value: function dispatchEvent(event) {
                    if (!(event.type in this.listeners)) {
                        return;
                    }
                    var stack = this.listeners[event.type];
                    var stackToCall = stack.slice();
                    for(var i = 0, l = stackToCall.length; i < l; i++){
                        var listener = stackToCall[i];
                        try {
                            listener.callback.call(this, event);
                        } catch (e) {
                            Promise.resolve().then(function() {
                                throw e;
                            });
                        }
                        if (listener.options && listener.options.once) {
                            this.removeEventListener(event.type, listener.callback);
                        }
                    }
                    return !event.defaultPrevented;
                }
            }
        ]);
        return Emitter;
    }();
    var AbortSignal = /*#__PURE__*/ function(_Emitter) {
        _inherits(AbortSignal, _Emitter);
        var _super = _createSuper(AbortSignal);
        function AbortSignal() {
            var _this;
            _classCallCheck(this, AbortSignal);
            _this = _super.call(this); // Some versions of babel does not transpile super() correctly for IE <= 10, if the parent
            // constructor has failed to run, then "this.listeners" will still be undefined and then we call
            // the parent constructor directly instead as a workaround. For general details, see babel bug:
            // https://github.com/babel/babel/issues/3041
            // This hack was added as a fix for the issue described here:
            // https://github.com/Financial-Times/polyfill-library/pull/59#issuecomment-477558042
            if (!_this.listeners) {
                Emitter.call(_assertThisInitialized(_this));
            } // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
            // we want Object.keys(new AbortController().signal) to be [] for compat with the native impl
            Object.defineProperty(_assertThisInitialized(_this), "aborted", {
                value: false,
                writable: true,
                configurable: true
            });
            Object.defineProperty(_assertThisInitialized(_this), "onabort", {
                value: null,
                writable: true,
                configurable: true
            });
            Object.defineProperty(_assertThisInitialized(_this), "reason", {
                value: undefined,
                writable: true,
                configurable: true
            });
            return _this;
        }
        _createClass(AbortSignal, [
            {
                key: "toString",
                value: function toString() {
                    return "[object AbortSignal]";
                }
            },
            {
                key: "dispatchEvent",
                value: function dispatchEvent(event) {
                    if (event.type === "abort") {
                        this.aborted = true;
                        if (typeof this.onabort === "function") {
                            this.onabort.call(this, event);
                        }
                    }
                    _get(_getPrototypeOf(AbortSignal.prototype), "dispatchEvent", this).call(this, event);
                }
            }
        ]);
        return AbortSignal;
    }(Emitter);
    var AbortController = /*#__PURE__*/ function() {
        function AbortController() {
            _classCallCheck(this, AbortController);
            // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
            // we want Object.keys(new AbortController()) to be [] for compat with the native impl
            Object.defineProperty(this, "signal", {
                value: new AbortSignal(),
                writable: true,
                configurable: true
            });
        }
        _createClass(AbortController, [
            {
                key: "abort",
                value: function abort(reason) {
                    var event;
                    try {
                        event = new Event("abort");
                    } catch (e) {
                        if (typeof document !== "undefined") {
                            if (!document.createEvent) {
                                // For Internet Explorer 8:
                                event = document.createEventObject();
                                event.type = "abort";
                            } else {
                                // For Internet Explorer 11:
                                event = document.createEvent("Event");
                                event.initEvent("abort", false, false);
                            }
                        } else {
                            // Fallback where document isn't available:
                            event = {
                                type: "abort",
                                bubbles: false,
                                cancelable: false
                            };
                        }
                    }
                    var signalReason = reason;
                    if (signalReason === undefined) {
                        if (typeof document === "undefined") {
                            signalReason = new Error("This operation was aborted");
                            signalReason.name = "AbortError";
                        } else {
                            try {
                                signalReason = new DOMException("signal is aborted without reason");
                            } catch (err) {
                                // IE 11 does not support calling the DOMException constructor, use a
                                // regular error object on it instead.
                                signalReason = new Error("This operation was aborted");
                                signalReason.name = "AbortError";
                            }
                        }
                    }
                    this.signal.reason = signalReason;
                    this.signal.dispatchEvent(event);
                }
            },
            {
                key: "toString",
                value: function toString() {
                    return "[object AbortController]";
                }
            }
        ]);
        return AbortController;
    }();
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        // These are necessary to make sure that we get correct output for:
        // Object.prototype.toString.call(new AbortController())
        AbortController.prototype[Symbol.toStringTag] = "AbortController";
        AbortSignal.prototype[Symbol.toStringTag] = "AbortSignal";
    }
    (function(self1) {
        if (!polyfillNeeded(self1)) {
            return;
        }
        self1.AbortController = AbortController;
        self1.AbortSignal = AbortSignal;
    })(typeof self !== "undefined" ? self : __webpack_require__.g);
});


/***/ }),

/***/ 220:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  tZ: function() { return /* binding */ jsx; },
  BX: function() { return /* binding */ jsxs; }
});

// UNUSED EXPORTS: Fragment

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./.ice/env.ts?u=1
var envu_1 = __webpack_require__(427);
;// CONCATENATED MODULE: ./node_modules/style-unit/es/index.js

var RPX_REG = /"[^"]+"|'[^']+'|url\([^\)]+\)|(\d*\.?\d+)rpx/g;
var __rpx_coefficient__;
var __viewport_width__; // convertUnit method targetPlatform
var targetPlatform = envu_1/* isWeb */.$L ? "web" : envu_1/* isWeex */.uk ? "weex" : envu_1/* isNode */.UG ? "node" : ""; // Init toFixed method
var unitPrecision = 4;
var toFixed = function toFixed(number, precision) {
    var multiplier = Math.pow(10, precision + 1);
    var wholeNumber = Math.floor(number * multiplier);
    return Math.round(wholeNumber / 10) * 10 / multiplier;
}; // Dedault decimal px transformer.
var decimalPixelTransformer = function decimalPixelTransformer(rpx, $1) {
    return $1 ? parseFloat(rpx) * getRpx() + "px" : rpx;
}; // Default decimal vw transformer.
var decimalVWTransformer = function decimalVWTransformer(rpx, $1) {
    return $1 ? toFixed(parseFloat(rpx) / (getViewportWidth() / 100), unitPrecision) + "vw" : rpx;
}; // Default 1 rpx to 1 px
if (getRpx() === undefined) {
    setRpx(1);
} // Viewport width, default to 750.
if (getViewportWidth() === undefined) {
    setViewportWidth(750);
}
var CustomMap = /*#__PURE__*/ function() {
    var CustomMap = function CustomMap() {
        this.__store = {};
    };
    var _proto = CustomMap.prototype;
    _proto.set = function set(key, value) {
        this.__store[key + "_" + typeof key] = value;
    };
    _proto.get = function get(key) {
        return this.__store[key + "_" + typeof key];
    };
    _proto.has = function has(key) {
        return Object.prototype.hasOwnProperty.call(this.__store, key + "_" + typeof key);
    };
    return CustomMap;
}();
/**
 * Is string contains rpx
 * note: rpx is an alias to rpx
 * @param {String} str
 * @returns {Boolean}
 */ function isRpx(str) {
    return typeof str === "string" && RPX_REG.test(str);
}
/**
 * Calculate rpx
 * @param {String} str
 * @returns {String}
 */ function calcRpx(str) {
    if (targetPlatform === "web" || targetPlatform === "node") {
        // In Web convert rpx to 'vw', same as driver-dom and driver-universal.
        // In Node is same as web for SSR.
        // '375rpx' => '50vw'
        return str.replace(RPX_REG, decimalVWTransformer);
    } else if (targetPlatform === "weex") {
        // In Weex convert rpx to 'px'.
        // '375rpx' => 375 * px
        return str.replace(RPX_REG, decimalPixelTransformer);
    } else {
        // Other platform return original value, like Mini-App and WX Mini-Program ...
        // '375rpx' => '375rpx'
        return str;
    }
}
function getRpx() {
    return __rpx_coefficient__;
}
function setRpx(rpx) {
    __rpx_coefficient__ = rpx;
}
function getViewportWidth() {
    return __viewport_width__;
}
function setViewportWidth(viewport) {
    __viewport_width__ = viewport;
}
/**
 * Set a function to transform unit of pixel,
 * default to passthrough.
 * @param {Function} transformer function
 */ function setDecimalPixelTransformer(transformer) {
    decimalPixelTransformer = transformer;
}
/**
 * Set unit precision.
 * @param n {Number} Unit precision, default to 4.
 */ function setUnitPrecision(n) {
    unitPrecision = n;
}
/**
 * Create a cached version of a pure function.
 * Use the first params as cache key.
 */ function cached(fn) {
    var cache = new CustomMap();
    return function cachedFn() {
        var key = arguments.length <= 0 ? undefined : arguments[0];
        if (!cache.has(key)) cache.set(key, fn.apply(void 0, arguments));
        return cache.get(key);
    };
}
function setTargetPlatform(platform) {
    targetPlatform = platform;
}
/**
 * Convert rpx.
 * @param value
 * @param prop
 * @param platform
 * @return {String} Transformed value.
 */ var convertUnit = cached(function(value, prop, platform) {
    if (platform) {
        setTargetPlatform(platform);
    }
    return isRpx(value) ? calcRpx(value) : value;
});

;// CONCATENATED MODULE: ./node_modules/@ice/jsx-runtime/esm/style.js
// @ts-ignore

var STYLE = "style";
function isObject(obj) {
    return typeof obj === "object";
}
// Support rpx unit.
function hijackElementProps(props) {
    if (props && STYLE in props) {
        var style = props.style;
        if (isObject(style)) {
            var result = Object.assign({}, props);
            var convertedStyle = {};
            for(var prop in style)convertedStyle[prop] = typeof style[prop] === "string" ? convertUnit(style[prop]) : style[prop];
            result["style"] = convertedStyle;
            return result;
        }
    }
    return props;
}

;// CONCATENATED MODULE: ./node_modules/@ice/jsx-runtime/esm/prod.js
// @ts-ignore


/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} maybeKey
 * @param {object} source
 * @param {any} self
 */ function jsx(type, props, maybeKey, source, self) {
    return (0,jsx_runtime.jsx)(type, hijackElementProps(props), maybeKey, source, self);
}
// Same as jsx method, special case jsxs internally to take advantage of static children.
// // for now we can ship identical prod functions.
function jsxs(type, props, maybeKey, source, self) {
    return (0,jsx_runtime.jsxs)(type, hijackElementProps(props), maybeKey, source, self);
}



/***/ }),

/***/ 317:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bp: function() { return /* binding */ useAppContext; },
/* harmony export */   iz: function() { return /* binding */ AppContextProvider; }
/* harmony export */ });
/* unused harmony export useAppData */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);

var Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
Context.displayName = "AppContext";
function useAppContext() {
    var value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
    return value;
}
function useAppData() {
    var value = React.useContext(Context);
    return value.appData;
}
var AppContextProvider = Context.Provider;



/***/ }),

/***/ 808:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ getAppConfig; },
/* harmony export */   _: function() { return /* binding */ defineAppConfig; }
/* harmony export */ });
/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(975);
/* harmony import */ var _swc_helpers_object_without_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(210);


var defaultAppConfig = {
    app: {
        strict: false,
        rootId: "ice-container"
    },
    router: {
        type: "browser"
    }
};
function getAppConfig(appExport) {
    var appConfig = (appExport === null || appExport === void 0 ? void 0 : appExport.default) || {};
    var app = appConfig.app, router = appConfig.router, others = (0,_swc_helpers_object_without_properties__WEBPACK_IMPORTED_MODULE_0__._)(appConfig, [
        "app",
        "router"
    ]);
    return (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_1__._)({
        app: (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_1__._)({}, defaultAppConfig.app, app || {}),
        router: (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_1__._)({}, defaultAppConfig.router, router || {})
    }, others);
}
function defineAppConfig(appConfigOrDefineAppConfig) {
    if (typeof appConfigOrDefineAppConfig === "function") {
        return appConfigOrDefineAppConfig();
    } else {
        return appConfigOrDefineAppConfig;
    }
}


/***/ }),

/***/ 268:
/***/ (function(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var abortcontroller_polyfill_dist_abortcontroller_polyfill_only_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);



/***/ }),

/***/ 818:
/***/ (function() {

"use strict";
// Add polyfill of Request.prototype.signal for some browser compatibility.
// eslint-disable-next-line
if ( true && window.Request && !window.Request.prototype.hasOwnProperty("signal")) {
    (function(self) {
        var Request = function Request(input, init) {
            var request = new OriginalRequest(input, init);
            if (input instanceof OriginalRequest) {
                // @ts-ignore overwrite signal because singal is readonly in type Request.
                request.signal = input.signal;
            }
            // @ts-ignore overwrite signal because singal is readonly in type Request.
            request.signal = init.signal || request.signal || function() {
                if ("AbortController" in window) {
                    var ctrl = new AbortController();
                    return ctrl.signal;
                }
            }();
            return request;
        };
        var OriginalRequest = window.Request;
        Request.prototype = Object.create(OriginalRequest.prototype);
        Request.prototype.constructor = Request;
        // @ts-expect-error for overwrite the original Request.
        self.Request = Request;
    })(window);
}
// Mark the current file as es module, otherwise the polyfill will be inject by require,
// it is not allowed to use require in `type: module` package.
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({});


/***/ }),

/***/ 665:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Qf: function() { return /* binding */ RouteErrorComponent; },
  pW: function() { return /* binding */ WrapRouteComponent; },
  Bx: function() { return /* binding */ createRouteLoader; },
  Y7: function() { return /* binding */ getRoutesPath; },
  op: function() { return /* binding */ loadRouteModule; },
  Hz: function() { return /* binding */ loadRouteModules; }
});

// UNUSED EXPORTS: Await, RouteComponent

// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_async_to_generator.js
var _async_to_generator = __webpack_require__(10);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js + 1 modules
var _object_spread = __webpack_require__(975);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_to_consumable_array.js + 2 modules
var _to_consumable_array = __webpack_require__(912);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(582);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(945);
;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/RouteWrapper.js

function RouteWrapper(props) {
    var _props_wrappers = props.wrappers, wrappers = _props_wrappers === void 0 ? [] : _props_wrappers, id = props.id, isLayout = props.isLayout, routeExports = props.routeExports;
    // layout should only be wrapped by Wrapper with `layout: true`
    var filtered = isLayout ? wrappers.filter(function(wrapper) {
        return wrapper.layout === true;
    }) : wrappers;
    var RouteWrappers = filtered.map(function(item) {
        return item.Wrapper;
    });
    var element;
    if (RouteWrappers.length) {
        element = RouteWrappers.reduce(function(preElement, CurrentWrapper) {
            return /*#__PURE__*/ react.createElement(CurrentWrapper, {
                routeId: id,
                routeExports: routeExports
            }, preElement);
        }, props.children);
    } else {
        element = props.children;
    }
    return element;
}

// EXTERNAL MODULE: ./node_modules/@ice/runtime/esm/AppContext.js
var AppContext = __webpack_require__(317);
;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/routesConfig.js


function getMeta(matches, loadersData) {
    return getMergedValue("meta", matches, loadersData) || [];
}
function getLinks(matches, loadersData) {
    return getMergedValue("links", matches, loadersData) || [];
}
function getScripts(matches, loadersData) {
    return getMergedValue("scripts", matches, loadersData) || [];
}
function getTitle(matches, loadersData) {
    return getMergedValue("title", matches, loadersData);
}
/**
 * merge value for each matched route
 */ function getMergedValue(key, matches, loadersData) {
    var _a;
    var result;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var match = _step.value;
            var routeId = match.route.id;
            var data = (_a = loadersData[routeId]) === null || _a === void 0 ? void 0 : _a.pageConfig;
            var value = data === null || data === void 0 ? void 0 : data[key];
            if (Array.isArray(value)) {
                // merge array
                result = result ? result.concat(value) : value;
            } else if (value) {
                // overwrite
                result = value;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return result;
}
/**
 * update routes config to document.
 */ function updateRoutesConfig(loaderData) {
    return _updateRoutesConfig.apply(this, arguments);
}
function _updateRoutesConfig() {
    _updateRoutesConfig = (0,_async_to_generator._)(function(loaderData) {
        var routeConfig, title, meta, links, scripts;
        return (0,tslib_es6/* __generator */.Jh)(this, function(_state) {
            switch(_state.label){
                case 0:
                    routeConfig = loaderData === null || loaderData === void 0 ? void 0 : loaderData.pageConfig;
                    title = routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.title;
                    if (title) {
                        document.title = title;
                    }
                    meta = (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.meta) || [];
                    links = (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.links) || [];
                    scripts = (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.scripts) || [];
                    return [
                        4,
                        Promise.all([
                            updateMeta(meta),
                            updateAssets("link", links),
                            updateAssets("script", scripts)
                        ])
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _updateRoutesConfig.apply(this, arguments);
}
/**
 * find meta by 'next-meta-count' and update it
 */ function updateMeta(meta) {
    var _a;
    var headEl = document.head;
    var metaCountEl = headEl.querySelector("meta[name=ice-meta-count]");
    if (!metaCountEl) {
        console.warn("Can not find meta element.");
        return;
    }
    var headCount = Number(metaCountEl.content);
    var oldTags = [];
    for(var i = 0, j = metaCountEl.previousElementSibling; i < headCount; i++, j = j === null || j === void 0 ? void 0 : j.previousElementSibling){
        if (((_a = j === null || j === void 0 ? void 0 : j.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "meta") {
            oldTags.push(j);
        }
    }
    var newTags = meta.map(function(item) {
        return reactElementToDOM("meta", item);
    });
    oldTags.forEach(function(t) {
        return t.parentNode.removeChild(t);
    });
    newTags.forEach(function(t) {
        return headEl.insertBefore(t, metaCountEl);
    });
    metaCountEl.content = newTags.length.toString();
}
var DOMAttributeNames = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv",
    noModule: "noModule"
};
/**
 * map element props to dom
 * https://github.com/vercel/next.js/blob/canary/packages/next/client/head-manager.ts#L9
 */ function reactElementToDOM(type, props) {
    var el = document.createElement(type);
    for(var p in props){
        // we don't render undefined props to the DOM
        if (props[p] === undefined) continue;
        var attr = DOMAttributeNames[p] || p.toLowerCase();
        if (type === "script" && (attr === "async" || attr === "defer" || attr === "noModule")) {
            el[attr] = !!props[p];
        } else {
            el.setAttribute(attr, props[p]);
        }
    }
    return el;
}
var looseToArray = function(input) {
    return [].slice.call(input);
};
function updateAssets(type, assets) {
    return _updateAssets.apply(this, arguments);
}
function _updateAssets() {
    _updateAssets = /**
 * Load links/scripts for current page.
 * Remove links/scripts for the last page.
 */ (0,_async_to_generator._)(function(type, assets) {
        var oldTags;
        return (0,tslib_es6/* __generator */.Jh)(this, function(_state) {
            switch(_state.label){
                case 0:
                    oldTags = looseToArray(document.querySelectorAll("".concat(type, "[data-route-").concat(type, "]")));
                    return [
                        4,
                        Promise.all(assets.map(function(asset) {
                            return appendTags(type, asset);
                        }))
                    ];
                case 1:
                    _state.sent();
                    oldTags.forEach(function(tag) {
                        var _a;
                        // In some parcel case oldTags may be removed by other routes.
                        (_a = tag.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(tag);
                    });
                    return [
                        2
                    ];
            }
        });
    });
    return _updateAssets.apply(this, arguments);
}
function appendTags(type, props) {
    return _appendTags.apply(this, arguments);
}
function _appendTags() {
    _appendTags = (0,_async_to_generator._)(function(type, props) {
        return (0,tslib_es6/* __generator */.Jh)(this, function(_state) {
            return [
                2,
                new Promise(function(resolve, reject) {
                    var tag = reactElementToDOM(type, props);
                    tag.setAttribute("data-route-".concat(type), "true");
                    tag.onload = function() {
                        resolve(null);
                    };
                    tag.onerror = function() {
                        reject();
                    };
                    document.head.appendChild(tag);
                })
            ];
        });
    });
    return _appendTags.apply(this, arguments);
}

;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/routes.js











function getRoutesPath(routes) {
    var parentPath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var paths = [];
    routes.forEach(function(route) {
        var pathId = "".concat(parentPath, "/").concat(route.path || "").replace("//", "/");
        if (route.children) {
            var _paths;
            (_paths = paths).push.apply(_paths, (0,_to_consumable_array._)(getRoutesPath(route.children, pathId)));
        } else {
            paths.push(pathId);
        }
    });
    return paths.map(function(str) {
        return str.replace("//", "/");
    });
}
function loadRouteModule(route) {
    return _loadRouteModule.apply(this, arguments);
}
function _loadRouteModule() {
    _loadRouteModule = (0,_async_to_generator._)(function(route) {
        var routeModulesCache, id, lazy, routeModule, error;
        var _arguments = arguments;
        return (0,tslib_es6/* __generator */.Jh)(this, function(_state) {
            switch(_state.label){
                case 0:
                    routeModulesCache = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : {};
                    id = route.id, lazy = route.lazy;
                    if ( true && // Don't use module cache and should load again in ssr. Ref: https://github.com/ice-lab/ice-next/issues/82
                    id in routeModulesCache) {
                        return [
                            2,
                            routeModulesCache[id]
                        ];
                    }
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        lazy()
                    ];
                case 2:
                    routeModule = _state.sent();
                    routeModulesCache[id] = routeModule;
                    return [
                        2,
                        routeModule
                    ];
                case 3:
                    error = _state.sent();
                    console.error("Failed to load route module: ".concat(id, "."));
                    // Re-throw error for better debugging.
                    throw error;
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _loadRouteModule.apply(this, arguments);
}
function loadRouteModules(routes) {
    return _loadRouteModules.apply(this, arguments);
}
function _loadRouteModules() {
    _loadRouteModules = (0,_async_to_generator._)(function(routes) {
        var originRouteModules, routeModules, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, route, routeModule, err;
        var _arguments = arguments;
        return (0,tslib_es6/* __generator */.Jh)(this, function(_state) {
            switch(_state.label){
                case 0:
                    originRouteModules = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : {};
                    routeModules = (0,_object_spread._)({}, originRouteModules);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = routes[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    route = _step.value;
                    return [
                        4,
                        loadRouteModule(route, routeModules)
                    ];
                case 3:
                    routeModule = _state.sent();
                    routeModules[route.id] = routeModule;
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    return [
                        2,
                        routeModules
                    ];
            }
        });
    });
    return _loadRouteModules.apply(this, arguments);
}
// Wrap route component with runtime wrappers.
function WrapRouteComponent(options) {
    var routeId = options.routeId, isLayout = options.isLayout, routeExports = options.routeExports;
    var RouteWrappers = (0,AppContext/* useAppContext */.bp)().RouteWrappers;
    return /*#__PURE__*/ react.createElement(RouteWrapper, {
        routeExports: routeExports,
        id: routeId,
        isLayout: isLayout,
        wrappers: RouteWrappers
    }, /*#__PURE__*/ react.createElement(routeExports.default, null));
}
function RouteComponent(param) {
    var id = param.id;
    // get current route component from latest routeModules
    var routeModules = useAppContext().routeModules;
    var Component = (routeModules[id] || {}).Component;
    if (false) {}
    return /*#__PURE__*/ React.createElement(Component, null);
}
function ErrorComponentWithRouter() {
    var error = (0,dist/* useRouteError */.lk)();
    if (error) {
        // Re-throws the error so it can be caught by App Error Boundary.
        throw error;
    }
    return /*#__PURE__*/ react.createElement(react.Fragment, null);
}
function RouteErrorComponent() {
    return  true ? /*#__PURE__*/ react.createElement(ErrorComponentWithRouter, null) : /*#__PURE__*/ 0;
}
function Await(props) {
    return  true ? /*#__PURE__*/ React.createElement(Suspense, {
        fallback: props.fallback
    }, /*#__PURE__*/ React.createElement(ReactRouterAwait, {
        resolve: props.resolve,
        errorElement: props.errorElement
    }, props.children)) : /*#__PURE__*/ 0;
}
function getClientLoaderContext(url) {
    // Compatible with browsers do not support URL.
    var patterns = {
        protocol: "(?:([^:/?#]+):)",
        authority: "(?://([^/?#]*))",
        path: "([^?#]*)",
        query: "(\\?[^#]*)",
        hash: "(#.*)"
    };
    var urlRegExp = new RegExp("^".concat(patterns.protocol, "?").concat(patterns.authority, "?").concat(patterns.path).concat(patterns.query, "?").concat(patterns.hash, "?"));
    var urlMatch = urlRegExp.exec(url);
    return urlMatch ? {
        pathname: urlMatch[3] || "",
        query: parseSearch(urlMatch[4] || "")
    } : null;
}
function createRouteLoader(options) {
    var dataLoaderConfig;
    var _options_module = options.module, dataLoader = _options_module.dataLoader, pageConfig = _options_module.pageConfig, staticDataLoader = _options_module.staticDataLoader, serverDataLoader = _options_module.serverDataLoader;
    var defaultRequestContext = options.requestContext, renderMode = options.renderMode, routeId = options.routeId;
    var globalLoader = typeof window !== "undefined" && window.__ICE_DATA_LOADER__ ? window.__ICE_DATA_LOADER__ : null;
    if (false) {}
    if (!dataLoaderConfig) {
        return /*#__PURE__*/ (0,_async_to_generator._)(function() {
            var loaderData;
            return (0,tslib_es6/* __generator */.Jh)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        loaderData = {
                            pageConfig: pageConfig ? pageConfig({}) : {}
                        };
                        if (true) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            updateRoutesConfig(loaderData)
                        ];
                    case 1:
                        _state.sent();
                        _state.label = 2;
                    case 2:
                        return [
                            2,
                            loaderData
                        ];
                }
            });
        });
    }
    // if ICE_CORE_REMOVE_DATA_LOADER is true, dataLoaderConfig should be null and it already return above.
    // dataLoader should be always called in server side because of the serverDataLoader.
    if (false) { var getData, loaderOptions, loader; }
}


/***/ }),

/***/ 51:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ runClientApp; }
});

// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_async_to_generator.js
var _async_to_generator = __webpack_require__(10);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js + 1 modules
var _object_spread = __webpack_require__(975);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var _object_spread_props = __webpack_require__(932);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(582);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/@remix-run/router/dist/router.js
var router = __webpack_require__(262);
// EXTERNAL MODULE: ./node_modules/@ice/runtime/esm/routes.js + 2 modules
var esm_routes = __webpack_require__(665);
;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/singleRouter.js
/**
 * Fake API of react-router-dom, react-router-dom will be remove
 * if user config `optimize.router` false
 */ 



var Context = /*#__PURE__*/ react.createContext(undefined);
Context.displayName = "DataContext";
var DataContextProvider = Context.Provider;
var RouteContext = /*#__PURE__*/ react.createContext({
    outlet: null,
    matches: [],
    routeData: null
});
RouteContext.displayName = "RouteContext";
function useData() {
    var _a;
    var value = React.useContext(RouteContext);
    return (_a = value.routeData) === null || _a === void 0 ? void 0 : _a.data;
}
function useConfig() {
    var _a;
    var value = React.useContext(RouteContext);
    return (_a = value.routeData) === null || _a === void 0 ? void 0 : _a.pageConfig;
}
var OutletContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.createContext(null)));
function useOutlet(context) {
    var outlet = React.useContext(RouteContext).outlet;
    if (outlet) {
        return /*#__PURE__*/ React.createElement(OutletContext.Provider, {
            value: context
        }, outlet);
    }
    return outlet;
}
function useOutletContext() {
    return React.useContext(OutletContext);
}
function Outlet(props) {
    return useOutlet(props.context);
}
function RenderedRoute(param) {
    var routeContext = param.routeContext, children = param.children;
    return /*#__PURE__*/ react.createElement(RouteContext.Provider, {
        value: routeContext
    }, children);
}
var useRoutes = function(routes) {
    return /*#__PURE__*/ React.createElement(React.Fragment, null, routes[0].element);
};
var Router = function(props) {
    return /*#__PURE__*/ React.createElement(React.Fragment, null, props.children);
};
var createHistory = function() {
    return {
        // @ts-expect-error
        listen: function() {},
        // @ts-expect-error
        action: "POP",
        // @ts-expect-error
        location: ""
    };
};
var joinPaths = function(paths) {
    return paths.join("/").replace(/\/\/+/g, "/");
};
var flattenRoutes = function(routes) {
    var branches = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], parentsMeta = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], parentPath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
    var flattenRoute = function(route, index, relativePath) {
        var routeMeta = {
            relativePath: relativePath === undefined ? route.path || "" : relativePath,
            childrenIndex: index,
            route
        };
        if (routeMeta.relativePath.startsWith("/")) {
            if (!routeMeta.relativePath.startsWith(parentPath)) {
                throw new Error('Route path "'.concat(routeMeta.relativePath, '" nested under path "').concat(parentPath, '" is not valid'));
            }
            routeMeta.relativePath = routeMeta.relativePath.slice(parentPath.length);
        }
        var path = joinPaths([
            parentPath,
            routeMeta.relativePath
        ]);
        var routesMeta = parentsMeta.concat(routeMeta);
        if (route.children && route.children.length > 0) {
            if (route.index) {
                throw new Error('Index route should not have children, path "'.concat(path, '"'));
            }
            flattenRoutes(route.children, branches, routesMeta, path);
        }
        if (route.path == null && !route.index) {
            return;
        }
        branches.push({
            path,
            routesMeta
        });
    };
    routes.forEach(function(route, index) {
        var _a;
        if (route.path === "" || !((_a = route.path) === null || _a === void 0 ? void 0 : _a.includes("?"))) {
            flattenRoute(route, index);
        } else {
            throw new Error('Single Route mode do not support path: "'.concat(route.path, '"'));
        }
    });
    return branches;
};
function compilePath(path) {
    var end = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    var regexpSource = "^".concat(path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
    .replace(/^\/*/, "/") // Make sure it has a leading /
    .replace(/[\\.*+^${}|()[\]]/g, "\\$&")); // Escape special regex chars;
    if (end) {
        // When matching to the end, ignore trailing slashes
        regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
        // Keep alignment with react-router:
        // https://github.com/remix-run/react-router/blob/fb0f1f94778f4762989930db209e6a111504aa63/packages/router/utils.ts#L988-L995
        regexpSource += "(?:(?=\\/|$))";
    } else {
    // Nothing to match for "" or "/"
    }
    var matcher = new RegExp(regexpSource, "i");
    return matcher;
}
function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
        pattern = {
            path: pattern,
            end: true
        };
    }
    var matcher = compilePath(pattern.path, pattern.end);
    var match = pathname.match(matcher);
    if (!match) return null;
    var matchedPathname = match[0];
    var pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    return {
        // Params is not supported yet in single route mode.
        params: {},
        pathname: matchedPathname,
        pathnameBase,
        pattern
    };
}
var normalizePathname = function(pathname) {
    return pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
};
var matchRouteBranch = function(branch, pathname) {
    var routesMeta = branch.routesMeta;
    var matchedPathname = "/";
    var matches = [];
    var len = routesMeta.length;
    for(var i = 0; i < len; i++){
        var routeMeta = routesMeta[i];
        var end = i === routesMeta.length - 1;
        var remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        var match = matchPath(// TODO: casesensitive is not support yet.
        {
            path: routeMeta.relativePath,
            end
        }, remainingPathname);
        if (!match) return null;
        var route = routeMeta.route;
        matches.push({
            // TODO: Can this as be avoided?
            params: {},
            pathname: joinPaths([
                matchedPathname,
                match.pathname
            ]),
            pathnameBase: normalizePathname(joinPaths([
                matchedPathname,
                match.pathnameBase
            ])),
            route
        });
        if (match.pathnameBase !== "/") {
            matchedPathname = joinPaths([
                matchedPathname,
                match.pathnameBase
            ]);
        }
    }
    return matches;
};
var stripBasename = function(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
        return null;
    }
    var startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    var nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
        return null;
    }
    return pathname.slice(startIndex) || "/";
};
var matchRoutes = function(routes, location, basename) {
    var pathname = (typeof location === "string" ? location : location.pathname) || "/";
    var stripedPathname = stripBasename(pathname, basename || "/");
    if (!stripedPathname && basename !== "/") {
        // If pathname is not match, we should ignore the basename,
        // in case of the basename is customized.
        stripedPathname = stripBasename(pathname, "/");
    }
    var branches = flattenRoutes(routes);
    if (branches.length === 1) {
        // Just one branch, no need to match.
        return [
            {
                route: routes[0],
                params: {},
                pathname,
                pathnameBase: ""
            }
        ];
    }
    var matches = null;
    for(var i = 0; matches == null && i < branches.length; i++){
        matches = matchRouteBranch(branches[i], stripedPathname);
    }
    if (!matches) {
        console.warn("Single route manifest: ", routes);
        console.warn('Basename "'.concat(basename, '" is not match with pathname "').concat(pathname, '"'));
    }
    return matches;
};
var Link = function() {
    return null;
};
var NavLink = function() {
    return null;
};
var useParams = function() {
    return {};
};
var useSearchParams = function() {
    return [
        {},
        function() {}
    ];
};
var useLocation = function() {
    return {};
};
var useNavigate = function() {
    return {};
};
var useNavigation = function() {
    throw new Error("useNavigation is not supported in single router mode");
};
var useRevalidator = function() {
    throw new Error("useRevalidator is not supported in single router mode");
};
var useAsyncValue = function() {
    throw new Error("useAsyncValue is not supported in single router mode");
};
var getSingleRoute = function() {
    var _ref = (0,_async_to_generator._)(function(routes, basename, location) {
        var routeModuleCache, matchedRoutes, routeModules, loaders, loaderIds, components, routesData, loaderDatas;
        var _arguments = arguments;
        return (0,tslib_es6/* __generator */.Jh)(this, function(_state) {
            switch(_state.label){
                case 0:
                    routeModuleCache = _arguments.length > 3 && _arguments[3] !== void 0 ? _arguments[3] : {};
                    matchedRoutes = matchRoutes(routes, location, basename);
                    return [
                        4,
                        (0,esm_routes/* loadRouteModules */.Hz)(matchedRoutes.map(function(param) {
                            var route = param.route;
                            return route;
                        }), routeModuleCache)
                    ];
                case 1:
                    routeModules = _state.sent();
                    loaders = [];
                    loaderIds = [];
                    components = matchedRoutes.map(function(param) {
                        var route = param.route;
                        var _ref = (routeModules === null || routeModules === void 0 ? void 0 : routeModules[route.id]) || {}, loader = _ref.loader, Component = _ref.Component;
                        if (loader) {
                            loaders.push(loader());
                            loaderIds.push(route.id);
                        }
                        return {
                            Component: Component || route.Component,
                            isDataRoute: !!loader,
                            id: route.id
                        };
                    });
                    routesData = {};
                    return [
                        4,
                        Promise.all(loaders)
                    ];
                case 2:
                    loaderDatas = _state.sent();
                    loaderDatas.forEach(function(data, index) {
                        routesData[loaderIds[index]] = data;
                    });
                    return [
                        2,
                        function() {
                            return components.reduceRight(function(outlet, param) {
                                var Component = param.Component, isDataRoute = param.isDataRoute, id = param.id;
                                return /*#__PURE__*/ react.createElement(RenderedRoute, {
                                    routeContext: {
                                        outlet,
                                        routeData: isDataRoute && routesData[id]
                                    },
                                    children: /*#__PURE__*/ react.createElement(Component, null) || outlet
                                });
                            }, null);
                        }
                    ];
            }
        });
    });
    return function getSingleRoute(routes, basename, location) {
        return _ref.apply(this, arguments);
    };
}();

;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/history.js
// Value of history will be modified after render Router.
var routerHistory = null;
function setHistory(customHistory) {
    routerHistory = customHistory;
}


// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_class_call_check.js
var _class_call_check = __webpack_require__(862);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_create_class.js
var _create_class = __webpack_require__(267);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_without_properties.js + 1 modules
var _object_without_properties = __webpack_require__(210);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(945);
;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/RouteContext.js

function RouteContext_useData() {
    var _a;
    return (_a = (0,dist/* useLoaderData */.f_)()) === null || _a === void 0 ? void 0 : _a.data;
}
function RouteContext_useConfig() {
    var _a;
    return (_a = (0,dist/* useLoaderData */.f_)()) === null || _a === void 0 ? void 0 : _a.pageConfig;
}


// EXTERNAL MODULE: ./node_modules/@ice/runtime/esm/AppContext.js
var AppContext = __webpack_require__(317);
;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/runtime.js











var Runtime = /*#__PURE__*/ function() {
    "use strict";
    function Runtime(appContext, runtimeOptions) {
        var _this = this;
        (0,_class_call_check._)(this, Runtime);
        this.getAppContext = function() {
            return (0,_object_spread_props._)((0,_object_spread._)({}, _this.appContext), {
                RouteWrappers: _this.RouteWrappers
            });
        };
        this.setAppContext = function(appContext) {
            _this.appContext = appContext;
        };
        this.getRender = function() {
            return _this.render;
        };
        this.getWrappers = function() {
            return _this.RouteWrappers;
        };
        this.addProvider = function(Provider) {
            // must promise user's providers are wrapped by the plugins' providers
            _this.AppProvider.unshift(Provider);
        };
        this.setRender = function(render) {
            _this.render = render;
        };
        this.addWrapper = function(Wrapper, forLayout) {
            _this.RouteWrappers.push({
                Wrapper,
                layout: forLayout
            });
        };
        this.setAppRouter = function(AppRouter) {
            _this.AppRouter = AppRouter;
        };
        this.addResponseHandler = function(handler) {
            _this.responseHandlers.push(handler);
        };
        this.getResponseHandlers = function() {
            return _this.responseHandlers;
        };
        this.AppProvider = [];
        this.appContext = appContext;
        this.render = function(container, element) {
            var root = client/* createRoot */.s(container);
            root.render(element);
            return root;
        };
        this.RouteWrappers = [];
        this.runtimeOptions = runtimeOptions;
        this.responseHandlers = [];
        this.getAppRouter = this.getAppRouter.bind(this);
    }
    (0,_create_class._)(Runtime, [
        {
            key: "getAppRouter",
            value: function getAppRouter() {
                return this.AppRouter;
            }
        },
        {
            key: "loadModule",
            value: function loadModule(module) {
                var runtimeAPI = {
                    addProvider: this.addProvider,
                    addResponseHandler: this.addResponseHandler,
                    getResponseHandlers: this.getResponseHandlers,
                    getAppRouter: this.getAppRouter,
                    setRender: this.setRender,
                    addWrapper: this.addWrapper,
                    appContext: this.appContext,
                    setAppRouter: this.setAppRouter,
                    useData:  true ? RouteContext_useData : 0,
                    useConfig:  true ? RouteContext_useConfig : 0,
                    useAppContext: AppContext/* useAppContext */.bp,
                    history: routerHistory
                };
                var runtimeModule = module.default || module;
                if (module) {
                    return runtimeModule(runtimeAPI, this.runtimeOptions);
                }
            }
        },
        {
            key: "composeAppProvider",
            value: function composeAppProvider() {
                if (!this.AppProvider.length) return null;
                return this.AppProvider.reduce(function(ProviderComponent, CurrentProvider) {
                    return function(_param) {
                        var children = _param.children, rest = (0,_object_without_properties._)(_param, [
                            "children"
                        ]);
                        var element = CurrentProvider ? /*#__PURE__*/ react.createElement(CurrentProvider, (0,_object_spread._)({}, rest), children) : children;
                        return /*#__PURE__*/ react.createElement(ProviderComponent, (0,_object_spread._)({}, rest), element);
                    };
                });
            }
        }
    ]);
    return Runtime;
}();
/* harmony default export */ var esm_runtime = (Runtime);

// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_sliced_to_array.js + 1 modules
var _sliced_to_array = __webpack_require__(188);
;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/requestContext.js
/**
 * context for getData both in server and client side.
 */ 

function getRequestContext(location) {
    var serverContext = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _a;
    var pathname = location.pathname, search = location.search;
    // Use query form server context first to avoid unnecessary parsing.
    // @ts-ignore
    var query = ((_a = serverContext === null || serverContext === void 0 ? void 0 : serverContext.req) === null || _a === void 0 ? void 0 : _a.query) || parseSearch(search);
    var requestContext = (0,_object_spread_props._)((0,_object_spread._)({}, serverContext || {}), {
        pathname,
        query
    });
    return requestContext;
}
/**
 * Search string to object
 * URLSearchParams is not compatible with iOS9 and IE.
 */ function parseSearch(search) {
    // remove first '?'
    if (search.indexOf("?") === 0) {
        search = search.slice(1);
    }
    var result = {};
    var pairs = search.split("&");
    for(var j = 0; j < pairs.length; j++){
        var value = pairs[j];
        var index = value.indexOf("=");
        if (index > -1) {
            var k = value.slice(0, index);
            var v = value.slice(index + 1);
            result[k] = v;
        } else if (value) {
            result[value] = "";
        }
    }
    return result;
}

;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/dataLoader.js




function defineDataLoader(dataLoader, options) {
    return {
        loader: dataLoader,
        options
    };
}
function defineServerDataLoader(dataLoader, options) {
    return {
        loader: dataLoader,
        options
    };
}
function defineStaticDataLoader(dataLoader) {
    return {
        loader: dataLoader
    };
}
/**
 * Custom fetcher for load static data loader config.
 * Set globally to avoid passing this fetcher too deep.
 */ var dataLoaderFetcher;
function setFetcher(customFetcher) {
    dataLoaderFetcher = customFetcher;
}
/**
 * Custom decorator for deal with data loader.
 */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
var dataLoaderDecorator = function(dataLoader, id) {
    return dataLoader;
};
function setDecorator(customDecorator) {
    dataLoaderDecorator = customDecorator;
}
/**
 * Parse template for static dataLoader.
 */ function parseTemplate(config) {
    var queryParams = {};
    var getQueryParams = function() {
        if (Object.keys(queryParams).length === 0) {
            if (location.search.includes("?")) {
                location.search.substring(1).split("&").forEach(function(query) {
                    var res = query.split("=");
                    // ?test=1&hello=world
                    if (res[0] !== undefined && res[1] !== undefined) {
                        queryParams[res[0]] = res[1];
                    }
                });
            }
        }
        return queryParams;
    };
    var cookie = {};
    var getCookie = function() {
        if (Object.keys(cookie).length === 0) {
            document.cookie.split(";").forEach(function(c) {
                var _c_split = (0,_sliced_to_array._)(c.split("="), 2), key = _c_split[0], value = _c_split[1];
                if (key !== undefined && value !== undefined) {
                    cookie[key.trim()] = value.trim();
                }
            });
        }
        return cookie;
    };
    // Match all template of query cookie and storage.
    var strConfig = JSON.stringify(config) || "";
    var regexp = /\$\{(queryParams|cookie|storage)(\.(\w|-)+)?}/g;
    var cap = [];
    var matched = [];
    while((cap = regexp.exec(strConfig)) !== null){
        matched.push(cap);
    }
    matched.forEach(function(item) {
        var _item = (0,_sliced_to_array._)(item, 3), origin = _item[0], key = _item[1], value = _item[2];
        if (item && origin && key && value && value.startsWith(".")) {
            if (key === "queryParams") {
                // Replace query params.
                strConfig = strConfig.replace(origin, getQueryParams()[value.substring(1)] || "");
            } else if (key === "cookie") {
                // Replace cookie.
                strConfig = strConfig.replace(origin, getCookie()[value.substring(1)] || "");
            } else if (key === "storage") {
                // Replace storage.
                strConfig = strConfig.replace(origin, localStorage.getItem(value.substring(1)) || "");
            }
        }
    });
    // Replace url.
    strConfig = strConfig.replace("${url}", location.href);
    return JSON.parse(strConfig);
}
function loadDataByCustomFetcher(config) {
    var parsedConfig = config;
    try {
        // Not parse template in SSG/SSR.
        if (true) {
            parsedConfig = parseTemplate(config);
        }
    } catch (error) {
        console.error("parse template error: ", error);
    }
    return dataLoaderFetcher(parsedConfig);
}
/**
 * Handle for different dataLoader.
 */ function callDataLoader(dataLoader, requestContext) {
    if (Array.isArray(dataLoader)) {
        var loaders = dataLoader.map(function(loader, index) {
            return typeof loader === "object" ? loadDataByCustomFetcher(loader) : dataLoaderDecorator(loader, index)(requestContext);
        });
        return loaders;
    }
    if (typeof dataLoader === "object") {
        return loadDataByCustomFetcher(dataLoader);
    }
    return dataLoaderDecorator(dataLoader)(requestContext);
}
var cache = new Map();
/**
 * Start getData once data-loader.js is ready in client, and set to cache.
 */ function loadInitialDataInClient(loaders) {
    var context = window.__ICE_APP_CONTEXT__ || {};
    var matchedIds = context.matchedIds || [];
    var loaderData = context.loaderData || {};
    var renderMode = context.renderMode;
    var ids = [
        "__app"
    ].concat(matchedIds);
    ids.forEach(function(id) {
        var _a;
        var dataFromSSR = (_a = loaderData[id]) === null || _a === void 0 ? void 0 : _a.data;
        if (dataFromSSR) {
            cache.set(renderMode === "SSG" ? "".concat(id, "_ssg") : id, {
                value: dataFromSSR
            });
            if (renderMode === "SSR") {
                return;
            }
        }
        var dataLoaderConfig = loaders[id];
        if (dataLoaderConfig) {
            var requestContext = getRequestContext(window.location);
            var loader = dataLoaderConfig.loader;
            var promise = callDataLoader(loader, requestContext);
            cache.set(id, {
                value: promise
            });
        }
    });
}
function init(loaders, options) {
    return _init.apply(this, arguments);
}
function _init() {
    _init = /**
 * Init data loader in client side.
 * Load initial data and register global loader.
 * In order to load data, JavaScript modules, CSS and other assets in parallel.
 */ (0,_async_to_generator._)(function(loaders, options) {
        var fetcher, decorator, runtimeModules, appExport, runtimeApi;
        return (0,tslib_es6/* __generator */.Jh)(this, function(_state) {
            switch(_state.label){
                case 0:
                    fetcher = options.fetcher, decorator = options.decorator, runtimeModules = options.runtimeModules, appExport = options.appExport;
                    runtimeApi = {
                        appContext: {
                            appExport
                        }
                    };
                    if (!runtimeModules) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        Promise.all(runtimeModules.map(function(module) {
                            var runtimeModule = module.default || module;
                            return runtimeModule(runtimeApi);
                        }).filter(Boolean))
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    if (fetcher) {
                        setFetcher(fetcher);
                    }
                    if (decorator) {
                        setDecorator(decorator);
                    }
                    try {
                        loadInitialDataInClient(loaders);
                    } catch (error) {
                        console.error("Load initial data error: ", error);
                    }
                    window.__ICE_DATA_LOADER__ = {
                        getLoader: function(id) {
                            return loaders[id];
                        },
                        getData: function(id, options) {
                            var result;
                            // First render for ssg use data from build time, second render for ssg will use data from data loader.
                            var cacheKey = "".concat(id).concat((options === null || options === void 0 ? void 0 : options.renderMode) === "SSG" ? "_ssg" : "");
                            // In CSR, all dataLoader is called by global data loader to avoid bundle dataLoader in page bundle duplicate.
                            result = cache.get(cacheKey);
                            // Always fetch new data after cache is been used.
                            cache.delete(cacheKey);
                            // Already send data request.
                            if (result) {
                                return result.value;
                            }
                            var dataLoaderConfig = loaders[id];
                            // No data loader.
                            if (!dataLoaderConfig) {
                                return null;
                            }
                            // Call dataLoader.
                            var loader = dataLoaderConfig.loader;
                            return callDataLoader(loader, (options === null || options === void 0 ? void 0 : options.requestContext) || getRequestContext(window.location));
                        }
                    };
                    return [
                        2
                    ];
            }
        });
    });
    return _init.apply(this, arguments);
}
var dataLoader = {
    init
};
/* harmony default export */ var esm_dataLoader = ((/* unused pure expression or super */ null && (dataLoader)));

;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/appData.js



function getAppData(appExport, requestContext) {
    return _getAppData.apply(this, arguments);
}
function _getAppData() {
    _getAppData = /**
 * Call the getData of app config.
 */ (0,_async_to_generator._)(function(appExport, requestContext) {
        var hasGlobalLoader, globalLoader, appDataLoaderConfig, loader;
        return (0,tslib_es6/* __generator */.Jh)(this, function(_state) {
            switch(_state.label){
                case 0:
                    hasGlobalLoader = typeof window !== "undefined" && window.__ICE_DATA_LOADER__;
                    globalLoader = hasGlobalLoader ? window.__ICE_DATA_LOADER__ : null;
                    if (!globalLoader) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        globalLoader.getData("__app")
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
                case 2:
                    appDataLoaderConfig = appExport === null || appExport === void 0 ? void 0 : appExport.dataLoader;
                    if (!appDataLoaderConfig) {
                        return [
                            2,
                            null
                        ];
                    }
                    if (true) return [
                        3,
                        4
                    ];
                    if (typeof appDataLoaderConfig === "function" || Array.isArray(appDataLoaderConfig)) {
                        loader = appDataLoaderConfig;
                    } else {
                        loader = appDataLoaderConfig.loader;
                    }
                    return [
                        4,
                        callDataLoader(loader, requestContext)
                    ];
                case 3:
                    return [
                        2,
                        _state.sent()
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _getAppData.apply(this, arguments);
}


// EXTERNAL MODULE: ./node_modules/@ice/runtime/esm/appConfig.js
var esm_appConfig = __webpack_require__(808);
;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/matchRoutes.js


function matchRoutes_matchRoutes(routes, location, basename) {
    var matchRoutesFn =  true ? router/* matchRoutes */.fp : 0;
    var matches = matchRoutesFn(routes, location, basename);
    if (!matches) return [];
    return matches.map(function(param) {
        var params = param.params, pathname = param.pathname, pathnameBase = param.pathnameBase, route = param.route;
        return {
            params,
            pathname,
            route: route,
            pathnameBase
        };
    });
}

// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(507);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_inherits.js
var _inherits = __webpack_require__(7);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_create_super.js + 3 modules
var _create_super = __webpack_require__(502);
;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/AppErrorBoundary.js





var AppErrorBoundary = /*#__PURE__*/ function(_React_Component) {
    "use strict";
    (0,_inherits._)(AppErrorBoundary, _React_Component);
    var _super = (0,_create_super._)(AppErrorBoundary);
    function AppErrorBoundary() {
        (0,_class_call_check._)(this, AppErrorBoundary);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.state = {
            error: null
        };
        return _this;
    }
    (0,_create_class._)(AppErrorBoundary, [
        {
            key: "componentDidCatch",
            value: function componentDidCatch(error, errorInfo) {
                console.error("AppErrorBoundary", error, errorInfo);
            }
        },
        {
            key: "render",
            value: function render() {
                if (this.state.error) {
                    // TODO: Show the error message and the error stack.
                    return /*#__PURE__*/ react.createElement("h1", null, "Something went wrong.");
                }
                return this.props.children;
            }
        }
    ], [
        {
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(error) {
                return {
                    error
                };
            }
        }
    ]);
    return AppErrorBoundary;
}(react.Component);


;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/App.js



function App(param) {
    var children = param.children;
    var appConfig = (0,AppContext/* useAppContext */.bp)().appConfig;
    var _appConfig_app = appConfig.app, strict = _appConfig_app.strict, errorBoundary = _appConfig_app.errorBoundary;
    var StrictMode = strict ? react.StrictMode : react.Fragment;
    var ErrorBoundary = errorBoundary ? AppErrorBoundary : react.Fragment;
    return /*#__PURE__*/ react.createElement(StrictMode, null, /*#__PURE__*/ react.createElement(ErrorBoundary, null, children));
}

;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/utils/deprecatedHistory.js

var disableWarning = false;
function disableHistoryWarning() {
    disableWarning = true;
}
function deprecatedHistory(history) {
    var originHistory = (0,_object_spread._)({}, history);
    var deprecatedMessage = "history.push and history.replace is not recommended to use outside of react component. The usage will be deprecated in the next minor version.";
    history.push = function(to, state) {
        if (!disableWarning) {
            console.warn(deprecatedMessage);
        }
        originHistory.push(to, state);
    };
    history.replace = function(to, state) {
        if (!disableWarning) {
            console.warn(deprecatedMessage);
        }
        originHistory.replace(to, state);
    };
    return history;
}

;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/ClientRouter.js








function createRouterHistory(history, router) {
    var routerHistory = history;
    routerHistory.push = function(to, state) {
        router.navigate(to, {
            replace: false,
            state
        });
    };
    routerHistory.replace = function(to, state) {
        router.navigate(to, {
            replace: true,
            state
        });
    };
    routerHistory.go = function(delta) {
        router.navigate(delta);
    };
    return routerHistory;
}
var ClientRouter_router = null;
function ClientRouter(props) {
    var clearRouter = function clearRouter() {
        if (ClientRouter_router) {
            ClientRouter_router.dispose();
            ClientRouter_router = null;
        }
    };
    var Component = props.Component, routerContext = props.routerContext;
    var revalidate = (0,AppContext/* useAppContext */.bp)().revalidate;
    // API createRouter only needs to be called once, and create before mount.
    if (true) {
        // Clear router before re-create in case of hot module replacement.
        clearRouter();
        // @ts-expect-error routes type should be AgnosticBaseRouteObject[]
        ClientRouter_router = (0,router/* createRouter */.p7)(routerContext).initialize();
        disableHistoryWarning();
        // Replace history methods by router navigate for backwards compatibility.
        setHistory(createRouterHistory((0,_object_spread._)({}, routerContext.history), ClientRouter_router));
    }
    (0,react.useEffect)(function() {
        if (revalidate) {
            // Revalidate after render for SSG while staticDataLoader and dataLoader both defined.
            ClientRouter_router === null || ClientRouter_router === void 0 ? void 0 : ClientRouter_router.revalidate();
        }
        return function() {
            // In case of micro app, ClientRouter will be unmounted,
            // duspose router before mount again.
            clearRouter();
        };
    }, [
        revalidate
    ]);
    var element;
    if (true) {
        element = /*#__PURE__*/ react.createElement(react_router_dom_dist/* RouterProvider */.pG, {
            router: ClientRouter_router,
            fallbackElement: null
        });
    } else {}
    return /*#__PURE__*/ react.createElement(App, null, element);
}
/* harmony default export */ var esm_ClientRouter = (ClientRouter);

;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/utils/addLeadingSlash.js
var addLeadingSlash = function() {
    var url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return url.charAt(0) === "/" ? url : "/".concat(url);
};
/* harmony default export */ var utils_addLeadingSlash = (addLeadingSlash);

;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/reportRecoverableError.js
function isRuntimeWarning(error) {
    return error instanceof Error ? [
        "This Suspense boundary received an update before it finished hydrating."
    ].some(function(message) {
        var _a;
        return (_a = error === null || error === void 0 ? void 0 : error.message) === null || _a === void 0 ? void 0 : _a.includes(message);
    }) : false;
}
var defaultOnRecoverableError = typeof reportError === "function" ? reportError : function defaultOnRecoverableError(error) {
    console["error"](error);
};
var reportRecoverableError = function(error, errorStack, options) {
    var ignoreError = (options === null || options === void 0 ? void 0 : options.ignoreRuntimeWarning) && isRuntimeWarning(error);
    if (!ignoreError) {
        if (true) {
            // Report error stack in production by default.
            if ((errorStack === null || errorStack === void 0 ? void 0 : errorStack.componentStack) && error instanceof Error) {
                var detailError = new Error(error.message);
                detailError.name = error.name;
                detailError.stack = "".concat(error.name, ": ").concat(error.message).concat(errorStack.componentStack);
                defaultOnRecoverableError(detailError);
                return;
            }
        }
        // Fallback to default error handler.
        defaultOnRecoverableError(error);
    }
};
/* harmony default export */ var esm_reportRecoverableError = (reportRecoverableError);

;// CONCATENATED MODULE: ./node_modules/@ice/runtime/esm/runClientApp.js





















function runClientApp(options) {
    return _runClientApp.apply(this, arguments);
}
function _runClientApp() {
    _runClientApp = (0,_async_to_generator._)(function(options) {
        var app, createRoutes, runtimeModules, basename, hydrate, memoryRouter, runtimeOptions, dataLoaderFetcher, dataLoaderDecorator, windowContext, assetsManifest, appData, loaderData, routePath, downgrade, documentOnly, renderMode, serverData, revalidate, formattedBasename, requestContext, appConfig, routes, historyOptions, history, appContext, runtime, needHydrate;
        return (0,tslib_es6/* __generator */.Jh)(this, function(_state) {
            switch(_state.label){
                case 0:
                    app = options.app, createRoutes = options.createRoutes, runtimeModules = options.runtimeModules, basename = options.basename, hydrate = options.hydrate, memoryRouter = options.memoryRouter, runtimeOptions = options.runtimeOptions, dataLoaderFetcher = options.dataLoaderFetcher, dataLoaderDecorator = options.dataLoaderDecorator;
                    windowContext = window.__ICE_APP_CONTEXT__ || {};
                    assetsManifest = window.__ICE_ASSETS_MANIFEST__ || {};
                    appData = windowContext.appData, loaderData = windowContext.loaderData, routePath = windowContext.routePath, downgrade = windowContext.downgrade, documentOnly = windowContext.documentOnly, renderMode = windowContext.renderMode, serverData = windowContext.serverData, revalidate = windowContext.revalidate;
                    formattedBasename = utils_addLeadingSlash(basename);
                    requestContext = getRequestContext(window.location);
                    appConfig = (0,esm_appConfig/* default */.Z)(app);
                    routes = createRoutes ? createRoutes({
                        requestContext,
                        renderMode: "CSR"
                    }) : [];
                    historyOptions = {
                        memoryRouter,
                        initialEntry: routePath,
                        routes
                    };
                    history = runClientApp_createHistory(appConfig, historyOptions);
                    // Set history for import it from ice.
                    setHistory(deprecatedHistory(history));
                    appContext = {
                        appExport: app,
                        routes,
                        appConfig,
                        appData,
                        loaderData,
                        assetsManifest,
                        basename: formattedBasename,
                        routePath,
                        renderMode,
                        requestContext,
                        serverData,
                        revalidate
                    };
                    runtime = new esm_runtime(appContext, runtimeOptions);
                    runtime.setAppRouter(esm_ClientRouter);
                    if (!runtimeModules.statics) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        Promise.all(runtimeModules.statics.map(function(m) {
                            return runtime.loadModule(m);
                        }).filter(Boolean))
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    if (false) {}
                    if (!!appData) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        getAppData(app, requestContext)
                    ];
                case 3:
                    appData = _state.sent();
                    _state.label = 4;
                case 4:
                    needHydrate = hydrate && !downgrade && !documentOnly;
                    if (needHydrate) {
                        runtime.setRender(function(container, element) {
                            var _a, _b, _c;
                            var hydrateOptions = {
                                // @ts-ignore react-dom do not define the type of second argument of onRecoverableError.
                                onRecoverableError: ((_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.app) === null || _a === void 0 ? void 0 : _a.onRecoverableError) || function(error, errorInfo) {
                                    esm_reportRecoverableError(error, errorInfo, {
                                        ignoreRuntimeWarning: revalidate
                                    });
                                }
                            };
                            if ((_b = appConfig === null || appConfig === void 0 ? void 0 : appConfig.app) === null || _b === void 0 ? void 0 : _b.onBeforeHydrate) {
                                (_c = appConfig === null || appConfig === void 0 ? void 0 : appConfig.app) === null || _c === void 0 ? void 0 : _c.onBeforeHydrate();
                            }
                            return client/* hydrateRoot */.a(container, element, hydrateOptions);
                        });
                    }
                    // Reset app context after app context is updated.
                    runtime.setAppContext((0,_object_spread_props._)((0,_object_spread._)({}, appContext), {
                        appData
                    }));
                    if (!runtimeModules.commons) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        Promise.all(runtimeModules.commons.map(function(m) {
                            return runtime.loadModule(m);
                        }).filter(Boolean))
                    ];
                case 5:
                    _state.sent();
                    _state.label = 6;
                case 6:
                    return [
                        2,
                        render({
                            runtime,
                            history,
                            needHydrate
                        })
                    ];
            }
        });
    });
    return _runClientApp.apply(this, arguments);
}
function render(_) {
    return _render.apply(this, arguments);
}
function _render() {
    _render = (0,_async_to_generator._)(function(param) {
        var history, runtime, needHydrate, appContext, appConfig, loaderData, routes, basename, routePath, appRender, AppRuntimeProvider, AppRouter, rootId, root, hydrationData, routeModuleCache, location, lazyMatches, routerOptions, SingleComponent, _tmp, renderRoot;
        return (0,tslib_es6/* __generator */.Jh)(this, function(_state) {
            switch(_state.label){
                case 0:
                    history = param.history, runtime = param.runtime, needHydrate = param.needHydrate;
                    appContext = runtime.getAppContext();
                    appConfig = appContext.appConfig, loaderData = appContext.loaderData, routes = appContext.routes, basename = appContext.basename, routePath = appContext.routePath;
                    appRender = runtime.getRender();
                    AppRuntimeProvider = runtime.composeAppProvider() || react.Fragment;
                    AppRouter = runtime.getAppRouter();
                    rootId = appConfig.app.rootId || "app";
                    root = document.getElementById(rootId);
                    if (!root) {
                        root = document.createElement("div");
                        root.id = rootId;
                        document.body.appendChild(root);
                        console.warn("Root node #".concat(rootId, " is not found, current root is automatically created by the framework."));
                    }
                    hydrationData = needHydrate ? {
                        loaderData
                    } : undefined;
                    routeModuleCache = {};
                    location = history.location ? history.location : {
                        pathname: routePath || window.location.pathname
                    };
                    if (!needHydrate) return [
                        3,
                        2
                    ];
                    lazyMatches = matchRoutes_matchRoutes(routes, location, basename).filter(function(m) {
                        return m.route.lazy;
                    });
                    if (!((lazyMatches === null || lazyMatches === void 0 ? void 0 : lazyMatches.length) > 0)) return [
                        3,
                        2
                    ];
                    // Load the lazy matches and update the routes before creating your router
                    // so we can hydrate the SSR-rendered content synchronously.
                    return [
                        4,
                        Promise.all(lazyMatches.map(function() {
                            var _ref = (0,_async_to_generator._)(function(m) {
                                var routeModule;
                                return (0,tslib_es6/* __generator */.Jh)(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                (0,esm_routes/* loadRouteModule */.op)(m.route, routeModuleCache)
                                            ];
                                        case 1:
                                            routeModule = _state.sent();
                                            Object.assign(m.route, (0,_object_spread_props._)((0,_object_spread._)({}, routeModule), {
                                                lazy: undefined
                                            }));
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(m) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    routerOptions = {
                        basename,
                        routes,
                        history,
                        hydrationData,
                        future: {
                            v7_prependBasename: true
                        }
                    };
                    _tmp = "true" !== "true";
                    if (!_tmp) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        getSingleRoute(routes, basename, location, routeModuleCache)
                    ];
                case 3:
                    _tmp = _state.sent();
                    _state.label = 4;
                case 4:
                    SingleComponent = _tmp;
                    renderRoot = appRender(root, /*#__PURE__*/ react.createElement(AppContext/* AppContextProvider */.iz, {
                        value: appContext
                    }, /*#__PURE__*/ react.createElement(AppRuntimeProvider, null, /*#__PURE__*/ react.createElement(AppRouter, {
                        routerContext: routerOptions,
                        routes: routes,
                        location: history.location,
                        Component: SingleComponent
                    }))));
                    return [
                        2,
                        renderRoot
                    ];
            }
        });
    });
    return _render.apply(this, arguments);
}
function runClientApp_createHistory(appConfig, param) {
    var memoryRouter = param.memoryRouter, initialEntry = param.initialEntry, routes = param.routes;
    var _a, _b, _c;
    var routerType = memoryRouter ? "memory" : (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.router) === null || _a === void 0 ? void 0 : _a.type;
    var createHistory =  true ? runClientApp_createRouterHistory((_b = appConfig === null || appConfig === void 0 ? void 0 : appConfig.router) === null || _b === void 0 ? void 0 : _b.type, memoryRouter) : 0;
    var createHistoryOptions = {
        window
    };
    if (routerType === "memory") {
        var memoryOptions = {};
        memoryOptions.initialEntries = ((_c = appConfig === null || appConfig === void 0 ? void 0 : appConfig.router) === null || _c === void 0 ? void 0 : _c.initialEntries) || (0,esm_routes/* getRoutesPath */.Y7)(routes);
        if (initialEntry) {
            var initialIndex = memoryOptions.initialEntries.findIndex(function(entry) {
                return typeof entry === "string" && entry === initialEntry;
            });
            if (initialIndex >= 0) {
                memoryOptions.initialIndex = initialIndex;
            } else {
                console.error("path: ".concat(initialEntry, " do not match any initialEntries ").concat(memoryOptions.initialEntries));
            }
        }
        createHistoryOptions = memoryOptions;
    }
    var history = createHistory(createHistoryOptions);
    return history;
}
function runClientApp_createRouterHistory(type, memoryRouter) {
    if (memoryRouter || type === "memory") {
        return router/* createMemoryHistory */.PP;
    }
    if (type === "browser") {
        return router/* createBrowserHistory */.lX;
    }
    if (type === "hash") {
        return router/* createHashHistory */.q_;
    }
}


/***/ }),

/***/ 33:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _array_like_to_array; }
/* harmony export */ });
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
}



/***/ }),

/***/ 769:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _array_with_holes; }
/* harmony export */ });
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}



/***/ }),

/***/ 10:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _async_to_generator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;

        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
        });
    };
}



/***/ }),

/***/ 862:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _class_call_check; }
/* harmony export */ });
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}



/***/ }),

/***/ 267:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _create_class; }
/* harmony export */ });
function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;

        if ("value" in descriptor) descriptor.writable = true;

        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);

    return Constructor;
}



/***/ }),

/***/ 502:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: function() { return /* binding */ _create_super; }
});

// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_get_prototype_of.js
var _get_prototype_of = __webpack_require__(165);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_is_native_reflect_construct.js
var _is_native_reflect_construct = __webpack_require__(564);
;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_assert_this_initialized.js
function _assert_this_initialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");

    return self;
}


;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_type_of.js
function _type_of(obj) {
    "@swc/helpers - typeof";

    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}


;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_possible_constructor_return.js



function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) return call;

    return _assert_this_initialized(self);
}


;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_create_super.js




function _create_super(Derived) {
    var hasNativeReflectConstruct = (0,_is_native_reflect_construct._)();

    return function _createSuperInternal() {
        var Super = (0,_get_prototype_of._)(Derived), result;

        if (hasNativeReflectConstruct) {
            var NewTarget = (0,_get_prototype_of._)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }

        return _possible_constructor_return(this, result);
    };
}



/***/ }),

/***/ 165:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _get_prototype_of; }
/* harmony export */ });
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };

    return _get_prototype_of(o);
}



/***/ }),

/***/ 7:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(840);


function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });

    if (superClass) (0,_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__._)(subClass, superClass);
}



/***/ }),

/***/ 564:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _is_native_reflect_construct; }
/* harmony export */ });
function _is_native_reflect_construct() {
    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
        // If the internal slots aren't set, this throws an error similar to
        //   TypeError: this is not a Boolean object.
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}




/***/ }),

/***/ 439:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _iterable_to_array; }
/* harmony export */ });
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) {
        return Array.from(iter);
    }
}



/***/ }),

/***/ 276:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _non_iterable_rest; }
/* harmony export */ });
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}



/***/ }),

/***/ 975:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: function() { return /* binding */ _object_spread; }
});

;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_define_property.js
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else obj[key] = value;

    return obj;
}


;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js


function _object_spread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                })
            );
        }

        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }

    return target;
}



/***/ }),

/***/ 932:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _object_spread_props; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }

    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};

    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }

    return target;
}



/***/ }),

/***/ 210:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: function() { return /* binding */ _object_without_properties; }
});

;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_object_without_properties_loose.js
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }

    return target;
}


;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_object_without_properties.js


function _object_without_properties(source, excluded) {
    if (source == null) return {};

    var target = _object_without_properties_loose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }

    return target;
}



/***/ }),

/***/ 840:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _set_prototype_of; }
/* harmony export */ });
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;

        return o;
    };

    return _set_prototype_of(o, p);
}



/***/ }),

/***/ 188:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: function() { return /* binding */ _sliced_to_array; }
});

// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_array_with_holes.js
var _array_with_holes = __webpack_require__(769);
;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_iterable_to_array_limit.js
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;

    try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally {
            if (_d) throw _e;
        }
    }

    return _arr;
}


// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_non_iterable_rest.js
var _non_iterable_rest = __webpack_require__(276);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js
var _unsupported_iterable_to_array = __webpack_require__(270);
;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_sliced_to_array.js





function _sliced_to_array(arr, i) {
    return (0,_array_with_holes._)(arr) || _iterable_to_array_limit(arr, i) || (0,_unsupported_iterable_to_array._)(arr, i) || (0,_non_iterable_rest._)();
}



/***/ }),

/***/ 640:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _to_array; }
/* harmony export */ });
/* harmony import */ var _array_with_holes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(769);
/* harmony import */ var _iterable_to_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(439);
/* harmony import */ var _non_iterable_rest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(276);
/* harmony import */ var _unsupported_iterable_to_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(270);





function _to_array(arr) {
    return (0,_array_with_holes_js__WEBPACK_IMPORTED_MODULE_0__._)(arr) || (0,_iterable_to_array_js__WEBPACK_IMPORTED_MODULE_1__._)(arr) || (0,_unsupported_iterable_to_array_js__WEBPACK_IMPORTED_MODULE_2__._)(arr) || (0,_non_iterable_rest_js__WEBPACK_IMPORTED_MODULE_3__._)();
}



/***/ }),

/***/ 912:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: function() { return /* binding */ _to_consumable_array; }
});

// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_array_like_to_array.js
var _array_like_to_array = __webpack_require__(33);
;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_array_without_holes.js


function _array_without_holes(arr) {
    if (Array.isArray(arr)) return (0,_array_like_to_array._)(arr);
}


// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_iterable_to_array.js
var _iterable_to_array = __webpack_require__(439);
;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_non_iterable_spread.js
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js
var _unsupported_iterable_to_array = __webpack_require__(270);
;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_to_consumable_array.js





function _to_consumable_array(arr) {
    return _array_without_holes(arr) || (0,_iterable_to_array._)(arr) || (0,_unsupported_iterable_to_array._)(arr) || _non_iterable_spread();
}



/***/ }),

/***/ 270:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ _unsupported_iterable_to_array; }
/* harmony export */ });
/* harmony import */ var _array_like_to_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);


function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0,_array_like_to_array_js__WEBPACK_IMPORTED_MODULE_0__._)(o, minLen);

    var n = Object.prototype.toString.call(o).slice(8, -1);

    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_array_like_to_array_js__WEBPACK_IMPORTED_MODULE_0__._)(o, minLen);
}



/***/ }),

/***/ 234:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: function() { return /* binding */ _wrap_native_super; }
});

// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_is_native_reflect_construct.js
var _is_native_reflect_construct = __webpack_require__(564);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_set_prototype_of.js
var _set_prototype_of = __webpack_require__(840);
;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_construct.js


function _construct(Parent, args, Class) {
    if ((0,_is_native_reflect_construct._)()) _construct = Reflect.construct;
    else {
        _construct = function construct(Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();

            if (Class) (0,_set_prototype_of._)(instance, Class.prototype);

            return instance;
        };
    }

    return _construct.apply(null, arguments);
}


// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_get_prototype_of.js
var _get_prototype_of = __webpack_require__(165);
;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_is_native_function.js
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}


;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_wrap_native_super.js





function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }

        function Wrapper() {
            return _construct(Class, arguments, (0,_get_prototype_of._)(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });

        return (0,_set_prototype_of._)(Wrapper, Class);
    };

    return _wrap_native_super(Class);
}



/***/ }),

/***/ 582:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jh: function() { return /* binding */ __generator; },
/* harmony export */   XA: function() { return /* binding */ __values; }
/* harmony export */ });
/* unused harmony exports __extends, __assign, __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __createBinding, __exportStar, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension */
/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

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
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
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

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
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

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
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

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ })

}]);