module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:react-hooks/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "linebreak-style": "off",
    "react/prop-types": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": "off"
  },
  "ignorePatterns": [
    ".eslintrc.js",
  ],

};
