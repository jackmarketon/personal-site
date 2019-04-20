webpackHotUpdate("static/development/pages/post.js",{

/***/ "./src/posts.js":
/*!**********************!*\
  !*** ./src/posts.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js"));

var _grayMatter = _interopRequireDefault(__webpack_require__(/*! gray-matter */ "./node_modules/gray-matter/index.js"));

// eslint-disable-next-line import/no-mutable-exports
let posts = null;

function initPosts() {
  if (posts !== null) {
    return posts;
  }

  return (ctx => {
    const keys = ctx.keys();
    const values = keys.map(ctx);
    return keys.reduce((acc, key, idx) => {
      // Slug from file name
      const slug = key.replace(/^.*[\\/]/, '').split('.').slice(0, -1).join('.');

      if (slug.indexOf('example-') === 0) {
        return acc;
      }

      const {
        default: value
      } = values[idx];
      const {
        content: document,
        data
      } = (0, _grayMatter.default)(value); // W/ No dates we have a post that notes live

      if (!data.date) {
        return acc;
      }

      return (0, _objectSpread2.default)({}, acc, {
        [slug]: (0, _objectSpread2.default)({}, data, {
          document
        })
      });
    }, {});
  })(__webpack_require__("./posts sync recursive \\.md$"));
}

posts = initPosts();
var _default = posts;
exports.default = _default;

/***/ })

})
//# sourceMappingURL=post.js.f24882f3d80b9c12ac43.hot-update.js.map