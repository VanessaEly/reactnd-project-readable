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
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  },
  'rules': {
    'linebreak-style': 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
  },
}