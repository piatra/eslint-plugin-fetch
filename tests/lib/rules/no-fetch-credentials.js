"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-fetch-credentials.js");
const RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("no-fetch-default", rule, {
  valid: [
    "fetch(\"http://foo.com\", {credentials: \"omit\"})",
  ],
  invalid: [
    {
      code: "fetch(\"http://foo.com\")",
      errors: [{
        message: "Please provide options for fetch() call",
        type: "CallExpression",
      }]
    },
    {
      code: "fetch(bar)",
      errors: [{
        message: "Please provide options for fetch() call",
        type: "CallExpression",
      }]
    },
    {
      code: "fetch(bar, {})",
      errors: [{
        message: "Fetch call does not omit credentials",
        type: "CallExpression",
      }]
    }
  ]
});
