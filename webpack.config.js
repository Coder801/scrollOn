const path = require('path');
const webpack = require('webpack');

module.exports = env => {
  return {
    entry: {
      scrollOn: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      libraryTarget: 'var',
      library: 'ScrollOn'
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
    }
  };
};

if (this.mode === 'production') {
  module.exports.plugins.push(new UglifyJSPlugin(), new BabelMinifyPlugin());
} else if (this.mode === 'development') {
  module.exports.plugins.push(new webpack.SourceMapDevToolPlugin());
}
