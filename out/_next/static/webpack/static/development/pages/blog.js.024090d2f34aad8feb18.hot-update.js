webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
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

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _dateFns = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _hero = _interopRequireDefault(__webpack_require__(/*! ../components/hero */ "./components/hero/index.js"));

var _body = _interopRequireDefault(__webpack_require__(/*! ../components/body */ "./components/body/index.js"));

var _listTitle = _interopRequireDefault(__webpack_require__(/*! ../components/listTitle */ "./components/listTitle/index.js"));

var _posts = _interopRequireDefault(__webpack_require__(/*! ../src/posts */ "./src/posts.js"));

var _jsxFileName = "/Users/jack/Development/personal-site/pages/blog.js";

const Anchor = _styledComponents.default.a.withConfig({
  displayName: "blog__Anchor",
  componentId: "sc-1rboks0-0"
})(["cursor:pointer;display:inline;text-direction:none;"]);

const LinkWrapper = _styledComponents.default.div.withConfig({
  displayName: "blog__LinkWrapper",
  componentId: "sc-1rboks0-1"
})(["margin:1rem 0 1rem 1rem;"]);

const PostTitle = _styledComponents.default.span.withConfig({
  displayName: "blog__PostTitle",
  componentId: "sc-1rboks0-2"
})(["font-size:1.2rem;"]);

const PostedDate = _styledComponents.default.span.withConfig({
  displayName: "blog__PostedDate",
  componentId: "sc-1rboks0-3"
})(["font-style:italic;padding:0 0 0 0.5rem;"]);

const ShortDescription = _styledComponents.default.span.withConfig({
  displayName: "blog__ShortDescription",
  componentId: "sc-1rboks0-4"
})(["display:block;padding:0.5rem 0 0;"]);

const Post = ({
  title,
  date,
  shortDescription = false
}) => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(PostTitle, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: void 0
}, title), _react.default.createElement(PostedDate, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: void 0
}, (0, _dateFns.format)(date, 'MMM D, YY')), shortDescription && _react.default.createElement(ShortDescription, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: void 0
}, shortDescription, " Read More..."));

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
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_hero.default, {
      image: "blog",
      tagline: "Reveries and Contemplation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), _react.default.createElement(_body.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, _react.default.createElement(_listTitle.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Blog"), posts.length === 0 ? 'No Posts' : (0, _keys.default)(posts).map(slug => _react.default.createElement(LinkWrapper, {
      key: slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, _react.default.createElement(_link.default, {
      href: {
        pathname: '/post',
        query: {
          id: slug
        }
      },
      as: `/post/${slug}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, _react.default.createElement(Anchor, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, _react.default.createElement(Post, (0, _extends2.default)({}, posts[slug], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }))))))));
  }

}

exports.default = _default;

/***/ })

})
//# sourceMappingURL=blog.js.024090d2f34aad8feb18.hot-update.js.map