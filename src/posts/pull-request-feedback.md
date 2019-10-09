---
title: Pull Request Feedbacks Rules for Love & Sanity
overrideTitle:
date:
writtenBy: Jackson Marketon
---

Pull Requests are unanimous in most software engineering roles, however, we don't often talk about how to provide good feedback during code reviews. Let's fix that!

/// Scratch
PR Comment Feedback Standards

Request Changes for PRs which _MUST_ have changes before submitting. These changes should be called out in the following format, and then just lightly reviewed in the commit message.

Prefer not providing feedback via the comment "review" leave a comment box, instead comment directly on the code and then mark you review as comment.

Format for good code comments: _bolded comment type_ - Description Text

ex:

`*FYI* - This is more or less lodash's map, just use array.map`
`*FIX* - This sql statement is open to sql injects and and is a serious security issue`
`*QUESTION* - Why are you using Angular.JS for this?`
`*OPTIONAL* - You can use an array.reduce instead of arr.filter.map`
`*OPTIONAL* - This code runs at O(n^2) complexity, instead you can use something else for O(n) time or a dictionary for O(1) time, but it shouldn't be a problem for the scale of this code`
`*DISCUSSION NEEDED* - Architecturally this doesn't fit the expected pattern, why is that?`
`*ADDITIONAL REVIEW NEEDED* - I'm not a sql expert, but this looks like an anti-pattern, @team do you agree?`

Tips for useful PRs:
• Don't provide copy-pastable fixes, provide puesdo code or partial solutions, which encourage learning
• Try not to make language specific colloquial references/acryonms unless you include a link (for example "This could be done with a HOC" vs "This could be done with React's version of high order function (component), see this link for more info: ")
