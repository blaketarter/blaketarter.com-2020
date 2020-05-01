module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "prettier"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "sort-imports": ["error", {
      "ignoreDeclarationSort": true
    }],
    "import/export": "error",
    "import/order": ["error", {
      "newlines-between": "never",
      "alphabetize": {
        "order": "asc"
      },
    }],
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-useless-path-segments": "error"
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    React: "writable",
  },
}
