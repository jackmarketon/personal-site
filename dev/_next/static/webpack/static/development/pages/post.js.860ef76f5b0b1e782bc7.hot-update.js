webpackHotUpdate("static/development/pages/post.js",{

/***/ "./posts/pull-request-feedback.md":
/*!****************************************!*\
  !*** ./posts/pull-request-feedback.md ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Pull Request Feedbacks Rules for Love & Sanity\noverrideTitle:\ndate:\nwrittenBy: Jackson Marketon\n---\n\nPull Requests are unanimous in most software engineering roles, however, we don't often talk about how to provide good feedback during code reviews. Let's fix that!\n\n/// Scratch\nPR Comment Feedback Standards\n\nRequest Changes for PRs which _MUST_ have changes before submitting. These changes should be called out in the following format, and then just lightly reviewed in the commit message.\n\nPrefer not providing feedback via the comment \"review\" leave a comment box, instead comment directly on the code and then mark you review as comment.\n\nFormat for good code comments: _bolded comment type_ - Description Text\n\nex:\n\n`*FYI* - This is more or less lodash's map, just use array.map`\n`*FIX* - This sql statement is open to sql injects and and is a serious security issue`\n`*QUESTION* - Why are you using Angular.JS for this?`\n`*OPTIONAL* - You can use an array.reduce instead of arr.filter.map`\n`*OPTIONAL* - This code runs at O(n^2) complexity, instead you can use something else for O(n) time or a dictionary for O(1) time, but it shouldn't be a problem for the scale of this code`\n`*DISCUSSION NEEDED* - Architecturally this doesn't fit the expected pattern, why is that?`\n`*ADDITIONAL REVIEW NEEDED* - I'm not a sql expert, but this looks like an anti-pattern, @team do you agree?`\n\nTips for useful PRs:\n• Don't provide copy-pastable fixes, provide puesdo code or partial solutions, which encourage learning\n• Try not to make language specific colloquial references/acryonms unless you include a link (for example \"This could be done with a HOC\" vs \"This could be done with React's version of high order function (component), see this link for more info: \")\n");

/***/ })

})
//# sourceMappingURL=post.js.860ef76f5b0b1e782bc7.hot-update.js.map