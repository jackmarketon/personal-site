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

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _hero = _interopRequireDefault(__webpack_require__(/*! ../components/hero */ "./components/hero/index.js"));

var _body = _interopRequireDefault(__webpack_require__(/*! ../components/body */ "./components/body/index.js"));

var _listTitle = _interopRequireDefault(__webpack_require__(/*! ../components/listTitle */ "./components/listTitle/index.js"));

var _posts = _interopRequireDefault(__webpack_require__(/*! ../src/posts */ "./src/posts.js"));

var _jsxFileName = "/Users/jack/Development/personal-site/pages/post.js";

const Byline = _styledComponents.default.span.withConfig({
  displayName: "post__Byline",
  componentId: "z1rb2z-0"
})(["border:1px solid ", ";border-bottom:none;border-right:none;border-top:none;padding:0 0 0 0.8rem;margin:0 0 0 3rem;"], ({
  theme
}) => theme.color.ternary);

const Content = (0, _styledComponents.default)(_reactMarkdown.default).withConfig({
  displayName: "post__Content",
  componentId: "z1rb2z-1"
})(["font-size:1.1rem;line-height:1.7rem;padding:0 3rem;"]);

class Post extends _react.Component {
  render() {
    const {
      title,
      overrideTitle = 'Reveries and Contemplation',
      writtenBy,
      date,
      document
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_hero.default, {
      image: "blog",
      tagline: overrideTitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), _react.default.createElement(_body.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, _react.default.createElement(_listTitle.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, title), _react.default.createElement(Byline, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, writtenBy, " | ", date), _react.default.createElement(Content, {
      source: document,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })));
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
//# sourceMappingURL=post.js.968c52c226963e206ffb.hot-update.js.map