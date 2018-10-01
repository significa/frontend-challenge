const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = (_, { mode = 'development' }) => ({
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  mode,
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    host: '0.0.0.0'
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new Dotenv()
  ],
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(jpg|jpeg|png)$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-react-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          options: {
            // set babel env to webpack mode
            forceEnv: mode
          },
          loader: 'babel-loader'
        }
      }
    ]
  }
})
