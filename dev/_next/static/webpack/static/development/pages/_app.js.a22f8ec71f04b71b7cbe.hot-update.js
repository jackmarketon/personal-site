webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/globalStyle/index.js":
/*!*****************************************!*\
  !*** ./components/globalStyle/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

// Global Styles
var _default = _styledComponents.createGlobalStyle`
  body {
    background: ${({
  theme
}) => theme.color.background};
    font-size: ${({
  theme
}) => theme.font.fontSize.root};
    font-family: ${({
  theme
}) => theme.font.fontFamily.sansSerif};
    margin: 0;
    * {
      box-sizing: border-box;
    }

    /* Make clicks pass-through */
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: ${({
  theme
}) => theme.color.primary};
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
    }

    /* Fancy blur effect */
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${({
  theme
}) => theme.color.primary}, 0 0 5px ${({
  theme
}) => theme.color.primary};
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }

    /* Remove these to get rid of the spinner */
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${({
  theme
}) => theme.color.primary};
      border-left-color: ${({
  theme
}) => theme.color.primary};
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .bookTitle {
      font-style: italic;
    }
  }

  head {
    display: none;
  }
`;

exports.default = _default;

/***/ })

})
//# sourceMappingURL=_app.js.a22f8ec71f04b71b7cbe.hot-update.js.map