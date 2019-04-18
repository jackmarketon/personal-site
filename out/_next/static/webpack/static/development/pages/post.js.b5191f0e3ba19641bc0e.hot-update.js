webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactMarkdown = _interopRequireDefault(__webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js"));

var _posts = _interopRequireDefault(__webpack_require__(/*! ../src/posts */ "./src/posts.js"));

var _jsxFileName = "/Users/jack/Development/personal-site/pages/post.js";

class Post extends _react.Component {
  render() {
    const {
      data: {
        title,
        writtenBy,
        date
      } = {},
      content = {}
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, title), _react.default.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Written By ", writtenBy, " | ", date), _react.default.createElement(_reactMarkdown.default, {
      source: content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }));
  }

}

exports.default = Post;
(0, _defineProperty2.default)(Post, "getInitialProps", async ({
  query: {
    id
  }
}) => (0, _objectSpread2.default)({}, _posts.default[id]));

/***/ })

})
//# sourceMappingURL=post.js.b5191f0e3ba19641bc0e.hot-update.js.map