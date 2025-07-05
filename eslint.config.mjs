 
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  ...eslintConfig,
  {
    plugins: {
      "jsx-a11y": jsxA11y,
      "react": react,
      "react-hooks": reactHooks,
    },
    rules: {
      // Require alt text for images to improve accessibility
      "jsx-a11y/alt-text": "warn",

      // Ensure anchor tags have valid href attributes and proper role
      "jsx-a11y/anchor-is-valid": "warn",

      // Ensure form labels are properly associated with their controls
      "jsx-a11y/label-has-associated-control": "warn",

      // Prevent usage of unknown DOM properties in React components
      "react/no-unknown-property": "warn",

      // Prevent unescaped entities in JSX text
      "react/no-unescaped-entities": "warn",

      // Enforce PascalCase for component names
      "react/jsx-pascal-case": "warn",

      // Enforce consistent sorting of props in JSX
      "react/jsx-sort-props": "warn",

      // Enforce consistent location of closing brackets in JSX
      "react/jsx-closing-bracket-location": [
        "warn",
        { location: "line-aligned" },
      ],

      // Enforce consistent indentation (2 spaces) with special handling for switch cases
      "indent": ["warn", 2, { "SwitchCase": 1 }],

      // Prevent trailing whitespace at the end of lines
      "no-trailing-spaces": "warn",

      // Enforce consistent spacing inside object literals
      "object-curly-spacing": ["warn", "always"],

      // Enforce consistent spacing around keywords
      "keyword-spacing": ["warn", { "before": true, "after": true }],

      // Enforce no space before function parentheses
      "space-before-function-paren": ["warn", "never"],

      // Prevent unused variables with specific configuration
      "no-unused-vars": ["error", { 
        "vars": "all", 
        "args": "after-used", 
        "ignoreRestSiblings": true 
      }]
    },
  },
];