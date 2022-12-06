"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/hello";
exports.ids = ["pages/hello"];
exports.modules = {

/***/ "./pages/hello.js":
/*!************************!*\
  !*** ./pages/hello.js ***!
  \************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: ()=>_default\n}));\nconst _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\nmodule.exports = (phase, { defaultConfig  })=>{\n    return {\n        ...defaultConfig,\n        webpack: (config)=>{\n            config.resolve = {\n                ...config.resolve,\n                fallback: {\n                    \"fs\": false,\n                    \"path\": false,\n                    \"os\": false\n                }\n            };\n            return config;\n        }\n    };\n};\nconst { fastify  } = __webpack_require__(/*! fastify */ \"fastify\")({\n    logger: true\n});\nlet name = \"yehuda\";\nconst collection = fastify.mongo.db.collection(\"test_collection\");\n//const result = await collection.find().toArray();\n//\nfunction htm() {\n    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(\"h1\", {\n                children: \"Welcome to this car rental\"\n            }, void 0, false, {\n                fileName: \"/Users/yehudaclinton/car_rental/pages/hello.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(\"h2\", {\n                children: \"select one of the following available cars\"\n            }, void 0, false, {\n                fileName: \"/Users/yehudaclinton/car_rental/pages/hello.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(\"p\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/yehudaclinton/car_rental/pages/hello.js\",\n                lineNumber: 30,\n                columnNumber: 65\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yehudaclinton/car_rental/pages/hello.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\nconst _default = htm;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9oZWxsby5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQUE7Ozs7MkNBaUNBOzthQUFBOzs7QUFqQ0FBLE9BQU9DLE9BQU8sR0FBRyxDQUFDQyxPQUFPLEVBQUVDLGNBQWEsRUFBRSxHQUFLO0lBQzNDLE9BQU87UUFDTCxHQUFHQSxhQUFhO1FBRWhCQyxTQUFTLENBQUNDLFNBQVc7WUFDbkJBLE9BQU9DLE9BQU8sR0FBRztnQkFDZixHQUFHRCxPQUFPQyxPQUFPO2dCQUNqQkMsVUFBVTtvQkFDUixNQUFNLEtBQUs7b0JBQ1gsUUFBUSxLQUFLO29CQUNiLE1BQU0sS0FBSztnQkFDYjtZQUNGO1lBQ0EsT0FBT0Y7UUFDVDtJQUNGO0FBQ0Y7QUFFRixNQUFNLEVBQUVHLFFBQU8sRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQywwQkFBVztJQUNuQ0MsUUFBUSxJQUFJO0FBQ2Q7QUFDRixJQUFJQyxPQUFPO0FBQ1gsTUFBTUMsYUFBYUosUUFBUUssS0FBSyxDQUFDQyxFQUFFLENBQUNGLFVBQVUsQ0FBQztBQUMvQyxtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLFNBQVNHLE1BQU07SUFDWCxxQkFDSSwyQkFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsMkJBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osMkJBQUNDOzBCQUFHOzs7Ozs7WUFBK0M7MEJBQUMsMkJBQUNDOzBCQUFHVDs7Ozs7Ozs7Ozs7O0FBR3BFO01BQ0EsV0FBZUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWZhc3RpZnkvLi9wYWdlcy9oZWxsby5qcz9jYjRlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKHBoYXNlLCB7IGRlZmF1bHRDb25maWcgfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0Q29uZmlnLFxuICBcbiAgICAgIHdlYnBhY2s6IChjb25maWcpID0+IHtcbiAgICAgICAgY29uZmlnLnJlc29sdmUgPSB7XG4gICAgICAgICAgLi4uY29uZmlnLnJlc29sdmUsXG4gICAgICAgICAgZmFsbGJhY2s6IHtcbiAgICAgICAgICAgIFwiZnNcIjogZmFsc2UsXG4gICAgICAgICAgICBcInBhdGhcIjogZmFsc2UsXG4gICAgICAgICAgICBcIm9zXCI6IGZhbHNlLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZmlnXG4gICAgICB9LFxuICAgIH1cbiAgfVxuXG5jb25zdCB7IGZhc3RpZnkgfSA9IHJlcXVpcmUoJ2Zhc3RpZnknKSh7XG4gICAgbG9nZ2VyOiB0cnVlXG4gIH0pXG5sZXQgbmFtZSA9ICd5ZWh1ZGEnO1xuY29uc3QgY29sbGVjdGlvbiA9IGZhc3RpZnkubW9uZ28uZGIuY29sbGVjdGlvbigndGVzdF9jb2xsZWN0aW9uJyk7XG4vL2NvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcbi8vXG5mdW5jdGlvbiBodG0oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgICAgIDxoMT5XZWxjb21lIHRvIHRoaXMgY2FyIHJlbnRhbDwvaDE+XG4gICAgICAgICAgICA8aDI+c2VsZWN0IG9uZSBvZiB0aGUgZm9sbG93aW5nIGF2YWlsYWJsZSBjYXJzPC9oMj4gPHA+e25hbWV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuZXhwb3J0IGRlZmF1bHQgaHRtO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJwaGFzZSIsImRlZmF1bHRDb25maWciLCJ3ZWJwYWNrIiwiY29uZmlnIiwicmVzb2x2ZSIsImZhbGxiYWNrIiwiZmFzdGlmeSIsInJlcXVpcmUiLCJsb2dnZXIiLCJuYW1lIiwiY29sbGVjdGlvbiIsIm1vbmdvIiwiZGIiLCJodG0iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/hello.js\n");

/***/ }),

/***/ "fastify":
/*!**************************!*\
  !*** external "fastify" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("fastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/hello.js"));
module.exports = __webpack_exports__;

})();