webpackHotUpdate("static/development/pages/posts.js",{

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));

var _posts = _interopRequireDefault(__webpack_require__(/*! ../src/posts */ "./src/posts.js"));

var _jsxFileName = "/Users/jack/Development/personal-site/pages/posts.js";

class _default extends _react.Component {
  static async getInitialProps() {
    // Get Posts from folder
    return {
      posts: _posts.default
    };
  }

  render() {
    const {
      posts
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Posts"), posts.map(({
      title,
      slug
    }) => _react.default.createElement(_link.default, {
      href: {
        pathname: '/post',
        query: {
          id: slug
        }
      },
      as: `/post/${slug}`,
      key: slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, _react.default.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, title))));
  }

}

exports.default = _default;

/***/ })

})
//# sourceMappingURL=posts.js.8ebab78fd2d8e0c32b82.hot-update.js.map