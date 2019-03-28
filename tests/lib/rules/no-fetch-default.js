"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-fetch-default.js");
const RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("no-fetch-default", rule, {
  valid: [
    "fetch(\"http://foo.com\", {})",
  ],
  invalid: [
    {
      code: "fetch(\"http://foo.com\")",
      errors: [{
        message: "Please provide options for fetch() call",
        type: "CallExpression",
      }]
    }
  ]
});
