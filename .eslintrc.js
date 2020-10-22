module.exports = {
  extends: ['airbnb-base'],
  rules: {
    semi: ['error', 'never'],
    'max-len': ['error', { code: 120, tabWidth: 2 }],
    'linebreak-style': ['error', 'unix'],
    'no-tabs': 1,
  },
}
