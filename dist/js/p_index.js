(self["webpackChunk_ice_lite_scaffold"] = self["webpackChunk_ice_lite_scaffold"] || []).push([[767],{

/***/ 83:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container--d7BYJXQF","imageWrapper":"imageWrapper--ggbjMt8t","backgroundImage":"backgroundImage--grpgveiu","overlay":"overlay--Xvv6oZLi","content":"content--yViSLKwk","title":"title--CaW09gYJ","subtitle":"subtitle--B7OWY66p"};

/***/ }),

/***/ 660:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ WeddingPage; }
});

// EXTERNAL MODULE: ./node_modules/@ice/jsx-runtime/esm/prod.js + 2 modules
var prod = __webpack_require__(220);
;// CONCATENATED MODULE: ./src/assets/image.png
var image_namespaceObject = __webpack_require__.p + "assets/image.e0620240.png";
// EXTERNAL MODULE: ./src/pages/index.module.css
var index_module = __webpack_require__(83);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/pages/index.tsx



function WeddingPage() {
    return /*#__PURE__*/ (0,prod/* jsx */.tZ)("div", {
        className: (index_module_default()).container,
        children: /*#__PURE__*/ (0,prod/* jsxs */.BX)("div", {
            className: (index_module_default()).imageWrapper,
            children: [
                /*#__PURE__*/ (0,prod/* jsx */.tZ)("img", {
                    src: image_namespaceObject,
                    alt: "Wedding Background",
                    className: (index_module_default()).backgroundImage
                }),
                /*#__PURE__*/ (0,prod/* jsx */.tZ)("div", {
                    className: (index_module_default()).overlay,
                    children: /*#__PURE__*/ (0,prod/* jsxs */.BX)("div", {
                        className: (index_module_default()).content,
                        children: [
                            /*#__PURE__*/ (0,prod/* jsx */.tZ)("h1", {
                                className: (index_module_default()).title,
                                children: "我们的婚礼"
                            }),
                            /*#__PURE__*/ (0,prod/* jsx */.tZ)("p", {
                                className: (index_module_default()).subtitle,
                                children: "欢迎来到我们的特别时刻"
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ })

}]);