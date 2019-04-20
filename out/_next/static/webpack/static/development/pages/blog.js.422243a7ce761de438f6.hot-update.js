webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./posts sync recursive \\.md$":
/*!**************************!*\
  !*** ./posts sync \.md$ ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./example-custom-title.md": "./posts/example-custom-title.md",
	"./example-post.md": "./posts/example-post.md",
	"./example-template.md": "./posts/example-template.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./posts sync recursive \\.md$";

/***/ }),

/***/ "./posts/example-template.md":
/*!***********************************!*\
  !*** ./posts/example-template.md ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

})
//# sourceMappingURL=blog.js.422243a7ce761de438f6.hot-update.js.map