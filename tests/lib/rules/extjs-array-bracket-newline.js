/**
 * @fileoverview ExtJs block array
 * @author Scott Meesseman
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/extjs-array-bracket-newline"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("extjs-array-bracket-newline", rule, {
  valid: [
    "Ext.define('', { property: [{ a: 0 }, { b: 1 }] });",
    "Ext.define('', { property: [\n{ a: 0 }, { b: 1 }] });"
  ],

  invalid: [
    {
      code: "Ext.define('', { property: [{ a: 0 }, { b: 1 }\n] \n });",
      errors: [{ message: "Closing array bracket must immediately follow last object brace", type: "Property" }],
    },
    {
      code: "Ext.define('', { property: \n[{ a: 0 }, { b: 1 }] });",
      errors: [{ message: "Opening array bracket must follow the property name on the same line", type: "Property" }],
    },
    {
      code: `Ext.define('A.b.c.D',
{
  property: [
    { a: 0 },
    { b: 1 }
  ]
});`,
      errors: [{ message: "Closing array bracket must immediately follow last object brace", type: "Property" }],
    },
    {
      code: `Ext.define('A.b.c.D',
{
  property:  [
    { a: 0 },
    { b: 1 }]
});`,
      errors: [{ message: "Opening array bracket must follow the property name by one space", type: "Property" }],
    },
    {
      code: `Ext.define('A.b.c.D',
{
  property: [
    { a: 0 },
    { b: 1 } ]
});`,
      errors: [{ message: "Closing array bracket must immediately follow last object brace", type: "Property" }],
    },
    {
      code: `Ext.define('A.b.c.D',
{
  property:
  [
    { a: 0 },
    { b: 1 }
  ]
});`,
      errors: [{ message: "Opening array bracket must follow the property name on the same line", type: "Property" },
               { message: "Closing array bracket must immediately follow last object brace", type: "Property" }],
    }
  ],
});
