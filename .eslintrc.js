module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  },
};
