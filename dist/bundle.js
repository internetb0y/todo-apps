/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
Template

- Cursor
- Display
- Position
- Top, Left, Bottom, & Right
- Translate
- Width & Height
- Margin & Padding
- Border, Box Shadow & Box Sizing
- Font, Text & Letter
- Background & Color
- Transition & Z-Index
- Transform
*/

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} *::-webkit-scrollbar {
    display: none;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    position: absolute;

    min-width: 80vw;
    min-height: auto;

    background-color: #d4d8f0;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 12 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media only screen and (max-width: 500px) {
    main {
        width: 300px;
    }
}

@media only screen and (max-width: 320px) {
    main {
        width: 100px;
    }
}

@media only screen and (max-width: 160px) {
    header {
        width: 150px;
    }
    
    main {
        width: 155px;
    }
}

@media only screen and (max-width: 155px) {
    main {
        width: 150px;
    }
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 13 */
/***/ (() => {

class Header extends HTMLElement {
    constructor () {
        super();
        this.connectedCallback();
    }

    connectedCallback () {
        const media = `
            <style>
                @media only screen and (max-width: 320px) {
                    .navbar-title {
                        font-size: 25px;
                    }

                    .dialog-open {
                        min-width: 38px;
                        min-height: 38px;
                        font-size: 18px;
                    }
                }

                @media only screen and (max-width: 160px) {
                    .navbar-title {
                        font-size: 20px;
                    }

                    .dialog-open {
                        min-width: 33px;
                        min-height: 33px;
                        font-size: 13px;
                    }
                }
            </style>
        `;

        const style = `
            <style>
                header {
                    min-width: 100vw;
                    min-height: auto;
                    border-bottom: 2px solid #121629;
                    background-color: #232946;
                }

                .navbar {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    padding: 8px 0;
                }

                .container-title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-width: 44px;
                    min-height: 44px;
                    box-sizing: border-box;
                    text-decoration: none;
                }

                .navbar-title {
                    font-size: 30px;
                    font-family: 'Montserrat';
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: #fffffe;
                    transition: 0.5s;
                }

                .navbar-title:hover {
                    transform: scale(1.2);
                }

                .button-list {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    list-style: none;
                }

                .button-list > .dialog-open {
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 44px;
                    min-height: 44px;
                    border: 2px solid #fffffe;
                    border-radius: 25%;
                    box-sizing: border-box;
                    font-size: 20px;
                    background-color: #232946;
                    color: #fffffe;
                    transition: 0.5s;
                }

                .button-list > .dialog-open:hover {
                    border: 2px solid #121629;
                    background-color: #eebbc3;
                    color: #232946;
                }
            </style>
        `;

        this.innerHTML = `
            ${style}
            
            <header>
                <nav class="navbar">
                    <a class="container-title" href="/">
                        <p class="navbar-title"> Todo </p>
                        <p class="navbar-title"> Apps </p>
                    </a>
                    <ul class="container-button">
                        <li class="button-list">
                            <button type="button" class="dialog-open" id="dialog-open">
                                <i class="fa-solid fa-info"></i>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            ${media}
        `;
    }
}

customElements.define('head-content', Header);

/***/ }),
/* 14 */
/***/ (() => {

class Main extends HTMLElement {
    constructor () {
        super();
        this.connectedCallback();
    }

    connectedCallback () {
        const mediaForm = `
            <style>
                @media only screen and (max-width: 980px) {
                    .container-formulir {
                        width: 630px;
                    }
                    
                    .formulir > .value {
                        width: 500px;
                    }
                }

                @media only screen and (max-width: 780px) {
                    .container-formulir {
                        width: 530px;
                    }
                
                    .formulir > .value {
                        width: 400px;
                    }
                }

                @media only screen and (max-width: 680px) {
                    .container-formulir {
                        width: 475px;
                    }

                    .formulir > .value {
                        width: 370px;
                    }
                }

                @media only screen and (max-width: 580px) {
                    .container-formulir {
                        width: 360px;
                    }

                    .formulir > .value {
                        width: 260px;
                    }
                }

                @media only screen and (max-width: 480px) {
                    .container-formulir {
                        width: 300px;
                    }

                    .formulir > .value {
                        width: 260px;
                    }
                }

                @media only screen and (max-width: 320px) {
                    .container-formulir {
                        width: 255px;
                    }
                    
                    .formulir > .value {
                        width: 230px;
                    }
                }

                @media only screen and (max-width: 260px) {
                    .container-formulir {
                        width: 200px;
                    }
                    
                    .formulir > .value {
                        width: 180px;
                        font-size: 30px;
                    }
                }

                @media only screen and (max-width: 200px) {
                    .container-formulir {
                        width: 150px;
                    }
                    
                    .formulir > .value {
                        width: 130px;
                        font-size: 20px;
                    }
                }
            </style>
        `;

        const mediaTodo = `
            <style>
                @media only screen and (max-width: 980px) {
                    .container-todo > .lists {
                        width: 620px;
                    }
                }

                @media only screen and (max-width: 780px) {
                    .container-todo > .lists {
                        width: 520px;
                    }
                }

                @media only screen and (max-width: 680px) {
                    .container-todo > .lists {
                        width: 470px;
                    }
                }

                @media only screen and (max-width: 580px) {
                    .container-todo > .lists {
                        width: 350px;
                    }
                }

                @media only screen and (max-width: 480px) {                   
                    .container-todo > .lists {
                        width: 295px;
                    }

                    .container-todo > .lists > .list {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .container-todo > .lists > .list > .list-title {
                        text-align: center;
                    }
                }

                @media only screen and (max-width: 320px) {                   
                    .container-todo > .lists {
                        width: 250px;
                    }
                }

                @media only screen and (max-width: 260px) {
                    .header-todo {
                        width: 195px;
                    }
                    
                    .header-todo > h2 {
                        font-size: 30px;
                    }

                    .container-todo > .lists {
                        width: 195px;
                    }
                }

                @media only screen and (max-width: 200px) {
                    .header-todo {
                        width: 144px;
                    }    
                    
                    .header-todo > h2 {
                        font-size: 23px;
                    }

                    .container-todo > .lists {
                        width: 144px;
                    }

                    .container-todo > .lists > .list > .list-title {
                        font-size: 30px;
                    }

                    .container-button > button {
                        margin: 5px;
                    }
                }
            </style>
        `;
        
        const style = `
            <style>
                main {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-width: 100vw;
                    min-height: auto;
                    background-color: #d4d8f0;
                }

                .container-formulir {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 735px;
                    height: auto;
                    margin: 25px 0;
                    border: 3px solid #121629;
                    border-radius: 10px;
                    box-shadow: 0 7px #121629;
                    background-color: #b8c1ec;
                    transition: 0.5s;
                }

                .formulir {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    background-color: #b8c1ec;
                    transition: 0.5s;
                }

                .formulir > .value {
                    width: 600px;
                    margin: 15px 10px;
                    padding: 5px 10px;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    box-shadow: 0 7px #121629;
                    font-size: 38px;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    background-color: #fffffe;
                    transition: 0.5s;
                }

                .formulir > .value:focus {
                    border: 3px solid #d4939d;
                    box-shadow: 0 7px #d4939d;
                    outline: 0;
                }

                .formulir > .btn-add {
                    cursor: pointer;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    min-width: 44px;
                    min-height: 44px;
                    margin: 15px 10px 15px 10px;
                    padding: 5px 10px;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    box-shadow: 0 7px #121629;
                    box-sizing: border-box;
                    font-size: 22px;
                    background-color: #eebbc3;
                }

                .formulir > .btn-add:active {
                    translate: 0 5px;
                    box-shadow: 0 2px #121629;
                }

                /* Todo Progress */

                .container-todo {
                    display: flex;
                    flex-flow: column wrap;
                    justify-content: center;
                    align-items: center;
                    width: auto;
                    height: auto;
                    margin: 25px 0;
                    border: 3px solid #121629;
                    border-radius: 10px;
                    box-shadow: 0 7px #121629;
                    background-color: #b8c1ec;
                    transition: 0.5s;
                }

                .header-todo {
                    width: 100%;
                    transition: 0.5s;
                }

                .header-todo > h2 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 15px 10px;
                    padding: 5px 10px;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    font-size: 38px;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    background-color: #d4939d;
                    color: #fffffe;
                    transition: 0.5s;
                }

                .container-todo > .lists {
                    width: 725px;
                    transition: 0.5s;
                }

                .container-todo > .lists > .list {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-between;
                    align-items: center;
                    margin: 15px 10px;
                    padding: 5px 10px;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    box-shadow: 0 7px #121629;
                    font-size: 38px;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    background-color: #fffffe;
                    transition: 0.5s;
                    list-style: none;
                }

                .container-button {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                .container-button > button {
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 44px;
                    min-height: 44px;
                    margin: 15px 10px;
                    padding: 5px 10px;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    box-shadow: 0 7px #121629;
                    box-sizing: border-box;
                    font-size: 22px;
                    background-color: #eebbc3;
                }

                .container-button > button:active {
                    translate: 0 5px;
                    box-shadow: 0 2px #121629;
                }
            </style>
        `;

        this.innerHTML = `
            ${style}
            
            <main>
                <section class="container-formulir">
                    <form class="formulir" id="formulir">
                        <input type="text" class="value" id="value" placeholder="Type Here"/>
                        <button type="button" class="btn-add" id="btn-add">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </form>
                </section>
                
                <section class="container-todo">
                    <span class="header-todo">
                        <h2> Progress </h2>
                    </span>

                    <ul class="lists">
                        <li class="list">
                            <p class="list-title"> Jogging </p>

                            <section class="container-button">
                                <button type="button" class="btn-edit" id="btn-edit">
                                    <i class="fa-solid fa-pen"></i>
                                </button>

                                <button type="button" class="btn-done" id="btn-done"> 
                                    <i class="fa-solid fa-check"></i>
                                </button>
                            </section>
                        </li>
                    </ul>
                </section>

                <section class="container-todo">
                    <span class="header-todo">
                        <h2> Complete </h2>
                    </span>

                    <ul class="lists">
                        <li class="list">
                            <p class="list-title"> Reading Book </p>

                            <section class="container-button">
                                <button type="button" class="btn-undo" id="btn-undo">
                                    <i class="fa-solid fa-rotate-left"></i>
                                </button>

                                <button type="button" class="btn-delete" id="btn-delete">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </section>
                        </li>
                    </ul>
                </section>
            </main>

            ${mediaForm}

            ${mediaTodo}
        `;
    }
}

customElements.define('main-content', Main);

/***/ }),
/* 15 */
/***/ (() => {

class About extends HTMLElement {
    constructor () {
        super();
        this.connectedCallback();
    }

    connectedCallback () {
        const style = `
            <style>
                dialog {
                    top: 50%;
                    left: 50%;
                    translate: -50% -50%;
                    width: 550px;
                    padding: 8px;
                    border: 3px solid #121629;
                    border-radius: 10px;
                    box-shadow: 0 8px #121629;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    background-color: #fffffe;
                }

                dialog::backdrop {
                    background-color: rgba(35, 41, 70, 0.4);
                }

                .dialog-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .dialog-navbar {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    border-bottom: 3px solid #121629;
                }

                .dialog-navbar > .dialog-title {
                    padding: 0 5px;
                    border-left: 5px solid #d4939d;
                    font-size: 30px;
                    color: #232946;
                }

                .dialog-navbar > #dialog-close {
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 44px;
                    min-height: 44px;
                    border: none;
                    box-sizing: border-box;
                    font-size: 30px;
                    background-color: #fffffe;
                    color: #232946;
                }

                .dialog-navbar > #dialog-close:hover {
                    color: #d4939d;
                }

                .information {
                    width: 100%;
                    margin: 5px 0;
                    padding: 5px 0;
                    color: #232946;
                }
            </style>
        `;

        this.innerHTML = `
            <dialog>
                <article class="dialog-container">
                    <section class="dialog-navbar">
                        <h2 class="dialog-title"> About </h2>
                        
                        <button class="dialog-close" id="dialog-close">
                            <i class="fa-solid fa-circle-xmark"></i>
                        </button>
                    </section>

                    <section class="information">
                        <p class="information-detail">
                            Put The Detail Of This Website Here
                        </p>
                    </section>
                </article>
            </dialog>
        `
    }
}

customElements.define('dialog-about', About);

/***/ }),
/* 16 */
/***/ (() => {

const openInfo = document.querySelector('#dialog-open').addEventListener('click', () => {
    dialog.showModal();
});

const closeInfo = document.querySelector('#dialog-close').addEventListener('click', () => {
    dialog.close();
});

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _styles_media_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _views_components_head_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _views_components_head_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_views_components_head_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_components_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _views_components_main_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_components_main_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_components_about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _views_components_about_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_views_components_about_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_modal__WEBPACK_IMPORTED_MODULE_5__);
// Styles



// Components



// Extension Components


// Utils

})();

/******/ })()
;