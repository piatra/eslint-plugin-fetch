/**
 * @fileoverview Prevent fetch() calls with default arguments
 * @author Andrei Oprea
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Prevent fetch() calls with default arguments",
      category: "Fill me in",
      recommended: false
    },
    fixable: null,
    schema: [/*TODO*/]
  },

  create: function(context) {
    const isHTTPCall = (node) => {
      switch (node.type) {
        case "TemplateLiteral":
          return node.quasis[0].value.raw.startsWith("http");
        case "Literal":
          return node.value.startsWith("http");
        case "Identifier":
          return true;
        default:
          return false;
      }
    }

    return {
      CallExpression(node) {  
        if (node.callee.name === "fetch") {
          if (node.arguments.length === 1 && isHTTPCall(node.arguments[0])) {
            context.report({
              node,
              message: "Please provide options for fetch() call",
            });
          } else if (node.arguments.length > 1 &&
            !node.arguments[1].properties.find(p => p.key && p.key.name === "credentials")) {
            context.report({
              node,
              message: "Fetch call does not omit credentials",
            });
          }
        }
      }
    };
  }
};

