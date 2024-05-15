module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@babel/eslint-parser",
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  globals: {
    BASE_URL: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    babelOptions: {
      presets: ["@babel/react"],
    },
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    "no-unused-vars": ["error", {
      varsIgnorePattern: "^_",
      args: "after-used",
      argsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      ignoreRestSiblings: true,
    }],
    "no-empty": ["error", { allowEmptyCatch: true }],
    "react/prop-types": [2, { skipUndeclared: true }],
  },
};
