const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var CSSExtract = new ExtractTextPlugin('styles.css');

const isProduction = false;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css/,
        use: CSSExtract.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [CSSExtract],
  devtool: isProduction ? 'source-map' : 'eval',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
