import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
        parser: "@typescript-eslint/parser",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: ["react", "@typescript-eslint", "react-hooks", "react-refresh"],
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "sort-imports": [
        "warn",
        {
          ignoreDeclarationSort: true,
          ignoreCase: true,
        },
      ],
      // Indentation
      indent: ["error", 2],
      // Variable Declaration
      "no-var": "error",
      // Semicolons
      semi: ["error", "always"],
      "react/react-in-jsx-scope": "off",
      // No prop-types, using typescript
      "react/prop-types": "off",
      "no-undef": "off",
      // Quotes
      quotes: ["error", "double"],
      // Arrow Functions
      "prefer-arrow-callback": "error",
      // Template Literals
      "prefer-template": "error",
      // Unused Variables
      "no-unused-vars": "error",
      // Destructuring
      "prefer-destructuring": "error",
      // No-console
      "no-console": "warn",
      // No-eval
      "no-eval": "error",
      // No-implied-eval
      "no-implied-eval": "error",
      // No-else-return
      "no-else-return": "error",
      // No-param-reassign
      "no-param-reassign": "error",
    },
  },
];
