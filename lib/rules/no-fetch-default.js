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
      if (node.type === "TemplateLiteral") {
        return node.quasis[0].value.raw.startsWith("http");
      }

      if (node.type === "Literal") {
        return node.value.startsWith("http");
      }

      return false;
    };

    return {
      CallExpression(node) {  
        if (node.callee.name === "fetch" && node.arguments.length === 1) {
          if (isHTTPCall(node.arguments[0])) {
            context.report({
              node,
              message: "Please provide options for fetch() call",
            });
          }
        }
      }
    };
  }
};

