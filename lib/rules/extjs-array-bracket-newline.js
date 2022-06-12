/* eslint-disable no-undef */
/**
 * @fileoverview ExtJs block array
 * @author Scott Meesseman
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
    meta: {
        type: "suggestion", // `problem`, `suggestion`, or `layout`
        docs: {
        description: "ExtJs block array",
        category: "Fill me in",
        recommended: false,
        url: null, // URL to the documentation page for this rule
        },
        fixable: null, // Or `code` or `whitespace`
        schema: [], // Add a schema if the rule has options
    },

    create(context)
    {
        return {
            Property(node)
            {
                if (node.key.type === "Identifier" &&  node.value.type === 'ArrayExpression')
                {
                    if (node.value.elements.length > 1)
                    {
                        var firstElement = node.value.elements[0];
                        //
                        // Ensure first object brace is not on same line as array bracket
                        //
                        if (firstElement.type === "ObjectExpression")
                        {
                            if (node.loc.start.line !== node.value.loc.start.line)
                            {
                                context.report({
                                    node,
                                    message: "Opening array bracket must follow the property name on the same line"
                                });
                            }
                            else if (node.key.loc.end.column !== node.value.loc.start.column - 2)
                            {
                                context.report({
                                    node,
                                    message: "Opening array bracket must follow the property name by one space"
                                });
                            }
                            //
                            // Ensure last object brace is on same line as array bracket
                            //
                            var lastElement = node.value.elements[node.value.elements.length - 1];
                            if (lastElement.loc.end.line !== node.value.loc.end.line || lastElement.loc.end.column !== node.value.loc.end.column - 1)
                            {
                                if (lastElement.loc.start.line !== lastElement.loc.end.line)
                                {
                                    context.report({
                                        node,
                                        message: "Closing array bracket must immediately follow last object brace"
                                    });
                                }
                            }
                        }
                    }
                }
            }

            // ArrayExpression(node)
            // {
            //         // for (const e of node.value.elements)
            //         // {
            //         if (node.elements.length > 1)
            //         {
            //             var firstElement = node.elements[0];
            //             //
            //             // Ensure first object brace is not on same line as array bracket
            //             //
            //             if (firstElement.type === "ObjectExpression")
            //             {
            //                 if (firstElement.loc.start.line !== node.loc.start.line)
            //                 {
            //                     context.report({
            //                         node,
            //                         message: "Opening array bracket must be on same line as property name"
            //                     });
            //                 }
            //                 //
            //                 // Ensure last object brace is on same line as array bracket
            //                 //
            //                 var lastElement = node.elements[node.elements.length - 1];
            //                 if (lastElement.loc.end.line !== node.loc.end.line)
            //                 {
            //                     context.report({
            //                         node,
            //                         message: "Closing array bracket must be on same line as property name"
            //                     });
            //                 }
            //             }
            //         }
            // }
        };
    },
};
