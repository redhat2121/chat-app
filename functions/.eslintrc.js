module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
  },
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'consistent-return': 0,
  },
};
