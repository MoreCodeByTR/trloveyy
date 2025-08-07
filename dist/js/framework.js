window.__ICE_ASSETS_MANIFEST__={
  "publicPath": "/",
  "entries": {
    "main": [
      "js/framework.js",
      "js/59.js",
      "css/main.css",
      "js/main.js"
    ]
  },
  "pages": {
    "index": [
      "css/p_index.css",
      "js/p_index.js"
    ]
  },
  "assets": {
    "src/assets/image.png": "e0620240"
  }
};
"use strict";
(self["webpackChunk_ice_lite_scaffold"] = self["webpackChunk_ice_lite_scaffold"] || []).push([[774],{

/***/ 262:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J0: function() { return /* binding */ invariant; },
/* harmony export */   PP: function() { return /* binding */ createMemoryHistory; },
/* harmony export */   RQ: function() { return /* binding */ joinPaths; },
/* harmony export */   WK: function() { return /* binding */ isRouteErrorResponse; },
/* harmony export */   X3: function() { return /* binding */ AbortedDeferredError; },
/* harmony export */   Zn: function() { return /* binding */ stripBasename; },
/* harmony export */   aU: function() { return /* binding */ Action; },
/* harmony export */   cP: function() { return /* binding */ parsePath; },
/* harmony export */   fp: function() { return /* binding */ matchRoutes; },
/* harmony export */   lX: function() { return /* binding */ createBrowserHistory; },
/* harmony export */   p7: function() { return /* binding */ createRouter; },
/* harmony export */   q_: function() { return /* binding */ createHashHistory; }
/* harmony export */ });
/* unused harmony exports IDLE_BLOCKER, IDLE_FETCHER, IDLE_NAVIGATION, UNSAFE_DEFERRED_SYMBOL, UNSAFE_DeferredData, UNSAFE_ErrorResponseImpl, UNSAFE_convertRouteMatchToUiMatch, UNSAFE_convertRoutesToDataRoutes, UNSAFE_getResolveToMatches, UNSAFE_warning, createPath, createStaticHandler, defer, generatePath, getStaticContextFromError, getToPathname, isDeferredData, json, matchPath, normalizePathname, redirect, redirectDocument, resolvePath, resolveTo */
/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(862);
/* harmony import */ var _swc_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(188);
/* harmony import */ var _swc_helpers_to_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(640);
/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(912);
/* harmony import */ var _swc_helpers_wrap_native_super__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(234);
/* harmony import */ var _swc_helpers_create_super__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(502);
/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(582);
/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 










function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function _extends(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */ var Action;
(function(Action) {
    /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */ Action["Pop"] = "POP";
    /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */ Action["Push"] = "PUSH";
    /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */ Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
var PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */ function createMemoryHistory(options) {
    var clampIndex = function clampIndex(n) {
        return Math.min(Math.max(n, 0), entries.length - 1);
    };
    var getCurrentLocation = function getCurrentLocation() {
        return entries[index];
    };
    var createMemoryLocation = function createMemoryLocation(to, state, key) {
        if (state === void 0) {
            state = null;
        }
        var location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
        warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
        return location;
    };
    var createHref = function createHref(to) {
        return typeof to === "string" ? to : createPath(to);
    };
    if (options === void 0) {
        options = {};
    }
    var _options_initialEntries = options.initialEntries, initialEntries = _options_initialEntries === void 0 ? [
        "/"
    ] : _options_initialEntries, initialIndex = options.initialIndex, _options_v5Compat = options.v5Compat, v5Compat = _options_v5Compat === void 0 ? false : _options_v5Compat;
    var entries; // Declare so we can access from createMemoryLocation
    entries = initialEntries.map(function(entry, index) {
        return createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined);
    });
    var index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
    var action = Action.Pop;
    var listener = null;
    var history = {
        get index () {
            return index;
        },
        get action () {
            return action;
        },
        get location () {
            return getCurrentLocation();
        },
        createHref,
        createURL (to) {
            return new URL(createHref(to), "http://localhost");
        },
        encodeLocation (to) {
            var path = typeof to === "string" ? parsePath(to) : to;
            return {
                pathname: path.pathname || "",
                search: path.search || "",
                hash: path.hash || ""
            };
        },
        push (to, state) {
            action = Action.Push;
            var nextLocation = createMemoryLocation(to, state);
            index += 1;
            entries.splice(index, entries.length, nextLocation);
            if (v5Compat && listener) {
                listener({
                    action,
                    location: nextLocation,
                    delta: 1
                });
            }
        },
        replace (to, state) {
            action = Action.Replace;
            var nextLocation = createMemoryLocation(to, state);
            entries[index] = nextLocation;
            if (v5Compat && listener) {
                listener({
                    action,
                    location: nextLocation,
                    delta: 0
                });
            }
        },
        go (delta) {
            action = Action.Pop;
            var nextIndex = clampIndex(index + delta);
            var nextLocation = entries[nextIndex];
            index = nextIndex;
            if (listener) {
                listener({
                    action,
                    location: nextLocation,
                    delta
                });
            }
        },
        listen (fn) {
            listener = fn;
            return function() {
                listener = null;
            };
        }
    };
    return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */ function createBrowserHistory(options) {
    var createBrowserLocation = function createBrowserLocation(window1, globalHistory) {
        var _window_location = window1.location, pathname = _window_location.pathname, search = _window_location.search, hash = _window_location.hash;
        return createLocation("", {
            pathname,
            search,
            hash
        }, // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    };
    var createBrowserHref = function createBrowserHref(window1, to) {
        return typeof to === "string" ? to : createPath(to);
    };
    if (options === void 0) {
        options = {};
    }
    return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */ function createHashHistory(options) {
    var createHashLocation = function createHashLocation(window1, globalHistory) {
        var _parsePath = parsePath(window1.location.hash.substr(1)), _parsePath_pathname = _parsePath.pathname, pathname = _parsePath_pathname === void 0 ? "/" : _parsePath_pathname, _parsePath_search = _parsePath.search, search = _parsePath_search === void 0 ? "" : _parsePath_search, _parsePath_hash = _parsePath.hash, hash = _parsePath_hash === void 0 ? "" : _parsePath_hash;
        // Hash URL should always have a leading / just like window.location.pathname
        // does, so if an app ends up at a route like /#something then we add a
        // leading slash so all of our path-matching behaves the same as if it would
        // in a browser router.  This is particularly important when there exists a
        // root splat route (<Route path="*">) since that matches internally against
        // "/*" and we'd expect /#something to 404 in a hash router app.
        if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
            pathname = "/" + pathname;
        }
        return createLocation("", {
            pathname,
            search,
            hash
        }, // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    };
    var createHashHref = function createHashHref(window1, to) {
        var base = window1.document.querySelector("base");
        var href = "";
        if (base && base.getAttribute("href")) {
            var url = window1.location.href;
            var hashIndex = url.indexOf("#");
            href = hashIndex === -1 ? url : url.slice(0, hashIndex);
        }
        return href + "#" + (typeof to === "string" ? to : createPath(to));
    };
    var validateHashLocation = function validateHashLocation(location, to) {
        warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
    };
    if (options === void 0) {
        options = {};
    }
    return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
        throw new Error(message);
    }
}
function warning(cond, message) {
    if (!cond) {
        // eslint-disable-next-line no-console
        if (typeof console !== "undefined") console.warn(message);
        try {
            // Welcome to debugging history!
            //
            // This error is thrown as a convenience, so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message);
        // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}
function createKey() {
    return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */ function getHistoryState(location, index) {
    return {
        usr: location.state,
        key: location.key,
        idx: index
    };
}
/**
 * Creates a Location object with a unique key from the given Path
 */ function createLocation(current, to, state, key) {
    if (state === void 0) {
        state = null;
    }
    var location = _extends({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
    }, typeof to === "string" ? parsePath(to) : to, {
        state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to && to.key || key || createKey()
    });
    return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */ function createPath(_ref) {
    var _ref_pathname = _ref.pathname, pathname = _ref_pathname === void 0 ? "/" : _ref_pathname, _ref_search = _ref.search, search = _ref_search === void 0 ? "" : _ref_search, _ref_hash = _ref.hash, hash = _ref_hash === void 0 ? "" : _ref_hash;
    if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */ function parsePath(path) {
    var parsedPath = {};
    if (path) {
        var hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
            parsedPath.hash = path.substr(hashIndex);
            path = path.substr(0, hashIndex);
        }
        var searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
            parsedPath.search = path.substr(searchIndex);
            path = path.substr(0, searchIndex);
        }
        if (path) {
            parsedPath.pathname = path;
        }
    }
    return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
    var getIndex = function getIndex() {
        var state = globalHistory.state || {
            idx: null
        };
        return state.idx;
    };
    var handlePop = function handlePop() {
        action = Action.Pop;
        var nextIndex = getIndex();
        var delta = nextIndex == null ? null : nextIndex - index;
        index = nextIndex;
        if (listener) {
            listener({
                action,
                location: history.location,
                delta
            });
        }
    };
    var push = function push(to, state) {
        action = Action.Push;
        var location = createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex() + 1;
        var historyState = getHistoryState(location, index);
        var url = history.createHref(location);
        // try...catch because iOS limits us to 100 pushState calls :/
        try {
            globalHistory.pushState(historyState, "", url);
        } catch (error) {
            // If the exception is because `state` can't be serialized, let that throw
            // outwards just like a replace call would so the dev knows the cause
            // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
            // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
            if (error instanceof DOMException && error.name === "DataCloneError") {
                throw error;
            }
            // They are going to lose state here, but there is no real
            // way to warn them about it since the page will refresh...
            window1.location.assign(url);
        }
        if (v5Compat && listener) {
            listener({
                action,
                location: history.location,
                delta: 1
            });
        }
    };
    var replace = function replace(to, state) {
        action = Action.Replace;
        var location = createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex();
        var historyState = getHistoryState(location, index);
        var url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener) {
            listener({
                action,
                location: history.location,
                delta: 0
            });
        }
    };
    var createURL = function createURL(to) {
        // window.location.origin is "null" (the literal string value) in Firefox
        // under certain conditions, notably when serving from a local HTML file
        // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
        var base = window1.location.origin !== "null" ? window1.location.origin : window1.location.href;
        var href = typeof to === "string" ? to : createPath(to);
        invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
        return new URL(href, base);
    };
    if (options === void 0) {
        options = {};
    }
    var _options_window = options.window, window1 = _options_window === void 0 ? document.defaultView : _options_window, _options_v5Compat = options.v5Compat, v5Compat = _options_v5Compat === void 0 ? false : _options_v5Compat;
    var globalHistory = window1.history;
    var action = Action.Pop;
    var listener = null;
    var index = getIndex();
    // Index should only be null when we initialize. If not, it's because the
    // user called history.pushState or history.replaceState directly, in which
    // case we should log a warning as it will result in bugs.
    if (index == null) {
        index = 0;
        globalHistory.replaceState(_extends({}, globalHistory.state, {
            idx: index
        }), "");
    }
    var history = {
        get action () {
            return action;
        },
        get location () {
            return getLocation(window1, globalHistory);
        },
        listen (fn) {
            if (listener) {
                throw new Error("A history only accepts one active listener");
            }
            window1.addEventListener(PopStateEventType, handlePop);
            listener = fn;
            return function() {
                window1.removeEventListener(PopStateEventType, handlePop);
                listener = null;
            };
        },
        createHref (to) {
            return createHref(window1, to);
        },
        createURL,
        encodeLocation (to) {
            // Encode a Location the same way window.location would
            var url = createURL(to);
            return {
                pathname: url.pathname,
                search: url.search,
                hash: url.hash
            };
        },
        push,
        replace,
        go (n) {
            return globalHistory.go(n);
        }
    };
    return history;
}
//#endregion
var ResultType;
(function(ResultType) {
    ResultType["data"] = "data";
    ResultType["deferred"] = "deferred";
    ResultType["redirect"] = "redirect";
    ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
var immutableRouteKeys = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children"
]);
function isIndexRoute(route) {
    return route.index === true;
}
// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function convertRoutesToDataRoutes(routes, mapRouteProperties, parentPath, manifest) {
    if (parentPath === void 0) {
        parentPath = [];
    }
    if (manifest === void 0) {
        manifest = {};
    }
    return routes.map(function(route, index) {
        var treePath = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_0__._)(parentPath).concat([
            index
        ]);
        var id = typeof route.id === "string" ? route.id : treePath.join("-");
        invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
        invariant(!manifest[id], 'Found a route id collision on id "' + id + '".  Route ' + "id's must be globally unique within Data Router usages");
        if (isIndexRoute(route)) {
            var indexRoute = _extends({}, route, mapRouteProperties(route), {
                id
            });
            manifest[id] = indexRoute;
            return indexRoute;
        } else {
            var pathOrLayoutRoute = _extends({}, route, mapRouteProperties(route), {
                id,
                children: undefined
            });
            manifest[id] = pathOrLayoutRoute;
            if (route.children) {
                pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest);
            }
            return pathOrLayoutRoute;
        }
    });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */ function matchRoutes(routes, locationArg, basename) {
    if (basename === void 0) {
        basename = "/";
    }
    var location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    var pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) {
        return null;
    }
    var branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    var matches = null;
    for(var i = 0; matches == null && i < branches.length; ++i){
        matches = matchRouteBranch(branches[i], // Incoming pathnames are generally encoded from either window.location
        // or from router.navigate, but we want to match against the unencoded
        // paths in the route definitions.  Memory router locations won't be
        // encoded here but there also shouldn't be anything to decode so this
        // should be a safe operation.  This avoids needing matchRoutes to be
        // history-aware.
        safelyDecodeURI(pathname));
    }
    return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
    var route = match.route, pathname = match.pathname, params = match.params;
    return {
        id: route.id,
        pathname,
        params,
        data: loaderData[route.id],
        handle: route.handle
    };
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
    if (branches === void 0) {
        branches = [];
    }
    if (parentsMeta === void 0) {
        parentsMeta = [];
    }
    if (parentPath === void 0) {
        parentPath = "";
    }
    var flattenRoute = function(route, index, relativePath) {
        var meta = {
            relativePath: relativePath === undefined ? route.path || "" : relativePath,
            caseSensitive: route.caseSensitive === true,
            childrenIndex: index,
            route
        };
        if (meta.relativePath.startsWith("/")) {
            invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
            meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        var path = joinPaths([
            parentPath,
            meta.relativePath
        ]);
        var routesMeta = parentsMeta.concat(meta);
        // Add the children before adding this route to the array, so we traverse the
        // route tree depth-first and child routes appear before their parents in
        // the "flattened" version.
        if (route.children && route.children.length > 0) {
            invariant(// Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".'));
            flattenRoutes(route.children, branches, routesMeta, path);
        }
        // Routes without a path shouldn't ever match by themselves unless they are
        // index routes, so don't add them to the list of possible branches.
        if (route.path == null && !route.index) {
            return;
        }
        branches.push({
            path,
            score: computeScore(path, route.index),
            routesMeta
        });
    };
    routes.forEach(function(route, index) {
        var _route$path;
        // coarse-grain check for optional params
        if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
            flattenRoute(route, index);
        } else {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = explodeOptionalSegments(route.path)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var exploded = _step.value;
                    flattenRoute(route, index, exploded);
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
        }
    });
    return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */ function explodeOptionalSegments(path) {
    var // All child paths with the prefix.  Do this for all children before the
    // optional version for all children, so we get consistent ordering where the
    // parent optional aspect is preferred as required.  Otherwise, we can get
    // child sections interspersed where deeper optional segments are higher than
    // parent optional segments, where for example, /:two would explode _earlier_
    // then /:one.  By always including the parent as required _for all children_
    // first, we avoid this issue
    _result;
    var segments = path.split("/");
    if (segments.length === 0) return [];
    var _segments = (0,_swc_helpers_to_array__WEBPACK_IMPORTED_MODULE_1__._)(segments), first = _segments[0], rest = _segments.slice(1);
    // Optional path segments are denoted by a trailing `?`
    var isOptional = first.endsWith("?");
    // Compute the corresponding required segment: `foo?` -> `foo`
    var required = first.replace(/\?$/, "");
    if (rest.length === 0) {
        // Intepret empty string as omitting an optional segment
        // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
        return isOptional ? [
            required,
            ""
        ] : [
            required
        ];
    }
    var restExploded = explodeOptionalSegments(rest.join("/"));
    var result = [];
    (_result = result).push.apply(_result, (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_0__._)(restExploded.map(function(subpath) {
        return subpath === "" ? required : [
            required,
            subpath
        ].join("/");
    })));
    // Then, if this is an optional value, add all child versions without
    if (isOptional) {
        var _result1;
        (_result1 = result).push.apply(_result1, (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_0__._)(restExploded));
    }
    // for absolute paths, ensure `/` instead of empty segment
    return result.map(function(exploded) {
        return path.startsWith("/") && exploded === "" ? "/" : exploded;
    });
}
function rankRouteBranches(branches) {
    branches.sort(function(a, b) {
        return a.score !== b.score ? b.score - a.score // Higher score first
         : compareIndexes(a.routesMeta.map(function(meta) {
            return meta.childrenIndex;
        }), b.routesMeta.map(function(meta) {
            return meta.childrenIndex;
        }));
    });
}
var paramRe = /^:[\w-]+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = function(s) {
    return s === "*";
};
function computeScore(path, index) {
    var segments = path.split("/");
    var initialScore = segments.length;
    if (segments.some(isSplat)) {
        initialScore += splatPenalty;
    }
    if (index) {
        initialScore += indexRouteValue;
    }
    return segments.filter(function(s) {
        return !isSplat(s);
    }).reduce(function(score, segment) {
        return score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue);
    }, initialScore);
}
function compareIndexes(a, b) {
    var siblings = a.length === b.length && a.slice(0, -1).every(function(n, i) {
        return n === b[i];
    });
    return siblings ? // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0;
}
function matchRouteBranch(branch, pathname) {
    var routesMeta = branch.routesMeta;
    var matchedParams = {};
    var matchedPathname = "/";
    var matches = [];
    for(var i = 0; i < routesMeta.length; ++i){
        var meta = routesMeta[i];
        var end = i === routesMeta.length - 1;
        var remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        var match = matchPath({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end
        }, remainingPathname);
        if (!match) return null;
        Object.assign(matchedParams, match.params);
        var route = meta.route;
        matches.push({
            // TODO: Can this as be avoided?
            params: matchedParams,
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
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */ function generatePath(originalPath, params) {
    if (params === void 0) {
        params = {};
    }
    var path = originalPath;
    if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
        warning(false, 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
        path = path.replace(/\*$/, "/*");
    }
    // ensure `/` is added at the beginning if the path is absolute
    var prefix = path.startsWith("/") ? "/" : "";
    var stringify = function(p) {
        return p == null ? "" : typeof p === "string" ? p : String(p);
    };
    var segments = path.split(/\/+/).map(function(segment, index, array) {
        var isLastSegment = index === array.length - 1;
        // only apply the splat if it's the last segment
        if (isLastSegment && segment === "*") {
            var star = "*";
            // Apply the splat
            return stringify(params[star]);
        }
        var keyMatch = segment.match(/^:([\w-]+)(\??)$/);
        if (keyMatch) {
            var _keyMatch = _sliced_to_array(keyMatch, 3), key = _keyMatch[1], optional = _keyMatch[2];
            var param = params[key];
            invariant(optional === "?" || param != null, 'Missing ":' + key + '" param');
            return stringify(param);
        }
        // Remove any optional markers from optional static segments
        return segment.replace(/\?$/g, "");
    })// Remove empty segments
    .filter(function(segment) {
        return !!segment;
    });
    return prefix + segments.join("/");
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */ function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
        pattern = {
            path: pattern,
            caseSensitive: false,
            end: true
        };
    }
    var _compilePath = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)(compilePath(pattern.path, pattern.caseSensitive, pattern.end), 2), matcher = _compilePath[0], compiledParams = _compilePath[1];
    var match = pathname.match(matcher);
    if (!match) return null;
    var matchedPathname = match[0];
    var pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    var captureGroups = match.slice(1);
    var params = compiledParams.reduce(function(memo, _ref, index) {
        var paramName = _ref.paramName, isOptional = _ref.isOptional;
        // We need to compute the pathnameBase here using the raw splat value
        // instead of using params["*"] later because it will be decoded then
        if (paramName === "*") {
            var splatValue = captureGroups[index] || "";
            pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        var value = captureGroups[index];
        if (isOptional && !value) {
            memo[paramName] = undefined;
        } else {
            memo[paramName] = safelyDecodeURIComponent(value || "", paramName);
        }
        return memo;
    }, {});
    return {
        params,
        pathname: matchedPathname,
        pathnameBase,
        pattern
    };
}
function compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) {
        caseSensitive = false;
    }
    if (end === void 0) {
        end = true;
    }
    warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
    var params = [];
    var regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
    .replace(/^\/*/, "/") // Make sure it has a leading /
    .replace(/[\\.*+^${}|()[\]]/g, "\\$&") // Escape special regex chars
    .replace(/\/:([\w-]+)(\?)?/g, function(_, paramName, isOptional) {
        params.push({
            paramName,
            isOptional: isOptional != null
        });
        return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    });
    if (path.endsWith("*")) {
        params.push({
            paramName: "*"
        });
        regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
         : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
    } else if (end) {
        // When matching to the end, ignore trailing slashes
        regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
        // If our path is non-empty and contains anything beyond an initial slash,
        // then we have _some_ form of path in our regex, so we should expect to
        // match only if we find the end of this path segment.  Look for an optional
        // non-captured trailing slash (to match a portion of the URL) or the end
        // of the path (if we've matched to the end).  We used to do this with a
        // word boundary but that gives false positives on routes like
        // /user-preferences since `-` counts as a word boundary.
        regexpSource += "(?:(?=\\/|$))";
    } else ;
    var matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
    return [
        matcher,
        params
    ];
}
function safelyDecodeURI(value) {
    try {
        return decodeURI(value);
    } catch (error) {
        warning(false, 'The URL path "' + value + '" could not be decoded because it is is a ' + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
        return value;
    }
}
function safelyDecodeURIComponent(value, paramName) {
    try {
        return decodeURIComponent(value);
    } catch (error) {
        warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
        return value;
    }
}
/**
 * @private
 */ function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
        return null;
    }
    // We want to leave trailing slash behavior in the user's control, so if they
    // specify a basename with a trailing slash, we should support it
    var startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    var nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
        // pathname does not start with basename/
        return null;
    }
    return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */ function resolvePath(to, fromPathname) {
    if (fromPathname === void 0) {
        fromPathname = "/";
    }
    var _ref = typeof to === "string" ? parsePath(to) : to, toPathname = _ref.pathname, _ref_search = _ref.search, search = _ref_search === void 0 ? "" : _ref_search, _ref_hash = _ref.hash, hash = _ref_hash === void 0 ? "" : _ref_hash;
    var pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
        pathname,
        search: normalizeSearch(search),
        hash: normalizeHash(hash)
    };
}
function resolvePathname(relativePath, fromPathname) {
    var segments = fromPathname.replace(/\/+$/, "").split("/");
    var relativeSegments = relativePath.split("/");
    relativeSegments.forEach(function(segment) {
        if (segment === "..") {
            // Keep the root "" segment so the pathname starts at /
            if (segments.length > 1) segments.pop();
        } else if (segment !== ".") {
            segments.push(segment);
        }
    });
    return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
    return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */ function getPathContributingMatches(matches) {
    return matches.filter(function(match, index) {
        return index === 0 || match.route.path && match.route.path.length > 0;
    });
}
// Return the array of pathnames for the current route matches - used to
// generate the routePathnames input for resolveTo()
function getResolveToMatches(matches, v7_relativeSplatPath) {
    var pathMatches = getPathContributingMatches(matches);
    // When v7_relativeSplatPath is enabled, use the full pathname for the leaf
    // match so we include splat values for "." links.  See:
    // https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
    if (v7_relativeSplatPath) {
        return pathMatches.map(function(match, idx) {
            return idx === matches.length - 1 ? match.pathname : match.pathnameBase;
        });
    }
    return pathMatches.map(function(match) {
        return match.pathnameBase;
    });
}
/**
 * @private
 */ function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
    if (isPathRelative === void 0) {
        isPathRelative = false;
    }
    var to;
    if (typeof toArg === "string") {
        to = parsePath(toArg);
    } else {
        to = _extends({}, toArg);
        invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
        invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
        invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
    }
    var isEmptyPath = toArg === "" || to.pathname === "";
    var toPathname = isEmptyPath ? "/" : to.pathname;
    var from;
    // Routing is relative to the current pathname if explicitly requested.
    //
    // If a pathname is explicitly provided in `to`, it should be relative to the
    // route context. This is explained in `Note on `<Link to>` values` in our
    // migration guide from v5 as a means of disambiguation between `to` values
    // that begin with `/` and those that do not. However, this is problematic for
    // `to` values that do not provide a pathname. `to` can simply be a search or
    // hash string, in which case we should assume that the navigation is relative
    // to the current location's pathname and *not* the route pathname.
    if (toPathname == null) {
        from = locationPathname;
    } else {
        var routePathnameIndex = routePathnames.length - 1;
        // With relative="route" (the default), each leading .. segment means
        // "go up one route" instead of "go up one URL segment".  This is a key
        // difference from how <a href> works and a major reason we call this a
        // "to" value instead of a "href".
        if (!isPathRelative && toPathname.startsWith("..")) {
            var toSegments = toPathname.split("/");
            while(toSegments[0] === ".."){
                toSegments.shift();
                routePathnameIndex -= 1;
            }
            to.pathname = toSegments.join("/");
        }
        from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    var path = resolvePath(to, from);
    // Ensure the pathname has a trailing slash if the original "to" had one
    var hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    // Or if this was a link to the current path which has a trailing slash
    var hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
        path.pathname += "/";
    }
    return path;
}
/**
 * @private
 */ function getToPathname(to) {
    // Empty strings should be treated the same as / paths
    return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */ var joinPaths = function(paths) {
    return paths.join("/").replace(/\/\/+/g, "/");
};
/**
 * @private
 */ var normalizePathname = function(pathname) {
    return pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
};
/**
 * @private
 */ var normalizeSearch = function(search) {
    return !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
};
/**
 * @private
 */ var normalizeHash = function(hash) {
    return !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
};
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */ var json = function json(data, init) {
    if (init === void 0) {
        init = {};
    }
    var responseInit = typeof init === "number" ? {
        status: init
    } : init;
    var headers = new Headers(responseInit.headers);
    if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json; charset=utf-8");
    }
    return new Response(JSON.stringify(data), _extends({}, responseInit, {
        headers
    }));
};
var AbortedDeferredError = /*#__PURE__*/ function(Error1) {
    "use strict";
    (0,_swc_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__._)(AbortedDeferredError, Error1);
    var _super = (0,_swc_helpers_create_super__WEBPACK_IMPORTED_MODULE_4__._)(AbortedDeferredError);
    function AbortedDeferredError() {
        (0,_swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_5__._)(this, AbortedDeferredError);
        return _super.apply(this, arguments);
    }
    return AbortedDeferredError;
}((0,_swc_helpers_wrap_native_super__WEBPACK_IMPORTED_MODULE_6__._)(Error));
var DeferredData = /*#__PURE__*/ (/* unused pure expression or super */ null && (function() {
    "use strict";
    function DeferredData(data, responseInit) {
        var _this = this;
        _class_call_check(this, DeferredData);
        this.pendingKeysSet = new Set();
        this.subscribers = new Set();
        this.deferredKeys = [];
        invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
        // Set up an AbortController + Promise we can race against to exit early
        // cancellation
        var reject;
        this.abortPromise = new Promise(function(_, r) {
            return reject = r;
        });
        this.controller = new AbortController();
        var onAbort = function() {
            return reject(new AbortedDeferredError("Deferred data aborted"));
        };
        this.unlistenAbortSignal = function() {
            return _this.controller.signal.removeEventListener("abort", onAbort);
        };
        this.controller.signal.addEventListener("abort", onAbort);
        this.data = Object.entries(data).reduce(function(acc, _ref2) {
            var _$_ref2 = _sliced_to_array(_ref2, 2), key = _$_ref2[0], value = _$_ref2[1];
            return Object.assign(acc, {
                [key]: _this.trackPromise(key, value)
            });
        }, {});
        if (this.done) {
            // All incoming values were resolved
            this.unlistenAbortSignal();
        }
        this.init = responseInit;
    }
    _create_class(DeferredData, [
        {
            key: "trackPromise",
            value: function trackPromise(key, value) {
                var _this = this;
                if (!(value instanceof Promise)) {
                    return value;
                }
                this.deferredKeys.push(key);
                this.pendingKeysSet.add(key);
                // We store a little wrapper promise that will be extended with
                // _data/_error props upon resolve/reject
                var promise = Promise.race([
                    value,
                    this.abortPromise
                ]).then(function(data) {
                    return _this.onSettle(promise, key, undefined, data);
                }, function(error) {
                    return _this.onSettle(promise, key, error);
                });
                // Register rejection listeners to avoid uncaught promise rejections on
                // errors or aborted deferred values
                promise.catch(function() {});
                Object.defineProperty(promise, "_tracked", {
                    get: function() {
                        return true;
                    }
                });
                return promise;
            }
        },
        {
            key: "onSettle",
            value: function onSettle(promise, key, error, data) {
                if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
                    this.unlistenAbortSignal();
                    Object.defineProperty(promise, "_error", {
                        get: function() {
                            return error;
                        }
                    });
                    return Promise.reject(error);
                }
                this.pendingKeysSet.delete(key);
                if (this.done) {
                    // Nothing left to abort!
                    this.unlistenAbortSignal();
                }
                // If the promise was resolved/rejected with undefined, we'll throw an error as you
                // should always resolve with a value or null
                if (error === undefined && data === undefined) {
                    var undefinedError = new Error('Deferred data for key "' + key + '" resolved/rejected with `undefined`, ' + "you must resolve/reject with a value or `null`.");
                    Object.defineProperty(promise, "_error", {
                        get: function() {
                            return undefinedError;
                        }
                    });
                    this.emit(false, key);
                    return Promise.reject(undefinedError);
                }
                if (data === undefined) {
                    Object.defineProperty(promise, "_error", {
                        get: function() {
                            return error;
                        }
                    });
                    this.emit(false, key);
                    return Promise.reject(error);
                }
                Object.defineProperty(promise, "_data", {
                    get: function() {
                        return data;
                    }
                });
                this.emit(false, key);
                return data;
            }
        },
        {
            key: "emit",
            value: function emit(aborted, settledKey) {
                this.subscribers.forEach(function(subscriber) {
                    return subscriber(aborted, settledKey);
                });
            }
        },
        {
            key: "subscribe",
            value: function subscribe(fn) {
                var _this = this;
                this.subscribers.add(fn);
                return function() {
                    return _this.subscribers.delete(fn);
                };
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                var _this = this;
                this.controller.abort();
                this.pendingKeysSet.forEach(function(v, k) {
                    return _this.pendingKeysSet.delete(k);
                });
                this.emit(true);
            }
        },
        {
            key: "resolveData",
            value: function resolveData(signal) {
                var _this = this;
                return _async_to_generator(function() {
                    var aborted, onAbort;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                aborted = false;
                                if (!!_this.done) return [
                                    3,
                                    2
                                ];
                                onAbort = function() {
                                    return _this.cancel();
                                };
                                signal.addEventListener("abort", onAbort);
                                return [
                                    4,
                                    new Promise(function(resolve) {
                                        _this.subscribe(function(aborted) {
                                            signal.removeEventListener("abort", onAbort);
                                            if (aborted || _this.done) {
                                                resolve(aborted);
                                            }
                                        });
                                    })
                                ];
                            case 1:
                                aborted = _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    aborted
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "done",
            get: function get() {
                return this.pendingKeysSet.size === 0;
            }
        },
        {
            key: "unwrappedData",
            get: function get() {
                invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
                return Object.entries(this.data).reduce(function(acc, _ref3) {
                    var _$_ref3 = _sliced_to_array(_ref3, 2), key = _$_ref3[0], value = _$_ref3[1];
                    return Object.assign(acc, {
                        [key]: unwrapTrackedPromise(value)
                    });
                }, {});
            }
        },
        {
            key: "pendingKeys",
            get: function get() {
                return Array.from(this.pendingKeysSet);
            }
        }
    ]);
    return DeferredData;
}()));
function isTrackedPromise(value) {
    return value instanceof Promise && value._tracked === true;
}
function unwrapTrackedPromise(value) {
    if (!isTrackedPromise(value)) {
        return value;
    }
    if (value._error) {
        throw value._error;
    }
    return value._data;
}
var defer = function defer(data, init) {
    if (init === void 0) {
        init = {};
    }
    var responseInit = typeof init === "number" ? {
        status: init
    } : init;
    return new DeferredData(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ var redirect = function redirect(url, init) {
    if (init === void 0) {
        init = 302;
    }
    var responseInit = init;
    if (typeof responseInit === "number") {
        responseInit = {
            status: responseInit
        };
    } else if (typeof responseInit.status === "undefined") {
        responseInit.status = 302;
    }
    var headers = new Headers(responseInit.headers);
    headers.set("Location", url);
    return new Response(null, _extends({}, responseInit, {
        headers
    }));
};
/**
 * A redirect response that will force a document reload to the new location.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ var redirectDocument = function(url, init) {
    var response = redirect(url, init);
    response.headers.set("X-Remix-Reload-Document", "true");
    return response;
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 *
 * We don't export the class for public use since it's an implementation
 * detail, but we export the interface above so folks can build their own
 * abstractions around instances via isRouteErrorResponse()
 */ var ErrorResponseImpl = function ErrorResponseImpl(status, statusText, data, internal) {
    "use strict";
    (0,_swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_5__._)(this, ErrorResponseImpl);
    if (internal === void 0) {
        internal = false;
    }
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if (data instanceof Error) {
        this.data = data.toString();
        this.error = data;
    } else {
        this.data = data;
    }
};
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */ function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
var validMutationMethodsArr = [
    "post",
    "put",
    "patch",
    "delete"
];
var validMutationMethods = new Set(validMutationMethodsArr);
var validRequestMethodsArr = [
    "get"
].concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_0__._)(validMutationMethodsArr));
var validRequestMethods = new Set(validRequestMethodsArr);
var redirectStatusCodes = new Set([
    301,
    302,
    303,
    307,
    308
]);
var redirectPreserveMethodStatusCodes = new Set([
    307,
    308
]);
var IDLE_NAVIGATION = {
    state: "idle",
    location: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
};
var IDLE_FETCHER = {
    state: "idle",
    data: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
};
var IDLE_BLOCKER = {
    state: "unblocked",
    proceed: undefined,
    reset: undefined,
    location: undefined
};
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var defaultMapRouteProperties = function(route) {
    return {
        hasErrorBoundary: Boolean(route.hasErrorBoundary)
    };
};
var TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */ function createRouter(init) {
    var initialize = // Initialize the router, all side effects should be kicked off from here.
    // Implemented as a Fluent API for ease of:
    //   let router = createRouter(init).initialize();
    function initialize() {
        // If history informs us of a POP navigation, start the navigation but do not update
        // state.  We'll update our own state once the navigation completes
        unlistenHistory = init.history.listen(function(_ref) {
            var historyAction = _ref.action, location = _ref.location, delta = _ref.delta;
            // Ignore this event if it was just us resetting the URL from a
            // blocked POP navigation
            if (ignoreNextHistoryUpdate) {
                ignoreNextHistoryUpdate = false;
                return;
            }
            warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location " + "that was not created by @remix-run/router. This will fail silently in " + "production. This can happen if you are navigating outside the router " + "via `window.history.pushState`/`window.location.hash` instead of using " + "router navigation APIs.  This can also happen if you are using " + "createHashRouter and the user manually changes the URL.");
            var blockerKey = shouldBlockNavigation({
                currentLocation: state.location,
                nextLocation: location,
                historyAction
            });
            if (blockerKey && delta != null) {
                // Restore the URL to match the current UI, but don't update router state
                ignoreNextHistoryUpdate = true;
                init.history.go(delta * -1);
                // Put the blocker into a blocked state
                updateBlocker(blockerKey, {
                    state: "blocked",
                    location,
                    proceed () {
                        updateBlocker(blockerKey, {
                            state: "proceeding",
                            proceed: undefined,
                            reset: undefined,
                            location
                        });
                        // Re-do the same POP navigation we just blocked
                        init.history.go(delta);
                    },
                    reset () {
                        var blockers = new Map(state.blockers);
                        blockers.set(blockerKey, IDLE_BLOCKER);
                        updateState({
                            blockers
                        });
                    }
                });
                return;
            }
            return startNavigation(historyAction, location);
        });
        if (isBrowser) {
            // FIXME: This feels gross.  How can we cleanup the lines between
            // scrollRestoration/appliedTransitions persistance?
            restoreAppliedTransitions(routerWindow, appliedViewTransitions);
            var _saveAppliedTransitions = function() {
                return persistAppliedTransitions(routerWindow, appliedViewTransitions);
            };
            routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
            removePageHideEventListener = function() {
                return routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
            };
        }
        // Kick off initial data load if needed.  Use Pop to avoid modifying history
        // Note we don't do any handling of lazy here.  For SPA's it'll get handled
        // in the normal navigation flow.  For SSR it's expected that lazy modules are
        // resolved prior to router creation since we can't go into a fallbackElement
        // UI for SSR'd apps
        if (!state.initialized) {
            startNavigation(Action.Pop, state.location, {
                initialHydration: true
            });
        }
        return router;
    };
    var dispose = // Clean up a router and it's side effects
    function dispose() {
        if (unlistenHistory) {
            unlistenHistory();
        }
        if (removePageHideEventListener) {
            removePageHideEventListener();
        }
        subscribers.clear();
        pendingNavigationController && pendingNavigationController.abort();
        state.fetchers.forEach(function(_, key) {
            return deleteFetcher(key);
        });
        state.blockers.forEach(function(_, key) {
            return deleteBlocker(key);
        });
    };
    var subscribe = // Subscribe to state updates for the router
    function subscribe(fn) {
        subscribers.add(fn);
        return function() {
            return subscribers.delete(fn);
        };
    };
    var updateState = // Update our state and notify the calling context of the change
    function updateState(newState, opts) {
        if (opts === void 0) {
            opts = {};
        }
        state = _extends({}, state, newState);
        // Prep fetcher cleanup so we can tell the UI which fetcher data entries
        // can be removed
        var completedFetchers = [];
        var deletedFetchersKeys = [];
        if (future.v7_fetcherPersist) {
            state.fetchers.forEach(function(fetcher, key) {
                if (fetcher.state === "idle") {
                    if (deletedFetchers.has(key)) {
                        // Unmounted from the UI and can be totally removed
                        deletedFetchersKeys.push(key);
                    } else {
                        // Returned to idle but still mounted in the UI, so semi-remains for
                        // revalidations and such
                        completedFetchers.push(key);
                    }
                }
            });
        }
        // Iterate over a local copy so that if flushSync is used and we end up
        // removing and adding a new subscriber due to the useCallback dependencies,
        // we don't get ourselves into a loop calling the new subscriber immediately
        (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_0__._)(subscribers).forEach(function(subscriber) {
            return subscriber(state, {
                deletedFetchers: deletedFetchersKeys,
                unstable_viewTransitionOpts: opts.viewTransitionOpts,
                unstable_flushSync: opts.flushSync === true
            });
        });
        // Remove idle fetchers from state since we only care about in-flight fetchers.
        if (future.v7_fetcherPersist) {
            completedFetchers.forEach(function(key) {
                return state.fetchers.delete(key);
            });
            deletedFetchersKeys.forEach(function(key) {
                return deleteFetcher(key);
            });
        }
    };
    var completeNavigation = // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
    // and setting state.[historyAction/location/matches] to the new route.
    // - Location is a required param
    // - Navigation will always be set to IDLE_NAVIGATION
    // - Can pass any other state in newState
    function completeNavigation(location, newState, _temp) {
        var _location$state, _location$state2;
        var flushSync = (_temp === void 0 ? {} : _temp).flushSync;
        // Deduce if we're in a loading/actionReload state:
        // - We have committed actionData in the store
        // - The current navigation was a mutation submission
        // - We're past the submitting state and into the loading state
        // - The location being loaded is not the result of a redirect
        var isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
        var actionData;
        if (newState.actionData) {
            if (Object.keys(newState.actionData).length > 0) {
                actionData = newState.actionData;
            } else {
                // Empty actionData -> clear prior actionData due to an action error
                actionData = null;
            }
        } else if (isActionReload) {
            // Keep the current data if we're wrapping up the action reload
            actionData = state.actionData;
        } else {
            // Clear actionData on any other completed navigations
            actionData = null;
        }
        // Always preserve any existing loaderData from re-used routes
        var loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
        // On a successful navigation we can assume we got through all blockers
        // so we can start fresh
        var blockers = state.blockers;
        if (blockers.size > 0) {
            blockers = new Map(blockers);
            blockers.forEach(function(_, k) {
                return blockers.set(k, IDLE_BLOCKER);
            });
        }
        // Always respect the user flag.  Otherwise don't reset on mutation
        // submission navigations unless they redirect
        var preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
        if (inFlightDataRoutes) {
            dataRoutes = inFlightDataRoutes;
            inFlightDataRoutes = undefined;
        }
        if (isUninterruptedRevalidation) ;
        else if (pendingAction === Action.Pop) ;
        else if (pendingAction === Action.Push) {
            init.history.push(location, location.state);
        } else if (pendingAction === Action.Replace) {
            init.history.replace(location, location.state);
        }
        var viewTransitionOpts;
        // On POP, enable transitions if they were enabled on the original navigation
        if (pendingAction === Action.Pop) {
            // Forward takes precedence so they behave like the original navigation
            var priorPaths = appliedViewTransitions.get(state.location.pathname);
            if (priorPaths && priorPaths.has(location.pathname)) {
                viewTransitionOpts = {
                    currentLocation: state.location,
                    nextLocation: location
                };
            } else if (appliedViewTransitions.has(location.pathname)) {
                // If we don't have a previous forward nav, assume we're popping back to
                // the new location and enable if that location previously enabled
                viewTransitionOpts = {
                    currentLocation: location,
                    nextLocation: state.location
                };
            }
        } else if (pendingViewTransitionEnabled) {
            // Store the applied transition on PUSH/REPLACE
            var toPaths = appliedViewTransitions.get(state.location.pathname);
            if (toPaths) {
                toPaths.add(location.pathname);
            } else {
                toPaths = new Set([
                    location.pathname
                ]);
                appliedViewTransitions.set(state.location.pathname, toPaths);
            }
            viewTransitionOpts = {
                currentLocation: state.location,
                nextLocation: location
            };
        }
        updateState(_extends({}, newState, {
            actionData,
            loaderData,
            historyAction: pendingAction,
            location,
            initialized: true,
            navigation: IDLE_NAVIGATION,
            revalidation: "idle",
            restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
            preventScrollReset,
            blockers
        }), {
            viewTransitionOpts,
            flushSync: flushSync === true
        });
        // Reset stateful navigation vars
        pendingAction = Action.Pop;
        pendingPreventScrollReset = false;
        pendingViewTransitionEnabled = false;
        isUninterruptedRevalidation = false;
        isRevalidationRequired = false;
        cancelledDeferredRoutes = [];
        cancelledFetcherLoads = [];
    };
    var revalidate = // Revalidate all current loaders.  If a navigation is in progress or if this
    // is interrupted by a navigation, allow this to "succeed" by calling all
    // loaders during the next loader round
    function revalidate() {
        interruptActiveLoads();
        updateState({
            revalidation: "loading"
        });
        // If we're currently submitting an action, we don't need to start a new
        // navigation, we'll just let the follow up loader execution call all loaders
        if (state.navigation.state === "submitting") {
            return;
        }
        // If we're currently in an idle state, start a new navigation for the current
        // action/location and mark it as uninterrupted, which will skip the history
        // update in completeNavigation
        if (state.navigation.state === "idle") {
            startNavigation(state.historyAction, state.location, {
                startUninterruptedRevalidation: true
            });
            return;
        }
        // Otherwise, if we're currently in a loading state, just start a new
        // navigation to the navigation.location but do not trigger an uninterrupted
        // revalidation so that history correctly updates once the navigation completes
        startNavigation(pendingAction || state.historyAction, state.navigation.location, {
            overrideNavigation: state.navigation
        });
    };
    var fetch = // Trigger a fetcher load/submit for the given fetcher key
    function fetch(key, routeId, href, opts) {
        if (isServer) {
            throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
        }
        if (fetchControllers.has(key)) abortFetcher(key);
        var flushSync = (opts && opts.unstable_flushSync) === true;
        var routesToUse = inFlightDataRoutes || dataRoutes;
        var normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, future.v7_relativeSplatPath, routeId, opts == null ? void 0 : opts.relative);
        var matches = matchRoutes(routesToUse, normalizedPath, basename);
        if (!matches) {
            setFetcherError(key, routeId, getInternalRouterError(404, {
                pathname: normalizedPath
            }), {
                flushSync
            });
            return;
        }
        var _normalizeNavigateOptions = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts), path = _normalizeNavigateOptions.path, submission = _normalizeNavigateOptions.submission, error = _normalizeNavigateOptions.error;
        if (error) {
            setFetcherError(key, routeId, error, {
                flushSync
            });
            return;
        }
        var match = getTargetMatch(matches, path);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        if (submission && isMutationMethod(submission.formMethod)) {
            handleFetcherAction(key, routeId, path, match, matches, flushSync, submission);
            return;
        }
        // Store off the match so we can call it's shouldRevalidate on subsequent
        // revalidations
        fetchLoadMatches.set(key, {
            routeId,
            path
        });
        handleFetcherLoader(key, routeId, path, match, matches, flushSync, submission);
    };
    var interruptActiveLoads = function interruptActiveLoads() {
        var // Cancel pending route-level deferreds and mark cancelled routes for
        // revalidation
        _cancelledDeferredRoutes;
        // Every interruption triggers a revalidation
        isRevalidationRequired = true;
        (_cancelledDeferredRoutes = cancelledDeferredRoutes).push.apply(_cancelledDeferredRoutes, (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_0__._)(cancelActiveDeferreds()));
        // Abort in-flight fetcher loads
        fetchLoadMatches.forEach(function(_, key) {
            if (fetchControllers.has(key)) {
                cancelledFetcherLoads.push(key);
                abortFetcher(key);
            }
        });
    };
    var updateFetcherState = function updateFetcherState(key, fetcher, opts) {
        if (opts === void 0) {
            opts = {};
        }
        state.fetchers.set(key, fetcher);
        updateState({
            fetchers: new Map(state.fetchers)
        }, {
            flushSync: (opts && opts.flushSync) === true
        });
    };
    var setFetcherError = function setFetcherError(key, routeId, error, opts) {
        if (opts === void 0) {
            opts = {};
        }
        var boundaryMatch = findNearestBoundary(state.matches, routeId);
        deleteFetcher(key);
        updateState({
            errors: {
                [boundaryMatch.route.id]: error
            },
            fetchers: new Map(state.fetchers)
        }, {
            flushSync: (opts && opts.flushSync) === true
        });
    };
    var getFetcher = function getFetcher(key) {
        if (future.v7_fetcherPersist) {
            activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
            // If this fetcher was previously marked for deletion, unmark it since we
            // have a new instance
            if (deletedFetchers.has(key)) {
                deletedFetchers.delete(key);
            }
        }
        return state.fetchers.get(key) || IDLE_FETCHER;
    };
    var deleteFetcher = function deleteFetcher(key) {
        var fetcher = state.fetchers.get(key);
        // Don't abort the controller if this is a deletion of a fetcher.submit()
        // in it's loading phase since - we don't want to abort the corresponding
        // revalidation and want them to complete and land
        if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
            abortFetcher(key);
        }
        fetchLoadMatches.delete(key);
        fetchReloadIds.delete(key);
        fetchRedirectIds.delete(key);
        deletedFetchers.delete(key);
        state.fetchers.delete(key);
    };
    var deleteFetcherAndUpdateState = function deleteFetcherAndUpdateState(key) {
        if (future.v7_fetcherPersist) {
            var count = (activeFetchers.get(key) || 0) - 1;
            if (count <= 0) {
                activeFetchers.delete(key);
                deletedFetchers.add(key);
            } else {
                activeFetchers.set(key, count);
            }
        } else {
            deleteFetcher(key);
        }
        updateState({
            fetchers: new Map(state.fetchers)
        });
    };
    var abortFetcher = function abortFetcher(key) {
        var controller = fetchControllers.get(key);
        invariant(controller, "Expected fetch controller: " + key);
        controller.abort();
        fetchControllers.delete(key);
    };
    var markFetchersDone = function markFetchersDone(keys) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var key = _step.value;
                var fetcher = getFetcher(key);
                var doneFetcher = getDoneFetcher(fetcher.data);
                state.fetchers.set(key, doneFetcher);
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
    };
    var markFetchRedirectsDone = function markFetchRedirectsDone() {
        var doneKeys = [];
        var updatedFetchers = false;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = fetchRedirectIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var key = _step.value;
                var fetcher = state.fetchers.get(key);
                invariant(fetcher, "Expected fetcher: " + key);
                if (fetcher.state === "loading") {
                    fetchRedirectIds.delete(key);
                    doneKeys.push(key);
                    updatedFetchers = true;
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
        markFetchersDone(doneKeys);
        return updatedFetchers;
    };
    var abortStaleFetchLoads = function abortStaleFetchLoads(landedId) {
        var yeetedKeys = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = fetchReloadIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)(_step.value, 2), key = _step_value[0], id = _step_value[1];
                if (id < landedId) {
                    var fetcher = state.fetchers.get(key);
                    invariant(fetcher, "Expected fetcher: " + key);
                    if (fetcher.state === "loading") {
                        abortFetcher(key);
                        fetchReloadIds.delete(key);
                        yeetedKeys.push(key);
                    }
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
        markFetchersDone(yeetedKeys);
        return yeetedKeys.length > 0;
    };
    var getBlocker = function getBlocker(key, fn) {
        var blocker = state.blockers.get(key) || IDLE_BLOCKER;
        if (blockerFunctions.get(key) !== fn) {
            blockerFunctions.set(key, fn);
        }
        return blocker;
    };
    var deleteBlocker = function deleteBlocker(key) {
        state.blockers.delete(key);
        blockerFunctions.delete(key);
    };
    var updateBlocker = // Utility function to update blockers, ensuring valid state transitions
    function updateBlocker(key, newBlocker) {
        var blocker = state.blockers.get(key) || IDLE_BLOCKER;
        // Poor mans state machine :)
        // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
        invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
        var blockers = new Map(state.blockers);
        blockers.set(key, newBlocker);
        updateState({
            blockers
        });
    };
    var shouldBlockNavigation = function shouldBlockNavigation(_ref2) {
        var currentLocation = _ref2.currentLocation, nextLocation = _ref2.nextLocation, historyAction = _ref2.historyAction;
        if (blockerFunctions.size === 0) {
            return;
        }
        // We ony support a single active blocker at the moment since we don't have
        // any compelling use cases for multi-blocker yet
        if (blockerFunctions.size > 1) {
            warning(false, "A router only supports one blocker at a time");
        }
        var entries = Array.from(blockerFunctions.entries());
        var _entries_ = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)(entries[entries.length - 1], 2), blockerKey = _entries_[0], blockerFunction = _entries_[1];
        var blocker = state.blockers.get(blockerKey);
        if (blocker && blocker.state === "proceeding") {
            // If the blocker is currently proceeding, we don't need to re-check
            // it and can let this navigation continue
            return;
        }
        // At this point, we know we're unblocked/blocked so we need to check the
        // user-provided blocker function
        if (blockerFunction({
            currentLocation,
            nextLocation,
            historyAction
        })) {
            return blockerKey;
        }
    };
    var cancelActiveDeferreds = function cancelActiveDeferreds(predicate) {
        var cancelledRouteIds = [];
        activeDeferreds.forEach(function(dfd, routeId) {
            if (!predicate || predicate(routeId)) {
                // Cancel the deferred - but do not remove from activeDeferreds here -
                // we rely on the subscribers to do that so our tests can assert proper
                // cleanup via _internalActiveDeferreds
                dfd.cancel();
                cancelledRouteIds.push(routeId);
                activeDeferreds.delete(routeId);
            }
        });
        return cancelledRouteIds;
    };
    var enableScrollRestoration = // Opt in to capturing and reporting scroll positions during navigations,
    // used by the <ScrollRestoration> component
    function enableScrollRestoration(positions, getPosition, getKey) {
        savedScrollPositions = positions;
        getScrollPosition = getPosition;
        getScrollRestorationKey = getKey || null;
        // Perform initial hydration scroll restoration, since we miss the boat on
        // the initial updateState() because we've not yet rendered <ScrollRestoration/>
        // and therefore have no savedScrollPositions available
        if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
            initialScrollRestored = true;
            var y = getSavedScrollPosition(state.location, state.matches);
            if (y != null) {
                updateState({
                    restoreScrollPosition: y
                });
            }
        }
        return function() {
            savedScrollPositions = null;
            getScrollPosition = null;
            getScrollRestorationKey = null;
        };
    };
    var getScrollKey = function getScrollKey(location, matches) {
        if (getScrollRestorationKey) {
            var key = getScrollRestorationKey(location, matches.map(function(m) {
                return convertRouteMatchToUiMatch(m, state.loaderData);
            }));
            return key || location.key;
        }
        return location.key;
    };
    var saveScrollPosition = function saveScrollPosition(location, matches) {
        if (savedScrollPositions && getScrollPosition) {
            var key = getScrollKey(location, matches);
            savedScrollPositions[key] = getScrollPosition();
        }
    };
    var getSavedScrollPosition = function getSavedScrollPosition(location, matches) {
        if (savedScrollPositions) {
            var key = getScrollKey(location, matches);
            var y = savedScrollPositions[key];
            if (typeof y === "number") {
                return y;
            }
        }
        return null;
    };
    var _internalSetRoutes = function _internalSetRoutes(newRoutes) {
        manifest = {};
        inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, undefined, manifest);
    };
    var routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
    var isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
    var isServer = !isBrowser;
    invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    var mapRouteProperties;
    if (init.mapRouteProperties) {
        mapRouteProperties = init.mapRouteProperties;
    } else if (init.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        var detectErrorBoundary = init.detectErrorBoundary;
        mapRouteProperties = function(route) {
            return {
                hasErrorBoundary: detectErrorBoundary(route)
            };
        };
    } else {
        mapRouteProperties = defaultMapRouteProperties;
    }
    // Routes keyed by ID
    var manifest = {};
    // Routes in tree format for matching
    var dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, undefined, manifest);
    var inFlightDataRoutes;
    var basename = init.basename || "/";
    // Config driven behavior flags
    var future = _extends({
        v7_fetcherPersist: false,
        v7_normalizeFormMethod: false,
        v7_partialHydration: false,
        v7_prependBasename: false,
        v7_relativeSplatPath: false
    }, init.future);
    // Cleanup function for history
    var unlistenHistory = null;
    // Externally-provided functions to call on all state changes
    var subscribers = new Set();
    // Externally-provided object to hold scroll restoration locations during routing
    var savedScrollPositions = null;
    // Externally-provided function to get scroll restoration keys
    var getScrollRestorationKey = null;
    // Externally-provided function to get current scroll position
    var getScrollPosition = null;
    // One-time flag to control the initial hydration scroll restoration.  Because
    // we don't get the saved positions from <ScrollRestoration /> until _after_
    // the initial render, we need to manually trigger a separate updateState to
    // send along the restoreScrollPosition
    // Set to true if we have `hydrationData` since we assume we were SSR'd and that
    // SSR did the initial scroll restoration.
    var initialScrollRestored = init.hydrationData != null;
    var initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
    var initialErrors = null;
    if (initialMatches == null) {
        // If we do not match a user-provided-route, fall back to the root
        // to allow the error boundary to take over
        var error = getInternalRouterError(404, {
            pathname: init.history.location.pathname
        });
        var _getShortCircuitMatches = getShortCircuitMatches(dataRoutes), matches = _getShortCircuitMatches.matches, route = _getShortCircuitMatches.route;
        initialMatches = matches;
        initialErrors = {
            [route.id]: error
        };
    }
    var initialized;
    var hasLazyRoutes = initialMatches.some(function(m) {
        return m.route.lazy;
    });
    var hasLoaders = initialMatches.some(function(m) {
        return m.route.loader;
    });
    if (hasLazyRoutes) {
        // All initialMatches need to be loaded before we're ready.  If we have lazy
        // functions around still then we'll need to run them in initialize()
        initialized = false;
    } else if (!hasLoaders) {
        // If we've got no loaders to run, then we're good to go
        initialized = true;
    } else if (future.v7_partialHydration) {
        // If partial hydration is enabled, we're initialized so long as we were
        // provided with hydrationData for every route with a loader, and no loaders
        // were marked for explicit hydration
        var loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
        var errors = init.hydrationData ? init.hydrationData.errors : null;
        initialized = initialMatches.every(function(m) {
            return m.route.loader && m.route.loader.hydrate !== true && (loaderData && loaderData[m.route.id] !== undefined || errors && errors[m.route.id] !== undefined);
        });
    } else {
        // Without partial hydration - we're initialized if we were provided any
        // hydrationData - which is expected to be complete
        initialized = init.hydrationData != null;
    }
    var router;
    var state = {
        historyAction: init.history.action,
        location: init.history.location,
        matches: initialMatches,
        initialized,
        navigation: IDLE_NAVIGATION,
        // Don't restore on initial updateState() if we were SSR'd
        restoreScrollPosition: init.hydrationData != null ? false : null,
        preventScrollReset: false,
        revalidation: "idle",
        loaderData: init.hydrationData && init.hydrationData.loaderData || {},
        actionData: init.hydrationData && init.hydrationData.actionData || null,
        errors: init.hydrationData && init.hydrationData.errors || initialErrors,
        fetchers: new Map(),
        blockers: new Map()
    };
    // -- Stateful internal variables to manage navigations --
    // Current navigation in progress (to be committed in completeNavigation)
    var pendingAction = Action.Pop;
    // Should the current navigation prevent the scroll reset if scroll cannot
    // be restored?
    var pendingPreventScrollReset = false;
    // AbortController for the active navigation
    var pendingNavigationController;
    // Should the current navigation enable document.startViewTransition?
    var pendingViewTransitionEnabled = false;
    // Store applied view transitions so we can apply them on POP
    var appliedViewTransitions = new Map();
    // Cleanup function for persisting applied transitions to sessionStorage
    var removePageHideEventListener = null;
    // We use this to avoid touching history in completeNavigation if a
    // revalidation is entirely uninterrupted
    var isUninterruptedRevalidation = false;
    // Use this internal flag to force revalidation of all loaders:
    //  - submissions (completed or interrupted)
    //  - useRevalidator()
    //  - X-Remix-Revalidate (from redirect)
    var isRevalidationRequired = false;
    // Use this internal array to capture routes that require revalidation due
    // to a cancelled deferred on action submission
    var cancelledDeferredRoutes = [];
    // Use this internal array to capture fetcher loads that were cancelled by an
    // action navigation and require revalidation
    var cancelledFetcherLoads = [];
    // AbortControllers for any in-flight fetchers
    var fetchControllers = new Map();
    // Track loads based on the order in which they started
    var incrementingLoadId = 0;
    // Track the outstanding pending navigation data load to be compared against
    // the globally incrementing load when a fetcher load lands after a completed
    // navigation
    var pendingNavigationLoadId = -1;
    // Fetchers that triggered data reloads as a result of their actions
    var fetchReloadIds = new Map();
    // Fetchers that triggered redirect navigations
    var fetchRedirectIds = new Set();
    // Most recent href/match for fetcher.load calls for fetchers
    var fetchLoadMatches = new Map();
    // Ref-count mounted fetchers so we know when it's ok to clean them up
    var activeFetchers = new Map();
    // Fetchers that have requested a delete when using v7_fetcherPersist,
    // they'll be officially removed after they return to idle
    var deletedFetchers = new Set();
    // Store DeferredData instances for active route matches.  When a
    // route loader returns defer() we stick one in here.  Then, when a nested
    // promise resolves we update loaderData.  If a new navigation starts we
    // cancel active deferreds for eliminated routes.
    var activeDeferreds = new Map();
    // Store blocker functions in a separate Map outside of router state since
    // we don't need to update UI state if they change
    var blockerFunctions = new Map();
    // Flag to ignore the next history update, so we can revert the URL change on
    // a POP navigation that was blocked by the user without touching router state
    var ignoreNextHistoryUpdate = false;
    function navigate(to, opts) {
        return _navigate.apply(this, arguments);
    }
    function _navigate() {
        _navigate = // Trigger a navigation event, which can either be a numerical POP or a PUSH
        // replace with an optional submission
        (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function(to, opts) {
            var normalizedPath, _normalizeNavigateOptions, path, submission, error, currentLocation, nextLocation, userReplace, historyAction, preventScrollReset, flushSync, blockerKey;
            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__/* .__generator */ .Jh)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (typeof to === "number") {
                            init.history.go(to);
                            return [
                                2
                            ];
                        }
                        normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, future.v7_relativeSplatPath, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
                        _normalizeNavigateOptions = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts), path = _normalizeNavigateOptions.path, submission = _normalizeNavigateOptions.submission, error = _normalizeNavigateOptions.error;
                        currentLocation = state.location;
                        nextLocation = createLocation(state.location, path, opts && opts.state);
                        // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
                        // URL from window.location, so we need to encode it here so the behavior
                        // remains the same as POP and non-data-router usages.  new URL() does all
                        // the same encoding we'd get from a history.pushState/window.location read
                        // without having to touch history
                        nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
                        userReplace = opts && opts.replace != null ? opts.replace : undefined;
                        historyAction = Action.Push;
                        if (userReplace === true) {
                            historyAction = Action.Replace;
                        } else if (userReplace === false) ;
                        else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
                            // By default on submissions to the current location we REPLACE so that
                            // users don't have to double-click the back button to get to the prior
                            // location.  If the user redirects to a different location from the
                            // action/loader this will be ignored and the redirect will be a PUSH
                            historyAction = Action.Replace;
                        }
                        preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
                        flushSync = (opts && opts.unstable_flushSync) === true;
                        blockerKey = shouldBlockNavigation({
                            currentLocation,
                            nextLocation,
                            historyAction
                        });
                        if (blockerKey) {
                            // Put the blocker into a blocked state
                            updateBlocker(blockerKey, {
                                state: "blocked",
                                location: nextLocation,
                                proceed () {
                                    updateBlocker(blockerKey, {
                                        state: "proceeding",
                                        proceed: undefined,
                                        reset: undefined,
                                        location: nextLocation
                                    });
                                    // Send the same navigation through
                                    navigate(to, opts);
                                },
                                reset () {
                                    var blockers = new Map(state.blockers);
                                    blockers.set(blockerKey, IDLE_BLOCKER);
                                    updateState({
                                        blockers
                                    });
                                }
                            });
                            return [
                                2
                            ];
                        }
                        return [
                            4,
                            startNavigation(historyAction, nextLocation, {
                                submission,
                                // Send through the formData serialization error if we have one so we can
                                // render at the right error boundary after we match routes
                                pendingError: error,
                                preventScrollReset,
                                replace: opts && opts.replace,
                                enableViewTransition: opts && opts.unstable_viewTransition,
                                flushSync
                            })
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        });
        return _navigate.apply(this, arguments);
    }
    function startNavigation(historyAction, location, opts) {
        return _startNavigation.apply(this, arguments);
    }
    function _startNavigation() {
        _startNavigation = // Start a navigation to the given action/location.  Can optionally provide a
        // overrideNavigation which will override the normalLoad in the case of a redirect
        // navigation
        (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function(historyAction, location, opts) {
            var routesToUse, loadingNavigation, matches, flushSync, error, _getShortCircuitMatches, notFoundMatches, route, request, pendingActionData, pendingError, actionOutput, _ref, shortCircuited, loaderData, errors;
            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__/* .__generator */ .Jh)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // Abort any in-progress navigations and start a new one. Unset any ongoing
                        // uninterrupted revalidations unless told otherwise, since we want this
                        // new navigation to update history normally
                        pendingNavigationController && pendingNavigationController.abort();
                        pendingNavigationController = null;
                        pendingAction = historyAction;
                        isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
                        // Save the current scroll position every time we start a new navigation,
                        // and track whether we should reset scroll on completion
                        saveScrollPosition(state.location, state.matches);
                        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
                        pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
                        routesToUse = inFlightDataRoutes || dataRoutes;
                        loadingNavigation = opts && opts.overrideNavigation;
                        matches = matchRoutes(routesToUse, location, basename);
                        flushSync = (opts && opts.flushSync) === true;
                        // Short circuit with a 404 on the root error boundary if we match nothing
                        if (!matches) {
                            error = getInternalRouterError(404, {
                                pathname: location.pathname
                            });
                            _getShortCircuitMatches = getShortCircuitMatches(routesToUse), notFoundMatches = _getShortCircuitMatches.matches, route = _getShortCircuitMatches.route;
                            // Cancel all pending deferred on 404s since we don't keep any routes
                            cancelActiveDeferreds();
                            completeNavigation(location, {
                                matches: notFoundMatches,
                                loaderData: {},
                                errors: {
                                    [route.id]: error
                                }
                            }, {
                                flushSync
                            });
                            return [
                                2
                            ];
                        }
                        // Short circuit if it's only a hash change and not a revalidation or
                        // mutation submission.
                        //
                        // Ignore on initial page loads because since the initial load will always
                        // be "same hash".  For example, on /page#hash and submit a <Form method="post">
                        // which will default to a navigation to /page
                        if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
                            completeNavigation(location, {
                                matches
                            }, {
                                flushSync
                            });
                            return [
                                2
                            ];
                        }
                        // Create a controller/Request for this navigation
                        pendingNavigationController = new AbortController();
                        request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
                        if (!(opts && opts.pendingError)) return [
                            3,
                            1
                        ];
                        // If we have a pendingError, it means the user attempted a GET submission
                        // with binary FormData so assign here and skip to handleLoaders.  That
                        // way we handle calling loaders above the boundary etc.  It's not really
                        // different from an actionError in that sense.
                        pendingError = {
                            [findNearestBoundary(matches).route.id]: opts.pendingError
                        };
                        return [
                            3,
                            3
                        ];
                    case 1:
                        if (!(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            handleAction(request, location, opts.submission, matches, {
                                replace: opts.replace,
                                flushSync
                            })
                        ];
                    case 2:
                        actionOutput = _state.sent();
                        if (actionOutput.shortCircuited) {
                            return [
                                2
                            ];
                        }
                        pendingActionData = actionOutput.pendingActionData;
                        pendingError = actionOutput.pendingActionError;
                        loadingNavigation = getLoadingNavigation(location, opts.submission);
                        flushSync = false;
                        // Create a GET request for the loaders
                        request = new Request(request.url, {
                            signal: request.signal
                        });
                        _state.label = 3;
                    case 3:
                        return [
                            4,
                            handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionData, pendingError)
                        ];
                    case 4:
                        _ref = _state.sent(), shortCircuited = _ref.shortCircuited, loaderData = _ref.loaderData, errors = _ref.errors;
                        if (shortCircuited) {
                            return [
                                2
                            ];
                        }
                        // Clean up now that the action/loaders have completed.  Don't clean up if
                        // we short circuited because pendingNavigationController will have already
                        // been assigned to a new controller for the next navigation
                        pendingNavigationController = null;
                        completeNavigation(location, _extends({
                            matches
                        }, pendingActionData ? {
                            actionData: pendingActionData
                        } : {}, {
                            loaderData,
                            errors
                        }));
                        return [
                            2
                        ];
                }
            });
        });
        return _startNavigation.apply(this, arguments);
    }
    function handleAction(request, location, submission, matches, opts) {
        return _handleAction.apply(this, arguments);
    }
    function _handleAction() {
        _handleAction = // Call the action matched by the leaf route for this navigation and handle
        // redirects/errors
        (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function(request, location, submission, matches, opts) {
            var navigation, result, actionMatch, replace, boundaryMatch;
            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__/* .__generator */ .Jh)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (opts === void 0) {
                            opts = {};
                        }
                        interruptActiveLoads();
                        navigation = getSubmittingNavigation(location, submission);
                        updateState({
                            navigation
                        }, {
                            flushSync: opts.flushSync === true
                        });
                        actionMatch = getTargetMatch(matches, location);
                        if (!(!actionMatch.route.action && !actionMatch.route.lazy)) return [
                            3,
                            1
                        ];
                        result = {
                            type: ResultType.error,
                            error: getInternalRouterError(405, {
                                method: request.method,
                                pathname: location.pathname,
                                routeId: actionMatch.route.id
                            })
                        };
                        return [
                            3,
                            3
                        ];
                    case 1:
                        return [
                            4,
                            callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath)
                        ];
                    case 2:
                        result = _state.sent();
                        if (request.signal.aborted) {
                            return [
                                2,
                                {
                                    shortCircuited: true
                                }
                            ];
                        }
                        _state.label = 3;
                    case 3:
                        if (!isRedirectResult(result)) return [
                            3,
                            5
                        ];
                        if (opts && opts.replace != null) {
                            replace = opts.replace;
                        } else {
                            // If the user didn't explicity indicate replace behavior, replace if
                            // we redirected to the exact same location we're currently at to avoid
                            // double back-buttons
                            replace = result.location === state.location.pathname + state.location.search;
                        }
                        return [
                            4,
                            startRedirectNavigation(state, result, {
                                submission,
                                replace
                            })
                        ];
                    case 4:
                        _state.sent();
                        return [
                            2,
                            {
                                shortCircuited: true
                            }
                        ];
                    case 5:
                        if (isErrorResult(result)) {
                            boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
                            // By default, all submissions are REPLACE navigations, but if the
                            // action threw an error that'll be rendered in an errorElement, we fall
                            // back to PUSH so that the user can use the back button to get back to
                            // the pre-submission form location to try again
                            if ((opts && opts.replace) !== true) {
                                pendingAction = Action.Push;
                            }
                            return [
                                2,
                                {
                                    // Send back an empty object we can use to clear out any prior actionData
                                    pendingActionData: {},
                                    pendingActionError: {
                                        [boundaryMatch.route.id]: result.error
                                    }
                                }
                            ];
                        }
                        if (isDeferredResult(result)) {
                            throw getInternalRouterError(400, {
                                type: "defer-action"
                            });
                        }
                        return [
                            2,
                            {
                                pendingActionData: {
                                    [actionMatch.route.id]: result.data
                                }
                            }
                        ];
                }
            });
        });
        return _handleAction.apply(this, arguments);
    }
    function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, initialHydration, flushSync, pendingActionData, pendingError) {
        return _handleLoaders.apply(this, arguments);
    }
    function _handleLoaders() {
        _handleLoaders = // Call all applicable loaders for the given matches, handling redirects,
        // errors, etc.
        (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, initialHydration, flushSync, pendingActionData, pendingError) {
            var loadingNavigation, activeSubmission, routesToUse, _getMatchesToLoad, matchesToLoad, revalidatingFetchers, updatedFetchers, actionData, abortPendingFetchRevalidations, _ref, results, loaderResults, fetcherResults, redirect, fetcherKey, _processLoaderData, loaderData, errors, updatedFetchers1, didAbortFetchLoads, shouldUpdateFetchers;
            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__/* .__generator */ .Jh)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
                        activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
                        routesToUse = inFlightDataRoutes || dataRoutes;
                        _getMatchesToLoad = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)(getMatchesToLoad(init.history, state, matches, activeSubmission, location, future.v7_partialHydration && initialHydration === true, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError), 2), matchesToLoad = _getMatchesToLoad[0], revalidatingFetchers = _getMatchesToLoad[1];
                        // Cancel pending deferreds for no-longer-matched routes or routes we're
                        // about to reload.  Note that if this is an action reload we would have
                        // already cancelled all pending deferreds so this would be a no-op
                        cancelActiveDeferreds(function(routeId) {
                            return !(matches && matches.some(function(m) {
                                return m.route.id === routeId;
                            })) || matchesToLoad && matchesToLoad.some(function(m) {
                                return m.route.id === routeId;
                            });
                        });
                        pendingNavigationLoadId = ++incrementingLoadId;
                        // Short circuit if we have no loaders to run
                        if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
                            updatedFetchers = markFetchRedirectsDone();
                            completeNavigation(location, _extends({
                                matches,
                                loaderData: {},
                                // Commit pending error if we're short circuiting
                                errors: pendingError || null
                            }, pendingActionData ? {
                                actionData: pendingActionData
                            } : {}, updatedFetchers ? {
                                fetchers: new Map(state.fetchers)
                            } : {}), {
                                flushSync
                            });
                            return [
                                2,
                                {
                                    shortCircuited: true
                                }
                            ];
                        }
                        // If this is an uninterrupted revalidation, we remain in our current idle
                        // state.  If not, we need to switch to our loading state and load data,
                        // preserving any new action data or existing action data (in the case of
                        // a revalidation interrupting an actionReload)
                        // If we have partialHydration enabled, then don't update the state for the
                        // initial data load since iot's not a "navigation"
                        if (!isUninterruptedRevalidation && (!future.v7_partialHydration || !initialHydration)) {
                            revalidatingFetchers.forEach(function(rf) {
                                var fetcher = state.fetchers.get(rf.key);
                                var revalidatingFetcher = getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
                                state.fetchers.set(rf.key, revalidatingFetcher);
                            });
                            actionData = pendingActionData || state.actionData;
                            updateState(_extends({
                                navigation: loadingNavigation
                            }, actionData ? Object.keys(actionData).length === 0 ? {
                                actionData: null
                            } : {
                                actionData
                            } : {}, revalidatingFetchers.length > 0 ? {
                                fetchers: new Map(state.fetchers)
                            } : {}), {
                                flushSync
                            });
                        }
                        revalidatingFetchers.forEach(function(rf) {
                            if (fetchControllers.has(rf.key)) {
                                abortFetcher(rf.key);
                            }
                            if (rf.controller) {
                                // Fetchers use an independent AbortController so that aborting a fetcher
                                // (via deleteFetcher) does not abort the triggering navigation that
                                // triggered the revalidation
                                fetchControllers.set(rf.key, rf.controller);
                            }
                        });
                        abortPendingFetchRevalidations = function() {
                            return revalidatingFetchers.forEach(function(f) {
                                return abortFetcher(f.key);
                            });
                        };
                        if (pendingNavigationController) {
                            pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
                        }
                        return [
                            4,
                            callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request)
                        ];
                    case 1:
                        _ref = _state.sent(), results = _ref.results, loaderResults = _ref.loaderResults, fetcherResults = _ref.fetcherResults;
                        if (request.signal.aborted) {
                            return [
                                2,
                                {
                                    shortCircuited: true
                                }
                            ];
                        }
                        // Clean up _after_ loaders have completed.  Don't clean up if we short
                        // circuited because fetchControllers would have been aborted and
                        // reassigned to new controllers for the next navigation
                        if (pendingNavigationController) {
                            pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
                        }
                        revalidatingFetchers.forEach(function(rf) {
                            return fetchControllers.delete(rf.key);
                        });
                        redirect = findRedirect(results);
                        if (!redirect) return [
                            3,
                            3
                        ];
                        if (redirect.idx >= matchesToLoad.length) {
                            fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
                            fetchRedirectIds.add(fetcherKey);
                        }
                        return [
                            4,
                            startRedirectNavigation(state, redirect.result, {
                                replace
                            })
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2,
                            {
                                shortCircuited: true
                            }
                        ];
                    case 3:
                        _processLoaderData = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds), loaderData = _processLoaderData.loaderData, errors = _processLoaderData.errors;
                        // Wire up subscribers to update loaderData as promises settle
                        activeDeferreds.forEach(function(deferredData, routeId) {
                            deferredData.subscribe(function(aborted) {
                                // Note: No need to updateState here since the TrackedPromise on
                                // loaderData is stable across resolve/reject
                                // Remove this instance if we were aborted or if promises have settled
                                if (aborted || deferredData.done) {
                                    activeDeferreds.delete(routeId);
                                }
                            });
                        });
                        updatedFetchers1 = markFetchRedirectsDone();
                        didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
                        shouldUpdateFetchers = updatedFetchers1 || didAbortFetchLoads || revalidatingFetchers.length > 0;
                        return [
                            2,
                            _extends({
                                loaderData,
                                errors
                            }, shouldUpdateFetchers ? {
                                fetchers: new Map(state.fetchers)
                            } : {})
                        ];
                }
            });
        });
        return _handleLoaders.apply(this, arguments);
    }
    function handleFetcherAction(key, routeId, path, match, requestMatches, flushSync, submission) {
        return _handleFetcherAction.apply(this, arguments);
    }
    function _handleFetcherAction() {
        _handleFetcherAction = // Call the action for the matched fetcher.submit(), and then handle redirects,
        // errors, and revalidation
        (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function(key, routeId, path, match, requestMatches, flushSync, submission) {
            var error, existingFetcher, abortController, fetchRequest, originatingLoadId, actionResult, nextLocation, revalidationRequest, routesToUse, matches, loadId, loadFetcher, _getMatchesToLoad, matchesToLoad, revalidatingFetchers, abortPendingFetchRevalidations, _ref, results, loaderResults, fetcherResults, redirect, fetcherKey, _processLoaderData, loaderData, errors, doneFetcher;
            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__/* .__generator */ .Jh)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        interruptActiveLoads();
                        fetchLoadMatches.delete(key);
                        if (!match.route.action && !match.route.lazy) {
                            error = getInternalRouterError(405, {
                                method: submission.formMethod,
                                pathname: path,
                                routeId: routeId
                            });
                            setFetcherError(key, routeId, error, {
                                flushSync
                            });
                            return [
                                2
                            ];
                        }
                        existingFetcher = state.fetchers.get(key);
                        updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
                            flushSync
                        });
                        abortController = new AbortController();
                        fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
                        fetchControllers.set(key, abortController);
                        originatingLoadId = incrementingLoadId;
                        return [
                            4,
                            callLoaderOrAction("action", fetchRequest, match, requestMatches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath)
                        ];
                    case 1:
                        actionResult = _state.sent();
                        if (fetchRequest.signal.aborted) {
                            // We can delete this so long as we weren't aborted by our own fetcher
                            // re-submit which would have put _new_ controller is in fetchControllers
                            if (fetchControllers.get(key) === abortController) {
                                fetchControllers.delete(key);
                            }
                            return [
                                2
                            ];
                        }
                        // When using v7_fetcherPersist, we don't want errors bubbling up to the UI
                        // or redirects processed for unmounted fetchers so we just revert them to
                        // idle
                        if (future.v7_fetcherPersist && deletedFetchers.has(key)) {
                            if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
                                updateFetcherState(key, getDoneFetcher(undefined));
                                return [
                                    2
                                ];
                            }
                        // Let SuccessResult's fall through for revalidation
                        } else {
                            if (isRedirectResult(actionResult)) {
                                fetchControllers.delete(key);
                                if (pendingNavigationLoadId > originatingLoadId) {
                                    // A new navigation was kicked off after our action started, so that
                                    // should take precedence over this redirect navigation.  We already
                                    // set isRevalidationRequired so all loaders for the new route should
                                    // fire unless opted out via shouldRevalidate
                                    updateFetcherState(key, getDoneFetcher(undefined));
                                    return [
                                        2
                                    ];
                                } else {
                                    fetchRedirectIds.add(key);
                                    updateFetcherState(key, getLoadingFetcher(submission));
                                    return [
                                        2,
                                        startRedirectNavigation(state, actionResult, {
                                            fetcherSubmission: submission
                                        })
                                    ];
                                }
                            }
                            // Process any non-redirect errors thrown
                            if (isErrorResult(actionResult)) {
                                setFetcherError(key, routeId, actionResult.error);
                                return [
                                    2
                                ];
                            }
                        }
                        if (isDeferredResult(actionResult)) {
                            throw getInternalRouterError(400, {
                                type: "defer-action"
                            });
                        }
                        nextLocation = state.navigation.location || state.location;
                        revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
                        routesToUse = inFlightDataRoutes || dataRoutes;
                        matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
                        invariant(matches, "Didn't find any matches after fetcher action");
                        loadId = ++incrementingLoadId;
                        fetchReloadIds.set(key, loadId);
                        loadFetcher = getLoadingFetcher(submission, actionResult.data);
                        state.fetchers.set(key, loadFetcher);
                        _getMatchesToLoad = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)(getMatchesToLoad(init.history, state, matches, submission, nextLocation, false, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, {
                            [match.route.id]: actionResult.data
                        }, undefined // No need to send through errors since we short circuit above
                        ), 2), matchesToLoad = _getMatchesToLoad[0], revalidatingFetchers = _getMatchesToLoad[1];
                        // Put all revalidating fetchers into the loading state, except for the
                        // current fetcher which we want to keep in it's current loading state which
                        // contains it's action submission info + action data
                        revalidatingFetchers.filter(function(rf) {
                            return rf.key !== key;
                        }).forEach(function(rf) {
                            var staleKey = rf.key;
                            var existingFetcher = state.fetchers.get(staleKey);
                            var revalidatingFetcher = getLoadingFetcher(undefined, existingFetcher ? existingFetcher.data : undefined);
                            state.fetchers.set(staleKey, revalidatingFetcher);
                            if (fetchControllers.has(staleKey)) {
                                abortFetcher(staleKey);
                            }
                            if (rf.controller) {
                                fetchControllers.set(staleKey, rf.controller);
                            }
                        });
                        updateState({
                            fetchers: new Map(state.fetchers)
                        });
                        abortPendingFetchRevalidations = function() {
                            return revalidatingFetchers.forEach(function(rf) {
                                return abortFetcher(rf.key);
                            });
                        };
                        abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
                        return [
                            4,
                            callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest)
                        ];
                    case 2:
                        _ref = _state.sent(), results = _ref.results, loaderResults = _ref.loaderResults, fetcherResults = _ref.fetcherResults;
                        if (abortController.signal.aborted) {
                            return [
                                2
                            ];
                        }
                        abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
                        fetchReloadIds.delete(key);
                        fetchControllers.delete(key);
                        revalidatingFetchers.forEach(function(r) {
                            return fetchControllers.delete(r.key);
                        });
                        redirect = findRedirect(results);
                        if (redirect) {
                            if (redirect.idx >= matchesToLoad.length) {
                                fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
                                fetchRedirectIds.add(fetcherKey);
                            }
                            return [
                                2,
                                startRedirectNavigation(state, redirect.result)
                            ];
                        }
                        _processLoaderData = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds), loaderData = _processLoaderData.loaderData, errors = _processLoaderData.errors;
                        // Since we let revalidations complete even if the submitting fetcher was
                        // deleted, only put it back to idle if it hasn't been deleted
                        if (state.fetchers.has(key)) {
                            doneFetcher = getDoneFetcher(actionResult.data);
                            state.fetchers.set(key, doneFetcher);
                        }
                        abortStaleFetchLoads(loadId);
                        // If we are currently in a navigation loading state and this fetcher is
                        // more recent than the navigation, we want the newer data so abort the
                        // navigation and complete it with the fetcher data
                        if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
                            invariant(pendingAction, "Expected pending action");
                            pendingNavigationController && pendingNavigationController.abort();
                            completeNavigation(state.navigation.location, {
                                matches,
                                loaderData,
                                errors,
                                fetchers: new Map(state.fetchers)
                            });
                        } else {
                            // otherwise just update with the fetcher data, preserving any existing
                            // loaderData for loaders that did not need to reload.  We have to
                            // manually merge here since we aren't going through completeNavigation
                            updateState({
                                errors,
                                loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
                                fetchers: new Map(state.fetchers)
                            });
                            isRevalidationRequired = false;
                        }
                        return [
                            2
                        ];
                }
            });
        });
        return _handleFetcherAction.apply(this, arguments);
    }
    function handleFetcherLoader(key, routeId, path, match, matches, flushSync, submission) {
        return _handleFetcherLoader.apply(this, arguments);
    }
    function _handleFetcherLoader() {
        _handleFetcherLoader = // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
        (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function(key, routeId, path, match, matches, flushSync, submission) {
            var existingFetcher, abortController, fetchRequest, originatingLoadId, result;
            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__/* .__generator */ .Jh)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        existingFetcher = state.fetchers.get(key);
                        updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined), {
                            flushSync
                        });
                        abortController = new AbortController();
                        fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
                        fetchControllers.set(key, abortController);
                        originatingLoadId = incrementingLoadId;
                        return [
                            4,
                            callLoaderOrAction("loader", fetchRequest, match, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath)
                        ];
                    case 1:
                        result = _state.sent();
                        if (!isDeferredResult(result)) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            resolveDeferredData(result, fetchRequest.signal, true)
                        ];
                    case 2:
                        result = _state.sent() || result;
                        _state.label = 3;
                    case 3:
                        // We can delete this so long as we weren't aborted by our our own fetcher
                        // re-load which would have put _new_ controller is in fetchControllers
                        if (fetchControllers.get(key) === abortController) {
                            fetchControllers.delete(key);
                        }
                        if (fetchRequest.signal.aborted) {
                            return [
                                2
                            ];
                        }
                        // We don't want errors bubbling up or redirects followed for unmounted
                        // fetchers, so short circuit here if it was removed from the UI
                        if (deletedFetchers.has(key)) {
                            updateFetcherState(key, getDoneFetcher(undefined));
                            return [
                                2
                            ];
                        }
                        if (!isRedirectResult(result)) return [
                            3,
                            6
                        ];
                        if (!(pendingNavigationLoadId > originatingLoadId)) return [
                            3,
                            4
                        ];
                        // A new navigation was kicked off after our loader started, so that
                        // should take precedence over this redirect navigation
                        updateFetcherState(key, getDoneFetcher(undefined));
                        return [
                            2
                        ];
                    case 4:
                        fetchRedirectIds.add(key);
                        return [
                            4,
                            startRedirectNavigation(state, result)
                        ];
                    case 5:
                        _state.sent();
                        return [
                            2
                        ];
                    case 6:
                        // Process any non-redirect errors thrown
                        if (isErrorResult(result)) {
                            setFetcherError(key, routeId, result.error);
                            return [
                                2
                            ];
                        }
                        invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
                        // Put the fetcher back into an idle state
                        updateFetcherState(key, getDoneFetcher(result.data));
                        return [
                            2
                        ];
                }
            });
        });
        return _handleFetcherLoader.apply(this, arguments);
    }
    function startRedirectNavigation(state, redirect, _temp2) {
        return _startRedirectNavigation.apply(this, arguments);
    }
    function _startRedirectNavigation() {
        _startRedirectNavigation = /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function(state, redirect, _temp2) {
            var _ref, submission, fetcherSubmission, replace, redirectLocation, isDocumentReload, url, redirectHistoryAction, _state_navigation, formMethod, formAction, formEncType, activeSubmission, overrideNavigation;
            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__/* .__generator */ .Jh)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ref = _temp2 === void 0 ? {} : _temp2, submission = _ref.submission, fetcherSubmission = _ref.fetcherSubmission, replace = _ref.replace;
                        if (redirect.revalidate) {
                            isRevalidationRequired = true;
                        }
                        redirectLocation = createLocation(state.location, redirect.location, {
                            _isRedirect: true
                        });
                        invariant(redirectLocation, "Expected a location on the redirect navigation");
                        if (isBrowser) {
                            isDocumentReload = false;
                            if (redirect.reloadDocument) {
                                // Hard reload if the response contained X-Remix-Reload-Document
                                isDocumentReload = true;
                            } else if (ABSOLUTE_URL_REGEX.test(redirect.location)) {
                                url = init.history.createURL(redirect.location);
                                isDocumentReload = // Hard reload if it's an absolute URL to a new origin
                                url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
                                stripBasename(url.pathname, basename) == null;
                            }
                            if (isDocumentReload) {
                                if (replace) {
                                    routerWindow.location.replace(redirect.location);
                                } else {
                                    routerWindow.location.assign(redirect.location);
                                }
                                return [
                                    2
                                ];
                            }
                        }
                        // There's no need to abort on redirects, since we don't detect the
                        // redirect until the action/loaders have settled
                        pendingNavigationController = null;
                        redirectHistoryAction = replace === true ? Action.Replace : Action.Push;
                        _state_navigation = state.navigation, formMethod = _state_navigation.formMethod, formAction = _state_navigation.formAction, formEncType = _state_navigation.formEncType;
                        if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
                            submission = getSubmissionFromNavigation(state.navigation);
                        }
                        activeSubmission = submission || fetcherSubmission;
                        if (!(redirectPreserveMethodStatusCodes.has(redirect.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod))) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            startNavigation(redirectHistoryAction, redirectLocation, {
                                submission: _extends({}, activeSubmission, {
                                    formAction: redirect.location
                                }),
                                // Preserve this flag across redirects
                                preventScrollReset: pendingPreventScrollReset
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            3,
                            4
                        ];
                    case 2:
                        overrideNavigation = getLoadingNavigation(redirectLocation, submission);
                        return [
                            4,
                            startNavigation(redirectHistoryAction, redirectLocation, {
                                overrideNavigation,
                                // Send fetcher submissions through for shouldRevalidate
                                fetcherSubmission,
                                // Preserve this flag across redirects
                                preventScrollReset: pendingPreventScrollReset
                            })
                        ];
                    case 3:
                        _state.sent();
                        _state.label = 4;
                    case 4:
                        return [
                            2
                        ];
                }
            });
        });
        return _startRedirectNavigation.apply(this, arguments);
    }
    function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
        return _callLoadersAndMaybeResolveData.apply(this, arguments);
    }
    function _callLoadersAndMaybeResolveData() {
        _callLoadersAndMaybeResolveData = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
            var results, loaderResults, fetcherResults;
            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__/* .__generator */ .Jh)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            Promise.all((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_0__._)(matchesToLoad.map(function(match) {
                                return callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath);
                            })).concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_0__._)(fetchersToLoad.map(function(f) {
                                if (f.matches && f.match && f.controller) {
                                    return callLoaderOrAction("loader", createClientSideRequest(init.history, f.path, f.controller.signal), f.match, f.matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath);
                                } else {
                                    var error = {
                                        type: ResultType.error,
                                        error: getInternalRouterError(404, {
                                            pathname: f.path
                                        })
                                    };
                                    return error;
                                }
                            }))))
                        ];
                    case 1:
                        results = _state.sent();
                        loaderResults = results.slice(0, matchesToLoad.length);
                        fetcherResults = results.slice(matchesToLoad.length);
                        return [
                            4,
                            Promise.all([
                                resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, loaderResults.map(function() {
                                    return request.signal;
                                }), false, state.loaderData),
                                resolveDeferredResults(currentMatches, fetchersToLoad.map(function(f) {
                                    return f.match;
                                }), fetcherResults, fetchersToLoad.map(function(f) {
                                    return f.controller ? f.controller.signal : null;
                                }), true)
                            ])
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2,
                            {
                                results,
                                loaderResults,
                                fetcherResults
                            }
                        ];
                }
            });
        });
        return _callLoadersAndMaybeResolveData.apply(this, arguments);
    }
    router = {
        get basename () {
            return basename;
        },
        get future () {
            return future;
        },
        get state () {
            return state;
        },
        get routes () {
            return dataRoutes;
        },
        get window () {
            return routerWindow;
        },
        initialize,
        subscribe,
        enableScrollRestoration,
        navigate,
        fetch,
        revalidate,
        // Passthrough to history-aware createHref used by useHref so we get proper
        // hash-aware URLs in DOM paths
        createHref: function(to) {
            return init.history.createHref(to);
        },
        encodeLocation: function(to) {
            return init.history.encodeLocation(to);
        },
        getFetcher,
        deleteFetcher: deleteFetcherAndUpdateState,
        dispose,
        getBlocker,
        deleteBlocker,
        _internalFetchControllers: fetchControllers,
        _internalActiveDeferreds: activeDeferreds,
        // TODO: Remove setRoutes, it's temporary to avoid dealing with
        // updating the tree while validating the update algorithm.
        _internalSetRoutes
    };
    return router;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////
var UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
    invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
    var manifest = {};
    var basename = (opts ? opts.basename : null) || "/";
    var mapRouteProperties;
    if (opts != null && opts.mapRouteProperties) {
        mapRouteProperties = opts.mapRouteProperties;
    } else if (opts != null && opts.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        var detectErrorBoundary = opts.detectErrorBoundary;
        mapRouteProperties = function(route) {
            return {
                hasErrorBoundary: detectErrorBoundary(route)
            };
        };
    } else {
        mapRouteProperties = defaultMapRouteProperties;
    }
    // Config driven behavior flags
    var future = _extends({
        v7_relativeSplatPath: false
    }, opts ? opts.future : null);
    var dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, undefined, manifest);
    function query(request, _temp3) {
        return _query.apply(this, arguments);
    }
    function _query() {
        _query = /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   */ _async_to_generator(function(request, _temp3) {
            var requestContext, url, method, location, matches, error, _getShortCircuitMatches, methodNotAllowedMatches, route, error1, _getShortCircuitMatches1, notFoundMatches, route1, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        requestContext = (_temp3 === void 0 ? {} : _temp3).requestContext;
                        url = new URL(request.url);
                        method = request.method;
                        location = createLocation("", createPath(url), null, "default");
                        matches = matchRoutes(dataRoutes, location, basename);
                        // SSR supports HEAD requests while SPA doesn't
                        if (!isValidMethod(method) && method !== "HEAD") {
                            error = getInternalRouterError(405, {
                                method
                            });
                            _getShortCircuitMatches = getShortCircuitMatches(dataRoutes), methodNotAllowedMatches = _getShortCircuitMatches.matches, route = _getShortCircuitMatches.route;
                            return [
                                2,
                                {
                                    basename,
                                    location,
                                    matches: methodNotAllowedMatches,
                                    loaderData: {},
                                    actionData: null,
                                    errors: {
                                        [route.id]: error
                                    },
                                    statusCode: error.status,
                                    loaderHeaders: {},
                                    actionHeaders: {},
                                    activeDeferreds: null
                                }
                            ];
                        } else if (!matches) {
                            error1 = getInternalRouterError(404, {
                                pathname: location.pathname
                            });
                            _getShortCircuitMatches1 = getShortCircuitMatches(dataRoutes), notFoundMatches = _getShortCircuitMatches1.matches, route1 = _getShortCircuitMatches1.route;
                            return [
                                2,
                                {
                                    basename,
                                    location,
                                    matches: notFoundMatches,
                                    loaderData: {},
                                    actionData: null,
                                    errors: {
                                        [route1.id]: error1
                                    },
                                    statusCode: error1.status,
                                    loaderHeaders: {},
                                    actionHeaders: {},
                                    activeDeferreds: null
                                }
                            ];
                        }
                        return [
                            4,
                            queryImpl(request, location, matches, requestContext)
                        ];
                    case 1:
                        result = _state.sent();
                        if (isResponse(result)) {
                            return [
                                2,
                                result
                            ];
                        }
                        // When returning StaticHandlerContext, we patch back in the location here
                        // since we need it for React Context.  But this helps keep our submit and
                        // loadRouteData operating on a Request instead of a Location
                        return [
                            2,
                            _extends({
                                location,
                                basename
                            }, result)
                        ];
                }
            });
        });
        return _query.apply(this, arguments);
    }
    function queryRoute(request, _temp4) {
        return _queryRoute.apply(this, arguments);
    }
    function _queryRoute() {
        _queryRoute = /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   */ _async_to_generator(function(request, _temp4) {
            var _ref, routeId, requestContext, url, method, location, matches, match, result, error, _result$activeDeferre, data;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ref = _temp4 === void 0 ? {} : _temp4, routeId = _ref.routeId, requestContext = _ref.requestContext;
                        url = new URL(request.url);
                        method = request.method;
                        location = createLocation("", createPath(url), null, "default");
                        matches = matchRoutes(dataRoutes, location, basename);
                        // SSR supports HEAD requests while SPA doesn't
                        if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
                            throw getInternalRouterError(405, {
                                method
                            });
                        } else if (!matches) {
                            throw getInternalRouterError(404, {
                                pathname: location.pathname
                            });
                        }
                        match = routeId ? matches.find(function(m) {
                            return m.route.id === routeId;
                        }) : getTargetMatch(matches, location);
                        if (routeId && !match) {
                            throw getInternalRouterError(403, {
                                pathname: location.pathname,
                                routeId
                            });
                        } else if (!match) {
                            // This should never hit I don't think?
                            throw getInternalRouterError(404, {
                                pathname: location.pathname
                            });
                        }
                        return [
                            4,
                            queryImpl(request, location, matches, requestContext, match)
                        ];
                    case 1:
                        result = _state.sent();
                        if (isResponse(result)) {
                            return [
                                2,
                                result
                            ];
                        }
                        error = result.errors ? Object.values(result.errors)[0] : undefined;
                        if (error !== undefined) {
                            // If we got back result.errors, that means the loader/action threw
                            // _something_ that wasn't a Response, but it's not guaranteed/required
                            // to be an `instanceof Error` either, so we have to use throw here to
                            // preserve the "error" state outside of queryImpl.
                            throw error;
                        }
                        // Pick off the right state value to return
                        if (result.actionData) {
                            return [
                                2,
                                Object.values(result.actionData)[0]
                            ];
                        }
                        if (result.loaderData) {
                            ;
                            data = Object.values(result.loaderData)[0];
                            if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
                                data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
                            }
                            return [
                                2,
                                data
                            ];
                        }
                        return [
                            2,
                            undefined
                        ];
                }
            });
        });
        return _queryRoute.apply(this, arguments);
    }
    function queryImpl(request, location, matches, requestContext, routeMatch) {
        return _queryImpl.apply(this, arguments);
    }
    function _queryImpl() {
        _queryImpl = _async_to_generator(function(request, location, matches, requestContext, routeMatch) {
            var result, result1, e;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            5,
                            ,
                            6
                        ]);
                        if (!isMutationMethod(request.method.toLowerCase())) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null)
                        ];
                    case 2:
                        result = _state.sent();
                        return [
                            2,
                            result
                        ];
                    case 3:
                        return [
                            4,
                            loadRouteData(request, matches, requestContext, routeMatch)
                        ];
                    case 4:
                        result1 = _state.sent();
                        return [
                            2,
                            isResponse(result1) ? result1 : _extends({}, result1, {
                                actionData: null,
                                actionHeaders: {}
                            })
                        ];
                    case 5:
                        e = _state.sent();
                        // If the user threw/returned a Response in callLoaderOrAction, we throw
                        // it to bail out and then return or throw here based on whether the user
                        // returned or threw
                        if (isQueryRouteResponse(e)) {
                            if (e.type === ResultType.error) {
                                throw e.response;
                            }
                            return [
                                2,
                                e.response
                            ];
                        }
                        // Redirects are always returned since they don't propagate to catch
                        // boundaries
                        if (isRedirectResponse(e)) {
                            return [
                                2,
                                e
                            ];
                        }
                        throw e;
                    case 6:
                        return [
                            2
                        ];
                }
            });
        });
        return _queryImpl.apply(this, arguments);
    }
    function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
        return _submit.apply(this, arguments);
    }
    function _submit() {
        _submit = _async_to_generator(function(request, matches, actionMatch, requestContext, isRouteRequest) {
            var result, error, method, error1, boundaryMatch, context, loaderRequest, context1;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!(!actionMatch.route.action && !actionMatch.route.lazy)) return [
                            3,
                            1
                        ];
                        error = getInternalRouterError(405, {
                            method: request.method,
                            pathname: new URL(request.url).pathname,
                            routeId: actionMatch.route.id
                        });
                        if (isRouteRequest) {
                            throw error;
                        }
                        result = {
                            type: ResultType.error,
                            error
                        };
                        return [
                            3,
                            3
                        ];
                    case 1:
                        return [
                            4,
                            callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath, {
                                isStaticRequest: true,
                                isRouteRequest,
                                requestContext
                            })
                        ];
                    case 2:
                        result = _state.sent();
                        if (request.signal.aborted) {
                            method = isRouteRequest ? "queryRoute" : "query";
                            throw new Error(method + "() call aborted: " + request.method + " " + request.url);
                        }
                        _state.label = 3;
                    case 3:
                        if (isRedirectResult(result)) {
                            // Uhhhh - this should never happen, we should always throw these from
                            // callLoaderOrAction, but the type narrowing here keeps TS happy and we
                            // can get back on the "throw all redirect responses" train here should
                            // this ever happen :/
                            throw new Response(null, {
                                status: result.status,
                                headers: {
                                    Location: result.location
                                }
                            });
                        }
                        if (isDeferredResult(result)) {
                            error1 = getInternalRouterError(400, {
                                type: "defer-action"
                            });
                            if (isRouteRequest) {
                                throw error1;
                            }
                            result = {
                                type: ResultType.error,
                                error: error1
                            };
                        }
                        if (isRouteRequest) {
                            // Note: This should only be non-Response values if we get here, since
                            // isRouteRequest should throw any Response received in callLoaderOrAction
                            if (isErrorResult(result)) {
                                throw result.error;
                            }
                            return [
                                2,
                                {
                                    matches: [
                                        actionMatch
                                    ],
                                    loaderData: {},
                                    actionData: {
                                        [actionMatch.route.id]: result.data
                                    },
                                    errors: null,
                                    // Note: statusCode + headers are unused here since queryRoute will
                                    // return the raw Response or value
                                    statusCode: 200,
                                    loaderHeaders: {},
                                    actionHeaders: {},
                                    activeDeferreds: null
                                }
                            ];
                        }
                        if (!isErrorResult(result)) return [
                            3,
                            5
                        ];
                        boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
                        return [
                            4,
                            loadRouteData(request, matches, requestContext, undefined, {
                                [boundaryMatch.route.id]: result.error
                            })
                        ];
                    case 4:
                        context = _state.sent();
                        // action status codes take precedence over loader status codes
                        return [
                            2,
                            _extends({}, context, {
                                statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
                                actionData: null,
                                actionHeaders: _extends({}, result.headers ? {
                                    [actionMatch.route.id]: result.headers
                                } : {})
                            })
                        ];
                    case 5:
                        loaderRequest = new Request(request.url, {
                            headers: request.headers,
                            redirect: request.redirect,
                            signal: request.signal
                        });
                        return [
                            4,
                            loadRouteData(loaderRequest, matches, requestContext)
                        ];
                    case 6:
                        context1 = _state.sent();
                        return [
                            2,
                            _extends({}, context1, result.statusCode ? {
                                statusCode: result.statusCode
                            } : {}, {
                                actionData: {
                                    [actionMatch.route.id]: result.data
                                },
                                actionHeaders: _extends({}, result.headers ? {
                                    [actionMatch.route.id]: result.headers
                                } : {})
                            })
                        ];
                }
            });
        });
        return _submit.apply(this, arguments);
    }
    function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
        return _loadRouteData.apply(this, arguments);
    }
    function _loadRouteData() {
        _loadRouteData = _async_to_generator(function(request, matches, requestContext, routeMatch, pendingActionError) {
            var isRouteRequest, requestMatches, matchesToLoad, results, method, activeDeferreds, context, executedLoaders;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        isRouteRequest = routeMatch != null;
                        // Short circuit if we have no loaders to run (queryRoute())
                        if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) {
                            throw getInternalRouterError(400, {
                                method: request.method,
                                pathname: new URL(request.url).pathname,
                                routeId: routeMatch == null ? void 0 : routeMatch.route.id
                            });
                        }
                        requestMatches = routeMatch ? [
                            routeMatch
                        ] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
                        matchesToLoad = requestMatches.filter(function(m) {
                            return m.route.loader || m.route.lazy;
                        });
                        // Short circuit if we have no loaders to run (query())
                        if (matchesToLoad.length === 0) {
                            return [
                                2,
                                {
                                    matches,
                                    // Add a null for all matched routes for proper revalidation on the client
                                    loaderData: matches.reduce(function(acc, m) {
                                        return Object.assign(acc, {
                                            [m.route.id]: null
                                        });
                                    }, {}),
                                    errors: pendingActionError || null,
                                    statusCode: 200,
                                    loaderHeaders: {},
                                    activeDeferreds: null
                                }
                            ];
                        }
                        return [
                            4,
                            Promise.all(_to_consumable_array(matchesToLoad.map(function(match) {
                                return callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath, {
                                    isStaticRequest: true,
                                    isRouteRequest,
                                    requestContext
                                });
                            })))
                        ];
                    case 1:
                        results = _state.sent();
                        if (request.signal.aborted) {
                            method = isRouteRequest ? "queryRoute" : "query";
                            throw new Error(method + "() call aborted: " + request.method + " " + request.url);
                        }
                        activeDeferreds = new Map();
                        context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds);
                        executedLoaders = new Set(matchesToLoad.map(function(match) {
                            return match.route.id;
                        }));
                        matches.forEach(function(match) {
                            if (!executedLoaders.has(match.route.id)) {
                                context.loaderData[match.route.id] = null;
                            }
                        });
                        return [
                            2,
                            _extends({}, context, {
                                matches,
                                activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
                            })
                        ];
                }
            });
        });
        return _loadRouteData.apply(this, arguments);
    }
    return {
        dataRoutes,
        query,
        queryRoute
    };
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////
/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */ function getStaticContextFromError(routes, context, error) {
    var newContext = _extends({}, context, {
        statusCode: 500,
        errors: {
            [context._deepestRenderedBoundaryId || routes[0].id]: error
        }
    });
    return newContext;
}
function isSubmissionNavigation(opts) {
    return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== undefined);
}
function normalizeTo(location, matches, basename, prependBasename, to, v7_relativeSplatPath, fromRouteId, relative) {
    var contextualMatches;
    var activeRouteMatch;
    if (fromRouteId) {
        // Grab matches up to the calling route so our route-relative logic is
        // relative to the correct source route
        contextualMatches = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var match = _step.value;
                contextualMatches.push(match);
                if (match.route.id === fromRouteId) {
                    activeRouteMatch = match;
                    break;
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
    } else {
        contextualMatches = matches;
        activeRouteMatch = matches[matches.length - 1];
    }
    // Resolve the relative path
    var path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches, v7_relativeSplatPath), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
    // When `to` is not specified we inherit search/hash from the current
    // location, unlike when to="." and we just inherit the path.
    // See https://github.com/remix-run/remix/issues/927
    if (to == null) {
        path.search = location.search;
        path.hash = location.hash;
    }
    // Add an ?index param for matched index routes if we don't already have one
    if ((to == null || to === "" || to === ".") && activeRouteMatch && activeRouteMatch.route.index && !hasNakedIndexQuery(path.search)) {
        path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    // If we're operating within a basename, prepend it to the pathname.  If
    // this is a root navigation, then just use the raw basename which allows
    // the basename to have full control over the presence of a trailing slash
    // on root actions
    if (prependBasename && basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([
            basename,
            path.pathname
        ]);
    }
    return createPath(path);
}
// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
    // Return location verbatim on non-submission navigations
    if (!opts || !isSubmissionNavigation(opts)) {
        return {
            path
        };
    }
    if (opts.formMethod && !isValidMethod(opts.formMethod)) {
        return {
            path,
            error: getInternalRouterError(405, {
                method: opts.formMethod
            })
        };
    }
    var getInvalidBodyError = function() {
        return {
            path,
            error: getInternalRouterError(400, {
                type: "invalid-body"
            })
        };
    };
    // Create a Submission on non-GET navigations
    var rawFormMethod = opts.formMethod || "get";
    var formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
    var formAction = stripHashFromPath(path);
    if (opts.body !== undefined) {
        if (opts.formEncType === "text/plain") {
            // text only support POST/PUT/PATCH/DELETE submissions
            if (!isMutationMethod(formMethod)) {
                return getInvalidBodyError();
            }
            var text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
            Array.from(opts.body.entries()).reduce(function(acc, _ref3) {
                var _$_ref3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)(_ref3, 2), name = _$_ref3[0], value = _$_ref3[1];
                return "" + acc + name + "=" + value + "\n";
            }, "") : String(opts.body);
            return {
                path,
                submission: {
                    formMethod,
                    formAction,
                    formEncType: opts.formEncType,
                    formData: undefined,
                    json: undefined,
                    text
                }
            };
        } else if (opts.formEncType === "application/json") {
            // json only supports POST/PUT/PATCH/DELETE submissions
            if (!isMutationMethod(formMethod)) {
                return getInvalidBodyError();
            }
            try {
                var json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
                return {
                    path,
                    submission: {
                        formMethod,
                        formAction,
                        formEncType: opts.formEncType,
                        formData: undefined,
                        json,
                        text: undefined
                    }
                };
            } catch (e) {
                return getInvalidBodyError();
            }
        }
    }
    invariant(typeof FormData === "function", "FormData is not available in this environment");
    var searchParams;
    var formData;
    if (opts.formData) {
        searchParams = convertFormDataToSearchParams(opts.formData);
        formData = opts.formData;
    } else if (opts.body instanceof FormData) {
        searchParams = convertFormDataToSearchParams(opts.body);
        formData = opts.body;
    } else if (opts.body instanceof URLSearchParams) {
        searchParams = opts.body;
        formData = convertSearchParamsToFormData(searchParams);
    } else if (opts.body == null) {
        searchParams = new URLSearchParams();
        formData = new FormData();
    } else {
        try {
            searchParams = new URLSearchParams(opts.body);
            formData = convertSearchParamsToFormData(searchParams);
        } catch (e) {
            return getInvalidBodyError();
        }
    }
    var submission = {
        formMethod,
        formAction,
        formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
        formData,
        json: undefined,
        text: undefined
    };
    if (isMutationMethod(submission.formMethod)) {
        return {
            path,
            submission
        };
    }
    // Flatten submission onto URLSearchParams for GET submissions
    var parsedPath = parsePath(path);
    // On GET navigation submissions we can drop the ?index param from the
    // resulting location since all loaders will run.  But fetcher GET submissions
    // only run a single loader so we need to preserve any incoming ?index params
    if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
        searchParams.append("index", "");
    }
    parsedPath.search = "?" + searchParams;
    return {
        path: createPath(parsedPath),
        submission
    };
}
// Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them
function getLoaderMatchesUntilBoundary(matches, boundaryId) {
    var boundaryMatches = matches;
    if (boundaryId) {
        var index = matches.findIndex(function(m) {
            return m.route.id === boundaryId;
        });
        if (index >= 0) {
            boundaryMatches = matches.slice(0, index);
        }
    }
    return boundaryMatches;
}
function getMatchesToLoad(history, state, matches, submission, location, isInitialLoad, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError) {
    var actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined;
    var currentUrl = history.createURL(state.location);
    var nextUrl = history.createURL(location);
    // Pick navigation matches that are net-new or qualify for revalidation
    var boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
    var boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
    var navigationMatches = boundaryMatches.filter(function(match, index) {
        var route = match.route;
        if (route.lazy) {
            // We haven't loaded this route yet so we don't know if it's got a loader!
            return true;
        }
        if (route.loader == null) {
            return false;
        }
        if (isInitialLoad) {
            if (route.loader.hydrate) {
                return true;
            }
            return state.loaderData[route.id] === undefined && // Don't re-run if the loader ran and threw an error
            (!state.errors || state.errors[route.id] === undefined);
        }
        // Always call the loader on new route instances and pending defer cancellations
        if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some(function(id) {
            return id === match.route.id;
        })) {
            return true;
        }
        // This is the default implementation for when we revalidate.  If the route
        // provides it's own implementation, then we give them full control but
        // provide this value so they can leverage it if needed after they check
        // their own specific use cases
        var currentRouteMatch = state.matches[index];
        var nextRouteMatch = match;
        return shouldRevalidateLoader(match, _extends({
            currentUrl,
            currentParams: currentRouteMatch.params,
            nextUrl,
            nextParams: nextRouteMatch.params
        }, submission, {
            actionResult,
            defaultShouldRevalidate: // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
            isRevalidationRequired || // Clicked the same link, resubmitted a GET form
            currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
            currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
        }));
    });
    // Pick fetcher.loads that need to be revalidated
    var revalidatingFetchers = [];
    fetchLoadMatches.forEach(function(f, key) {
        // Don't revalidate:
        //  - on initial load (shouldn't be any fetchers then anyway)
        //  - if fetcher won't be present in the subsequent render
        //    - no longer matches the URL (v7_fetcherPersist=false)
        //    - was unmounted but persisted due to v7_fetcherPersist=true
        if (isInitialLoad || !matches.some(function(m) {
            return m.route.id === f.routeId;
        }) || deletedFetchers.has(key)) {
            return;
        }
        var fetcherMatches = matchRoutes(routesToUse, f.path, basename);
        // If the fetcher path no longer matches, push it in with null matches so
        // we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
        // currently only a use-case for Remix HMR where the route tree can change
        // at runtime and remove a route previously loaded via a fetcher
        if (!fetcherMatches) {
            revalidatingFetchers.push({
                key,
                routeId: f.routeId,
                path: f.path,
                matches: null,
                match: null,
                controller: null
            });
            return;
        }
        // Revalidating fetchers are decoupled from the route matches since they
        // load from a static href.  They revalidate based on explicit revalidation
        // (submission, useRevalidator, or X-Remix-Revalidate)
        var fetcher = state.fetchers.get(key);
        var fetcherMatch = getTargetMatch(fetcherMatches, f.path);
        var shouldRevalidate = false;
        if (fetchRedirectIds.has(key)) {
            // Never trigger a revalidation of an actively redirecting fetcher
            shouldRevalidate = false;
        } else if (cancelledFetcherLoads.includes(key)) {
            // Always revalidate if the fetcher was cancelled
            shouldRevalidate = true;
        } else if (fetcher && fetcher.state !== "idle" && fetcher.data === undefined) {
            // If the fetcher hasn't ever completed loading yet, then this isn't a
            // revalidation, it would just be a brand new load if an explicit
            // revalidation is required
            shouldRevalidate = isRevalidationRequired;
        } else {
            // Otherwise fall back on any user-defined shouldRevalidate, defaulting
            // to explicit revalidations only
            shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
                currentUrl,
                currentParams: state.matches[state.matches.length - 1].params,
                nextUrl,
                nextParams: matches[matches.length - 1].params
            }, submission, {
                actionResult,
                defaultShouldRevalidate: isRevalidationRequired
            }));
        }
        if (shouldRevalidate) {
            revalidatingFetchers.push({
                key,
                routeId: f.routeId,
                path: f.path,
                matches: fetcherMatches,
                match: fetcherMatch,
                controller: new AbortController()
            });
        }
    });
    return [
        navigationMatches,
        revalidatingFetchers
    ];
}
function isNewLoader(currentLoaderData, currentMatch, match) {
    var isNew = // [a] -> [a, b]
    !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id;
    // Handle the case that we don't have data for a re-used route, potentially
    // from a prior error or from a cancelled pending deferred
    var isMissingData = currentLoaderData[match.route.id] === undefined;
    // Always load if this is a net-new route or we don't yet have data
    return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
    var currentPath = currentMatch.route.path;
    return(// param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]);
}
function shouldRevalidateLoader(loaderMatch, arg) {
    if (loaderMatch.route.shouldRevalidate) {
        var routeChoice = loaderMatch.route.shouldRevalidate(arg);
        if (typeof routeChoice === "boolean") {
            return routeChoice;
        }
    }
    return arg.defaultShouldRevalidate;
}
function loadLazyRouteModule(route, mapRouteProperties, manifest) {
    return _loadLazyRouteModule.apply(this, arguments);
}
function _loadLazyRouteModule() {
    _loadLazyRouteModule = /**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function(route, mapRouteProperties, manifest) {
        var lazyRoute, routeToUpdate, routeUpdates, lazyRouteProperty, staticRouteValue, isPropertyStaticallyDefined;
        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__/* .__generator */ .Jh)(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!route.lazy) {
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        route.lazy()
                    ];
                case 1:
                    lazyRoute = _state.sent();
                    // If the lazy route function was executed and removed by another parallel
                    // call then we can return - first lazy() to finish wins because the return
                    // value of lazy is expected to be static
                    if (!route.lazy) {
                        return [
                            2
                        ];
                    }
                    routeToUpdate = manifest[route.id];
                    invariant(routeToUpdate, "No route found in manifest");
                    routeUpdates = {};
                    for(var lazyRouteProperty in lazyRoute){
                        staticRouteValue = routeToUpdate[lazyRouteProperty];
                        isPropertyStaticallyDefined = staticRouteValue !== undefined && // This property isn't static since it should always be updated based
                        // on the route updates
                        lazyRouteProperty !== "hasErrorBoundary";
                        warning(!isPropertyStaticallyDefined, 'Route "' + routeToUpdate.id + '" has a static property "' + lazyRouteProperty + '" ' + "defined but its lazy function is also returning a value for this property. " + ('The lazy route property "' + lazyRouteProperty + '" will be ignored.'));
                        if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
                            routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
                        }
                    }
                    // Mutate the route with the provided updates.  Do this first so we pass
                    // the updated version to mapRouteProperties
                    Object.assign(routeToUpdate, routeUpdates);
                    // Mutate the `hasErrorBoundary` property on the route based on the route
                    // updates and remove the `lazy` function so we don't resolve the lazy
                    // route again.
                    Object.assign(routeToUpdate, _extends({}, mapRouteProperties(routeToUpdate), {
                        lazy: undefined
                    }));
                    return [
                        2
                    ];
            }
        });
    });
    return _loadLazyRouteModule.apply(this, arguments);
}
function callLoaderOrAction(type, request, match, matches, manifest, mapRouteProperties, basename, v7_relativeSplatPath, opts) {
    return _callLoaderOrAction.apply(this, arguments);
}
function _callLoaderOrAction() {
    _callLoaderOrAction = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function(type, request, match, matches, manifest, mapRouteProperties, basename, v7_relativeSplatPath, opts) {
        var resultType, result, onReject, runHandler, handler, handlerError, values, url, pathname, url1, pathname1, e, status, location, currentUrl, url2, isSameBasename, queryRouteResponse, data, contentType, e1, _result$init, _result$init2;
        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__/* .__generator */ .Jh)(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (opts === void 0) {
                        opts = {};
                    }
                    runHandler = function(handler) {
                        // Setup a promise we can race against so that abort signals short circuit
                        var reject;
                        var abortPromise = new Promise(function(_, r) {
                            return reject = r;
                        });
                        onReject = function() {
                            return reject();
                        };
                        request.signal.addEventListener("abort", onReject);
                        return Promise.race([
                            handler({
                                request,
                                params: match.params,
                                context: opts.requestContext
                            }),
                            abortPromise
                        ]);
                    };
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        12,
                        13,
                        14
                    ]);
                    handler = match.route[type];
                    if (!match.route.lazy) return [
                        3,
                        8
                    ];
                    if (!handler) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        Promise.all([
                            // If the handler throws, don't let it immediately bubble out,
                            // since we need to let the lazy() execution finish so we know if this
                            // route has a boundary that can handle the error
                            runHandler(handler).catch(function(e) {
                                handlerError = e;
                            }),
                            loadLazyRouteModule(match.route, mapRouteProperties, manifest)
                        ])
                    ];
                case 2:
                    values = _state.sent();
                    if (handlerError) {
                        throw handlerError;
                    }
                    result = values[0];
                    return [
                        3,
                        7
                    ];
                case 3:
                    // Load lazy route module, then run any returned handler
                    return [
                        4,
                        loadLazyRouteModule(match.route, mapRouteProperties, manifest)
                    ];
                case 4:
                    _state.sent();
                    handler = match.route[type];
                    if (!handler) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        runHandler(handler)
                    ];
                case 5:
                    // Handler still run even if we got interrupted to maintain consistency
                    // with un-abortable behavior of handler execution on non-lazy or
                    // previously-lazy-loaded routes
                    result = _state.sent();
                    return [
                        3,
                        7
                    ];
                case 6:
                    if (type === "action") {
                        url = new URL(request.url);
                        pathname = url.pathname + url.search;
                        throw getInternalRouterError(405, {
                            method: request.method,
                            pathname,
                            routeId: match.route.id
                        });
                    } else {
                        // lazy() route has no loader to run.  Short circuit here so we don't
                        // hit the invariant below that errors on returning undefined.
                        return [
                            2,
                            {
                                type: ResultType.data,
                                data: undefined
                            }
                        ];
                    }
                    _state.label = 7;
                case 7:
                    return [
                        3,
                        11
                    ];
                case 8:
                    if (!!handler) return [
                        3,
                        9
                    ];
                    url1 = new URL(request.url);
                    pathname1 = url1.pathname + url1.search;
                    throw getInternalRouterError(404, {
                        pathname: pathname1
                    });
                case 9:
                    return [
                        4,
                        runHandler(handler)
                    ];
                case 10:
                    result = _state.sent();
                    _state.label = 11;
                case 11:
                    invariant(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ('"' + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
                    return [
                        3,
                        14
                    ];
                case 12:
                    e = _state.sent();
                    resultType = ResultType.error;
                    result = e;
                    return [
                        3,
                        14
                    ];
                case 13:
                    if (onReject) {
                        request.signal.removeEventListener("abort", onReject);
                    }
                    return [
                        7
                    ];
                case 14:
                    if (!isResponse(result)) return [
                        3,
                        24
                    ];
                    status = result.status;
                    // Process redirects
                    if (redirectStatusCodes.has(status)) {
                        location = result.headers.get("Location");
                        invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
                        // Support relative routing in internal redirects
                        if (!ABSOLUTE_URL_REGEX.test(location)) {
                            location = normalizeTo(new URL(request.url), matches.slice(0, matches.indexOf(match) + 1), basename, true, location, v7_relativeSplatPath);
                        } else if (!opts.isStaticRequest) {
                            currentUrl = new URL(request.url);
                            url2 = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);
                            isSameBasename = stripBasename(url2.pathname, basename) != null;
                            if (url2.origin === currentUrl.origin && isSameBasename) {
                                location = url2.pathname + url2.search + url2.hash;
                            }
                        }
                        // Don't process redirects in the router during static requests requests.
                        // Instead, throw the Response and let the server handle it with an HTTP
                        // redirect.  We also update the Location header in place in this flow so
                        // basename and relative routing is taken into account
                        if (opts.isStaticRequest) {
                            result.headers.set("Location", location);
                            throw result;
                        }
                        return [
                            2,
                            {
                                type: ResultType.redirect,
                                status,
                                location,
                                revalidate: result.headers.get("X-Remix-Revalidate") !== null,
                                reloadDocument: result.headers.get("X-Remix-Reload-Document") !== null
                            }
                        ];
                    }
                    // For SSR single-route requests, we want to hand Responses back directly
                    // without unwrapping.  We do this with the QueryRouteResponse wrapper
                    // interface so we can know whether it was returned or thrown
                    if (opts.isRouteRequest) {
                        queryRouteResponse = {
                            type: resultType === ResultType.error ? ResultType.error : ResultType.data,
                            response: result
                        };
                        throw queryRouteResponse;
                    }
                    _state.label = 15;
                case 15:
                    _state.trys.push([
                        15,
                        22,
                        ,
                        23
                    ]);
                    contentType = result.headers.get("Content-Type");
                    if (!(contentType && /\bapplication\/json\b/.test(contentType))) return [
                        3,
                        19
                    ];
                    if (!(result.body == null)) return [
                        3,
                        16
                    ];
                    data = null;
                    return [
                        3,
                        18
                    ];
                case 16:
                    return [
                        4,
                        result.json()
                    ];
                case 17:
                    data = _state.sent();
                    _state.label = 18;
                case 18:
                    return [
                        3,
                        21
                    ];
                case 19:
                    return [
                        4,
                        result.text()
                    ];
                case 20:
                    data = _state.sent();
                    _state.label = 21;
                case 21:
                    return [
                        3,
                        23
                    ];
                case 22:
                    e1 = _state.sent();
                    return [
                        2,
                        {
                            type: ResultType.error,
                            error: e1
                        }
                    ];
                case 23:
                    if (resultType === ResultType.error) {
                        return [
                            2,
                            {
                                type: resultType,
                                error: new ErrorResponseImpl(status, result.statusText, data),
                                headers: result.headers
                            }
                        ];
                    }
                    return [
                        2,
                        {
                            type: ResultType.data,
                            data,
                            statusCode: result.status,
                            headers: result.headers
                        }
                    ];
                case 24:
                    if (resultType === ResultType.error) {
                        return [
                            2,
                            {
                                type: resultType,
                                error: result
                            }
                        ];
                    }
                    if (isDeferredData(result)) {
                        ;
                        return [
                            2,
                            {
                                type: ResultType.deferred,
                                deferredData: result,
                                statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
                                headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
                            }
                        ];
                    }
                    return [
                        2,
                        {
                            type: ResultType.data,
                            data: result
                        }
                    ];
            }
        });
    });
    return _callLoaderOrAction.apply(this, arguments);
}
// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function createClientSideRequest(history, location, signal, submission) {
    var url = history.createURL(stripHashFromPath(location)).toString();
    var init = {
        signal
    };
    if (submission && isMutationMethod(submission.formMethod)) {
        var formMethod = submission.formMethod, formEncType = submission.formEncType;
        // Didn't think we needed this but it turns out unlike other methods, patch
        // won't be properly normalized to uppercase and results in a 405 error.
        // See: https://fetch.spec.whatwg.org/#concept-method
        init.method = formMethod.toUpperCase();
        if (formEncType === "application/json") {
            init.headers = new Headers({
                "Content-Type": formEncType
            });
            init.body = JSON.stringify(submission.json);
        } else if (formEncType === "text/plain") {
            // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
            init.body = submission.text;
        } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
            // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
            init.body = convertFormDataToSearchParams(submission.formData);
        } else {
            // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
            init.body = submission.formData;
        }
    }
    return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
    var searchParams = new URLSearchParams();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = formData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)(_step.value, 2), key = _step_value[0], value = _step_value[1];
            // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
            searchParams.append(key, typeof value === "string" ? value : value.name);
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
    return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
    var formData = new FormData();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = searchParams.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)(_step.value, 2), key = _step_value[0], value = _step_value[1];
            formData.append(key, value);
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
    return formData;
}
function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
    // Fill in loaderData/errors from our loaders
    var loaderData = {};
    var errors = null;
    var statusCode;
    var foundError = false;
    var loaderHeaders = {};
    // Process loader results into state.loaderData/state.errors
    results.forEach(function(result, index) {
        var id = matchesToLoad[index].route.id;
        invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
        if (isErrorResult(result)) {
            // Look upwards from the matched route for the closest ancestor
            // error boundary, defaulting to the root match
            var boundaryMatch = findNearestBoundary(matches, id);
            var error = result.error;
            // If we have a pending action error, we report it at the highest-route
            // that throws a loader error, and then clear it out to indicate that
            // it was consumed
            if (pendingError) {
                error = Object.values(pendingError)[0];
                pendingError = undefined;
            }
            errors = errors || {};
            // Prefer higher error values if lower errors bubble to the same boundary
            if (errors[boundaryMatch.route.id] == null) {
                errors[boundaryMatch.route.id] = error;
            }
            // Clear our any prior loaderData for the throwing route
            loaderData[id] = undefined;
            // Once we find our first (highest) error, we set the status code and
            // prevent deeper status codes from overriding
            if (!foundError) {
                foundError = true;
                statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
            }
            if (result.headers) {
                loaderHeaders[id] = result.headers;
            }
        } else {
            if (isDeferredResult(result)) {
                activeDeferreds.set(id, result.deferredData);
                loaderData[id] = result.deferredData.data;
            } else {
                loaderData[id] = result.data;
            }
            // Error status codes always override success status codes, but if all
            // loaders are successful we take the deepest status code.
            if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
                statusCode = result.statusCode;
            }
            if (result.headers) {
                loaderHeaders[id] = result.headers;
            }
        }
    });
    // If we didn't consume the pending action error (i.e., all loaders
    // resolved), then consume it here.  Also clear out any loaderData for the
    // throwing route
    if (pendingError) {
        errors = pendingError;
        loaderData[Object.keys(pendingError)[0]] = undefined;
    }
    return {
        loaderData,
        errors,
        statusCode: statusCode || 200,
        loaderHeaders
    };
}
function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
    var _processRouteLoaderData = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds), loaderData = _processRouteLoaderData.loaderData, errors = _processRouteLoaderData.errors;
    // Process results from our revalidating fetchers
    for(var index = 0; index < revalidatingFetchers.length; index++){
        var _revalidatingFetchers_index = revalidatingFetchers[index], key = _revalidatingFetchers_index.key, match = _revalidatingFetchers_index.match, controller = _revalidatingFetchers_index.controller;
        invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
        var result = fetcherResults[index];
        // Process fetcher non-redirect errors
        if (controller && controller.signal.aborted) {
            continue;
        } else if (isErrorResult(result)) {
            var boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
            if (!(errors && errors[boundaryMatch.route.id])) {
                errors = _extends({}, errors, {
                    [boundaryMatch.route.id]: result.error
                });
            }
            state.fetchers.delete(key);
        } else if (isRedirectResult(result)) {
            // Should never get here, redirects should get processed above, but we
            // keep this to type narrow to a success result in the else
            invariant(false, "Unhandled fetcher revalidation redirect");
        } else if (isDeferredResult(result)) {
            // Should never get here, deferred data should be awaited for fetchers
            // in resolveDeferredResults
            invariant(false, "Unhandled fetcher deferred data");
        } else {
            var doneFetcher = getDoneFetcher(result.data);
            state.fetchers.set(key, doneFetcher);
        }
    }
    return {
        loaderData,
        errors
    };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
    var mergedLoaderData = _extends({}, newLoaderData);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var match = _step.value;
            var id = match.route.id;
            if (newLoaderData.hasOwnProperty(id)) {
                if (newLoaderData[id] !== undefined) {
                    mergedLoaderData[id] = newLoaderData[id];
                }
            } else if (loaderData[id] !== undefined && match.route.loader) {
                // Preserve existing keys not included in newLoaderData and where a loader
                // wasn't removed by HMR
                mergedLoaderData[id] = loaderData[id];
            }
            if (errors && errors.hasOwnProperty(id)) {
                break;
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
    return mergedLoaderData;
}
// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function findNearestBoundary(matches, routeId) {
    var eligibleMatches = routeId ? matches.slice(0, matches.findIndex(function(m) {
        return m.route.id === routeId;
    }) + 1) : (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_0__._)(matches);
    return eligibleMatches.reverse().find(function(m) {
        return m.route.hasErrorBoundary === true;
    }) || matches[0];
}
function getShortCircuitMatches(routes) {
    // Prefer a root layout route if present, otherwise shim in a route object
    var route = routes.length === 1 ? routes[0] : routes.find(function(r) {
        return r.index || !r.path || r.path === "/";
    }) || {
        id: "__shim-error-route__"
    };
    return {
        matches: [
            {
                params: {},
                pathname: "",
                pathnameBase: "",
                route
            }
        ],
        route
    };
}
function getInternalRouterError(status, _temp5) {
    var _ref = _temp5 === void 0 ? {} : _temp5, pathname = _ref.pathname, routeId = _ref.routeId, method = _ref.method, type = _ref.type;
    var statusText = "Unknown Server Error";
    var errorMessage = "Unknown @remix-run/router error";
    if (status === 400) {
        statusText = "Bad Request";
        if (method && pathname && routeId) {
            errorMessage = "You made a " + method + ' request to "' + pathname + '" but ' + ('did not provide a `loader` for route "' + routeId + '", ') + "so there is no way to handle the request.";
        } else if (type === "defer-action") {
            errorMessage = "defer() is not supported in actions";
        } else if (type === "invalid-body") {
            errorMessage = "Unable to encode submission body";
        }
    } else if (status === 403) {
        statusText = "Forbidden";
        errorMessage = 'Route "' + routeId + '" does not match URL "' + pathname + '"';
    } else if (status === 404) {
        statusText = "Not Found";
        errorMessage = 'No route matches URL "' + pathname + '"';
    } else if (status === 405) {
        statusText = "Method Not Allowed";
        if (method && pathname && routeId) {
            errorMessage = "You made a " + method.toUpperCase() + ' request to "' + pathname + '" but ' + ('did not provide an `action` for route "' + routeId + '", ') + "so there is no way to handle the request.";
        } else if (method) {
            errorMessage = 'Invalid request method "' + method.toUpperCase() + '"';
        }
    }
    return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
// Find any returned redirect errors, starting from the lowest match
function findRedirect(results) {
    for(var i = results.length - 1; i >= 0; i--){
        var result = results[i];
        if (isRedirectResult(result)) {
            return {
                result,
                idx: i
            };
        }
    }
}
function stripHashFromPath(path) {
    var parsedPath = typeof path === "string" ? parsePath(path) : path;
    return createPath(_extends({}, parsedPath, {
        hash: ""
    }));
}
function isHashChangeOnly(a, b) {
    if (a.pathname !== b.pathname || a.search !== b.search) {
        return false;
    }
    if (a.hash === "") {
        // /page -> /page#hash
        return b.hash !== "";
    } else if (a.hash === b.hash) {
        // /page#hash -> /page#hash
        return true;
    } else if (b.hash !== "") {
        // /page#hash -> /page#other
        return true;
    }
    // If the hash is removed the browser will re-perform a request to the server
    // /page#hash -> /page
    return false;
}
function isDeferredResult(result) {
    return result.type === ResultType.deferred;
}
function isErrorResult(result) {
    return result.type === ResultType.error;
}
function isRedirectResult(result) {
    return (result && result.type) === ResultType.redirect;
}
function isDeferredData(value) {
    var deferred = value;
    return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function isResponse(value) {
    return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse(result) {
    if (!isResponse(result)) {
        return false;
    }
    var status = result.status;
    var location = result.headers.get("Location");
    return status >= 300 && status <= 399 && location != null;
}
function isQueryRouteResponse(obj) {
    return obj && isResponse(obj.response) && (obj.type === ResultType.data || obj.type === ResultType.error);
}
function isValidMethod(method) {
    return validRequestMethods.has(method.toLowerCase());
}
function isMutationMethod(method) {
    return validMutationMethods.has(method.toLowerCase());
}
function resolveDeferredResults(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
    return _resolveDeferredResults.apply(this, arguments);
}
function _resolveDeferredResults() {
    _resolveDeferredResults = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
        var _loop, index;
        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__/* .__generator */ .Jh)(this, function(_state) {
            switch(_state.label){
                case 0:
                    _loop = function(index) {
                        var result, match, currentMatch, isRevalidatingLoader, signal;
                        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__/* .__generator */ .Jh)(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    result = results[index];
                                    match = matchesToLoad[index];
                                    // If we don't have a match, then we can have a deferred result to do
                                    // anything with.  This is for revalidating fetchers where the route was
                                    // removed during HMR
                                    if (!match) {
                                        return [
                                            2,
                                            "continue"
                                        ];
                                    }
                                    currentMatch = currentMatches.find(function(m) {
                                        return m.route.id === match.route.id;
                                    });
                                    isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
                                    if (!(isDeferredResult(result) && (isFetcher || isRevalidatingLoader))) return [
                                        3,
                                        2
                                    ];
                                    signal = signals[index];
                                    invariant(signal, "Expected an AbortSignal for revalidating fetcher deferred result");
                                    return [
                                        4,
                                        resolveDeferredData(result, signal, isFetcher).then(function(result) {
                                            if (result) {
                                                results[index] = result || results[index];
                                            }
                                        })
                                    ];
                                case 1:
                                    _state.sent();
                                    _state.label = 2;
                                case 2:
                                    return [
                                        2
                                    ];
                            }
                        });
                    };
                    index = 0;
                    _state.label = 1;
                case 1:
                    if (!(index < results.length)) return [
                        3,
                        4
                    ];
                    return [
                        5,
                        (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__/* .__values */ .XA)(_loop(index))
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    index++;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _resolveDeferredResults.apply(this, arguments);
}
function resolveDeferredData(result, signal, unwrap) {
    return _resolveDeferredData.apply(this, arguments);
}
function _resolveDeferredData() {
    _resolveDeferredData = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function(result, signal, unwrap) {
        var aborted;
        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__/* .__generator */ .Jh)(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (unwrap === void 0) {
                        unwrap = false;
                    }
                    return [
                        4,
                        result.deferredData.resolveData(signal)
                    ];
                case 1:
                    aborted = _state.sent();
                    if (aborted) {
                        return [
                            2
                        ];
                    }
                    if (unwrap) {
                        try {
                            return [
                                2,
                                {
                                    type: ResultType.data,
                                    data: result.deferredData.unwrappedData
                                }
                            ];
                        } catch (e) {
                            // Handle any TrackedPromise._error values encountered while unwrapping
                            return [
                                2,
                                {
                                    type: ResultType.error,
                                    error: e
                                }
                            ];
                        }
                    }
                    return [
                        2,
                        {
                            type: ResultType.data,
                            data: result.deferredData.data
                        }
                    ];
            }
        });
    });
    return _resolveDeferredData.apply(this, arguments);
}
function hasNakedIndexQuery(search) {
    return new URLSearchParams(search).getAll("index").some(function(v) {
        return v === "";
    });
}
function getTargetMatch(matches, location) {
    var search = typeof location === "string" ? parsePath(location).search : location.search;
    if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
        // Return the leaf index route when index is present
        return matches[matches.length - 1];
    }
    // Otherwise grab the deepest "path contributing" match (ignoring index and
    // pathless layout routes)
    var pathMatches = getPathContributingMatches(matches);
    return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
    var formMethod = navigation.formMethod, formAction = navigation.formAction, formEncType = navigation.formEncType, text = navigation.text, formData = navigation.formData, json = navigation.json;
    if (!formMethod || !formAction || !formEncType) {
        return;
    }
    if (text != null) {
        return {
            formMethod,
            formAction,
            formEncType,
            formData: undefined,
            json: undefined,
            text
        };
    } else if (formData != null) {
        return {
            formMethod,
            formAction,
            formEncType,
            formData,
            json: undefined,
            text: undefined
        };
    } else if (json !== undefined) {
        return {
            formMethod,
            formAction,
            formEncType,
            formData: undefined,
            json,
            text: undefined
        };
    }
}
function getLoadingNavigation(location, submission) {
    if (submission) {
        var navigation = {
            state: "loading",
            location,
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text
        };
        return navigation;
    } else {
        var navigation1 = {
            state: "loading",
            location,
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            json: undefined,
            text: undefined
        };
        return navigation1;
    }
}
function getSubmittingNavigation(location, submission) {
    var navigation = {
        state: "submitting",
        location,
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text
    };
    return navigation;
}
function getLoadingFetcher(submission, data) {
    if (submission) {
        var fetcher = {
            state: "loading",
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text,
            data
        };
        return fetcher;
    } else {
        var fetcher1 = {
            state: "loading",
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            json: undefined,
            text: undefined,
            data
        };
        return fetcher1;
    }
}
function getSubmittingFetcher(submission, existingFetcher) {
    var fetcher = {
        state: "submitting",
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text,
        data: existingFetcher ? existingFetcher.data : undefined
    };
    return fetcher;
}
function getDoneFetcher(data) {
    var fetcher = {
        state: "idle",
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        json: undefined,
        text: undefined,
        data
    };
    return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
    try {
        var sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
        if (sessionPositions) {
            var json = JSON.parse(sessionPositions);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = Object.entries(json || {})[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _step_value = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)(_step.value, 2), k = _step_value[0], v = _step_value[1];
                    if (v && Array.isArray(v)) {
                        transitions.set(k, new Set(v || []));
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
        }
    } catch (e) {
    // no-op, use default empty object
    }
}
function persistAppliedTransitions(_window, transitions) {
    if (transitions.size > 0) {
        var json = {};
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = transitions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)(_step.value, 2), k = _step_value[0], v = _step_value[1];
                json[k] = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_0__._)(v);
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
        try {
            _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
        } catch (error) {
            warning(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
        }
    }
}
//#endregion
 //# sourceMappingURL=router.js.map


