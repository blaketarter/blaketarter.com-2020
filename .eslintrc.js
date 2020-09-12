module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/recommended",
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
    "react-hooks",
    "import",
    "jsx-a11y",
    "prettier",
    "testing-library",
    "jest-dom",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],
    "import/export": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-useless-path-segments": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    React: "writable",
  },
  overrides: [{ files: ["**/__tests__/**"], env: { jest: true } }],
}
