const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    test: {
      import: './src/array.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
  ],
};
