const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/js/index.js'],
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],

  module:{
    rules: [
      {
        test: /\.js$/, //we need the js files, hence they must end with .js
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      }
    ],
  }
};