/***/ }),

/***/ 507:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
var react_dom__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pG: function() { return /* binding */ RouterProvider; }
/* harmony export */ });
/* unused harmony exports BrowserRouter, Form, HashRouter, Link, NavLink, ScrollRestoration, UNSAFE_FetchersContext, UNSAFE_ViewTransitionContext, UNSAFE_useScrollRestoration, createBrowserRouter, createHashRouter, createSearchParams, unstable_HistoryRouter, unstable_usePrompt, unstable_useViewTransitionState, useBeforeUnload, useFetcher, useFetchers, useFormAction, useLinkClickHandler, useSearchParams, useSubmit */
/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(862);
/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(188);
/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(582);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(935);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(945);
/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 








function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function _extends(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
    return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */ function createSearchParams(init) {
    if (init === void 0) {
        init = "";
    }
    return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce(function(memo, key) {
        var value = init[key];
        return memo.concat(Array.isArray(value) ? value.map(function(v) {
            return [
                key,
                v
            ];
        }) : [
            [
                key,
                value
            ]
        ]);
    }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
    var searchParams = createSearchParams(locationSearch);
    if (defaultSearchParams) {
        // Use `defaultSearchParams.forEach(...)` here instead of iterating of
        // `defaultSearchParams.keys()` to work-around a bug in Firefox related to
        // web extensions. Relevant Bugzilla tickets:
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1414602
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1023984
        defaultSearchParams.forEach(function(_, key) {
            if (!searchParams.has(key)) {
                defaultSearchParams.getAll(key).forEach(function(value) {
                    searchParams.append(key, value);
                });
            }
        });
    }
    return searchParams;
}
// One-time check for submitter support
var _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) {
        try {
            new FormData(document.createElement("form"), // @ts-expect-error if FormData supports the submitter parameter, this will throw
            0);
            _formDataSupportsSubmitter = false;
        } catch (e) {
            _formDataSupportsSubmitter = true;
        }
    }
    return _formDataSupportsSubmitter;
}
var supportedFormEncTypes = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
]);
function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
         false ? 0 : void 0;
        return null;
    }
    return encType;
}
function getFormSubmissionInfo(target, basename) {
    var method;
    var action;
    var encType;
    var formData;
    var body;
    if (isFormElement(target)) {
        // When grabbing the action from the element, it will have had the basename
        // prefixed to ensure non-JS scenarios work, so strip it since we'll
        // re-prefix in the router
        var attr = target.getAttribute("action");
        action = attr ? stripBasename(attr, basename) : null;
        method = target.getAttribute("method") || defaultMethod;
        encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
        formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
        var form = target.form;
        if (form == null) {
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        }
        // <button>/<input type="submit"> may override attributes of <form>
        // When grabbing the action from the element, it will have had the basename
        // prefixed to ensure non-JS scenarios work, so strip it since we'll
        // re-prefix in the router
        var attr1 = target.getAttribute("formaction") || form.getAttribute("action");
        action = attr1 ? stripBasename(attr1, basename) : null;
        method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
        encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
        // Build a FormData object populated from a form and submitter
        formData = new FormData(form, target);
        // If this browser doesn't support the `FormData(el, submitter)` format,
        // then tack on the submitter value at the end.  This is a lightweight
        // solution that is not 100% spec compliant.  For complete support in older
        // browsers, consider using the `formdata-submitter-polyfill` package
        if (!isFormDataSubmitterSupported()) {
            var name = target.name, type = target.type, value = target.value;
            if (type === "image") {
                var prefix = name ? name + "." : "";
                formData.append(prefix + "x", "0");
                formData.append(prefix + "y", "0");
            } else if (name) {
                formData.append(name, value);
            }
        }
    } else if (isHtmlElement(target)) {
        throw new Error("Cannot submit element that is not <form>, <button>, or " + '<input type="submit|image">');
    } else {
        method = defaultMethod;
        action = null;
        encType = defaultEncType;
        body = target;
    }
    // Send body for <Form encType="text/plain" so we encode it into text
    if (formData && encType === "text/plain") {
        body = formData;
        formData = undefined;
    }
    return {
        action,
        method: method.toLowerCase(),
        encType,
        formData,
        body
    };
}
var _excluded = (/* unused pure expression or super */ null && ([
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition"
])), _excluded2 = (/* unused pure expression or super */ null && ([
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children"
])), _excluded3 = (/* unused pure expression or super */ null && ([
    "fetcherKey",
    "navigate",
    "reloadDocument",
    "replace",
    "state",
    "method",
    "action",
    "onSubmit",
    "relative",
    "preventScrollReset",
    "unstable_viewTransition"
]));
function createBrowserRouter(routes, opts) {
    return createRouter({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: createBrowserHistory({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
        routes,
        mapRouteProperties: UNSAFE_mapRouteProperties,
        window: opts == null ? void 0 : opts.window
    }).initialize();
}
function createHashRouter(routes, opts) {
    return createRouter({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: createHashHistory({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
        routes,
        mapRouteProperties: UNSAFE_mapRouteProperties,
        window: opts == null ? void 0 : opts.window
    }).initialize();
}
function parseHydrationData() {
    var _window;
    var state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
    if (state && state.errors) {
        state = _extends({}, state, {
            errors: deserializeErrors(state.errors)
        });
    }
    return state;
}
function deserializeErrors(errors) {
    if (!errors) return null;
    var entries = Object.entries(errors);
    var serialized = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], val = _step_value[1];
            // Hey you!  If you change this, please change the corresponding logic in
            // serializeErrors in react-router-dom/server.tsx :)
            if (val && val.__type === "RouteErrorResponse") {
                serialized[key] = new UNSAFE_ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
            } else if (val && val.__type === "Error") {
                // Attempt to reconstruct the right type of Error (i.e., ReferenceError)
                if (val.__subType) {
                    var ErrorConstructor = window[val.__subType];
                    if (typeof ErrorConstructor === "function") {
                        try {
                            // @ts-expect-error
                            var error = new ErrorConstructor(val.message);
                            // Wipe away the client-side stack trace.  Nothing to fill it in with
                            // because we don't serialize SSR stack traces for security reasons
                            error.stack = "";
                            serialized[key] = error;
                        } catch (e) {
                        // no-op - fall through and create a normal Error
                        }
                    }
                }
                if (serialized[key] == null) {
                    var error1 = new Error(val.message);
                    // Wipe away the client-side stack trace.  Nothing to fill it in with
                    // because we don't serialize SSR stack traces for security reasons
                    error1.stack = "";
                    serialized[key] = error1;
                }
            } else {
                serialized[key] = val;
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
    return serialized;
}
var ViewTransitionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext({
    isTransitioning: false
});
if (false) {}
var FetchersContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(new Map());
if (false) {}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Components
////////////////////////////////////////////////////////////////////////////////
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/ var START_TRANSITION = "startTransition";
var startTransitionImpl = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))[START_TRANSITION];
var FLUSH_SYNC = "flushSync";
var flushSyncImpl = /*#__PURE__*/ (react_dom__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (react_dom__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(react_dom__WEBPACK_IMPORTED_MODULE_1__, 2)))[FLUSH_SYNC];
var USE_ID = "useId";
var useIdImpl = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))[USE_ID];
function startTransitionSafe(cb) {
    if (startTransitionImpl) {
        startTransitionImpl(cb);
    } else {
        cb();
    }
}
function flushSyncSafe(cb) {
    if (flushSyncImpl) {
        flushSyncImpl(cb);
    } else {
        cb();
    }
}
var Deferred = function Deferred() {
    "use strict";
    var _this = this;
    (0,_swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_2__._)(this, Deferred);
    this.status = "pending";
    this.promise = new Promise(function(resolve, reject) {
        _this.resolve = function(value) {
            if (_this.status === "pending") {
                _this.status = "resolved";
                resolve(value);
            }
        };
        _this.reject = function(reason) {
            if (_this.status === "pending") {
                _this.status = "rejected";
                reject(reason);
            }
        };
    });
};
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function RouterProvider(_ref) {
    var fallbackElement = _ref.fallbackElement, router = _ref.router, future = _ref.future;
    var _React_useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)(react__WEBPACK_IMPORTED_MODULE_0__.useState(router.state), 2), state = _React_useState[0], setStateImpl = _React_useState[1];
    var _React_useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)(react__WEBPACK_IMPORTED_MODULE_0__.useState(), 2), pendingState = _React_useState1[0], setPendingState = _React_useState1[1];
    var _React_useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)(react__WEBPACK_IMPORTED_MODULE_0__.useState({
        isTransitioning: false
    }), 2), vtContext = _React_useState2[0], setVtContext = _React_useState2[1];
    var _React_useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)(react__WEBPACK_IMPORTED_MODULE_0__.useState(), 2), renderDfd = _React_useState3[0], setRenderDfd = _React_useState3[1];
    var _React_useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)(react__WEBPACK_IMPORTED_MODULE_0__.useState(), 2), transition = _React_useState4[0], setTransition = _React_useState4[1];
    var _React_useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)(react__WEBPACK_IMPORTED_MODULE_0__.useState(), 2), interruption = _React_useState5[0], setInterruption = _React_useState5[1];
    var fetcherData = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Map());
    var v7_startTransition = (future || {}).v7_startTransition;
    var optInStartTransition = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function(cb) {
        if (v7_startTransition) {
            startTransitionSafe(cb);
        } else {
            cb();
        }
    }, [
        v7_startTransition
    ]);
    var setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function(newState, _ref2) {
        var deletedFetchers = _ref2.deletedFetchers, flushSync = _ref2.unstable_flushSync, viewTransitionOpts = _ref2.unstable_viewTransitionOpts;
        deletedFetchers.forEach(function(key) {
            return fetcherData.current.delete(key);
        });
        newState.fetchers.forEach(function(fetcher, key) {
            if (fetcher.data !== undefined) {
                fetcherData.current.set(key, fetcher.data);
            }
        });
        var isViewTransitionUnavailable = router.window == null || typeof router.window.document.startViewTransition !== "function";
        // If this isn't a view transition or it's not available in this browser,
        // just update and be done with it
        if (!viewTransitionOpts || isViewTransitionUnavailable) {
            if (flushSync) {
                flushSyncSafe(function() {
                    return setStateImpl(newState);
                });
            } else {
                optInStartTransition(function() {
                    return setStateImpl(newState);
                });
            }
            return;
        }
        // flushSync + startViewTransition
        if (flushSync) {
            // Flush through the context to mark DOM elements as transition=ing
            flushSyncSafe(function() {
                // Cancel any pending transitions
                if (transition) {
                    renderDfd && renderDfd.resolve();
                    transition.skipTransition();
                }
                setVtContext({
                    isTransitioning: true,
                    flushSync: true,
                    currentLocation: viewTransitionOpts.currentLocation,
                    nextLocation: viewTransitionOpts.nextLocation
                });
            });
            // Update the DOM
            var t = router.window.document.startViewTransition(function() {
                flushSyncSafe(function() {
                    return setStateImpl(newState);
                });
            });
            // Clean up after the animation completes
            t.finished.finally(function() {
                flushSyncSafe(function() {
                    setRenderDfd(undefined);
                    setTransition(undefined);
                    setPendingState(undefined);
                    setVtContext({
                        isTransitioning: false
                    });
                });
            });
            flushSyncSafe(function() {
                return setTransition(t);
            });
            return;
        }
        // startTransition + startViewTransition
        if (transition) {
            // Interrupting an in-progress transition, cancel and let everything flush
            // out, and then kick off a new transition from the interruption state
            renderDfd && renderDfd.resolve();
            transition.skipTransition();
            setInterruption({
                state: newState,
                currentLocation: viewTransitionOpts.currentLocation,
                nextLocation: viewTransitionOpts.nextLocation
            });
        } else {
            // Completed navigation update with opted-in view transitions, let 'er rip
            setPendingState(newState);
            setVtContext({
                isTransitioning: true,
                flushSync: false,
                currentLocation: viewTransitionOpts.currentLocation,
                nextLocation: viewTransitionOpts.nextLocation
            });
        }
    }, [
        router.window,
        transition,
        renderDfd,
        fetcherData,
        optInStartTransition
    ]);
    // Need to use a layout effect here so we are subscribed early enough to
    // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(function() {
        return router.subscribe(setState);
    }, [
        router,
        setState
    ]);
    // When we start a view transition, create a Deferred we can use for the
    // eventual "completed" render
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function() {
        if (vtContext.isTransitioning && !vtContext.flushSync) {
            setRenderDfd(new Deferred());
        }
    }, [
        vtContext
    ]);
    // Once the deferred is created, kick off startViewTransition() to update the
    // DOM and then wait on the Deferred to resolve (indicating the DOM update has
    // happened)
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function() {
        if (renderDfd && pendingState && router.window) {
            var newState = pendingState;
            var renderPromise = renderDfd.promise;
            var transition = router.window.document.startViewTransition(/*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__._)(function() {
                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__/* .__generator */ .Jh)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            optInStartTransition(function() {
                                return setStateImpl(newState);
                            });
                            return [
                                4,
                                renderPromise
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            transition.finished.finally(function() {
                setRenderDfd(undefined);
                setTransition(undefined);
                setPendingState(undefined);
                setVtContext({
                    isTransitioning: false
                });
            });
            setTransition(transition);
        }
    }, [
        optInStartTransition,
        pendingState,
        renderDfd,
        router.window
    ]);
    // When the new location finally renders and is committed to the DOM, this
    // effect will run to resolve the transition
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function() {
        if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
            renderDfd.resolve();
        }
    }, [
        renderDfd,
        transition,
        state.location,
        pendingState
    ]);
    // If we get interrupted with a new navigation during a transition, we skip
    // the active transition, let it cleanup, then kick it off again here
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function() {
        if (!vtContext.isTransitioning && interruption) {
            setPendingState(interruption.state);
            setVtContext({
                isTransitioning: true,
                flushSync: false,
                currentLocation: interruption.currentLocation,
                nextLocation: interruption.nextLocation
            });
            setInterruption(undefined);
        }
    }, [
        vtContext.isTransitioning,
        interruption
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function() {
         false ? 0 : void 0;
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var navigator = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function() {
        return {
            createHref: router.createHref,
            encodeLocation: router.encodeLocation,
            go: function(n) {
                return router.navigate(n);
            },
            push: function(to, state, opts) {
                return router.navigate(to, {
                    state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                });
            },
            replace: function(to, state, opts) {
                return router.navigate(to, {
                    replace: true,
                    state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                });
            }
        };
    }, [
        router
    ]);
    var basename = router.basename || "/";
    var dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function() {
        return {
            router,
            navigator,
            static: false,
            basename
        };
    }, [
        router,
        navigator,
        basename
    ]);
    // The fragment and {null} here are important!  We need them to keep React 18's
    // useId happy when we are server-rendering since we may have a <script> here
    // containing the hydrated server-side staticContext (from StaticRouterProvider).
    // useId relies on the component tree structure to generate deterministic id's
    // so we need to ensure it remains the same on the client even though
    // we don't need the <script> tag
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__/* .UNSAFE_DataRouterContext */ .w3.Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__/* .UNSAFE_DataRouterStateContext */ .FR.Provider, {
        value: state
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(FetchersContext.Provider, {
        value: fetcherData.current
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTransitionContext.Provider, {
        value: vtContext
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__/* .Router */ .F0, {
        basename: basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: navigator,
        future: {
            v7_relativeSplatPath: router.future.v7_relativeSplatPath
        }
    }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRoutes, {
        routes: router.routes,
        future: router.future,
        state: state
    }) : fallbackElement))))), null);
}
function DataRoutes(_ref3) {
    var routes = _ref3.routes, future = _ref3.future, state = _ref3.state;
    return (0,react_router__WEBPACK_IMPORTED_MODULE_6__/* .UNSAFE_useRoutesImpl */ .DY)(routes, undefined, state, future);
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */ function BrowserRouter(_ref4) {
    var basename = _ref4.basename, children = _ref4.children, future = _ref4.future, _$window = _ref4.window;
    var historyRef = React.useRef();
    if (historyRef.current == null) {
        historyRef.current = createBrowserHistory({
            window: _$window,
            v5Compat: true
        });
    }
    var history = historyRef.current;
    var _React_useState = _sliced_to_array(React.useState({
        action: history.action,
        location: history.location
    }), 2), state = _React_useState[0], setStateImpl = _React_useState[1];
    var v7_startTransition = (future || {}).v7_startTransition;
    var setState = React.useCallback(function(newState) {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(function() {
            return setStateImpl(newState);
        }) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    React.useLayoutEffect(function() {
        return history.listen(setState);
    }, [
        history,
        setState
    ]);
    return /*#__PURE__*/ React.createElement(Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */ function HashRouter(_ref5) {
    var basename = _ref5.basename, children = _ref5.children, future = _ref5.future, _$window = _ref5.window;
    var historyRef = React.useRef();
    if (historyRef.current == null) {
        historyRef.current = createHashHistory({
            window: _$window,
            v5Compat: true
        });
    }
    var history = historyRef.current;
    var _React_useState = _sliced_to_array(React.useState({
        action: history.action,
        location: history.location
    }), 2), state = _React_useState[0], setStateImpl = _React_useState[1];
    var v7_startTransition = (future || {}).v7_startTransition;
    var setState = React.useCallback(function(newState) {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(function() {
            return setStateImpl(newState);
        }) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    React.useLayoutEffect(function() {
        return history.listen(setState);
    }, [
        history,
        setState
    ]);
    return /*#__PURE__*/ React.createElement(Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */ function HistoryRouter(_ref6) {
    var basename = _ref6.basename, children = _ref6.children, future = _ref6.future, history = _ref6.history;
    var _React_useState = _sliced_to_array(React.useState({
        action: history.action,
        location: history.location
    }), 2), state = _React_useState[0], setStateImpl = _React_useState[1];
    var v7_startTransition = (future || {}).v7_startTransition;
    var setState = React.useCallback(function(newState) {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(function() {
            return setStateImpl(newState);
        }) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    React.useLayoutEffect(function() {
        return history.listen(setState);
    }, [
        history,
        setState
    ]);
    return /*#__PURE__*/ React.createElement(Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
if (false) {}
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware `<a>`.
 */ var Link = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function LinkWithRef(_ref7, ref) {
    var handleClick = function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) {
            internalOnClick(event);
        }
    };
    var onClick = _ref7.onClick, relative = _ref7.relative, reloadDocument = _ref7.reloadDocument, replace = _ref7.replace, state = _ref7.state, target = _ref7.target, to = _ref7.to, preventScrollReset = _ref7.preventScrollReset, unstable_viewTransition = _ref7.unstable_viewTransition, rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
    var basename = React.useContext(UNSAFE_NavigationContext).basename;
    // Rendered into <a href> for absolute URLs
    var absoluteHref;
    var isExternal = false;
    if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
        // Render the absolute href server- and client-side
        absoluteHref = to;
        // Only check for external origins client-side
        if (isBrowser) {
            try {
                var currentUrl = new URL(window.location.href);
                var targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
                var path = stripBasename(targetUrl.pathname, basename);
                if (targetUrl.origin === currentUrl.origin && path != null) {
                    // Strip the protocol/origin/basename for same-origin absolute URLs
                    to = path + targetUrl.search + targetUrl.hash;
                } else {
                    isExternal = true;
                }
            } catch (e) {
                // We can't do external URL detection without a valid URL
                 false ? 0 : void 0;
            }
        }
    }
    // Rendered into <a href> for relative URLs
    var href = useHref(to, {
        relative
    });
    var internalOnClick = useLinkClickHandler(to, {
        replace,
        state,
        target,
        preventScrollReset,
        relative,
        unstable_viewTransition
    });
    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
    React.createElement("a", _extends({}, rest, {
        href: absoluteHref || href,
        onClick: isExternal || reloadDocument ? onClick : handleClick,
        ref: ref,
        target: target
    })));
})));
if (false) {}
/**
 * A `<Link>` wrapper that knows if it's "active" or not.
 */ var NavLink = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function NavLinkWithRef(_ref8, ref) {
    var tmp = _ref8["aria-current"], ariaCurrentProp = tmp === void 0 ? "page" : tmp, _ref8_caseSensitive = _ref8.caseSensitive, caseSensitive = _ref8_caseSensitive === void 0 ? false : _ref8_caseSensitive, tmp1 = _ref8.className, classNameProp = tmp1 === void 0 ? "" : tmp1, _ref8_end = _ref8.end, end = _ref8_end === void 0 ? false : _ref8_end, styleProp = _ref8.style, to = _ref8.to, unstable_viewTransition = _ref8.unstable_viewTransition, children = _ref8.children, rest = _objectWithoutPropertiesLoose(_ref8, _excluded2);
    var path = useResolvedPath(to, {
        relative: rest.relative
    });
    var location = useLocation();
    var routerState = React.useContext(UNSAFE_DataRouterStateContext);
    var _React_useContext = React.useContext(UNSAFE_NavigationContext), navigator = _React_useContext.navigator, basename = _React_useContext.basename;
    var isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useViewTransitionState(path) && unstable_viewTransition === true;
    var toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
    var locationPathname = location.pathname;
    var nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) {
        nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
    }
    // If the `to` has a trailing slash, look at that exact spot.  Otherwise,
    // we're looking for a slash _after_ what's in `to`.  For example:
    //
    // <NavLink to="/users"> and <NavLink to="/users/">
    // both want to look for a / at index 6 to match URL `/users/matt`
    var endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
    var isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
    var isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    var renderProps = {
        isActive,
        isPending,
        isTransitioning
    };
    var ariaCurrent = isActive ? ariaCurrentProp : undefined;
    var className;
    if (typeof classNameProp === "function") {
        className = classNameProp(renderProps);
    } else {
        // If the className prop is not a function, we use a default `active`
        // class for <NavLink />s that are active. In v5 `active` was the default
        // value for `activeClassName`, but we are removing that API and can still
        // use the old default behavior for a cleaner upgrade path and keep the
        // simple styling rules working as they currently do.
        className = [
            classNameProp,
            isActive ? "active" : null,
            isPending ? "pending" : null,
            isTransitioning ? "transitioning" : null
        ].filter(Boolean).join(" ");
    }
    var style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
    return /*#__PURE__*/ React.createElement(Link, _extends({}, rest, {
        "aria-current": ariaCurrent,
        className: className,
        ref: ref,
        style: style,
        to: to,
        unstable_viewTransition: unstable_viewTransition
    }), typeof children === "function" ? children(renderProps) : children);
})));
if (false) {}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */ var Form = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function(_ref9, forwardedRef) {
    var fetcherKey = _ref9.fetcherKey, navigate = _ref9.navigate, reloadDocument = _ref9.reloadDocument, replace = _ref9.replace, state = _ref9.state, _ref9_method = _ref9.method, method = _ref9_method === void 0 ? defaultMethod : _ref9_method, action = _ref9.action, onSubmit = _ref9.onSubmit, relative = _ref9.relative, preventScrollReset = _ref9.preventScrollReset, unstable_viewTransition = _ref9.unstable_viewTransition, props = _objectWithoutPropertiesLoose(_ref9, _excluded3);
    var submit = useSubmit();
    var formAction = useFormAction(action, {
        relative
    });
    var formMethod = method.toLowerCase() === "get" ? "get" : "post";
    var submitHandler = function(event) {
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        var submitter = event.nativeEvent.submitter;
        var submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
        submit(submitter || event.currentTarget, {
            fetcherKey,
            method: submitMethod,
            navigate,
            replace,
            state,
            relative,
            preventScrollReset,
            unstable_viewTransition
        });
    };
    return /*#__PURE__*/ React.createElement("form", _extends({
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler
    }, props));
})));
if (false) {}
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */ function ScrollRestoration(_ref10) {
    var getKey = _ref10.getKey, storageKey = _ref10.storageKey;
    useScrollRestoration({
        getKey,
        storageKey
    });
    return null;
}
if (false) {}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var DataRouterHook;
(function(DataRouterHook) {
    DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
    DataRouterHook["UseSubmit"] = "useSubmit";
    DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
    DataRouterHook["UseFetcher"] = "useFetcher";
    DataRouterHook["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook) {
    DataRouterStateHook["UseFetcher"] = "useFetcher";
    DataRouterStateHook["UseFetchers"] = "useFetchers";
    DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
// Internal hooks
function getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
    var ctx = React.useContext(UNSAFE_DataRouterContext);
    !ctx ?  false ? 0 : UNSAFE_invariant(false) : void 0;
    return ctx;
}
function useDataRouterState(hookName) {
    var state = React.useContext(UNSAFE_DataRouterStateContext);
    !state ?  false ? 0 : UNSAFE_invariant(false) : void 0;
    return state;
}
// External hooks
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */ function useLinkClickHandler(to, _temp) {
    var _ref = _temp === void 0 ? {} : _temp, target = _ref.target, replaceProp = _ref.replace, state = _ref.state, preventScrollReset = _ref.preventScrollReset, relative = _ref.relative, unstable_viewTransition = _ref.unstable_viewTransition;
    var navigate = useNavigate();
    var location = useLocation();
    var path = useResolvedPath(to, {
        relative
    });
    return React.useCallback(function(event) {
        if (shouldProcessLinkClick(event, target)) {
            event.preventDefault();
            // If the URL hasn't changed, a regular <a> will do a replace instead of
            // a push, so do the same here unless the replace prop is explicitly set
            var replace = replaceProp !== undefined ? replaceProp : createPath(location) === createPath(path);
            navigate(to, {
                replace,
                state,
                preventScrollReset,
                relative,
                unstable_viewTransition
            });
        }
    }, [
        location,
        navigate,
        path,
        replaceProp,
        state,
        target,
        to,
        preventScrollReset,
        relative,
        unstable_viewTransition
    ]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */ function useSearchParams(defaultInit) {
     false ? 0 : void 0;
    var defaultSearchParamsRef = React.useRef(createSearchParams(defaultInit));
    var hasSetSearchParamsRef = React.useRef(false);
    var location = useLocation();
    var searchParams = React.useMemo(function() {
        return(// Only merge in the defaults if we haven't yet called setSearchParams.
        // Once we call that we want those to take precedence, otherwise you can't
        // remove a param with setSearchParams({}) if it has an initial value
        getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current));
    }, [
        location.search
    ]);
    var navigate = useNavigate();
    var setSearchParams = React.useCallback(function(nextInit, navigateOptions) {
        var newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
        hasSetSearchParamsRef.current = true;
        navigate("?" + newSearchParams, navigateOptions);
    }, [
        navigate,
        searchParams
    ]);
    return [
        searchParams,
        setSearchParams
    ];
}
function validateClientSideSubmission() {
    if (typeof document === "undefined") {
        throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
    }
}
var fetcherId = 0;
var getUniqueFetcherId = function() {
    return "__" + String(++fetcherId) + "__";
};
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */ function useSubmit() {
    var router = useDataRouterContext(DataRouterHook.UseSubmit).router;
    var basename = React.useContext(UNSAFE_NavigationContext).basename;
    var currentRouteId = UNSAFE_useRouteId();
    return React.useCallback(function(target, options) {
        if (options === void 0) {
            options = {};
        }
        validateClientSideSubmission();
        var _getFormSubmissionInfo = getFormSubmissionInfo(target, basename), action = _getFormSubmissionInfo.action, method = _getFormSubmissionInfo.method, encType = _getFormSubmissionInfo.encType, formData = _getFormSubmissionInfo.formData, body = _getFormSubmissionInfo.body;
        if (options.navigate === false) {
            var key = options.fetcherKey || getUniqueFetcherId();
            router.fetch(key, currentRouteId, options.action || action, {
                preventScrollReset: options.preventScrollReset,
                formData,
                body,
                formMethod: options.method || method,
                formEncType: options.encType || encType,
                unstable_flushSync: options.unstable_flushSync
            });
        } else {
            router.navigate(options.action || action, {
                preventScrollReset: options.preventScrollReset,
                formData,
                body,
                formMethod: options.method || method,
                formEncType: options.encType || encType,
                replace: options.replace,
                state: options.state,
                fromRouteId: currentRouteId,
                unstable_flushSync: options.unstable_flushSync,
                unstable_viewTransition: options.unstable_viewTransition
            });
        }
    }, [
        router,
        basename,
        currentRouteId
    ]);
}
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function useFormAction(action, _temp2) {
    var relative = (_temp2 === void 0 ? {} : _temp2).relative;
    var basename = React.useContext(UNSAFE_NavigationContext).basename;
    var routeContext = React.useContext(UNSAFE_RouteContext);
    !routeContext ?  false ? 0 : UNSAFE_invariant(false) : void 0;
    var _routeContext_matches_slice = _sliced_to_array(routeContext.matches.slice(-1), 1), match = _routeContext_matches_slice[0];
    // Shallow clone path so we can modify it below, otherwise we modify the
    // object referenced by useMemo inside useResolvedPath
    var path = _extends({}, useResolvedPath(action ? action : ".", {
        relative
    }));
    // If no action was specified, browsers will persist current search params
    // when determining the path, so match that behavior
    // https://github.com/remix-run/remix/issues/927
    var location = useLocation();
    if (action == null) {
        // Safe to write to this directly here since if action was undefined, we
        // would have called useResolvedPath(".") which will never include a search
        path.search = location.search;
        // When grabbing search params from the URL, remove any included ?index param
        // since it might not apply to our contextual route.  We add it back based
        // on match.route.index below
        var params = new URLSearchParams(path.search);
        if (params.has("index") && params.get("index") === "") {
            params.delete("index");
            path.search = params.toString() ? "?" + params.toString() : "";
        }
    }
    if ((!action || action === ".") && match.route.index) {
        path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the form action.  If this is a root navigation, then just use
    // the raw basename which allows the basename to have full control over the
    // presence of a trailing slash on root actions
    if (basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([
            basename,
            path.pathname
        ]);
    }
    return createPath(path);
}
// TODO: (v7) Change the useFetcher generic default from `any` to `unknown`
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */ function useFetcher(_temp3) {
    var _route$matches;
    var key = (_temp3 === void 0 ? {} : _temp3).key;
    var router = useDataRouterContext(DataRouterHook.UseFetcher).router;
    var state = useDataRouterState(DataRouterStateHook.UseFetcher);
    var fetcherData = React.useContext(FetchersContext);
    var route = React.useContext(UNSAFE_RouteContext);
    var routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
    !fetcherData ?  false ? 0 : UNSAFE_invariant(false) : void 0;
    !route ?  false ? 0 : UNSAFE_invariant(false) : void 0;
    !(routeId != null) ?  false ? 0 : UNSAFE_invariant(false) : void 0;
    // Fetcher key handling
    // OK to call conditionally to feature detect `useId`
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var defaultKey = useIdImpl ? useIdImpl() : "";
    var _React_useState = _sliced_to_array(React.useState(key || defaultKey), 2), fetcherKey = _React_useState[0], setFetcherKey = _React_useState[1];
    if (key && key !== fetcherKey) {
        setFetcherKey(key);
    } else if (!fetcherKey) {
        // We will only fall through here when `useId` is not available
        setFetcherKey(getUniqueFetcherId());
    }
    // Registration/cleanup
    React.useEffect(function() {
        router.getFetcher(fetcherKey);
        return function() {
            // Tell the router we've unmounted - if v7_fetcherPersist is enabled this
            // will not delete immediately but instead queue up a delete after the
            // fetcher returns to an `idle` state
            router.deleteFetcher(fetcherKey);
        };
    }, [
        router,
        fetcherKey
    ]);
    // Fetcher additions
    var load = React.useCallback(function(href, opts) {
        !routeId ?  false ? 0 : UNSAFE_invariant(false) : void 0;
        router.fetch(fetcherKey, routeId, href, opts);
    }, [
        fetcherKey,
        routeId,
        router
    ]);
    var submitImpl = useSubmit();
    var submit = React.useCallback(function(target, opts) {
        submitImpl(target, _extends({}, opts, {
            navigate: false,
            fetcherKey
        }));
    }, [
        fetcherKey,
        submitImpl
    ]);
    var FetcherForm = React.useMemo(function() {
        var FetcherForm = /*#__PURE__*/ React.forwardRef(function(props, ref) {
            return /*#__PURE__*/ React.createElement(Form, _extends({}, props, {
                navigate: false,
                fetcherKey: fetcherKey,
                ref: ref
            }));
        });
        if (false) {}
        return FetcherForm;
    }, [
        fetcherKey
    ]);
    // Exposed FetcherWithComponents
    var fetcher = state.fetchers.get(fetcherKey) || IDLE_FETCHER;
    var data = fetcherData.get(fetcherKey);
    var fetcherWithComponents = React.useMemo(function() {
        return _extends({
            Form: FetcherForm,
            submit,
            load
        }, fetcher, {
            data
        });
    }, [
        FetcherForm,
        submit,
        load,
        fetcher,
        data
    ]);
    return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */ function useFetchers() {
    var state = useDataRouterState(DataRouterStateHook.UseFetchers);
    return Array.from(state.fetchers.entries()).map(function(_ref11) {
        var _$_ref11 = _sliced_to_array(_ref11, 2), key = _$_ref11[0], fetcher = _$_ref11[1];
        return _extends({}, fetcher, {
            key
        });
    });
}
var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
var savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */ function useScrollRestoration(_temp4) {
    var _ref = _temp4 === void 0 ? {} : _temp4, getKey = _ref.getKey, storageKey = _ref.storageKey;
    var router = useDataRouterContext(DataRouterHook.UseScrollRestoration).router;
    var _useDataRouterState = useDataRouterState(DataRouterStateHook.UseScrollRestoration), restoreScrollPosition = _useDataRouterState.restoreScrollPosition, preventScrollReset = _useDataRouterState.preventScrollReset;
    var basename = React.useContext(UNSAFE_NavigationContext).basename;
    var location = useLocation();
    var matches = useMatches();
    var navigation = useNavigation();
    // Trigger manual scroll restoration while we're active
    React.useEffect(function() {
        window.history.scrollRestoration = "manual";
        return function() {
            window.history.scrollRestoration = "auto";
        };
    }, []);
    // Save positions on pagehide
    usePageHide(React.useCallback(function() {
        if (navigation.state === "idle") {
            var key = (getKey ? getKey(location, matches) : null) || location.key;
            savedScrollPositions[key] = window.scrollY;
        }
        try {
            sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
        } catch (error) {
             false ? 0 : void 0;
        }
        window.history.scrollRestoration = "auto";
    }, [
        storageKey,
        getKey,
        navigation.state,
        location,
        matches
    ]));
    // Read in any saved scroll locations
    if (typeof document !== "undefined") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React.useLayoutEffect(function() {
            try {
                var sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
                if (sessionPositions) {
                    savedScrollPositions = JSON.parse(sessionPositions);
                }
            } catch (e) {
            // no-op, use default empty object
            }
        }, [
            storageKey
        ]);
        // Enable scroll restoration in the router
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React.useLayoutEffect(function() {
            var getKeyWithoutBasename = getKey && basename !== "/" ? function(location, matches) {
                return getKey(_extends({}, location, {
                    pathname: stripBasename(location.pathname, basename) || location.pathname
                }), matches);
            } : getKey;
            var disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, function() {
                return window.scrollY;
            }, getKeyWithoutBasename);
            return function() {
                return disableScrollRestoration && disableScrollRestoration();
            };
        }, [
            router,
            basename,
            getKey
        ]);
        // Restore scrolling when state.restoreScrollPosition changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React.useLayoutEffect(function() {
            // Explicit false means don't do anything (used for submissions)
            if (restoreScrollPosition === false) {
                return;
            }
            // been here before, scroll to it
            if (typeof restoreScrollPosition === "number") {
                window.scrollTo(0, restoreScrollPosition);
                return;
            }
            // try to scroll to the hash
            if (location.hash) {
                var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
                if (el) {
                    el.scrollIntoView();
                    return;
                }
            }
            // Don't reset if this navigation opted out
            if (preventScrollReset === true) {
                return;
            }
            // otherwise go to the top on new locations
            window.scrollTo(0, 0);
        }, [
            location,
            restoreScrollPosition,
            preventScrollReset
        ]);
    }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */ function useBeforeUnload(callback, options) {
    var capture = (options || {}).capture;
    React.useEffect(function() {
        var opts = capture != null ? {
            capture
        } : undefined;
        window.addEventListener("beforeunload", callback, opts);
        return function() {
            window.removeEventListener("beforeunload", callback, opts);
        };
    }, [
        callback,
        capture
    ]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */ function usePageHide(callback, options) {
    var capture = (options || {}).capture;
    React.useEffect(function() {
        var opts = capture != null ? {
            capture
        } : undefined;
        window.addEventListener("pagehide", callback, opts);
        return function() {
            window.removeEventListener("pagehide", callback, opts);
        };
    }, [
        callback,
        capture
    ]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */ function usePrompt(_ref12) {
    var when = _ref12.when, message = _ref12.message;
    var blocker = useBlocker(when);
    React.useEffect(function() {
        if (blocker.state === "blocked") {
            var proceed = window.confirm(message);
            if (proceed) {
                // This timeout is needed to avoid a weird "race" on POP navigations
                // between the `window.history` revert navigation and the result of
                // `window.confirm`
                setTimeout(blocker.proceed, 0);
            } else {
                blocker.reset();
            }
        }
    }, [
        blocker,
        message
    ]);
    React.useEffect(function() {
        if (blocker.state === "blocked" && !when) {
            blocker.reset();
        }
    }, [
        blocker,
        when
    ]);
}
/**
 * Return a boolean indicating if there is an active view transition to the
 * given href.  You can use this value to render CSS classes or viewTransitionName
 * styles onto your elements
 *
 * @param href The destination href
 * @param [opts.relative] Relative routing type ("route" | "path")
 */ function useViewTransitionState(to, opts) {
    if (opts === void 0) {
        opts = {};
    }
    var vtContext = React.useContext(ViewTransitionContext);
    !(vtContext != null) ?  false ? 0 : UNSAFE_invariant(false) : void 0;
    var basename = useDataRouterContext(DataRouterHook.useViewTransitionState).basename;
    var path = useResolvedPath(to, {
        relative: opts.relative
    });
    if (!vtContext.isTransitioning) {
        return false;
    }
    var currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    var nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    // Transition is active if we're going to or coming from the indicated
    // destination.  This ensures that other PUSH navigations that reverse
    // an indicated transition apply.  I.e., on the list view you have:
    //
    //   <NavLink to="/details/1" unstable_viewTransition>
    //
    // If you click the breadcrumb back to the list view:
    //
    //   <NavLink to="/list" unstable_viewTransition>
    //
    // We should apply the transition because it's indicated as active going
    // from /list -> /details/1 and therefore should be active on the reverse
    // (even though this isn't strictly a POP reverse)
    return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
}
//#endregion
 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 945:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DY: function() { return /* binding */ useRoutesImpl; },
/* harmony export */   F0: function() { return /* binding */ Router; },
/* harmony export */   FR: function() { return /* binding */ DataRouterStateContext; },
/* harmony export */   f_: function() { return /* binding */ useLoaderData; },
/* harmony export */   lk: function() { return /* binding */ useRouteError; },
/* harmony export */   w3: function() { return /* binding */ DataRouterContext; }
/* harmony export */ });
/* unused harmony exports Await, MemoryRouter, Navigate, Outlet, Route, RouterProvider, Routes, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext, UNSAFE_mapRouteProperties, UNSAFE_useRouteId, createMemoryRouter, createRoutesFromChildren, createRoutesFromElements, renderMatches, useActionData, useAsyncError, useAsyncValue, useBlocker, useHref, useInRouterContext, useLocation, useMatch, useMatches, useNavigate, useNavigation, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRevalidator, useRouteLoaderData, useRoutes */
/* harmony import */ var _swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(862);
/* harmony import */ var _swc_helpers_create_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(267);
/* harmony import */ var _swc_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _swc_helpers_create_super__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(262);
/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 








function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function _extends(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
var DataRouterContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (false) {}
var DataRouterStateContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (false) {}
var AwaitContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (false) {}
/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level `<Router>` API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */ var NavigationContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (false) {}
var LocationContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (false) {}
var RouteContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
});
if (false) {}
var RouteErrorContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (false) {}
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */ function useHref(to, _temp) {
    var relative = (_temp === void 0 ? {} : _temp).relative;
    !useInRouterContext() ?  false ? 0 : UNSAFE_invariant(false) : void 0;
    var _React_useContext = React.useContext(NavigationContext), basename = _React_useContext.basename, navigator = _React_useContext.navigator;
    var _useResolvedPath = useResolvedPath(to, {
        relative
    }), hash = _useResolvedPath.hash, pathname = _useResolvedPath.pathname, search = _useResolvedPath.search;
    var joinedPathname = pathname;
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the href.  If this is a root navigation, then just use the raw
    // basename which allows the basename to have full control over the presence
    // of a trailing slash on root links
    if (basename !== "/") {
        joinedPathname = pathname === "/" ? basename : joinPaths([
            basename,
            pathname
        ]);
    }
    return navigator.createHref({
        pathname: joinedPathname,
        search,
        hash
    });
}
/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */ function useInRouterContext() {
    return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */ function useLocation() {
    !useInRouterContext() ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
    return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */ function useNavigationType() {
    return React.useContext(LocationContext).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * `<NavLink>`.
 *
 * @see https://reactrouter.com/hooks/use-match
 */ function useMatch(pattern) {
    !useInRouterContext() ?  false ? 0 : UNSAFE_invariant(false) : void 0;
    var pathname = useLocation().pathname;
    return React.useMemo(function() {
        return matchPath(pattern, pathname);
    }, [
        pathname,
        pattern
    ]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */ var navigateEffectWarning = (/* unused pure expression or super */ null && ("You should call navigate() in a React.useEffect(), not when " + "your component is first rendered."));
// Mute warnings for calls to useNavigate in SSR environments
function useIsomorphicLayoutEffect(cb) {
    var isStatic = React.useContext(NavigationContext).static;
    if (!isStatic) {
        // We should be able to get rid of this once react 18.3 is released
        // See: https://github.com/facebook/react/pull/26395
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React.useLayoutEffect(cb);
    }
}
/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */ function useNavigate() {
    var isDataRoute = React.useContext(RouteContext).isDataRoute;
    // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
    !useInRouterContext() ?  false ? 0 : UNSAFE_invariant(false) : void 0;
    var dataRouterContext = React.useContext(DataRouterContext);
    var _React_useContext = React.useContext(NavigationContext), basename = _React_useContext.basename, future = _React_useContext.future, navigator = _React_useContext.navigator;
    var matches = React.useContext(RouteContext).matches;
    var _useLocation = useLocation(), locationPathname = _useLocation.pathname;
    var routePathnamesJson = JSON.stringify(UNSAFE_getResolveToMatches(matches, future.v7_relativeSplatPath));
    var activeRef = React.useRef(false);
    useIsomorphicLayoutEffect(function() {
        activeRef.current = true;
    });
    var navigate = React.useCallback(function(to, options) {
        if (options === void 0) {
            options = {};
        }
         false ? 0 : void 0;
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our history listener yet
        if (!activeRef.current) return;
        if (typeof to === "number") {
            navigator.go(to);
            return;
        }
        var path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
        // If we're operating within a basename, prepend it to the pathname prior
        // to handing off to history (but only if we're not in a data router,
        // otherwise it'll prepend the basename inside of the router).
        // If this is a root navigation, then we navigate to the raw basename
        // which allows the basename to have full control over the presence of a
        // trailing slash on root links
        if (dataRouterContext == null && basename !== "/") {
            path.pathname = path.pathname === "/" ? basename : joinPaths([
                basename,
                path.pathname
            ]);
        }
        (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
    }, [
        basename,
        navigator,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
    ]);
    return navigate;
}
var OutletContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.createContext(null)));
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */ function useOutletContext() {
    return React.useContext(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by `<Outlet>` to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */ function useOutlet(context) {
    var outlet = React.useContext(RouteContext).outlet;
    if (outlet) {
        return /*#__PURE__*/ React.createElement(OutletContext.Provider, {
            value: context
        }, outlet);
    }
    return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */ function useParams() {
    var matches = React.useContext(RouteContext).matches;
    var routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */ function useResolvedPath(to, _temp2) {
    var relative = (_temp2 === void 0 ? {} : _temp2).relative;
    var future = React.useContext(NavigationContext).future;
    var matches = React.useContext(RouteContext).matches;
    var _useLocation = useLocation(), locationPathname = _useLocation.pathname;
    var routePathnamesJson = JSON.stringify(UNSAFE_getResolveToMatches(matches, future.v7_relativeSplatPath));
    return React.useMemo(function() {
        return resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path");
    }, [
        to,
        routePathnamesJson,
        locationPathname,
        relative
    ]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an `<Outlet>` to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */ function useRoutes(routes, locationArg) {
    return useRoutesImpl(routes, locationArg);
}
// Internal implementation with accept optional param for RouterProvider usage
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
    !useInRouterContext() ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
    var navigator = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext).navigator;
    var _React_useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext), parentMatches = _React_useContext.matches;
    var routeMatch = parentMatches[parentMatches.length - 1];
    var parentParams = routeMatch ? routeMatch.params : {};
    var parentPathname = routeMatch ? routeMatch.pathname : "/";
    var parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    var parentRoute = routeMatch && routeMatch.route;
    if (false) { var parentPath; }
    var locationFromContext = useLocation();
    var location;
    if (locationArg) {
        var _parsedLocationArg$pa;
        var parsedLocationArg = typeof locationArg === "string" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .parsePath */ .cP)(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
        location = parsedLocationArg;
    } else {
        location = locationFromContext;
    }
    var pathname = location.pathname || "/";
    var remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
    var matches = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .matchRoutes */ .fp)(routes, {
        pathname: remainingPathname
    });
    if (false) {}
    var renderedMatches = _renderMatches(matches && matches.map(function(match) {
        return Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .joinPaths */ .RQ)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
            ]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .joinPaths */ .RQ)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
            ])
        });
    }), parentMatches, dataRouterState, future);
    // When a user passes in a `locationArg`, the associated routes need to
    // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
    // to use the scoped location instead of the global location.
    if (locationArg && renderedMatches) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
            value: {
                location: _extends({
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default"
                }, location),
                navigationType: _remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .Action */ .aU.Pop
            }
        }, renderedMatches);
    }
    return renderedMatches;
}
function DefaultErrorComponent() {
    var error = useRouteError();
    var message = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .isRouteErrorResponse */ .WK)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
    var stack = error instanceof Error ? error.stack : null;
    var lightgrey = "rgba(200,200,200, 0.5)";
    var preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
    };
    var codeStyles = {
        padding: "2px 4px",
        backgroundColor: lightgrey
    };
    var devInfo = null;
    if (false) {}
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, message), stack ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
        style: preStyles
    }, stack) : null, devInfo);
}
var defaultErrorElement = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultErrorComponent, null);
var RenderErrorBoundary = /*#__PURE__*/ function(_React_Component) {
    "use strict";
    (0,_swc_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__._)(RenderErrorBoundary, _React_Component);
    var _super = (0,_swc_helpers_create_super__WEBPACK_IMPORTED_MODULE_3__._)(RenderErrorBoundary);
    function RenderErrorBoundary(props) {
        (0,_swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_4__._)(this, RenderErrorBoundary);
        var _this;
        _this = _super.call(this, props);
        _this.state = {
            location: props.location,
            revalidation: props.revalidation,
            error: props.error
        };
        return _this;
    }
    (0,_swc_helpers_create_class__WEBPACK_IMPORTED_MODULE_5__._)(RenderErrorBoundary, [
        {
            key: "componentDidCatch",
            value: function componentDidCatch(error, errorInfo) {
                console.error("React Router caught the following error during render", error, errorInfo);
            }
        },
        {
            key: "render",
            value: function render() {
                return this.state.error !== undefined ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
                    value: this.props.routeContext
                }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteErrorContext.Provider, {
                    value: this.state.error,
                    children: this.props.component
                })) : this.props.children;
            }
        }
    ], [
        {
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(error) {
                return {
                    error: error
                };
            }
        },
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(props, state) {
                // When we get into an error state, the user will likely click "back" to the
                // previous page that didn't have an error. Because this wraps the entire
                // application, that will have no effect--the error page continues to display.
                // This gives us a mechanism to recover from the error when the location changes.
                //
                // Whether we're in an error state or not, we update the location in state
                // so that when we are in an error state, it gets reset when a new location
                // comes in and the user recovers from the error.
                if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
                    return {
                        error: props.error,
                        location: props.location,
                        revalidation: props.revalidation
                    };
                }
                // If we're not changing locations, preserve the location but still surface
                // any new errors that may come through. We retain the existing error, we do
                // this because the error provided from the app state may be cleared without
                // the location changing.
                return {
                    error: props.error !== undefined ? props.error : state.error,
                    location: state.location,
                    revalidation: props.revalidation || state.revalidation
                };
            }
        }
    ]);
    return RenderErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
