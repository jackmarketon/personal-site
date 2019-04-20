webpackHotUpdate("static/development/pages/resume.js",{

/***/ "./components/roleList/index.js":
/*!**************************************!*\
  !*** ./components/roleList/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _listTitle = _interopRequireDefault(__webpack_require__(/*! ../listTitle */ "./components/listTitle/index.js"));

var _jsxFileName = "/Users/jack/Development/personal-site/components/roleList/index.js";

const List = _styledComponents.default.dl.withConfig({
  displayName: "roleList__List",
  componentId: "m99kar-0"
})(["align-content:flex-start;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between;max-height:30rem;margin:-1rem 0;width:100%;"]);

const ListItem = _styledComponents.default.div.withConfig({
  displayName: "roleList__ListItem",
  componentId: "m99kar-1"
})(["margin:1rem 0;width:33.3333333%;"]);

const RoleOrganization = _styledComponents.default.dt.withConfig({
  displayName: "roleList__RoleOrganization",
  componentId: "m99kar-2"
})(["font-size:1.5rem;font-weight:800;"]);

const RoleInfo = _styledComponents.default.dd.withConfig({
  displayName: "roleList__RoleInfo",
  componentId: "m99kar-3"
})(["border-left:2px solid ", ";margin:0.5rem 0 0 1rem;padding:0 0 0 1rem;*{margin:0;padding:0.25rem 0;&:first-child{padding-top:0;}&:last-child{padding-bottom:0;}}"], ({
  theme
}) => theme.color.ternary);

const RoleTitle = _styledComponents.default.h3.withConfig({
  displayName: "roleList__RoleTitle",
  componentId: "m99kar-4"
})(["font-weight:500;font-size:1.2rem;"]);

const RoleTeam = _styledComponents.default.p.withConfig({
  displayName: "roleList__RoleTeam",
  componentId: "m99kar-5"
})(["font-size:0.8rem;padding:0 0 1rem 1rem;"]);

const RoleDuration = _styledComponents.default.p.withConfig({
  displayName: "roleList__RoleDuration",
  componentId: "m99kar-6"
})(["font-style:italic;"]);

const RoleLocation = _styledComponents.default.p.withConfig({
  displayName: "roleList__RoleLocation",
  componentId: "m99kar-7"
})(["font-style:italic;"]);

const RoleDescription = _styledComponents.default.p.withConfig({
  displayName: "roleList__RoleDescription",
  componentId: "m99kar-8"
})([""]);

const RoleListItem = ({
  organization,
  title,
  startDate,
  endDate = false,
  team = '',
  location,
  description = ''
}) => {
  const key = `${organization}+${title}+${startDate}`;
  const duration = endDate ? `${startDate} - ${endDate}` : `${startDate} - Present`;
  return _react.default.createElement(ListItem, {
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: void 0
  }, _react.default.createElement(RoleOrganization, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: void 0
  }, organization), _react.default.createElement(RoleInfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: void 0
  }, _react.default.createElement(RoleTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: void 0
  }, title), team && _react.default.createElement(RoleTeam, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: void 0
  }, team), _react.default.createElement(RoleDuration, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: void 0
  }, duration), _react.default.createElement(RoleLocation, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: void 0
  }, location), description && _react.default.createElement(RoleDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: void 0
  }, description)));
};

const RoleList = ({
  title,
  roles
}) => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_listTitle.default, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: void 0
}, title), _react.default.createElement(List, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: void 0
}, roles.map(RoleListItem)));

var _default = RoleList;
exports.default = _default;

/***/ })

})
//# sourceMappingURL=resume.js.c8ad2dee591d98022301.hot-update.js.map