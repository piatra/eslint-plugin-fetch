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
      return {
        CallExpression(node) {  
          if (node.callee.name === "fetch" && node.arguments.length === 1) {
            context.report({
              node,
              message: "Please provide an options object for fetch()",
            });
          }
        }
      };
    }
};