function RenderedRoute(_ref) {
    var routeContext = _ref.routeContext, match = _ref.match, children = _ref.children;
    var dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
    // Track how deep we got in our render pass to emulate SSR componentDidCatch
    // in a DataStaticRouter
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
        dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
        value: routeContext
    }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState, future) {
    var _dataRouterState2;
    if (parentMatches === void 0) {
        parentMatches = [];
    }
    if (dataRouterState === void 0) {
        dataRouterState = null;
    }
    if (future === void 0) {
        future = null;
    }
    if (matches == null) {
        var _dataRouterState;
        if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) {
            // Don't bail if we have data router errors so we can render them in the
            // boundary.  Use the pre-matched (or shimmed) matches
            matches = dataRouterState.matches;
        } else {
            return null;
        }
    }
    var renderedMatches = matches;
    // If we have data errors, trim matches to the highest error boundary
    var errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
    if (errors != null) {
        var errorIndex = renderedMatches.findIndex(function(m) {
            return m.route.id && (errors == null ? void 0 : errors[m.route.id]);
        });
        !(errorIndex >= 0) ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
    }
    // If we're in a partial hydration mode, detect if we need to render down to
    // a given HydrateFallback while we load the rest of the hydration data
    var renderFallback = false;
    var fallbackIndex = -1;
    if (dataRouterState && future && future.v7_partialHydration) {
        for(var i = 0; i < renderedMatches.length; i++){
            var match = renderedMatches[i];
            // Track the deepest fallback up until the first route without data
            if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
                fallbackIndex = i;
            }
            if (match.route.id) {
                var loaderData = dataRouterState.loaderData, errors1 = dataRouterState.errors;
                var needsToRunLoader = match.route.loader && loaderData[match.route.id] === undefined && (!errors1 || errors1[match.route.id] === undefined);
                if (match.route.lazy || needsToRunLoader) {
                    // We found the first route that's not ready to render (waiting on
                    // lazy, or has a loader that hasn't run yet).  Flag that we need to
                    // render a fallback and render up until the appropriate fallback
                    renderFallback = true;
                    if (fallbackIndex >= 0) {
                        renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
                    } else {
                        renderedMatches = [
                            renderedMatches[0]
                        ];
                    }
                    break;
                }
            }
        }
    }
    return renderedMatches.reduceRight(function(outlet, match, index) {
        // Only data routers handle errors/fallbacks
        var error;
        var shouldRenderHydrateFallback = false;
        var errorElement = null;
        var hydrateFallbackElement = null;
        if (dataRouterState) {
            error = errors && match.route.id ? errors[match.route.id] : undefined;
            errorElement = match.route.errorElement || defaultErrorElement;
            if (renderFallback) {
                if (fallbackIndex < 0 && index === 0) {
                    warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
                    shouldRenderHydrateFallback = true;
                    hydrateFallbackElement = null;
                } else if (fallbackIndex === index) {
                    shouldRenderHydrateFallback = true;
                    hydrateFallbackElement = match.route.hydrateFallbackElement || null;
                }
            }
        }
        var _$matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
        var getChildren = function() {
            var children;
            if (error) {
                children = errorElement;
            } else if (shouldRenderHydrateFallback) {
                children = hydrateFallbackElement;
            } else if (match.route.Component) {
                // Note: This is a de-optimized path since React won't re-use the
                // ReactElement since it's identity changes with each new
                // React.createElement call.  We keep this so folks can use
                // `<Route Component={...}>` in `<Routes>` but generally `Component`
                // usage is only advised in `RouterProvider` when we can convert it to
                // `element` ahead of time.
                children = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(match.route.Component, null);
            } else if (match.route.element) {
                children = match.route.element;
            } else {
                children = outlet;
            }
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderedRoute, {
                match: match,
                routeContext: {
                    outlet,
                    matches: _$matches,
                    isDataRoute: dataRouterState != null
                },
                children: children
            });
        };
        // Only wrap in an error boundary within data router usages when we have an
        // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
        // an ancestor ErrorBoundary/errorElement
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderErrorBoundary, {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error: error,
            children: getChildren(),
            routeContext: {
                outlet: null,
                matches: _$matches,
                isDataRoute: true
            }
        }) : getChildren();
    }, null);
}
var DataRouterHook = /*#__PURE__*/ function(DataRouterHook) {
    DataRouterHook["UseBlocker"] = "useBlocker";
    DataRouterHook["UseRevalidator"] = "useRevalidator";
    DataRouterHook["UseNavigateStable"] = "useNavigate";
    return DataRouterHook;
}(DataRouterHook || {});
var DataRouterStateHook = /*#__PURE__*/ function(DataRouterStateHook) {
    DataRouterStateHook["UseBlocker"] = "useBlocker";
    DataRouterStateHook["UseLoaderData"] = "useLoaderData";
    DataRouterStateHook["UseActionData"] = "useActionData";
    DataRouterStateHook["UseRouteError"] = "useRouteError";
    DataRouterStateHook["UseNavigation"] = "useNavigation";
    DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
    DataRouterStateHook["UseMatches"] = "useMatches";
    DataRouterStateHook["UseRevalidator"] = "useRevalidator";
    DataRouterStateHook["UseNavigateStable"] = "useNavigate";
    DataRouterStateHook["UseRouteId"] = "useRouteId";
    return DataRouterStateHook;
}(DataRouterStateHook || {});
function getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
    var ctx = React.useContext(DataRouterContext);
    !ctx ?  false ? 0 : UNSAFE_invariant(false) : void 0;
    return ctx;
}
function useDataRouterState(hookName) {
    var state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
    !state ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
    return state;
}
function useRouteContext(hookName) {
    var route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    !route ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
    return route;
}
// Internal version with hookName-aware debugging
function useCurrentRouteId(hookName) {
    var route = useRouteContext(hookName);
    var thisRoute = route.matches[route.matches.length - 1];
    !thisRoute.route.id ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
    return thisRoute.route.id;
}
/**
 * Returns the ID for the nearest contextual route
 */ function useRouteId() {
    return useCurrentRouteId(DataRouterStateHook.UseRouteId);
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */ function useNavigation() {
    var state = useDataRouterState(DataRouterStateHook.UseNavigation);
    return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */ function useRevalidator() {
    var dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
    var state = useDataRouterState(DataRouterStateHook.UseRevalidator);
    return React.useMemo(function() {
        return {
            revalidate: dataRouterContext.router.revalidate,
            state: state.revalidation
        };
    }, [
        dataRouterContext.router.revalidate,
        state.revalidation
    ]);
}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */ function useMatches() {
    var _useDataRouterState = useDataRouterState(DataRouterStateHook.UseMatches), matches = _useDataRouterState.matches, loaderData = _useDataRouterState.loaderData;
    return React.useMemo(function() {
        return matches.map(function(m) {
            return UNSAFE_convertRouteMatchToUiMatch(m, loaderData);
        });
    }, [
        matches,
        loaderData
    ]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */ function useLoaderData() {
    var state = useDataRouterState(DataRouterStateHook.UseLoaderData);
    var routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
    if (state.errors && state.errors[routeId] != null) {
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
        return undefined;
    }
    return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */ function useRouteLoaderData(routeId) {
    var state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
    return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */ function useActionData() {
    var state = useDataRouterState(DataRouterStateHook.UseActionData);
    var routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
    return state.actionData ? state.actionData[routeId] : undefined;
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */ function useRouteError() {
    var _state$errors;
    var error = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteErrorContext);
    var state = useDataRouterState(DataRouterStateHook.UseRouteError);
    var routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);
    // If this was a render error, we put it in a RouteError context inside
    // of RenderErrorBoundary
    if (error !== undefined) {
        return error;
    }
    // Otherwise look for errors from our data router state
    return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor `<Await />` value
 */ function useAsyncValue() {
    var value = React.useContext(AwaitContext);
    return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor `<Await />` value
 */ function useAsyncError() {
    var value = React.useContext(AwaitContext);
    return value == null ? void 0 : value._error;
}
var blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */ function useBlocker(shouldBlock) {
    var _useDataRouterContext = useDataRouterContext(DataRouterHook.UseBlocker), router = _useDataRouterContext.router, basename = _useDataRouterContext.basename;
    var state = useDataRouterState(DataRouterStateHook.UseBlocker);
    var _React_useState = _sliced_to_array(React.useState(""), 2), blockerKey = _React_useState[0], setBlockerKey = _React_useState[1];
    var blockerFunction = React.useCallback(function(arg) {
        if (typeof shouldBlock !== "function") {
            return !!shouldBlock;
        }
        if (basename === "/") {
            return shouldBlock(arg);
        }
        // If they provided us a function and we've got an active basename, strip
        // it from the locations we expose to the user to match the behavior of
        // useLocation
        var currentLocation = arg.currentLocation, nextLocation = arg.nextLocation, historyAction = arg.historyAction;
        return shouldBlock({
            currentLocation: _extends({}, currentLocation, {
                pathname: stripBasename(currentLocation.pathname, basename) || currentLocation.pathname
            }),
            nextLocation: _extends({}, nextLocation, {
                pathname: stripBasename(nextLocation.pathname, basename) || nextLocation.pathname
            }),
            historyAction
        });
    }, [
        basename,
        shouldBlock
    ]);
    // This effect is in charge of blocker key assignment and deletion (which is
    // tightly coupled to the key)
    React.useEffect(function() {
        var key = String(++blockerId);
        setBlockerKey(key);
        return function() {
            return router.deleteBlocker(key);
        };
    }, [
        router
    ]);
    // This effect handles assigning the blockerFunction.  This is to handle
    // unstable blocker function identities, and happens only after the prior
    // effect so we don't get an orphaned blockerFunction in the router with a
    // key of "".  Until then we just have the IDLE_BLOCKER.
    React.useEffect(function() {
        if (blockerKey !== "") {
            router.getBlocker(blockerKey, blockerFunction);
        }
    }, [
        router,
        blockerKey,
        blockerFunction
    ]);
    // Prefer the blocker from `state` not `router.state` since DataRouterContext
    // is memoized so this ensures we update on blocker state updates
    return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : IDLE_BLOCKER;
}
/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */ function useNavigateStable() {
    var router = useDataRouterContext(DataRouterHook.UseNavigateStable).router;
    var id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
    var activeRef = React.useRef(false);
    useIsomorphicLayoutEffect(function() {
        activeRef.current = true;
    });
    var navigate = React.useCallback(function(to, options) {
        if (options === void 0) {
            options = {};
        }
         false ? 0 : void 0;
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our router subscriber yet
        if (!activeRef.current) return;
        if (typeof to === "number") {
            router.navigate(to);
        } else {
            router.navigate(to, _extends({
                fromRouteId: id
            }, options));
        }
    }, [
        router,
        id
    ]);
    return navigate;
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
        alreadyWarned[key] = true;
         false ? 0 : void 0;
    }
}
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/ var START_TRANSITION = "startTransition";
var startTransitionImpl = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))[START_TRANSITION];
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function RouterProvider(_ref) {
    var fallbackElement = _ref.fallbackElement, router = _ref.router, future = _ref.future;
    var _React_useState = _sliced_to_array(React.useState(router.state), 2), state = _React_useState[0], setStateImpl = _React_useState[1];
    var v7_startTransition = (future || {}).v7_startTransition;
    var setState = React.useCallback(function(newState) {
        if (v7_startTransition && startTransitionImpl) {
            startTransitionImpl(function() {
                return setStateImpl(newState);
            });
        } else {
            setStateImpl(newState);
        }
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    // Need to use a layout effect here so we are subscribed early enough to
    // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
    React.useLayoutEffect(function() {
        return router.subscribe(setState);
    }, [
        router,
        setState
    ]);
    React.useEffect(function() {
         false ? 0 : void 0;
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var navigator = React.useMemo(function() {
        return {
            createHref: router.createHref,
            encodeLocation: router.encodeLocation,
            go: function(n) {
                return router.navigate(n);
            },
            push: function(to, state, opts) {
                return router.navigate(to, {
                    state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                });
            },
            replace: function(to, state, opts) {
                return router.navigate(to, {
                    replace: true,
                    state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                });
            }
        };
    }, [
        router
    ]);
    var basename = router.basename || "/";
    var dataRouterContext = React.useMemo(function() {
        return {
            router,
            navigator,
            static: false,
            basename
        };
    }, [
        router,
        navigator,
        basename
    ]);
    // The fragment and {null} here are important!  We need them to keep React 18's
    // useId happy when we are server-rendering since we may have a <script> here
    // containing the hydrated server-side staticContext (from StaticRouterProvider).
    // useId relies on the component tree structure to generate deterministic id's
    // so we need to ensure it remains the same on the client even though
    // we don't need the <script> tag
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(DataRouterContext.Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ React.createElement(DataRouterStateContext.Provider, {
        value: state
    }, /*#__PURE__*/ React.createElement(Router, {
        basename: basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: navigator,
        future: {
            v7_relativeSplatPath: router.future.v7_relativeSplatPath
        }
    }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/ React.createElement(DataRoutes, {
        routes: router.routes,
        future: router.future,
        state: state
    }) : fallbackElement))), null);
}
function DataRoutes(_ref2) {
    var routes = _ref2.routes, future = _ref2.future, state = _ref2.state;
    return useRoutesImpl(routes, undefined, state, future);
}
/**
 * A `<Router>` that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */ function MemoryRouter(_ref3) {
    var basename = _ref3.basename, children = _ref3.children, initialEntries = _ref3.initialEntries, initialIndex = _ref3.initialIndex, future = _ref3.future;
    var historyRef = React.useRef();
    if (historyRef.current == null) {
        historyRef.current = createMemoryHistory({
            initialEntries,
            initialIndex,
            v5Compat: true
        });
    }
    var history = historyRef.current;
    var _React_useState = _sliced_to_array(React.useState({
        action: history.action,
        location: history.location
    }), 2), state = _React_useState[0], setStateImpl = _React_useState[1];
    var v7_startTransition = (future || {}).v7_startTransition;
    var setState = React.useCallback(function(newState) {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(function() {
            return setStateImpl(newState);
        }) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    React.useLayoutEffect(function() {
        return history.listen(setState);
    }, [
        history,
        setState
    ]);
    return /*#__PURE__*/ React.createElement(Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */ function Navigate(_ref4) {
    var to = _ref4.to, replace = _ref4.replace, state = _ref4.state, relative = _ref4.relative;
    !useInRouterContext() ?  false ? 0 : UNSAFE_invariant(false) : void 0;
    var _React_useContext = React.useContext(NavigationContext), future = _React_useContext.future, isStatic = _React_useContext.static;
     false ? 0 : void 0;
    var matches = React.useContext(RouteContext).matches;
    var _useLocation = useLocation(), locationPathname = _useLocation.pathname;
    var navigate = useNavigate();
    // Resolve the path outside of the effect so that when effects run twice in
    // StrictMode they navigate to the same place
    var path = resolveTo(to, UNSAFE_getResolveToMatches(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
    var jsonPath = JSON.stringify(path);
    React.useEffect(function() {
        return navigate(JSON.parse(jsonPath), {
            replace,
            state,
            relative
        });
    }, [
        navigate,
        jsonPath,
        relative,
        replace,
        state
    ]);
    return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */ function Outlet(props) {
    return useOutlet(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */ function Route(_props) {
     false ? 0 : UNSAFE_invariant(false);
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */ function Router(_ref5) {
    var tmp = _ref5.basename, basenameProp = tmp === void 0 ? "/" : tmp, _ref5_children = _ref5.children, children = _ref5_children === void 0 ? null : _ref5_children, locationProp = _ref5.location, _ref5_navigationType = _ref5.navigationType, navigationType = _ref5_navigationType === void 0 ? _remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .Action */ .aU.Pop : _ref5_navigationType, navigator = _ref5.navigator, tmp1 = _ref5.static, staticProp = tmp1 === void 0 ? false : tmp1, future = _ref5.future;
    !!useInRouterContext() ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
    // Preserve trailing slashes on basename, so we can let the user control
    // the enforcement of trailing slashes throughout the app
    var basename = basenameProp.replace(/^\/*/, "/");
    var navigationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function() {
        return {
            basename,
            navigator,
            static: staticProp,
            future: _extends({
                v7_relativeSplatPath: false
            }, future)
        };
    }, [
        basename,
        future,
        navigator,
        staticProp
    ]);
    if (typeof locationProp === "string") {
        locationProp = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .parsePath */ .cP)(locationProp);
    }
    var _locationProp_pathname = locationProp.pathname, pathname = _locationProp_pathname === void 0 ? "/" : _locationProp_pathname, _locationProp_search = locationProp.search, search = _locationProp_search === void 0 ? "" : _locationProp_search, _locationProp_hash = locationProp.hash, hash = _locationProp_hash === void 0 ? "" : _locationProp_hash, _locationProp_state = locationProp.state, state = _locationProp_state === void 0 ? null : _locationProp_state, _locationProp_key = locationProp.key, key = _locationProp_key === void 0 ? "default" : _locationProp_key;
    var locationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function() {
        var trailingPathname = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .stripBasename */ .Zn)(pathname, basename);
        if (trailingPathname == null) {
            return null;
        }
        return {
            location: {
                pathname: trailingPathname,
                search,
                hash,
                state,
                key
            },
            navigationType
        };
    }, [
        basename,
        pathname,
        search,
        hash,
        state,
        key,
        navigationType
    ]);
     false ? 0 : void 0;
    if (locationContext == null) {
        return null;
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContext.Provider, {
        value: navigationContext
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
        children: children,
        value: locationContext
    }));
}
/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */ function Routes(_ref6) {
    var children = _ref6.children, location = _ref6.location;
    return useRoutes(createRoutesFromChildren(children), location);
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */ function Await(_ref7) {
    var children = _ref7.children, errorElement = _ref7.errorElement, resolve = _ref7.resolve;
    return /*#__PURE__*/ React.createElement(AwaitErrorBoundary, {
        resolve: resolve,
        errorElement: errorElement
    }, /*#__PURE__*/ React.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus = /*#__PURE__*/ function(AwaitRenderStatus) {
    AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
    AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
    AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
    return AwaitRenderStatus;
}(AwaitRenderStatus || {});
var neverSettledPromise = new Promise(function() {});
var AwaitErrorBoundary = /*#__PURE__*/ function(_React_Component) {
    "use strict";
    (0,_swc_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__._)(AwaitErrorBoundary, _React_Component);
    var _super = (0,_swc_helpers_create_super__WEBPACK_IMPORTED_MODULE_3__._)(AwaitErrorBoundary);
    function AwaitErrorBoundary(props) {
        (0,_swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_4__._)(this, AwaitErrorBoundary);
        var _this;
        _this = _super.call(this, props);
        _this.state = {
            error: null
        };
        return _this;
    }
    (0,_swc_helpers_create_class__WEBPACK_IMPORTED_MODULE_5__._)(AwaitErrorBoundary, [
        {
            key: "componentDidCatch",
            value: function componentDidCatch(error, errorInfo) {
                console.error("<Await> caught the following error during render", error, errorInfo);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this_props = this.props, children = _this_props.children, errorElement = _this_props.errorElement, resolve = _this_props.resolve;
                var promise = null;
                var status = AwaitRenderStatus.pending;
                if (!(resolve instanceof Promise)) {
                    // Didn't get a promise - provide as a resolved promise
                    status = AwaitRenderStatus.success;
                    promise = Promise.resolve();
                    Object.defineProperty(promise, "_tracked", {
                        get: function() {
                            return true;
                        }
                    });
                    Object.defineProperty(promise, "_data", {
                        get: function() {
                            return resolve;
                        }
                    });
                } else if (this.state.error) {
                    // Caught a render error, provide it as a rejected promise
                    status = AwaitRenderStatus.error;
                    var renderError = this.state.error;
                    promise = Promise.reject().catch(function() {}); // Avoid unhandled rejection warnings
                    Object.defineProperty(promise, "_tracked", {
                        get: function() {
                            return true;
                        }
                    });
                    Object.defineProperty(promise, "_error", {
                        get: function() {
                            return renderError;
                        }
                    });
                } else if (resolve._tracked) {
                    // Already tracked promise - check contents
                    promise = resolve;
                    status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
                } else {
                    // Raw (untracked) promise - track it
                    status = AwaitRenderStatus.pending;
                    Object.defineProperty(resolve, "_tracked", {
                        get: function() {
                            return true;
                        }
                    });
                    promise = resolve.then(function(data) {
                        return Object.defineProperty(resolve, "_data", {
                            get: function() {
                                return data;
                            }
                        });
                    }, function(error) {
                        return Object.defineProperty(resolve, "_error", {
                            get: function() {
                                return error;
                            }
                        });
                    });
                }
                if (status === AwaitRenderStatus.error && promise._error instanceof _remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .AbortedDeferredError */ .X3) {
                    // Freeze the UI by throwing a never resolved promise
                    throw neverSettledPromise;
                }
                if (status === AwaitRenderStatus.error && !errorElement) {
                    // No errorElement, throw to the nearest route-level error boundary
                    throw promise._error;
                }
                if (status === AwaitRenderStatus.error) {
                    // Render via our errorElement
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
                        value: promise,
                        children: errorElement
                    });
                }
                if (status === AwaitRenderStatus.success) {
                    // Render children with resolved value
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
                        value: promise,
                        children: children
                    });
                }
                // Throw to the suspense boundary
                throw promise;
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
    return AwaitErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on `<Await>`
 */ function ResolveAwait(_ref8) {
    var children = _ref8.children;
    var data = useAsyncValue();
    var toRender = typeof children === "function" ? children(data) : children;
    return /*#__PURE__*/ React.createElement(React.Fragment, null, toRender);
}
///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */ function createRoutesFromChildren(children, parentPath) {
    if (parentPath === void 0) {
        parentPath = [];
    }
    var routes = [];
    React.Children.forEach(children, function(element, index) {
        if (!/*#__PURE__*/ React.isValidElement(element)) {
            // Ignore non-elements. This allows people to more easily inline
            // conditionals in their route config.
            return;
        }
        var treePath = _to_consumable_array(parentPath).concat([
            index
        ]);
        if (element.type === React.Fragment) {
            // Transparently support React.Fragment and its children.
            routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
            return;
        }
        !(element.type === Route) ?  false ? 0 : UNSAFE_invariant(false) : void 0;
        !(!element.props.index || !element.props.children) ?  false ? 0 : UNSAFE_invariant(false) : void 0;
        var route = {
            id: element.props.id || treePath.join("-"),
            caseSensitive: element.props.caseSensitive,
            element: element.props.element,
            Component: element.props.Component,
            index: element.props.index,
            path: element.props.path,
            loader: element.props.loader,
            action: element.props.action,
            errorElement: element.props.errorElement,
            ErrorBoundary: element.props.ErrorBoundary,
            hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
            shouldRevalidate: element.props.shouldRevalidate,
            handle: element.props.handle,
            lazy: element.props.lazy
        };
        if (element.props.children) {
            route.children = createRoutesFromChildren(element.props.children, treePath);
        }
        routes.push(route);
    });
    return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */ function renderMatches(matches) {
    return _renderMatches(matches);
}
function mapRouteProperties(route) {
    var updates = {
        // Note: this check also occurs in createRoutesFromChildren so update
        // there if you change this -- please and thank you!
        hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
    };
    if (route.Component) {
        if (false) {}
        Object.assign(updates, {
            element: /*#__PURE__*/ React.createElement(route.Component),
            Component: undefined
        });
    }
    if (route.HydrateFallback) {
        if (false) {}
        Object.assign(updates, {
            hydrateFallbackElement: /*#__PURE__*/ React.createElement(route.HydrateFallback),
            HydrateFallback: undefined
        });
    }
    if (route.ErrorBoundary) {
        if (false) {}
        Object.assign(updates, {
            errorElement: /*#__PURE__*/ React.createElement(route.ErrorBoundary),
            ErrorBoundary: undefined
        });
    }
    return updates;
}
function createMemoryRouter(routes, opts) {
    return createRouter({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: createMemoryHistory({
            initialEntries: opts == null ? void 0 : opts.initialEntries,
            initialIndex: opts == null ? void 0 : opts.initialIndex
        }),
        hydrationData: opts == null ? void 0 : opts.hydrationData,
        routes,
        mapRouteProperties
    }).initialize();
}
 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 899:
/***/ (function(__unused_webpack_module, exports) {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function f(a, b) {
    var c = a.length;
    a.push(b);
    a: for(; 0 < c;){
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
        else break a;
    }
}
function h(a) {
    return 0 === a.length ? null : a[0];
}
function k(a) {
    if (0 === a.length) return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
        a[0] = c;
        a: for(var d = 0, e = a.length, w = e >>> 1; d < w;){
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
            if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
        }
    }
    return b;
}
function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
}
if ("object" === typeof performance && "function" === typeof performance.now) {
    var l = performance;
    exports.unstable_now = function() {
        return l.now();
    };
} else {
    var p = Date, q = p.now();
    exports.unstable_now = function() {
        return p.now() - q;
    };
}
var r = [], t = [], u = 1, v = null, y = 3, z = !1, A = !1, B = !1, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
function G(a) {
    for(var b = h(t); null !== b;){
        if (null === b.callback) k(t);
        else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
        else break;
        b = h(t);
    }
}
function H(a) {
    B = !1;
    G(a);
    if (!A) if (null !== h(r)) A = !0, I(J);
    else {
        var b = h(t);
        null !== b && K(H, b.startTime - a);
    }
}
function J(a, b) {
    A = !1;
    B && (B = !1, E(L), L = -1);
    z = !0;
    var c = y;
    try {
        G(b);
        for(v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());){
            var d = v.callback;
            if ("function" === typeof d) {
                v.callback = null;
                y = v.priorityLevel;
                var e = d(v.expirationTime <= b);
                b = exports.unstable_now();
                "function" === typeof e ? v.callback = e : v === h(r) && k(r);
                G(b);
            } else k(r);
            v = h(r);
        }
        if (null !== v) var w = !0;
        else {
            var m = h(t);
            null !== m && K(H, m.startTime - b);
            w = !1;
        }
        return w;
    } finally{
        v = null, y = c, z = !1;
    }
}
var N = !1, O = null, L = -1, P = 5, Q = -1;
function M() {
    return exports.unstable_now() - Q < P ? !1 : !0;
}
function R() {
    if (null !== O) {
        var a = exports.unstable_now();
        Q = a;
        var b = !0;
        try {
            b = O(!0, a);
        } finally{
            b ? S() : (N = !1, O = null);
        }
    } else N = !1;
}
var S;
if ("function" === typeof F) S = function S() {
    F(R);
};
else if ("undefined" !== typeof MessageChannel) {
    var T = new MessageChannel, U = T.port2;
    T.port1.onmessage = R;
    S = function S() {
        U.postMessage(null);
    };
} else S = function S() {
    D(R, 0);
};
function I(a) {
    O = a;
    N || (N = !0, S());
}
function K(a, b) {
    L = D(function() {
        a(exports.unstable_now());
    }, b);
}
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function(a) {
    a.callback = null;
};
exports.unstable_continueExecution = function() {
    A || z || (A = !0, I(J));
};
exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
};
exports.unstable_getCurrentPriorityLevel = function() {
    return y;
};
exports.unstable_getFirstCallbackNode = function() {
    return h(r);
};
exports.unstable_next = function(a) {
    switch(y){
        case 1:
        case 2:
        case 3:
            var b = 3;
            break;
        default:
            b = y;
    }
    var c = y;
    y = b;
    try {
        return a();
    } finally{
        y = c;
    }
};
exports.unstable_pauseExecution = function() {};
exports.unstable_requestPaint = function() {};
exports.unstable_runWithPriority = function(a, b) {
    switch(a){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            a = 3;
    }
    var c = y;
    y = a;
    try {
        return b();
    } finally{
        y = c;
    }
};
exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch(a){
        case 1:
            var e = -1;
            break;
        case 2:
            e = 250;
            break;
        case 5:
            e = 1073741823;
            break;
        case 4:
            e = 1E4;
            break;
        default:
            e = 5E3;
    }
    e = c + e;
    a = {
        id: u++,
        callback: b,
        priorityLevel: a,
        startTime: c,
        expirationTime: e,
        sortIndex: -1
    };
    c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
    return a;
};
exports.unstable_shouldYield = M;
exports.unstable_wrapCallback = function(a) {
    var b = y;
    return function() {
        var c = y;
        y = b;
        try {
            return a.apply(this, arguments);
        } finally{
            y = c;
        }
    };
};


/***/ }),

/***/ 998:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


if (true) {
    module.exports = __webpack_require__(899);
} else {}


/***/ }),

/***/ 448:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(294),ca=__webpack_require__(998);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Sg(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null)}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a}}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a)}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function mh(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(uh);G(uh,b)}function zh(){E(uh);E(vh);E(wh)}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c))}function Bh(a){vh.current===a&&(E(uh),E(vh))}var L=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e)}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else{if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a}return O}
function Vh(a,b){return"function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Yh(){}
function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e)}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a)}function ai(a,b,c){return c(function(){ei(b)&&fi(a)})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1)}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return[b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d)}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d)}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b()}finally{C=c,Gh.transition=d}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d)}}
function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d))}}
function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return[d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Ei={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d))}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null)}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b)};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a))}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d)}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo)}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1))}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c)}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(L,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304)}else{if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Mj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Nj=!1;
function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Nj;Nj=!1;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f)}e=e.next}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c)}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a)}catch(t){W(a,a.return,t)}try{Pj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a)}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function hk(a,b,c){V=a;ik(a,b,c)}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f,b,c),f=f.sibling;V=e;Jj=h;U=l}kk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a,b,c)}}
function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}sh(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Rj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Rj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Rj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg())}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Fk(c,Gk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else{b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h)}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a)}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d))}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg())}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg()}}function Hj(){fj=ej.current;E(ej)}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj()}c=c.return}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}fh=null}return a}
function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Ih=!1}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return}while(null!==f)}Sk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z)}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e)}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y)}function Lk(){for(;null!==Y&&!cc();)Uk(Y)}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else{c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d)}finally{ok.transition=e,C=d}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c,a,e);dc();K=h;C=g;ok.transition=f}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode,d);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else{a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,ok.transition=b}}return!1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b))}
function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b)}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c))}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c)}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c)}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c)}b=b.child}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Xi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b)}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a)};function ll(a){this._internalRoot=a}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null)});b[uf]=null}};function ml(a){this._internalRoot=a}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function nl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a)}}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a)}}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d)});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a)}}fl(b,g,a,e)}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()))}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c)}}),il(a,1)}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c)}il(a,134217728)}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d)}il(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};exports.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Rk(a)};exports.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};exports.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Qk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,!1,d)};exports.version="18.3.1-next-f1338f8080-20240426";


/***/ }),

/***/ 745:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var m = __webpack_require__(935);
if (true) {
  exports.s = m.createRoot;
  exports.a = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 935:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(448);
} else {}


/***/ }),

/***/ 251:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(294),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 408:
/***/ (function(__unused_webpack_module, exports) {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ 294:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(408);
} else {}


/***/ }),

/***/ 893:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(251);
} else {}


/***/ })

}]);