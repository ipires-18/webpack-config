const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    devMiddleware: {
      publicPath: '/dist/',
    },
    port: 8000,
    hot: 'only',
  },
  plugins: [new HtmlWebpackPlugin()],
};
