const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: this.mode,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-function-name']
        }
      }
    ]
  },
  devtool: false,
  watch: false,
  watchOptions: {
    ignored: /node_modules/
  },
  plugins:
    this.mode === 'production'
      ? [new UglifyJSPlugin() || new BabelMinifyPlugin()]
      : [new webpack.SourceMapDevToolPlugin()]
};
