module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-runtime'],
    },
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        ['@babel/plugin-proposal-class-properties', {loose: true}],
      ],
    },
  },
};
