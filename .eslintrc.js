module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  },
  'rules': {
    'linebreak-style': 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
}