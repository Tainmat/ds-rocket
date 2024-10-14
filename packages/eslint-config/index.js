module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // Garante que Prettier prevaleça sobre outras regras de formatação
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "no-console": "off",
        "function-call-argument-newline": ["error", "consistent"],
        "multiline-ternary": "off",
        camelcase: ["off", { ignoreDestructuring: true }],
      },
    },
  ],
  rules: {
    camelcase: "off",
    "no-promise-executor-return": "off",
    "no-use-before-define": "off",
    "no-alert": "off",
    "no-unused-expressions": "off",
    "no-useless-escape": "off",
    "no-shadow": "off",
    "func-names": "off",
    "no-plusplus": "off",
    "no-nested-ternary": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-boolean-value": "off",
    "react/prop-types": "off",
    "react/no-danger": "off",
    "react/no-array-index-key": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "function-declaration",
      },
    ],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".tsx", ".jsx"],
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": [
      "error",
      {
        semi: false, // Garante que Prettier e ESLint sigam a mesma regra
        singleQuote: true,
        trailingComma: "none",
        arrowParens: "avoid",
        endOfLine: "auto",
      },
    ],
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/no-duplicates": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        jsx: "never",
        js: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
