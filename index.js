/**
 * @fileoverview Prevent default fetch() calls
 * @author Andrei Oprea
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports.rules = {"no-fetch-credentials": require(__dirname + "/lib/rules/no-fetch-credentials.js")};
